<template>
  <div id="app">
    <Covid />
  </div>
</template>

<script>
import Covid from "./components/Covid.vue";

export default {
  name: "App",
  components: {
    Covid,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
  padding: 0;
  background: #fafafa;
}
::-webkit-scrollbar {
  display: none;
  width: 7px;
  height: 7px;
}

::-webkit-scrollbar-track {
  background-color: #fff;
  border-radius: 7px;
}

::-webkit-scrollbar-thumb {
  background-color: #49b1f5;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.4) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0.4) 75%,
    transparent 75%,
    transparent
  );
  border-radius: 7px;
}

::-webkit-scrollbar-thumb:hover {
  background: #007aff;
  opacity: 1;
  display: block !important;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}
</style>
