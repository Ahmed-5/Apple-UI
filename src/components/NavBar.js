import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faArrowAltCircleDown,
  faBars,
  faLaptop,
  faTablet,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
  const toggleNavbar = () => {
    document.getElementById("collapse").classList.toggle("hidden");
    document.getElementById("collapse").classList.toggle("block");
  };

  return (
    <div className="bg-black h-16">
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              href="#home"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              Home
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border-solid border-trasparent rounded bg-transparent block lg:hidden lg:outline-none focus:outline-none"
              type="button"
              onClick={toggleNavbar}
            >
              <i className="text-white">
                <FontAwesomeIcon icon={faBars} color="white" />
              </i>
            </button>
          </div>
          <div
            id="collapse"
            className="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none hidden"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  href="#ipad"
                  className="lg:text-white lg:hover:text-gray-400 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  <i className="lg:text-gray-300 text-gray-500 mr-2">
                    <FontAwesomeIcon icon={faTablet} color="gray" />
                  </i>{" "}
                  {"IPad"}
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#macbook"
                  className="lg:text-white lg:hover:text-gray-400 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  <i className="lg:text-gray-300 text-gray-500 mr-2">
                    <FontAwesomeIcon icon={faLaptop} color="gray" />
                  </i>{" "}
                  {"Macbook"}
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#team"
                  className="lg:text-white lg:hover:text-gray-400 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  <i className="lg:text-gray-300 text-gray-500 mr-2">
                    <FontAwesomeIcon icon={faUsers} color="gray" />
                  </i>{" "}
                  {"Team"}
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#contact"
                  className="lg:text-white lg:hover:text-gray-400 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  <i className="lg:text-gray-300 text-gray-500 mr-2">
                    <FontAwesomeIcon icon={faAddressCard} color="gray" />
                  </i>{" "}
                  {"Contact Us"}
                </a>
              </li>
            </ul>

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  href="#facebook"
                  className="lg:text-white lg:hover:text-gray-400 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  <i>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="lg:text-gray-300 text-gray-500 lg:hover:text-gray-400"
                    />
                  </i>{" "}
                  <span className="lg:hidden inline-block ml-2">Facebook</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#twitter"
                  className="lg:text-white lg:hover:text-gray-400 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  <i>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="lg:text-gray-300 text-gray-500 lg:hover:text-gray-400"
                    />
                  </i>{" "}
                  <span className="lg:hidden inline-block ml-2">Twitter</span>
                </a>
              </li>
              <li className="flex items-center">
                <button
                  className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                  type="button"
                >
                  <FontAwesomeIcon
                    icon={faArrowAltCircleDown}
                    className="lg:text-gray-300 text-gray-500 lg:hover:text-gray-400 mr-2"
                  />
                  Buy New Macbook
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
