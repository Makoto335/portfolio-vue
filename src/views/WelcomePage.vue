<template>
  <div class="WelcomePage">
    <MqResponsive target="xs-sm">
      <Humberger
        :aboutPosition="700"
        :worksPosition="2150"
        :skillsPosition="2900"
        :newsPosition="4150"
        :contactPosition="4900"
      />
    </MqResponsive>
    <MqResponsive target="md">
      <Humberger />
    </MqResponsive>
    <MqResponsive target="lg">
      <NavBar />
    </MqResponsive>
    <TopOfSite />
    <div
      v-for="section in sectionsFadedIn"
      :key="section.index"
      class="WelcomePage_SectionWrapper"
    >
      <IntersectionObserver
        targetName="section"
        @fadeInSection="fadeInSection(`.${section}_Wrapper`)"
      >
        <component :is="section"></component>
      </IntersectionObserver>
    </div>
    <FooterBar />
  </div>
</template>

<script>
import IntersectionObserver from "../components/modules/IntersectionObserver.vue";
import TopOfSite from "../components/TopOfSite.vue";
import NavBar from "../components/NavBar.vue";
import Humberger from "../components/modules/HamburgerMenu.vue";
import AboutMe from "../components/AboutMe.vue";
import MyWorks from "../components/MyWorks.vue";
import MySkills from "../components/MySkills.vue";
import LatestNews from "../components/LatestNews.vue";
import ContactForm from "../components/ContactForm.vue";
import FooterBar from "../components/FooterBar.vue";
import anime from "animejs";
import { MqResponsive } from "vue3-mq";

export default {
  name: "WelcomePage",
  components: {
    MqResponsive,
    Humberger,
    ContactForm,
    TopOfSite,
    NavBar,
    AboutMe,
    MySkills,
    MyWorks,
    FooterBar,
    LatestNews,
    IntersectionObserver,
  },
  data() {
    return {
      sectionsFadedIn: [
        "AboutMe",
        "MyWorks",
        "MySkills",
        "LatestNews",
        "ContactForm",
      ],
    };
  },
  methods: {
    redirectToChatRoom() {
      this.$router.push({ name: "Chatroom" });
    },
    fadeInSection(section) {
      anime({
        targets: section,
        opacity: [{ value: 1, duration: 800 }],
        translateY: [80, 0],
        duration: 800,
        easing: "easeInSine",
      });
    },
  },
};
</script>

<style scoped lang="scss">
.WelcomePage {
  overflow: hidden;
  &_SectionWrapper {
    text-align: center;
    h3 {
      margin-bottom: 30px;
      font-size: 1.25rem;
    }
  }
}
</style>
