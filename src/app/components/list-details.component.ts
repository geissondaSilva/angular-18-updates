import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { Item } from '../models/items';

@Component({
    standalone: true,
    selector: 'app-list-details',
    template: `<p>{{quantidade()}} itens adicionados na lista!</p>
    <p>Detalhes: {{detalhes()}}</p>`,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDetailsComponent implements OnInit {

    quantidade = input.required<number>();

    /**
     * A funcionalidade de input com signal ainda esta em developer-preview,
     * ou seja, ainda não esta estável e pode sofrer mudanças.
     */
    detalhes = input('Nenhum item foi informado', {
        transform: (itens: Item[]) => itens.map(item => item.name).join(', '),
        alias: 'itens'
    });

    constructor() { }

    ngOnInit(): void { }
}
