import * as React from "react";
import * as ReactDOM from "react-dom";
import Questions from "./components/Questions";
import { Stats } from "./components/Stats";
import { QuestionContext } from "./context/QuestionContext";

export interface AppProps {}

import { JSQuestions } from "./questions/questions";
import { resetAnswers } from "./utils/AnswerRecorder";
import { QuestionsPage } from "./views/QuestionsPage";
import { AnswersPage } from "./views/AnswersPage";


export const enum Mode {
  QUESTION_VIEW,
  ANSWERS_VIEW,
}


resetAnswers()

const App: React.FC<AppProps> = () => {
  const [questions, setQuestions] = React.useState(JSQuestions);
  const [answers, setAnswers] = React.useState(localStorage.getItem('answers') != null ? JSON.parse(localStorage.getItem('answers')) : {}))
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [mode, setMode] = React.useState<'QUESTION_VIEW' | 'ANSWERS_VIEW'>('QUESTION_VIEW');

  return (
    <QuestionContext.Provider
      value={{
        currentQuestionIndex,
        setCurrentQuestionIndex,
        questions: JSQuestions,
        setQuestions: setQuestions,
        answers: answers,
        setAnswers: setAnswers,
        mode: mode,
        setMode: setMode
      }}
    >
      {mode === 'QUESTION_VIEW' ? <QuestionsPage/> : <AnswersPage/>}
      
    </QuestionContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
