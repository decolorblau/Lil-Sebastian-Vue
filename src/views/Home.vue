<template>
  <div class="board board--boardpanel">
    <BoardPanel />
  </div>
  <div class="board board--viewpanel">
    <div class="array array--answer">
      <p>[</p>
      <Array :isAnswer="true" />
      <p>]</p>
    </div>
    <hr />
    <div class="array array--expected">
      <h3 class="array_title">EXPECTED ARRAY</h3>
      <Array :isAnswer="false" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import BoardPanel from "@/components/BoardPanel.vue";
import Array from "@/components/Array.vue";
import exercises from "@/utils/exercises";

export default {
  name: "Home",
  components: { BoardPanel, Array },
  computed: {
    ...mapState(["exerciseIndex"]),
  },
  methods: {
    ...mapActions(["loadInitialArray"]),
  },
  mounted() {
    this.loadInitialArray(exercises[this.exerciseIndex].initialArray);
  },
};
</script>

<style lang="scss" scoped>
p {
  position: absolute;
  font-size: 50px;

  &:nth-of-type(1) {
    top: 17px;
    left: -8px;
  }

  &:nth-of-type(2) {
    right: -8px;
    bottom: 22px;
  }
}

.board {
  width: 550px;
  height: 100%;
}
.board--viewpanel {
  height: 100%;
  width: 500px;
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

hr {
  width: 200px;
  margin: 80px auto;
  border: none;
  border-top: 1px solid black;
}

.array {
  margin: 0 auto;
  height: max-content;
  width: 400px;
  position: relative;

  &_title {
    position: absolute;
    left: 125px;
    top: -35px;
    font-size: 16px;
    opacity: 0.5;
  }

  &.array--expected {
    margin-top: 50px;
    border: 1px dashed darkgrey;
    border-radius: 50px;
    filter: saturate(0.3);
    transform: scale(0.8);
  }

  &.array--answer {
    transform: scale(1.2);
    height: 100px;
    background-color: white;
    border-radius: 15px;
  }
}
</style>
