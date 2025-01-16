import React from 'react'

function SubSectionLink({href}) {
    return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-4 text-blue-500 underline hover:text-blue-700"
        >
          Learn More
        </a>
  )
}

export default SubSectionLink
