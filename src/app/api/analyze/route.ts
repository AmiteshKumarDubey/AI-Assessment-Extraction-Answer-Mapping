import { NextRequest, NextResponse } from 'next/server';
import { processAssessmentWithGemini } from '@/lib/gemini';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { questionPaperImages, answerSheetImages, apiKey } = body;

    if (!questionPaperImages || !answerSheetImages || 
        !Array.isArray(questionPaperImages) || !Array.isArray(answerSheetImages)) {
      return NextResponse.json(
        { error: 'Missing questionPaperImages or answerSheetImages arrays.' },
        { status: 400 }
      );
    }

    const assessmentData = await processAssessmentWithGemini(
      questionPaperImages,
      answerSheetImages,
      apiKey
    );

    return NextResponse.json(assessmentData);
  } catch (err: any) {
    console.error('API /api/analyze error:', err);
    return NextResponse.json(
      { error: err.message || 'Internal server error processing assessment.' },
      { status: 500 }
    );
  }
}
