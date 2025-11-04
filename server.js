import Fastify from 'fastify'
import pkg from 'pg'
const { Pool } = pkg

const pool = new Pool ({
    user: 'local',
    host: 'localhost',
    database: 'compras',
    password: '12345',
    port: 5432
})

const server = Fastify()

server.get('/compras', async (req, reply) => {
    const result = await pool.query(`select * from purchase`)
    return result.rows
})

server.post('/compras', async (req, reply) => {
    const body = req.body

    const result = await pool.query(
        `insert into purchase (name, price, description) values ($1, $2, $3)`,
        [body.name, body.price, body.description]
    )

    return { response: 'Deu bom!' }
})

server.listen({
    port: 3333
})