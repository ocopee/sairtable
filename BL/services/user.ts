import { Service } from "./Service.ts";
import { UserModel } from "../../DA/models/user.ts";
import { UserDTO as ModelDTO } from "../../DA/models/DTO/user.ts";
import { UserDTO as ServiceDTO } from "./DTO/user.ts";

export class UserService extends Service {
  private model: UserModel;
  constructor() {
    super();
    this.model = new UserModel();
  }
  async find(condition: ServiceDTO) {
    const query = condition as ModelDTO;
    const users = await this.model.find(query);
    return users as ServiceDTO;
  }
}
