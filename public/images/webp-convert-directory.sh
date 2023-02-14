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
