<template>
  <vSwitch />
  <Header />
  <vContentBlock />
  <div id="grid" />
</template>

<script setup>
  import vSwitch from "@/components/main/v-switch.vue";
  import Header from "@/components/main/header.vue";
  import vContentBlock from "@/components/main/v-content-block.vue";
</script>

<style scoped lang="scss">
  #grid {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-image: linear-gradient(
        rgb(255, 255, 255) 0.1em,
        transparent 0.1em
      ),
      linear-gradient(90deg, rgb(103, 0, 0) 0.1em, transparent 0.1em);
    background-size: 7em 1em;
    animation: move 10s infinite;
    opacity: 0.1;
  }

  @keyframes move {
    to {
      background-position-y: 2000px;
    }
  }
</style>
