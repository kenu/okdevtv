sudo yum install nginx -y
sudo service nginx start
sudo amazon-linux-extras install nginx1.12
sudo systemctl start nginx
curl -i http://localhost
sudo chmod 644 /var/log/nginx
sudo chown -R ec2-user:ec2-user /usr/share/nginx/html
echo "<h1>Hello World</h1>" > /usr/share/nginx/html/hello.html

sudo yum remove java-1.7.0-openjdk.x86_64 -y
sudo yum install java-1.8.0-openjdk-devel.x86_64 -y

mkdir ~/local
cd ~/local
rm -rf elasticsearch kibana logstash
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.7.0-linux-x86_64.tar.gz
tar xfz elasticsearch-7.7.0-linux-x86_64.tar.gz
ln -s elasticsearch-7.7.0 elasticsearch
cd elasticsearch
bin/elasticsearch -d

cd ~/local
wget https://artifacts.elastic.co/downloads/kibana/kibana-7.7.0-linux-x86_64.tar.gz
tar xfz kibana-7.7.0-linux-x86_64.tar.gz
ln -s kibana-7.7.0-linux-x86_64 kibana
cd kibana
nohup bin/kibana &

cd ~/local
wget https://artifacts.elastic.co/downloads/logstash/logstash-7.7.0.tar.gz
tar xfz logstash-7.7.0.tar.gz
ln -s logstash-7.7.0 logstash
cd logstash
mkdir logconf && cd logconf
wget https://okdevtv.com/md/elk/okky.conf
./bin/logstash-plugin install logstash-input-beats
cd -
nohup bin/logstash -f logconf/okky.conf &

