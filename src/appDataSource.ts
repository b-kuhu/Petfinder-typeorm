import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Kuhub*28",
    database: "test",
    entities: ["src/entities/*.ts"],
    logging: true,
    synchronize: true,
})
console.log('Database connected');