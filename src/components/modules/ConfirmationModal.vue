<template>
  <div class="ConfirmationModal">
    <div class="ConfirmationModal_Wrapper">
      <div class="ConfirmationModal_Text">
        <h1>お問い合わせ 内容確認</h1>
        <table>
          <tr class="ConfirmationModal_Info">
            <th>お名前</th>
            <td>{{ confiramationValue.name }}</td>
          </tr>
          <tr class="ConfirmationModal_Info">
            <th>メールアドレス</th>
            <td>{{ confiramationValue.email }}</td>
          </tr>
          <tr class="ConfirmationModal_Inquiry">
            <th>お問い合わせ内容</th>
            <td>{{ confiramationValue.message }}</td>
          </tr>
        </table>
      </div>
      <div class="ConfirmationModal_Action">
        <button
          class="ConfirmationModal_Btn"
          :disabled="isDisabled"
          @click="onClickCancel"
          :class="{ _disabledBtn: isDisabled }"
        >
          戻る
        </button>
        <button
          class="ConfirmationModal_Btn ConfirmationModal_SendBtn"
          :disabled="isDisabled"
          @click="onClickSend"
          :class="{ _disabledBtn: isDisabled }"
        >
          送信
        </button>
        <loading
          :active="isLoading"
          :can-cancel="false"
          :is-full-page="true"
        ></loading>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  components: {
    loading: Loading,
  },
  emits: ["sendMail", "closeModal"],
  props: ["confiramationValue"],
  data() {
    return {
      isDisabled: false,
      isLoading: false,
    };
  },
  methods: {
    onClickSend() {
      this.$emit("sendMail");
    },
    onClickCancel() {
      this.$emit("closeModal");
    },
    disableButton() {
      this.isDisabled = true;
    },
    loadSubmit() {
      this.isLoading = true;
    },
    stoploadSubmit() {
      this.isLoading = false;
    },
  },
};
</script>

<style scoped lang="scss">
.ConfirmationModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 6;

  &_Wrapper {
    position: absolute;
    top: 48%;
    left: 50%;
    display: flex;
    flex-direction: column;
    transform: translate(-50%, -50%);
    width: 900px;
    height: 800px;
    padding: 32px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #333;
  }
  &_Text {
    h1 {
      text-align: center;
      margin-bottom: 50px;
    }
    table {
      border-spacing: 0;
      border: 1px solid #333;
      border-radius: 10px;
      margin-bottom: 20px;
      width: 850px;
    }
    th {
      white-space: nowrap;
      word-break: break-all;
      padding: 10px 25px;

      text-align: left;
      width: 50px;
    }
  }
  &_Info {
    td {
      border-left: 1px solid #555;
      padding: 10px 25px;
      border-bottom: 1px solid #555;
      text-align: left;
      word-break: break-all;
      overflow: auto;
      height: 48px;
      display: block;
    }
    th {
      border-bottom: 1px solid #555;
    }
  }
  &_Inquiry {
    td {
      border-left: 1px solid #555;
      padding: 10px 25px;
      text-align: left;
      white-space: pre-line;
      height: 400px;
      overflow: auto;
      display: block;
      word-break: break-all;
    }
  }
  &_Action {
    margin-top: auto;
    display: flex;
    justify-content: center;
  }
  &_Btn {
    width: 130px;
    margin: 0 70px;
    padding: 8px;
    line-height: 1.5;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
  }
  &_SendBtn {
    background: rgb(60, 140, 245);
    color: white;
  }
}
._disabledBtn {
  background: #576c65;
  color: #0a0a0a;
}

@media screen and (max-width: 921px) {
  .ConfirmationModal {
    &_Wrapper {
      width: 570px;
      height: 700px;
      font-size: 0.98rem;
      padding: 20px;
    }
    &_Inquiry {
      td {
        height: 300px;
      }
    }
    table {
      width: 520px;
    }
  }
}
@media screen and (max-width: 570px) {
  .ConfirmationModal {
    &_Wrapper {
      width: 370px;
      font-size: 0.9rem;
    }
    table {
      width: 330px;
    }
    &_Btn {
      margin: 0 30px;
    }
  }
}
</style>
