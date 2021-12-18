<template>
  <section class="board-panel">
    <header class="board-panel-header">
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
      </div>
    </header>
    <p class="board-panel__user-input" />
    <p>La pista</p>

    <footer>
      <button class="board-panel-footer__button" @click="onClickClear">CLEAR</button>
      <button
        class="board-panel-footer__button board-panel-footer__button--next"
        @click="onClickNext"
      >
        ->
      </button>
    </footer>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoardPanel",
  data() {
    return {};
  },
  methods: {
    onClickMethod(method) {
      switch (method) {
        case "push":
          break;
        case "filter":
          break;
        case "map":
          break;
        default:
          break;
      }
    },
    onClickElement(element) {
      switch (element) {
        case "carrot":
          break;
        case "hay":
          break;
        case "horseshoe":
          break;
        default:
          break;
      }
    },
    onClickClear,
    onClickNext,
  },
});
</script>

<style lang="scss" scoped></style>
