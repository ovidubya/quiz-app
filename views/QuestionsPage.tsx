import * as React from "react";
import Questions from "../components/Questions";
import { Stats } from "../components/Stats";
import styled from "styled-components";

type QuestionsPageProps = {};

const Container = styled.div`
  height: 95vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  @media screen and (max-width: 728px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

const QuestionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 2fr;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 8fr;
`;

export const QuestionsPage: React.FC<QuestionsPageProps> = () => {
  return (
    <Container>
      <QuestionsContainer>
        <Questions />
      </QuestionsContainer>
      <StatsContainer>
        <Stats />
      </StatsContainer>
    </Container>
  );
};
