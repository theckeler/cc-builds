import HomeArticles2024 from "./components/articles";
import HomeCTA2024 from "./components/cta";
import Home2024H2 from "./components/h2";
import Home2024ScrollContainer from "./components/scrollContainer";

export default function Home2024() {
  const base =
    "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/home-2024/";

  const howTos = [
    {
      container: { className: "bg-gray-100" },
      img: { src: "zero-turn.webp?resize=480x300" },
      content: {
        className: "p-2",
        title:
          "Comment choisir la tondeuse à rayon de braquage zéro qui convient le mieux?",
        copy: `Le marché offre de nombreuses options lorsqu’il s’agit de choisir la bonne tondeuse à rayon de braquage zéro. Enfin, si votre choix s'est porté sur une tondeuse à rayon de braquage zéro, il est temps de passer à l'action.`,
      },
      button: {
        href:
          "https://www.cubcadet.ca/en_US/how-to/knowledge-how-to-pick-the-best-zero-turn.html",
        className: "w-full py-2 uppercase font-bold text-sm inline-block",
      },
    },
    {
      container: { className: "bg-gray-100" },
      img: { src: "chnage-blades.webp?width=480" },
      content: {
        className: "p-2",
        title: "Comment changer la lame de votre tondeuse à siège",
        copy: `Au fil du temps, les lames peuvent être usées, déformées ou tordues. Ces dommages causés progressivement peuvent réduire l'efficacité de votre tondeuse, alors assurez-vous de...`,
      },
      button: {
        href:
          "https://www.cubcadet.ca/en_US/how-to/knowledge-how-to-change-the-blade-on-your-cub-cadet-rider.html",
        className: "w-full py-2 uppercase font-bold text-sm inline-block",
      },
    },
    {
      container: { className: "bg-gray-100" },
      img: { src: "electric-rider.webp" },
      content: {
        className: "p-2",
        title: "Le tracteur électrique est-il fait pour vous?",
        copy: `Les tracteurs de pelouse Cub Cadet sont faciles à utiliser. Ils offrent une puissance sans compromis, nécessitent peu d’entretien et offrent une qualité de coupe…`,
      },
      button: {
        href:
          "https://www.cubcadet.ca/en_US/product-information/electric-riding-mower-right+for-me.html",
        className: "w-full py-2 uppercase font-bold text-sm inline-block",
      },
    },
  ];

  const products = [
    {
      title: "Tondeuses à rayon de braquage zéro",
      src: "17RIEACZ010_ZT150_hero_rt1_treat_HR_72dpi.webp?resize=300x300",
      href: "https://www.cubcadet.ca/en_US/riding-lawn-mowers/zero-turn-mowers",
    },
    {
      title: "Tracteurs de pelouse",
      src: "13AQA9TTA10_XT1_LT46_RH_rt1_treat_HR_72dpi.webp?resize=300x300",
      href: "https://www.cubcadet.ca/en_US/lawn-mowers/riding-lawn-mowers",
    },
    {
      title: "Tondeuses à usage professionnelle",
      src: "47RICHB8010_ZTXS660_H_treat_rt3_72dpi.webp?resize=300x300",
      href: "https://www.cubcadet.ca/en_US/commercial-equipment",
    },
    {
      title: "Tondeuses électriques",
      src: "34ABA2CS710_ZT1_42E_Rt_rt4_treat_HR_72dpi.webp?resize=300x300",
      href:
        "https://www.cubcadet.ca/en_US/riding-lawn-mowers/electric-riding-mowers",
    },
    {
      title: "Tondeuses poussées",
      src: "12ABR2MM710_SC900_H_rt1_72dpi.webp?resize=300x300",
      href: "https://www.cubcadet.ca/en_US/lawn-mowers/walk-behind-mowers",
    },
    {
      title: "Souffleuses à neige",
      src: "31AH5IVTB10_2X_28_RT_rt3_treat_72dpi.webp?resize=300x300",
      href: "https://www.cubcadet.ca/en_US/snow-blowers",
    },
  ];

  const attachments = [
    {
      title: "SAC RÉCUPÉRATEUR POUR TRACTEUR",
      src: "riding-mower-bag.webp?resize=300x300",
      href:
        "https://www.cubcadet.ca/en/riding-lawn-mowers/riding-mower-accessories/?prefn1=universal-part-category&prefv1=Baggers%20and%20Grass%20Collectors",
    },
    {
      title: "SACS RÉCUPÉRATEURS POUR TONDEUSES À RAYON DE BRAQUAGE ZÉRO",
      src: "19B70055100BKLFT.webp?resize=300x300",
      href:
        "https://www.cubcadet.ca/en/riding-lawn-mowers/zero-turn-mower-accessories/?prefn1=universal-part-category&prefv1=Baggers%20and%20Grass%20Collectors",
    },
    {
      title: "KITS DE DÉCHIQUETAGE",
      src: "mulching-kit.webp?resize=300x300",
      href:
        "https://www.cubcadet.ca/en/riding-lawn-mowers/riding-mower-accessories/?prefn1=universal-part-category&prefv1=Mulching%20Kit",
    },
    {
      title: "LAME TOUTES SAISONS",
      src: "all-season-plow.webp?resize=300x300",
      href:
        "https://www.cubcadet.ca/en/riding-lawn-mowers/riding-mower-accessories/?prefn1=universal-part-category&prefv1=Snow%20Removal",
    },
    {
      title: "PARE-SOLEILS",
      src: "Sun-SnowShadeCUB267.webp?resize=300x300",
      href:
        "https://www.cubcadet.ca/en_US/riding-lawn-mowers/riding-mower-accessories?prefn1=universal-part-category&prefv1=Sun%20Shade",
    },
    {
      title: "MODULES FASTATTACH",
      src: "FASTATTACH-rear-carrier.webp?resize=300x300",
      href: "https://www.cubcadet.ca/en_US/search?q=fastattach&lang=en_US",
    },
    {
      title: "ACCESSOIRES POUR REMORQUE",
      src: "hauler-accesories.webp?resize=300x300",
      href:
        "https://www.cubcadet.ca/en/riding-lawn-mowers/riding-mower-accessories/?prefn1=universal-part-category&prefv1=Tow-Behind%20Attachments",
    },
    {
      title: "HOUSSE POUR SOUFFLEUSE À NEIGE ",
      src: "snow-blower-cab-covering.webp?resize=300x300",
      href:
        "https://www.cubcadet.ca/en/riding-lawn-mowers/riding-mower-accessories/?prefn1=universal-part-category&prefv1=Snow%20Cab",
    },
    {
      title: "CHAÎNES POUR PNEUS",
      src: "tire-chains.webp?resize=300x300",
      href:
        "https://www.cubcadet.ca/en/riding-lawn-mowers/riding-mower-accessories/?prefn1=universal-part-category&prefv1=Tire%20Chains",
    },
    {
      title: "PLATEAUX DE COUPE",
      src: "XT2_LX42_deck_top_F1.webp?resize=300x300",
      href:
        "https://www.cubcadet.ca/en/riding-lawn-mowers/riding-mower-accessories/?prefn1=universal-part-category&prefv1=Tire%20Chains%7CCutting%20Deck",
    },
  ];

  return (
    <div id="sdb-container">
      <div className="px-1 pt-1 px-md-3 pt-md-3 max-w-[1536px] mx-auto">
        <HomeCTA2024
          className="mb-3 mb-xl-6"
          base={base}
          content={{
            className:
              "p-2 p-xl-4 bg-black text-white flex flex-col items-start",
            title:
              "Dominez les pentes et les collines avec une stabilité accrue!",
            copy: `Affrontez les pentes et les collines abruptes (jusqu'à 20 degrés) en toute confiance avec les tondeuses à rayon de braquage zéro de la gamme Ultima Series® ZTXS, équipée de notre technologie de volant Synchro-SteerMC. Le modèle ZTXS est doté d'un plateau de coupe et d'un moteur de catégorie professionnelle conçus pour offrir une stabilité constante et une qualité sur laquelle vous pouvez compter.`,
            hero: true,
          }}
          button={{
            title: "EN SAVOIR PLUS",
            href:
              "https://www.cubcadet.ca/en/search?cgid=zero-turn-mowers-lp-ztxs-ca",
            sr: "about dominating the hills and slopes",
            className:
              "border-2 border-[#ffc20f] px-4 py-1 mt-auto bg-[#ffc20f] text-black text-[#ffc20f] uppercase no-underline font-bold text-center w-full md:w-auto",
          }}
          img={{
            src: "47RTCAB8010_A2.webp",
            hero: true,
            resize: { width: 912, height: 420 },
            id: "zero-turn-mowers-lp",
          }}
        />

        <section className="mb-3 mb-xl-6">
          <Home2024H2
            title="Magasinez nos produits"
            href="#"
            className="flex mb-2 items-center"
            noLink
          />

          <Home2024ScrollContainer
            base={base}
            products={products}
            className=""
          />
        </section>

        <HomeCTA2024
          className="mb-3 mb-xl-6"
          base={base}
          content={{
            className: "p-2 p-xl-4 bg-[#ffc20f] flex flex-col items-start",
            title:
              "Le véritable progrès commence par une audace qui nous démarque des autres.",
            copy: `Être unique, c’est savoir se démarquer. La gamme Pro de Cub Cadet. Conception unique.`,
          }}
          button={{
            title: "EN SAVOIR PLUS",
            href: "https://www.cubcadet.ca/en_US/commercial-equipment",
            className:
              "border-2 border-black px-4 py-1 mt-auto uppercase no-underline font-bold text-center bg-black text-[#ffc20f] w-full md:w-auto",
          }}
          img={{ src: "something-different.webp" }}
        />

        <section className="bg-[#efefef] mb-3 mb-xl-6">
          <div className="">
            <div id="product-finder-zero-turns">
              <div className="p-20">Product Finder</div>
              {/* <script
                dangerouslySetInnerHTML={{
                  __html: `
              (function(c,a,r,t,f,u,l){c[u]=c[u]||function(){(c[u].q=c[u].q||[]).push(arguments)},l=a.createElement(r),l.async=1,l.id=u+"scr",l.src=f,a[t].appendChild(l)})(window,document,"script","body","//embed.cartfulsolutions.com/zero-turn-finder/recommendation.min.js","cfl659");
              `,
                }}
              /> */}
            </div>
          </div>
        </section>

        <HomeCTA2024
          className="mb-3 mb-xl-6"
          base={base}
          content={{
            className:
              "p-2 p-xl-4 bg-black text-white flex flex-col items-start",
            title: "Trouvez un concessionnaire dès aujourd’hui",
            copy: `Bénéficiez pleinement de l’expérience Cub Cadet à travers un service professionnel et parcourez la vaste sélection de produits offerts en ligne par nos concessionnaires locaux. Planifiez un essai dès aujourd'hui.`,
          }}
          button={{
            title: "TROUVEZ UN CONCESSIONNAIRE",
            href:
              "https://www.cubcadet.ca/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find",
            sr: "by clicking this button.",
            className:
              "border-2 border-white px-4 py-1 mt-auto text-black uppercase no-underline font-bold text-center bg-white w-full md:w-auto",
          }}
          img={{ src: "OutdoorSale-0323_HR_rt3_72dpi.webp" }}
        />

        <HomeCTA2024
          className="mb-3 mb-xl-6"
          base={base}
          content={{
            className: "p-2 p-xl-4 bg-[#ffc20f] flex flex-col items-start",
            title: "Enregistrez votre tondeuse",
            copy: `Ce processus simple en deux étapes vous permet de bénéficier de notre service de garantie et de recevoir toutes les informations de sécurité pertinentes. De plus, dans certains cas, l'enregistrement peut servir de preuve d'achat pour des réclamations d'assurance en cas de sinistres tels que l'inondation, l'incendie ou le vol.`,
          }}
          button={{
            title: "EN SAVOIR PLUS",
            href: "https://www.cubcadet.ca/en/registration.html",
            className:
              "border-2 border-black px-4 py-1 mt-auto uppercase no-underline font-bold text-center bg-black text-[#ffc20f] w-full md:w-auto",
          }}
          img={{ src: "3-year.webp" }}
        />

        <section className="mb-3 mb-xl-6">
          <Home2024H2
            title="Articles et conseils"
            href="https://www.cubcadet.ca/en_US/knowledge-center.html"
            className="mb-2"
          />

          <ul className="flex xl:grid xl:grid-cols-3 gap-6 max-w-[100vw] overflow-x-scroll no-scrollbar">
            {howTos.map((block, i) => (
              <li className="relative" key={i}>
                <HomeArticles2024
                  container={block.container}
                  base={base}
                  img={block.img}
                  content={block.content}
                  button={block.button}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="bg-gray-100 py-10 p-3 p-xl-6">
        <div className="max-w-[1536px] mx-auto">
          <Home2024H2
            title="Magasinez nos modules"
            href="https://www.cubcadet.ca/en_US/riding-lawn-mowers/riding-mower-accessories"
            className="mb-1"
          />

          <Home2024ScrollContainer
            base={base}
            products={attachments}
            addBlock={false}
          />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
                  {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "image": "https://www.cubcadet.ca/on/demandware.static/-/Sites-cubcadet-Library/default/vd543c4bdcb4ecd57647da8407d6249a8b0c7f051/ZeroTurnLanding/hero.jpg?version=1,671,452,470,000",
                    "url": "https://www.cubcadet.ca",
                    "sameAs": [
                      "https://www.facebook.com/cubcadet/",
                      "https://www.instagram.com/cubcadet_usa/",
                      "https://www.youtube.com/user/CubCadetRidingMowerS"
                    ],
                    "logo": "https://www.cubcadet.ca/on/demandware.static/Sites-cubcadet-Site/-/default/dw1bf7d2a6/images/svg-icons/logo.svg",
                    "name": "Cub Cadet",
                    "description": "Established in 1961, Cub Cadet engineers, designs and builds outdoor power equipment using the highest quality components sourced locally and globally. Through a dedicated and extensive network of dealers and retailers, Cub Cadet delivers a full line of high performance power equipment and services that cover all aspects of grounds care for professionals and homeowners – including four-wheel steer zero-turn riders; lap bar zero-turn riders; utility vehicles; lawn and garden tractors, battery and gasoline powered handheld and chore products; snow throwers and more. Based in Valley City, Ohio, Cub Cadet is recognized worldwide for its legacy in engineering excellence and its progressive dedication to thoughtfully designing around the people that depend on Cub Cadet equipment to help unlock the full potential of their outdoor spaces.",
                    "telephone": "+1-877-428-2349",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "5903 Grafton Road",
                      "addressLocality": "Valley City",
                      "addressCountry": "US",
                      "addressRegion": "OH",
                      "postalCode": "44280"
                    }
                  }
              `,
        }}
      />
    </div>
  );
}
