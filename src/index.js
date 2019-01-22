
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
          
            <ApprovalCard>
                <CommentDetail author="Chris"
                    timeAgo="Today at 2:00 AM" 
                    content={faker.lorem.paragraph()}
                    imgSrc={faker.image.avatar()} />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail author="Sarah" 
                    timeAgo="Today at 6:00 AM" 
                    content={faker.lorem.paragraph()}
                    imgSrc={faker.image.avatar()} />          
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail author="Bob" 
                    timeAgo="Today at 4:00 PM" 
                    content={faker.lorem.paragraph()}
                    imgSrc={faker.image.avatar()} />           
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'))
