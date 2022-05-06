<template>
  <div class="border flex items-center p-2 mb-2 rounded shadow">
    <input class="" name="" type="radio"/>
    <div class="px-2 text-[16px] ">
      {{ this.$props.item.title }}
    </div>

  </div>
</template>

<script>
export default {
  props:['item'],
  name: "item"
}
</script>

<style scoped>

</style>