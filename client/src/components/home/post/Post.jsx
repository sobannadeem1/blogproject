import { styled, Box, Typography } from "@mui/material";

// Enhanced styled components
const Container = styled(Box)`
  border: 1px solid #d3cede;
  border-radius: 12px;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 380px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled("img")({
  width: "100%",
  objectFit: "cover",
  height: 180,
  borderRadius: "12px 12px 0 0",
  transition: "transform 0.3s ease-in-out", // Fixed: Using regular quotes

  "&:hover": {
    transform: "scale(1.05)", // Fixed: Properly enclosed scale in quotes
  },
});

const Text = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 5px;
`;

const Heading = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin: 10px 0;
`;

const Details = styled(Typography)`
  font-size: 14px;
  word-break: break-word;
  color: #555;
  padding: 0 10px;
  margin-bottom: 15px;
  line-height: 1.5;
`;

const Author = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  color: #888;
`;

const Post = ({ post }) => {
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  return (
    <Container>
      <Image src={url} alt="Post Image" />
      <Text>{post.categories}</Text>
      <Heading>{addEllipsis(post.title, 20)}</Heading>
      <Author>By {post.username}</Author>
      <Details>{addEllipsis(post.description, 100)}</Details>
    </Container>
  );
};

export default Post;
