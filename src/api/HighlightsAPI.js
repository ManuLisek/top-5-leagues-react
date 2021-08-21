import axios from 'axios';

export const getAllHighlights = async () => {
  const url = 'https://www.scorebat.com/video-api/v1/';

  return await axios.get(
    url,
  )
    .then(allHighlights => {
      return allHighlights.data;
    });
};