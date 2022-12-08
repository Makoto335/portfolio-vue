<template>
  <header class="NavBar">
    <nav>
      <ul>
        <li v-for="(key, value) in sections" :key="key.index">
          <button @click.prevent.stop="scrollToValue(key)">
            {{ value }}
            <div class="NavBar_UnderLine"></div>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  props: {
    topPosition: { default: 0 },
    aboutPosition: { default: 900 },
    worksPosition: { default: 1750 },
    skillsPosition: { default: 2500 },
    newsPosition: { default: 3200 },
    contactPosition: { default: 3950 },
  },
  data() {
    return {
      sections: {
        Top: this.topPosition,
        About: this.aboutPosition,
        Works: this.worksPosition,
        Skills: this.skillsPosition,
        News: this.newsPosition,
        Contact: this.contactPosition,
      },
    };
  },
  methods: {
    scrollToValue: function (value) {
      window.scrollTo({
        top: value,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped lang="scss">
button {
  all: unset;
}
.NavBar {
  text-decoration: none;
  color: #f6a2b7;
  position: fixed;
  top: 60px;
  bottom: 0;
  z-index: 9997;
  transition: all 0.5s;
  overflow-y: auto;
  &_UnderLine {
    height: 20px;
    background: #f6a2b7;
    width: 80px;
  }
  nav li {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  li button {
    color: #f2c700;
    cursor: pointer;
  }
}
</style>
