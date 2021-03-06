import sequelize from '../connection/mysql';
import Sequelize from 'sequelize';

export default sequelize.define(
  'profile',
  {
    id: {
      type: Sequelize.INTEGER,
      field: 'tutor_id',
      primaryKey: true
    },
    location: Sequelize.STRING,
    locationId: {
      type: Sequelize.INTEGER,
      field: 'location_id'
    },
    latitude: Sequelize.STRING,
    longitude: Sequelize.STRING
  },
  {
    tableName: 'tutor_profile',
    createdAt: false,
    updatedAt: false
  }
);
