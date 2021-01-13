<template>
  <div class="md:grid md:grid-cols-2 text-font">
    <div >
      <img :src="'assets/img/aboutus.png'" />
    </div>
    <div class="bgCol mb-1 px-5">
      <h2 class="pt-10 md:pt-20 text-color-1 header-size-mobile">
        About HMOTA
      </h2>
      <p class="py-10 md:py-14 text-color-1 text-size-1-mobile">
        HMOTA is a nationwide student magazine that brings together and raises
        the profile of young journalists and artists. It’s published four times
        a year. Students from all over Slovakia work for HMOTA in their free
        time, without the demand on a financial reward. Each issue is unique in
        its appearance, design, theme and mood. HMOTA creates a community of
        people with similar interests and interconnects people in a creative
        web, such as skilled young photographers, graphic artists, illustrators
        and poets. This combination of people together creates something
        tangible a material- HMOTA. <br />
        <br />We are the embodiment of creativity and art.
      </p>
    </div>
    <div class="bgCol mb-1 px-5">
      <h2 class="pt-10 md:pt-14 text-color-1 header-size-mobile">Our Story</h2>
      <p class="py-10 md:py-14 text-color-1 text-size-1-mobile">
        The magazine was founded in 2018 by Laura Bilíková, a student from
        Trenčín when she was only seventeen years old. She felt that Slovakia
        lacked a platform that brought together young creatives and decided to
        change that. Laura was previously general editor in a high school
        magazine Veget, what she really enjoyed. However, after some time she
        realised that she is not able to continue. She was missing something,
        that would make her feel complete- and that was the time when she
        decided to discuss her idea about her own art magazine with mentor at
        her high school. When she approved the idea, Laura full of dreams and
        ambitions started to work on the first digital issues of the magazine.
        After uncertain beginnings first successes started to appear. HMOTA got
        into seven best projects from all over Slovakia, received financial
        support in the amount of 1000 euros and an annual development program in
        the LEAF Award program. Since then, more and more people started to
        support the magazine and follow it on social media. All of this resulted
        into a long-term dream of Laura- to make HMOTA in a printed form, to
        make it tangible. On September 7th 2019 this dream came true and ever
        since every single issue of the magazine comes out in printed form with
        unique design and fresh perspective on a certain topic.
      </p>
    </div>
    <div class="bgImg">
      <p class="pt-10 md:pt-20 text-color-2 px-5">
        <em
          >“The idea of my own magazine at that time was only a negligible and
          vague idea, and yet I was thrilled with it. I wrote to my mentor,
          Alžběta Dlhá and presented the idea to her. She liked it and that’s
          how a 17-year-old student from Trenčín at that time started to create.
          I came up with the name, started socials, networking, created the
          first visuals, and addressed my friends. They were too enthusiastic
          about the idea and the first issue gradually began to form. HMOTA
          finally arose from nothing, just an idea, a spark.”<br />
          <br />
          - Laura Bilíková, general editor</em
        >
      </p>
    </div>
    <div class="col-span-2">
      <h2 class="py-10 md:py-14 text-color-2 md:header-size">Our values</h2>
      <div class="md:grid grid-cols-2 text-color-1">
        <Value
          :value="'01. Quality'"
          :text="'In HMOTA, quality is of paramount importance.  We invest to unique design, quality paper and try to improve every aspect of the magazine with every new issue.'"
          :img="'value'"
          class="p-5 mb-5 md:p-10 md:mr-5"
        />
        <Value
          :value="'02. Community'"
          :text="'In HMOTA, quality is of paramount importance.  We invest to unique design, quality paper and try to improve every aspect of the magazine with every new issue.'"
          :img="'value'"
          class="p-5 mb-5 md:p-10 md:ml-5"
        />
        <Value
          :value="'03. Young perspective'"
          :text="'In HMOTA, quality is of paramount importance.  We invest to unique design, quality paper and try to improve every aspect of the magazine with every new issue.'"
          :img="'value'"
          class="p-5 my-5 md:p-10 md:mr-5"
        />
        <Value
          :value="'04. Tangibility'"
          :text="'In HMOTA, quality is of paramount importance.  We invest to unique design, quality paper and try to improve every aspect of the magazine with every new issue.'"
          :img="'value'"
          class="p-5 my-5 md:p-10 md:ml-5"
        />
      </div>
    </div>
    <div class="md:col-span-2 ">
      <img class="hidden md:block w-full" :src="'assets/img/Our-process.png'" />
      <img class="md:hidden w-full" :src="'assets/img/infogSmall.jpg'" />
    </div>
    <div>
      <img :src="'assets/img/Laura.jpg'" />
    </div>
    <div class="md:p-20">
      <h2 class="py-10">Meet our team</h2>
      <p>
        Our team is embodiment of our values. We believe that HMOTA team is a
        miscellaneous sample of young innovative creatives, who are constantly
        trying to change their surroundings for better.
      </p>
      
      <button  class="mt-5 p-5 bgCol header-size-mobile text-color-1">Meet the team -></button>
      
      
      
    </div>
  </div>
</template>

<script>
import Value from "./forAbout/Value";

export default {
  name: "About",
  components: {
    Value,
  },
};


</script>

<style scoped>
.bgCol {
  background-color: #353d67;
}
.bgImg {
  background-image: url("~@/assets/img/img.png");
  background-position: center center;
  background-repeat: no-repeat;
   
}
.text-color-1 {
  color: #f5f5f5;
}
.text-color-2 {
  color: #3b4361;
}

.header-size-mobile {
  font-size: 22px;
}
.text-size-1-mobile {
  font-size: 15px;
}
.text-size-2-mobile {
  font-size: 18px;
}
.text-font {
  font-family: "Poppins", sans-serif;
}

.header-size{
  font-size: 50px;
}

button:hover{
  background-color: #f5f5f5;
  color: #3b4361;
  transition: ease-in 1s;
}

</style>
