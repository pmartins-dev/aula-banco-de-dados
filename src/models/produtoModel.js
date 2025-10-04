// Importar a conexão com o banco de dados e o tipo de dados SQL
const {sql, getConnection} = require("../config/db");

const produtoModel = {
    buscarTodos: async ()=>{

        try {
            const pool = await getConnection();

            let querySQL = "SELECT * FROM Produtos";

            const result = await pool.request().query(querySQL);

            return result.recordset;

        } catch (error) {
            console.error("Erro ao buscar o produtos:", error);
            throw error; //Quem chamar a funcão vai receber o erro
        }

    }
};

module.exports = {produtoModel};
