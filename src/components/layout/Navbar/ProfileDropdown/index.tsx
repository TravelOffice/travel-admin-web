import { useState } from 'react';

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-3 relative">
      <div>
        <button
          type="button"
          className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          id="user-menu"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open user menu</span>
          <img src="https://picsum.photo/200" alt="" className="w-10 h-10 rounded-full" />
        </button>
      </div>
      {
        isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white text-gray-700 ring-1 ring-black ring-opacity-5 dark:bg-dark dark:text-white"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            <a
              href="/"
              className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
              role="menuitem"
            >
              Cài đặt
            </a>
            <button
              className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
              role="menuitem"
              type="button"
            >
              Đăng xuất
            </button>
          </div>
        )
      }
    </div>
  );
}
