# Basic Setup

### create root folder (name it whatever you like)
all steps below should be done from root-folder unless explicitly said otherwise
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
  gulp.src(['es6/**/*.js', 'public/es6/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
  gulp.src('es6/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
  gulp.src('public/es6/**/*.js')
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
mkdir es6 && mkdir dist
mkdir public && cd public
mkdir es6 && mkdir dist
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
├── es6/
├── gulpfile.js
├── node_modules/
├── package-lock.json
├── package.json
└── public/
    ├── dist
    └── es6
```
