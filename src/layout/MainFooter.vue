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
            <a href="http://www.facebook.com/wannisa.thonekom">
              ติดต่อเรา
            </a>
          </li>
          <li>
            <p>v0.1.1</p>
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
    title: "บ้านหยอดเหรียญ",
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: "%s",
    // Define meta tags here.
    meta: [
      { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "บ้านหยอดเหรียญ" },
      { name: "dc.title", content: "บ้านหยอดเหรียญ" },
      {
        name: "dc.description",
        content:
          "บ้านหยอดเหรียญ จำหน่าย ติดตั้ง และซ่อมบำรุง เครืองหยอดเหรียญ กล่องหยอดเหรียญ ด้วยทีมงานที่มีประสปการณ์ กล่องหยอดเหรียญได้มาตรฐาน คุ้มค่าในการลงทุน มีความทนทานสูง สามารถติดตั้งได้กับเครื่องใช้ไฟฟ้าได้หลายชนิดเช่น",
      },
      { name: "dc.relation", content: "https://บ้านหยอดเหรียญ.com/" },
      { name: "dc.source", content: "https://บ้านหยอดเหรียญ.com/" },
      { name: "dc.language", content: "th" },
      {
        name: "description",
        content:
          "บ้านหยอดเหรียญ จำหน่าย ติดตั้ง และซ่อมบำรุง เครืองหยอดเหรียญ กล่องหยอดเหรียญ ด้วยทีมงานที่มีประสปการณ์ กล่องหยอดเหรียญได้มาตรฐาน คุ้มค่าในการลงทุน มีความทนทานสูง สามารถติดตั้งได้กับเครื่องใช้ไฟฟ้าได้หลายชนิดเช่น",
      },
      {
        name: "robots",
        content:
          "max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { name: "og:url", content: "https://บ้านหยอดเหรียญ.com/" },
      { name: "og:site_name", content: "บ้านหยอดเหรียญ.com" },
      { name: "og:locale", content: "th" },
      { name: "og:type", content: "website" },
      { name: "og:title", content: "บ้านหยอดเหรียญ" },
      {
        name: "og:description",
        content:
          "บ้านหยอดเหรียญ จำหน่าย ติดตั้ง และซ่อมบำรุง เครืองหยอดเหรียญ กล่องหยอดเหรียญ ด้วยทีมงานที่มีประสปการณ์ กล่องหยอดเหรียญได้มาตรฐาน คุ้มค่าในการลงทุน มีความทนทานสูง สามารถติดตั้งได้กับเครื่องใช้ไฟฟ้าได้หลายชนิดเช่น",
      },
      {
        name: "og:image",
        content:
          "https://xn--e3cnod5bbg5dcs5c3bxj1e.com/img/S__3817481.cf8e4407.jpg",
      },
      {
        name: "og:image:secure_url",
        content:
          "https://xn--e3cnod5bbg5dcs5c3bxj1e.com/img/909973.LINE.9c753bce.jpg",
      },
      { name: "og:image:width", content: "320" },
      { name: "og:image:height", content: "410" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "บ้านหยอดเหรียญ พีระเซอร์วิส" },
      {
        name: "twitter:description",
        content:
          "บ้านหยอดเหรียญ พีระเซอร์วิส จำหน่าย ติดตั้ง และซ่อมบำรุง เครืองหยอดเหรียญ กล่องหยอดเหรียญ ด้วยทีมงานที่มีประสปการณ์ กล่องหยอดเหรียญได้มาตรฐาน คุ้มค่าในการลงทุน มีความทนทานสูง สามารถติดตั้งได้กับเครื่องใช้ไฟฟ้าได้หลายชนิดเช่น",
      },
      {
        name: "twitter:image",
        content:
          "https://xn--e3cnod5bbg5dcs5c3bxj1e.com/img/S__3325955.de5647c0.jpg",
      },
      // Often the same as your meta description, but not always.
    ],
    link: [
      { rel: "canonical", href: "https://บ้านหยอดเหรียญ.com" },
    ],
  },
  props: {
    backgroundColor: String,
    type: String,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>
