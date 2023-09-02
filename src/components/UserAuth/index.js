import React,{useState} from 'react'
import {auth} from '../../firebase';
import {Redirect} from 'react-router-dom'

const UserAuth = props => {
    const [data,setData] = useState({
        email:"",
        password:"",
        msg: '',
        isLoggedin: false,
    })
    const {email,password} = data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const signUp = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then(
            user => console.log(user)
            ).catch(err => setData({msg: err.message,email: '', password: ''}))
    }
    const signIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(
            user => setData({isLoggedin: true})
            ).catch(err => setData({msg: err.message,email: '', password: ''}))
    }
    return (
        !data.isLoggedin & props.issignedIn === undefined? (
        <div>
            <center>
                <form autoComplete="off">
                    <h1>Authentication</h1>
                    <input type="email" name="email" value={email} placeholder="Email" onChange={changeHandler}/><br />
                    <input type="password" name="password" value={password} placeholder="Password" onChange={changeHandler}/><br />
                    <button onClick={signIn}>Sign In</button> &nbsp;&nbsp;
                    <button onClick={signUp}>Sign Up</button>
                </form>
                <p className='erroMsg'>{data.msg}</p>
            </center>
        </div>
        ) :
        <Redirect to="/" />
    )
}

export default UserAuth
