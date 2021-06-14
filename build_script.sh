#!/bin/sh
echo pwd

pip install datasette sqlite-utils heroku

(
echo dec11rll@gmail.com
echo Howard-Deploy
) | heroku login -i

sqlite-utils insert red_record.db red-record-data red-record-states.geojson
heroku plugins:install heroku-builds
datasette install datasette-cluster-map
datasette publish heroku --name "redrecord" --install=datasette-cluster-map