const getQuestionHelpful = (questionList, id) => {
  const newList = questionList.map((question) => {
    console.log(question);
    if (question.question_id === id) {
      question.question_helpfulness++;
    }
    return question;
  });
  return newList;
};

export default getQuestionHelpful;
