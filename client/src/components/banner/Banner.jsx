import { styled, Box, Typography } from "@mui/material";

const Image = styled(Box)`
  width: 100%;
  background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg)
    center/55% repeat-x #000;
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
      <Heading style={{ color: "brown" }}>MERN</Heading>
      <SubHeading style={{ color: "brown" }}>Blog App</SubHeading>
    </Image>
  );
};

export default Banner;
