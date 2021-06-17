const getSearchText = (questionList, text) => {
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

export default getSearchText;
