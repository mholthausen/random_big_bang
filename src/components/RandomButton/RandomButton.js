import { Button, Typography } from "antd";
import { useState, useEffect } from "react";
import episodes from "../../resources/episodes.json";

export default function RandomButton() {
  const { Text } = Typography;
  const [season, setSeason] = useState(1);
  const [episode, setEpisode] = useState(1);

  useEffect(() => {
    findSeason();
    findEpisode();
  });

  const between = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const findSeason = () => {
    setSeason(between(1, Object.keys(episodes).length));
  };

  const findEpisode = () => {
    setEpisode(between(1, Object.keys(episodes[season]).length));
  };

  const getEpisode = () => {
    findSeason();
    if (season > 0) {
      findEpisode();
    }
  };

  return (
    <>
      <Button type="primary" onClick={() => getEpisode()}>
        Find Episode
      </Button>
      <br />
      <Text strong>
        Season {season} Episode {episode}
      </Text>
    </>
  );
}
