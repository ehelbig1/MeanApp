webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_foursquare_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_permission_guard__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_contact_contact_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_footer_footer_component__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */], },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["JsonpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__services_foursquare_service__["a" /* FoursquareService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__guards_permission_guard__["a" /* PermissionGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(181),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_foursquare_service__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(foursquareService, fb) {
        this.foursquareService = foursquareService;
        this.fb = fb;
        this.oauthToken = 'KMDE3Z5WV2YIWHE4JNGW41EVH4D01EZ2QDJYBMAF31BKSGD';
        this.form = fb.group({
            'keyword': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.searchVenues = function (form) {
        var _this = this;
        this.foursquareService.getLocation().subscribe(function (res) {
            var location = res.loc;
            _this.foursquareService.getVenues(location, form.keyword).subscribe(function (res) {
                _this.results = [];
                for (var i = 0; i < res.response.venues.length; i++) {
                    _this.results.push({
                        name: res.response.venues[i].name,
                        id: res.response.venues[i].id,
                        location: {
                            street: res.response.venues[i].location.formattedAddress[0],
                            cityState: res.response.venues[i].location.formattedAddress[1]
                        }
                    });
                }
                console.log(_this.results);
            });
        });
    };
    /*this.foursquareService.getVenues().subscribe(res => {
      console.log(res)
      console.log(res.response.venues[0].name)
      for(let i = 0; i < res.response.venues.length; i++){
        console.log(res.response.venues[i].name);
      }
    })*/
    DashboardComponent.prototype.getPhoto = function () {
        var _this = this;
        this.foursquareService.getVenuePhoto().subscribe(function (res) {
            console.log(res);
            console.log(res.response.photos.items[0].user.photo.suffix);
            _this.venuePhoto = res.response.photos.items[0].user.photo.suffix;
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(182),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_foursquare_service__["a" /* FoursquareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_foursquare_service__["a" /* FoursquareService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(183),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(184),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(fb, authService, router, flashMessage) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.form = fb.group({
            'username': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (user) {
        var _this = this;
        this.authService.login(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Login Successful!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(185),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage, fb) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.fb = fb;
        this.contact = false;
        this.contactForm = fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            'message': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.flashMessage.show('You are now logged out.', { cssClass: 'alert-warning', timeout: 3000 });
        this.router.navigate(['/']);
        return false;
    };
    NavbarComponent.prototype.sendMessage = function (form) {
        var _this = this;
        this.authService.sendMessage(form).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Your message was sent!', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show('Oh no, something went wrong!', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
        this.showContact();
    };
    NavbarComponent.prototype.showContact = function () {
        this.contact === false ? this.contact = true : this.contact = false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(186),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(187),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(fb, authService, flashMessages, router) {
        this.fb = fb;
        this.authService = authService;
        this.flashMessages = flashMessages;
        this.router = router;
        this.form = fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(30),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^(([a-zA-Z]{2,30})+[ ]+([a-zA-Z]{2,30})+)+$/)
                ])],
            'username': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(30),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^(?!.*?[\W])(?=.*?[a-zA-Z]|=.*?[A-Z]).{3,16}$/)
                ])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(40),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
                ])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(16),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^(?=.*?[a-zA-Z])(?=.*?[\d])(?=.*?[\W]).{8,16}$/)
                ])]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function (user) {
        var _this = this;
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessages.show('You have been successfully registered!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessages.show('Oh no, something went wrong!', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(188),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.login = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    //trying to get permission property from localStorage
    AuthService.prototype.loadPermission = function () {
        var permission = localStorage.getItem('user');
        this.userPermission = permission[permission];
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    //once permission is obtained check what it is
    AuthService.prototype.permission = function () {
        return 'admin';
    };
    AuthService.prototype.logout = function () {
        this.authToken = null,
            this.user = null,
            localStorage.clear();
    };
    AuthService.prototype.sendMessage = function (message) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/message', message, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PermissionGuard = (function () {
    function PermissionGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    PermissionGuard.prototype.canActivate = function () {
        if (this.authService.permission() === 'admin') {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    return PermissionGuard;
}());
PermissionGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], PermissionGuard);

var _a, _b;
//# sourceMappingURL=permission.guard.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "img {\n  margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "#contact {\n  background: rgba(50, 50, 50, 0.6);\n  position: fixed;\n  top: 15%;\n  left: 25%;\n  width: 50%;\n  padding: 50px;\n  border-radius: 5px;\n  box-shadow: 10px 10px 10px gray;\n  z-index: 3; }\n\n#contact-form {\n  width: 75%;\n  margin: auto;\n  color: white; }\n\n.contact-link:hover {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n<div class=\"footer\">\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "        <section id=\"contact\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-5 col-md-5 col-sm-5 col-xm-12\">\n                        <form>\n                            <h3>Contact Me</h3>\n                            <div class=\"form-group\">\n                                <label>Name: </label>\n                                <input class=\"form-control\" type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Name\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Email: </label>\n                                <input class=\"form-control\" type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Email\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Message: </label>\n                                <textarea class=\"form-control\" name=\"\" value=\"\" placeholder=\"Enter Name\"></textarea>\n                            </div>\n                            <button class=\"btn btn-default\">Submit</button>\n                        </form>\n                    </div>\n                    <div class=\"col-lg-7 col-md-7 col-sm-7 col-xm-12\">\n\n                    </div>\n                </div>\n            </div>\n        </section>"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashbord</h2>\n<h4>Search by keyword for venues near you!</h4>\n<span class=\"text-info\">eg. Coffee</span>\n\n<form [formGroup]='form' (ngSubmit)='searchVenues(form.value)' novalidate>\n    <div class=\"form-group\">\n        <input formControlName='keyword' class=\"form-control\" type=\"text\" name=\"keyword\" placeholder=\"search for...\" required>\n    </div>\n    <input class=\"btn btn-primary\" type=\"submit\">\n</form>\n\n<div class=\"panel\" *ngFor='let result of results'>\n    <h1 class=\"panel-head\">{{ result.name }}</h1>\n    <p>{{ result.id }}</p>\n    <ul>Location: \n        <li>{{ result.location.street }}</li>\n        <li>{{ result.location.cityState }}</li>\n    </ul>\n</div>\n\n<button (click)='getPhoto()'>Get Photo</button>\n\n<div>{{ venuePhoto }}</div>"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "        <footer>\n            <p class=\"text-center\">Copyright &copy; Evan Helbig 2017</p>\n        </footer>"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n<img class=\"img-responsive\" alt=\"MEAN Logo\" src=\"../../../../assets/img/mean.png\">\n  <div *ngIf=\"!authService.loggedIn()\">\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a><a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>MongoDB and Mongoose</h3>\n    <p>The foundation of any application is the database. This application makes use of MongoDB, a NoSql database. The mongoose framework is used to make connection and changes to the data.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>NodeJs and Express</h3>\n    <p>The server for this app was created using NodeJs and the Express framework. This server was built from the ground up and every request is handled by hand writted code.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular</h3>\n    <p>Everything you see on this website, the front-end, was created using the Angular framework. This site takes advantage of many of the modules and services provided with this framework.</p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form [formGroup]=\"form\" (ngSubmit)=\"login(form.value)\" novalidate>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input formControlName='username' type=\"text\" name=\"username\" class=\"form-control\" required>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input formControlName='password' type=\"password\" name=\"password\" class=\"form-control\" required>\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" [disabled]=\"form.invalid\">\n</form>\n"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "    <nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">MeanApp</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n            <li class=\"contact-link\"><a (click)=\"showContact()\">Contact</a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"logout()\" href=\"#\">Logout</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n\n        <section id=\"contact\" *ngIf=\"contact\">\n          <div id=\"contact-form\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xm-12\">\n                        <form [formGroup]=\"contactForm\" (ngSubmit)=\"sendMessage(contactForm.value)\">\n                            <h3>Contact Me</h3>\n                            <div class=\"form-group\">\n                                <label>Name: </label>\n                                <input formControlName=\"name\" class=\"form-control\" type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Name\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Email: </label>\n                                <input formControlName=\"email\" class=\"form-control\" type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Email\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Message: </label>\n                                <textarea formControlName=\"message\" class=\"form-control\" name=\"\" value=\"\" placeholder=\"Enter Name\"></textarea>\n                            </div>\n                            <button class=\"btn btn-default\">Submit</button>\n                        </form>\n                    </div>\n                    <div class=\"col-lg-7 col-md-7 col-sm-7 col-xm-12\">\n\n                    </div>\n                </div>\n            </div>\n          </div>\n        </section>\n"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">{{user.username}}</li>\n    <li class=\"list-group-item\">{{user.email}}</li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form [formGroup]=\"form\" (ngSubmit)=\"registerUser(form.value)\" novalidate>\n  <div class=\"form-group\" [ngClass]=\"{'has-error':(form.controls.name.dirty && form.controls.name.invalid), 'has-success':(form.controls.name.dirty && form.controls.name.valid)}\">\n    <label>Name</label>\n    <input formControlName='name' type=\"text\" name=\"name\" class=\"form-control\" required>\n    <p class=\"help-block\" *ngIf='form.controls.name.dirty && form.controls.name.invalid'>Please provide name in standard format. eg. John Doe</p>\n  </div>\n  <div class=\"form-group\" [ngClass]=\"{'has-error':(form.controls.username.dirty && form.controls.username.invalid), 'has-success':(form.controls.username.dirty && form.controls.username.valid)}\">\n    <label>Username</label>\n    <input formControlName='username' type=\"text\" name=\"username\" class=\"form-control\" required>\n    <ul class=\"help-block\" *ngIf='form.controls.username.dirty && form.controls.username.invalid'>\n      <li>Username must contain between 6 and 30 characters</li>\n      <li>It may contain letters and numbers</li>\n      <li>Cannot container special characters</li>\n    </ul>\n  </div>\n  <div class=\"form-group\" [ngClass]=\"{'has-error':(form.controls.email.dirty && form.controls.email.invalid), 'has-success':(form.controls.email.dirty && form.controls.email.valid)}\">\n    <label>Email</label>\n    <input formControlName='email' type=\"text\" name=\"email\" class=\"form-control\" required>\n    <p class=\"help-block\" *ngIf='form.controls.email.dirty && form.controls.email.invalid'>Please provide valid email address.</p>\n  </div>\n  <div class=\"form-group\" [ngClass]=\"{'has-error':(form.controls.password.dirty && form.controls.password.invalid), 'has-success':(form.controls.password.dirty && form.controls.password.valid)}\">\n    <label>Password</label>\n    <input formControlName='password' type=\"password\" name=\"password\" class=\"form-control\" required>\n    <ul class=\"help-block\" *ngIf='form.controls.password.dirty && form.controls.password.invalid'>\n      <li>Password must contain between 8 and 16 characters</li>\n      <li>It must contain letters and numbers</li>\n      <li>Must contain atleast 1 special character</li>\n    </ul>\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" [disabled]=\"form.invalid\">\n</form>\n"

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(94);


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoursquareService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoursquareService = (function () {
    function FoursquareService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.client_id = 'HP3TJGFYLBTQCLAH11PCM1LXXFXAF52WCX5WGQDFLDGFTCT4';
        this.client_secret = '5FANRGCB3IG323UQX3VBMZCPMT51HLHLR04X5Q5I0VFQWDIC';
    }
    FoursquareService.prototype.getLocation = function () {
        return this.http.get('http://ipinfo.io')
            .map(function (res) { return res.json(); });
    };
    FoursquareService.prototype.getVenues = function (location, keyword) {
        return this.http.get("https://api.foursquare.com/v2/venues/search?v=20161016&ll=" + location + "&query=" + keyword + "&intent=checkin&client_id=HP3TJGFYLBTQCLAH11PCM1LXXFXAF52WCX5WGQDFLDGFTCT4&client_secret=5FANRGCB3IG323UQX3VBMZCPMT51HLHLR04X5Q5I0VFQWDIC")
            .map(function (res) { return res.json(); });
    };
    FoursquareService.prototype.getVenuePhoto = function () {
        return this.http.get("https://foursquare.com/oauth2/authenticate?client_id=" + this.client_id + "&response_type=code&redirect_uri=https://www.meandev.me")
            .map(function (res) { return res.json(); });
    };
    return FoursquareService;
}());
FoursquareService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Jsonp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Jsonp"]) === "function" && _b || Object])
], FoursquareService);

var _a, _b;
//# sourceMappingURL=foursquare.service.js.map

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 93;


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(111);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(180),
        styles: [__webpack_require__(170)]
    })
], AppComponent);

;
//# sourceMappingURL=app.component.js.map

/***/ })

},[224]);
//# sourceMappingURL=main.bundle.js.map