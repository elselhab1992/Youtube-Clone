/* eslint-disable react/prop-types */
import { categories } from "../../utils/constants";
import { Button, Container } from "./SidebarStyles";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Container>
      {categories.map((category, index) => {
        const { name, icon } = category;

        return (
          <Button
            key={index}
            style={{
              background: name === selectedCategory && "#fc1503",
              color: "#fff",
            }}
            onClick={() => setSelectedCategory(category.name)}
          >
            <span
              style={{
                color: name === selectedCategory ? "#fff" : "#fc1503",
                fontSize: 20,
              }}
            >
              {icon}
            </span>
            <span>{name}</span>
          </Button>
        );
      })}
    </Container>
  );
};

export default Sidebar;
