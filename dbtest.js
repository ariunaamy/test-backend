const db = require('./db/dbConfig');

const checkDbConnection = async () => {
  try {
    const queryResult = await db.query('SELECT NOW();');
    console.log("Current database time:", queryResult.rows[0].now);
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};

checkDbConnection();
