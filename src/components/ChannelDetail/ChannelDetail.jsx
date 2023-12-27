import { fetchFromAPI } from "../../utils/fetchFromAPI";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "../index";
import { ChannelLogo, ChannelVideos, Section } from "./ChannelDetailStyles";

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
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
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
