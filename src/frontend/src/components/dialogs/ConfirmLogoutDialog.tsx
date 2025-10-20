import { Show } from 'solid-js';

interface ConfirmLogoutDialogProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmLogoutDialog = (props: ConfirmLogoutDialogProps) => (
  <Show when={props.open}>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div class="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
        <h2 class="text-xl font-bold mb-4">Confirm Logout</h2>
        <p class="mb-6">Are you sure you want to log out?</p>
        <div class="flex justify-center gap-4">
          <button
            class="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400 transition"
            onClick={props.onCancel}
          >
            Cancel
          </button>
          <button
            class="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
            onClick={props.onConfirm}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </Show>
);

export default ConfirmLogoutDialog;
