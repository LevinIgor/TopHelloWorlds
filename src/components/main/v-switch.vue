<template>
  <span @click="langChange">{{ localization.content.menu?.language }}</span>
</template>

<script setup>
  import { useLocalization } from "@/stores/localization";

  const localization = useLocalization();

  function langChange() {
    localization.content.menu.language === "English"
      ? localization.changeTo("ua")
      : localization.changeTo("en");
  }
</script>

<style lang="scss" scoped>
  span {
    z-index: 10;
    position: fixed;
    top: 50px;
    right: 100px;
    cursor: pointer;
    user-select: none;

    &:hover {
      color: rgba(255, 255, 255, 0.882);
    }
  }
</style>
