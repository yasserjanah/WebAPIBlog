'use strict';

const faker = require("faker");
const usersRepo = require('../repositories/users');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // 
    // let roles = Array.from(["admin", "author", "guest"]);
	// let users = Array.from({length: 20}, () => null);
// 
	// users = users.map(async () => {
		// const password = await usersRepo.generateHash(faker.internet.password());
		// return {username:faker.internet.userName(), email:faker.internet.email(), password: password,
				// role:roles[Math.floor(Math.random() * roles.length)],
				// createdAt:faker.date.recent(), updatedAt:faker.date.future()};
	// })
	// 
    // await queryInterface.bulkInsert('Users', users, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
