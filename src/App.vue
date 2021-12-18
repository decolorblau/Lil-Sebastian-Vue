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
}

#app {
  height: 100vh;
  width: 100vw;
}

header {
  height: 100px;
  width: 100%;
  background-color: blue;
  position: fixed;
  display: flex;
}

footer {
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: yellow;
}

.container {
  background-color: orange;
  height: 100%;
}
</style>
