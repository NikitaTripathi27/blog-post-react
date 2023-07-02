const router = require("express").Router();
const passport = require('passport')
// const {auth} = require('../../middlewares/auth')
const {
  findDiscussionById,
  findDiscussionsByUser,
  createNewDiscussion,
  getAllDiscussions,
  addNewComment,
  deleteDiscussion,
  updateDiscussion,
} = require("../../controllers/discussion.controller");

const {
  fetchDiscussion,
  verifyAuthor,
} = require("../../middlewares/discussion.middleware");

// const passportMiddleware = passport.authenticate('jwt',{session:false})
router.post(
  "/new",
 
  // passportMiddleware, // checks if user is authenticated or not
  createNewDiscussion
);
router.get("/all",  getAllDiscussions);
router.get("/user/:username", findDiscussionsByUser);
router.get("/id/:id", findDiscussionById);

router.patch("/id/:id", updateDiscussion);
router.delete("/id/:id", deleteDiscussion);

router.put(
  "/:id/comment",
  fetchDiscussion,
  addNewComment
);

module.exports = router;
