<template>
  <div>
    <h2>Contact</h2>
    <p>
      Need something? Do you like our content? <br />
      Would you like to offer us a collaboration? <br />
      Be it anything ,we’re here to help and we will do our best to respond as
      soon as possible.
    </p>
    <ul>
      <li class="pb-10">
        <p>General editor</p>
        <p>Laura Bilíková</p>
        <p>laura.blkv@gmail.com</p>
      </li>
      <li class="pb-10">
        <p>Deputy of general editor</p>
        <p>Lujza Lehocká</p>
        <p>lhcklujza@gmail.com</p>
      </li>
      <li class="pb-10">
        <p>Head of the literature editorial office</p>
        <p>Dominika Hvorková</p>
        <p>dominikahvrkva@gmail.com</p>
      </li>
      <li class="pb-10">
        <p>Head of the photography editorial office</p>
        <p>Karla  Štvrtková</p>
        <p>karla.svrtkv@gmail.com</p>
      </li>
      <li class="pb-10">
        <p>Head of the illustration editorial office</p>
        <p>Lívia Suchá</p>
        <p>sch.livia@gmail.com</p>
      </li>
      <li class="pb-10">
        <p>Head of the graphic editorial office</p>
        <p>Laura Dimová</p>
        <p>lala.dmv@gmail.com</p>
      </li>
    </ul>
    <h2>Vacancies</h2>
    <p>
      Unfortunately, there are no vacancies at the moment, however you can send us an unsolicited application. 
      When applying for a position at HMOTA magazine, remember following :
      <ul class="list-disc ml-5">
        <li>You have to study at a high school or university</li>
        <li>You have to be more than  15 years old</li>
        <li>Do not forget to include into which department you’re applying to (journalism, photography, illustration, graphic design, or some other position)</li>
        <li>Why do you want to become a member of Hmota magazine?</li>
        <li>Which artistic activity do you pursue?</li>
      </ul>
      Good luck!
    </p>
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
</style>
