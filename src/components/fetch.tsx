const getPosts = fetch(
  "https://clone-tiktok-backend.herokuapp.com/v1/posts"
).then((res) => {
  if (res.status !== 401) {
    return res.json().then((data) => data);
  } else {
    return res.json().then((data) => data);
  }
});

export default getPosts;
