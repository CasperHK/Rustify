import { Motion } from 'solid-motionone';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Pagination } from "@kobalte/core/pagination";
import { createSignal } from 'solid-js';

const PAGE_SIZE = 10;

const companies = [
  { id: 1, name: 'Acme Corp', region: 'USA', contact: 'info@acme.com' },
  { id: 2, name: 'Globex Ltd', region: 'UK', contact: 'contact@globex.co.uk' },
  { id: 3, name: 'Initech', region: 'Canada', contact: 'hello@initech.ca' },
  { id: 4, name: 'Umbrella Inc', region: 'Germany', contact: 'contact@umbrella.de' },
  { id: 5, name: 'Wayne Enterprises', region: 'USA', contact: 'info@wayne.com' },
  { id: 6, name: 'Stark Industries', region: 'USA', contact: 'contact@stark.com' },
  { id: 7, name: 'Hooli', region: 'USA', contact: 'info@hooli.com' },
  { id: 8, name: 'Soylent Corp', region: 'USA', contact: 'hello@soylent.com' },
  { id: 9, name: 'Massive Dynamic', region: 'USA', contact: 'contact@massivedynamic.com' },
  { id: 10, name: 'Vandelay Industries', region: 'USA', contact: 'info@vandelay.com' },
  { id: 11, name: 'Wonka Industries', region: 'UK', contact: 'info@wonka.com' },
  { id: 12, name: 'Cyberdyne Systems', region: 'USA', contact: 'contact@cyberdyne.com' },
  { id: 13, name: 'Tyrell Corporation', region: 'USA', contact: 'info@tyrell.com' },
  { id: 14, name: 'Oscorp', region: 'USA', contact: 'contact@oscorp.com' },
  { id: 15, name: 'LexCorp', region: 'USA', contact: 'info@lexcorp.com' },
  { id: 16, name: 'Pied Piper', region: 'USA', contact: 'hello@piedpiper.com' },
  { id: 17, name: 'Monsters Inc', region: 'USA', contact: 'info@monstersinc.com' },
  { id: 18, name: 'Gringotts Bank', region: 'UK', contact: 'contact@gringotts.co.uk' },
  { id: 19, name: 'Oceanic Airlines', region: 'Australia', contact: 'info@oceanic.com' },
  { id: 20, name: 'Duff Beer', region: 'USA', contact: 'contact@duffbeer.com' },
];

const [page, setPage] = createSignal(1);
const pageCount = Math.ceil(companies.length / PAGE_SIZE);
const pagedCompanies = () => companies.slice((page() - 1) * PAGE_SIZE, page() * PAGE_SIZE);

const CompanyList = () => (
  <DashboardLayout>
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-blue-700 mb-4">Company List</h1>
      <p class="text-lg text-gray-700 mb-6">Browse and manage all companies in your database.</p>
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
            {pagedCompanies().map(company => (
              <tr class="border-t" key={company.id}>
                <td class="px-4 py-2">{company.name}</td>
                <td class="px-4 py-2">{company.region}</td>
                <td class="px-4 py-2">{company.contact}</td>
                <td class="px-4 py-2">
                  <a href={`/dashboard/companies/${company.id}`} class="text-blue-600 hover:underline mr-2">Details</a>
                  <a href={`/dashboard/companies/${company.id}/edit`} class="text-green-600 hover:underline">Edit</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="flex justify-center mt-6">
        <Pagination
          count={pageCount}
          page={page()}
          onChange={setPage}
          showFirstButton
          showLastButton
        />
      </div>
    </Motion.div>
  </DashboardLayout>
);

export default CompanyList;
