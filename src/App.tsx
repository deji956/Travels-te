/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl font-bold text-gray-800">My App</h1>
        </div>
      </header>

      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow p-6 min-h-[50vh]">
          <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
          <p className="text-gray-600">This is the main content area.</p>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center mt-auto">
        <p className="text-sm">&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </footer>
    </div>
  );
}
