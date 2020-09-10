<!-- [![](https://img.shields.io/npm/v/vt-notifications.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/vt-notifications) -->

[![](https://img.shields.io/github/license/sansil/vt-notifications?style=flat-square)](https://github.com/sansil/vt-notifications)

[![](https://img.shields.io/npm/dt/vt-notifications.svg?style=flat-square)](https://www.npmjs.com/package/vt-notifications)

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

Vue.use(Notifications);
```

## 🍞How to use

```vue
<notificationGroup group="foo">
// Here put your notifications wrapper box
...
<notification v-slot="{notifications}">
// Here put your notification layout
...
</notification>
</notificationGroup>
```

### Basic example

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

Then in any of your vue files:

```javascript
this.$notify(
  { group: "foo", title: "Success", text: "Your account was registered!" },
  2000
); // 2s
```

The first argument is an object containing the data for the `notification` layout, it important to specify the group where the notificatoins are going to be displayed, the second argument is the timeout. The default timeout is 3 seconds.

### Example with differents groups

You can use `notificationGroup` component to have different types of notifcations. For example, notifcations error messages in top center and generic app notifications in bottom-right corner

```vue
<notificationGroup group="error">
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
        <div class="flex justify-center items-center w-12 bg-red-500">
            <svg class="h-6 w-6 fill-current text-white" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"/>
            </svg>
        </div>

        <div class="-mx-3 py-2 px-4">
            <div class="mx-3">
                <span class="text-red-500 font-semibold">{{notification.title}}</span>
                <p class="text-gray-600 text-sm">{{notification.text}}</p>
            </div>
        </div>
        </div>
      </notification>
    </div>
  </div>
</notificationGroup>

<notificationGroup group="generic">
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
          <div class="flex justify-center items-center w-12 bg-blue-500">
              <svg class="h-6 w-6 fill-current text-white" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"/>
              </svg>
          </div>
          <div class="-mx-3 py-2 px-4">
            <div class="mx-3">
                <span class="text-blue-500 font-semibold">{{notification.title}}Info</span>
                <p class="text-gray-600 text-sm">{{notification.text}}</p>
            </div>
          </div>
        </div>
      </notification>
    </div>
  </div>
</notificationGroup>
```

Then in any of your vue files:

```javascript
// error notifcation
this.$notify(
  { group: "error", title: "Error", text: "Your email is already used!" },
  4000
);
// generic notification
this.$notify(
  {
    group: "generic",
    title: "Info",
    text: "This channel archived by the owner",
  },
  4000
);
```

## Props

Props por All props are optional.

| Name                   | Type   | Default                                                                                                                                                                                                                                                                                                                                                                                                                      | Description                                    |
| ---------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| maxNotifications       | Number | 10                                                                                                                                                                                                                                                                                                                                                                                                                           | Maximum notifications displayed simultaneously |
| transitionGroupClasses | Object | {enterActiveClassDelayed:"transform ease-out duration-300 transition delay-300",enterActiveClass:"transform ease-out duration-300 transition",enterClass:"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4",enterToClass:"translate-y-0 opacity-100 sm:translate-x-0",leaveActiveClass:"transition ease-in duration-500",leaveClass:"opacity-100",leaveToClass: "opacity-0", moveClass: "transition duration-500 "} | Classes for the transition-group component     |
