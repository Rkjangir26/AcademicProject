import React from 'react';

class AssignmentResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    // Fetch assignment results from the server when the component mounts
    fetch('/api/assignments/results')
      .then(response => response.json())
      .then(results => this.setState({ results }));
  }

  render() {
    return (
      <div>
        <h2>Assignment Results</h2>
        {this.state.results.map(result => (
          <div key={result._id}>
            <h3>{result.assignmentTitle}</h3>
            <p>Grade: {result.grade}</p>
            <p>Feedback: {result.feedback}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default AssignmentResult;
