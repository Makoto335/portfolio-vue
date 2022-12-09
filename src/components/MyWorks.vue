<template>
  <section class="MyWorks">
    <div class="MyWorks_Wrapper">
      <SectionTitle title="WORKS" desc="制作物" />
      <div class="MyWorks_Contents">
        <div class="MyWorks_ContentsEach">
          <img :src="aboutImage" alt="" />
          <div class="MyWorks_Text">
            <h3>Portfolio Website</h3>
            <h2>ポートフォリオサイト</h2>
          </div>
          <div class="MyWorks_Action">
            <a href="https://github.com/Makoto335" class="fa-3x github">
              <font-awesome-icon :icon="['fab', 'github']"
            /></a>
            <button @click="showModal" class="MyWorks_Btn">構成・概要</button>
          </div>
        </div>
      </div>
      <div v-if="shouldShowModal">
        <MyWorksModal @closeModal="closeModal" />
      </div>
    </div>
  </section>
</template>

<script>
import MyWorksModal from "./modules/MyWorksModal.vue";
import SectionTitle from "./modules/SectionTitle.vue";

export default {
  name: "MyWorks",
  components: { MyWorksModal, SectionTitle },
  data() {
    return {
      aboutImage: require("../assets/images/topss.png"),
      shouldShowModal: false,
    };
  },
  methods: {
    showModal() {
      this.shouldShowModal = true;
    },
    closeModal() {
      this.shouldShowModal = false;
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.MyWorks {
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
      margin-left: 0 10px;
    }
    .MyWorks_Btn {
      margin-left: 10px;
    }
    .github {
      margin-right: 10px;
      vertical-align: middle;
    }
  }
}
</style>
