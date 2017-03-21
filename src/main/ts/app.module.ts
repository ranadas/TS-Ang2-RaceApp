import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PonyRacerAppComponent} from './app.component';
import {RanaDasAppComponent} from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations:[PonyRacerAppComponent, RanaDasAppComponent],
    bootstrap: [PonyRacerAppComponent, RanaDasAppComponent]
})
export class AppModule {

}