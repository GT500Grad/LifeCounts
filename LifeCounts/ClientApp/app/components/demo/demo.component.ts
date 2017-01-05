import { Component } from '@angular/core';

@Component({
    selector: 'demo',
    template: require('./demo.component.html')
})
export class DemoComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
