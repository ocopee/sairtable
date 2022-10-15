import { Controller } from "./Controller.ts";
import { UserDTO as ControllerDTO } from "./DTO/user.ts";

import { UserService } from "../services/user.ts";
import { UserDTO as ServiceDTO } from "../services/DTO/user.ts";

export class UserController extends Controller {
  private service: UserService;
  constructor() {
    super("users");
    this.service = new UserService();
  }

  async read(): Promise<BodyInit> {
    const users = await this.find({});
    return JSON.stringify(users) as BodyInit;
  }
  async find(condition: ControllerDTO) {
    const query = condition as ServiceDTO;
    const users = await this.service.find(query);
    return users;
  }
}
