import Video from "../models/Video";

// Video.find({}, (err, videos) => {
//   if (error) {
//     return res.render("server-error");
//   }
//   return res.render("home", { pageTitle: "Home", videos });
// });
//위는 콜백방식 아래는 async , await 사용  아래는 위와 동일한 기능의 코드
export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ createdAt: "desc" });
    return res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    return res.render("server-error");
  }
};

export const watch = async (req, res) => {
  const { id } = req.params;
  // 위랑 같음
  // const id = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found." });
  }
  return res.render("watch", { pageTitle: video.title, video });
};
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Video not found." });
  }
  return res.render("edit", { pageTitle: `Edit : ${video.title}`, video });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Video not found." });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });
  return res.redirect(`/videos/${id}`);
};

export const upload = (req, res) => res.send("Upload");

// export const deleteVideo = (req, res) => {
//   console.log(req.params);
//   return res.send("DeleteVideo");
// };

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtag: Video.formatHashtags(hashtags),
      // meta: {
      //   views: 0,
      //   rating: 0,
      // },
    });
    return res.redirect("/");
  } catch (error) {
    res.status(400).render("upload", { pageTitle: "Upload Video", errorMessage: error._message });
  }
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};

export const search = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  if (keyword) {
    videos = await Video.find({
      title: { $regex: new RegExp(`${keyword}$`, "i") },
    });
  }
  return res.render("search", { pageTitle: "Search", videos });
};
