import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
} from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { categories } from "../../constants/data";

// Styled Components
const StyledTable = styled(Table)`
  border: 1px solid rgba(224, 224, 224, 1);
  border-radius: 8px;
  overflow: hidden;
`;

const StyledButton = styled(Button)`
  margin: 20px 0;
  width: 100%;
  padding: 12px;
  background: #6495ed;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  &:hover {
    background: #4169e1;
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <Link to={`/create?category=${category || ""}`}>
        <StyledButton variant="contained">Create Blog</StyledButton>
      </Link>

      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>
              <StyledLink to={"/"}>All Categories</StyledLink>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>
                <StyledLink to={`/?category=${category.type}`}>
                  {category.type}
                </StyledLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default Categories;
