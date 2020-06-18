<template>
  <div id="app">
    <pm-tag :closable="true" :hit="true" type="danger" effect="plain">123123</pm-tag>
    <pm-input v-model="value" ></pm-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '123'
    }
  }
}
</script>

<style>

</style>
