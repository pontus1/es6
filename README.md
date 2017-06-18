# es6-boilerplate
* A boilerplate for es6 to run in node or in any browser

## Getting Started
* Clone the repo and
```
npm i
```
#### Write es6 code!
* Code that should run in a node environment goes in the **src/** folder
* Code that should run in a browser goes in the **public/src/** folder

* Turn the es6 you've written in to runnable code by typing 
```
gulp
```
in the terminal. 
The runnable code will be in the **dist** or **public/dist/** folder.

* To clean the dist folders run
```
gulp clean
```
### Prerequisites
* Node & Npm
```
brew install node
```
* Gulp
```
npm i -g gulp
```

## If you prefer to set this up by yourself, follow the instructions bellow

### create root folder (name it whatever you like)
all steps below should be done from root-folder
### initialize git:
```
git init
```
### add a gitignore file:
```
touch .gitignore
```
And add the following content to it
```
# npm debugging logs
npm debug.log

# project dependencies
node_modules

# OSX folder attributes
.DS_Store

# temporary files
*.tmp
*~
```

### add a readme file
```
touch .README.md
```
### initialize npm
```
npm init -y
```
### add gulp
```
npm i --save-dev gulp

touch gulpfile.js
```
And add the following content to it:
```
const gulp = require('gulp')
const babel = require('gulp-babel')
const eslint = require('gulp-eslint')

gulp.task('default', function () {
  gulp.src(['src/**/*.js', 'public/src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
  gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
  gulp.src('public/src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('public/dist'))
})
```
### add babel
```
npm i --save-dev babel-preset-es2015

touch .babelrc
```
And add the following content to it
```
{ "presets": ["es2015"] }
```

### add gulp-babel
```
npm i --seve-dev gulp-babel
```
### add ESLint
```
touch .eslintrc
eslint --init
```
And answer the questions

### add gulp-eslint
```
npm i --save-dev gulp-eslint
```
### create folder structure
```
mkdir src && mkdir dist
mkdir public && cd public
mkdir src && mkdir dist
cd ..
```

You should have the following structure
```
├── .babelrc
├── .eslintrc
├── .git/
├── .gitignore
├── README.md
├── dist/
├── src/
├── gulpfile.js
├── node_modules/
├── package-lock.json
├── package.json
└── public/
    ├── dist
    └── src
```
