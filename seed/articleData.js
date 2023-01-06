const { Article } = require('../models');

const articleData = [
    {
        title: 'Pancakes',
        description: 'Morning Breakfast ',
        ingredients: 'Pancake Mix, Strawberries, ',
        filename: 'pexels-ash-376464.jpg',
        author_id: 1 
    }
];


const seedArticle = () => Article.bulkCreate(articleData);

module.exports = seedArticle;