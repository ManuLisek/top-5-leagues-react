import axios from 'axios';

const getAllHighlights = async () => {
  const url = 'https://www.scorebat.com/video-api/v1/';

  return axios.get(url).then((allHighlights) => {
    return allHighlights.data;
  });
};

export default getAllHighlights;
