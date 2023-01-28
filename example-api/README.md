



# Example of api module 
## about Mupli 
Project to support implementation of highly reusable modules. 

## about api
Api module provides files autoloading and transform functions into Rest Api methods. 



## Hot to run

install deps
```
npm install 
```


run server 
```
npm  start
```


got to 
```
http://localhost:3000/api/test 
http://localhost:3000/api/test/accepted

curl -X POST http://localhost:3000/api/test/test

```

## MINIMAL CONFIG  with some examples


/config/apps.json 

```json
{
    "customProjectName": {
        "hosts": ["localhost"],
        "modules": ["api", "api-2", "custom"]
    },
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


/app/customProjectName/api/test.js

```javascript
export function init(ctx) {
    return "init OK"
}
```
/app/customProjectName/api-2/test.js

```javascript
export function init(ctx) {
    return "init OK Api 2"
}
```

Execute 
```
http://localhost:3000/api/test 
http://localhost:3000/api-2/test 

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