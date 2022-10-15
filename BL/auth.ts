import { create, decode, verify } from "https://deno.land/x/djwt@2.7/mod.ts";

const key = await crypto.subtle.generateKey(
  { name: "HMAC", hash: "SHA-512" },
  true,
  ["sign", "verify"],
);

const jwt = await create({ alg: "HS512", typ: "JWT" }, { foo: "bar" }, key);

const payload = await verify(jwt, key); // { foo: "bar" }
console.log(payload);

const [header, _payload, signature] = decode(jwt);

console.log(header,payload,signature
