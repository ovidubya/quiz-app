import { Answers } from "../types/global";

const localStorageKeyName = "answers";

export const saveAnswer = (answer: any): void => {
  try {
    let answers: Answers = JSON.parse(
      localStorage.getItem(localStorageKeyName)
    );
    answers[answer.questionNumber] = answer;
    localStorage.setItem(localStorageKeyName, JSON.stringify(answers));
  } catch (e) {
    console.log(`No localStorage item ${localStorageKeyName} found. `);
    localStorage.setItem(
      localStorageKeyName,
      JSON.stringify({
        [answer.questionNumber]: answer,
      })
    );
  }
};

export const getAnswers = (): Answers => {
  try {
    return JSON.parse(localStorage.getItem(localStorageKeyName));
  } catch (e) {
    console.log(`No localStorage item ${localStorageKeyName} found. `);
    return {};
  }
};

export const resetAnswers = (): void => {
  localStorage.removeItem(localStorageKeyName);
};
