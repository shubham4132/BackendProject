const mongoose = require("mongoose");
const videoSchema = new mongoose.Schema({
  videoTitle: String,
  channelName: String,
  channelLogo: String,
  viewsCount: Number,
  thumnailUrl: String,
  totalTime: Number,
  watchedTimeInSecond: Number,
  postedDate: Date,
  videoURL: Number,
});
const Video = mongoose.model("Video", videoSchema);
module.exports = Video;
