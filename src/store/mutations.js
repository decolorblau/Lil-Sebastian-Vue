const mutations = {
  incrementExerciseIndex(state) {
    state.exerciseIndex += 1;
  },
  newAnswer(state, payload) {
    state.answerArray = payload;
  },
  toggleCorrect(state) {
    state.isCorrect = !state.isCorrect;
  },
  loadInitialArray(state, payload) {
    state.answerArray = payload;
  },
};

export default mutations;
