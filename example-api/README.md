


# Example of api module 


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

## MINIMAL CONFIG  with some example


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