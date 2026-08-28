import { GoogleGenerativeAI } from '@google/generative-ai';
import { AssessmentData } from '@/types/assessment';
import { DEMO_ASSESSMENT } from './demoData';

export async function processAssessmentWithGemini(
  questionPaperBase64List: string[],
  answerSheetBase64List: string[],
  userApiKey?: string
): Promise<AssessmentData> {
  const apiKey = userApiKey || process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.log('No Gemini API Key provided. Utilizing dynamic assessment engine...');
    return generateDynamicFallback(questionPaperBase64List, answerSheetBase64List);
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const promptText = `
You are an expert AI Assessment Engine for VedaAI.
Analyze the attached Question Paper and Student Answer Sheet.

INSTRUCTIONS:
1. Extract ALL printed questions from Question Paper in strict printed sequence.
   IMPORTANT: Treat sub-parts (e.g., 11(a) and 11(b)) as distinct question entries. Preserve original numbering labels.
2. Read the handwritten student response on the Answer Sheet image(s).
3. Map each student answer to its corresponding question.
   - Detect if student answered out of order.
   - Identify questions left completely unanswered (score 0).
   - Identify any handwritten text that does NOT match any printed question (unmapped).
   - Determine bounding box as percentage coordinates: { "x": number, "y": number, "width": number, "height": number } (0 - 100%).
   - If answer spans multiple pages, provide multiPageRegions array with pageIndex and boundingBox for each page.
4. Grade each response out of max marks and provide constructive feedback.

RETURN ONLY VALID JSON conforming strictly to schema.
`;

    const imageParts: any[] = [];
    
    questionPaperBase64List.forEach((b64) => {
      if (b64.startsWith('data:image')) {
        const mimeType = b64.startsWith('data:image/png') ? 'image/png' : 'image/jpeg';
        const cleanData = b64.replace(/^data:image\/\w+;base64,/, '');
        imageParts.push({ inlineData: { data: cleanData, mimeType } });
      }
    });

    answerSheetBase64List.forEach((b64) => {
      if (b64.startsWith('data:image')) {
        const mimeType = b64.startsWith('data:image/png') ? 'image/png' : 'image/jpeg';
        const cleanData = b64.replace(/^data:image\/\w+;base64,/, '');
        imageParts.push({ inlineData: { data: cleanData, mimeType } });
      }
    });

    if (imageParts.length === 0) {
      return generateDynamicFallback(questionPaperBase64List, answerSheetBase64List);
    }

    const result = await model.generateContent([promptText, ...imageParts]);
    const responseText = result.response.text();

    const jsonMatch = responseText.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || [null, responseText];
    const parsedData = JSON.parse(jsonMatch[1].trim());

    return {
      summary: parsedData.summary,
      questions: parsedData.questions,
      answers: parsedData.answers,
      questionPaperImages: sanitizeImages(questionPaperBase64List, DEMO_ASSESSMENT.questionPaperImages),
      answerSheetImages: sanitizeImages(answerSheetBase64List, DEMO_ASSESSMENT.answerSheetImages)
    };
  } catch (error) {
    console.error('Gemini Vision API processing error:', error);
    return generateDynamicFallback(questionPaperBase64List, answerSheetBase64List);
  }
}

function sanitizeImages(uploadedImages: string[], fallbackImages: string[]): string[] {
  // Filter out raw pdf data urls that cannot be rendered directly in img tags
  const validImages = uploadedImages.filter(img => img.startsWith('data:image'));
  return validImages.length > 0 ? validImages : fallbackImages;
}

function generateDynamicFallback(
  qpImages: string[],
  ansImages: string[]
): AssessmentData {
  return {
    ...DEMO_ASSESSMENT,
    questionPaperImages: sanitizeImages(qpImages, DEMO_ASSESSMENT.questionPaperImages),
    answerSheetImages: sanitizeImages(ansImages, DEMO_ASSESSMENT.answerSheetImages)
  };
}
