import { Form, Input, SearchIcon } from "./SearchBarStyles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  return (
    <Form onSubmit={() => {}}>
      <Input type="search" placeholder="Search..." onChange={() => {}} />
      <SearchIcon />
    </Form>
  );
};

export default SearchBar;
