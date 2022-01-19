/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.svg';
import { loginUser } from './store/user/actions';
import './App.css';
import { RootState } from './store/store';

function App() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const userData = useSelector(({ user } : RootState) => user.user);

  const handleButtonClick = useCallback(() => {
    if (userData) {
      dispatch(loginUser(form));
      setForm({
        email: '',
        password: '',
      });
    }
  }, [userData, dispatch, form]);

  const handleInputEmailChange = (e:any) => {
    setForm({ ...form, email: e.target.value });
  };

  const handleInputPasswordChange = (e:any) => {
    setForm({ ...form, password: e.target.value });
  };

  console.log(form);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <form>
        <input type="text" onChange={handleInputEmailChange} />
        <input type="text" onChange={handleInputPasswordChange} />
      </form>
      <button onClick={handleButtonClick}>Login</button>
    </div>
  );
}

export default App;
