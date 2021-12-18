<template>
  <section class="board-panel">
    <div class="board-panel-header">
      <div class="board-panel-header__methods">
        <button
          class="board-panel-header__button-method"
          @click="onClickMethod('filter'), (activeBtn = 'filter')"
          :class="{ active: activeBtn === 'filter' }"
        >
          .filter
        </button>
        <button
          class="board-panel-header__button-method"
          @click="onClickMethod('find'), (activeBtn = 'find')"
          :class="{ active: activeBtn === 'find' }"
        >
          .find
        </button>
        <button
          class="board-panel-header__button-method"
          @click="onClickMethod('map'), (activeBtn = 'map')"
          :class="{ active: activeBtn === 'map' }"
        >
          .map
        </button>

        <button
          class="board-panel-header__button-method"
          @click="onClickMethod('pop'), (activeBtn = 'pop')"
          :class="{ active: activeBtn === 'pop' }"
        >
          .pop
        </button>
        <button
          class="board-panel-header__button-method"
          @click="onClickMethod('push'), (activeBtn = 'push')"
          :class="{ active: activeBtn === 'push' }"
        >
          .push
        </button>
      </div>
      <div class="board-panel-header__elements">
        <div class="firstInput">
          <button
            class="board-panel-header__button"
            @click="onClickElement('carrot')"
          >
            <img
              class="board-panel-header__image"
              src="../assets/carrot.png"
              alt="carrot"
            />
          </button>
          <button
            class="board-panel-header__button"
            @click="onClickElement('hay')"
          >
            <img
              class="board-panel-header__image"
              src="../assets/hay.png"
              alt="hay"
            />
          </button>
          <button
            class="board-panel-header__button"
            @click="onClickElement('horseshoe')"
          >
            <img
              class="board-panel-header__image"
              src="../assets/horseshoe.png"
              alt="horseshoe"
            />
          </button>
          <button
            class="board-panel-header__button"
            @click="onClickElement('hairComb')"
          >
            <img
              class="board-panel-header__image"
              src="../assets/hair-comb.png"
              alt="hair-comb"
            />
          </button>
        </div>
        <div class="secondInput disabled">
          <button
            class="board-panel-header__button board-panel-header__button--2"
            @click="onClickElement2('carrot')"
          >
            <img
              class="board-panel-header__image"
              src="../assets/carrot.png"
              alt="carrot"
            />
          </button>
          <button
            class="board-panel-header__button board-panel-header__button--2"
            @click="onClickElement2('hay')"
          >
            <img
              class="board-panel-header__image"
              src="../assets/hay.png"
              alt="hay"
            />
          </button>
          <button
            class="board-panel-header__button board-panel-header__button--2"
            @click="onClickElement2('horseshoe')"
          >
            <img
              class="board-panel-header__image"
              src="../assets/horseshoe.png"
              alt="horseshoe"
            />
          </button>
          <button
            class="board-panel-header__button board-panel-header__button--2"
            @click="onClickElement2('hairComb')"
          >
            <img
              class="board-panel-header__image"
              src="../assets/hair-comb.png"
              alt="hair-comb"
            />
          </button>
        </div>
      </div>
    </div>

    <p class="board-panel__user-input">
      Console: lilArray.{{ this.elementMethod }}(<img
        v-if="this.elementImage !== ''"
        class="board-panel__user-input--image"
        :src="require(`@/assets/${this.elementImage}.png`)"
        :alt="this.element.name"
        width="30"
        height="30"
      />)
    </p>

    <p class="board-panel__instructions">
      {{ exercises[this.exerciseIndex].instructions }}
    </p>

    <div class="board-panel-footer__buttons">
      <button
        class="board-panel-footer__button board-panel-footer__button--clear"
        @click="onClickClear"
      >
        clear
      </button>
      <button
        class="board-panel-footer__button board-panel-footer__button--next"
        :disabled="exerciseIndex < 1"
        @click="onClickBefore"
      >
        &lt;
      </button>
      <button
        class="board-panel-footer__button board-panel-footer__button--next"
        @click="onClickNext"
        :class="{ disabled: !isCorrect }"
      >
        &gt;
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
      elementImage: "",
      elementMethod: "",
      exercises,
      isActive: false,
      activeBtn: "",
    };
  },
  computed: {
    ...mapState(["answerArray", "exerciseIndex", "isCorrect"]),

    activeClass() {
      return {
        active: this.isActive,
      };
    },
  },
  methods: {
    ...mapActions([
      "newAnswer",
      "nextExercise",
      "beforeExercise",
      "loadExpectedArray",
      "toggleCorrect",
    ]),

    onClickMethod(method) {
      this.element = "";
      this.element2 = "";
      this.elementImage = "";
      this.elementMethod = "";
      let currentExercise;

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
        case "pop":
          this.method = "pop";
          currentExercise = [...exercises[this.exerciseIndex].initialArray];
          currentExercise.pop();
          this.newAnswer(currentExercise);
          break;
        case "find":
          this.method = "find";
          break;

        default:
          this.method = "iIiIiIiIiIi";
          break;
      }
      this.elementMethod = this.method;
      this.compareArrays();
    },
    onClickElement(element) {
      switch (element) {
        case "carrot":
          this.element = carrot;
          this.elementImage = carrot.name;
          break;
        case "hay":
          this.element = hay;
          this.elementImage = hay.name;
          break;
        case "horseshoe":
          this.element = horseshoe;
          this.elementImage = horseshoe.name;
          break;
        case "hairComb":
          this.element = hairComb;
          this.elementImage = hairComb.name;
          break;
        default:
          this.element = "";
          break;
      }

      switch (this.method) {
        case "push":
          if (this.element !== "iIiIiIiIiIi") {
            const currentExercise = exercises[this.exerciseIndex].initialArray;

            currentExercise.push(this.element);

            this.newAnswer(currentExercise);
            this.clear();
          }
          break;
        case "filter":
          if (this.element !== "iIiIiIiIiIi") {
            let currentExercise = exercises[this.exerciseIndex].initialArray;

            currentExercise = currentExercise.filter(
              (item) => item.name === this.element.name
            );
            this.newAnswer(currentExercise);
            this.clear();
          }
          break;
        case "map":
          if (this.element2.length > 0 && this.element2 !== "iIiIiIiIiIi") {
            let currentExercise = exercises[this.exerciseIndex].initialArray;

            currentExercise = currentExercise.map((item) =>
              item.name === this.element.name ? this.element2 : item
            );
            this.newAnswer(currentExercise);
            this.clear();
          }
          break;
        case "find":
          if (this.element !== "iIiIiIiIiIi") {
            let currentExercise = exercises[this.exerciseIndex].initialArray;

            currentExercise = currentExercise.find(
              (item) => item.name === this.element.name
            );

            this.newAnswer(currentExercise);
            this.clear();
          }
          break;
        default:
          this.method = "";
          break;
      }
      this.compareArrays();
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
          this.element2 = "";
          break;
      }

      if (
        this.method === "map" &&
        this.element &&
        this.element2 !== "iIiIiIiIiIi"
      ) {
        let currentExercise = exercises[this.exerciseIndex].initialArray;

        currentExercise = currentExercise.map((item) =>
          item.name === this.element.name ? this.element2 : item
        );
        this.newAnswer(currentExercise);
        this.clear();
      }
    },
    clear() {
      this.element = "";
      this.element2 = "";
      this.method = "";
    },
    onClickClear() {
      this.clear();
      this.newAnswer(exercises[this.exerciseIndex].initialArray);
    },
    onClickNext() {
      this.nextExercise();
      this.clear();
      this.newAnswer(exercises[this.exerciseIndex].initialArray);
      this.loadExpectedArray(exercises[this.exerciseIndex].expectedArray);
      this.toggleCorrect();
    },
    onClickBefore() {
      this.beforeExercise();
      this.clear();
      this.newAnswer(exercises[this.exerciseIndex].initialArray);
      this.loadExpectedArray(exercises[this.exerciseIndex].expectedArray);
    },
    compareArrays() {
      if (
        JSON.stringify(this.answerArray) ===
        JSON.stringify(this.exercises[this.exerciseIndex].expectedArray)
      ) {
        this.toggleCorrect();
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.firstInput {
  padding-right: 20px;
}

.secondInput {
  border-left: 1px solid black;
  padding-left: 20px;
}

.board-panel {
  font-family: monospace;
  background-color: #ffe5d9;
  height: 100%;
  width: 500px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: relative;
  color: #4a261c;
  .disabled {
    opacity: 0.3;
    user-select: none;
    cursor: default;
  }
  &-header {
    display: flex;
    flex-direction: column;
    &__elements {
      background-color: #f8edeb;
      display: flex;
    }
    &__button-method {
      width: 80px;
      height: 40px;
      background-color: #fec89a;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      font-family: inherit;
      color: inherit;
      margin: 10px;

      &.active {
        background: #996538;
      }
    }

    &__button {
      border: none;
      background-color: transparent;
      cursor: pointer;
      margin: 10px;
      color: inherit;
    }
    &__image {
      width: 35px;
      height: 35px;
    }
  }
  &__user-input {
    background-color: white;
    margin: 15px;
    border-radius: 15px;
    padding: 15px;
    font-size: 20px;
    justify-content: flex-end;
    &--image {
      margin-bottom: -7px;
    }
  }
  &__instructions {
    padding: 50px 30px;
    font-size: 20px;
    text-align: center;
    line-height: 30px;
    font-weight: lighter;
  }
  &-footer__buttons {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  &-footer__button {
    border: none;
    margin-left: 10px;
    color: inherit;
    font-family: inherit;
    font-size: 20px;
    padding: 10px;
    background-color: #d8e2dc;
    border-radius: 50px;
    cursor: pointer;
  }
}
</style>
