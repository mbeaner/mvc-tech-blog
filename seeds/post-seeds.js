const { Post } = require('../models');

const postData = [
  {
    title: 'Your ambitions',
    content:
      'Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.',
    user_id: 1,
  },
  {
    title: 'Bring Joy',
    content:
      'When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.',
    user_id: 2,
  },
  {
    title: 'Your Success',
    content:
      'Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.',
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
