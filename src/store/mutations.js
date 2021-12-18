const mutations = {
  incrementExerciseIndex(state) {
    state.exerciseIndex += 1;
  },
  decrementExerciseIndex(state) {
    state.exerciseIndex -= 1;
  },
  newAnswer(state, payload) {
    state.answerArray = [...payload];
  },
  toggleCorrect(state) {
    state.isCorrect = !state.isCorrect;
  },
  expectedArray(state, payload) {
    state.expectedArray = [...payload];
  },
};

export default mutations;
