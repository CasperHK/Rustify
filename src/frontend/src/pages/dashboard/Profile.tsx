import DashboardLayout from '../../layouts/DashboardLayout';
import { Motion } from 'solid-motionone';

const Profile = () => (
  <DashboardLayout>
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold text-blue-700 mb-4">Profile</h1>
      <div class="bg-white rounded-lg shadow p-6 flex flex-col gap-6">
        <div class="flex items-center gap-4 mb-6">
          <img src="https://i.pravatar.cc/80" alt="User" class="w-20 h-20 rounded-full border border-gray-300 object-cover" />
          <div>
            <h2 class="text-xl font-semibold">John Doe</h2>
            <p class="text-gray-600">john@example.com</p>
          </div>
        </div>
        <form class="flex flex-col gap-4">
          <div>
            <label class="block font-semibold mb-1">Name</label>
            <input type="text" value="John Doe" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label class="block font-semibold mb-1">Email</label>
            <input type="email" value="john@example.com" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Save Changes</button>
        </form>
      </div>
    </Motion.div>
  </DashboardLayout>
);

export default Profile;
