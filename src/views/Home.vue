<template>
  <div class="board board--boardpanel">
    <BoardPanel />
  </div>
  <div class="board board--viewpanel">
    <div class="array array--answer">
      <Array :isAnswer="true" />
    </div>
    <hr />
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
.board--viewpanel {
  height: 100%;
  width: 500px;
  margin: 0 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

hr {
  width: 200px;
  margin: 80px auto;
}

.array {
  margin: 0 auto;
  height: max-content;
  width: 400px;

  &.array--expected {
    border: 1px dashed darkgrey;
    border-radius: 50px;
    filter: saturate(0.3);
    margin-bottom: 50px;
  }
  &.array--answer {
    height: 120px;
    background: white;
  }
}
</style>
