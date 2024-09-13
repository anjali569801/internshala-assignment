import React from "react"

function Button({children,onClick,active}) {
  

  return (
    <>
      <button onClick={onClick} className={`hover:custom-shadow  rounded-2xl ${active ? "bg-gray-600 text-white custom-shadow" : "bg-transparent"}`}>{children}</button>
    </>
  )
}

export default Button
