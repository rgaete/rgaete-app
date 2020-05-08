<!--src/App.svelte-->
<script>
  import Navbar from "./Components/Navbar/Navbar.svelte";
  import Banner from "./Components/Banner/Banner.svelte";
  import Blog from "./Components/Blog/Blog.svelte";
  import About from "./Components/About/About.svelte";
  import Social from "./Components/Social/Social.svelte";
  import Footer from "./Components/Footer/Footer.svelte";
  import DATA from "./Data/data";
</script>

<!-- Navbar -->
<Navbar navlists={DATA.NAVBAR_DATA} header={DATA.HEADER} />
<!-- Banner -->
<Banner bannerData={DATA.BANNER_DATA} />
<!-- Blog -->
<Blog blogData={DATA.BLOG_DATA} />
<!-- About -->
<About aboutData={DATA.ABOUT_DATA} />
<!-- Social -->
<Social socialData={DATA.SOCIAL_DATA} />
<!-- Footer -->
<Footer footerData={DATA.FOOTER_DATA} header={DATA.HEADER} />