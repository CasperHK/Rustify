import DashboardLayout from '../../layouts/DashboardLayout';
import { Motion } from 'solid-motionone';

const Settings = () => (
  <DashboardLayout>
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold text-blue-700 mb-4">Settings</h1>
      <div class="bg-white rounded-lg shadow p-6 flex flex-col gap-6">
        <div>
          <h2 class="text-xl font-semibold mb-2">Profile</h2>
          <form class="flex flex-col gap-4">
            <div>
              <label class="block font-semibold mb-1">Name</label>
              <input type="text" value="John Doe" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label class="block font-semibold mb-1">Email</label>
              <input type="email" value="john@example.com" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Save Profile</button>
          </form>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-2">Change Password</h2>
          <form class="flex flex-col gap-4">
            <div>
              <label class="block font-semibold mb-1">Current Password</label>
              <input type="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label class="block font-semibold mb-1">New Password</label>
              <input type="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">Change Password</button>
          </form>
        </div>
      </div>
    </Motion.div>
  </DashboardLayout>
);

export default Settings;
