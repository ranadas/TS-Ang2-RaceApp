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