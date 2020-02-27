module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'blood_bank',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
