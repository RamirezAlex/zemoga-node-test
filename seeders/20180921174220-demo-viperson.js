'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('VIPeople', [
      {
        id: 1,
        fullname: 'Kayne West',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        category: 'Entertainment',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        fullname: 'Mark Zuckerberg',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        category: 'Business',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        fullname: 'Cristina Fernandez de Kirchner',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        category: 'Politics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        fullname: 'Malala Yousafzai',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        category: 'Entertainment',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('VIPeople', null, {});
  }
}
