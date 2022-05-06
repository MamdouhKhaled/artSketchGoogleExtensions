<template>
  <div class="w-4/6 mb-4 mx-auto">
    <form action="http://www.google.com/search" method="get" target="_blank" accept-charset="utf-8">
      <div class="group ">
        <input class="text-input w-10/12" type="text" name="q" placeholder="Google Search ...">
        <button class="btn w-2/12" type="submit">Search..</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "header"
}
</script>

<style scoped>

</style>