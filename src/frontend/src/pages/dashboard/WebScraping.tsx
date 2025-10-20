import { Motion } from 'solid-motionone';
import DashboardLayout from '../../layouts/DashboardLayout';

const WebScraping = () => (
  <DashboardLayout>
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} class="max-w-4xl mx-auto">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-3xl font-bold text-blue-700 mb-4">Web Scraping</h1>
        <p class="text-lg text-gray-700 mb-6">Update your company list with the latest data from the web. Start a new scraping job or view recent updates below.</p>
        <form class="flex flex-col md:flex-row gap-4 mb-8">
          <input type="text" placeholder="Region or Keyword" class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Start Scraping</button>
        </form>
        {/* Recent Scraping Jobs Table Placeholder */}
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white rounded-lg shadow">
            <thead>
              <tr>
                <th class="px-4 py-2 text-left">Job ID</th>
                <th class="px-4 py-2 text-left">Region/Keyword</th>
                <th class="px-4 py-2 text-left">Status</th>
                <th class="px-4 py-2 text-left">Started</th>
              </tr>
            </thead>
            <tbody>
              {/* Example static row, replace with dynamic data later */}
              <tr class="border-t">
                <td class="px-4 py-2">12345</td>
                <td class="px-4 py-2">USA</td>
                <td class="px-4 py-2 text-green-600">Completed</td>
                <td class="px-4 py-2">2024-06-01 10:00</td>
              </tr>
              <tr class="border-t">
                <td class="px-4 py-2">12346</td>
                <td class="px-4 py-2">Europe</td>
                <td class="px-4 py-2 text-yellow-600">Running</td>
                <td class="px-4 py-2">2024-06-02 14:30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Motion.div>
  </DashboardLayout>
);

export default WebScraping;
