export class Controller {
  static GET = "GET";
  static POST = "POST";
  static PUT = "PUT";
  static DELETE = "DELETE";
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  url() {
    return `/${this.name}`;
  }
  async create(): Promise<BodyInit | null> {
    return null;
  }
  async read(): Promise<BodyInit | null> {
    return null;
  }
  async update(): Promise<BodyInit | null> {
    return null;
  }
  async remove(): Promise<BodyInit | null> {
    return null;
  }

  async resolve(req: Request): Promise<BodyInit | null> {
    const { method } = req;
    switch (method) {
      case Controller.GET:
        return await this.read();
      case Controller.POST:
        return await this.create();
      case Controller.PUT:
        return await this.update();
      case Controller.DELETE:
        return await this.remove();
      default:
        return null;
    }
  }
}
