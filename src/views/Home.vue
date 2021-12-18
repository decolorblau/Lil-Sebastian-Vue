<template>
  <div class="board board--boardpanel">
    <BoardPanel />
  </div>
  <div class="board board--viewpanel">
    <div class="array array--answer">
      <Array :isAnswer="true" />
    </div>
    <div class="array array--expected">
      <Array :isAnswer="false" />
    </div>
  </div>
</template>

<script>
import BoardPanel from "@/components/BoardPanel.vue";
import Array from "@/components/Array.vue";

export default {
  name: "Home",
  components: { BoardPanel, Array },
};
</script>

<style lang="scss">
.board {
  width: 100%;
  border: 2px solid black;
  height: 100%;
}
</style>
