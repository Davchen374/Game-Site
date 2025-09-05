import { signUp } from "./firebaseservice";
import { logIn } from "./firebaseservice";
import { signedOut } from "./firebaseservice";
import { useState } from 'react';

function MyAuth(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignUp = async () => {
    try{
      await signUp(email, password);
      alert('Success');
    } catch(error){
      alert(error);
    }
  };
  const handleLogIn = async () => {
    try{
      await logIn(email, password);
      alert('Success');
      setEmail('');
      setPassword('');
    } catch(error){
      alert(error);
    }
  };
  const handleSignOut = async () => {
    try{
      await signedOut();
      alert('Success');
    } catch(error){
      alert(error);
    }
  }
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  }
  const handleSetPassword = (event) => {
    setPassword(event.target.value);
  }

  return(
    <div className="flex flex-col sm:flex-row sm:justify-end items-center gap-y-4 sm:gap-x-10 w-full sm:pr-10 text-[25px] sm:text-[25px] font-luckiest" >
      <input type='text' value={email} onChange={handleSetEmail} className='border p-2 rounded w-40'/>
      <input type='password' value={password} onChange={handleSetPassword} className='border p-2 rounded w-40'/>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )

}

export default MyAuth;
