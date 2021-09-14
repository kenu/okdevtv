sudo amazon-linux-extras install nginx1.12
curl -i http://localhost
sudo chmod 644 /var/log/nginx
sudo chown -R ec2-user:ec2-user /usr/share/nginx/html
echo "<h1>Hello World</h1>" > /usr/share/nginx/html/hello.html

sudo yum install java-1.8.0-openjdk-devel.x86_64 -y

mkdir ~/local
cd ~/local
rm -rf elasticsearch kibana logstash
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.14.1-linux-x86_64.tar.gz
tar xfz elasticsearch-7.14.1-linux-x86_64.tar.gz
ln -s elasticsearch-7.14.1 elasticsearch
cd elasticsearch
bin/elasticsearch -d

cd ~/local
wget https://artifacts.elastic.co/downloads/kibana/kibana-7.14.1-linux-x86_64.tar.gz
tar xfz kibana-7.14.1-linux-x86_64.tar.gz
ln -s kibana-7.14.1-linux-x86_64 kibana
cd kibana
nohup bin/kibana &

cd ~/local
wget https://artifacts.elastic.co/downloads/logstash/logstash-7.14.1-linux-x86_64.tar.gz
tar xfz logstash-7.14.1-linux-x86_64.tar.gz
ln -s logstash-7.14.1 logstash
cd logstash
./bin/logstash-plugin install logstash-input-beats
mkdir logconf && cd logconf
wget https://okdevtv.com/md/elk/okdevtv.conf
cd -
nohup bin/logstash -f logconf/okdevtv.conf &

sudo amazon-linux-extras install -y nginx1.12
sudo systemctl enable nginx

sudo mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.orig
sudo sh -c "sed '38,87d' /etc/nginx/nginx.conf.orig > /etc/nginx/nginx.conf"
cd /etc/nginx/conf.d
sudo curl -O https://raw.githubusercontent.com/kenu/okdevtv/main/sh/elk.conf
sleep 5
sudo systemctl restart nginx

