import { JSX } from 'solid-js';
import NavBar from '../components/NavBar';

const BasicLayout = (props: { children: JSX.Element }) => (
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 to-blue-300">
    <NavBar />
    <main class="flex-1 flex flex-col items-center justify-center">
      {props.children}
    </main>
  </div>
);

export default BasicLayout;