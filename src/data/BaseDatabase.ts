import knex from "knex";
import Knex from "knex";


export abstract class BaseDatabase {

    private static connection: Knex | null = null;

    protected tableNames = {
        bands: "LAMA_TABELA_BANDAS",
        shows: "LAMA_TABELA_SHOWS",
        users: "LAMA_TABELAS_USUÁRIOS"
    }

    protected getConnection(): Knex {
        if (!BaseDatabase.connection) {
            BaseDatabase.connection = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: 3306,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_SCHEMA,
                },
            });
        }

        return BaseDatabase.connection;
    }

    public static async destroyConnection(): Promise<void> {
        if (BaseDatabase.connection) {
            await BaseDatabase.connection.destroy();
            BaseDatabase.connection = null;
        }
    }
}