export function init(ctx) {
    return "init OK"
}


export async function accepted(ctx) {
    return ctx.res.status(201).json({
        message: "super accepted"
    })
}


export const test = [
    //... middlewares if needed
    
    // isMethods("post"),
    // hasRole("POSTMAN"),
    // hasHeader("header"),
    // isResourceOwner()
    // isFileUpload()
    
    //OR custom middleware:
    async (ctx) => {
        //my custom code ..
        console.log("custom")
    },
    
    async (ctx) => {

        if (!ctx.req.is("POST")) {
            //or manual check
            return ctx.res.status(405); 
        }

        return {
            message: "post test"
        } // 200 OK
    }
]