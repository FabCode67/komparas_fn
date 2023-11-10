
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Mission
                </h4>
                <p className="mt-4 text-base leading-6 text-gray-300">
                  Our mission is to provide the best comparison service for our customers, helping them make informed decisions and save money.
                </p>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Useful Links
                </h4>
                <ul className="mt-4">
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Contact Us
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Follow Us
                </h4>
                <ul className="mt-4">
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Facebook
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Twitter
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Newsletter
                </h4>
                <p className="mt-4 text-base leading-6 text-gray-300">
                  Sign up for our newsletter to get the latest news and updates.
                </p>
                <form className="mt-4 sm:flex">
                  <input aria-label="Email address" type="email" required className="appearance-none w-full px-5 py-3 sm:max-w-xs text-base leading-6 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out" placeholder="Enter your email" />
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button type="submit" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 xl:mt-0">
            <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
              Other Information
            </h4>
            <p className="mt-4 text-base leading-6 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi quis bibendum bibendum, velit sapien bibendum ipsum, euismod bibendum sapien vel sapien. Sed euismod, nisi quis bibendum bibendum, velit sapien bibendum ipsum, euismod bibendum sapien vel sapien.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base leading-6 text-gray-400 xl:text-center">
            &copy; 2023 creativa poeta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
