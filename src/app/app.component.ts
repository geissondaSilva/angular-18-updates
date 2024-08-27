import { CommonModule } from '@angular/common';
import { Component, computed, effect, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputAddComponent } from './components/input-add.component';
import { ListDetailsComponent } from './components/list-details.component';
import { ListComponent } from './components/list.component';
import { Item } from './models/items';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    ListDetailsComponent,
    InputAddComponent,
    ListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  protected list = signal<Item[]>([]);

  protected quantidade: Signal<number>;

  constructor() {
    this.quantidade = computed(() => this.list().length);
    effect(() => {
      console.log(`A lista possui ${this.quantidade()} itens!`)
    });
  }

  protected add(item: Item) {
    this.list.update(value => [...value, item])
  }

  protected limpar() {
    this.list.set([]);
  }

}
