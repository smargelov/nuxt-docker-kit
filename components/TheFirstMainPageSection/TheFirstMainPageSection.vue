<template lang="pug">
  section.b-first-block
    h1._title TEST
      span._close
        SvgIcon(
          name="close"
          width="24"
          height="24"
        )._icon
</template>

<script>
export default {
  name: "TheFirstMainPageSection",
  props: {},
  data() {
    return {};
  },
  computed: {}
};
</script>

<style lang="sass">
@import './TheFirstMainPageSection'
</style>
