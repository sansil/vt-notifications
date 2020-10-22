<!-- [![](https://img.shields.io/npm/v/vt-notifications.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/vt-notifications) -->

[![](https://img.shields.io/github/license/sansil/vt-notifications?style=flat-square)](https://github.com/sansil/vt-notifications)

[![](https://img.shields.io/npm/dt/vt-notifications.svg?style=flat-square)](https://www.npmjs.com/package/vt-notifications)

# vt-notifications

A headless vue notification library to use with tailwind

## 🌟 Features

- 100% customizable
- Create different groups of notifications
- Built in transitions

## 🤖 Demo

[Live demo](https://codesandbox.io/s/vue-tailwind-notifications-i4tgd?file=/src/App.vue)

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

## 🍞 How to use

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

### Using different types of notifcations

You can render different types of notifications in the same group using a conditional, for example `v-if="notification.type==='info'"`

```vue
<notificationGroup group="foo">
  <div class="fixed inset-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-end">
    <div class="max-w-sm w-full">
      <notification v-slot="{notifications}">
        <div v-for="notification in notifications" :key="notification.id">
          <div
            v-if="notification.type==='info'"
            class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4"
          >
            <div class="flex justify-center items-center w-12 bg-blue-500">
              <svg
                class="h-6 w-6 fill-current text-white"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
                />
              </svg>
            </div>

            <div class="-mx-3 py-2 px-4">
              <div class="mx-3">
                <span class="text-blue-500 font-semibold">{{notification.title}}</span>
                <p class="text-gray-600 text-sm">T{{notification.text}}</p>
              </div>
            </div>
          </div>
          <div
            class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4"
            v-if="notification.type==='warning'"
          >
            <div class="flex justify-center items-center w-12 bg-yellow-500">
              <svg
                class="h-6 w-6 fill-current text-white"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
                />
              </svg>
            </div>

            <div class="-mx-3 py-2 px-4">
              <div class="mx-3">
                <span class="text-yellow-500 font-semibold">{{notification.title}}</span>
                <p class="text-gray-600 text-sm">{{notification.text}}</p>
              </div>
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
  {
    title: "Info",
    text: "This channel archived by the owner!",
    type: "info",
    group: "foo",
  },
  4000
);
// generic notification
this.$notify(
  {
    title: "Warning",
    text: "Your image size is too large!",
    type: "warning",
    group: "foo",
  },
  4000
);
```

## Props

Props for **notification component**, all are opcional.

| Name                   | Type   | Default                                                                                                                                                                                                                                                                                                                                                                                                                      | Description                                    |
| ---------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| maxNotifications       | Number | 10                                                                                                                                                                                                                                                                                                                                                                                                                           | Maximum notifications displayed simultaneously |
| transitionGroupClasses | Object | {enterActiveClassDelayed:"transform ease-out duration-300 transition delay-300",enterActiveClass:"transform ease-out duration-300 transition",enterClass:"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4",enterToClass:"translate-y-0 opacity-100 sm:translate-x-0",leaveActiveClass:"transition ease-in duration-500",leaveClass:"opacity-100",leaveToClass: "opacity-0", moveClass: "transition duration-500 "} | Classes for the transition-group component     |

Props for **notification group component**, all are opcional.

| Name     | Type   | Description                             |
| -------- | ------ | --------------------------------------- |
| position | String | "bottom" or "top are the posible values |
| group    | String | Name of the group of notifications      |

## Defualt scoped slot

Scope props:

| Name          | Type     | Description                                                              |
| ------------- | -------- | ------------------------------------------------------------------------ |
| notifications | Array    | Arrya of notification object                                             |
| close         | Function | when called closes the notification. Expect the notification id as input |

### Example

```vue
<notification v-slot="{ notifications, close }">
  <div
    v-for="notification in notifications"
    :key="notification.id"
    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
    role="alert"
  >
    <strong class="font-bold">Holy smokes!</strong>
    <span class="block sm:inline">Something seriously bad happened.</span>

    <button @click="close(notification.id)" class="absolute top-0 bottom-0 right-0 px-4 py-3">
      <svg
        class="fill-current h-6 w-6 text-red-500"
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <title>Close</title>
        <path
          d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
        />
      </svg>
    </button>
  </div>
</notification>
```

## Using the library in Nuxt.js

To get this library working in Nuxt.js you need to prepare a few things.

Create a new plugin in your Nuxt.js project `plugin/vt-notifications.js` and add the following:

```js
import Vue from "vue";
import Notifications from "vt-notifications";

Vue.use(Notifications);
```

Now you need to add the plugin in your `nuxt.config.js` and add vt-notifications to the transpilation build step.

Add the following lines in your `nuxt.config.js`:

```js
plugins: [
  { src: "~/plugins/vt-notifications" },
],
build: {
  transpile: [
    "vt-notifications"
  ],
}
```
