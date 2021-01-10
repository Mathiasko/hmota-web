<template>
  <div class="text-font text-weight">
    <h2 class="header-size-mobile my-8 ">Contact</h2>
    <p class="text-color-3">
      Need something? Do you like our content? <br />
      Would you like to offer us a collaboration? <br />
      Be it anything ,we’re here to help and we will do our best to respond as
      soon as possible.
    </p>
    <ul>
      <li class="pb-10">
        <p><strong>General editor</strong></p>
        <p>Laura Bilíková</p>
        <p>laura.blkv@gmail.com</p>
      </li>
      <li class="pb-10">
        <p><strong>Deputy of general editor</strong></p>
        <p>Lujza Lehocká</p>
        <p>lhcklujza@gmail.com</p>
      </li>
      <li class="pb-10">
        <p><strong>Head of the literature editorial office</strong></p>
        <p>Dominika Hvorková</p>
        <p>dominikahvrkva@gmail.com</p>
      </li>
      <li class="pb-10">
        <p><strong>Head of the photography editorial office</strong></p>
        <p>Karla  Štvrtková</p>
        <p>karla.svrtkv@gmail.com</p>
      </li>
      <li class="pb-10">
        <p><strong>Head of the illustration editorial office</strong></p>
        <p>Lívia Suchá</p>
        <p>sch.livia@gmail.com</p>
      </li>
      <li class="pb-10">
        <p><strong>Head of the graphic editorial office</strong></p>
        <p>Laura Dimová</p>
        <p>lala.dmv@gmail.com</p>
      </li>
    </ul>
    <h2 class="header-size-mobile my-8">Vacancies</h2>
    <div class="text-color-3">
    <p>
      Unfortunately, there are no vacancies at the moment, however you can send us an unsolicited application. 
      When applying for a position at HMOTA magazine, remember following : </p>
      <ul class="list-disc ml-5">
        <li>You have to study at a high school or university</li>
        <li>You have to be more than  15 years old</li>
        <li>Do not forget to include into which department you’re applying to (journalism, photography, illustration, graphic design, or some other position)</li>
        <li>Why do you want to become a member of Hmota magazine?</li>
        <li>Which artistic activity do you pursue?</li>
      </ul>
      <p>Good luck!</p>
    </div>
    <div>
      <div>
        <label for="name">Name*</label>
        <input type="text" id="name">
      </div>
      <div>
        <label for="email">E-mail*</label>
        <input type="text" id="email">
      </div>
      <div>
        <input type="textarea" id="text" placeholder="Message">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style scoped>
label{display: block;}
.bgCol{
  background-color: #7595BB;
}

.text-color-1{
    color: #F5F5F5;
}
.text-color-2{
    color: #3B4361;
}
.text-color-3{
  color: #829EC8;
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

.large-font-size{
  font-size: 45px;
}
.text-font{
  font-family: 'Poppins', sans-serif;
}
.text-weight{
  font-weight:300;
}
</style>
