import { Injectable } from '@angular/core';

interface Item {
  id: number,
  content: string,
  isChecked: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  items: Item[] = [];

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  deleteItem(id: number) {
    const index = this.items.findIndex(itemFilter => itemFilter.id === id);
    this.items.splice(index, 1);
  }

  checkItem(id: number) {
    const index = this.items.findIndex(itemFilter => itemFilter.id === id);
    this.items[index].isChecked = !this.items[index].isChecked;
  }

  updateItem(id: number, text: string) {
    const index = this.items.findIndex(itemFilter => itemFilter.id === id);
    this.items[index].content = text;
  }
}
