import { fetchFromAPI } from "../../utils/fetchFromAPI";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "../index";
import {
  ChannelBackground,
  ChannelLogo,
  ChannelVideos,
  Section,
} from "./ChannelDetailStyles";

const ChannelDetail = () => {
  const [details, setDetails] = useState();
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setDetails(data?.items[0]);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
  return (
    <Section>
      <div>
        <ChannelBackground />
        <ChannelLogo>
          <ChannelCard details={details} />
        </ChannelLogo>
      </div>
      <ChannelVideos>
        <Videos videos={videos} />
      </ChannelVideos>
    </Section>
  );
};

export default ChannelDetail;
