import { Avatar, Col, Comment, Row, Typography } from "antd";
import "./index.css";

const { Text, Title } = Typography;

export const CommentsList = () => {
  return (
    <div className="comment-section">
      <Row className="comments-call" justify="space-between">
        <Col span={12}>
          <Title>We believe in results</Title>
        </Col>
        <Col span={12}>
          <Text>
            We supply a series of design principles, practical patterns and high
            quality design resources, to help people create their product
            prototypes beautifully and efficiently.
          </Text>
        </Col>
      </Row>
      <Row className="comments-list" gutter={[16, 16]} justify="space-between">
        <Col span={12}>
          <Comment
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            author={<p>Clark Kent</p>}
            content={
              <p>
                The reason I LOVE this course is because the instructor is so
                good at explaining things. His ability to explain things so
                concisely makes it incredibly easy to follow along. In many
                videos he will require you to write your own code to reinforce
                what you’ve just learned, something I wish more instructors
                would do.
              </p>
            }
            datetime={<p>Feb, 22</p>}
          />
        </Col>
        <Col span={12}>
          <Comment
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            author={<p>Kara Denvers</p>}
            content={
              <p>
                React course By Maximillian is pretty good, it is really in
                depth as it is 45 hours long. It assumes no previous knowledge
                of React JS, so it really builds up from scratch onto more of a
                solid understanding of it towards the end.
              </p>
            }
            datetime={<p>Jan, 22</p>}
          />
        </Col>
        <Col span={12}>
          <Comment
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            author={<p>Bruce Wayne</p>}
            content={
              <p>
                I found this course very helpful for beginner. The course begins
                with an introduction to JSX, the JavaScript syntax Facebook
                recommends using with React.In 11 hours of course time It covers
                React Elements and Components in Part I and moves on to more
                advanced topics in Part II.
              </p>
            }
            datetime={<p>Dez, 21</p>}
          />
        </Col>
        <Col span={12}>
          <Comment
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            author={<p>Diane Prince</p>}
            content={
              <p>
                I am just finishing up “React for the Rest of Us” by Brad Schiff
                on Udemy and feel like I have learned a lot. I enjoy his
                courses. My only previous React exposure is here on FCC so I
                found his course somewhat fast-paced and using some newer React
                features like context, than are covered here on FCC (yet).
              </p>
            }
            datetime={<p>Jul, 21</p>}
          />
        </Col>
      </Row>
    </div>
  );
};
