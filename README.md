# Parcel JS Tutorial

![Parcel JS](favicon.ico)

> PARCEL - Blazing fast, zero configuration web application bundler <br/>
> Home: https://parceljs.org/ <br/>
> Tutorial: https://parceljs.org/getting_started.html


Here is an example of using Parcel JS to packaging/bundling node modules for the web browser.

I notices students were having issues so i wanted to create this tutorial.

I personally like Parcel a lot more than `browserify` and `webpack` because of how simple it is, in most cases.

### How to install Parcel

* if you have not already, install node js: https://nodejs.org/en/ <br/>Node comes with NPM (node package manager). You can also use `Yarn` as an alternative (install Node JS first): https://yarnpkg.com/en/
* install Parcel globally using Yarn or npm:
  - Yarn: `yarn global add parcel-bundler`
  - NPM: `npm install -g parcel-bundler`


### How to use Parcel

* Create a folder. This will be your project's `root` folder/directory.
* In your terminal/Command Prompt, Change, or `cd`, to that project root.
* Create a package.json file in your project `root` directory using:
  - yarn: `yarn init -y`
  - npm: `npm init`

When initializing a node package, make sure that `main` is pointing to the main `js` file of your website.

* install your dependencies with: `yarn add {package_name}` or `npm install {package_name}`
* In this project root, you can create and structure your website as you normally would
with a front end project. Create your project
* To prepare for production, go to the project root and run: `parcel build *.html` This will create a `dist` folder. THAT is the root folder for production. `Parcel` will build and minify all the files.
* run a local server in that `dist` folder:
  - python 2: `python -m SimpleHTTPServer 8000`
  - python 3: `python -m http.server 8000`
  - node (using this module: https://www.npmjs.com/package/http-server) `http-server ./ -p 8000`
* See you app in action!


### How to run this example locally

This repo also has an example app. <br/>

Git: https://github.com/ryanwaite28/parceljs-demo <br/>
Live: https://ryanwaite28.github.io/parceljs-demo/dist/index.html


To run locally:

1. Get the project
  * clone with `git clone https://github.com/ryanwaite28/parceljs-example.git`
  * download this repo then extract/unzip
2. cd to the root folder
3. install parcel globally and then the node packages of this app
4. run `parcel build *.html`
5. run a local server in the `dist` folder



---

# Ryan M. Waite
### Web & Mobile Developer
