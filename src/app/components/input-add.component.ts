import { ChangeDetectionStrategy, Component, OnInit, output, signal } from '@angular/core';
import { Item } from '../models/items';
import { CustomInputComponent } from './custom-input.component';

@Component({
    standalone: true,
    selector: 'app-input-add',
    template: `
<app-custom-input [(value)]="inputValue"></app-custom-input>
<button (click)="addClick()">Adicionar</button>`,
    imports: [
        CustomInputComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputAddComponent implements OnInit {

    add = output<Item>();

    protected inputValue = signal<string>('');

    constructor() { }

    ngOnInit(): void { }

    addClick() {
        this.add.emit({
            name: this.inputValue()
        });
        this.inputValue.set('');
    }

}
