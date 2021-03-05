"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TabContainerComponent = void 0;
var core_1 = require("@angular/core");
var TabContainerComponent = /** @class */ (function () {
    function TabContainerComponent() {
    }
    __decorate([
        core_1.Input()
    ], TabContainerComponent.prototype, "navs");
    __decorate([
        core_1.Input()
    ], TabContainerComponent.prototype, "linkTemplate");
    TabContainerComponent = __decorate([
        core_1.Component({
            selector: 'tab-container',
            template: "\n    <ul class=\"nav nav-tabs my-4 mx-4\">\n        <li class=\"nav-item\" *ngFor=\"let link of navs\">\n            <a class=\"nav-link\" href=\"#\">\n                <ng-container *ngIf=\"linkTemplate; else noTemplate\"></ng-container>\n                <<ng-template #noTemplate>\n                    {{ link }}\n                </ng-template>\n            </a>\n</li>\n    </ul>\n    "
        })
    ], TabContainerComponent);
    return TabContainerComponent;
}());
exports.TabContainerComponent = TabContainerComponent;
