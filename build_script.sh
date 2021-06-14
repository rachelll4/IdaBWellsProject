echo pwd
cd ../..
(
echo machine api.heroku.com
echo   login dec11rll@gmail.com
echo   password 5d12a537-614a-4375-af23-b7cab9f931f5
echo machine git.heroku.com
echo   login dec11rll@gmail.com
echo   password 5d12a537-614a-4375-af23-b7cab9f931f5 
)>> _netrc

cd IdaBWellsProject/IdaBWellsProject

pip install datasette sqlite-utils heroku

sqlite-utils insert red_record.db red-record-data red-record-states.geojson
heroku plugins:install heroku-builds
datasette install datasette-cluster-map
datasette publish heroku --name "redrecord" --install=datasette-cluster-map