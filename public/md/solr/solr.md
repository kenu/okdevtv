# Solr
- https://solr.apache.org/
- feature:
  - search engine
  - full text search
  - real-time indexing

## Install
* https://solr.apache.org/downloads.html

## Config
* https://solr.apache.org/guide/

## Start
```sh
bin/solr start
```

## Stop
```sh
bin/solr stop
```

## Create Core
```sh
bin/solr create -c test
```

## SolarCRUD

### Insert
```sh
curl -X POST -H 'Content-type:application/json' --data-binary '{"name":"test","age":1}' http://localhost:8983/solr/test/update
```
### Query
```sh
curl http://localhost:8983/solr/test/select?q=name:test
```
### Update
```sh
curl -X POST -H 'Content-type:application/json' --data-binary '{"name":"test","age":2}' http://localhost:8983/solr/test/update
```
### Delete
```sh
curl -X POST -H 'Content-type:application/json' --data-binary '{"name":"test"}' http://localhost:8983/solr/test/update
```


