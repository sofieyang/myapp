// named lead.js because it is a model of leads

// migrations are used to manipulate the database structure itself.
// up method means creating and down method is rollback
'use strict';
module.exports = {
  	up: (queryInterface, Sequelize) => {
    	return queryInterface.createTable('Leads', {
	    	id: {
	        	allowNull: false,
	        	primaryKey: true,
	        	type: Sequelize.UUID,
	        	defaultValue: Sequelize.UUIDV4,
	      	},
	      	createdAt: {
	        	allowNull: false,
	        	type: Sequelize.DATE
	      	},
	      	updatedAt: {
	        	allowNull: false,
	        	type: Sequelize.DATE
	      	},
	      	email: {
	      		allowNull: false,
	      		type: Sequelize.STRING
	      	},
    	})
 	},
  	down: (queryInterface, Sequelize) => {
    	return queryInterface.dropTable('Leads');
  	}
};