import { setWorldConstructor } from "cucumber";
import routes from "../../api/Domain/UserManagement/Routes";
import * as Request from "mock-express-request";
import * as Response from "mock-express-response";

function CustomWorld({attach, parameters}) {
  this.attach = attach;
  this.parameters = parameters;
  this.callWith = callWith;
  this.response = null;
  this.routes = new routes();
}

async function callWith(routeName: string, payload: {body?: any , params?: any, query?: any, headers?: any}) {
  const { body, params, query, headers } = payload;
  const endpoints = this.routes.getRoutes();
  const endpoint = [...endpoints ].find((e: any) => e.name === routeName);
  const MockExpressRequest = new Request({
    body,
    params,
    query,
    headers
  });
  const MockExpressResponse = new Response();
  const Next = () => Promise.resolve();
  await Promise.all(
    endpoint.middlewares.map((middleware: any) => middleware(MockExpressRequest, MockExpressResponse, Next))
  );
  return await endpoint.action(MockExpressRequest, MockExpressResponse, Next);
}

setWorldConstructor(CustomWorld);
