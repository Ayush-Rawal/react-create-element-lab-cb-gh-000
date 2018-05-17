import React from 'react';
import ReactDOM from 'react-dom';

class MeInReact extends React.Component {
  render () {
    return (
      <div className="me">
      <h1>An Awesome Person</h1>
    <p>Who is learning React</p>

    <ul class="my-interests">
    <li>JavaScript</li>
    <li>React</li>
    <li>Movies</li>
    <li>Ice cream</li>
    </ul>
      </div>
    )
  }
}
// IMPORTANT!!!! uncomment the lines below to make your tests work
ReactDOM.render(
  <MeInReact/>,
  document.getElementById('global')
);

export default MeInReact
