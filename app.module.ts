import {
    NgModule
}
from "@angular/core";

import {
    NativeScriptModule
}
from "nativescript-angular/platform";
import {
    NativeScriptRouterModule
}
from "nativescript-angular/router";

import {
    appRoutes
}
from "./app.routes";
import {
    AppComponent
}
from "./app.component";

import {
    DrawerMenuModule as NavigationModule
}
from "./navigation/drawer/drawer.module";

@
NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        NavigationModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}