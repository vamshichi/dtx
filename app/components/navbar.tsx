const Nav = () => {
    return (
      <nav className="bg-gray-200 border-gray-400 dark:bg-gray-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse mr-3">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DTX</span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-400 rounded-lg bg-gray-200 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-200 dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-900 rounded md:bg-transparent md:text-blue-900 md:p-0 dark:text-white md:dark:text-blue-600"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0 dark:text-white md:dark:hover:text-blue-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0 dark:text-white md:dark:hover:text-blue-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
                <ul className="absolute left-0 top-full hidden group-hover:block bg-gray-200 text-gray-900 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700">
                      Process Plants
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700">
                      Oil and Gas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700">
                      Energy Sector
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700">
                      EAM
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0 dark:text-white md:dark:hover:text-blue-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Nav;
  