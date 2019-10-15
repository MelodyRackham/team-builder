import React, { useState } from 'react';

const newForm = props => {
  const [note, setNote] = useState();
  return (
    <form>
      <label htmlFor='title'> Note Title</label>
      <input id='title' type='text' name='title' />
    </form>
  );
};

export default newForm;
