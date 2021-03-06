import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpModule} from '@angular/http';
import { RegisterPageModule } from '../pages/register/register.module';
import { RegisterPage } from '../pages/register/register';
import { ConnectionPageModule } from '../pages/connection/connection.module';
import { ConnectionPage } from '../pages/connection/connection';

// import { HelpPage } from '../pages/help/help';
import { AlertServiceProvider } from '../providers/alert-service/alert-service';
import { DevicesPageModule } from '../pages/devices/devices.module';
import { DevicesPage } from '../pages/devices/devices';
import { Network } from '@ionic-native/network';
import { Hotspot } from '@ionic-native/hotspot';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      platforms: {
        ios: {
          backButtonText: 'Voltar',
        }
      }
    }),
    LoginPageModule,
    HttpModule,
    HttpClientModule,
    RegisterPageModule,
    ConnectionPageModule,
    DevicesPageModule
    // HelpPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ConnectionPage,
    DevicesPage
    // HelpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    AlertServiceProvider,
    Network,
    Hotspot
  ]
})
export class AppModule {}
