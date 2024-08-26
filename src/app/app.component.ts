import { Component, computed, effect, model, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Item } from './models/items';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListDetailsComponent } from './components/list-details.component';
import { CustomInputComponent } from './components/custom-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    ListDetailsComponent,
    CustomInputComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  protected list = signal<Item[]>([]);
  protected inputValue = signal<string>('');

  item = '';

  protected quantidade: Signal<number>;

  constructor() {
    this.quantidade = computed(() => this.list().length);
    effect(() => {
      console.log(`A lista possui ${this.quantidade()} itens!`)
    })
  }

  protected add() {
    this.list.update(value => [...value, {name: this.inputValue()}])
    this.item = '';
  }

  protected limpar() {
    this.list.set([]);
  }

  onChangeInputValue(value: string | undefined) {
    console.log(`Input value has changed to ${value}`);
  }

}
