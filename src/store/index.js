import { createStore } from 'vuex';
import filterItems from '../components/shared/filterItems.js';

const store = createStore({
  state() {
    return {
      journals: [
        {
          id: '1',
          img: '1.jpg',
          date: 'Aug 21, 2020',
          author: 'Simona Fajrfkova',
          category: 'Essay',
          content: {
            heading: 'Wounds covered by gold',
            citat:
              '“In Japan, broken items are repaired with gold. This “mistake” is considered a unique history of the object, which adds to the beauty. “',
            section: [
              {
                podnadpis: 'You are beautiful.',
                text:
                  'What first occurred to you in this simple sentence? Did you think of the exterior? What do you look like, what are you wearing? You are beautiful because it radiates happiness from you. Take a breath and look around. Look up at the sky. We will never be as beautiful as we are today. We are so tiny in this vast universe, but still infinite. Your soul, thoughts, ideas. None of this has borders. You are no one in the world like you can do what you can. Let the rays of the sun caress you, because the world has chosen you to walk here today and to endow you with the beauty of our unique being.',
              },
              {
                podnadpis: 'Close your eyes.',
                text:
                  'Another day similar to the one before him. Everything is so extremely ordinary.The days are tiring and the nights too short for enough rest. You lose yourself and you don’t even know how it happens. Looking in the mirror scares you, because you see in your eyes everything that you try so hard to suffocate inside. All the mistakes, the failed attempts, the people who left you when you needed them. Be the one you need by your side. Be yourself the person you need. You are “just” a person. Let all your sadness and stress drown in the lake not far from the house on a sunny summer day. Find time for your soul. What looks like a disaster today, maybe in a few months, will be a grain of sand compared to the happiness that awaits you. Today is an ordinary day. Ordinary date. In a few years, however, you can fly on this day to your dream vacation, celebrate your child’s birthday or celebrate the 5th wedding anniversary and be happier than ever before.',
              },
              {
                podnadpis: "You're over gold. Believe it.",
                text:
                  'Because today you are yourself. Because your thoughts fascinate me. Because your ideas would never come to my mind. Because your smile when looking at the sunset, your puppy or your favorite food is different and brighter than the others. Were you broken? Did the world hurt you? So let your wounds be flooded with gold and look beautiful and unique. Because with your gold you are yourself, your experiences, joys and worries. Are you weak Are you emotional? Are you looking forward to it? Are you shy … Whatever you are, you are yourself today and you will never be the same. Love it while you are, where you are, with whom you are, and know that every day we are more beautiful than ever.',
              },
            ],
          },
        },
        {
          id: '2',
          img: '2.jpg',
          date: 'Sep 9, 2020',
          author: 'Hana Urbanová',
          category: 'Short storries',
          content: {
            heading: 'Ťažší ľahší život',
            citat:
              '“Neustále sa sťažujeme na to, aký ťažký je náš život. Naozaj rozumiem tomu, že vstávať ráno na ôsmu do práce alebo školy, v ktorej nás to nie vždy baví, nie je celkom prechádzka ružovou záhradou. Ani všetky tie ostatné povinnosti, ktoré nás čakajú po príchode domov alebo hádky s ľuďmi, na ktorých nám záleží, nič z toho nie je ľahké. Ale toto nie sú najväčšie ťažkosti, s ktorými sa denne stretávame. Možno nimi len zastierame veci, na ktorých skutočne záleží.“',
            section: [
              {
                podnadpis: 'Čo oči nevidia, to dušu nebolí',
                text:
                  ' Pravdepodobne sa každý deň nestretávaš s plastami plávajúcimi v oceáne, nikdy si nebol naozaj hladný alebo pred tebou na pracovnom pohovore neuprednostnili niekoho iného kvôli veciam, ktoré ani nemôžeš ovplyvniť. Toto sa predsa v našich zemepisných šírkach nedeje. Alebo sa to aspoň snažíme nevidieť. Ešte sme ani neprebádali všetky zákutia pralesov či hlbiny oceánov a už sa nám ich celkom úspešne darí ničiť a znečisťovať. Ešte sme ani nestihli spoznať všetky národy a kultúry a už ich (neprávom) odsudzujeme. Nemôžeme oddeliť tú „dobrú“ časť od tej „zlej“. Všetko závisí od všetkého a my by sme nemali zastierať nepríjemné veci tými príjemnými. Pretože keď od niečoho odvrátime pohľad, nezmizne to. Musíme sa pozrieť problémom do očí a hľadať riešenia. Nevravím, že to bude jednoduché. Nebude. Ale nemôžeme predsa zmeniť fungovanie nášho sveta bez jediného sebaobetovania.'
              },
              {
                podnadpis: 'Je to však naozaj zjednodušenie?',
                text:
                  'To, či sa odhodláme vidieť a riešiť veci, na ktorých záleží alebo sa rozhodneme ignorovať ich, je iba naša voľba. Možno znie jednoduchšie netrápiť sa vecami, ktorých zmena by trvala dlhšie, ako by nám bolo milé a už vonkoncom by to nebolo ľahké, no nemyslím si, že ignorácia je najlepším riešením. Áno, je pravda, že sa vyhneš všetkým tým problémom, ktoré sú spojené s rozmýšľaním, no zároveň sa ukracuješ o veľa pozitívnych vecí. Nikdy neuvidíš, ako sa svet zmenil k lepšiemu.  Nikdy nezmeníš svet k lepšiemu. Upadneš do svojej každodennej rutiny a keď sa obzrieš späť, spýtaš sa sám seba, čo si dokázal, odpovede sa ti budú hľadať ťažko. Budeš len jedným z miliónov.',
              },
              {
                podnadpis: "Ako to zmeniť?",
                text:
                  'Ako to zmeniť, pýtaš sa uvedomujúc si, že skrývať sa pred vecami, na ktorých záleží, možno nie je úplne ideálne. Nemyslím si, že existuje univerzálne riešenie, ktoré by platilo pre všetkých. Môžeš cestovať. Spoznávať životy neznámych ľudí po celom svete. Odísť z práce alebo školy, ktorá ťa nebaví a začať robiť niečo, čo ťa napĺňa. Môžeš čítať knihy, písať poéziu alebo aj vymýšľať nové počítačové programy. Pokiaľ ťa to, čo robíš, bude napĺňať, pokiaľ to budeš robiť s radosťou, nezáleží na tom, čo to bude. Čokoľvek môže zmeniť niečí svet k lepšiemu.',
              },
            ],
          },
        },
        {
          id: '5',
          img: '3.jpg',
          date: 'Aug 21, 2020',
          author: 'Michaela Hlávková',
          category: 'Interviews',
          content: {
            heading: 'Neznesiteľná nádhera literatúry',
            citat:
              '“Len málo kníh ma očarí už pri čítaní prvej strany. Len málo kníh núti čitateľa rozmýšľať a zároveň ho zaujme dejovou líniou. Len málo kníh si človek spojí s určitou chuťou, vôňou a farbou. Len málo kníh je Veľkých. “',
            section: [
              {
                podnadpis: 'Neznesiteľná ľahkosť bytia – Milan Kundera,,Voliť ťarchu? Ľahkosť? Voliť lásku? Nenávisť? Voliť faloš? Pravdu?”',
                text:
                  'Otázka ťarchy a ľahkosti nie je vôbec taká jednoduchá. Pre Nietzscheho bola najväčším bremenom predstava večného návratu, akejsi reinkarnácie či života bez smrti. Simone de Beauvoir, veľká francúzska feministka sa taktiež zaoberala týmto motívom v jednej zo svojich kníh a prišla k rovnakému záveru. Kundera sa však s týmto neuspokojí. Ide ďalej, pýta sa, analyzuje.  „Ak je večný návrat tým najťažším bremenom, potom sa môžu naše životy javiť na jeho pozadí ako nádherne ľahké. Ale je ťarcha naozaj hrozná a ľahkosť nádherná? To najťažšie bremeno nás ničí, klesáme pod ním, tlačí nás k zemi. Ale v ľúbostnej poézii všetkých dôb žena túži byť zaťažená bremenom mužského tela. To najťažšie bremeno je teda zároveň obrazom najintenzívnejšieho naplnenia ľudského života. Čím je bremeno ťažšie, tým je náš život bližšie k zemi, a tým je skutočnejší a pravdivejší. Naproti tomu úplná neprítomnosť bremena spôsobuje, že sa človek stáva ľahším než vzduch, vzlieta do výše, vzďaľuje sa rovnako slobodne ako bezvýznamne. Čo si teda máme zvoliť? Ťarchu alebo ľahkosť?“',
              },
              {
                podnadpis: ',,Einmal ist keinmal” alebo ,,raz znamená nikdy”',
                text:
                  'Práve tento motív sa tiahne celou knihou. Človek či literárna postava si ľahkosť alebo ťarchu nevyberá, človek je odsúdený na ľahkosť. Ľudský život je len jeden, každý moment a každé svoje rozhodnutie človek robí len jedenkrát a nemá šancu ho opraviť. Ľudský život teda nemá žiadny zmysel, človek ho musí len prežiť a práve pre ľahkosť svojich rozhodnutí bez zmyslu života, pociťuje neznesiteľnú ľahkosť bytia',
              },
              {
                podnadpis: "Myšlienky prepletené láskou",
                text:
                  'Neznesiteľná ľahkosť bytia ma núti rozmýšľať hneď od prvej stránky. Začína úvahou, mýtom o večnom návrate a trochu kontroverzným zmierením Kundery s Hitlerom. Kundera sa zamýšľa, vytvára prenádherné úvahy a nenápadne ich skrýva medzi riadky ľúbostného príbehu 4 postáv. Tomáš a Tereza, Franz a Sabina. Práve oni vytvárajú jadro románu, ich život a príbeh nasleduje čitateľ po častiach, fragmentoch. Láska Tomáša a Terezy vznikla zo šiestich poskladaných náhod, láska Franza a Sabiny bola postavená na protikladoch. Tomáš a Tereza sa rozhodnú pre život v krajine bez slobody, Franz pochádza z Francúzska a pre Sabinu je najdôležitejšia práve sloboda. Tomáš a Tereza spolu zostanú do konca, Sabina odíde od Franza a pocíti neznesiteľnú ľahkosť bytia.',
              },
              {
                podnadpis: "Pocit ťarchy či ľahkosti v krajine bez slobody?",
                text:
                  'Kundera svoj fiktívny príbeh zasadzuje do prostredia komunistického Československa. Opisuje príchod ruských tankov v auguste 1968 cez uhol pohľadu hlavných hrdinov. Práve počas tohto obdobia môže Tereza fotiť, zanechávať za sebou stopu a informovať svet o hrôzach, ktoré sa u nás diali. Tomáš, predstaviteľ vtedajších intelektuálov so svojou prácou lekára kvôli nevôli režimu skončil. Nesúhlasí s ním a nebojí sa to tajiť. Nebyť Terezy a lásky k nej, túto krajinu by už dávno opustil. Franz zase počúva Sabinu, ako rozpráva o svojich priateľoch a jej život sa zdá byť tak pravdivý, tak skutočný. Hovorí mu príbehy o jej priateľoch, ktorí pre neslobodu slova a svoje ideály buď utiekli, alebo skončili za mrežami. Pre Franza predstava naozajstného života, pre Sabinu pravý opak. Nič z toho sa jej nezdá pekné. Režim zničil jej prácu maliarky a život ľudí, ktorých milovala. A práve preto z krajiny neslobody utiekla.',
              },
              {
                podnadpis: "„Génius môže dýchať len v ovzduší slobody.“- John Stuart Mill",
                text:
                  'Milan Kundera vo svojom osobnom živote v podstate nasledoval kroky Sabiny. Napriek tomu, že podobne ako mnohí českí resp. československí umelci a intelektuáli, uveril v 50. rokoch minulého storočia komunistickým ideálom, pre nasledovný režim sa stal nepohodlným, a tak emigroval do Francúzska. Svoju osobnú skúsenosť potom premietol do svojich kníh a práve preto možno povedať, že režim, ktorý sa ho snažil umlčať, z neho urobil jedného z najlepších a najdôležitejších spisovateľov minulého storočia.',
              },
              {
                podnadpis: "A aká bola táto kniha pre mňa?",
                text:
                  'Nádherná. Každý jeden riadok bol písaný s nehou a ľudskosťou, v každom jednom riadku sa odkrývala Veľkosť Milana Kunderu. Rozmýšľa nad vecami, nad ktorými každý už niekedy podvedome premýšľal a predsa by ich nedokázal preniesť na papier tak presne, ako to robí práve Kundera. Zamýšľa sa nad láskou, nad životom a slobodou. Píše v príbehu a súčasne v úvahách. Je to román o láske, ale zároveň nejde o ľúbostný román. Je to román o filozofii, ale nejde o filozofický román. Tieto dva svety sa neustále prelínajú, napriek tomu čitateľ nemá pocit, že by sa strácal. A láska je v ňom vykreslená tak krásne a pravdivo, že sa jednoducho musíme do tohto románu zamilovať.',
              },
            ],
          },
        },
        {
          id: '7',
          img: '4.jpg',
          date: 'Aug 21, 2020',
          author: ' Katka Slováková',
          category: 'Short stories',
          content: {
            heading: 'Ako vyzerá podpora súčasného umenia na Slovensku?',
            citat:
              '“Cez 25 rokov sa slovenská výtvarná obec snažila o vznik modernej galérie súčasného umenia. Tento sen sa splnil v roku 2014 vznikom bratislavskej Kunsthalle. Akým problémom dnes čelí?“',
            section: [
              {
                podnadpis: 'Vytúžený priestor',
                text:
                  ' Kunsthalle predstavuje vytúžený výstavný priestor na prezentáciu súčasného výtvarného umenia nielen zo Slovenska. Vďaka spolupráci so zahraničnými galériami má potenciál prezentovať našich umelcov i mimo SR. Sídli v priestoroch Domu umenia na Námestí SNP – patrí jej prvé poschodie, kde sa konajú hlavné výstavy, a výklad na prízemí, Kunsthalle LAB, v ktorom sa striedajú kratšie výstavy zamerané na interakciu s okoloidúcimi.',
              },
              {
                podnadpis: 'Nekonečný príbeh',
                text:
                  'Od momentu vzniku rieši Kunsthalle otázku samostatnosti. Hneď po zriadení spadla pod správu Národného osvetového centra, ktoré sídli v už spomínanom Dome umenia. Kvôli nezhodám bola Kunsthalle následne pričlenená v roku 2016 k Slovenskej národnej galérii. Všetko to malo predstavovať iba provizórne riešenia vedúce ku konečnému osamostatneniu.Po 5 rokoch fungovania sme sa samostatnosti nedočkali. Namiesto toho má Kunsthalle na krku ďalší problém. Je ním neschopnosť Ministerstva kultúry zaobchádzať s eurofondami. Podľa programu eurofondov má v každom krajskom meste vzniknúť kreatívne centrum – pred rokom sa rozhodlo, že to bratislavské sa zriadi práve v priestoroch Domu umenia. Je týmto budúcnosť Kunsthalle ohrozená?Ministerka kultúry Ľubica Laššáková tvrdí, že nie. Podľa jej slov pôjde iba o rekonštrukciu, po ktorej sa budú môcť inštitúcie sídliace v budove Domu umenia vrátiť späť. Kreatívne centrum by malo byť iba v časti zrekonštruovaných priestorov. V debate organizovanou študentmi Vysokej školy výtvarných umení dokonca povedala, že podporí vznik samostatnej Kunsthalle.  Myslí to vážne?',
              },
              {
                podnadpis: "Ľubica, choď už niekam",
                text:
                  '„Fajn, zrekonštruuje sa budova, Kunsthalle sa osamostatní a všetci budú šťastní,“ mohli by sme si na prvý pohľad povedať. Pravda je však inde. Otázka kreatívnych centier na Slovensku je stále otvorená a veľa vecí sa ešte môže zmeniť. Práve v polovičke mája 2019 schválilo Ministerstvo kultúry rozpočet pre svoje príspevkové organizácie, kde Kunsthalle z požadovaných 180-tisíc eur dostalo iba 15-tisíc. O veľkú čiastku prišla aj Slovenská národná galéria, žiadala 367-tisíc a dostala 114-tisíc. Takto má vyzerať podpora kultúry?Láska pani ministerky Laššákovej k folklóru a tradičným hodnotám je už dobre známa. Na projekt Folklór – duša Slovenska nechala vyčleniť čiastku v hodnote 1,5 milióna eur. V kontraste s touto štedrou podporu slovenského folklóru odmietla dať na projekty LGBTI komunity čo i len cent.„Umenie, kultúra a vzdelanosť formujú charakter spoločnosti, a ak majú podmienky na slobodné rozvíjanie, podporujú princípy slobody a rovnosti všetkých ľudí. Kroky ministerstva kultúry za posledný rok smerujú k ich okliešťovaniu, a tým k ochudobňovaniu slovenskej spoločnosti. Posilňujú záujmy majority nad minoritami a preferujú jednu formu kultúry na úkor jej rozmanitosti, čo považujeme za jasný dôkaz zlyhávania tohto rezortu v základných hodnotových nastaveniach,“ píše sa v stanovisku študentskej iniciatívy Stojíme pri kultúre, ku ktorej sa pripojili desiatky organizácií z celého Slovenska.',
              },
              {
                podnadpis: "Návšteva je podpora",
                text:
                  'Osud Kunsthalle je síce otázny, no v najbližšom období sa nikam nechystá. Ak vás jej príbeh zaujal, určite stojí za to spraviť si do Domu umenia návštevu. Cez leto sa tu konajú dve výstavy.Od 12. júla do 6. októbra 2019 vás čaká na 1. poschodí výstava Orient2 o východoeurópskej identite. V sprievodnom texte k výstave sa píše: „Za zjednocujúci aspekt tohto neurčitého regiónu považuje projekt jeho protirečivé, ale zároveň vzájomne sa doplňujúce sebavedomie paralelne s aroganciou ako dvomi vymedzujúcimi polohami jeho zranenej identity.“ V LAB-e na prízemí zase od 5. júla do 1. septembra 2019 nájdete inštaláciu Hmla od litovského umelca Žilvinasa Landzbergasa. Vstup je, rovnako ako do SNG, voľný. V Kunsthalle máte k dispozícii aj mediátorov, študentov s pozitívnym vzťahom k súčasnému umeniu, ktorý sa s vami o výstave veľmi radi porozprávajú. Spravte si príjemný deň a stojte pri kultúre!',
              },
              
            ],
          },
        },
        {
          id: '3',
          img: '5.jpg',
          date: 'aug 23, 2020 ',
          author: ' Lea Melišíková',
          category: 'Art & Culture',
          content: {
            heading: 'Čo s tým majú spoločné Dáni ?',
            citat:
              '',
            section: [
              {
                podnadpis: '',
                text:
                  'Je známe, že Dáni sa objavujú vo vrchných priečkach zoznamu najšťastnejších krajín sveta. Ako je možné, že krajina, kde nie často uvidíte slnko, dážď sa strieda s vetrom a najvyššia teplota v lete je 16,5 stupňa, patrí medzi najlepšie miesta pre život? Túto otázku si kladie veľa ľudí. Avšak veľa z nich nevie, že dánske umenie šťastného života si môžeme priniesť aj k nám, do našich domovov.?',
              },
              {
                podnadpis: 'Staro-nový fenomén',
                text:
                  ' Hygge, alebo v našom preklade pohoda, je pomenovanie rôznych aktivít, ktoré nás robia šťastnými. Je to súčasť ich kultúry. Ak sa Dánov spýtate, čo si ako prvé spájajú s hygge, osemdesiatpäť percent opýtaných odpovie sviečky. Nie je náhoda, že človek, ktorý svojím správaním a poznámkami kazí náladu sa volá lyseslukker – ten, ktorý zhasína sviečky. Bezpochyby k tomu tiež patria deky a vankúše (najmä v zimných mesiacoch). Ak chcete dodať svojmu interiéru väčšiu dávku škandinávskeho štýlu, siahnite po výrobkoch z dreva či keramiky, ako napríklad pekná čajová kanvica, váza na jedálenskom stole alebo obľúbený hrnček na kávu. V žiadnej domácnosti nesmie chýbať najlepší spoločník človeka, kniha. Môže to byť čokoľvek od ženského románu cez vedecko-fantastickú literatúru až po kuchársku knihu.  Predpokladám, že nie som jediná, ktorá má uložených množstvo fotografií na sociálnej sieti Facebook či Instagram. Preto je vzácne mať v dnešnej dobe fotoalbum.  Vyberte si najobľúbenejšie fotky a dajte si ich vytlačiť. Je oveľa viac hyggelig zalistovať v albume, ako surfovať na internete. Ľudia po celom svete začali do svojho života pridávať tieto recepty na šťastie.',
              },
              {
                podnadpis: "Zo šťastných detí sa stávajú šťastní rodičia, ktorí tento cyklus opakujú.",
                text:
                  'O pár riadkov hore som spomínala, akí sú Dáni milí. Pre nich je základom, aby sa ľudia mali radi. Nepracujú cez víkend alebo dlhšie ako do piatej. Zamestnávatelia prihliadajú na súkromný život ich pracovníkov. Zámer je jasný – tráviť čas s rodinou, hrať hry s deťmi a večerať spolu pri sviečkach. To, čo sa naučíme od rodičov, v nás pretrváva skoro navždy. Preto je pre Dánov dôležité učiť deti základy šťastnej rodiny od začiatku. Všetci robia veci spoločne. Určujú si, ako má ich hygge čas vyzerať. V Dánsku nepoznajú príbeh o tom, ako mama navarí večeru, rodinní príslušníci prídu, zjedia a odídu so svojím mobilom v ruke.  Hostiteľ u nich nenavarí celú večeru sám, pomáhajú  všetci členovia rodiny, je to podľa nich viac hyggelig. So všetkým taktiež súvisí psychická pohoda. Starosti a negativita sa hádžu za hlavu, inak by sa nemohla vytvoriť pravá hygge atmosféra. Nakoniec dňa si pripomínajú, že čas strávený s inými vytvára pocit uvoľnenia, relaxu, blízkosti a pohodlia.',
              },
              {
                podnadpis: "Oxytocín – hormón lásky",
                text:
                  'Láska, teplo a bezpečie majú niečo spoločné.  Ak nám niekto položí ruku na rameno, pobozká nás alebo pohladí na líce, okamžite nás naplní pocit pokoja a šťastia. Jedná sa o pocit ľahkosti, ktorý v nás všetky príjemné aktivity zanechávajú. Oxytocín pomáha zlepšiť sociálne vzťahy, čo môže byť rada pre všetkých, ktorí sa stále málo objímajú. Kvalita medziľudských vzťahov zohráva rolu v dosiahnutí nášho šťastia. Jednou z našich základných potrieb je pocit niekam patriť a spojiť sa s ostatnými. Podľa zistení  je overené, že ľudia žijúci v manželstve či v spoločnej domácnosti, žijú dlhšie než slobodní. Nie je to fascinujúce, ako vzťahy a spoločnosť zasahujú do nášho živobytia? Možno si poviete, že šťastie je veľmi subjektívnou záležitosťou. Avšak dôležité je, nakoľko ste vy spokojný so svojím životom. Vy sami viete najlepšie posúdiť, či ste šťastný alebo nie. Hygge znamená, že sme schopní vyťažiť čo najviac z bežného dňa. Ľudské šťastie vzniká skôr vďaka malým radostiam a pôžitkom každodenného života než na základe veľkého šťastia, ktoré sa vyskytuje zriedkavo. Po mojom príchode z výletu som bola ovplyvnená dánskym životným štýlom a zistila som, že na počte ľudí v súvislosti s hygge nezáleží, hlavné je, že sa každý cíti pochopený, zdieľa svoje myšlienky a dostáva podporu. Definujme to dvoma slovami: Ľahkosť bytia.',
              },
            ],
          },
        },
        {
          id: '4',
          img: '6.jpg',
          date: 'aug 23, 2020',
          author: 'Dominika Hvorková',
          category: 'Report',
          content: {
            heading: 'Body neutrality- hnutie, ktoré učí rešpektu a zameriava sa na samotné bytie',
            citat:
              '',
            section: [
              {
                podnadpis: '',
                text:
                  'Za posledné roky sa hnutie sebalásky a „body positivity“ rozšírilo – cez články, motivačné citáty a celebrity, ktoré nám neustále pripomínajú, aby sme milovali svoje telá. Značky vychádzajú von s neretušovanými reklamami, módne prehliadky sú plné diverzity. V anglických prevádzkach Nike po novom dokonca máte možnosť vidieť plus-size figuríny. Musíme si však zapamätať, že myšlienka „body positivy“ musí presahovať vizuálne a reklamné hranice. A hoci v 60. rokoch minulého storočia tento pojem reprezentoval dôležité hnutie, zdá sa, že dnešné obdobie sociálnych médií si myšlienku prispôsobilo. Osoby, ktoré dnes reprezentujú body pozitivitu nerozumejú jadru problému. Ľudia rôznych farieb, veľkostí, tvarov a schopností už naďalej necítia solidaritu. Od tohto hnutia sa začínajú presúvať opäť inam – k body neutralite.',
              },
              {
                podnadpis: 'Čo je body neutralita ?',
                text:
                  'V jednoduchosti, cieľom body neutrality je zamerať sa na samotné bytie. Je bez odsudzovania a bez prechovávania akýchkoľvek emócií k vonkajšiemu vzhľadu – pozitívnych alebo negatívnych. Je o budovaní rešpektu. Ide o to, čo naše telá robia, namiesto toho ako vyzerajú. Dovoľujú nám cvičiť a objímať svojich blízkych. Vďaka nim sa dostávame z bodu A do bodu B. Pojem prvýkrát zaregistrovali online v roku 2015, ale popularitu nabral až po tom, ako ho aktívne začala používať vo svojich workshopoch Anne Poirier, lektorka na americkej univerzite Colby-Sawyer. „Existuje celé hnutie (body positivity), ktoré hovorí o milovaní svojho tela. Presunúť sa tam ale rovno od nespokojnosti je obrovský krok. Niektorí ľudia pobudnú v štádiu body neutrality, ktorý definujeme ako zastávku medzi nenávidením a milovaním seba samého,“ vyjadruje sa Anne Prior v článku pre Columbus Park.Tiché odsudzovanie, kritizovanie a neustále kontrolovanie dokáže človeka obrať o mentálnu energiu. Keď sa prestaneme posadnuto zameriavať na naše telo, dostaneme zrazu priestor sústrediť sa na iné, dôležitejšie veci. Už naďalej nebudeme prichádzať o zážitky a momenty v našich životoch.',
              },
              {
                podnadpis: "Viac než len krása / Beyond Beautiful",
                text: 'Najvýraznejším prispievateľom a šíriteľom myšlienky je dnes Anuschka Rees z Berlína. Na Instagrame a vo svojej knihe vysvetľuje rozdiely medzi pozitívnym a neutrálnym prístupom. Okrem toho predstavuje spôsoby, ako dávať ľuďom komplimenty, ktoré sa netýkajú fyzickej stránky a vyvracia mýty o sebavedomí.„Ako spoločnosť sme veľmi zameraní na výzor. Nevieme si ani len predstaviť, že by sa niekto mohol cítiť šťastne bez toho, aby si myslel, že je krásny. Práve preto hovoríme: „Tvoje chyby sú krásne!“, keď v skutočnosti vlastne máme na mysli: „Tvoje chyby sú úplne irelevantné.““, píše Anuschka.Medzi rozdiely patrí napríklad cieľový duševný stav, stratégia a endgame. Body positivity // Body neutrality „Cítim sa so sebou spokojne, pretože viem, že vyzerám dobre.“ // „Môj výzor nijak neovplyvňuje to, ako sa ohľadom seba cítim.“„Moje telo je perfektné aj so všetkými nedostatkami.“ // „Vonkajšia schránka nie je najzaujímavejšia a najdôležitejšia časť mňa.“„Musíme zmeniť definíciu krásy v našej spoločnosti.“ // „Musíme zmeniť hodnotu krásy v našej spoločnosti.“„Keď som mala dvadsať, bola som presvedčená, že ak mám obyčajnú nudnú tvár, musím mať aspoň „hot“ telo, aby som si našla priateľa a bola šťastná. Všetok svoj voľný čas som strávila v posilke, pripravovala som si vlastné jedlo a vyhľadávala nové cviky, suplementy a recepty. Mala som „hot“ telo a bola som pyšná, ale nebola som šťastná. Bola som neustále unavená a často som vynechávala rôzne spoločenské udalosti, pretože zasahovali do mojich #fitnessgoals. Keď som s tým nakoniec musela seknúť, prešla som si ťažkým obdobím neistoty. Dostala som sa cez to a teraz som naozaj šťastná,“ opisuje svoj zážitok anonym.Hoci Anne Prior definuje body neutralitu ako medzi-zastávku, mnohí ľudia sa s myšlienkou stotožnili natoľko, že to je ich finálne štádium. Faktom totižto je, že celulitída je normálna. Strie sú normálne. Znamienka, fľaky, jazvy, chlpy sú normálne. Body neutralita sa snaží ukázať, že tieto veci nemusíme mať radi. Stačí, keď si uvedomíme, že nás nedefinujú a začneme ich rešpektovať. V čase sociálnych médií je dôležité filtrovať obsah a pýtať sa správne otázky. Sú tvoje #fitnessgoals vlastne iba #appearancegoals?'
              },
            ],
          },
        },
        {
          id: '6',
          img: '7.jpg',
          date: 'Aug 21, 2020',
          author: 'Simona Fajrfkova',
          category: 'Poetry',
          content: {
            heading: 'Kinosála na záhrade',
            citat:
              '',
            section: [
              {
                podnadpis: '',
                text:
                  'Horúci letný večer. Záhrada sa zapĺňa ľuďmi, ktorí sú ti k srdcu najbližší. Púpavový sirup, domáce koláčiky, hromady diek a smiechu. Improvizované letné kino znie ako ideálny plán. Film dokáže navodiť pocit ľahkosti už po niekoľkých sekundách. Vtiahne ťa do deja a zabúdaš na starosti všedných dní, oslobodíš sa. Pripravili sme si pre vás niekoľko kinematografických potešení. Letné filmy, ľahšie ako pierko.',
              },
              {
                podnadpis: 'Čo sme komu urobili? (Qu’est- ce qu’on a fait au Bon Dieu)',
                text:
                  'Rôzne vyznania a názvy, farby a stolovacie návyky sa skrze štyri sestry, dcéry a manželky stretávajú v jednej rodine pri jednom stole. Rozdiely odlučujú v hádkach a zbiehajú sa v humore a poznávaní. To v čom súvisíme však zvykneme nechávať nepovšimnuté a púť k tomu je rozmarná obchádzka okolo zásad a zvyklostí. Nakoniec, tam kde sa všetci sa stále radi guľujeme, rybárčime a načahujeme za láskou, priblížime sa porozumeniu.',
              },
              {
                podnadpis: "Slnko v sieti",
                text:
                  'Film Štefana Uhera plynie v pavučine rozprávkového čísla tri-  tri poviedky Alfonza Bednára, tri prostredia, tri dejové línie, tri ročné obdobia. Príbeh samostatný je však postranný účinok filmovej básne. Básne, ktorá vystihuje atmosféru, evokuje nálady, ponára sa do hĺbok a tak formuje priestor pre myšlienky a pocity vtedajšieho každodenného života, pre spozorovanie krásy a bolesti skutočného citu. Poetickú vnímavosť diváka oslovuje aj asynchronita zvukov a roztrieštené plynutie času. Opakujúce sa zvukové efekty, autentické ruchy mesta či ticho a čas stojaci na pontóne sa stávajú sa súčasťou celkového obrazu a tak napriek tomu, že sa nič strhujúceho nestane, snímka nám dáva hodinu a pol na premýšľanie a reflektovanie jej atmosféry, nálad, hĺbok či ostrostí.',
              },
              {
                podnadpis: "Jedz, modli sa a miluj",
                text:
                  'Film podľa knižnej predlohy autobiografie Elizabeth Gilbert je manifestáciou príslovia: Každý je strojcom svojho šťastia. Nasmerovať pozornosť a zodpovednosť do svojho vnútra je pracný proces a pritom tak prostý. Elizabeth je žena v strednom veku a podľa ideálu spoločnosti naplnený človek – má úspešnú kariéru, manžela a dom- avšak stratila seba samú. Aby ju znovu našla, rozhodne sa podniknúť cestu po svete, celkom sama. Na troch rôznych  miestach, v troch rôznych kultúrach ktoré navštívi, objavuje čiastky svojej duše. Jedz- v  Taliansku sa učí umeniu pôžitku, učí sa po Taliansky a získa najšťastnejšie kilá svojho života. Modli sa- v Indii študuje umenie oddanosti a vydáva sa na spirituálny prieskum. Miluj- na Bali sa učí umeniu rovnováhy medzi svetským potešením a nadprirodzenou dokonalosťou.  Znovu objaviť domov tam dnu a nosiť si ho ako slimák stále zo sebou je dôležitým a krásnym poznaním v živote človeka.',
              },
              {
                podnadpis: "Amélie z Montmartu",
                text:
                  'Amélia odmalička vníma jednoduché potešenia okolitého sveta a uzatvára sa do vlastného sveta. Dospelá a žijúc sama v Paríži, sa rozhodne vkĺbiť si do predstavivosti ľudí okolo seba a  na základe presvedčení z jej vlastného snového univerza im začne zasahovať do životov. Améliin Paríž je plný krabičiek detstva, artičok zo srdcom, maliarov so sklenými kosťami, škvŕn emócií- nádherných drobností a nepatrných záchvevov pôvabnosti bytia.',
              },
              {
                podnadpis: "Noc na Zemi",
                text:
                  'Päť miest, jedna Zem. Päť poviedok, jeden film. Čas je relatívny, v kruhoch na celom svete. Nezáleží na mene ani pôvode, čas plynie pre všetkých a poľahky cítiť ako sa zadiera do existencie.  V čase sa vzájomne inšpirujeme, ukazujeme si jedinečnosti v sebe a vo svojom okolí; spájajú nás najzvláštnejšie veci a potreby od baraníc po nutnosť posledného slova. Odo dňa do dňa zábava na povrchu zrkadlí trpký tanec všednosti. Jarmuschov film je farbistá dúha z piatich časových pásiem. Rôzne reality a sny v nich, majú rôzne odtiene, v ktorých skladajú jednu či každú noc na Zemi.',
              },
             
            ],
          },
        },
        {
          id: '7',
          img: '2.jpg',
          date: 'Aug 21, 2020',
          author: ' Katka Slováková',
          category: 'Short stories',
          content: {
            heading: 'Ako vyzerá podpora súčasného umenia na Slovensku?',
            citat:
              '“Cez 25 rokov sa slovenská výtvarná obec snažila o vznik modernej galérie súčasného umenia. Tento sen sa splnil v roku 2014 vznikom bratislavskej Kunsthalle. Akým problémom dnes čelí?“',
            section: [
              {
                podnadpis: 'Vytúžený priestor',
                text:
                  ' Kunsthalle predstavuje vytúžený výstavný priestor na prezentáciu súčasného výtvarného umenia nielen zo Slovenska. Vďaka spolupráci so zahraničnými galériami má potenciál prezentovať našich umelcov i mimo SR. Sídli v priestoroch Domu umenia na Námestí SNP – patrí jej prvé poschodie, kde sa konajú hlavné výstavy, a výklad na prízemí, Kunsthalle LAB, v ktorom sa striedajú kratšie výstavy zamerané na interakciu s okoloidúcimi.',
              },
              {
                podnadpis: 'Nekonečný príbeh',
                text:
                  'Od momentu vzniku rieši Kunsthalle otázku samostatnosti. Hneď po zriadení spadla pod správu Národného osvetového centra, ktoré sídli v už spomínanom Dome umenia. Kvôli nezhodám bola Kunsthalle následne pričlenená v roku 2016 k Slovenskej národnej galérii. Všetko to malo predstavovať iba provizórne riešenia vedúce ku konečnému osamostatneniu.Po 5 rokoch fungovania sme sa samostatnosti nedočkali. Namiesto toho má Kunsthalle na krku ďalší problém. Je ním neschopnosť Ministerstva kultúry zaobchádzať s eurofondami. Podľa programu eurofondov má v každom krajskom meste vzniknúť kreatívne centrum – pred rokom sa rozhodlo, že to bratislavské sa zriadi práve v priestoroch Domu umenia. Je týmto budúcnosť Kunsthalle ohrozená?Ministerka kultúry Ľubica Laššáková tvrdí, že nie. Podľa jej slov pôjde iba o rekonštrukciu, po ktorej sa budú môcť inštitúcie sídliace v budove Domu umenia vrátiť späť. Kreatívne centrum by malo byť iba v časti zrekonštruovaných priestorov. V debate organizovanou študentmi Vysokej školy výtvarných umení dokonca povedala, že podporí vznik samostatnej Kunsthalle.  Myslí to vážne?',
              },
              {
                podnadpis: "Ľubica, choď už niekam",
                text:
                  '„Fajn, zrekonštruuje sa budova, Kunsthalle sa osamostatní a všetci budú šťastní,“ mohli by sme si na prvý pohľad povedať. Pravda je však inde. Otázka kreatívnych centier na Slovensku je stále otvorená a veľa vecí sa ešte môže zmeniť. Práve v polovičke mája 2019 schválilo Ministerstvo kultúry rozpočet pre svoje príspevkové organizácie, kde Kunsthalle z požadovaných 180-tisíc eur dostalo iba 15-tisíc. O veľkú čiastku prišla aj Slovenská národná galéria, žiadala 367-tisíc a dostala 114-tisíc. Takto má vyzerať podpora kultúry?Láska pani ministerky Laššákovej k folklóru a tradičným hodnotám je už dobre známa. Na projekt Folklór – duša Slovenska nechala vyčleniť čiastku v hodnote 1,5 milióna eur. V kontraste s touto štedrou podporu slovenského folklóru odmietla dať na projekty LGBTI komunity čo i len cent.„Umenie, kultúra a vzdelanosť formujú charakter spoločnosti, a ak majú podmienky na slobodné rozvíjanie, podporujú princípy slobody a rovnosti všetkých ľudí. Kroky ministerstva kultúry za posledný rok smerujú k ich okliešťovaniu, a tým k ochudobňovaniu slovenskej spoločnosti. Posilňujú záujmy majority nad minoritami a preferujú jednu formu kultúry na úkor jej rozmanitosti, čo považujeme za jasný dôkaz zlyhávania tohto rezortu v základných hodnotových nastaveniach,“ píše sa v stanovisku študentskej iniciatívy Stojíme pri kultúre, ku ktorej sa pripojili desiatky organizácií z celého Slovenska.',
              },
              {
                podnadpis: "Návšteva je podpora",
                text:
                  'Osud Kunsthalle je síce otázny, no v najbližšom období sa nikam nechystá. Ak vás jej príbeh zaujal, určite stojí za to spraviť si do Domu umenia návštevu. Cez leto sa tu konajú dve výstavy.Od 12. júla do 6. októbra 2019 vás čaká na 1. poschodí výstava Orient2 o východoeurópskej identite. V sprievodnom texte k výstave sa píše: „Za zjednocujúci aspekt tohto neurčitého regiónu považuje projekt jeho protirečivé, ale zároveň vzájomne sa doplňujúce sebavedomie paralelne s aroganciou ako dvomi vymedzujúcimi polohami jeho zranenej identity.“ V LAB-e na prízemí zase od 5. júla do 1. septembra 2019 nájdete inštaláciu Hmla od litovského umelca Žilvinasa Landzbergasa. Vstup je, rovnako ako do SNG, voľný. V Kunsthalle máte k dispozícii aj mediátorov, študentov s pozitívnym vzťahom k súčasnému umeniu, ktorý sa s vami o výstave veľmi radi porozprávajú. Spravte si príjemný deň a stojte pri kultúre!',
              },
              
            ],
          },
        },
        {
          id: '8',
          img: '1.jpg',
          date: 'Aug 21, 2020',
          author: 'Dominika Hvorková',
          category: 'Essays',
          content: {
            heading: 'Jedinečný divadelný projekt spája',
            citat:
              '“Rómska komunita a kultúra sa mnohým z nás môže zdať byť vzdialená a cudzia. Pravdou však je, že toho máme spoločného viac ako sa na prvý pohľad zdá – alebo ako sme si schopní pripustiť. Projekt Dramatický medzipriestor je toho dôkazom.Mladá študentka Júlia Kozáková mala v rámci Sokratovho inštitútu za úlohu vytvoriť svoj vlastný mikroprojekt. Rozhodla sa pre divadlo, do ktorého vniesla inakosť. V momente ako sa rozhodla spojiť komunitu rómskych a nerómskych študentov, projekt bol nielen o divadle, ale aj o novom štýle spolupráce, spoznávania a koexistencie. Júlia bola v maturitnom ročníku na bratislavskom gymnáziu, keď Dramatický medzipriestor na jeseň 2017 začínal. O pár mesiacov neskôr som bola už jeho súčasťou aj ja. Najprv ako budúca herečka, potom už iba ako „staff.“Študenti z kolónie v Plaveckom Štvrtku a študenti z Bratislavy sa stretávali prvé mesiace v prázdnom byte na Pražskej ulici. Keby sme si na začiatku každého stretnutia nedávali rozcvičku, zdalo by sa, že ide iba o obyčajnú partiu kamarátov, ktorá v chladných mesiacoch trávi radšej čas tam, ako v kaviarňach. Jedli sme spolu pizzu, pili kávu, počúvali hudbu a malými krôčikmi o sebe prezrádzali čoraz viac vecí. Nebolo to vôbec iné od toho, ako by sa spoznávali dvaja cudzí ľudia.„Naučil som sa, že ľudia si vedia vážiť aj rómskeho chlapca, že nie všetci súdia. Naučili ma hrať divadlo a spoznal som viac slovenských miest, ktoré sme spolu precestovali.“ – Jozef Zeman, herec projektu“',
            section: [
              {
                podnadpis: 'Ako sa žije v rómskej komunite?',
                text:
                  'Nikdy som priamo v žiadnej rómskej osade nebola. Spôsob, akým ale študenti z Plaveckého Štvrtka fungovali prinášali medzi nás. Fungovali v komunite. Všetci z nás sa prirodzene v nejakej nachádzame, mimo nej však fungujeme ako jednotlivci. Keď večer zapadne slnko, všetci sa vrátime do svojich postelí.Pre Rómov znamená komunita veľmi veľa. Robia veľa vecí spoločne, o všetko sa delia, požičiavajú si, odpovedajú za druhého na otázky, robia za seba navzájom rozhodnutia, diskutujú nahlas. Dali by jeden za druhého ruku do ohňa. Je krásne cítiť ich silné puto a energiu. Emócie, ktoré dávali najavo boli tak prirodzene čisté a ľudské. Nespomínam si, že by som sa s niečím takým niekedy vôbec stretla. Možno by som to mohla prirovnať k životu na dedine, ale tiež iba z rozprávania, pretože som na dedine nikdy nebývala. Navyše som si úplne istá, že to stále nevystihne celú pointu. Myslím si, že to človek pochopí až v momente, keď sa ocitne v blízkosti rómskej komunity, hoci iba na chvíľu. Bolo mi cťou.„Fungujú v úplne inom hodnotovom a komunikačnom systéme. Veci, ktoré sú nám jasné, sú pre nich úplne nepochopiteľné. Myslím si, že to je ale v mnohých prípadoch dobré. Mohli by sme si od nich zobrať príklad. Teraz si dávam pozor na to, ako komunikujem a či komunikujem spôsobom, ktorému ten druhý – a to môže byť úplne ktokoľvek – rozumie. Snažím sa oveľa viac počúvať.“ – Alex Gašparovičová, kostymérka',
              },
              {
                podnadpis: 'Vychádza to z rovnakého jadra',
                text:
                  'Vedela by som napísať o rozdieloch medzi nami a rozdeliť nás do dvoch skupín. Môžem napísať, že oni tancovali na rómske piesne a my sme si zatiaľ pustili rádio a „hmkali“ si do rytmu Justina Timberlakea. Pravdou však je, že sme to robili všetci a spoločne. Keď sa k tomu vraciam späť, myslím si, že sme sa cítili rovnako neisto. Premýšľali sme o tom, či vôbec máme na to, aby sme stáli na javisku pred toľkými ľuďmi. Občas sa nám zdalo, že to čo robíme, nemá zmysel alebo to nerobíme dosť dobre. Všetky naše impulzy myšlienky a konania vychádzali z rovnakého jadra.V máji 2018 ocenili diváci prácu študentov a ich hru potleskom v Modrom salóne budovy SND. Odvtedy ju odohrali ešte niekoľkokrát, zúčastnili sa na rôznych sústredeniach a spravili workshop o hovorení príbehov. Ja síce už ich súčasťou nie som, ale za pár mesiacov som sa naučila veľmi veľa – dramatického divadelného aj dôležitého do života. Dramatický medzipriestor totižto rozhodne nie je o medzerách. Naopak, spája nás.',
              },
              {
                podnadpis: "You're over gold. Believe it.",
                text:
                  'Because today you are yourself. Because your thoughts fascinate me. Because your ideas would never come to my mind. Because your smile when looking at the sunset, your puppy or your favorite food is different and brighter than the others. Were you broken? Did the world hurt you? So let your wounds be flooded with gold and look beautiful and unique. Because with your gold you are yourself, your experiences, joys and worries. Are you weak Are you emotional? Are you looking forward to it? Are you shy … Whatever you are, you are yourself today and you will never be the same. Love it while you are, where you are, with whom you are, and know that every day we are more beautiful than ever.',
              },
            ],
          },
        },
      ],
      products: [
        {
          id: '1',
          category: 'magazines',
          name: 'Letná HMOTA – momenty',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 3,
          sale: false,
          image: ['Letná HMOTA – momenty.jpg'],
        },
        {
          id: '2',
          category: 'magazines',
          name: 'Jarná HMOTA – detstvo',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 3,
          sale: false,
          image: ['Jarná HMOTA – detstvo.jpg'],
        },
        {
          id: '3',
          category: 'magazines',
          name: 'Zimná HMOTA – nahota',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 3,
          sale: false,
          image: ['Zimná HMOTA – nahota.png'],
        },
        {
          id: '4',
          category: 'magazines',
          name: 'Jesenná HMOTA – metamorfóza',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 3,
          sale: true,
          image: ['Jesenná HMOTA – metamorfóza.png'],
        },
        {
          id: '5',
          category: 'magazines',
          name: 'Predplatné HMOTA 2021',
          description: 'Get hmota as soon as it comes out',
          price: 20,
          sale: true,
          image: ['Predplatné časopisu HMOTA na rok 2021.jpg'],
        },
        {
          id: '6',
          category: 'merch',
          name: 'Zápisník',
          description:
            'Originálny zápisník s ilustráciou od Lívie Suchej z dielne Remini',
          price: 19,
          sale: false,
          image: [
            'Zápisník1.jpg',
            'Zápisník2.jpg',
            'Zápisník3.jpg',
            'Zápisník4.jpg',
          ],
        },
        {
          id: '7',
          category: 'merch',
          name: 'Záložka - recyklovaný papier',
          description:
            'Záložka vytlačená na recyklovanom papieri s dizajnom od Laury Dimovej',
          price: 0.7,
          sale: false,
          image: ['zalozka.png'],
        },
        {
          id: '8',
          category: 'merch',
          name: 'Odznak HMOTÍM',
          description:
            'Odznak HMOTÍM s dizajnom od Laury Dimovej',
          price: 0.5,
          sale: false,
          image: ['odznak.jpg'],
        },
        {
          id: '9',
          category: 'merch',
          name: 'Nálepka HMOTA x Kristína Veselá',
          description:
            'Nálepka s dizajnom od Kristíny Veselej a fotografiou od Martiny Pecháčkovej',
          price: 0.5,
          sale: false,
          image: ['nalepka sedost.jpg'],
        },
        {
          id: '10',
          category: 'merch',
          name: 'A set nálepiek DETSTVO',
          description:
            'A set hravé nálepky k jarnému číslu s autorskými ilustráciami od Sáry Kráľovej',
          price: 1.5,
          sale: false,
          image: ['nalepky-aa.png'],
        },
        {
          id: '11',
          category: 'merch',
          name: 'B set nálepiek DETSTVO',
          description:
            'B set hravé nálepky k jarnému číslu s autorskými ilustráciami od Sáry Kráľovej',
          price: 1.5,
          sale: false,
          image: ['nalepky-bb.png'],
        },
        {
          id: '12',
          category: 'merch',
          name: 'Veselá omaľovanka',
          description:
            'Veselá omaľovánka navrhnutá ilustrátorkou Emmou Kraus',
          price: 1,
          sale: false,
          image: ['omalo-1.jpg'],
        },
        {
          id: '13',
          category: 'prints',
          name: 'Autorský print Viktórie Bálintovej',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 5,
          sale: false,
          image: ['print1.jpg'],
        },
        {
          id: '14',
          category: 'prints',
          name: 'Autorský print Emmy Kraus',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 5,
          sale: false,
          image: ['print2.jpg'],
        },
      ],
      cart: [
        {
          amount: 1,
          product: {
            id: '10',
            name: 'Hmota print Knizka',
            price: 0.5,
          },
        },
        {
          amount: 1,
          product: {
            id: '9',
            name: 'Hmota Print',
            price: 0.5,
          },
        },
      ],
    };
  },
  getters: {
    getFilteredProducts(state) {
      return (filter) => filterItems(filter, state.products);
    },
    getFilteredJournals(state) {
      return (filter) => filterItems(filter, state.journals);
    },
    getProduct: (state) => (id) => {
      return state.products.find((x) => x.id == id);
    },
    getJournal: (state) => (id) => {
      return state.journals.find((x) => x.id == id);
    },
    getRelatedProducts: (state) => (category) => {
      return state.products.filter((x) => x.category == category);
    },
    getRelatedJournals: (state) => (category) => {
      return state.journals.filter((x) => x.category == category);
    },
    getEditorsPick(state){
      return state.journals.slice(0, 4)
    },
    getCart(state) {
      return state.cart;
    },
  },
  mutations: {
    addToCart(state, idCount) {
      const { cart, products } = state;
      const productIndex = cart.findIndex(
        (cartProduct) => cartProduct.product.id === idCount.id,
      ); // NOTE: vráti -1 ak neexistuje, alebo vrati index productu v košiku https://mdn.io/array/findIndex
      const product = products.find((product) => product.id === idCount.id);

      if (productIndex > -1) {
        const cartProduct = cart[productIndex];
        cartProduct.amount += idCount.amount;
      } else {
        cart.push({
          amount: idCount.amount,
          product,
        });
      }
    },
  },
});
export default store;
