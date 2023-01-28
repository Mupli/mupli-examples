import { Mupli } from "mupli-core";
import { ApiModule } from "mupli-api";

Mupli.init() //
    .module(new ApiModule()) //
    .listen(3000);
