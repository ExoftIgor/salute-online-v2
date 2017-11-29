import 'reflect-metadata';
import 'zone.js';
import 'bootstrap';
import 'lodash';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module.browser';

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
        // Before restarting the app, we create a new root element and dispose the old one
        const oldRootElem = document.querySelector('app');
        const old = document.getElementsByTagName('app');
        const newRootElem = document.createElement('app');
        oldRootElem!.parentNode!.insertBefore(newRootElem, oldRootElem);
        if (modulePromise) {
            modulePromise.then(
                appModule => {
                    if (oldRootElem && oldRootElem.parentNode) {
                        oldRootElem.parentNode.removeChild(oldRootElem);
                    }
                    appModule.destroy();
                });   
        }
    });
} else {
    enableProdMode();
}

// Note: @ng-tools/webpack looks for the following expression when performing production
// builds. Don't change how this line looks, otherwise you may break tree-shaking.
const modulePromise = platformBrowserDynamic().bootstrapModule(AppModule);
