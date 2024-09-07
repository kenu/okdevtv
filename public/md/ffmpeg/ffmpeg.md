# ffmpeg

## install on EC2
- https://johnvansickle.com/ffmpeg/
```sh
wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz
tar xvf ffmpeg-release-amd64-static.tar.xz
sudo mv ffmpeg-7.0.1-amd64-static/ffmpeg /usr/local/bin/
ffmpeg -version
```

```
ffmpeg -i ~/Movies/npmregi01.mkv -codec copy ~/Movies/npmregi01.mp4
ffmpeg -i ~/Movies/npmregi02.mkv -codec copy ~/Movies/npmregi02.mp4
```

```
ffmpeg -i filename.mp4 -ss 00:00:00 -t 00:06:41 -c:v copy -c:a copy filename_.mp4
ffmpeg -i filename.mp4 -ss 00:09:26.877 -c:v copy -c:a copy filename_e.mp4
```

## mp3 2 wav
```
ffmpeg -i camera-shutter-pentax-k20d-38609.mp3 song.wav
```

