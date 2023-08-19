import { Component } from '@angular/core';
import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons';
import { TodoDataService } from '../todo-data.service';

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
      const id = this.listOfTodos.length > 0 ? this.listOfTodos[this.listOfTodos.length - 1].id + 1 : 0;

      this.todoService.addItem({
        id,
        isChecked: false,
        content: event.target.value
      });

      this.value = '';
    } else {
      this.value = event.target.value;
    }
  }

  deleteItem(item: number) {
    this.todoService.deleteItem(item);
  }

  checkItem(id: number) {
    this.todoService.checkItem(id);
  }

  editItem(id: number) {
    this.editTodoId = id;
  }

  updateItem(event: any, idTodo: number) {
    if (event.key === 'Enter') {
      this.todoService.updateItem(idTodo, event.target.value);
      this.editTodoId = undefined;
    }
  }
}
