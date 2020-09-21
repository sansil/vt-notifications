

<script>
export default {
  props: {
    group: {
      type: String,
      default: "",
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom"].includes(value);
      },
    },
  },

  provide() {
    return {
      ["context"]: { group: this.group, position: this.position },
    };
  },
  render() {
    return this.$scopedSlots.default({
      group: this.group,
    });
  },
};
</script>

