const fastify = require('fastify');
const app = fastify();

app.get('/', (req, res) => {
 return res.send('Hello');
})

app.listen(4400, () => {});
