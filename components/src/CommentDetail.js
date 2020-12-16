import React from 'react';
import faker from "faker";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.image()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
            <span className="date">
              today 6:00
            </span>
        </div>
        <div className="text">{faker.lorem.text()}</div>
      </div>
    </div>

  );
};

export default CommentDetail;