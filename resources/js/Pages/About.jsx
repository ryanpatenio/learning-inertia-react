
const About = () => {
  return (
    <div className="flex  w-full min-h-screen">
    {/* Sidebar - takes 3 columns */}
    <div className="w-1/4 p-4 bg-gray-400 hidden md:block md:w-1/4">
      Sidebar
    </div>
  
    {/* Main Content - takes 9 columns (12 total - 3 for sidebar) */}
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row  p-4 gap-2">
        <div className="max-w-md rounded overflow-hidden shadow-xl bg-white p-6 ">            
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Card Title</div>
                <p className="text-gray-700 text-base">
                    This is a Tailwind CSS card that matches Bootstrap's styling.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #tag
                </span>
            </div>
        </div>
        <div className="max-w-md rounded overflow-hidden shadow-lg bg-white p-6 ">            
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Card Title</div>
                <p className="text-gray-700 text-base">
                    This is a Tailwind CSS card that matches Bootstrap's styling.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #tag
                </span>
            </div>
        </div>
    </div>

  </div>
  )
}

export default About