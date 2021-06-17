// const handleAddedAnswer = (questionId, newAnswers) => {
//   const newList = questionList.map((question) => {
//     if (question.question_id === questionId) {
//       question.answers = newAnswers;
//     }
//     return question;
//   });

//   setQuestionList(newList);
// };

const getQuestionHelpful = (list, id) => {
  const newList = list.map((question) => {
    console.log(question);
    if (question.question_id === id) {
      question.question_helpfulness++;
    }
    return question;
  });
  return newList;
};

export default getQuestionHelpful;
