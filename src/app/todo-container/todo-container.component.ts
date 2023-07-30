import { Component } from '@angular/core';
import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent {
  listOfTodos = this.todoService.getItems();

  constructor(private todoService: TodoDataService) { }

  faEdit = faEdit;
  faRemove = faRemove;
  value = '';

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
}
