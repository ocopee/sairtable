import { serve } from "https://deno.land/std@0.150.0/http/server.ts";
import { REST } from "./BL/rest.ts";

const rest = new REST();

await serve(rest.handler, {
  port: 8080,
});
