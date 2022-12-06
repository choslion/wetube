export const trendVideos = (req,res) => res.send("home page trend videos");
export const search = (req,res) => res.send("search");
export const see = (req,res) => {
  console.log(req.params);
 return res.send(`Watch Video #${req.params.id}`);
}
export const edit = (req,res) => {
  console.log(req.params);
  return res.send("Edit Video");
}
export const upload = (req,res) => res.send("Upload");
export const deleteVideo = (req,res) => {
  console.log(req.params);
  return res.send("DeleteVideo");
}