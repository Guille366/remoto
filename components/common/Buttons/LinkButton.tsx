import React from 'react'

interface LinkButtonTypes {
  isEmail?: boolean
  text: string
  to: string
  className?: string
}

const LinkButton: React.FC<LinkButtonTypes> = ({ isEmail, text, to, className }) => {
  return (
    <a href={isEmail ? `mailto:${to}` : to }
      className={`font-mono px-4 py-2 mx-2 bg-purple-700 text-white no-underline rounded hover:bg-purple-600 ${className}`}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  
  )
}

export default LinkButton