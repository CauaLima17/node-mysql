import mysql from 'mysql';

const dbConfig = {
    host: process.env.HOST || 'localhost',
    user: process.env.USER_DB || 'root',
    password: process.env.PASSWORD_DB || '',
    database: process.env.DATABASE || 'node_mysql'
}

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.log('Erro na conexão com o banco: ', err.message);
    }

    console.log('Conexão realizada com sucesso')
});

export default connection;