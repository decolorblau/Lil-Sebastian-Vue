<template>
  <!-- <pre>{{ JSON.stringify(this.exercise, null, 2) }}</pre> -->

  <ul class="panel" v-if="isAnswer === true">
    <li v-for="element in this.answerArray" v-bind:key="element.name" class="panel__image">
      <img
        :src="require(`@/assets/${element.name}.png`)"
        :alt="element.name"
        width="60"
        height="60"
      />
    </li>
    <li v-if="this.answerArray.length < 5" class="panel__image"></li>
  </ul>

  <ul class="panel" v-else>
    <li v-for="element in expectedArray" v-bind:key="element.name" class="panel__image">
      <img
        :src="require(`@/assets/${element.name}.png`)"
        :alt="element.name"
        width="45"
        height="45"
      />
    </li>
    <li v-if="expectedArray.length < 5" class="panel__image"></li>
  </ul>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";
import exercises from "../utils/exercises";

export default defineComponent({
  name: "Array",
  props: ["isAnswer"],
  data() {
    return {
      expectedArray: "",
    };
  },
  computed: {
    ...mapState(["exerciseIndex", "answerArray"]),
  },
  mounted() {
    this.expectedArray = exercises[this.exerciseIndex].expectedArray;
  },
});
</script>

<style lang="scss">
li {
  list-style: none;
}

.panel {
  display: flex;
  padding: 0 10px;
  height: 100%;

  &__image {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
