<!--src/Components/Social/Social.svelte-->

<script>
  export let socialData = {};
  const { SOCIAL_LIST, HEADING } = socialData;
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="social-media" class="section grey-bgcolor">
  <div class="container text-center">
    <h2 class="title text-center">{HEADING}</h2>
    <div class="social-icons section-body">
      {#each SOCIAL_LIST as list}
        <a
          href={list.LINK}
          target="_blank">
          <img src={list.IMAGE_URL} alt="Social media {list.NAME}" />
        </a>
      {/each}
    </div>
  </div>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>
  .social-icons img {
    width: 75px;
    transition: 0.5s;
  }
  .social-icons a:hover img {
    transform: translateY(-10px);
  }
  a:hover {
    text-decoration: none;
  }
</style>