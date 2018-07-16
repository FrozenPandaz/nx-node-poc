import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NxModule } from '@nrwl/nx';
import { AppInterceptor } from './app.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { initialState as appInitialState, appReducer } from './+state/app.reducer';
import { AppEffects } from './+state/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { initialState as usersInitialState, usersReducer } from './+state/users.reducer';
import { UsersEffects } from './+state/users.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, NxModule.forRoot(), StoreModule.forRoot(
  { app: appReducer },
  {
    initialState : { app : appInitialState },
    metaReducers : !environment.production ? [storeFreeze] : []
  }
), EffectsModule.forRoot([AppEffects]), !environment.production ? StoreDevtoolsModule.instrument() : [], StoreModule.forFeature('users', usersReducer, { initialState: usersInitialState }), EffectsModule.forFeature([UsersEffects])],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
