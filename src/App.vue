<template>
  <div id="app">
    <header>
      <div class="logo">
        <img
          class="logo"
          alt="Lil Sebastian Logo"
          src="@/assets/logo.png"
          width="100"
          height="100"
        />
      </div>
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
  color: #4a261c;
}
.logo {
  border-radius: 50px;
  margin-left: 50px;
}

header {
  height: 100px;
  width: 100%;
  background-color: #d8e2dc;
  display: flex;
}

footer {
  width: 100%;
  height: 50px;
  background-color: #d8e2dc;
}

.container {
  background-color: #d8e2dc;
  height: calc(100vh - 150px);
  display: flex;
  justify-content: center;
  padding: 50px;
}
</style>
