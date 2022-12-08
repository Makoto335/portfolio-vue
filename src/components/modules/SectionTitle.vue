<template>
      <div class="Section-Title">
        <h2>{{ title }}</h2>
        <p>{{ desc }}</p>
      </div>
</template>

<script>
export default {
    props: 
["title", "desc"],
}
</script>

<style scoped lang="scss">
.Section-Title {
  h2 {
    margin-bottom: 10px;
    font-size: 3rem;
    color: #f2c700;
  }
  p {
    margin-bottom: 60px;
    overflow-wrap: break-word;
  }
}
</style>