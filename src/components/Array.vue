<template>
  <ul class="panel" v-if="isAnswer === true">
    <li v-for="(element, index) in answerArray" :key="index" class="panel__image">
      <img
        :src="require(`@/assets/${element.name}.png`)"
        :alt="element.name"
        width="55"
        height="55"
      />
    </li>
    <li v-for="number in 5 - answerArray.length" :key="number.id" class="panel__image"></li>
  </ul>

  <ul class="panel" v-else>
    <li v-for="element in expectedArray" :key="element.name" class="panel__image">
      <img
        :src="require(`@/assets/${element.name}.png`)"
        :alt="element.name"
        width="45"
        height="45"
      />
    </li>
    <li v-for="number in 5 - expectedArray.length" v-bind:key="number.id" class="panel__image"></li>
  </ul>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import exercises from "../utils/exercises";

export default defineComponent({
  name: "Array",
  props: ["isAnswer"],
  computed: {
    ...mapState(["exerciseIndex", "answerArray", "expectedArray"]),
  },
  methods: {
    ...mapActions(["newAnswer", "loadExpectedArray"]),
  },
  mounted() {
    this.loadExpectedArray(exercises[this.exerciseIndex].expectedArray);
    this.newAnswer(exercises[this.exerciseIndex].initialArray);
  },
});
</script>

<style lang="scss">
li {
  list-style: none;
}

.panel {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 337px;

  &__image {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
