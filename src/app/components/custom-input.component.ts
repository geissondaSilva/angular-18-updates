import { ChangeDetectionStrategy, Component, model, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'app-custom-input',
    template: `<input [(ngModel)]="value"/>`,
    imports: [FormsModule],
    styles: [``],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomInputComponent implements OnInit {

    /**
     * Model-input também é uma funcionalidade que esta em developer-preview
     * model-input não suporte a propriedade transforme de input-signal
     */
    value = model<string>();

    constructor() { }

    ngOnInit(): void { }
}
