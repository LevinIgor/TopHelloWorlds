<template>
  <header ref="target">
    <h1 @click="scrollTo" :style="textStyle">
      {{ localization.content.title }}
    </h1>
  </header>
</template>

<script setup>
  import { reactive, computed, ref } from "vue";
  import { useLocalization } from "@/stores/localization";
  import { useParallax } from "@vueuse/core";

  const target = ref(null);
  const parallax = reactive(useParallax(target));

  const localization = useLocalization();

  const textStyle = computed(() => {
    return {
      transform: `rotateX(${parallax.roll * 20}deg) rotateY(${
        parallax.tilt * 20
      }deg) translateZ(40px) translateY(-50px)`,
    };
  });

  function scrollTo() {
    const block = document.getElementById("content-block");

    window.scrollTo({
      top: block.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }
</script>
<style lang="scss" scoped>
  header {
    height: 100vh;
    display: grid;
    place-items: center;
    perspective: 300px;
    position: relative;
    h1 {
      cursor: pointer;
      user-select: none;
      font-size: clamp(1rem, 5vmin, 22rem);
      background: linear-gradient(
        rgb(7, 2, 93) 10px,
        rgb(161, 192, 3) 10px,
        rgb(0, 195, 255) 100px,
        rgb(255, 255, 255) 10px
      );
      color: transparent;
      background-size: contain;
      -webkit-background-clip: text;
      -webkit-text-stroke: 1px rgb(0, 0, 0);
      animation: bg-shift 3s infinite;
    }
  }

  @keyframes bg-shift {
    0% {
      background-position: 0 -90px;
    }
    100% {
      background-position: 0 90px;
    }
  }
</style>
