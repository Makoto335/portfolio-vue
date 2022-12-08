<template>
  <section class="AboutMe">
    <div class="AboutMe_Wrapper">
      <SectionTitle title="ABOUT" desc="私について" />
      <div class="AboutMe_Content">
        <div><img :src="aboutmeImage" alt="" /></div>
        <div class="AboutMe_Profile">
          <h3>とある週末農民です</h3>
          <p>
            北海道生まれ<br />
            映画監督になりたいと2017年に上京するも挫折。<br /><br />
            義父が営む農業を手伝いながら、リモートでできるアルバイトをしたりしています。<br />
            農業に携わっていくうちに、スマート農業に興味が湧き、その流れでプログラミングに触れるようになりました。<br />
            元々テック系は好きだったおかげで、学習が努力と感じないくらいにのめり込んでいます。<br />
            現在はとにかく技術に興味があるような状態ですが、いずれ吸収した技術を農業に活かす事が目標です。
            <br /><br />
            TOEIC880点, 農業歴2年
          </p>
        </div>
        <div class="AboutMe_Contact">
          <h3>濱口 誠<br />Makoto Hamaguchi</h3>
          <div class="AboutMe_Address">
            <strong>Email: </strong>
            <span> seaentrancesincerity72358@gmail.com</span>
          </div>
          <div class="AboutMe_Address">
            <strong>City: </strong>
            <span>Tokyo</span>
          </div>
          <div class="AboutMe_Sns">
            <span>
              <a href="https://twitter.com/pachapochapon" class="fa-2x twitter">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </a>
              <a href="https://github.com/Makoto335" class="fa-2x github">
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "./modules/SectionTitle.vue";

export default {
  name: "AboutMe",
  components: {
    SectionTitle,
  },
  data() {
    return {
      aboutmeImage: require("../assets/images/profile-img.jpg"),
    };
  },
};
</script>

<style scoped lang="scss">
.AboutMe {
  padding: 50px 0 150px 0;
  border-bottom: 3px solid #f6a2b7;

  &_Wrapper {
    opacity: 0;
  }
  &_Profile {
    text-align: left;
    max-width: 900px;
    max-width: 100%;
    margin: 30px 30px 0 0;
    padding: 15px;
  }
  &_Content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-wrap: break-word;
    img {
      width: 350px;
      height: 350px;
      border-radius: 50%;
      margin: 0 15px;
      padding: 10px;
    }
  }
  &_Contact {
    text-align: left;
    margin-top: 30px;
    padding: 15px 0 15px 15px;
  }
  &_Address {
    margin-bottom: 20px;
  }
  &_Sns {
    .github {
      margin-left: 10px;
    }
    .fa-github {
      color: #000000;
    }
    .fa-twitter {
      color: #1a8cd8;
    }
  }
}
@media screen and (max-width: 1704px) {
  .AboutMe {
    &_Content {
      display: flex;
      flex-direction: column;
    }
    &_Profile {
      margin: 0 auto;
      width: 700px;
      h3 {
        text-align: center;
      }
    }

    &_Contact {
      margin: 0 auto;
    }
  }
}
@media screen and (max-width: 832px) {
  .AboutMe {
    &_Content {
      img {
        width: 300px;
        height: 300px;
      }
    }
    &_Profile {
      width: 500px;
      font-size: 0.8rem;
    }
  }
}
@media screen and (max-width: 625px) {
  .AboutMe {
    &_Profile {
      width: 300px;
      font-size: 0.8rem;
    }
  }
}
</style>
