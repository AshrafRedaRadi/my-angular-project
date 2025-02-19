import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  @Output() userEvent = new EventEmitter();
  model = {
    userName: '',
    userEmail: '',
    UserID: '',
  };

  handleClick() {
    if (this.model.userName && this.model.userEmail && this.model.UserID) {
      this.userEvent.emit({ ...this.model });

      // تفريغ المدخلات  بعد الإرسال
      this.model = { userName: '', userEmail: '', UserID: '' };
    } else {
      alert(' Enter your data!');
    }
  }
}
