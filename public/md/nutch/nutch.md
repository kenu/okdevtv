# Nutch
- Web crawler
- https://nutch.apache.org/
- https://cwiki.apache.org/confluence/display/NUTCH/NutchTutorial

## Getting Started
1. download https://nutch.apache.org/download/
```sh
take ~/dev

wget https://dlcdn.apache.org/nutch/1.20/apache-nutch-1.20-bin.tar.gz
tar xvfz apache-nutch-1.20-bin.tar.gz
```

2. Agent Name in `conf/nutch-site.xml`
```xml
  <property>
    <name>http.agent.name</name>
    <value>My Nutch Spider</value>
  </property>
```

3. check
```sh
bin/nutch parsechecker -dumpText https://mp4.okdevtv.com
```

4. make seed.txt file `urls/seed.txt`
```
https://mp4.okdevtv.com/
```

5. Concepts
  - crawldb
  - linkdb
  - segments set : generate, fetch, content, parse_text, parse_data, outlink URLs

6. Step seeding
```sh
bin/nutch inject crawl/crawldb urls
```

7. Step fetching
```sh
bin/nutch generate crawl/crawldb crawl/segments
```

```sh
ls -d crawl/segments/2*
s1=`ls -d crawl/segments/2* | tail -1`
echo $s1
```

```sh
bin/nutch fetch $s1
```

```sh
bin/nutch parse $s1
```

```sh
bin/nutch updatedb crawl/crawldb $s1
```

8. fetch new segments
```sh
bin/nutch generate crawl/crawldb crawl/segments -topN 1000
s2=`ls -d crawl/segments/2* | tail -1`
echo $s2

bin/nutch fetch $s2
bin/nutch parse $s2
bin/nutch updatedb crawl/crawldb $s2
```

```sh
bin/nutch generate crawl/crawldb crawl/segments -topN 1000
s3=`ls -d crawl/segments/2* | tail -1`
echo $s3

bin/nutch fetch $s3
bin/nutch parse $s3
bin/nutch updatedb crawl/crawldb $s3
```

9. Step Invertlinks
```sh
bin/nutch invertlinks crawl/linkdb -dir crawl/segments
```

10. Solr download https://dlcdn.apache.org/lucene/solr/
```
take ~/dev
wget https://dlcdn.apache.org/lucene/solr/8.11.4/solr-8.11.4.tgz
tar xvfz solr-8.11.4.tgz
```

11. create new nutch Solr core
```sh
cd ~/dev/solr-8.11.4
mkdir -p ./server/solr/configsets/nutch/
cp -r ./server/solr/configsets/_default/* ./server/solr/configsets/nutch/
```

12. copy the Nutch's schema.xml into the Solr `conf` directory
```sh
cp ../apache-nutch-1.20/plugins/indexer-solr/schema.xml ./server/solr/configsets/nutch/conf/
```

13. run solr server http://localhost:8983
```sh
bin/solr start
```

14. create nutch core
```sh
bin/solr create -c odevtube -d ./server/solr/configsets/nutch/conf/
```

15. Step: Indexing into Apache Solr
```sh
cd ~/dev/apache-nutch-1.20/
bin/nutch index crawl/crawldb/ -linkdb crawl/linkdb/ crawl/segments/20131108063838/ -filter -normalize -deleteGone
```


---

whitelist

java -cp lib/apache-nutch-1.20.jar:runtime/local/lib/hadoop-core-1.2.0.jar:runtime/local/lib/crawler-commons-0.6.jar:runtime/local/lib/slf4j-log4j12-1.7.5.jar:runtime/local/lib/slf4j-api-1.7.9.jar:runtime/local/lib/log4j-1.2.17.jar:runtime/local/lib/guava-16.0.1.jar:runtime/local/lib/commons-logging-1.1.3.jar:runtime/local/lib/commons-cli-1.2.jar org.apache.nutch.protocol.RobotRulesParser robots.txt url Nutch-crawler
