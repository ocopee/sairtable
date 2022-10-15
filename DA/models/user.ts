import { Model } from "./model.ts";
import { UserAdapter } from "../adapters/user.ts";
import { UserDTO as ModelDTO } from "./DTO/user.ts";
import { UserDTO as AdapterDTO } from "../adapters/DTO/user.ts";

export class UserModel extends Model {
  /**
   * Chỉ có 1 và duy nhất 1 adapter được sử dụng trong model tại vì nếu nếu muốn sử dụng adapter khác, cần thông qua model của chúng.
   */
  private adapter: UserAdapter;
  constructor() {
    super();
    this.adapter = new UserAdapter({
      apiKey: "keyHAwBS13CrEf8ls",
      baseId: "appUJnLyNerZFFOzt",
      tableName: "NDNC-Ghi hình",
    });
  }
  async find(condition: ModelDTO) {
    const query = condition as AdapterDTO;
    const users = await this.adapter.findUser(query);
    return users as ModelDTO;
  }
}
