import { SHORT_URL, CLEAR_URL } from "../config/constants";
import { API } from "../config/api";

export const postShort = value => {
  const url = value;
  return {
    type: SHORT_URL,
    payload: async () => {
      const res = await API.post("/shorten", {
        url
      });
      const code = res.data.shortcode;
      const data = {
        name: "Shooooort.com/" + code,
        link: url,
        visit: 0,
        lastVisit: "0 minutes ago"
      };
      return data;
    }
  };
};

export const clearShort = () => {
  return {
    type: CLEAR_URL
  };
};
