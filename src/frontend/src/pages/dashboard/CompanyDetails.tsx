import { Motion } from 'solid-motionone';
import DashboardLayout from '../../layouts/DashboardLayout';

const CompanyDetails = () => (
  <DashboardLayout>
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} class="max-w-4xl mx-auto">
        <div class="max-w-2xl mx-auto">
            <h1 class="text-3xl font-bold text-blue-700 mb-4">Company Details</h1>
            <div class="bg-white rounded-lg shadow p-6 mb-6">
                <h2 class="text-xl font-semibold mb-2">Acme Corp</h2>
                <p class="mb-2"><span class="font-semibold">Region:</span> USA</p>
                <p class="mb-2"><span class="font-semibold">Contact:</span> info@acme.com</p>
                <p class="mb-2"><span class="font-semibold">Address:</span> 123 Main St, New York, NY</p>
                <p class="mb-2"><span class="font-semibold">Website:</span> <a href="https://acme.com" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">acme.com</a></p>
                <p class="mb-2"><span class="font-semibold">Description:</span> Leading provider of business solutions and services.</p>
            </div>
            <div class="flex gap-4">
                <a href="/dashboard/companies/1/edit" class="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">Edit</a>
                <a href="/dashboard/companies" class="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400 transition">Back to List</a>
            </div>
            </div>
    </Motion.div>
    
  </DashboardLayout>
);

export default CompanyDetails;