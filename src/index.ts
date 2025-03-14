import { Hono } from 'hono'
import { postAttend,getAllAttendents } from './service';

const app = new Hono()

app.get('/', (c) => {
  return c.text('Welcome to Invitation API!')
});

app.post('/attend', async (c) => {

try {
  const data = await c.req.json();

  const attend = await postAttend(data);

  return c.json(attend, 201)
} catch (error) {
  return c.json({ message: "Server error"}, 500)
}
});

app.get('/attend', async (c) => {
  const Attendents = await getAllAttendents();

  return c.json(Attendents, 200)
})

export default {
  fetch: app.fetch,
}