export interface Question {
  id: string;
  numberLabel: string; // e.g. "11 (a)", "11 (b)", "1", "2"
  parentNumber?: string | null; // e.g. "11"
  orderIndex: number;
  text: string;
  maxMarks: number;
  sampleSolution?: string;
}

export interface BoundingBox {
  x: number;      // Percentage (0 - 100)
  y: number;      // Percentage (0 - 100)
  width: number;  // Percentage (0 - 100)
  height: number; // Percentage (0 - 100)
}

export interface MultiPageRegion {
  pageIndex: number;
  boundingBox: BoundingBox;
}

export interface AnswerMapping {
  id: string;
  questionId: string | null; // null if unmapped answer
  detectedQuestionLabel: string; // e.g. "Ans 11(a)", "Q3", or "Unlabelled response"
  pageIndex: number; // Main page (0-indexed)
  boundingBox: BoundingBox;
  multiPageRegions?: MultiPageRegion[];
  extractedText: string;
  isOutOfOrder: boolean;
  status: 'graded' | 'unanswered' | 'unmapped' | 'needs_review';
  score: number;
  maxScore: number;
  evaluation: 'correct' | 'partial' | 'incorrect' | 'unanswered';
  feedback: string;
  keyConceptsFound: string[];
  keyConceptsMissing: string[];
}

export interface AssessmentSummary {
  assessmentTitle: string;
  studentName: string;
  subject: string;
  totalMarksObtained: number;
  totalMaxMarks: number;
  percentage: number;
  questionsCount: number;
  answeredCount: number;
  unansweredCount: number;
  outOfOrderCount: number;
  unmappedCount: number;
  overallFeedback: string;
  strengths: string[];
  improvements: string[];
}

export interface AssessmentData {
  questions: Question[];
  answers: AnswerMapping[];
  summary: AssessmentSummary;
  questionPaperImages: string[];
  answerSheetImages: string[];
}

export type ProcessingStep = 
  | 'idle' 
  | 'uploading' 
  | 'extracting_questions' 
  | 'scanning_answers' 
  | 'mapping' 
  | 'complete' 
  | 'error';

export interface ProcessingProgress {
  step: ProcessingStep;
  progress: number; // 0 - 100
  message: string;
}

export type FilterStatus = 'all' | 'graded' | 'unanswered' | 'out_of_order' | 'unmapped';
