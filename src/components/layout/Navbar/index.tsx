import classNames from 'classnames';
import ProfileDropdown from '@/components/layout/Navbar/ProfileDropdown';

export default function Navbar() {
  return (
    <nav
      className={classNames('fixed w-full top-0 left-0 z-20 transition-all sm:w-[unset] sm:right-0 bg-gray-100 dark:bg-[#161d31]', isSidebarOpen ? 'sm:left-64' : 'sm:left-20')}
    >
      <div
        className="flex justify-between items-center px-4 py-3.5 bg-white shadow-lg z-20 dark:bg-[#283046] sm:mx-8 sm:mt-5 sm:mb-10 sm:rounded-lg"
      >
        <div className="flex items-center">
          <div className="flex flex-col items-end me-5">
            <h6 className="font-semibold text-gray-800 dark:text-white">Nguyễn Tuấn Anh</h6>
            <p className="text-sm text-gray-600 dark:text-white">Admin</p>
          </div>
          <ProfileDropdown />
        </div>
      </div>
    </nav>
  );
}
