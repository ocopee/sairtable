import {
  FieldSet,
  SelectOptions,
} from "https://deno.land/x/airtable@v1.1.1/types.ts";
import { AdapterAirtable } from "./airtable.ts";
import { UserDTO } from "./DTO/user.ts";
export class UserAdapter extends AdapterAirtable {
  async findUser(_condition: UserDTO): Promise<Array<UserDTO> | null> {
    const query: SelectOptions<FieldSet<string>> = {
      fields: ["name"],
    };
    const { records } = await this.table("users").select(query);
    const users = records.map((record) => {
      return record.fields as UserDTO;
    });
    return users;
  }
}
