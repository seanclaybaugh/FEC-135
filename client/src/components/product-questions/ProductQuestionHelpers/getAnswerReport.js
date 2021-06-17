const getAnswerReport = (list, answerId, questionId) => {
  const newList = list.map((question) => {
    if (question.question_id === questionId) {
      delete question.answers[answerId];
    }
    return question;
  });
  return newList;
};

export default getAnswerReport;
