import { JSX } from 'solid-js';
import TopNav from '../components/dashboard/TopNav';
import SideBar from '../components/SideBar';

const DashboardLayout = (props: { children: JSX.Element }) => (
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-blue-100">
    <TopNav />
    <div class="flex flex-1">
      <SideBar />
      <main class="flex-1 p-6">
        {props.children}
      </main>
    </div>
  </div>
);

export default DashboardLayout;
