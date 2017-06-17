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

### add a readme files
```
touch .README.md
```
### initialize npm
```
npm init -y
```

### add gulp as dev dependency
```
npm i --save-dev gulp
```
And add the following content to it:
```
const gulp = require('gulp')

gulp.task('default', function() {

})
```

### create folder structure
```
touch es6 && touch dist
mkdir public && cd public
mkdir es6 && mkdir dist
cd ..
```

You should have the following structure
```
├── .git
├── .gitignore
├── README.md
├── dist
├── es6
├── gulpfile.js
├── node_modules [161 entries exceeds filelimit, not opening dir]
├── package-lock.json
├── package.json
└── public
    ├── dist
    └── es6
```
