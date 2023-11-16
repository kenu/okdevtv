cd $TARGET_PATH

# Stop 만들어진 PID로 서비스 종료
pid=`cat ./RUNNING_PID 2> /dev/null`
if [ "$pid" == "" ]
then
  printf "Is not running"
else
  echo "Stopping..."
  sudo kill $pid
fi

# Start 및 해당 PID 파일로 만들기
sudo nohup java -jar ./$TARGET_FILE 2>> /dev/null >> /dev/null &
sudo echo $! > ./RUNNING_PID
