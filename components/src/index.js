import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
      <CommentDetail author="Sam"/>
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail author="Fam" />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail author="Tam" />
      </ApprovalCard>

    </div>
  )
}

ReactDom.render(<App />, document.querySelector('#root'));
