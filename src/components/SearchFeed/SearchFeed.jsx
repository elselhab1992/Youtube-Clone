import { Videos } from "../index";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Span } from "../Feed/FeedStyles";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <div>
      <h2>
        search results for <Span>{searchTerm}</Span> Videos
      </h2>
      <Videos videos={videos} />
    </div>
  );
};

export default SearchFeed;
