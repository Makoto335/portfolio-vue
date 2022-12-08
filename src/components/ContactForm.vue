<template>
  <section
    class="ContactForm"
    :class="{ ContactForm_BackGround: shouldShowModal }"
  >
    <div class="ContactForm_Wrapper">
      <SectionTitle title="CONTACT" desc="お問い合わせ" />
      <MqResponsive target="sm">
        <p>
          お問い合わせは、以下のフォームからお送り頂くか、Emailアドレスへ直接メールをお願い致します。<br />なお、お問い合わせの内容によっては、お応えできない場合がございますので、予めご了承ください。<br />Email:
          seaentrancesincerity72358@gmail.com
        </p>
      </MqResponsive>
      <MqResponsive target="xs">
        <div class="ContactForm_SpMessage">
          <p>
            お問い合わせは、以下のフォームからお送り頂くか、Emailアドレスへ直接メールをお願い致します。<br />なお、お問い合わせの内容によっては、お応えできない場合がございますので、予めご了承ください。<br />Email:
            seaentrancesincerity72358@gmail.com
          </p>
        </div>
      </MqResponsive>
      <Form
        @submit="confirmMessage"
        :validation-schema="schema"
        v-slot="{ errors, meta }"
        ref="form"
        class="ContactForm_VeeForm"
      >
        <div class="ContactForm_Info">
          <label>お名前</label>
          <Field
            name="name"
            type="text"
            class="ContactForm_VeeField"
            :class="{ _invalidField: errors.name }"
          />
          <div class="_errorMessage">{{ errors.name }}</div>
        </div>
        <div class="ContactForm_Info">
          <label>メールアドレス</label>
          <Field
            name="email"
            type="text"
            class="ContactForm_VeeField"
            :class="{ _invalidField: errors.email }"
          />
          <div class="_errorMessage">{{ errors.email }}</div>
        </div>
        <div class="ContactForm_Inquiry">
          <label>お問い合わせ内容</label>
          <Field
            as="textarea"
            name="message"
            type="text"
            class="ContactForm_VeeField"
            :class="{ _invalidField: errors.message }"
          />
          <div class="_errorMessage">{{ errors.message }}</div>
        </div>
        <div class="ContactForm_Action">
          <button
            :disabled="isDisabled"
            class="ContactForm_Button"
            :class="{ _disabled: !(meta.valid && meta.dirty) || isDisabled }"
          >
            確認
            <div :class="{ ContactForm_Spinner: isDisabled }"></div>
          </button>
          <div class="error">{{ resultOfSending }}</div>
        </div>
      </Form>
      <div v-if="shouldShowModal">
        <ConfirmationModal
          @sendMail="sendMail"
          @closeModal="closeModal"
          :confiramationValue="confiramationValue"
          ref="cfModal"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "./modules/SectionTitle.vue";
import axios from "../plugins/axiosDefault.js";
import ConfirmationModal from "./modules/ConfirmationModal.vue";
import { configure, Field, Form } from "vee-validate";
import * as Yup from "yup";
import { MqResponsive } from "vue3-mq";

configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: true,
  validateOnModelUpdate: true,
});
export default {
  name: "ContactForm",
  components: {
    MqResponsive,
    Form,
    Field,
    ConfirmationModal,
    SectionTitle,
  },
  data() {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required("お名前を入力してください")
        .max(60, "60文字以下で入力してください"),
      email: Yup.string()
        .required("メールアドレスを入力してください")
        .max(254, "254文字以下で入力してください")
        .email("有効なメールアドレスを入力してください"),
      message: Yup.string()
        .required("お問い合わせ内容を入力してください")
        .max(500, "500文字以下で入力してください"),
    });
    return {
      schema,
      shouldShowModal: false,
      confiramationValue: [],
      isDisabled: false,
      resultOfSending: null,
      isLoading: true,
    };
  },

  methods: {
    confirmMessage(values) {
      this.confiramationValue = null;
      this.confiramationValue = values;
      this.shouldShowModal = true;
    },
    closeModal() {
      this.shouldShowModal = false;
    },
    formReset() {
      this.$refs.form.resetForm();
    },
    activeButton() {
      this.isDisabled = false;
    },
    scrollToValue: function (value) {
      window.scrollTo({
        top: value,
        behavior: "smooth",
      });
    },
    async sendMail() {
      this.error = null;
      this.$refs.cfModal.disableButton();
      this.isDisabled = true;
      this.$refs.cfModal.loadSubmit();
      try {
        const res = await axios.post(
          "/contacts",
          {
            name: this.confiramationValue.name,
            email: this.confiramationValue.email,
            message: this.confiramationValue.message,
          },
          {
            headers: { "Content-type": "application/json" },
          }
        );
        if (!res) {
          throw new Error("送信出来ませんでした");
        }
        if (!this.error) {
          this.shouldShowModal = false;
          this.formReset();
          setTimeout(
            function () {
              this.activeButton();
              this.resultOfSending = null;
            }.bind(this),
            30000
          );

          this.$refs.cfModal.stoploadSubmit();
          this.resultOfSending =
            "ありがとうございます。メッセージは送信されました。\nもう一度送信する際はしばらくお待ち頂くか、リロードして下さい。";
        }
        console.log({ res });
        return res;
      } catch (error) {
        this.$refs.cfModal.stoploadSubmit();
        this.activeButton();
        this.scrollToValue(5300);
        this.shouldShowModal = false;
        this.resultOfSending =
          "送信出来ませんでした。\nしばらくお待ち頂くか、リロードしてからもう一度お試し下さい。";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.error {
  white-space: pre-wrap;
  margin-top: 12px;
}
.ContactForm {
  padding: 50px 0 20px;
  border-bottom: 3px solid #f6a2b7;

  &_Wrapper {
    opacity: 0;
  }
  &_VeeForm {
    margin: 0 auto;
    max-width: 760px;
    text-align: left;
  }
  &_VeeField {
    width: 100%;
    height: 2.4em;
    margin: 8px auto;
    border-radius: 4px;
    border: 2px solid rgb(220, 216, 216);
    outline: none;
    box-sizing: border-box;
    &:first-child {
      height: 30px;
    }
  }
  &_Action {
    text-align: center;
  }
  &_Button {
    background: #0ab179;
    color: white;
    font-weight: bold;
  }
  &_Spinner {
    width: 20px;
    height: 20px;
    margin: 0 auto;
    border: 4px #ddd solid;
    border-top: 4px #8ca552 solid;
    border-radius: 50%;
    animation: sp-anime 1s infinite linear;
  }

  @keyframes sp-anime {
    100% {
      transform: rotate(360deg);
    }
  }
  &_Inquiry {
    textarea {
      width: 100%;
      height: 250px;
      padding: 12px 20px;
      margin: 8px auto;
      border-radius: 4px;
      resize: none;
      box-sizing: border-box;
    }
  }
}
._disabled {
  background: #576c65;
  color: #0a0a0a;
}
._errorMessage {
  color: #dd3f1d;
}
._invalidField {
  border: solid 1px #dd3f1d;
  outline: 0;
}
@media screen and (max-width: 832px) {
  .ContactForm {
    p {
      font-size: 0.85rem;
    }
  }
}
@media screen and (max-width: 625px) {
  .ContactForm {
    &_SpMessage {
      text-align: left;
      overflow-wrap: break-word;
      margin: 0 auto;
      width: 370px;
    }
  }
}
</style>
