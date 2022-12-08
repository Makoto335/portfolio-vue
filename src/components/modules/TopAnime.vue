<template>
  <div class="TopAnime">
    <div class="TopAnime_Text">
      <h1 class="TopAnime_TextHello">
        <span
          style="white-space: pre-wrap"
          v-for="(value, index) in hello"
          :key="index"
          class="TopAnime_TextHelloEach"
          >{{ value }}</span
        >
      </h1>
    </div>
    <div class="TopAnime_Text">
      <h2 class="TopAnime_TextWelcome">
        <span
          v-for="(value, index) in welcome"
          :key="index"
          class="TopAnime_TextWelcomeEach"
          >{{ value }}</span
        >
      </h2>
    </div>
    <div
      v-for="circle in 50"
      :key="circle"
      class="TopAnime_FallingCircle"
    ></div>
    <div
      v-for="circle in 50"
      :key="circle"
      class="TopAnime_BlurredCircle"
    ></div>
    <div class="TopAnime_BigCircle"></div>
    <div class="TopAnime_Arrow">
      <div v-for="arrow in 3" :key="arrow" class="TopAnime_ArrowEach"></div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "TopAnime",
  components: {},
  data() {
    return {
      welcome: "WELCOME",
      hello: "Hi, I'm Makoto Hamaguchi",
    };
  },
  methods: {},
  mounted() {
    const circleFalltestest = anime.timeline({});
    circleFalltestest.add({
      targets: ".TopAnime_BigCircle",
      delay: 3000,
      opacity: [{ value: 1, duration: 300 }],
      scale: [{ value: 30, duration: 1 }],
      translateY: 50,
      duration: 15000,
      complete: function () {
        const elements = document.getElementsByClassName("TopAnime_BigCircle");
        while (elements.length) {
          elements.item(0).remove();
        }
      },
    });
    const circleFall = anime.timeline({});
    circleFall
      .add({
        targets: ".TopAnime_FallingCircle",
        translateX: function () {
          return anime.random(-1000, 1000);
        },
        scale: function () {
          return anime.random(1, 4);
        },
      })
      .add({
        targets: ".TopAnime_FallingCircle",
        opacity: [{ value: 0.6, duration: 400 }],
        translateY: 970,
        delay: anime.stagger(150),
        duration: 40000,
        complete: function () {
          const elements = document.getElementsByClassName(
            "TopAnime_FallingCircle"
          );
          while (elements.length) {
            elements.item(0).remove();
          }
        },
      });
    const circleFalltest = anime.timeline({});
    circleFalltest.add({
      targets: ".TopAnime_BlurredCircle",
      opacity: [{ value: 0.3, duration: 8000 }],
      translateX: function () {
        return anime.random(-800, 800);
      },
      translateY: function () {
        return anime.random(-500, 500);
      },
      scale: function () {
        return anime.random(1, 5);
      },
      delay: 5500,
      duration: 1,
    });

    anime
      .timeline({})
      .add({
        targets: ".TopAnime_TextWelcome .TopAnime_TextWelcomeEach",
        scale: [10, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 3000,
        delay: (el, i) => 70 * i,
      })
      .add({
        targets: ".TopAnime_TextWelcome",
        opacity: 0,
        duration: 3000,
        easing: "easeOutExpo",
      });

    anime
      .timeline({})
      .add({ duration: 5000 })
      .add({
        targets: ".TopAnime_TextHello .TopAnime_TextHelloEach",
        scale: [10, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 4500,
      });

    var arrow = function () {
      anime({
        targets: ".TopAnime_ArrowEach",
        opacity: 1,
        easing: "easeOutExpo",
        duration: 500,
        delay: anime.stagger(300),
        loop: true,
      });
    };
    anime.timeline({}).add({
      duration: 5000,
      complete: function () {
        return arrow();
      },
    });
  },
};
</script>

<style scoped lang="scss">
.TopAnime {
  color: white;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &_FallingCircle {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: radial-gradient(rgb(117, 166, 212), transparent, transparent);
    top: 0;
    opacity: 0;
  }
  &_BlurredCircle {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: radial-gradient(rgb(117, 166, 212), transparent, transparent);
    opacity: 0;
  }
  &_BigCircle {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: radial-gradient(rgb(117, 166, 212), transparent, transparent);
    top: 0;
    opacity: 0;
    z-index: 2;
  }
  &_TextWelcomeEach {
    display: inline-block;

    z-index: 3;
  }
  &_TextWelcomeEach {
    font-weight: 900;
    font-size: 6rem;
  }
  &_Text {
    position: absolute;
  }
  &_TextHelloEach {
    font-size: 4rem;
  }
  &_TextHelloEach {
    display: inline-block;

    z-index: 3;
  }
  &_Arrow {
    position: absolute;
    bottom: 80px;
  }
  &_ArrowEach {
    width: 30px;
    height: 30px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    border-image: linear-gradient(to right, 0%, white 100%);
    border-image-slice: 1;
    transform: rotate(45deg);
    opacity: 0;
  }
}
@media screen and (max-width: 832px) {
  .TopAnime {
    &_TextWelcomeEach {
      font-weight: 450;
      font-size: 3.5rem;
    }

    &_TextHelloEach {
      font-size: 3rem;
    }
  }
}
@media screen and (max-width: 625px) {
  .TopAnime {
    &_TextWelcomeEach {
      font-weight: 450;
      font-size: 2.6rem;
    }

    &_TextHelloEach {
      font-size: 1.6rem;
    }
  }
}
</style>
