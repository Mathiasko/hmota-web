<template>
  <div class="grid grid-cols-2 md:grid-cols-7 bgCol p-10">
    <div>
      <p>Socials</p>
      <ul>
        <li>
          <a href="">Instagram</a>
        </li>
        <li>
          <a href="">Facebook</a>
        </li>
        <li>
          <a href="">Spotify</a>
        </li>
      </ul>
    </div>
    <div>
      <p>Content</p>
      <ul>
        <li>Cart</li>
        <li>Shop</li>
        <li>Jurnal</li>
        <li>Blog</li>
        <li>About us</li>
        <li>Hmota team</li>
        <li>Reviews</li>
        <li>Contact</li>
        <li>Vacancies</li>
      </ul>
    </div>
    <div>
      <p>Jurnal</p>
      <ul>
        <li>Essays</li>
        <li>Short stories</li>
        <li>Poetry</li>
        <li>Interviews</li>
        <li>Reports</li>
        <li>Arts & Culture</li>
      </ul>
    </div>
    <div class="col-span-2 pt-10">
      <p>©2019 – 2021 HMOTA GDPR rules</p>
    </div>
    <div class="col-span-2 pt-10">
      <p>Contact</p>
      <p>casopishmota@gmail.com</p>
      <img :src="'assets/img/logoFut.jpg'">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.bgCol{
  background-color: #343C68;
}
</style>