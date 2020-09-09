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
    state.notifications.splice(state.notifications.findIndex(n => n.id === id), 1)
  }
};