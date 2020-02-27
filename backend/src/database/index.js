import Sequelize from 'sequelize';

import Donor from '../app/models/Donor';

import databaseConfig from '../config/database';

const models = [Donor];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
