import React from 'react'

interface LinkButtonTypes {
  isEmail?: boolean
  text: string
  to: string
  className?: string
  light?: boolean
  anchor?: boolean
}

const LinkButton: React.FC<LinkButtonTypes> = ({ isEmail, text, to, className, light, anchor }) => {
  return (
    <a href={isEmail ? `mailto:${to}` : to }
      className={`font-mono px-4 py-2 mx-2 no-underline rounded
      ${light ? "bg-white text-violet-700 hover:bg-violet-100" : "bg-violet-700 text-white hover:bg-violet-600"}
      ${className}`}
      target={anchor ? "_self" : "_blank"}
      rel="noreferrer"
    >
      {text}
    </a>
  
  )
}

export default LinkButton