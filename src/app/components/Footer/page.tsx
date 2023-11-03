function Footer() {
  return (
    <footer className="bottom-0 left-0 z-20 w-full p-1 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-1 dark:bg-gray-800 dark:border-gray-600">
      <div className="w-full max-w-screen-xl mx-auto p-2 md:py-4"> {/* Reduced padding */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-2 sm:mb-0"> {/* Reduced margin */}
            <img src="https://aarabhya.com/assets/images/icon.png" className="h-6 mr-2" alt="Nalkato Logo" /> {/* Reduced logo size */}
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Nalkato</span>
          </a>
          <ul className="flex flex-wrap items-center mb-2 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-2 hover:underline md:mr-4">About</a> {/* Reduced margin */}
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" /> {/* Reduced margin */}
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a href="https://aarabhya.com/" className="hover:underline">Nalkato™</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
