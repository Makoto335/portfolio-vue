<template>
  <div class="top-section">
    <TopAnime />
  </div>
</template>
//
<script>
import TopAnime from "./modules/TopAnime.vue";

export default {
  name: "TopOfSite",
  components: { TopAnime },
};
</script>

<style scoped lang="scss">
.top-section {
  width: 100%;
  height: 100vh;
  background: black;
  background-size: cover;
}
</style>
