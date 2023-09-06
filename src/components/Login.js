import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit =async (e) => {
    e.preventDefault();
    console.log(email, password);
    let result = await fetch('http://localhost:5000/login',{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
          'Content-Type':'application/json'
        }
    });
    result = await result.json();
    console.warn(result)
    if(result.name){
      localStorage.setItem('user',JSON.stringify(result));
      navigate('/')
    }else{
      alert('please enter correct details')
    }
  };
  return (
    <div className='registration-page'>
      <form className='registration-form' onSubmit={onSubmit}>
        <h3>Sign In Form</h3>

        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>
        <div className='input-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <button type='submit'>Login </button>

        <p>
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;