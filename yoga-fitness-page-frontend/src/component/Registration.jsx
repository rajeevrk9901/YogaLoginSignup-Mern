import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const RegistrationForm = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        email: '',
        mnum: '',
        age: '',
        password: ''
    })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }

    const register = (e) => {
        e.preventDefault();
        const { name, email, mnum, age, password } = user;
        if (name && email && mnum && age && password) {
            // alert('Registered Successfully')
            axios.post('http://localhost:5000/register', user)
                .then(res => {
                    alert(res.data.message);
                    navigate('/login');
                })
        } else {
            alert('Please Fill All The Fields')
        }
        // console.log(user);
    }


    return (
        <div className='uppercase relative z-11'>
            <form action="" className='flex flex-col gap-2 min-w-screen font-medium text-black'>
                {/* <legend>Registration Form</legend> */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <input className='pl-2 py-1  rounded-md' value={user.name} onChange={handleChange} type="text" name="name" id="name" />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                    <input className='pl-2 py-1  rounded-md' value={user.email} onChange={handleChange} type="email" name="email" id="email" />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="mnum">Mob No.</label>
                    <input className='pl-2 py-1  rounded-md' value={user.mnum} onChange={handleChange} type="number" name="mnum" id="mnum" />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="age">Age</label>
                    <input className='pl-2 py-1  rounded-md' value={user.age} onChange={handleChange} type="number" name="age" id="age" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Gender</label>
                    <div className="flex">

                        <div className="flex items-center mr-4">
                            <input className='pl-2 py-1  rounded-md w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500' id="inline-radio-1" type="radio" value="" name="inline-radio-group" />
                            <label htmlFor="inline-radio-1" className="cursor-pointer ml-2 text-sm font-medium text-gray-900 ">Male</label>
                        </div>

                        <div className="flex items-center mr-4">
                            <input className='pl-2 py-1  rounded-md w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500' id="inline-radio-2" type="radio" value="" name="inline-radio-group" />
                            <label htmlFor="inline-radio-2" className="cursor-pointer ml-2 text-sm font-medium text-gray-900 ">Female</label>
                        </div>

                        <div className="flex items-center mr-4">
                            <input className='pl-2 py-1  rounded-md w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500' id="inline-radio-3" type="radio" value="" name="inline-radio-group" />
                            <label htmlFor="inline-radio-3" className="cursor-pointer ml-2 text-sm font-medium text-gray-900 ">Other</label>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password">Password</label>
                    <input className='pl-2 py-1  rounded-md' value={user.password} onChange={handleChange} type="password" name="password" id="password" />
                </div>
                {/* <div >
                    <label className='font-bold' htmlFor="">Choose Your Time Slot</label>
                    <div className='grid grid-cols-2 gap-2 tracking-widest pt-2'>
                        <button className='bg-white text-black px-2 py-1'>6-7AM</button>
                        <button className='bg-white text-black px-2 py-1'>7-8AM</button>
                        <button className='bg-white text-black px-2 py-1'>8-9AM</button>
                        <button className='bg-white text-black px-2 py-1'>5-6PM</button>
                    </div>
                </div> */}

                <button className='uppercase bg-blue-600 py-1 hover:bg-blue-700 duration-75 text-white  rounded-md my-4' onClick={register} >Register Now</button>

                <div className='text-sm py-4'>already have an account?
                    <span className='ml-2'>

                        <button type="button" onClick={() => navigate("/Login")} href="" className='bg-red-400 px-2 py-1  rounded-md duration-75 hover:bg-red-500 hover:text-white'>Login Now</button>

                    </span>
                </div>


            </form>
        </div>
    )
}

export default RegistrationForm