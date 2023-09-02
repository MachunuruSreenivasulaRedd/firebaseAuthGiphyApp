import React,{useState} from 'react'
import {auth} from '../../firebase';
import {Redirect} from 'react-router-dom'
import './index.css'

const UserAuth = props => {
    const [data,setData] = useState({
        email:"",
        password:"",
        msg: '',
        isLoggedin: false,
    })

    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const signUp = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(data.email,data.password).then(
            user => console.log(user)
            ).catch(err => setData({msg: err.message,email: '', password: ''}))
    }

    const signIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(data.email,data.password).then(
            user => setData({isLoggedin: true})
            ).catch(err => setData({msg: err.message,email: '', password: ''}))
    }
    return (
        !data.isLoggedin ? (
        <div className='authContainer'>
            <center>
                <form autoComplete="off">
                    <h1 className="loginHeading">Welcome back</h1>
                    <div className="input">
                <img
                  src="https://img.icons8.com/?size=512&id=HyjRWfleuVje&format=png"
                  className="img"
                  alt="email"
                />
                <input type="email" name="email" value={data.email} placeholder="Email" onChange={changeHandler}/>
              </div>
              <div className="input">
                <img
                  src="https://img.icons8.com/?size=2x&id=4uul8RsD9D9K&format=png"
                  className="img"
                  alt="password"
                />
                <input type="password" name="password" value={data.password} placeholder="Password" onChange={changeHandler}/>
              </div>
                <div className='btnContainer'>
                    <button onClick={signUp} className='btn' type="button"><span>Sign Up</span></button> &nbsp;&nbsp;
                    <button onClick={signIn} className='Lbtn' type="button"><span>Login</span></button>
                </div>
                </form>
                <p className='erroMsg'>{data.msg}</p>
            </center>
        </div>
        ) :
        <Redirect to="/" />
    )
}


export default UserAuth
