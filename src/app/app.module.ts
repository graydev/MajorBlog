import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { AdminComponent } from './admin';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { GamesComponent  } from './games';
import { BlogComponent } from './blog';
import { RegisterComponent } from './register';
import { ArticleComponent } from './article';
import { LoginWidgetComponent } from './login-widget';
import { UnityContainerComponent } from './unity-container';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    ArticleComponent,
    LoginWidgetComponent,
    UnityContainerComponent,
    AppComponent,
    HomeComponent,
    GamesComponent,
    BlogComponent,
    AlertComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
