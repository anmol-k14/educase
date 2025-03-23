import React from 'react'
import Button from '../components/Button'

const Welcome = () => {
  return (
    <>
        <div className='h-[100vh] w-[100vw]  flex justify-center'>
            <div className='flex flex-col border border-gray-300 h-full  max-w-80 bg-[#F7F8F9]'>
                <div className="top-section w-full h-[70%]"></div>
                <div className="bottom-section w-full p-4 box-border h-[30%]">
                    <div className='max-w-[80%]'>
                    <h1 className='text-2xl font-medium text-[#1D2226]'>Welcome to PopX</h1>
                    <p className='text-[rgba(29,34,38,0.6)]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='w-full mt-4 flex flex-col gap-2 items-center '>
                            <Button name="Create Account" color="#6C25FF" fontcolor="#FFFFFF" navigateTo="/register"/>
                            <Button name="ALready Registered? Login" color="#6C25FF4B" fontcolor="#1D2226" navigateTo="/signin"/>
                           
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Welcome