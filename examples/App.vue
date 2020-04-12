<template>
  <div id="app">
    <pm-tag :closable="true" :hit="true" type="danger" effect="plain">123123</pm-tag>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>

</style>
