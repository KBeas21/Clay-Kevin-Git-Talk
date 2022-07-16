"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyStack = void 0;
const resources_1 = require("@serverless-stack/resources");
function MyStack({ stack }) {
    // Create the HTTP API
    const api = new resources_1.Api(stack, "Api", {
        routes: {
            "GET /notes": "functions/list.handler",
            "GET /notes/{id}": "functions/get.handler",
            "PUT /notes/{id}": "functions/update.handler",
        },
    });
    // Deploy our React app
    const site = new resources_1.ViteStaticSite(stack, "Site", {
        path: "web",
        environment: {
            VITE_API_URL: api.url,
        },
    });
    // Show the URLs in the output
    stack.addOutputs({
        SiteUrl: site.url,
        ApiEndpoint: api.url,
    });
}
exports.MyStack = MyStack;
