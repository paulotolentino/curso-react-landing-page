import React from "react";
import { Avatar, Col, Comment as AntdComment } from "antd";
import "./index.css";

export type CommentaryProps = {
  id?: string;
  author: string;
  avatar: string;
  content: string;
  datetime: string;
};

type CommentProps = CommentaryProps & {
  span: number;
};

const Comment: React.FC<CommentProps> = ({
  author,
  avatar,
  content,
  datetime,
  span,
}) => {
  return (
    <Col span={span}>
      <AntdComment
        author={<span>{author}</span>}
        avatar={<Avatar src={avatar} />}
        content={<p>{content}</p>}
        datetime={<span>{datetime}</span>}
      />
    </Col>
  );
};

export default Comment;
