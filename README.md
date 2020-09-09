<!-- [![](https://img.shields.io/npm/v/vt-notifications.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/vt-notifications) -->
<!-- [![](https://img.shields.io/npm/dt/vt-notifications.svg?style=flat-square)](https://www.npmjs.com/package/vt-notifications) -->

[![](https://img.shields.io/github/license/sansil/vt-notifications?style=flat-square)](https://github.com/sansil/vt-notifications)

# vt-notifications

A headless vue notification library to use with tailwind

## 🌟Features

- 100% customizable
- Create different groups of notifications
- Built in transitions

## ⚡️ Installation

```bash
yarn add vt-notifications
```

or

```bash
npm i vt-notifications
```

You can then register Notifications as a Vue plugin.

```js
import Vue from "vue";
import Notifications from "vt-notifications";

// This exposes `this.$breadstick` in your Vue template.
Vue.use(Notifications);
```

## Basic usage

For example in your App.vue

```vue
<notificationGroup group="foo">
  <div
    class="fixed inset-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-end"
  >
    <div class="max-w-sm w-full">
      <notification v-slot="{notifications}">
        <div
          class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4"
          v-for="notification in notifications"
          :key="notification.id"
        >
          <div class="flex justify-center items-center w-12 bg-green-500">
            <svg
              class="h-6 w-6 fill-current text-white"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
              />
            </svg>
          </div>

          <div class="-mx-3 py-2 px-4">
            <div class="mx-3">
              <span class="text-green-500 font-semibold">{{notification.title}}</span>
              <p class="text-gray-600 text-sm">{{notification.text}}</p>
            </div>
          </div>
        </div>
      </notification>
    </div>
  </div>
</notificationGroup>
```

In any of your vue files:

```javascript
this.$notify(
  { group: "foo", title: "Success", text: "Your account was registered!" },
  2000
); // 2s
```
