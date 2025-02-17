import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    { name: 'Ashraf Reda Radi', address: 'Minya' },
    { name: 'Ahmed Reda Radi', address: 'Minya' },
    { name: 'Mahmoud Reda Radi', address: 'Minya' },
    { name: 'Mohamed Reda Radi', address: 'Minya' },
    { name: 'Hassan Reda Radi', address: 'Minya' },
    { name: 'Ebrahim Reda Radi', address: 'Minya' },
    { name: 'Amr Reda Radi', address: 'Minya' },
    { name: 'Hazem Reda Radi', address: 'Minya' },
    { name: 'Omar Reda Radi', address: 'Minya' },
    { name: 'Hamza Reda Radi', address: 'Minya' }
  ];
  // search filter by name
  filteredUsers = [...this.users];  // spread operator for assigned a copy

  filterUsers(event: any) {
    const search = event.target.value.toLowerCase();

    if (search.length === 0) {
      this.filteredUsers = [...this.users]; // Show all users when input is empty
    } else {
      this.filteredUsers = this.users.filter(user =>
        user.name.toLowerCase().includes(search)
      );
    }
  }
}
