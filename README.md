<h2>Git User search using gitapi and angular2</h2>

This Repo is Made from Angular 2 Webpack starter pack as the base https://github.com/AngularClass/angular2-webpack-starter.
Please folow the linkl if you want a quickstart guide to develop Angular 2 Applications.

This App Searches the GitHub for Users you enter and displays their Repo and their personal details they wished to show

clone our repo

git clone --depth 1 https://github.com/rahulrsingh09/GitSearch-App

change directory to our repo

cd GitSearch-App

install the repo with npm

npm install

start the server

npm start

server

development

npm run server

production

npm run build:prod npm run server:prod Other commands

build files

development

npm run build:dev

production (jit)

npm run build:prod

AoT

npm run build:aot

AoT Don'ts

The following are some things that will make AoT compile fail.

Don’t use require statements for your templates or styles, use styleUrls and templateUrls, the angular2-template-loader plugin will change it to require at build time. Don’t use default exports. Don’t use form.controls.controlName, use form.get(‘controlName’) Don’t use control.errors?.someError, use control.hasError(‘someError’) Don’t use functions in your providers, routes or declarations, export a function and then reference that function name @Inputs, @Outputs, View or Content Child(ren), Hostbindings, and any field you use from the template or annotate for Angular should be public


