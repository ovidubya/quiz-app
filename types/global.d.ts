declare var hljs;

export type Choice = {
  text: string;
  correct: boolean;
  remove?: true;
};
export type Question = {
  id: number;
  questionText: string;
  choices: Choice[];
  hasCode?: boolean;
  codeText?: string;
};

export type Answer = {
  questionNumber: number;
  questionText: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
};

export type Answers = {
  [key: string]: Answer;
};

export type QuestionContextType = {
  currentQuestionIndex: number;
  setCurrentQuestionIndex: Function;
  questions: Array<Question>;
  setQuestions: Function;
  setAnswers: Function;
  answers: Answers;
  mode: string;
  setMode: Function;
};
