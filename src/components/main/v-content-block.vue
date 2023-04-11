<template>
  <div
    v-for="(block, index) in localization.content.content"
    class="content-block"
    id="content-block"
  >
    <h2 class="content-title">{{ block.title }}</h2>
    <p class="text">
      {{ block.textTop }}
    </p>
    <pre v-highlightjs>
      
      <code @click="copyCode($event,index,block.code)" class="javascript">
  {{ block.code }}
  <span  class="copy" :id="'copy' + index">{{ localization.content.menu.copy }}</span>
    </code></pre>
    <p class="text">
      {{ block.textBottom }}
    </p>
  </div>
  <img src="https://www.meme-arsenal.com/memes/c2a7f7ccaf5826390bc89b2765975dba.jpg" alt="">
</template>

<script setup>
  import { useLocalization } from "@/stores/localization";
  import { useClipboard } from "@vueuse/core";

  const localization = useLocalization();
  localization.changeTo("en");
  const { copy } = useClipboard();

  function copyCode(e, index, code) {
    if (e.target.id === "copy" + index) {
      copy(code);
      const element = document.getElementById("copy" + index);

      element.innerText = localization.content.menu.copied;

      setTimeout(() => {
        element.innerText = localization.content.menu.copy;
      }, 10000);
    }
  }
</script>

<style lang="scss" scoped>
  .content-block {
    padding: 1rem;
    margin-top: 1rem;
    max-width: 1400px;
    margin: 0 auto;

    .copy {
      position: absolute;
      top: 10px;
      right: 20px;

      z-index: 100000;
      padding: 1rem;

      color: rgb(127, 127, 127);
      transition: color 0.3s;
      cursor: pointer;
      user-select: none;
      &:hover {
        color: rgb(190, 190, 190);
      }
    }

    h2 {
      font-size: clamp(19px, 4vw, 24px);
      margin-top: 4rem;
    }

    p {
      margin: 1rem 0 0 0;
      font-size: clamp(16px, 4vw, 20px);
    }

  }
  img{
    margin: 10rem 0;
  }
</style>
