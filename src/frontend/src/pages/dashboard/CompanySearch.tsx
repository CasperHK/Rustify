import { Motion } from 'solid-motionone';
import DashboardLayout from '../../layouts/DashboardLayout';

const CompanySearch = () => (
  <DashboardLayout>
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} class="max-w-4xl mx-auto">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-3xl font-bold text-blue-700 mb-4">Company Search</h1>
        <p class="text-lg text-gray-700 mb-6">Search for companies by name, region, or contact information.</p>
        <form class="flex flex-col md:flex-row gap-4 mb-8">
            <input type="text" placeholder="Company Name" class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="text" placeholder="Region" class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Search</button>
        </form>
        {/* Results Table Placeholder */}
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white rounded-lg shadow">
            <thead>
                <tr>
                <th class="px-4 py-2 text-left">Name</th>
                <th class="px-4 py-2 text-left">Region</th>
                <th class="px-4 py-2 text-left">Contact</th>
                <th class="px-4 py-2 text-left">Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* Example static row, replace with dynamic search results later */}
                <tr class="border-t">
                <td class="px-4 py-2">Acme Corp</td>
                <td class="px-4 py-2">USA</td>
                <td class="px-4 py-2">info@acme.com</td>
                <td class="px-4 py-2">
                    <a href="/dashboard/companies/1" class="text-blue-600 hover:underline mr-2">Details</a>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    </Motion.div>
    
  </DashboardLayout>
);

export default CompanySearch;
