import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { Outlet, useNavigate } from 'react-router-dom'
import { useNavigation } from '@react-navigation/native';
import { setLogin } from '../src/redux/slices/AuthSlice';


const ProtectedRoute = ({ Component }) => {
    const navigate = useNavigation()
    const dispatch = useDispatch()
    useEffect(() => {
        let token = localStorage.getItem('authToken')
        if (!token) {
            navigate('/login')
        }
        else {
         
            dispatch(setLogin(true))
        }
    }, [])

    return (
        <div><Component /></div>
    )
}

export default ProtectedRoute