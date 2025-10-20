import { useLocation } from '@solidjs/router';

const menuItems = [
  { href: '/dashboard/overview', label: 'Dashboard Home' },
  { href: '/dashboard/search', label: 'Company Search' },
  { href: '/dashboard/scrape', label: 'Web Scraping' },
  { href: '/dashboard/companies', label: 'Company List' },
];

const maintItems = [
  { href: '/dashboard/system-config', label: 'System Configurations' },
];

const SideBar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname.startsWith(path);
  return (
    <aside class="w-64 bg-white shadow-lg p-6 hidden md:block">
      <nav class="flex flex-col gap-4">
        {menuItems.map(item => (
          <a
            href={item.href}
            class={`px-4 py-2 rounded transition font-medium ${
              isActive(item.href)
                ? 'bg-blue-100 text-blue-700 border border-blue-400'
                : 'hover:bg-blue-50 hover:text-blue-700'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div class="mt-8">
        <div class="text-xs font-semibold text-gray-500 uppercase mb-2">
          Maintenance
        </div>
        <nav class="flex flex-col gap-4">
          {maintItems.map(item => (
            <a
              href={item.href}
              class={`px-4 py-2 rounded transition font-medium ${
                isActive(item.href)
                  ? 'bg-blue-100 text-blue-700 border border-blue-400'
                  : 'hover:bg-blue-50 hover:text-blue-700'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;