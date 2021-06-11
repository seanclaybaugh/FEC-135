// {
//   1720154: {
//     answerer_name: "Seller"
//     body: "We are selling it here without any markup from the middleman!"
//     date: "2018-08-18T00:00:00.000Z"
//     helpfulness: 4
//     id: 1720154
//     photos: []
//   },
//   1991254: {
//     answerer_name: "who am i??"
//     body: "what is life??"
//     date: "2021-06-07T00:00:00.000Z"
//     helpfulness: 1
//     id: 1991254
//     photos: []
//   },
//   1991255: {
//     answerer_name: "who am i??"
//     body: "what is life??"
//     date: "2021-06-07T00:00:00.000Z"
//     helpfulness: 0
//     id: 1991255
//     photos: []
//   }
// }


// QuestionListContainer, QuestionListSection, QuestionSection, ProductQuestions
  // questionListComponent
    // Nx questionListItemComponent
      // renders question
      // 2x answerComponent
      // can expand to more answers
      // submitAnswerComponent (for this question)
    // can expand to show more questions
  // searchAnswersComponent
  // submitQuestionComponent

  /*
Install the runtime dependency
npm i --save-dev @babel/plugin-transform-runtime
Add the plugin to your .babelrc file
{
  "plugins": ["@babel/plugin-transform-runtime"]
}*/


// cloud (github)
  // UPSTREAM
    // branch: main <--

  // IRIS FORK
    // branch: main
    // branch: feature

// local computer
  // IRIS FORK
    // branch: main   (if you make changes here, and do 'git push' it will end up in cloud>IRIS FORK>main)
    // branch: feature (you work here)


    /*

  modal window:
  https://upmostly.com/tutorials/modal-components-react-custom-hooks

  append modals to the end of DOM body
  wait to mount modals to the DOM until they are showm
  remove modal from DOM when they are hidden


  1. create custom modal hook - to show and hide a modal component



    */

      // if searchText has fewer than 3 characters
      // then: list should return to the state where it is not filtered
        // detail: set _ to _
        //set filteredQuestions to the allQuestions
    // else
      // more than 3 char - filter to those containing matching text
      // for a given question: include in results (WITH ALL ANSWERS) if searchText appears in question or any of its answers
        // detail: questionList, filteredQuestions
        // inputs: searchText, questionList
        // output: filteredQuestions
        // filteredQuestions = <some code that uses searchText and questionList>

          // thought EXPAND/COLLAPSE:
  // we've defined pageSize here.. we could pass it as a prop to our child (like QuestionList)
  // questionList could decide whether to show collapseButton by checking if questions.count > pageSize (only collapse if this is true)

  // as for load more, the problem now is that loadMore stays on the page even after you've loaded everything!
  // this one is trickier, but you do know that you're done when your GET/ request is successful but empty
  // you could capture that in state and supply it to your child (QuestionList) as a prop
  // (don't show loadMore if you're done loading)

  // one caveat - if you post a new question, maybe that isDone state needs to be reset...
  // ALSO, handle added question probably needs to be re-done
  // the way we understood it previously, we thought we needed to reload to get the question to show up
  // but now, it's fair that you have to click "load more" for the question you just posted to show up

  // git restore --staged notes.js


  // load 100
// if you get back more than 2, expand is visible
// click expand: show the rest (up to 100)
// click collapse: hide everything but 2

// load 2
// show expand
// click expand: loop to load the rest (up to infinite)
// click collapse: drop everything but 2
// problem: what if there are only 2 questions?

// pageSize (2)
// load count=pageSize+1 (3) GET(count=3,page=1)
// show 2 (questions(count3),state(expanded/collapsed), question list will slice to 2, showing expand if count > 2)
// if count(total) is > 2 (3)
// show expand
// expand behavior: load 3 at a time, starting at 4 (pSize+2), until you get empty

// 1 button
  // expand state
  // collapse state


// GET(count 3, page 1)
// questions(a,b,c)
// QuestionListComponent
  // state: expanded=false
  // props: questions(a,b,c)
  // render:
    // expanded? render all questions, show collapse button
    // not expanded? render 2 questions, show expand button
  // handleExpand
    // state.expanded = true (this will immediately start rendering question 3)
    // AND tell parent to go get all remaining questions


  // we click expand - this will trigger the fetch epxanded questions to get the rest of hte questions
  //click collpase, this slices this.props.questions WHEN RENDERING
  //but our question list and this.props.qustions will now have the master list of all questions
  //so if we click expand again, no need to axios call
  //just dont call this.props.handleExpandQuestions
  //check if this.props.questions