#!/bin/sh

sqlite-utils insert red_record.db red-record-data red-record-states.geojson
heroku plugins:install heroku-builds
datasette install datasette-cluster-map
datasette publish heroku --name "redrecord" --install=datasette-cluster-map