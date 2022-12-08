<template>
  <div class="HamburgerMenu">
    <div :class="{ _showMenu: showMenu }">
      <button
        @click="showMenu = !showMenu"
        class="HamburgerMenu_NavToggle"
        :class="{ _active: showMenu }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <transition name="fade">
        <NavBar
          v-if="showMenu"
          :aboutPosition="About"
          :worksPosition="Works"
          :skillsPosition="Skills"
          :newsPosition="News"
          :contactPosition="Contact"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import NavBar from "../NavBar.vue";

export default {
  props: {
    topPosition: { default: 0 },
    aboutPosition: { default: 900 },
    worksPosition: { default: 2350 },
    skillsPosition: { default: 3100 },
    newsPosition: { default: 3650 },
    contactPosition: { default: 4400 },
  },
  components: {
    NavBar,
  },
  data() {
    return {
      showMenu: false,
      Top: this.topPosition,
      About: this.aboutPosition,
      Works: this.worksPosition,
      Skills: this.skillsPosition,
      News: this.newsPosition,
      Contact: this.contactPosition,
    };
  },
};
</script>

<style scoped lang="scss">
button {
  all: unset;
}
.HamburgerMenu {
  &_NavToggle {
    display: block;
    position: relative;
    width: 35px;
    height: 30px;
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 9998;
  }
  &_NavToggle span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #f6a2b7;
    position: absolute;
    transition: transform 0.5s, opacity 0.5s;
  }
  &_NavToggle span:nth-child(1) {
    top: 0;
  }
  &_NavToggle span:nth-child(2) {
    top: 0;
    bottom: 0;
    margin: auto;
  }
  &_NavToggle span:nth-child(3) {
    bottom: 0;
  }

  &_NavToggle._active span:nth-of-type(1) {
    top: 15px;
    transform: rotate(45deg);
  }
  &_NavToggle._active span:nth-of-type(2) {
    opacity: 0;
  }
  &_NavToggle._active span:nth-of-type(3) {
    top: 15px;
    transform: rotate(-45deg);
  }
}

._showMenu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 2s ease, transform 1.2s ease;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateX(-10vw) translateX(0px);
  }
}
</style>
