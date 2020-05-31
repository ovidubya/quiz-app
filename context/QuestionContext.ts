import * as React from "react";
import { QuestionContextType, Mode } from "../types/global";

const initData: QuestionContextType = {
  currentQuestionIndex: 0,
  setCurrentQuestionIndex: () => {},
  questions: [],
  setQuestions: () => {},
  setAnswers: () => {},
  answers: {},
  mode: "",
  setMode: Function,
};
export const QuestionContext = React.createContext<QuestionContextType>(
  initData
);
