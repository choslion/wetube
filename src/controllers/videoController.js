const fakeUser = {
  username: "eddy",
  loggedIn: true,
};

export const trendVideos = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 5,
      comments: 2,
      createdAt: "10 minutes ago",
      views: 57649,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 4,
      comments: 2,
      createdAt: "5 minutes ago",
      views: 549,
      id: 2,
    },
    {
      title: "Third Video",
      rating: 5,
      comments: 12,
      createdAt: "2 minutes ago",
      views: 10239,
      id: 3,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos: videos });
};
export const search = (req, res) => res.send("search");
export const see = (req, res) => {
  res.render("see", { pageTitle: "Watch" });
};
export const edit = (req, res) => {
  res.render("edit", { pageTitle: "Edit" });
};
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("DeleteVideo");
};
