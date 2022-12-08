<template>
  <section class="MySkills">
    <div class="MySkills_Wrapper">
      <SectionTitle title="SKILLS" desc="プログラミングスキル" />
      <div class="MySkills_Contents">
        <div
          v-for="(key, value) in skills"
          :key="key.index"
          class="MySkills_ContentsEach"
        >
          <img :src="key" :alt="value" />
          <div>{{ value }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "./modules/SectionTitle.vue";

export default {
  name: "MySkills",
  components: { SectionTitle },
  data() {
    return {
      skills: {
        Ruby: require("../assets/images/logos/ruby.svg"),
        "Ruby on Rails": require("../assets/images/logos/rails.svg"),
        HTML: require("../assets/images/logos/html-5.svg"),
        CSS: require("../assets/images/logos/css-3.svg"),
        VueJS: require("../assets/images/logos/vue.svg"),
        "Git/Github": require("../assets/images/logos/github-octocat.svg"),
      },
    };
  },
};
</script>

<style scoped lang="scss">
.MySkills {
  padding: 50px 0;
  border-bottom: 3px solid #f6a2b7;
  background: rgb(254, 254, 254);

  &_Wrapper {
    opacity: 0;
  }
  &_Contents {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    img {
      max-width: 150px;
      width: 100%;
    }
  }
}
@media screen and (max-width: 832px) {
  .MySkills {
    &_Contents {
      flex-direction: column;
      img {
        max-width: 100px;
        width: 100%;
      }
    }
  }
}
</style>
