import React, { useState } from 'react';

function AssignmentForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('');
  const [semester, setSemester] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const assignment = { title, description, subject, semester, deadline };
    const response = await fetch('/api/assignments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(assignment),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Subject:
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </label>
      <label>
        Semester:
        <input type="text" value={semester} onChange={(e) => setSemester(e.target.value)} />
      </label>
      <label>
        Deadline:
        <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AssignmentForm;
