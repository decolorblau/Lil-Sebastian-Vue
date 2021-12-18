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
};

export default actions;
