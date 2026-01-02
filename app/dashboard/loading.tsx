export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-red-300 p-8">
      <div className="animate-pulse space-y-8">
        {/* Header skeleton */}
        <div className="h-10 bg-red-600 rounded w-1/4"></div>
        
        {/* Stats cards skeleton */}
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-red-600 h-32 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  );
}