
<script>
import { state, methods } from "./notifications.js";
export default {
  inject: {
    context: { default: { group: "", position: "top" } },
  },
  props: {
    maxNotifications: {
      type: Number,
      default: 10,
    },
    transitionGroupClasses: {
      default: () => {
        return {
          enterActiveClassDelayed:
            "transform ease-out duration-300 transition delay-300",
          enterActiveClass: "transform ease-out duration-300 transition",
          enterClass:
            "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4",
          enterToClass: "translate-y-0 opacity-100 sm:translate-x-0",
          leaveActiveClass: "transition ease-in duration-500",
          leaveClass: "opacity-100",
          leaveToClass: "opacity-0",
          moveClass: "transition duration-500",
        };
      },
    },
  },
  render(createElement) {
    return createElement(
      "transition-group",
      {
        attrs: {
          "enter-active-class":
            this.notificationsByGroup.length > 1
              ? this.transitionGroupClasses.enterActiveClassDelayed
              : this.transitionGroupClasses.enterActiveClass,
          "enter-class": this.transitionGroupClasses.enterClass,
          "enter-to-class": this.transitionGroupClasses.enterToClass,
          "leave-active-class": this.transitionGroupClasses.leaveActiveClass,
          "leave-class": this.transitionGroupClasses.leaveClass,
          "leave-to-class": this.transitionGroupClasses.leaveToClass,
          "move-class": this.transitionGroupClasses.moveClass,
        },
      },
      [
        Object.prototype.hasOwnProperty.call(this.$scopedSlots, 'default') ? this.$scopedSlots.default({ notifications: this.sortedNotifications, close: this.close }) : null,
      ]
    );
  },
  data() {
    return {
      notifications: state.notifications,
    };
  },
  computed: {
    sortedNotifications() {
      if (this.context.position === "bottom")
        return [...this.notificationsByGroup].slice(0, this.maxNotifications);
      // if not bottom reverse the array
      return [...this.notificationsByGroup]
        .reverse()
        .slice(0, this.maxNotifications);
    },
    notificationsByGroup() {
      return this.notifications.filter((n) => n.group === this.context.group);
    },
  },
  methods: {
    close(id) {
      this.$emit("close");
      methods.removeNotification(id);
    },
  },
};
</script>