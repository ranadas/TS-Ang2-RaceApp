import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ponyracer-app',
    template: '<h1 > PonyRacer!! </h1>'
})
export class PonyRacerAppComponent {
}


@Component({
    selector: 'ranadas-app',
    template: `
        <DIV>
            <h2>{{pageTitle}}</h2>
            <h4>a Component</h4>
        </DIV>
    `
})
export class RanaDasAppComponent implements OnInit {
    pageTitle: string = 'InStep Angular ';

    ngOnInit(): void {
        console.log(':)))');
    }
}