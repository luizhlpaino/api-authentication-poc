import { DataSource } from 'typeorm';

export  const AppDataSource = new DataSource({
    type: 'mongodb',
    url: 'mongodb://localhost:27017/poc_database',
    synchronize: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    entities: [],
});