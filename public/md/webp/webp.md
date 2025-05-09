# WebP
- Optimized picture format by google
- https://developers.google.com/speed/webp/

## install
- `brew install webp`

## Usage
- basic
```sh
cwebp filename.png -o filename.webp
cwebp -q 80 filename.png -o filename.webp
```

- resize
```sh
cwebp -q 80 -resize 440 276 filename.png -o filename.webp
```

## example
```
917796  elk-dashboard_2418_1344.png
560557  elk-dashboard_2418_1344.jpg
189400  elk-dashboard_2418_1344.webp
216290  elk-dashboard80_2418_1344.webp
 18794  elk-dashboard_470_276.webp
 15310  elk-dashboard_440_276.webp
```

## mac quick look plugin
```sh
brew cask install webpquicklook
```

## limit
- only in Chrome and Android, not Safari, Firefox and IE
<img src="images/caniuse.webp" alt="webp limited" class="img"/>
- check : http://caniuse.com/#feat=webp

## change.sh

```sh
#!/bin/bash
PARAMS=('-m 6 -q 70 -mt -af -progress')
BASEDIR=`pwd`
for D in `find . -type d`
do
  cd $BASEDIR
  cd $D
  pwd

  for FILE in *.{jpg,jpeg,png,svg,tif,tiff}; do
    [ -e "$FILE" ] || continue
    # Here "$FILE" exists
    cwebp $PARAMS "$FILE" -o "${FILE%.*}".webp;
  done

  cd -
done
```

## ref
- https://developers.google.com/speed/webp/docs/cwebp
- https://apps.microsoft.com/detail/9pg2dk419drg
