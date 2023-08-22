import { Injectable } from '@angular/core';

export interface Item {
  id: number,
  content: string,
  isChecked: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  getItems(): Item[] {
    const localStorageArray = Object.entries(localStorage);

    const result = localStorageArray.map(([key, value]) => JSON.parse(value));

    return result;
  }

  addItem(item: Item) {
    localStorage.setItem(`${item.id}`, JSON.stringify({ id: item.id, 'content': item.content, 'isChecked': item.isChecked }));
  }

  deleteItem(id: number) {
    localStorage.removeItem(`${id}`);
  }

  checkItem(todo: Item) {
    localStorage.removeItem(`${todo.id}`);
    localStorage.setItem(`${todo.id}`, JSON.stringify({ id: todo.id, 'content': todo.content, 'isChecked': !todo.isChecked }));
  }

  updateItem(todo: Item, text: string) {
    localStorage.removeItem(`${todo.id}`);
    localStorage.setItem(`${todo.id}`, JSON.stringify({ id: todo.id, 'content': text, 'isChecked': todo.isChecked }));
  }

  clearTodo() {
    localStorage.clear();
  }
}
