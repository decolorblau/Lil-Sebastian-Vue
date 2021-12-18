<template>
  <section class="board-panel">
    <div class="board-panel-header">
      <div class="board-panel-header__methods">
        <button class="board-panel-header__button" @click="onClickMethod('push')">PUSH</button>
        <button class="board-panel-header__button" @click="onClickMethod('filter')">FILTER</button>
        <button class="board-panel-header__button" @click="onClickMethod('map')">MAP</button>
      </div>
      <div class="board-panel-header__elements">
        <button class="board-panel-header__button" @click="onClickElement('carrot')">CARROT</button>
        <button class="board-panel-header__button" @click="onClickElement('hay')">HAY</button>
        <button class="board-panel-header__button" @click="onClickElement('horseshoe')">
          HORSESHOE
        </button>
        <button class="board-panel-header__button" @click="onClickElement('hairComb')">
          HAIRCOMB
        </button>

        <div class="board-panel-header__divider">||</div>

        <button class="board-panel-header__button" @click="onClickElement2('carrot')">
          CARROT
        </button>
        <button class="board-panel-header__button" @click="onClickElement2('hay')">HAY</button>
        <button class="board-panel-header__button" @click="onClickElement2('horseshoe')">
          HORSESHOE
        </button>
        <button class="board-panel-header__button" @click="onClickElement2('hairComb')">
          HAIRCOMB
        </button>
      </div>
    </div>

    <p class="board-panel__user-input">Data: {{ this.method }}{{ this.element }}</p>
    <p>Resultado: {{ this.answerArray }}</p>

    <p>La pista</p>

    <div>
      <button class="board-panel-footer__button" @click="onClickClear">CLEAR</button>
      <button
        class="board-panel-footer__button board-panel-footer__button--next"
        @click="onClickNext"
      >
        ->
      </button>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import exercises from "@/utils/exercises";
import { carrot, horseshoe, hay, hairComb } from "@/utils/itemObjects";

export default defineComponent({
  name: "BoardPanel",
  data() {
    return {
      method: "",
      element: "",
      element2: "",
    };
  },
  computed: {
    ...mapState(["answerArray", "exerciseIndex"]),
  },
  methods: {
    ...mapActions(["newAnswer"]),
    onClickMethod(method) {
      this.element = "";
      this.element2 = "";

      switch (method) {
        case "push":
          this.method = "push";
          break;
        case "filter":
          this.method = "filter";
          break;
        case "map":
          this.method = "map";
          break;
        default:
          this.method = "iIiIiIiIiIi";
          break;
      }
    },
    onClickElement(element) {
      switch (element) {
        case "carrot":
          this.element = carrot;
          break;
        case "hay":
          this.element = hay;
          break;
        case "horseshoe":
          this.element = horseshoe;
          break;
        case "hairComb":
          this.element = hairComb;
          break;
        default:
          this.element = "iIiIiIiIiIi";
          break;
      }

      switch (this.method) {
        case "push":
          if (this.element !== "iIiIiIiIiIi") {
            const currentExercise = exercises[this.exerciseIndex].initialArray;

            currentExercise.push(this.element);
            this.newAnswer(currentExercise);
          }
          break;
        case "filter":
          console.log("holiiins");
          if (this.element !== "iIiIiIiIiIi") {
            let currentExercise = exercises[this.exerciseIndex].initialArray;

            currentExercise = currentExercise.filter((item) => item.name === this.element.name);
            this.newAnswer(currentExercise);
          }
          break;
        case "map":
          this.method = "map";
          break;
        default:
          this.method = "iIiIiIiIiIi";
          break;
      }
    },
    onClickElement2(element) {
      switch (element) {
        case "carrot":
          this.element2 = carrot;
          break;
        case "hay":
          this.element2 = hay;
          break;
        case "horseshoe":
          this.element2 = horseshoe;
          break;
        case "hairComb":
          this.element2 = hairComb;
          break;
        default:
          this.element2 = "iIiIiIiIiIi";
          break;
      }

      switch (this.method) {
        case "push":
          if (this.method && this.element) {
            const currentExercise = exercises[this.exerciseIndex].initialArray;

            currentExercise.push(this.element);
            this.newAnswer(currentExercise);
          }
          break;
        case "filter":
          console.log("holiiins");
          if (this.element !== "iIiIiIiIiIi") {
            let currentExercise = exercises[this.exerciseIndex].initialArray;

            currentExercise = currentExercise.filter((item) => item.name === this.element.name);
            this.newAnswer(currentExercise);
          }
          break;
        case "map":
          this.method = "map";
          break;
        default:
          this.method = "iIiIiIiIiIi";
          break;
      }
    },
    onClickClear() {
      this.element = "";
      this.method = "";
    },
    onClickNext() {},
  },
});
</script>

<style lang="scss" scoped>
.board-panel {
  background-color: #fff;
  height: 100%;
  width: 500px;
  margin: 0 50px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &-header,
  &-header__methods {
    border-bottom: black 2px solid;
  }
}
</style>
