import { Component } from '@angular/core';
import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons';
import { Item, TodoDataService } from '../todo-data.service';
@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent {
  constructor(private todoService: TodoDataService) { }

  listOfTodos = this.todoService.getItems();
  value = '';

  faEdit = faEdit;
  faRemove = faRemove;

  editTodoId: number | undefined;

  keyPressEvent(event: any) {
    if (event.key === 'Enter') {
      const id = Math.floor(Math.random() * 1000);

      this.todoService.addItem({
        id,
        isChecked: false,
        content: event.target.value
      });

      this.value = '';
      this.listOfTodos = this.todoService.getItems();
    } else {
      this.value = event.target.value;
    }
  }

  deleteItem(item: number) {
    this.todoService.deleteItem(item);
    this.listOfTodos = this.todoService.getItems();
  }

  checkItem(todo: Item) {
    this.todoService.checkItem(todo);
    this.listOfTodos = this.todoService.getItems();
  }

  editItem(id: number) {
    this.editTodoId = id;
  }

  updateItem(event: any, todo: Item) {
    if (event.key === 'Enter') {
      this.todoService.updateItem(todo, event.target.value);
      this.editTodoId = undefined;
      this.listOfTodos = this.todoService.getItems();
    }
  }
}
