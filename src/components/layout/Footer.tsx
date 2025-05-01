const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3b2a72] border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-center items-center">         
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} SocialStats.  All rights reserved.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Made with ❤️ By Abhishek Varma</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
