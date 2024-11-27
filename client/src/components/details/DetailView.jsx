import { useState, useEffect, useContext } from "react";

import { Box, Typography, styled } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";

import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

// components
import Comments from "./comments/Comments";

const Container = styled(Box)(({ theme }) => ({
  margin: "50px 100px",
  padding: "20px",
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("md")]: {
    margin: "20px",
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
  borderRadius: "10px",
  marginBottom: "20px",
});

const EditIcon = styled(Edit)`
  margin: 5px;
  padding: 10px;
  border: 1px solid #1976d2;
  border-radius: 50%;
  background-color: #e3f2fd;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #1976d2;
    color: #fff;
  }
`;

const DeleteIcon = styled(Delete)`
  margin: 5px;
  padding: 10px;
  border: 1px solid #d32f2f;
  border-radius: 50%;
  background-color: #ffebee;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #d32f2f;
    color: #fff;
  }
`;

const Heading = styled(Typography)`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin: 20px 0 10px 0;
  color: #333;
`;

const Author = styled(Box)(({ theme }) => ({
  color: "#555",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "14px",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
  },
}));

const Description = styled(Typography)`
  font-size: 18px;
  color: #444;
  line-height: 1.8;
  margin: 20px 0;
`;

const DetailView = () => {
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  const [post, setPost] = useState({});
  const { account } = useContext(DataContext);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      }
    };
    fetchData();
  }, [id]);

  const deleteBlog = async () => {
    await API.deletePost(post._id);
    navigate("/");
  };

  return (
    <Container>
      <Image src={post.picture || url} alt="post" />
      <Box style={{ textAlign: "right" }}>
        {account.username === post.username && (
          <>
            <Link to={`/update/${post._id}`}>
              <EditIcon />
            </Link>
            <DeleteIcon onClick={() => deleteBlog()} />
          </>
        )}
      </Box>
      <Heading>{post.title}</Heading>
      <Author>
        <Link
          to={`/?username=${post.username}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography>
            Author: <span style={{ fontWeight: 600 }}>{post.username}</span>
          </Typography>
        </Link>
        <Typography>{new Date(post.createdDate).toDateString()}</Typography>
      </Author>
      <Description>{post.description}</Description>
      <Comments post={post} />
    </Container>
  );
};

export default DetailView;
