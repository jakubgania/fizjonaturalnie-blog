<template>
  <div>
    <client-only>
      <portal-rules-alert-component />
    </client-only>

    <toolbar-header-component />

    <nuxt />

    <footer-component />
  </div>
</template>

<script>
import ToolbarHeaderComponent from '@/components/toolbar-header'
import FooterComponent from '@/components/footer'
import PortalRulesAlertComponent from '@/components/portal-rules-alert'

export default {
  components: {
    ToolbarHeaderComponent,
    FooterComponent,
    PortalRulesAlertComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital@0;1&display=swap');

html {
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  /* scroll-behavior: smooth; */
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

::-webkit-scrollbar-track {
  border-radius: 0;
  background-color: #fff;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  border-radius: 0;
  background-color: #3399ff;
}
</style>
