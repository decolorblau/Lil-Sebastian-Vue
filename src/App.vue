<template>
  <div id="app">
    <header>
      <img class="logo" alt="Lil Sebastian Logo" src="@/assets/logo.png" width="100" height="100" />
      <h1 class="title">Lil Sebastian</h1>
    </header>
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
  box-sizing: border-box;
}

#app {
  height: 100vh;
  width: 100vw;
}

header {
  height: 100px;
  width: 100%;
  background-color: blue;
  display: flex;
}

footer {
  width: 100%;
  height: 50px;
  background-color: yellow;
}

.container {
  background-color: orange;
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: row;
  padding: 50px;
}
</style>
