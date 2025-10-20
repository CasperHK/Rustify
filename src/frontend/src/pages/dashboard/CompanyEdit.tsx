import { Motion } from 'solid-motionone';
import DashboardLayout from '../../layouts/DashboardLayout';

const CompanyEdit = () => (
  <DashboardLayout>
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} class="max-w-4xl mx-auto">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-3xl font-bold text-blue-700 mb-4">Edit Company</h1>
        <form class="bg-white rounded-lg shadow p-6 mb-6 flex flex-col gap-4">
          <div>
            <label class="block font-semibold mb-1">Name</label>
            <input type="text" value="Acme Corp" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label class="block font-semibold mb-1">Region</label>
            <input type="text" value="USA" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label class="block font-semibold mb-1">Contact</label>
            <input type="email" value="info@acme.com" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label class="block font-semibold mb-1">Address</label>
            <input type="text" value="123 Main St, New York, NY" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label class="block font-semibold mb-1">Website</label>
            <input type="url" value="https://acme.com" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label class="block font-semibold mb-1">Description</label>
            <textarea class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">Leading provider of business solutions and services.</textarea>
          </div>
          <div class="flex gap-4 mt-4">
            <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Save</button>
            <a href="/dashboard/companies/1" class="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400 transition">Cancel</a>
          </div>
        </form>
      </div>
    </Motion.div>
  </DashboardLayout>
);

export default CompanyEdit;
