import React from 'react'

const InputField = ({title}) => {
  return (
    <>
<div className="flex flex-col w-full  ">
  <label htmlFor="input" className="text-xs font-bold text-[#6C25FF] relative top-3 ml-2 px-1 bg-[#F7F8F9] w-fit">
    {title}
  </label>
  <input
    type="text"
    name="input"
    placeholder="Write here..."
    className="mt-1 px-3 py-2 h-10 text-xs border-2 border-[#CBCBCB] rounded bg-[#F7F8F9] focus:outline-none"
  />
</div>

    </>
  )
}

export default InputField