import { SHORT_URL, CLEAR_URL } from "../config/constants";

const initialState = {
  data: [
    {
      name: "Shooort.com/iiH6_G",
      link: "https://www.facebook.com/",
      visit: 1140,
      lastVisit: "10 minutes ago"
    },
    {
      name: "Shooort.com/iyU6_G",
      link: "https://www.instagram.com/",
      visit: 500,
      lastVisit: "9 minutes ago"
    },
    {
      name: "Shooort.com/yUh_da",
      link: "https://www.twitter.com/",
      visit: 240,
      lastVisit: "8 minutes ago"
    }
  ],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${SHORT_URL}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${SHORT_URL}_FULFILLED`:
      return {
        data: state.data.concat(action.payload),
        loading: false
      };
    case `${SHORT_URL}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    case CLEAR_URL:
      return {
        ...state,
        data: [],
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
