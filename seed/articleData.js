const { Article } = require('../models');

const articleData = [
    {
        title: 'Pancakes',
        description: 'Morning Breakfast ',
        ingredients: 'Pancake Mix, Strawberries, ',
        filename: 'pexels-ash-376464.jpg',
        author_id: 1 
    }
    {
        title: 'Pepperoni Pizza',
        description: 'An Italian/American classic meal for any time of day ',
        ingredients: 'Pizza dough, sauce, cheese, pepperoni ',
        filename: 'pexels-sydney-troxell-708587.jpg',
        author_id: 1 
    }
    {
        title: 'Chicken Tacos',
        description: 'Mexican handheld food ',
        ingredients: 'Shredded chicken, lettuce, tortillas, guacamole, salsa ',
        filename: 'pexels-roman-odintsov-4958792.jpg',
        author_id: 1 
    }
    {
        title: 'Butter Chicken and Naan',
        description: 'A spicy, tangy Indian dish ',
        ingredients: 'Chicken, spices, butter, onions, heavy cream, tomato sauce, naan ',
        filename: 'pexels-saveurs-secretes-7625056.jpg',
        author_id: 1 
    }
    {
        title: 'Burger',
        description: 'Classic American handheld food ',
        ingredients: 'Patty, cheese, lettuce, tomato, onion, bun ',
        filename: 'pexels-valeria-boltneva-1639557.jpg',
        author_id: 1 
    }
    {
        title: 'Chicken wings',
        description: 'Chicken on the bone ',
        ingredients: 'Chicken wings, marinade, seasonings ',
        filename: 'pexels-omar-mahmood-106343.jpg',
        author_id: 1 
    }
    {
        title: 'Chicken alfredo',
        description: 'Italian-American pasta dish ',
        ingredients: 'Grilled chicken, fettucine pasta, heavy cream, parmesan cheese, garlic, parsley ',
        filename: 'pexels-engin-akyurt-11220209.jpg',
        author_id: 1 
    }
    {
        title: 'Fried rice',
        description: 'A popular Asian dish that can easily be customized ',
        ingredients: 'Leftover rice, soy sauce, egg, vegetables, oil ',
        filename: 'pexels-anna-tarazevich-6937455.jpg',
        author_id: 1 
    }
    {
        title: 'Cupcakes',
        description: 'A sweet dessert in a tiny package ',
        ingredients: 'flour, sugar, butter, eggs, vanilla/chocolate, baking soda, frosting',
        filename: 'pexels-ibrahim-boran-2474609.jpg',
        author_id: 1 
    }
    {
        title: 'Ice cream',
        description: 'Dessert a la mode ',
        ingredients: 'Custard base, flavorings ',
        filename: 'pexels-gotta-be-worth-it-919273.jpg',
        author_id: 1 
    }
];


const seedArticle = () => Article.bulkCreate(articleData);

module.exports = seedArticle;