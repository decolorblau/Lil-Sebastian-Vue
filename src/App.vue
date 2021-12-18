<template>
  <div id="app">
    <header>
      <div class="logo">
        <img
          class="logo__image"
          alt="Lil Sebastian Logo"
          src="@/assets/logo.png"
          width="100"
          height="100"
        />
        <img class="logo__letters" src="@/assets/letrasli-marron.png" alt="lil sebastian" />
      </div>
    </header>
    <div class="container">
      <router-view />
    </div>
    <footer>
      <p>Created by Lil Sebastian team (Charles-babbage)</p>
    </footer>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d8e2dc;
  color: #4a261c;

}
.logo {
  &__image {
    margin-right: 20px;
    border-radius: 50px;
  }
  &__letters {
    width: 220px;
    height: auto;
  }
}

header {
  height: 120px;
  width: 1050px;
  display: flex;
  align-items: center;
  padding: 20px 0 10px;
}

footer {
  width: 100%;
  height: 30px;
  display: fle;
  justify-content: center;
}

.container {
  height: calc(100vh - 150px);
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
  width: 1050px;
}
</style>
