import { Copyright, Section, SideContainer, Span } from "./FeedStyles";
import { Sidebar, Videos } from "../index";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import { useEffect, useState } from "react";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Section>
      <SideContainer>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Copyright>copyright@2023 Mo</Copyright>
      </SideContainer>
      <div>
        <h2>
          {selectedCategory} <Span>Videos</Span>
        </h2>
        <Videos videos={videos} />
      </div>
    </Section>
  );
};

export default Feed;
