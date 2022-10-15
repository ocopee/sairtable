import { Controller } from "./controllers/Controller.ts";
import { UserController } from "./controllers/user.ts";

export class REST {
  controllers: { [url: string]: Controller };
  constructor() {
    this.controllers = {};
    const Controllers = [UserController];
    Controllers.map((Controller) => {
      const controller = new Controller();
      const url = controller.url();
      console.log("route", url);
      this.controllers[url] = controller;
    });
    this.handler = this.handler.bind(this);
  }
  async handler(req: Request): Promise<Response> {
    const { url, headers } = req;

    const key = url.replace(`https://` + headers.get("host"), "").replace(
      `http://` + headers.get("host"),
      "",
    );
    const controller = this.controllers[key];
    if (!controller) {
      return new Response("invalid router", {
        status: 500,
        headers: {
          "content-type": "text/html; charset=UTF-8",
        },
      });
    }

    const body = await controller.resolve(req);
    return new Response(body, {
      status: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    });
  }
}
