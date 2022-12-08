<template>
  <footer class="footer-bar">
    <div class="sns-wrapper">
      <span>
        <a href="https://twitter.com/pachapochapon" class="fa-2x twitter">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
        <a href="https://github.com/Makoto335" class="fa-2x github">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </span>
    </div>
    <div class="copy-wrapper">
      <span><font-awesome-icon icon="copyright" /> Makoto Hamaguchi</span>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-bar {
  background: black;
  height: 100%;
}
.sns-wrapper {
  text-align: center;
  padding: 20px 0;
  height: 70px;
}
.github {
  margin-left: 10px;
}
.fa-github {
  color: #e7e7e7;
}
.fa-twitter {
  color: #1a8cd8;
}
.copy-wrapper {
  text-align: center;
  padding: 5px 0;
  color: #e7e7e7;
}
/* .fa-copyright{
} */
</style>
