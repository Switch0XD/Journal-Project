import React, { useState } from 'react';

function MyForm() {
  const [fullName, setName] = useState('');
  const [Scopus_ID, setScopus_ID] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('Scopus_ID', Scopus_ID);

    fetch('https://script.google.com/macros/s/AKfycbx1j47m7n7oUoDYHtF6lpyIq0zXzbG35BUXen5SND4vDBGo_p6vhafXiBvlj-aCGeA/exec', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        fullName:
        <input type="text" value={fullName} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Scopus_ID:
        <input type="text" value={Scopus_ID} onChange={e => setScopus_ID(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;