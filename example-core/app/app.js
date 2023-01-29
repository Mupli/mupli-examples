import { FileLoader, Mupli } from "mupli-core";

const csMod = {
    moduleName: "custom",

    _moduleFiles: {},
    init: (appName) => {
        const fileDef = FileLoader.getModuleFile(appName, "custom", "/file.txt");
        csMod._moduleFiles[appName] = FileLoader.load(fileDef);
    },
    routes: (appName) => {
        const data = csMod._moduleFiles[appName];
        return {
            "/": (ctx) => {
                return data;
            },
            "/hello": (ctx) => {
                return "Hello World";
            },
        };
    },
};

Mupli.init() //
    .module(csMod) //
    .listen(3000);
