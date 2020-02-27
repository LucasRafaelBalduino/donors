import Sequelize, { Model } from 'sequelize';

class Donor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        blood: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Donor;
