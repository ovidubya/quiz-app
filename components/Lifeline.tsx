import * as React from "react";
import styled, { css } from "styled-components";

type LifelineProps = {};
import googleIcon from "../google-icon.svg";
import { QuestionContext } from "../context/QuestionContext";
const LifelineContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const LifelineItem = styled.button`
  display: flex;
  align-items: center;
  border: 2px solid var(--primary);
  border-radius: 4px;
  color: white;
  font-size: 2rem;
  height: 100px;
  cursor: pointer;
  background: transparent;
  filter: ${(props) => (props.disabled ? "grayscale(1)" : "grayscale0")};
  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        background-color: var(--primary);
      }
    `}

  & span {
    width: 100px;
  }
  & img {
    height: 70px;
    width: 100px;
  }
`;

export const Lifeline: React.SFC<LifelineProps> = () => {
  const { currentQuestionIndex, questions, setQuestions } = React.useContext(
    QuestionContext
  );
  const [disableFifthyFifthy, setDisableFifthyFifthy] = React.useState(false);
  const [disableGoogle, setDisableGoogle] = React.useState(false);

  const removeTwoWrongAnswers = () => {
    const willRemove = confirm("You would like to remove two wrong answers?");
    if (willRemove) {
      let questionArrayCopy = [...questions];

      let wrongAnswers = questionArrayCopy[currentQuestionIndex].choices.filter(
        (question) => question.correct === false
      );

      const aWrongAnswer = wrongAnswers.pop();
      wrongAnswers = wrongAnswers.map((answer) => {
        return {
          ...answer,
          remove: true,
        };
      });
      let correctAnswer = questionArrayCopy[
        currentQuestionIndex
      ].choices.filter((question) => question.correct === true);

      questionArrayCopy[currentQuestionIndex].choices = [
        aWrongAnswer,
        ...wrongAnswers,
        ...correctAnswer,
      ];
      setQuestions(questionArrayCopy);
      setDisableFifthyFifthy(true);
    }
  };

  const openChromeWindow = () => {
    const willGoogle = confirm(
      "You will have 30 seconds to google whatever you like"
    );
    if (willGoogle) {
      setDisableGoogle(true);
      const newWindow = window.open(
        "http://www.google.com",
        "_blank",
        "toolbar=0,location=0,menubar=0"
      );
      setTimeout(() => {
        newWindow?.close();
      }, 30000);
    }
  };
  return (
    <LifelineContainer>
      <LifelineItem
        disabled={disableFifthyFifthy}
        onClick={() => removeTwoWrongAnswers()}
      >
        <span>50 / 50</span>
      </LifelineItem>
      <LifelineItem disabled={disableGoogle} onClick={() => openChromeWindow()}>
        <img src={googleIcon} />
      </LifelineItem>
    </LifelineContainer>
  );
};
