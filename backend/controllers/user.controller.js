const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { userService } = require("../services");

const getUsers = catchAsync(async (req, res) => {
  const users = await userService.findAll();
  if (!users || users.length === 0) throw new ApiError(httpStatus.NOT_FOUND, "No Users Found!")
  res.status(httpStatus.OK).send(users)
});

const getUserById = catchAsync(async (req, res) => {
  const userId = req.params.userId;

  const result = await userService.findById(userId);

  // if (userId !== req.user.id) throw new ApiError(httpStatus.FORBIDDEN, "Forbidden Access!");
  if (!result) {
    res.status(httpStatus.NOT_FOUND).json({
      code: httpStatus.NOT_FOUND,
      message: "User Not Found!"
    });
    return;
  }
  // if (!result) throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  res.status(httpStatus.OK).send(result);
});

module.exports = {
  getUsers,
  getUserById,
};