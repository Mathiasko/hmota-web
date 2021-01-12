<template>
  <div>
    <h2 class="text-3xl">Reviews</h2>
    <agile :navButtons="false" :autoplaySpeed="5000" :autoplay="false">
      <div class="slide w-full">
        <div class="md:flex">
          <div class="flex-1 ">
            <img class="pr-20" :src="`./assets/img/reviews/VOICES.png`" />
          </div>
          <div class="self-center flex-1">
            <p>
              Hmota is a
              <span class="font-bold">nationwide student magazine</span> that
              connects and enables young journalists and artists to publish
              their work. Its aim is to give young artists space to write,
              create and support them by being part of a
              <span class="font-bold">strong and sincere community</span> of
              people with similar interests. Hmota embodies view of young
              individuals on the world, art, culture and life itself.
            </p>
            <p class="pt-5 self-center">Ivan Ježík, VOICES</p>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="md:flex">
          <div class="flex-1 ">
            <img class="pr-20 " :src="`./assets/img/reviews/leaf.jpg`" />
          </div>
          <div class="self-center flex-1">
            <p>
              HMOTA je viac než len časopis, vytvára totiž priestor na pre
              kreatívnu komunitu mladých ľudí. Hmota je pre mňa spleť šikovných
              mladých poetov, grafikov, fotografov a kreatívcov. Cez ich tvorbu
              vieme nahliadnuť do ich sveta a pochopiť, čo ich zaujíma, čím žijú
              a čo ich (ne)teší. Napriek ich mladému veku sa nevyhýbajú ani
              vážnejším témam a neboja sa ísť hlbšie pod povrch. Veľmi sa teším,
              že aj my v LEAFe sme mali možnosť spoznať niektorých tvorcov HMOTY
              a sledovať, ako kreatívne rastú a napĺňajú svoje ambície. Držím im
              palce, aby sa im darilo aj naďalej.
            </p>
            <p class="pt-5 self-center">LEAF (nezisková organizácia)</p>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="md:flex">
          <div class="flex-1 ">
            <img class="pr-20 mb-10 md:mb-0" :src="`./assets/img/reviews/Bublina.jpg`" />
          </div>
          <div class="self-center flex-1">
            <p>
              Časopis Bublina si časopis Hmota všimol keď sa začal zhmotňovať do
              tlačeného vydania. To nás spája, lebo sa obe redakcie snažia
              ponúknuť dnešnej generácií detí či mladých hmatateľný produkt s
              dušou. Hmotu uznávame za jej nadčasovosť, poctivosť a vysokú
              úroveň obsahu ale aj grafiky. Vidno, že to robia ľudia, ktorí to
              milujú, každým číslom sa posúvajú vyššie. V záplave nevkusných
              teen časopisov je hmota výnimočný zjav a mi ho uznávame a želáme
              mnoho skvelých čísiel a radosti z tvorby.
            </p>
            <p class="pt-5 self-center">Časopis Bublina (detský časopis)</p>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="md:flex">
          <div class="flex-1 ">
            <img class="pr-20" :src="`./assets/img/reviews/Medziriadky.png`" />
          </div>
          <div class="self-center flex-1">
            <p>
              Časopis HMOTA sme, ako organizácia, ktorá sa zaoberá mladou
              literatúrou, objavili pomerne skoro vďaka Instagramu. Hneď nás to
              zaujalo, išlo totiž o skutočne zaujímavý projekt. Postupne sme
              sledovali, ako sa HMOTA rozrástla a profesionalizovala, z čoho
              máme veľkú radosť. Ide totiž o študentský časopis, ktorý nemá na
              Slovensku obdobu, a to nehovoriac o vysokej textovej či vizuálnej
              kvalite. HMOTA má koncept a myšlienku, ktorej sa drží. Je pekné,
              ako si skupinka mladých ľudí povedala, že chce spraviť niečo pre
              umenie a umeleckú komunitu a rýchlo si našli svojich
              podporovateľov. Tak to asi býva, keď robíte niečo, čo milujete a
              dávate do toho celé srdce. Možno preto máme HMOTU tak radi.
              Prajeme im všetko dobré a veľa nových čitateľov!
            </p>
            <p class="pt-5 self-center">Julka Oreská za tím Medziriadkov</p>
          </div>
        </div>
      </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile';

export default {
  name: 'CarouselReviews',
  components: {
    agile: VueAgile,
  },
};
</script>

<style scoped>

</style>
