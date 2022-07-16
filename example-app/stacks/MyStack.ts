import { Api, StackContext, ViteStaticSite } from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
  // Create the HTTP API
  const api = new Api(stack, "Api", {
    routes: {
      "GET /notes": "functions/list.handler",
    },
  });

  // Deploy our React app
  const site = new ViteStaticSite(stack, "Site", {
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
