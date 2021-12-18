const actions = {
  nextExercise({ commit }) {
    commit("incrementExerciseIndex");
  },
  beforeExercise({ commit }) {
    commit("decrementExerciseIndex");
  },
  toggleCorrect({ commit }) {
    commit("toggleCorrect");
  },
  newAnswer({ commit }, newArray) {
    commit("newAnswer", newArray);
  },
  loadExpectedArray({ commit }, expectedArray) {
    commit("expectedArray", expectedArray);
  },
};

export default actions;
