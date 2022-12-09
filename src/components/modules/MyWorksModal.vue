<template>
  <div class="MyWorksModal" @click.self="onClickCancel">
    <div class="MyWorksModal_Wrapper">
      <img :src="aboutImage" alt="" />
      <div class="MyWorksModal_Text">
        <p>
          フロントはレスポンシブ対応でVue3+ Vercel、バックエンドにRailsAPIモード +
          HerokuのSPA構成になっています。次に予定しているWebアプリのための習作として作ったので、シンプルなサイトですがあえてSPAにチャレンジしてみました。当初はフロントはVueに触ったこともなく、HTMLとCSSもあやふやな状態で、バックエンドに関してはRuby
          on Rails
          Tutorialを学習した程度だったため、制作の過程で非常に多くのことを学ぶことができました。
        </p>
      </div>
      <div class="MyWorksModal_Action">
        <button class="MyWorksModal_Btn" @click="onClickCancel">戻る</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyWorksModal",
  components: {},
  emits: ["closeModal"],
  data() {
    return {
      aboutImage: require("../../assets/images/topss.png"),
    };
  },
  methods: {
    onClickCancel() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped lang="scss">
.MyWorksModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;

  &_Wrapper {
    position: absolute;
    top: 42%;
    left: 50%;
    display: flex;
    flex-direction: column;
    transform: translate(-50%, -50%);
    width: 900px;
    height: 800px;
    box-sizing: border-box;
    background-color: #fff;
    color: #0a0a0a;
    font-size: 1.2rem;
    overflow-wrap: break-word;
    border-radius: 4px;
    border: 4px solid #f2c700;
    text-align: left;
  }

  &_Text {
    height: 300px;
    padding: 0 20px;
  }
  &_Action {
    margin-top: auto;
    padding: 10px;
    text-align: center;
  }
  &_Btn {
    font-weight: bold;
  }
}
@media screen and (max-width: 921px) {
  .MyWorksModal {
    &_Wrapper {
      width: 500px;
      height: 600px;
      font-size: 0.98rem;
    }
    &_Text {
      height: 400px;
    }
  }
}
@media screen and (max-width: 520px) {
  .MyWorksModal {
    &_Wrapper {
      width: 370px;
      height: 550px;
      font-size: 0.9rem;
    }
    &_Text {
      height: 400px;
    }
  }
}
</style>
