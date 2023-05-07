<template>
  <div class="row">
    <div class="col text-center">
      <h1 class="msg">{{ msg }}</h1>
      <p>This is what the update says.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
h1.msg {
  color: $gray-900;
}
</style>
