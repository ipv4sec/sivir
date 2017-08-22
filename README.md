# Sivir

PostgreSQL使用Postgis渲染地图样例

### SQLs

```
UPDATE chn_adm1 set geom = ST_Transform(ST_SetSRID(geom,4326),3857)  WHERE 1=1;
SELECT st_srid(geom) FROM chn_adm1 WHERE 1=1 LIMIT 1;
```

### lint

`sh ./bin/tslint.sh` or  `gulp tslint`

### test

`sh ./bin/test.sh` or  `npm test`


### build

`sh ./bin/build.sh` or  `gulp build` or  `gulp watch-build`

