import { styled, Box, Typography } from "@mui/material";

const Image = styled(Box)`
  width: 100%;
  background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg)
    center/cover no-repeat;
  height: 60vh; /* Increased height for more prominence */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Overlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Dark overlay to improve text visibility */
`;

const Heading = styled(Typography)`
  font-size: 6vw;
  color: #ffffff;
  line-height: 1.2;
  font-family: "Pacifico", cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
  padding: 0 2vw;
`;

const SubHeading = styled(Typography)`
  font-size: 2.5vw;
  background: #ffffff;
  color: #333;
  padding: 8px 15px;
  border-radius: 25px;
  font-family: "Dancing Script", cursive;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  margin-top: 1vw;
  text-align: center;
`;

const Banner = () => {
  return (
    <Image>
      <Overlay />
      <Heading>MERN</Heading>
      <SubHeading>Blog App</SubHeading>
    </Image>
  );
};

export default Banner;
