<template>
  <div id="app">
    <header></header>
    <div class="container">
      <router-view />
    </div>
    <footer></footer>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  height: 100vh;
  width: 100vw;
  background-color: orange;
}

header {
  height: 100px;
  width: 100%;
  background-color: blue;
  position: fixed;
}

footer {
  position: fixed;
  bottom: 0;
  height: 100px;
  width: 100%;
  background-color: yellow;
}

.container {
  padding: 100px 0;
}
</style>
