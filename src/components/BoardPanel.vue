<template>
  <section class="board-panel">
    <div class="board-panel-header">
      <div class="board-panel-header__methods">
        <button class="board-panel-header__button-method" @click="onClickMethod('filter')">
          FILTER
        </button>
        <button class="board-panel-header__button-method" @click="onClickMethod('push')">
          FIND
        </button>
        <button class="board-panel-header__button-method" @click="onClickMethod('map')">MAP</button>
        <button class="board-panel-header__button-method" @click="onClickMethod('push')">
          POP
        </button>
        <button class="board-panel-header__button-method" @click="onClickMethod('push')">
          PUSH
        </button>
      </div>
      <div class="board-panel-header__elements">
        <button class="board-panel-header__button" @click="onClickElement('carrot')">
          <img class="board-panel-header__image" src="../assets/carrot.png" alt="carrot" />
        </button>
        <button class="board-panel-header__button" @click="onClickElement('hay')">
          <img class="board-panel-header__image" src="../assets/hay.png" alt="hay" />
        </button>
        <button class="board-panel-header__button" @click="onClickElement('horseshoe')">
          <img class="board-panel-header__image" src="../assets/horseshoe.png" alt="hay" />
        </button>
        <button class="board-panel-header__button" @click="onClickElement('hair-comb')">
          <img class="board-panel-header__image" src="../assets/hair-comb.png" alt="hair-comb" />
        </button>
      </div>
    </div>
    <p class="board-panel__user-input">array.map(cosas)</p>

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
    };
  },
  computed: {
    ...mapState(["answerArray", "exerciseIndex"]),
  },
  methods: {
    ...mapActions(["newArray"]),
    onClickMethod(method) {
      this.element = "";

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
      if (this.method && this.element) {
        const currentExercise = exercises[this.exerciseIndex].initialArray;

        if (this.method === "push") {
          currentExercise.push(this.element);
          this.newArray(currentExercise);
        }
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
  &-header {
  display: flex;
  flex-direction: column;
  border-bottom: black 2px solid;
  &__button-method {
    width: 100px;
    height: 40px;
    background-color: white;
    border: none;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    cursor: pointer;
  }
  &__button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  &__image {
    width: 40px;
    height: 40px;}
  }
}
</style>
