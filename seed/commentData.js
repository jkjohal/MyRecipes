const { Comment } = require('../models');

const commentData = [

    {
        comment: 'Looks amazing',
        comment_id: '1',
        post_id: 1
    }
];

const seedFeedback = () => Comment.bulkCreate(commentData);

module.exports = seedFeedback;