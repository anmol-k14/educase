import React from 'react'
import InputField from '../components/InputField'
import RadioButton from '../components/RadioButton'
import Button from '../components/Button'

const CreateAccount = () => {
  return (
    <>
        <div className='h-[100vh] w-[100vw]  flex justify-center'>
            <div className='flex flex-col h-full border border-gray-300 p-4 max-w-80 bg-[#F7F8F9]'>
                <h1 className='text-2xl font-medium max-w-[60%] mt-4'>Create your PopX account</h1>
                <div>
                    <InputField title="Full name"/>
                    <InputField title="Phone number"/>
                    <InputField title="Email address"/>
                    <InputField title="Password"/>
                    <InputField title="Conpany name"/>
                </div>
                <p className='text-sm font-[350] mt-2 '>Are you an Agency?</p>
                <div className='flex gap-4 mt-1'>
                    <RadioButton title="Yes"/>
                    <RadioButton title="No"/>
                </div>
                <div className='mt-auto'>
                <Button name="Create Account" color="#6C25FF" fontcolor="#FFFFFF" navigateTo="/settings"/>
                </div>

            </div>
        </div>
    </>
  )
}

export default CreateAccount