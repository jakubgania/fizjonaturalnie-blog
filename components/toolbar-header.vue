<template>
  <div class="toolbar-header-container">
    <span class="logo">
      fizjonaturalnie
    </span>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');

.toolbar-header-container {
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.logo {
  font-family: 'Sacramento', cursive !important;
  background: -webkit-linear-gradient(-360deg, #ffcdd2, #f06292);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4rem;
  letter-spacing: 10px;
  cursor: default;
  transition: letter-spacing 1s ease;
}
.logo:hover {
  letter-spacing: 14px;
  transition: letter-spacing 1s ease;
}

@media only screen and (max-width: 960px) {
  .logo {
    font-size: 3.4rem;
    letter-spacing: 8px;
  }
}
@media only screen and (max-width: 600px) {
  .logo {
    font-size: 2.2rem;
    letter-spacing: 6px;
  }
}
</style>