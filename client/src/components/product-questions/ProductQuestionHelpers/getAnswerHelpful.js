const getAnswerHelpful = (questionList, answerId, questionId) => {
  const newList = questionList.map((question) => {
    if (question.question_id === questionId) {
      question.answers[answerId].helpfulness++;
    }
    return question;
  });
  return newList;
};

export default getAnswerHelpful;
