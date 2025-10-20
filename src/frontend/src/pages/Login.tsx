import { createSignal } from 'solid-js';
import BasicLayout from '../layouts/BasicLayout';
import { Title } from '@solidjs/meta';

const Login = () => {
  const [username, setUsername] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [error, setError] = createSignal('');
  const [success, setSuccess] = createSignal(false);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // TODO: Replace with real authentication logic
    if (username() === 'admin' && password() === 'admin') {
      setSuccess(true);
      setError('');
    } else {
      setError('Invalid username or password');
      setSuccess(false);
    }
  };

  return (
    <>
        <Title>Login • BizInfoXtr</Title>
        <BasicLayout>
        <div class="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
            <h2 class="text-2xl font-bold mb-6 text-blue-700">Login to BizInfoXtr</h2>
            <form onSubmit={handleSubmit} class="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Username"
                value={username()}
                onInput={e => setUsername(e.currentTarget.value)}
                class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password()}
                onInput={e => setPassword(e.currentTarget.value)}
                class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            />
            {error() && <div class="text-red-600 text-sm">{error()}</div>}
            {success() && <div class="text-green-600 text-sm">Login successful!</div>}
            <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Login</button>
            </form>
        </div>
        </BasicLayout>
    </>
  );
};

export default Login;