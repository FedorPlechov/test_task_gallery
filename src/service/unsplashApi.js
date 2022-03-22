import { createApi } from "unsplash-js";
const ACCESS_KEY = "kjWmMBK9WMiOzq75DK_6siGkxMJ3t0I6ISn6ky9qz50";
const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: ACCESS_KEY,
});

export const getUsers = async function (page) {
  try {
    const result = await api.users.getPhotos({
      username: "andrewtneel",
      stats: true,
      page,
      perPage: 6,
    });
    return result.response;
  } catch (err) {
    console.log(err.message);
  }
};
