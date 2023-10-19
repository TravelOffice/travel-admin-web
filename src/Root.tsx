import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';

export default function Root() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Outlet />
    </div>
  );
}
