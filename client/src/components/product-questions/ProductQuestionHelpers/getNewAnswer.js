const getNewAnswer = (questionList, questionId, newAnswers) => {
  const newList = questionList.map((question) => {
    if (question.question_id === questionId) {
      question.answers = newAnswers;
    }
    return question;
  });

  return newList;
};

export default getNewAnswer;
