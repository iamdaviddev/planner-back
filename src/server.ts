import fastify from "fastify";
import cors from "@fastify/cors";

import { createTrip } from "./routes/create-trip";
import { confirmTrip } from "./routes/confirm-trip";

import { 
  serializerCompiler, 
  validatorCompiler 
} from "fastify-type-provider-zod";
import { confirmParticipant } from "./routes/confirm-participant";
import { createActivity } from "./routes/create-activity";

const app = fastify();

app.register(cors, {
  origin: '*',
})
app.register(createTrip);
app.register(confirmTrip);
app.register(confirmParticipant);
app.register(createActivity);

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.listen({ port: 3333 }).then(() => {
  console.log("Server is running on port 3333");
})