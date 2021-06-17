// const handleAddedAnswer = (questionId, newAnswers) => {
//   const newList = questionList.map((question) => {
//     if (question.question_id === questionId) {
//       question.answers = newAnswers;
//     }
//     return question;
//   });

//   setQuestionList(newList);
// };

// const handleAnswerHelpful = (answerId, questionId) => {
//   const newList = questionList.map((question) => {
//     if (question.question_id === questionId) {
//       question.answers[answerId].helpfulness++;
//     }
//     return question;
//   });

//   setQuestionList(newList);
// };

// const getAnswerReport = (list, answerId, questionId) => {
//   const newList = list.map((question) => {
//     if (question.question_id === questionId) {
//       delete question.answers[answerId];
//     }
//     return question;
//   });
//   return newList;
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
