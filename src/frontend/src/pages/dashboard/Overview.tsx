import { Motion } from 'solid-motionone';
import DashboardLayout from '../../layouts/DashboardLayout';

const Overview = () => (
  <DashboardLayout>
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} class="max-w-4xl mx-auto">
        <div class="max-w-2xl mx-auto">
            <h1 class="text-3xl font-bold text-blue-700 mb-4">Dashboard Overview</h1>
            <p class="text-lg text-gray-700 mb-6">
                Welcome to BizInfoXtr! Here you can search for companies, update your business database, and manage company information efficiently.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white rounded-lg shadow p-6">
                <h2 class="text-xl font-semibold mb-2">Company Search</h2>
                <p>Find and explore business partners in your selected region.</p>
                </div>
                <div class="bg-white rounded-lg shadow p-6">
                <h2 class="text-xl font-semibold mb-2">Web Scraping</h2>
                <p>Update your company list with the latest data from the web.</p>
                </div>
                <div class="bg-white rounded-lg shadow p-6">
                <h2 class="text-xl font-semibold mb-2">Company List</h2>
                <p>View and manage all companies in your database.</p>
                </div>
                <div class="bg-white rounded-lg shadow p-6">
                <h2 class="text-xl font-semibold mb-2">Edit Company</h2>
                <p>Edit and update company details as needed.</p>
                </div>
            </div>
        </div>
    </Motion.div>

  </DashboardLayout>
);

export default Overview;
