npm install --save 
@angular/core 
@angular/compiler
@angular/common 
@angular/platform-browser
@angular/platform-browser-dynamic 
rxjs 
zone
reflect-metadata 
zone.js

npm install --save-dev @types/core-js

The following is very important to get rid of compiling node_modules
"compilerOptions": {
       "types" : ["node", "lodash", "express"]
   }


npm install --save systemjs

tsconfig compiler options to investigate : 
"rootDir": ".",   

https://basarat.gitbooks.io/typescript/content/docs/project/external-modules.html


https://medium.com/@ct7/angular2-module-architecture-and-example-seed-project-35b7410264f5
https://github.com/conduitl/ng-savant/tree/master/seed

