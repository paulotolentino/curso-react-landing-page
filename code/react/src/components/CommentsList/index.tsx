import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import Comment, { CommentaryProps } from "../Comment";
import "./index.css";

const { Text, Title } = Typography;

export const CommentsList = () => {
  const { t } = useTranslation();

  const comments: CommentaryProps[] = [
    {
      id: "1",
      author: "Clark Kent",
      avatar: "https://joeschmoe.io/api/v1/random",
      datetime: "Feb, 22",
      content:
        "The reason I LOVE this course is because the instructor is so good at explaining things. His ability to explain things soconcisely makes it incredibly easy to follow along. In manyvideos he will require you to write your own code to reinforcewhat you’ve just learned, something I wish more instructorswould do.",
    },
    {
      id: "2",
      author: "Kara Denvers",
      avatar: "https://joeschmoe.io/api/v1/random",
      datetime: "Jan, 22",
      content:
        "React course By Maximillian is pretty good, it is really indepth as it is 45 hours long. It assumes no previous knowledgeof React JS, so it really builds up from scratch onto more of asolid understanding of it towards the end.",
    },
    {
      id: "3",
      author: "Bruce Wayne",
      avatar: "https://joeschmoe.io/api/v1/random",
      datetime: "Dez, 21",
      content:
        "I found this course very helpful for beginner. The course beginswith an introduction to JSX, the JavaScript syntax Facebookrecommends using with React.In 11 hours of course time It coversReact Elements and Components in Part I and moves on to moreadvanced topics in Part II.",
    },
    {
      id: "4",
      author: "Diane Prince",
      avatar: "https://joeschmoe.io/api/v1/random",
      datetime: "Jul, 21",
      content:
        "I am just finishing up “React for the Rest of Us” by Brad Schiffon Udemy and feel like I have learned a lot. I enjoy hiscourses. My only previous React exposure is here on FCC so Ifound his course somewhat fast-paced and using some newer Reactfeatures like context, than are covered here on FCC (yet).",
    },
  ];

  return (
    <div className="comment-section">
      <Row className="comments-call" justify="space-between">
        <Col span={12}>
          <Title>{t("comment.title")}</Title>
        </Col>
        <Col span={12}>
          <Text>{t("comment.subtitle")}</Text>
        </Col>
      </Row>
      <Row className="comments-list" gutter={[16, 16]} justify="space-between">
        {comments.map((comment) => (
          <Comment {...comment} span={12} key={comment.id} />
        ))}
      </Row>
    </div>
  );
};
