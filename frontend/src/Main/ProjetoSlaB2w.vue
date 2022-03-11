<template>
  <div>
      <ComponentHeader />
      <ComponentNav />
      <ComponentFooter />
  </div>
</template>

<script>
import ComponentHeader from '../components/ComponentHeader.vue';
import ComponentNav from '../components/ComponentNav.vue';
import ComponentFooter from '../components/ComponentFooter.vue'

export default {
    components: { ComponentHeader, ComponentNav, ComponentFooter}
}
</script>

<style>

</style>