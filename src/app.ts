
let tilestrata = require('tilestrata');
let vtile = require('tilestrata-vtile');
let headers = require('tilestrata-headers');
import * as express from 'express';


let app = express();
let strata = tilestrata();

strata.layer('sivir').route('land.pbf')
  .use(vtile({
    xml: __dirname + `/../project.map.configure.xml`,
    tileSixe: 256,
    metatile: 1,
    bufferSize: 128
  }))
  .use(headers({'Access-Control-Allow-Origin': '*'}));

app.use(tilestrata.middleware({
  server: strata,
  prefix: '/sivir'
}));

app.listen(3000);
