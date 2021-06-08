const db = require('./models');

(async function migrate(){
	try{
		await db.sequelize.sync({force: true})
		console.log("Done")
	} catch(error){
		console.error(error)
	}
	
})();

