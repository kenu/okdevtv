# Solr
- https://solr.apache.org/
- feature:
  - search engine
  - full text search
  - real-time indexing

## Install
- https://solr.apache.org/downloads.html

## Config
- https://solr.apache.org/guide/

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
bin/solr create -c okdevtv

bin/solr config -c okdevtv -p 8983 -action set-user-property -property update.autoCreateFields -value true
```

## SolarCRUD

### Insert, Update
- single data
```sh
curl -X POST -H 'Content-type:application/json' --data-binary '{"add": {"doc":{"id": "1", "name" : "okdevtv", "age": 1}}, "commit": {}}' http://localhost:8983/solr/okdevtv/update
```

- array data
```sh
curl -X POST -H 'Content-type:application/json' --data-binary '[
  {"id": "2", "name": "okdevtv.com", "age": 10},
  {"id": "3", "name": "okdevtube", "age": 10}
]' 'https://data.hnextits.net/solr/okdevtv/update/json/docs?commit=true'
```

### Query
```sh
curl "http://localhost:8983/solr/okdevtv/select?q=name:okdevtv*"
```

### Delete
```sh
curl -X POST -H 'Content-type:application/json' --data-binary '{"delete": {"query": "name:okdevtv*"}, "commit": {}}' http://localhost:8983/solr/okdevtv/update
```


