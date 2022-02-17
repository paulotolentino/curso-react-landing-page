import { Avatar, Col, Comment, Row, Typography } from "antd";
import "./index.css";

export const CommentsList = () => {
  return (
    <div className="comment-section">
      <Row className="comments-call" justify="space-between">
        <Col span={12}>
          <Typography.Title>We believe in results</Typography.Title>
        </Col>
        <Col span={12}>
          <Typography.Text>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </Typography.Text>
        </Col>
      </Row>
      <Row className="comments-list">
        <Comment
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          author={<p>Han Solo</p>}
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={<p>YYYY-MM-DD HH:mm:ss</p>}
        />
      </Row>
    </div>
  );
};
