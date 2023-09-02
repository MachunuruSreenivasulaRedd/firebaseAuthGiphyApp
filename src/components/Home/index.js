import React from 'react'
import {Component}  from 'react'
import { auth } from '../../firebase';
import GifsList from '../GifsList' 
import './index.css'
import {Redirect} from 'react-router-dom'
let signedIn = false
class Home extends Component {
  state = {
    isLoggedin: false,
  }
 
  componentDidMount() {
  
    auth.onAuthStateChanged(user =>{
      if(user){
        signedIn = true
      }
    else{
      this.setState({isLoggedin: false, email: ''});
    }
    })
  }
  
  render() {
    const {email, isLoggedin} = this.state
  return (
    <div className='homeContainer'>
        {(isLoggedin || signedIn)? (
        <div>
            <center>
           <h1> Welcome {email}</h1>
           <GifsList />
           </center>
        </div>
        ):
        (<Redirect to="/login" />)}
    </div>
  )
}
}

export default Home
