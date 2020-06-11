<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="#">
              บ้านหยอดเหรียญ
            </a>
          </li>
          <li>
            <a href="https:///presentation.creative-tim.com">
              ติดต่อเรา
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, made by KITTAPHORN JANPHENG 
      </div>
    </div>
  </footer>
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
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
