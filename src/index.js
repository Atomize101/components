
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
          
            <CommentDetail author="Chris" />
            <CommentDetail author="Sarah"/>          
            <CommentDetail author="Bob"/>           
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'))
