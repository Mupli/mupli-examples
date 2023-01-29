
# Example of api module 

## About Mupli 
Project to integrate multiple highly reusable modules. <br/> 
It Supports multiple pages on one server as well. 

## About api
Api module provides files autoloading and transform functions into Rest Api methods. 


## Hot to run

Just execute:
```
npm install 
npm  start
```


Go to:
```
http://localhost:3000/api/test 
http://localhost:3000/api/test/accepted

curl -X POST http://localhost:3000/api/test/test

```

## Some examples with configuration


/config/apps.json 

```json
{
    "exampleProject": {
        "hosts": ["localhost"],
        "modules": ["api", "custom"]
    },
    "La-Li-Lu-Le-Lo": {
        "hosts": ["the.patriots.com", "127.0.0.1"],
        "modules": ["api-2", "custom"]
    }
}
```

/app/app.js

```javascript

import {Mupli} from "mupli-core"
import {ApiModule} from "mupli-api"


Mupli.init()
    .module(new ApiModule())
    .module(new ApiModule({moduleName: "/api-2", routerPrefix: "api-2" }))
    .module(customModule)
    .listen(3000)


---
const customModule = {
    moduleName: "custom",
    init (appName) {
        //do some have stuff - load all files 
    },

    routes:(appName) => {
        return  {
            "/": (ctx) => {
                // initate React or other things
                //return REACT 
                return "" 
            }
        }
    }
}
```


/app/exampleProject/api/test.js

```javascript
export function init(ctx) {
    return "init OK"
}
```
/app/La-Li-Lu-Le-Lo/api-2/test.js

```javascript
export const init = [
    validateAjv(schema), // 
    isAuthenticated(), //mupli-middlewares
    isMethods("GET", "POST", "HEAD")
    
    (ctx) => {
        return {message: "init OK Api 2"}
    }]
```


Execute 
```
http://localhost:3000/api/test 

http://127.0.0.1:3000/api-2/test 

```




##  Goal & vision 

My goal is to have small server that can support multiple websites with different functionalities and set the common frame for creating reusable modules.

Example:  (react, cart are still in development)

```json
{
    "mybunny": {
        "hosts": ["mybunny.com"],
        "modules": ["api", "cart", "products", "admin", "payment", "files-s3", "aws"]
    },
    "mycompany": {
        "hosts": ["myXYZcompany.com", "thecompany.com"],
        "modules": ["api", "page", "strapi", "react", "sitemap"]
    },

    "shop": {
        "hosts": ["myforum.com"],
        "modules": ["api", "strapi", "react", "admin","comments", "users"]
    },
}
```


```
Mupli.init()
    .module(new StoreModule())
    .module(new ApiModule({moduleName: "/api-2", routerPrefix: "api-2" }))
    .module(new StrapiModule())
    .module(new CartModule("/cart"))
    .module(new PageModue())
    .module(new PaymentModule())
    .module(new SiteMapGeneratorModule({moduleName:"sitemap"})
    .module(new MyAdmin({moduleName:"admin"})
    .listen(3000)