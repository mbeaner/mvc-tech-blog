const { Comment } = require('../models');

const commentData = [
  {
    comment_text:
      'It dawned on her that others could make her happier, but only she could make herself happy.',
    user_id: 1,
    post_id: 1,
  },

  {
    comment_text:
      'He had concluded that pigs must be able to fly in Hog Heaven.',
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text:
      'The spa attendant applied the deep cleaning mask to the gentlemans back.',
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
