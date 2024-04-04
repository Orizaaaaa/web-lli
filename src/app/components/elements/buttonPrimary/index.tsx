import React from 'react'

type Props = {
    name?: string
    onClick?: () => void
    className?: string
}

const ButtonPrimary = ({ name, onClick, className }: Props) => {
    return (
        <button className={`bg-primary px-4 py-2 text-white  ${className}`} onClick={onClick} >
            {name}
        </button >
    )
}

export default ButtonPrimary