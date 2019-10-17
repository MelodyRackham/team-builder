import React, { useState } from 'react';

const NewForm = props => {
  const [team, setTeam] = useState({ name: '', email: '', role: '' });
  const changeHandler = event => {
    console.log(event.target.value);
    setTeam({ ...team, [event.target.name]: event.target.value });
  };
  const submitForm = event => {
    event.preventDefault();
    props.addNewForm(team);
    setTeam({ name: '', email: '', role: '' });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor='name'> Name </label>
      <input id='name' type='name' name='name' placeholder='name' onChange={changeHandler} />
      <label htmlFor='email'> Email </label>
      <input id='email' type='email' name='email' placeholder='email' onChange={changeHandler} value={team.email} />
      <label htmlFor='role'> Role </label>
      <input id='role' name='role' placeholder='role' onChange={changeHandler} valaue={team.role} />
      <button type='submit'> Submit </button>
    </form>
  );
};

export default NewForm;
