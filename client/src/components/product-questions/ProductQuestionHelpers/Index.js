export function getAnswerHelpful(questionList, answerId, questionId) {
  const newList = questionList.map((question) => {
    if (question.question_id === questionId) {
      question.answers[answerId].helpfulness++;
    }
    return question;
  });
  return newList;
};

export function getQuestionHelpful(questionList, id) {
  const newList = questionList.map((question) => {
    if (question.question_id === id) {
      question.question_helpfulness++;
    }
    return question;
  });
  return newList;
};

export function getAnswerReport(list, answerId, questionId) {
  const newList = list.map((question) => {
    if (question.question_id === questionId) {
      delete question.answers[answerId];
    }
    return question;
  });
  return newList;
};

export function getNewAnswer(questionList, questionId, newAnswers) {
  const newList = questionList.map((question) => {
    if (question.question_id === questionId) {
      question.answers = newAnswers;
    }
    return question;
  });

  return newList;
};

export function getSearchText(questionList, text) {
  const searchTextLowerCase = text.toLowerCase();
  const results = questionList.filter((question) => {
    if (question.question_body.toLowerCase().indexOf(searchTextLowerCase) !== -1) {
      return true;
    }

    const { answers } = question;

    for (const key in answers) {
      if (answers[key].body.toLowerCase().indexOf(searchTextLowerCase) !== -1) {
        return true;
      }
    }
  });
  return results;
};


export default {
  getAnswerHelpful,
  getQuestionHelpful,
  getAnswerReport,
  getNewAnswer,
  getSearchText
};
