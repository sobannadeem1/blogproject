import { useEffect, useState } from "react";
import { Grid, Box, Typography, styled } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { API } from "../../../service/api";

// Components
import Post from "./Post";

// Styled Components
const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: "20px",
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
    gap: "15px",
  },
}));

const StyledBox = styled(Box)`
  color: #878787;
  margin: 30px auto;
  font-size: 1rem;
  text-align: center;
  padding: 2rem;
  font-family: Poppins;
  border-radius: 8px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const PostCard = styled(Box)`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Posts = () => {
  const [posts, getPosts] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllPosts({ category: category || "" });
      if (response.isSuccess) {
        getPosts(response.data);
      }
    };
    fetchData();
  }, [category]);

  return (
    <StyledGrid container spacing={3}>
      {posts?.length ? (
        posts.map((post) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={post._id}>
            <StyledLink to={`details/${post._id}`}>
              <PostCard>
                <Post post={post} />
              </PostCard>
            </StyledLink>
          </Grid>
        ))
      ) : (
        <StyledBox>No data available for the selected category</StyledBox>
      )}
    </StyledGrid>
  );
};

export default Posts;
