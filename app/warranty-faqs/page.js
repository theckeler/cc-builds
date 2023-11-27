"use client";

import Faqs from "@/components/Faqs";

const WarrantyFaqs = () => {
  return (
    <div id="sdb-container">
      <section
        className=""
        style={{ backgroundColor: "#ffc20f" }}
      >
        <div className="container text-center">
          <ul
            className="list-unstyled flex align-items-center"
            style={{ overflow: "hidden" }}
          >
            <li className="col-4 position-relative flex justify-content-end">
              <div
                className="bg-white"
                style={{
                  clipPath: "circle(56% at 50% 50%)",
                  height: "200px",
                  width: "300px",
                }}
              >
                <svg
                  viewBox="0 0 800 800"
                  className="w-100 h-100 p-4"
                  style={{ zIndex: 11 }}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M400 100C234.585 100 100 234.585 100 400C100 450.154 112.8 499.692 137.077 543.938L100.892 670.585C98.5846 678.646 100.831 687.323 106.769 693.231C111.169 697.631 117.046 700 123.077 700C125.2 700 127.323 699.723 129.415 699.108L256.062 662.923C300.308 687.231 349.846 700 400 700C565.415 700 700 565.415 700 400C700 234.585 565.415 100 400 100ZM400 653.846C354.769 653.846 310.123 641.538 270.831 618.215C267.231 616.092 263.138 614.985 259.046 614.985C256.923 614.985 254.8 615.292 252.708 615.877L156.646 643.323L184.092 547.262C185.846 541.169 184.985 534.615 181.754 529.138C158.462 489.877 146.123 445.2 146.123 399.969C146.154 260.031 260.031 146.154 400 146.154C539.969 146.154 653.846 260.031 653.846 400C653.846 539.969 539.969 653.846 400 653.846ZM424.308 498.769C425.538 501.538 426.154 504.615 426.154 507.692C426.154 513.846 423.692 519.692 419.385 524C415.077 528.308 408.923 530.769 403.077 530.769C400 530.769 396.923 530.154 394.154 528.923C391.385 527.692 388.923 526.154 386.769 524C384.615 521.846 382.769 519.385 381.538 516.615C380.615 513.846 380 510.769 380 507.692C380 504.615 380.615 501.538 381.538 498.769C382.769 496 384.615 493.538 386.769 491.385C388.923 489.231 391.385 487.692 394.154 486.462C399.692 484 406.154 484 411.692 486.462C414.769 487.692 417.231 489.231 419.385 491.385C421.538 493.538 423.077 496 424.308 498.769ZM480.646 319.477C488.615 342.646 484.4 368.185 469.385 387.785C468.585 388.831 467.692 389.785 466.769 390.677L430.677 424.092C427.662 428.554 426.092 433.569 426.092 438.769C426.092 451.508 415.754 461.846 403.015 461.846C390.277 461.846 379.938 451.508 379.938 438.769C379.938 422.831 385.138 407.569 395.015 394.677C395.815 393.631 396.708 392.677 397.662 391.785L433.754 358.369C438.615 351.231 439.785 342.615 437.015 334.492C434 325.785 426.892 319.354 417.508 316.923C408.215 314.462 400.892 315.015 395.108 318.462C385.631 324.154 380.677 337.292 379.6 341.877C376.615 354.185 364.277 362.031 351.938 359.077C339.6 356.246 331.846 344.092 334.585 331.723C335.385 328.123 343.138 296.154 370.892 279.2C382.431 272.154 401.969 265.2 429.2 272.277C453.477 278.615 472.708 296.246 480.708 319.508L480.646 319.477Z"
                    fill="black"
                  />
                </svg>
              </div>
            </li>
            <li className="col-8">
              <h1>Warranty FAQs</h1>
              <p className="px-xl-9">
                Got a question about warranties? From registration to coverage
                details, Cub Cadet® has compiled answers to the most frequently
                asked questions.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="container">
        <Faqs
          className="font-bold"
          style={{ fontSize: "1.375rem", lineHeight: "1.4" }}
          questions={{
            className: "font-bold",
            style: {
              fontSize: "1.375rem",
              lineHeight: "1.4",
            },
          }}
          answers={{
            className: "",
            style: {
              fontSize: "0.875rem",
              lineHeight: "1.4",
            },
          }}
          faqs={[
            {
              question:
                "How can I find out if I registered my equipment and how long I have left on the warranty? When does the warranty start?",

              answer:
                "Warranty period begins on the date of purchase or date of receiving product delivery. Please refer to the warranty statement provided with your products. The warranty period and exclusions are provided.",
            },
            {
              question: "Is registration required for warranty?",
              answer:
                "Registration is not a requirement for warranty. We encourage product registration as there will be a record of the date of purchase, original owner, and product information.",
            },
            {
              question:
                "How long do I have to register the warranty after I purchase?",
              answer:
                "The recommendation for product registration is as soon as you purchase your product, but the product can be registered at any time.",
            },
            {
              question: "Am I automatically registered for the warranty?",
              answer:
                "There is no automatic registration for products purchased in store or from online retailers. Products purchased factory direct are the only products automatically registered.",
            },
            {
              question: "Do I need my purchase receipt?",
              answer:
                "Yes, the purchase receipt indicates date of purchase which is the start date of the warranty period. Delivered products the date of delivery is the start date of the warranty period.",
            },
            {
              question:
                "I want to see what kind of warranty my lawn mower has, where can I find this?",
              answer:
                "The warranty statement is with the owner’s manual packet.",
            },
            {
              question:
                "What is the warranty on parts? Is it three years like equipment?",
              answer:
                'A limited-service part coverage may be applied for the remainder of the warranty period if the part or parts is purchased and installed through an authorized service provider. Please <a href="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers">contact</a> your local dealer for details.',
            },
            {
              question: "What does the zero-turn lawn mower warranty include?",
              answer:
                "Coverage period and exception details are included in the warranty statement located with the product owner’s manuals.",
            },
            {
              question: "Where is a copy of the warranty located?",
              answer:
                "The warranty statements are located within the owner’s manual packet provided with the product.",
            },
            {
              question:
                "How do I know if the problem with my equipment meets warranty coverage?",
              answer:
                'Product issues and or problems are determined and evaluated by a local authorized service dealer. The service dealer will evaluate the problem and determine if the problem meets a warrantable failure. Please <a href="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers">contact</a> your local delaer.',
            },
            {
              question: "Do you offer an extended warranty?",
              answer: `Yes, learn more about our extended warranty <a href="https://www.cubcadet.com/en_US/ew-info-page.html">here</a>.`,
            },
            {
              question: "How do I locate an authorized service dealer?",
              answer:
                'Locate an authorized dealer <a href="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers">here</a>.',
            },
            {
              question: "Is a warranty transferrable?",
              answer: "Factory warranties are not transferrable.",
            },
            {
              question: "What circumstances would void the warranty?",
              answer:
                "Depending on the product and circumstances, there are a number of scenarios that can void a warranty. These circumstances include, but are not limited to, the following:<ul><li>Lack of maintenance and/or improper maintenance as described in the operator’s manual;</li><li>Normal wear and tear resulting from use of the product</li><li>Use of the product that is not consistent with the intended use as described in the operating instructions, including, but not limited to, abuse, misuse, and/or neglect of the product, or any use inconsistent with and/or non-compliant with the instructions contained in the Operator’s Manual. This included operation in sandy and/or corrosive environments; or</li><li>Any product that has been altered or modified in a manner not approved.</li></ul>",
            },
            {
              question: "Is pick up and delivery covered by the warranty?",
              answer: "Pick up and delivery are not covered by the warranty.",
            },
            {
              question:
                "Are there any charges for warranty repairs and services?",
              answer:
                "There are no charges for any warranty service provided. Payment or fees associated with the warranty service are to be refunded by the service dealer provider.",
            },
            {
              question: "Does my equipment have separate warranties?",
              answer:
                "Products such as attachments and engines carry separate warranties. Refer to the owner’s manuals for warranty statement and or separate warranty information.",
            },
            {
              question: "Are fuel related failures covered by warranty?",
              answer: "Fuel related failures are not covered by the warranty.",
            },
            {
              question: "Is the engine covered by the product warranty?",
              answer:
                "Engines are covered by the warranty provided by the engine manufacturer.",
            },
            {
              question: "What are normal wear parts?",
              answer:
                "Normal wear parts include, but are not limited to, the following: belts, blades, blade adapters, grass bags, rider deck wheels, seats, shave plates, skid shoes, tines, filter, nozzles, hoses, O-rings, spray guns, wands, tires, spart plugs, fuses, bump knobs, outer spools, cutting line, inner belts, start pulley, starter rope, drive belts, saw chains, guide bars, batteries, and other consumable items.",
            },
            {
              question:
                "Is the warranty a guarantee that all failures be free of charge?",
              answer:
                "Warranty period and coverage are not guarantees that all failures or issues that occur during the warranty period be free of charge.",
            },
            {
              question:
                "Are adjustments, normal maintenance, and set up covered by the warranty?",
              answer:
                "No, please refer to the owner’s manual for specific maintenance, set up, and adjustment(s) details.",
            },
            {
              question: "Are retailers responsible for the warranty?",
              answer:
                "No, retailers are not responsible for the factory warranty provided with your product.",
            },
            {
              question: "Can I return equipment to the factory or retailer?",
              answer:
                'The recommendation is to not return equipment to the factory or retailer. <a href="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers">Contact</a> a local authorized dealer for product evaluation, service, and repairs.',
            },
            {
              question:
                "Are product failures warrantable when equipment is stored and maintained improperly?",
              answer:
                "No, product failure is not warrantable if equipment is stored or maintained improperly.",
            },
            {
              question:
                "By calling and speaking with a representative about equipment issues, is there a guarantee that a failure or failures meet warranty coverage?",
              answer:
                "There is no guarantee that speaking with a representative will result in warranty coverage. Warranty coverage can only be determined by a local authorized service provider evaluating the failure and cause. Representatives can provide information and options; however representatives cannot determine if a failure or similar meet warranty coverage.",
            },
            {
              question:
                "What do I do? An authorized service dealer is refusing to evaluate my equipment.",
              answer:
                "During the busier or seasonal times of year often it may take longer for an evaluation of the product. Another option may be to check with other authorized service providers in your area.",
            },
            {
              question: "I purchased a returned product, is there a warranty?",
              answer:
                "No.  Warranty extends to the initial purchaser only and the applicable warranty period will begin on the original date of purchase of the product or product delivery date.",
            },
            {
              question: "Are tires covered under the warranty?",
              answer:
                "The coverage period is 30 days from date of purchase. Please refer to the warranty statement provided with the product for further details.",
            },
            {
              question: "Is this battery covered under warranty?",
              answer:
                "Battery warranty coverage periods vary by product and brand. Please refer to the owner’s manual provided with the product for details.",
            },
          ]}
          id="warranty-faqs"
        />
      </section>

      <section className="mt-4 bg-[#ffc20f] p-2">
        <div className="container overflow-hidden ">
          <ul className="grid gap-4 md:grid-cols-[260px_1fr] items-center">
            <li className="">
              <div className="rounded-full bg-white w-full flex justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 238.024 230.028"
                  className="p-6 max-w-[260px]"
                >
                  <g data-name="Artwork 3">
                    <g data-name="Group 2505">
                      <path
                        fill="#ffc211"
                        d="M86.722 61.812h-65.5L0 82.112v29.83h238.024v-29.83l-21.224-20.3z"
                        data-name="Path 814"
                      />
                      <path
                        d="M150.072 119.012H0v29.522l19.989 21.527H216.8l21.219-21.527v-29.522z"
                        data-name="Path 815"
                      />
                      <path
                        d="M32.598 99.636v-24.6h16.914v4.92H37.826v4.613h10.148v4.613H37.826v5.535h11.686v4.919z"
                        data-name="Path 816"
                      />
                      <path
                        d="m68.27 99.636-5.228-8.611-5.228 8.611h-6.15l8.3-12.609-7.685-11.991h5.843l4.92 7.688 4.922-7.688h5.843l-8 11.993 8.614 12.607z"
                        data-name="Path 817"
                      />
                      <path
                        d="M87.337 79.956v19.68H82.11v-19.68h-6.766v-4.92h18.759v4.92z"
                        data-name="Path 818"
                      />
                      <path
                        d="M97.485 99.636v-24.6h16.914v4.92h-11.686v4.613h10.148v4.613h-10.148v5.535h11.686v4.919z"
                        data-name="Path 819"
                      />
                      <path
                        d="m132.85 99.636-9.226-14.144v14.144h-4.92v-24.6h4l8.918 13.839V75.036h5.228v24.6z"
                        data-name="Path 820"
                      />
                      <path
                        d="M149.149 99.636h-7.073v-24.6h7.073c9.533 0 11.686 3.075 11.686 12.3s-2.153 12.3-11.686 12.3m6.766-14.146c0-4.613-.923-5.535-5.535-5.535h-3.076v14.763h3.072c4.613 0 5.535-.923 5.535-5.535z"
                        data-name="Path 821"
                      />
                      <path
                        d="M165.141 99.636v-24.6h16.914v4.92h-11.994v4.613h10.456v4.613h-10.456v5.535h11.994v4.919z"
                        data-name="Path 822"
                      />
                      <path
                        d="M193.125 99.636h-7.073v-24.6h7.073c9.533 0 11.686 3.075 11.686 12.3s-2.153 12.3-11.686 12.3m6.766-14.146c0-4.613-.923-5.535-5.535-5.535h-3.076v14.763h3.072c4.613 0 5.535-.923 5.535-5.535z"
                        data-name="Path 823"
                      />
                      <path
                        fill="#fff"
                        d="M49.203 156.528h-5.535l-3.69-15.069-3.691 15.069h-5.843l-5.535-24.6h5.228l3.383 16.3 4.305-16.3h4l4.613 16.3 3.38-16.3h5.228z"
                        data-name="Path 824"
                      />
                      <path
                        fill="#fff"
                        d="m72.883 156.528-2.153-6.151h-8.3l-2.155 6.151h-5.228l9.533-24.6h4.305l9.533 24.6zm-6.15-17.221-2.46 6.458h4.613z"
                        data-name="Path 825"
                      />
                      <path
                        fill="#fff"
                        d="m94.103 156.528-4.92-8.3c-.615-1.23-.923-1.538-2.46-1.538h-1.23v9.838h-5.229v-24.6h8.918c4.92 0 8.611 2.153 8.611 7.381a6.766 6.766 0 0 1-4.613 6.766l6.766 10.453zm-4.921-19.68h-4v5.535h4c1.845 0 3.383-.615 3.383-2.768s-1.538-2.768-3.383-2.768"
                        data-name="Path 826"
                      />
                      <path
                        fill="#fff"
                        d="m117.167 156.528-4.92-8.3c-.615-1.23-.923-1.538-2.46-1.538h-1.23v9.838h-5.229v-24.6h8.918c4.92 0 8.611 2.153 8.611 7.381a6.766 6.766 0 0 1-4.613 6.766l6.766 10.453zm-4.613-19.68h-4.306v5.535h4c1.845 0 3.383-.615 3.383-2.768s-1.538-2.768-3.383-2.768"
                        data-name="Path 827"
                      />
                      <path
                        fill="#fff"
                        d="m140.846 156.528-2.153-6.151h-8l-2.148 6.151h-5.535l9.533-24.6h4.305l9.533 24.6zm-6.15-17.221-2.46 6.458h4.613z"
                        data-name="Path 828"
                      />
                      <path
                        fill="#fff"
                        d="m162.988 156.528-9.226-14.144v14.144h-4.92v-24.6h4l8.918 13.839v-13.839h5.228v24.6z"
                        data-name="Path 829"
                      />
                      <path
                        fill="#fff"
                        d="M182.362 136.848v19.68h-4.92v-19.68h-7.073v-4.92h18.759v4.92z"
                        data-name="Path 830"
                      />
                      <path
                        fill="#fff"
                        d="M203.889 148.228v8.3h-4.924v-8.3l-8.3-16.3h5.535l5.228 10.763 4.921-10.763h5.535z"
                        data-name="Path 831"
                      />
                      <path
                        fill="#666"
                        d="M214.037 31.368 120.242 0h-2.768l-94.41 31.368a3.383 3.383 0 0 0-2.153 3.69v20.3h12.3V40.593l85.8-28.6 85.492 28.6v14.761h11.993v-20.3a3.69 3.69 0 0 0-2.46-3.69"
                        data-name="Path 832"
                      />
                      <path
                        fill="#666"
                        d="M168.831 176.519c-13.531 15.376-30.137 31.675-49.819 40.593-19.989-8.918-37.518-25.217-50.741-40.593H52.587c16.3 21.527 38.748 41.823 63.965 52.587l2.46.923 2.46-.923c25.215-11.071 46.744-31.368 63.043-52.587z"
                        data-name="Path 833"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </li>
            <li className="">
              <div className="py-2 flex flex-col items-center">
                <h2 className="mb-1">
                  Cub Cadet<sup>®</sup> Extended Warranty
                </h2>
                <p className="mb-4 text-center px-14">
                  Our Extended Warranty provides peace of mind by adding an
                  additional two years of product protection after the original
                  warranty expires. Eligible Cub Cadet products include
                  residential walk-behind mowers (push and self-propelled), snow
                  blowers and ride-on mowers (garden, lawn and residential
                  zero-turn).
                </p>
                <a
                  href="https://www.cubcadet.com/en_US/ew-info-page.html"
                  className="bg-black text-white px-6 py-2 uppercase font-bold no-underline"
                >
                  Find out more
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default WarrantyFaqs;
