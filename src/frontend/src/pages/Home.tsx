import { Component } from 'solid-js';
import BasicLayout from '../layouts/BasicLayout';
import { Title } from '@solidjs/meta';

const Home: Component = () => {
  return (
    <>
      <Title>Home • BizInfoXtr</Title>
      <BasicLayout>
        <div class="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full text-center">
          <h1 class="text-4xl font-bold mb-4 text-blue-700">BizInfoXtr</h1>
          <p class="text-lg mb-6 text-gray-700">
            Business Information Extractor for efficient and accurate gathering of business data worldwide. Find contact details of potential business partners and facilitate networking and collaboration opportunities.
          </p>
          <a href="/login" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Login to Get Started</a>
        </div>
      </BasicLayout>
    </>
  );
};

export default Home;