import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b fixed w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-4xl font-bold 
           bg-linear-to-br 
           from-[#00B7FF] 
           via-[#DEAFAD] 
           to-[#9AEDBD]
           bg-clip-text 
           text-transparent">
          FlowTrack
        </Link>
        
        <div className="flex gap-6">
          <Link 
            href="/" 
            className="text-gray-900 font-medium hover:text-cyan-600  relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:mt-1 after:left-0 after:bottom-[1px] after:h-[2px] after:w-0 hover:after:w-full 
            after:bg-cyan-600 after:transition-all after:duration-300"
          >
            Home
          </Link>
          <Link 
            href="/dashboard" 
            className="text-gray-900 font-medium hover:text-cyan-600 relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:mt-1 after:left-0 after:bottom-[1px] after:h-[2px] after:w-0 hover:after:w-full 
            after:bg-cyan-600 after:transition-all after:duration-300 "
          >
            Dashboard
          </Link>
          <Link href='/about-us'
          className="text-gray-900 font-medium hover:text-cyan-600 relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:mt-1 after:left-0 after:bottom-[1px] after:h-[2px] after:w-0 hover:after:w-full 
            after:bg-cyan-600 after:transition-all after:duration-300 ">
          About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
