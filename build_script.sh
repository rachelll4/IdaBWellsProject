#!/bin/sh

pip install datasette sqlite-utils heroku
cd ~
sudo cat >> .netrc
sudo echo "machine api.heroku.com
  login dec11rll@gmail.com
  password ece9d5cb-78ed-4075-a51e-b9fd6d1e6c08
machine git.heroku.com
  login dec11rll@gmail.com
  password ece9d5cb-78ed-4075-a51e-b9fd6d1e6c08" >> .netrc

cd /home/runner/work/Lynching_Web_App/Lynching_Web_App

sqlite-utils insert red_record.db red_record red_record_states.csv --csv
heroku plugins:install heroku-builds
datasette install datasette-cluster-map
datasette publish heroku red_record.db --name "redrecord" --install=datasette-cluster-map
