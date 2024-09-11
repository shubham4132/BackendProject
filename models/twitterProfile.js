const mongoose = require("mongoose");
const twitterProfileSchema = new mongoose.Schema({
  fullName: String,
  userName: String,
  profilePicUrl: String,
  StatusURL: String,
  bio: String,
  Company: String,
  city: String,
  portfolioURL: String,
  followersCount: String,
  followingCount: String,
});
const Profile = mongoose.model("Profile", twitterProfileSchema);
module.exports = Profile;
