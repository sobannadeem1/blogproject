import { styled, Box, Typography } from "@mui/material";

const Image = styled(Box)`
  width: 100%;
  background: url(https://blog.nextideatech.com/wp-content/uploads/2022/12/1_FVtCyRdJ6KOr4YswTtwMeA-1024x586.jpeg)
    center/contain no-repeat #000;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #ffffff;
  line-height: 1;
  font-family: "Pacifico", cursive; /* Handwriting font from Google Fonts */
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  background: #ffffff;
  padding: 5px 10px;
  border-radius: 5px;
  font-family: "Dancing Script", cursive; /* Another handwritten font */
`;

const Banner = () => {
  return (
    <Image>
      <Heading style={{ color: "brown" }}>BLOG</Heading>
      <SubHeading style={{ color: "brown" }}>Code for Interview</SubHeading>
    </Image>
  );
};

export default Banner;
