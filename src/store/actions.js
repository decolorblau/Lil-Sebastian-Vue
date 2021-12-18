const actions = {
  nextExercise({ commit }) {
    commit("incrementExerciseIndex");
  },
  toggleCorrect({ commit }) {
    commit("toggleCorrect");
  },
  newAnswer({ commit }, newArray) {
    commit("newAnswer", newArray);
  },
  loadInitialArray({ commit }, initialArray) {
    commit("loadInitialArray", initialArray);
  },
};

export default actions;
