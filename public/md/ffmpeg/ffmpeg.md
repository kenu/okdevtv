# ffmpeg

```
ffmpeg -i ~/Movies/npmregi01.mkv -codec copy ~/Movies/npmregi01.mp4
ffmpeg -i ~/Movies/npmregi02.mkv -codec copy ~/Movies/npmregi02.mp4
```

```
ffmpeg -i 14-conflict-solving.mp4 -ss 00:00:00 -t 00:06:41 -c:v copy -c:a copy 14-conflict-solving_.mp4
ffmpeg -i 14-conflict-solving.mp4 -ss 00:09:26.877 -c:v copy -c:a copy 14-conflict-solving_e.mp4
```

## mp3 2 wav
```
ffmpeg -i camera-shutter-pentax-k20d-38609.mp3 song.wav
```

