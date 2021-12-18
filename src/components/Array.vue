<template>
  <ul class="array">
    <li v-for="element in array" v-bind:key="element.name" class="array__image">
      <img :src="element.url" :alt="element.name" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    array,
  },
};
</script>

<style lang="scss">
.array {
  &__image {
    width: 30px;
    height: 30px;
  }
}
</style>
