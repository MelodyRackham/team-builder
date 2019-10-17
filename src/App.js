import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import NoteForm from './components/NoteForm';

function App() {
  const [team, setTeam] = useState();

  const addNewForm = note => {
    setTeam([...team, note]);
  };
  return (
    <div className='App'>
      <Form addNewForm={addNewForm} />
      <NoteForm teamList={team} />
    </div>
  );
}

export default App;
