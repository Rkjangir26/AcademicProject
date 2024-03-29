import React from 'react';

class AssignmentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignments: []
    };
  }

  componentDidMount() {
    // Fetch assignments from the server when the component mounts
    fetch('/api/assignments')
      .then(response => response.json())
      .then(assignments => this.setState({ assignments }));
  }

  render() {
    return (
      <div>
        <h2>Assignments</h2>
        {this.state.assignments.map(assignment => (
          <div key={assignment._id}>
            <h3>{assignment.title}</h3>
            <p>{assignment.description}</p>
            <p>Subject: {assignment.subject}</p>
            <p>Semester: {assignment.semester}</p>
            <p>Deadline: {assignment.deadline}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default AssignmentList;
