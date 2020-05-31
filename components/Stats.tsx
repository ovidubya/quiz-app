import * as React from "react";
import { QuestionContext } from "../context/QuestionContext";
import styled, { css } from "styled-components";
import { Lifeline } from "./Lifeline";

type StatsProps = {};

const StatsContainer = styled.div`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StatusBoard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--primary);
`;

type QuestionNumberProps = {
  isVisted: boolean;
  isCurrent: boolean;
};

const QuestionNumber = styled.div<QuestionNumberProps>`
align-self: center;
font-size: 1.5rem;
letter-spacing: 3px;
text-align: center;
  ${(props) =>
    props.isVisted &&
    css`
      color: #7dd97b;
    `}
  ${(props) =>
    props.isCurrent &&
    css`
      color: #88ff5c;
    `}
    ${(props) =>
      !props.isCurrent &&
      !props.isVisted &&
      css`
        color: white;
      `}
`;

export const Stats: React.SFC<StatsProps> = () => {
  const { questions, currentQuestionIndex } = React.useContext(QuestionContext);

  return (
    <StatsContainer>
      <StatusBoard>
        {[...questions].reverse().map((question, index) => {
          return (
            <QuestionNumber
              isVisted={question.id < currentQuestionIndex}
              isCurrent={question.id === currentQuestionIndex}
              key={index}
            >
              <span>
                {question.id + 1} : {(question.id + 1) * 10}p
              </span>
            </QuestionNumber>
          );
        })}
      </StatusBoard>
      <Lifeline />
    </StatsContainer>
  );
};
