<template lang="pug">
  main.main
    the-main-header
    nuxt
    the-main-footer
</template>

<script>
import TheMainHeader from "~/components/common/TheMainHeader/TheMainHeader";
import TheMainFooter from "~/components/common/TheMainFooter/TheMainFooter";
export default {
  components: { TheMainFooter, TheMainHeader }
};
</script>
