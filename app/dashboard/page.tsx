export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-linear-to-tr from-slate-300 to-cyan-100 pl-35 pr-35 pt-20">
      <h1 className="text-4xl font-bold text-gray-900 ">Dashboard</h1>
      <p className="text-gray-600 mt-4">
        Welcome to your FlowTrack dashboard!
      </p>
      
      <div className="mt-8 grid grid-cols-3 gap-6">
        <div className="bg-gray-500 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Tasks</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-2">12</p>
        </div>
        
        <div className="bg-gray-500 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Completed</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">8</p>
        </div>
        
        <div className="bg-gray-500 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Pending</h3>
          <p className="text-3xl font-bold text-orange-600 mt-2">4</p>
        </div>
      </div>
    </div>
  );
}