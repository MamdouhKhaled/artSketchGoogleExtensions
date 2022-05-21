<template>
  <div @click="onClick" class="border text-sm rounded border-gray-300 p-2 m-1 inline-block cursor-pointer shadow-md hover:bg-red-500">
    {{this.$props.title}}
  </div>
</template>

<script>
export default {
  props: ['title', 'href'],
  name: "boxs",
  methods: {
    onClick(){
      window.open(this.href)
      console.log(this.$store.state.count)
    }
  }
}
</script>

<style scoped>

</style>