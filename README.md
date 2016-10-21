# weather_or_not

npm-run-all --parallel watch-**

"watch-js": "nodemon -e js  -x \"npm run build-js\"",

"build-js": "./node_modules/.bin/uglifyjs public/js/app.js -o public/js/app.min.js",
