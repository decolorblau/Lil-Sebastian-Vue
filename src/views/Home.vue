<template>
  <div class="board board--boardpanel">
    <BoardPanel />
  </div>
  <div class="board board--viewpanel">
    <div class="task-container">
      <p class="task">{{ exercises[this.exerciseIndex].task }}</p>
    </div>
    <div class="array array--answer">
      <p>[</p>
      <div>
        <Array :isAnswer="true" />
      </div>
      <p>]</p>
    </div>
    <hr />
    <div class="array array--expected" :class="{ correct: isCorrect }">
      <h3 class="array_title">EXPECTED ARRAY</h3>
      <Array :isAnswer="false" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BoardPanel from "@/components/BoardPanel.vue";
import Array from "@/components/Array.vue";
import exercises from "@/utils/exercises";

export default {
  name: "Home",
  components: { BoardPanel, Array },
  data() {
    return {
      exercises,
      task: "",
    };
  },
  computed: {
    ...mapState(["exerciseIndex", "isCorrect"]),

  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 50px;

  &:nth-of-type(1) {
    top: 17px;
  }

  &:nth-of-type(2) {
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
  border-radius: 10px;
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
.task-container {
  height: 40px;
  width: 450px;
  display: flex;
  align-items: center;
  margin-bottom: 35px;
}
.task {
  font-size: 24px;
}


.array {
  margin: 0 auto;
  height: max-content;
  width: 400px;
  padding: 15px;

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

  &.correct {
    border: solid 3px#79b791;
    background-color: #abd1b5;
    filter: saturate(1);
    -webkit-animation-name: bounceIn;
    animation-name: bounceIn;
    -webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes bounceIn {
    0%,
    20%,
    40%,
    60%,
    80%,
    100% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
      opacity: 1;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
      transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
      -webkit-transform: scale3d(0.97, 0.97, 0.97);
      transform: scale3d(0.97, 0.97, 0.97);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes bounceIn {
    0%,
    20%,
    40%,
    60%,
    80%,
    100% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
      opacity: 1;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
      transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
      -webkit-transform: scale3d(0.97, 0.97, 0.97);
      transform: scale3d(0.97, 0.97, 0.97);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  &.array--answer {
    transform: scale(1.2);
    height: 100px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    align-items: center;
    max-width: 400px;
  }
}
</style>
