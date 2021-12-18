<template>
  <div class="board board--boardpanel">
    <BoardPanel />
  </div>
  <div class="board board--viewpanel">
    <Array array="" />
    <Array array="" />
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
.board--viewpanel {
  height: 100%;
  min-width: 500px;
  width: 500px;
  margin: 0 50px;
  border-radius: 10px;
}
</style>
