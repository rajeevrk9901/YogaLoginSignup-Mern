import React from 'react'
// import { useNavigate } from 'react-router-dom'



const Homepage = ({setLoginUser}) => {

    // const navigate = useNavigate();
    // onClick={() => navigate("/Login")}
    return (
        <div>Homepage Logged In Sucessfully <span><button className=' uppercase bg-blue-600 py-1 hover:bg-blue-700 duration-75 text-white  rounded-md my-4 px-2' 
        onClick={()=>setLoginUser({})}
        > Logout Now </button></span>

        </div>
    )
}

export default Homepage