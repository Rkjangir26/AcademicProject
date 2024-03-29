import React from 'react';
import AssignmentForm from './components/AssignmentForm';
import AssignmentList from './components/AssignmentList';
import AssignmentResult from './components/AssignmentResult';

function App() {
  return (
    <div className="App">
      <AssignmentForm />
      <AssignmentList />
      <AssignmentResult />
    </div>
  );
}

export default App;
