<template>
  <div class="grid grid-cols-2 gap-x-10 md:grid-cols-7 bgCol p-10 text-color-1 text-size-2-mobile">
    <div>
      <p><strong>Socials</strong></p>
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
      <p><strong>Content</strong></p>
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
      <p><strong>Journal</strong></p>
      <ul>
        <li>Essays</li>
        <li>Short stories</li>
        <li>Poetry</li>
        <li>Interviews</li>
        <li>Reports</li>
        <li>Arts & Culture</li>
      </ul>
    </div>
    <div class="col-span-2 pt-10 md:pt-0">
      <p><strong>©2019 – 2021 HMOTA GDPR rules</strong></p>
    </div>
    <div class="col-span-2 pt-10 md:pt-1">
      <p><strong>Contact</strong></p>
      <p>casopishmota@gmail.com</p>
      <img class="pr-10 pt-10" :src="'assets/img/logoFut.svg'">
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
  background-color: #363E66;
}
.text-color-1{
    color: #F5F5F5;
}
.text-color-2{
    color: #3B4361;
}
.text-color-3{
  color: #587EA5;
}

.header-size-mobile{
    font-size: 22px;
}
.text-size-1-mobile{
    font-size: 15px;
}
.text-size-2-mobile{
    font-size: 18px;
}
</style>