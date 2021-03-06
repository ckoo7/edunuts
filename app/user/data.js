import sequelize from '../connection/mysql';
import Sequelize from 'sequelize';

export default sequelize.define(
  'data',
  {
    id: {
      type: Sequelize.INTEGER,
      field: 'id',
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: Sequelize.INTEGER,
      field: 'user_id'
    },
    name: Sequelize.STRING,
    value: Sequelize.STRING
  },
  {
    tableName: 'user_data',
    createdAt: false,
    updatedAt: false
  }
);
