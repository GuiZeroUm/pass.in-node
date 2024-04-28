import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod'
import { createEvent } from "./routes/create-event";
import { registerForEvent } from "./routes/register-for-event";
import { getEvent } from "./routes/get-event";
import { getAttendeeBadge } from "./routes/get-attendee-badge";
import { checkIn } from "./routes/check-in";

const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createEvent)
app.register(registerForEvent)
app.register(getEvent)
app.register(getAttendeeBadge)
app.register(checkIn)

// métodos: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, etc 
// 20x => sucesso
// 30x => redirecionamento
// 40x => erro do cliente
// 50x => erro do servidor

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server esta funcionando!')
})

