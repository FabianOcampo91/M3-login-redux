import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import './Logout.css'

const Logout = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handlerLogout = (e) => {
    e.preventDefault ();
    dispatch(logout())
  }


  return (
    <div className='logout'>
        <h1>
          Welcome <span className='user-name'>{user.name}</span>
        </h1>
          <button className='logout-btn' onClick={(e) => handlerLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout