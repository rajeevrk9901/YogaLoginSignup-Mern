import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = ({ setLoginUser }) => {

    const navigate = useNavigate();

    // const [email, setEmail] = useState({value: ''})
    // const [password, setPassword] = useState({value: ''})

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }

    const login = (e) => {
        e.preventDefault();
        const { email, password } = user;

        if (email && password) {
            // alert('Registered Successfully')

            axios.post('http://localhost:5000/login', user)
                .then(res => {

                    alert(res.data.message);
                    setLoginUser(res.data.user);
                    navigate('/');

                })
                .catch(err => {
                    alert(err.response.data.message);
                })
        } else {
            alert('Please Fill All The Fields')
        }
        console.log(user);
    }



    return (
        <div className='uppercase relative z-11'>
            <form action="" className='flex flex-col gap-2 min-w-screen font-medium '>
                {/* <legend>Registration Form</legend> */}

                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                    <input className='pl-2 py-1 rounded-md' value={user.email} onChange={handleChange} type="email" name="email" id="email" />
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="password">Password</label>
                    <input className='pl-2 py-1  rounded-md' value={user.password} onChange={handleChange} type="password" name="password" id="password" />
                </div>


                <button className='uppercase bg-blue-600 hover:bg-blue-700 duration-75 py-1 text-white  rounded-md my-4' onClick={login}>Login Now</button>

                <div className='text-sm py-4'>Don't Have Any Account
                    <span className='ml-2'>
                        <button type="button" onClick={() => navigate("/Registration")} href="" className='bg-green-400 px-2 py-1  rounded-md duration-75 hover:bg-green-500 hover:text-white'>Register Now</button>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Login