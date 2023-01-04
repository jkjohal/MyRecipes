const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedArticle = require('./articleData');
const seedFeedback = require('./commentData')

const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	// const users = await User.bulkCreate(userData, {
	// 	individualHooks: true,
	// 	returning: true
	// });

	await seedUser();

	await seedArticle();

	await seedFeedback();

	process.exit(0);
};

seedDatabase();
