const fakeUser = {
  username:"eddy",
  loggedIn: false,
}


export const trendVideos = (req,res) => res.render("home" , { pageTitle : "Home" , fakeUser : fakeUser });
export const search = (req,res) => res.send("search");
export const see = (req,res) => {
  res.render("see", { pageTitle: "Watch" , fakeUser : fakeUser});
}
export const edit = (req,res) => {
 res.render("edit" , { pageTitle : "Edit"});
}
export const upload = (req,res) => res.send("Upload");
export const deleteVideo = (req,res) => {
  console.log(req.params);
  return res.send("DeleteVideo");
}