import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { Item } from '../models/items';

@Component({
    standalone: true,
    selector: 'app-list',
    template: `
<ul>
    @for (item of data(); track $index) {
        <li>{{item.name}}</li>
    } @empty {
        <li>Nenhum item foi adicionado!</li>
    }
</ul>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {

    data = input.required<Item[]>();

    constructor() { }

    ngOnInit(): void { }
}
