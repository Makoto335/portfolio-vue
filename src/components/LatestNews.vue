<template>
  <section class="LatestNews">
    <div class="LatestNews_Wrapper">
      <SectionTitle title="NEWS" desc="制作物や技術記事の更新情報" />
      <div class="LatestNews_Contents">
        <div class="LatestNews_ContentsEach">
          <img :src="news" alt="" />
          <div class="LatestNews_Text">
            <h3>制作物</h3>
            <h2>ポートフォリオサイトを作りました。</h2>
          </div>
          <div class="LatestNews_Action">
            <a href="https://github.com/Makoto335" class="fa-2x github">
              <button>
                <font-awesome-icon :icon="['fab', 'github']" /></button
            ></a>
            <a href=""> <button>リンク</button></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "./modules/SectionTitle.vue";

export default {
  name: "LatestNews",
  components: { SectionTitle },
  data() {
    return {
      news: require("../assets/images/topss.png"),
    };
  },
};
</script>

<style scoped lang="scss">
.LatestNews {
  padding: 50px 0;
  background: #303539;
  color: white;
  border-bottom: 3px solid #f6a2b7;
  font-size: 0.8rem;

  &_Wrapper {
    opacity: 0;
  }
  &_Contents {
    display: flex;
    width: 100%;
    height: 450px;
    margin: 0 auto;
    justify-content: center;
  }
  &_ContentsEach {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 400px;
    margin: 0 10px;
    word-break: break-all;
    color: black;
    background: white;
    img {
      width: 100%;
      height: 225px;
    }
  }
  &_Text {
    text-align: center;
    padding: 10px;
    overflow: hidden;
    height: 200px;
    h3 {
      margin: unset;
      margin-top: 10px;
      margin-bottom: 20px;
      border-bottom: solid 3px #f2c700;
      display: inline-block;
    }
  }
  &_Action {
    padding: 10px;
    margin-top: auto;
    button {
      vertical-align: middle;
      background: unset;
      color: black;
      margin: 0px 10px;
    }
  }
}
</style>
