import {
  checkIn
} from "./chunk-DWVJUBSH.mjs";
import {
  createEvent
} from "./chunk-SZPSVOGG.mjs";
import "./chunk-KDMJHR3Z.mjs";
import {
  getAttendeeBadge
} from "./chunk-I47GNSSN.mjs";
import {
  getEvent
} from "./chunk-4JD5QI7Q.mjs";
import {
  registerForEvent
} from "./chunk-PWGKOT6M.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
var app = fastify();
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server esta funcionando!");
});
