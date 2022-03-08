import React from 'react'

interface LinkButtonTypes {
  isEmail?: boolean
  text: string
  to: string
  className?: string
  variant?: "light" | "gold"
  anchor?: boolean
}

const LinkButton: React.FC<LinkButtonTypes> = ({ isEmail, text, to, className, variant, anchor }) => {
  return (
    <a href={isEmail ? `mailto:${to}` : to }
      className={`font-mono px-4 py-2 mx-2 no-underline rounded shadow-lg
      ${variant === "light"
        ? "bg-white text-violet-700 hover:bg-violet-700 hover:text-white"
        : variant === "gold"
        ? "bg-white text-yellow-600 hover:bg-violet-700 border border-yellow-600  border-opacity-30 hover:text-white"
        : "bg-violet-700 text-white hover:bg-violet-600"}
      ${className}`}
      target={anchor ? "_self" : "_blank"}
      rel="noreferrer"
    >
      {text}
    </a>
  
  )
}

export default LinkButton