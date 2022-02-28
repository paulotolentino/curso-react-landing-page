import { Meta, Story } from "@storybook/react";
import Comment, { CommentProps } from "../components/Comment";

// Importa o css
import "../App";

// Exemplo de StoryBook
const meta: Meta = {
  title: "Comment",
  component: Comment,
};
export default meta;

const Template: Story<CommentProps> = (args) => <Comment {...args} />;

export const Main = Template.bind({});
Main.args = {
  author: "Murilo",
  avatar: "https://joeschmoe.io/api/v1/random",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida massa non urna dignissim, ut sagittis arcu rhoncus. Quisque eget nibh et felis pellentesque viverra vel nec sem. Maecenas ac ultricies dui. Phasellus pellentesque lacus ac nunc luctus lobortis. Duis quis enim dignissim, bibendum dui non, lobortis leo.",
  datetime: "01/22",
  span: 12,
};

export const Large = Template.bind({});
Large.args = {
  author: "Murilo",
  avatar: "https://joeschmoe.io/api/v1/random",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida massa non urna dignissim, ut sagittis arcu rhoncus. Quisque eget nibh et felis pellentesque viverra vel nec sem. Maecenas ac ultricies dui. Phasellus pellentesque lacus ac nunc luctus lobortis. Duis quis enim dignissim, bibendum dui non, lobortis leo.",
  datetime: "01/22",
  span: 20,
};

export const Small = Template.bind({});
Small.args = {
  author: "Murilo",
  avatar: "https://joeschmoe.io/api/v1/random",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida massa non urna dignissim, ut sagittis arcu rhoncus. Quisque eget nibh et felis pellentesque viverra vel nec sem. Maecenas ac ultricies dui. Phasellus pellentesque lacus ac nunc luctus lobortis. Duis quis enim dignissim, bibendum dui non, lobortis leo.",
  datetime: "01/22",
  span: 8,
};
