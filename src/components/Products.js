import {
  faLaptop,
  faMobile,
  faTablet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProductCard from "./ProductCard";
import ProductSheet from "./ProductSheet";

export default function Products() {
  const filler =
    "Ea non aute adipisicing magna enim cupidatat nisi occaecat exercitation occaecat. Excepteur consectetur commodo cillum cupidatat aliquip aute id dolor voluptate. Reprehenderit ut excepteur enim eu dolore nisi id aliqua esse deserunt fugiat ad. Cupidatat officia et aute reprehenderit esse aliquip velit culpa commodo. Proident cupidatat laborum ut qui. Laborum ipsum anim nulla enim. Labore elit velit sint deserunt occaecat consectetur aliquip tempor minim.";
  const sheetText = "Ad cillum laborum nisi aliquip aute cillum. Incididunt irure enim nostrud do. Cupidatat ad commodo pariatur fugiat ullamco eiusmod velit deserunt velit nisi. Est est eu aliqua veniam irure enim ea consectetur exercitation proident ut aute ipsum officia.\n\n Ad cillum laborum nisi aliquip aute cillum. Incididunt irure enim nostrud do. Cupidatat ad commodo pariatur fugiat ullamco eiusmod velit deserunt velit nisi. Est est eu aliqua veniam irure enim ea consectetur exercitation proident ut aute ipsum officia."
  const sheetSubtext = "Commodo esse sit adipisicing sint. Tempor culpa exercitation ex laborum aliquip. Nulla excepteur esse nostrud non proident enim occaecat dolore. Pariatur cillum commodo eiusmod nulla reprehenderit exercitation nisi adipisicing id reprehenderit. Minim labore commodo ipsum sint."

  return (
    <React.Fragment>
      <section id="ipad" className="pb-20 mt-40 bg-gray-100 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <ProductCard
              className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
              iconColor="bg-red-400"
              title="Ipad Pro"
              text={filler}
              icon={<FontAwesomeIcon icon={faTablet} />}
            />
            <ProductCard
              className="w-full md:w-4/12 px-4 text-center"
              iconColor="bg-blue-400"
              title="Macbook Pro"
              text={filler}
              icon={<FontAwesomeIcon icon={faLaptop} />}
            />
            <ProductCard
              className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
              iconColor="bg-green-400"
              title="Iphone"
              text={filler}
              icon={<FontAwesomeIcon icon={faMobile} />}
            />
          </div>
          <ProductSheet
            className="flex flex-wrap items-center mt-32"
            title="New Ipad Pro"
            subtitle="New Ipad Pro"
            text={sheetText}
            subtext={sheetSubtext}
            icon={<FontAwesomeIcon icon={faTablet} />}
          />
        </div>
      </section>
    </React.Fragment>
  );
}
