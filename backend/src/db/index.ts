import { Pool } from 'pg';
import {drizzle} from 'drizzle-orm/node-postgres';
const  pool=new Pool({
    connectionString:"postgresql://postgres:Mysql@123@mydb:5432/mydb",
})

export default  db = drizzle(pool)
