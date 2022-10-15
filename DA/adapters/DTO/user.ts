import { FieldSet } from "https://deno.land/x/airtable@v1.1.1/types.ts";
export interface UserDTO extends FieldSet<string> {
  username: string;
  password: string;
}
