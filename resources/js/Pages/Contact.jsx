import React from 'react'
import { Link } from '@inertiajs/react'

const Contact = () => {
  return (
    <>
     <div className="p-8">
        <div className="@container border-2 border-blue-500 p-4 mb-4 resize-x overflow-auto">
         {/* Container with resize handle (try dragging the right edge!) */}
        <div className="bg-gray-100 p-4  @md:flex @md:gap-4">
            <div className="bg-red-200 p-2 hidden @md:block @md:w-1/3">Sidebar</div>
            {/* the side bar will display hidden when the container reach 768px size */}
            <div className="bg-green-200 p-2 @md:w-2/3">Main Content</div>
        </div>
        </div>
        
        <p className="text-sm text-gray-600 ">
        ← Drag the blue border to resize the container. 
        Layout changes at 768px container width (not screen width).
        </p>
        <Link preserveScroll href="/Contact" className="text-2xl">{new Date().toLocaleTimeString()}</Link>
    </div>
    </>
  )
}

export default Contact