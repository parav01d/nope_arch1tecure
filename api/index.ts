import { Request, Response } from "express";
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import RouteLoader from "UserManagement/Routes";
import config from "Config";

function bootstrapExpress(): void {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());

    const routeLoader = new RouteLoader();
    routeLoader.initializeContainer();
    routeLoader.initializeDependencies();

    routeLoader.getRoutes().forEach((route) => {
        console.log(`[${route.method.toUpperCase()}]${route.path}`);
        if (route.middlewares.length > 0) {
          app.use(route.path, ...route.middlewares);
        }
        app[route.method](route.path, (request: Request, response: Response, next: any) => {
            route.action(request, response)
                .then(() => next)
                .catch((err: any) => next(err));
        });
    });

    app.use("*", (req, res) => {
      res.status(404).send({message: "Route not found!", route: req.originalUrl});
    });

    console.log(`Application listen on ${config.general.PORT}`);
    app.listen(config.general.PORT);
}

bootstrapExpress();
