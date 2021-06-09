'use strict';

const faker = require('faker');
const { Article } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    // Create 20 Users
    let roles = Array.from(["admin", "author", "guest"]);
	let __users = Array.from({length: 20}, () => null);
	__users = __users.map(() => {
		var createdAt = faker.date.between("2000", "2021");
		var updatedAt = faker.date.recent();
		return {username:faker.internet.userName(), email:faker.internet.email(), password:faker.internet.password(),
				role:roles[Math.floor(Math.random() * roles.length)],
				createdAt, updatedAt};
	})
    await queryInterface.bulkInsert('Users', __users, { returning: ['id'] })
	const users = (await queryInterface.sequelize.query(`SELECT * FROM Users`))[0];

    // Create 10 Tags
	let __tags = Array.from({length: 10}, () => null);
	__tags = __tags.map(() => {
		const time = faker.date.recent();
		return {name:faker.lorem.word(3), createdAt:time, updatedAt:time};
	})
    await queryInterface.bulkInsert('Tags', __tags, {});
	const tags = (await queryInterface.sequelize.query(`SELECT * FROM Tags`))[0];
 
    // Create 100 Articles
	let __articles = Array.from({length: 100}, () => null);
	const published = [true, false]
	__articles = __articles.map(() => {
		const user = users[Math.floor(Math.random() * users.length)];
		var createdAt = faker.date.recent();
		// console.log(createdAt, user.createdAt, " -> ", createdAt > user.createdAt)
		while (createdAt < user.createdAt){
			createdAt = faker.date.recent();
		}
		return {title:faker.name.title(), content:faker.lorem.words(300) , published:published[Math.floor(Math.random() * published.length)],
				createdAt, updatedAt:createdAt, UserId:user.id};
	})
    await queryInterface.bulkInsert('Articles', __articles, {});
    const articles = (await queryInterface.sequelize.query(`SELECT * FROM Articles`))[0];

	// Add between 2 and 6 tags to each Article
	const articles_tags = Array.from(() => null);
    articles.forEach((ae) => {
    	const numberOfTags = Math.floor(Math.random() * 5 + 2);
    	let _tags = [...tags]; // copy tags
    	for (var i=0; i<numberOfTags; i++){
    		const index = Math.floor(Math.random() * _tags.length);
    		const t = _tags[index];
    		_tags.splice(index, 1);
    		// console.log(`[+] adding TagId:${t.id} with ArticleId:${ae.id} -> tags length : ${index}`);
    		articles_tags.push({ArticleId:ae.id, TagId:t.id, createdAt:faker.date.recent(), updatedAt:faker.date.recent()})
    	}
    })
    // console.log(articles_tags)
    await queryInterface.bulkInsert('ArticleTags', articles_tags, {});

    // Create comments for each Article
    const articles_comments = Array.from(() => null);
    articles.forEach((ae) => {
    	const numberOfComments = Math.floor(Math.random() * 10);
    	for (var i=0; i<numberOfComments; i++){
    		// console.log(`[+] adding ArticleId:${ae.id}`);
    		articles_comments.push({content:faker.random.words(3), ArticleId:ae.id, createdAt:faker.date.recent(), updatedAt:faker.date.recent()})
    	}
    })
    // console.log(articles_comments)
    await queryInterface.bulkInsert('Comments', articles_comments, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     // await queryInterface.bulkDelete('Users', null, {});
     // await queryInterface.bulkDelete('courses', null, {});
  }
};
