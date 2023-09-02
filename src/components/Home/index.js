import React,{useEffect,useState} from 'react'
import { auth } from '../../firebase';
import GifsList from '../GifsList' 
import './index.css'

const Home = () => {
  const [presentUser,setPresentUser] = useState({isLoggedin: false,uid: '',email: ''});
  console.log('hai')
  useEffect(()=>{
    const unSubscribe = auth.onAuthStateChanged(user =>{
      if(user){
      setPresentUser({
        isLoggedin: true,
        uid:user?.uid,
        email:user?.email
      })
    }
    else{
      setPresentUser({isLoggedin: false, email: ''});
    }
    })
    return unSubscribe;
  },[])
  return (
    <div>
        {presentUser.isLoggedin && (
        <div>
            <center>
           <h1> Welcome {presentUser.email}</h1>
           <GifsList />
           </center>
        </div>
        )}
    </div>
  )
}

export default Home
