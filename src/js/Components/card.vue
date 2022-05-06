<template>
  <div class="basis-1/3 p-5 bg-white shadow-md rounded-lg relative">
    <h2 class="border-b-red-700 border-b-2 text-2xl first-letter:uppercase mb-4">{{ this.$props.title}}</h2>
    <slot>

    </slot>
  </div>
</template>

<script>
export default {
  props: ['title'],
  name: "card",
  data: () => {
    return {
      "title": "754654",
    }
  }
}
</script>

<style scoped>

</style>