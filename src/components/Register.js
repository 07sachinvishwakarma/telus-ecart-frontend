import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
   
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
  })

  const { username, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit =async (e) => {
    e.preventDefault();
    console.log({username, email, password});
   let result = await fetch('http://localhost:5000/register',{
          method:'post',
          body:JSON.stringify({name:username, email, password}),
          headers:{
            'Content-Type':'application/json'
          },
   });
   result = await result.json()
   console.log(result);
   if(result){
    localStorage.setItem("user",JSON.stringify(result));
    navigate('/');
   }
  };
  return (
    <div className='registration-page'>
      <form className='registration-form' onSubmit={onSubmit}>
        <h3>Registation Form</h3>
        <div className='input-group'>
          <label>Username</label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={onChange}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
          />{' '}
        </div>
        <div className='input-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />{' '}
        </div>
        <button type='submit'>Register</button>
        <p>
          Already have an account? <Link to='/login '>Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default Register ;