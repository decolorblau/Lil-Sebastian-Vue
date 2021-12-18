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
  width: 550px;
  height: 100%;
}
.board--viewpanel {
  background-color: #fff;
  height: 100%;
  min-width: 500px;
  width: 500px;
  margin: 0 50px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.array {
  margin: 0 auto;
  width: 400px;
  &.array--expected {
    border: 1px dashed black;
    border-radius: 50px;
  }
}
</style>
