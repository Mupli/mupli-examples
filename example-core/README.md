# Mupli Core

## About the core
Purpose of the core is to integrate multiple modules and mantain order. It gives you some frames to implement your own modules and reuse them in  different projects. 

**Note**: For your application we suggest to not use "raw" mupli-core alone. Use one of provided modules or write your own module.

Use **Api** (mupli-api), **React** (mupli-react).  


## How to start

```
npm install
npm start

```

got to : 

1.  http://localhost:3000/


2.  http://127.0.0.1:3000/


## Structure

Structure:
- /app - place where your code live
- /app/{module} 
    - your code for module 
    - different module can have different loading behaviors (for mupli-api it loads all *.js files and tranform into rest)
- /config/apps.json
    - multi site configuration and attached modules (not all your projects need all modules) 


