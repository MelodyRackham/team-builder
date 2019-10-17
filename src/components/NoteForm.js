import React from 'react';

const NoteForm = props => {
  {
    console.log(props);
  }
  return (
    <div>
      {props.teamList &&
        props.teamList.map((teams, index) => {
          return (
            <div key={index}>
              <h1> Team Member List </h1>
              <h2> {teams.name} </h2>
              <p> {teams.email} </p>
              <p> {teams.role} </p>
            </div>
          );
        })}
    </div>
  );
};

export default NoteForm;
