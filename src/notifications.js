export const state = {
  notifications: [
  ],
};

let count = 0;
const generateId = () => {
  count = count + 1;
  return count
}
export const methods = {
  notify(notification, timeout) {
    notification.id = generateId()
    notification.group = notification.group || ""; // add default group
    state.notifications.push(notification);
    setTimeout(() => {
      this.removeNotification(notification.id)
    }, timeout || 3000) // default time 3s
  },
  removeNotification(id) {
    const found = state.notifications.findIndex((n) => n.id === id);
    if (found >= 0) {
      state.notifications.splice(found, 1);
    }
  }
};