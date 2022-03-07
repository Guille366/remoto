import React, { ChangeEvent } from 'react'

interface CheckboxTypes {
    active?: boolean
    text: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    name: string
}

const Checkbox: React.FC<CheckboxTypes> = ({ active, text, handleChange, name }) => {
  return (
    <div
        className={`${
            active ? "sm:text-violet-700" : ""
        } py-3 flex flex-row items-center`}
        >
        <label className="mr-1 cursor-pointer" htmlFor={name}>
            {text}
        </label>
        <input
            className={`mr-3 cursor-pointer`}
            type="checkbox"
            id={name}
            name={name}
            checked={active}
            onChange={handleChange}
            data-testId={`${name}-input`}
        />
    </div>
  )
}

export default Checkbox