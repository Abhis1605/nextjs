export default function AboutPage() {
    return(
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold text-gray-900">About Us</h1>
       <ul>
        <li className="text-xl text-gray-600 max-w-7xl list-disc">
          FlowTrack is a task management platform designed to keep your workflow smooth and your goals on track. We focus on simplicity, clarity, and consistent progress.
        </li>
        <li className="list-disc text-xl text-gray-600 max-w-7xl">
            
                The platform is built to support consistent progress by making it easy to plan tasks, track completion, and stay focused on priorities. FlowTrack helps turn daily plans into achievable outcomes.
            
        </li>
        <li className="text-xl text-gray-600 max-w-7xl list-disc">
                With a clean and intuitive design, FlowTrack adapts to different workflows and working styles. Whether managing personal tasks or professional goals, it keeps everything structured and accessible.
        </li>
        <li className="text-xl text-gray-600 max-w-7xl list-disc">
                At its core, FlowTrack is about helping users work smarter and stay in control of their time. By keeping progress visible and tasks organized, it supports better productivity every day.
        </li>
       </ul>
      </div>
    </div>
    )
}