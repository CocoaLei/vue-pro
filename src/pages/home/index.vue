<template>
  <div>
    <div
      v-for="(item, index) in modulesList"
      :key="index">
      <Section :section="item" />
    </div>
  </div>
</template>

<script>
  import modules from '@/resource/modules.json';
  import Section from '@/components/section';
  
  export default {
    components: { Section },
    data() {
      return {};
    },
    computed: {
      modulesList() {
        return modules.modules;
      },
    },
    mounted () {
      console.log(modules);
    },
    methods: {
    },
  };
</script>


<style lang="less" scoped>
</style>

<!--Droid Sans Mono-->
<!-- Deja Vu Sans Mono-->
<!--Inconsolata-->
