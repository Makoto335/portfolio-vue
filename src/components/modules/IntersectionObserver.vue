<template>
  <div :ref="targetName">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "IntersectionObserver",
  props: {
    targetName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isIntersectingElement: false,
    };
  },
  watch: {
    isIntersectingElement: function (value) {
      this.$emit("fadeInSection", value);
    },
  },
  mounted() {
    console.log(this.$refs[this.targetName]);
    const observedTarget = this.$refs[this.targetName];
    const handler = (entries) => {
      if (entries[0].isIntersecting) {
        this.isIntersectingElement = true;
        observer.unobserve(observedTarget);
      } else {
        this.isIntersectingElement = false;
      }
    };
    var options = {
      root: null,
      rootMargin: "-30% 0px",
      threshold: 0,
    };
    const observer = new window.IntersectionObserver(handler, options);
    observer.observe(observedTarget);
  },
};
</script>
