import React from "react";
import { Avatar, Col, Comment as AntdComment } from "antd";
import "./index.css";

export type CommentaryProps = {
  /** Id do objeto */
  id?: string;
  /** Autor */
  author: string;
  /** Avatar (Colocar o link para a imagem) */
  avatar: string;
  /** Texto de conteúdo do comentário */
  content: string;
  /** Data do comentário */
  datetime: string;
};

export type CommentProps = CommentaryProps & {
  /** Tamanho do comentário (largura) */
  span: number;
};

// Para telas brancas e pretas, é necessário melhorar o contraste.
// Accessibility violation
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
        avatar={<Avatar src={avatar} alt="Avatar" />}
        content={<p>{content}</p>}
        datetime={<span>{datetime}</span>}
      />
    </Col>
  );
};

export default Comment;
