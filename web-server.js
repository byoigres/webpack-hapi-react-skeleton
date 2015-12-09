import { Server } from 'hapi';
import Inert from 'inert';
import Vision from 'vision';
import HapiReactViews from 'hapi-react-views';
import H2o2 from 'h2o2';

const server = new Server();

server.connection({
  host: 'localhost',
  port: 4000
});

server.register([
  {register: Inert},
  {register: Vision},
  {register: H2o2}
], error => {
  if (error) {
    return console.error(error);
  }

  server.views({
    engines: {
      jsx: HapiReactViews
    },
    relativeTo: __dirname,
    path: 'views',
    runtimeOptions: {
        doctype: '<!DOCTYPE html>',
        renderMethod: 'renderToString'
    }
  });

  // Serve all files from the assets directory
  // Note: in production this also serves webpack bundles.
  server.route({
    method: 'GET',
    path: '/static/{path*}',
    handler: {
      directory: {
        path: '/static/',
        index: false,
        listing: false,
        showHidden: false
      }
    }
  });

  // Catch-all
  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: (request, reply) => {
      reply('Hapi catch-all view fro /' + encodeURIComponent(request.params.path));
    }
  });

  // App
  server.route({
    method: 'GET',
    path: '/',
    handler: {
      view: 'app'
    }
  });

  // Proxy webpack assets request to webpack-dev-server
  // Note: in development webpack bundles are served from memory, not filesystem.
  server.route({
    method: 'GET',
    path: '/static/build/{path*}',
    handler: {
      proxy: {
        host: 'localhost',
        port: 4001,
        passThrough: true
      }
    }
  });

  // Proxy webpack HMR requests to webpack-dev-server.
  server.route({
    method: 'GET',
    path: '/__webpack_hmr', // this includes HMR patches, not just webpack bundle files.
    handler: {
      proxy: {
        host: 'localhost',
        port: 4001,
        passThrough: true,
        ttl: 'upstream'
        //headers: { accept: "text/event-stream" }
      }
    }
  });

  server.start(() => console.log(`Server running at: ${server.info.uri}`));

});
