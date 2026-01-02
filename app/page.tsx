export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold text-gray-900">FlowTrack</h1>
        <p className="text-xl text-gray-600 max-w-md">
          It makes task tracking simple, clear, and stress-free.
        </p>
        <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
}
