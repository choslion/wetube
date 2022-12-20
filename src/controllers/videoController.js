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
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    return res.render("server-error");
  }
};

export const search = (req, res) => res.send("search");
export const watch = (req, res) => {
  const { id } = req.params;
  // 위랑 같음
  // const id = req.params;
  return res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  // const title = req.body.title;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("DeleteVideo");
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      // createdAt: Date.now(),
      hashtags: hashtags.split(",").map((word) => `#${word}`),
      // meta: {
      //   views: 0,
      //   rating: 0,
      // },
    });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    res.render("upload", { pageTitle: "Upload Video", errorMessage: error._message });
  }
};
