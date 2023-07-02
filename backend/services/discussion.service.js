const {Discussion} = require("../models");

class DiscussionService {
  findWithId = async (id) => {
    try {
      const result = await Discussion.findById(id);
     
      return result;
    } catch (error) {
      throw error;
    }
  };

  findForUsername = async (username) => {
    try {
      const result = await Discussion.find({ author: username });
      return result;
    } catch (error) {
      throw error;
    }
  };

  findAll = async () => {
    console.log("hi")
    try {
      const discussionRes = await Discussion.find({});
      return discussionRes;
    } catch (error) {
      throw error;
    }
  };

  create = async (discussion) => {
   
      console.log(discussion,"in create")
      const { author, title, content} = discussion;
      const newDiscussion =await Discussion.create({
        author,
        title,
        content,
      });
      // const result = await newDiscussion.save();
      console.log(newDiscussion ,"result")

      return newDiscussion;
   
  };

  addComment = async (comment, discussionId) => {
    try {
      const { author, content } = comment;
      const newComment = { author, content };
      const result = await Discussion.findOneAndUpdate(
        { _id: discussionId },
        { $push: { comment: newComment } },
        { new: true }
      );
      return result;
    } catch (error) {
      throw error;
    }
  };

  delete = async (discussionId) => {
    try {
      const result = await Discussion.findOneAndDelete({ _id: discussionId });
      return result;
    } catch (error) {
      throw error;
    }
  };

  update = async (discussionId, changes) => {
    try {
      const result = await Discussion.findOneAndUpdate(
        { _id: discussionId },
        changes,
        { new: true }
      );
     
      return result;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = DiscussionService;
