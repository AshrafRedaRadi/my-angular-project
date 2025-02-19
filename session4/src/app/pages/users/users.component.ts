import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users : any = []

  handleUserEvent(eve : any){
    this.users.push(eve)
    console.log(this.users)
  }
  // تعديل الاسم عند الضغط على Edit
  editUser(index: number) {
    const newName = prompt('Enter new name:', this.users[index].userName);
    if (newName !== null && newName.trim() !== '') {
      this.users[index].userName = newName;
    }
  }

  // حذف الصف عند الضغط على Delete
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}
