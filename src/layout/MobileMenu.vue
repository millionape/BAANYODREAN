<template>
  <md-list
    class="nav-mobile-menu nav-mobile-section-start"
    v-if="navMobileSectionStart === 'true'"
  >
    <slot></slot>
  </md-list>
</template>

<script>
export default {
  metaInfo: {
    // Children can override the title.
    title: 'บ้านหยอดเหรียญ',
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: '%s ← บ้านหยอดเหรียญ',
    // Define meta tags here.
    meta: [
      {"http-equiv": 'Content-Type', content: 'text/html; charset=utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: 'บ้านหยอดเหรียญ'}
    ]
  },
  name: "mobile-menu",
  props: {
    navMobileSectionStart: {
      type: String,
      default: "false"
    }
  }
};
</script>
