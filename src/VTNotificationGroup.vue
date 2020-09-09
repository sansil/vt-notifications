

<script>
export default {
  props: {
    group: {
      type: String,
      default: "",
    },
  },
  provide() {
    return {
      ["context"]: { group: this.group },
    };
  },
  render() {
    return this.$scopedSlots.default({
      group: this.group,
    });
  },
};
</script>

