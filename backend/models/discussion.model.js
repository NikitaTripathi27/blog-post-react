const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    author: { type: String, required: true, immutable: true },
    content: { type: String, required: true, maxlength: 500 },
  },
  { timestamps: true }
);

const discussionSchema = mongoose.Schema(
  {
    title: { type: String, maxlength: 150, required: true },
    author: { type: String, required: true, immutable: true },
    content: { type: String, default: "" },
    comments: { type: [commentSchema], default: [] },
  },
  { timestamps: true }
);

const DiscussionModel = mongoose.model("Discussions", discussionSchema);

module.exports.Discussion = DiscussionModel;

