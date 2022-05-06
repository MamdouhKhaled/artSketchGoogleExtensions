<template>
  <div class="fav-page">
    <Boxs href="http://www.google.com" title="Google" />
    <Boxs href="http://www.youtube.com" title="YouTube" />
    <Boxs href="http://www.facebook.com" title="FaceBook" />
  </div>
</template>

<script>
import Boxs from "./boxs"
export default {
  name: "most-visit",
  components: {Boxs}

}
</script>

<style scoped>

</style>