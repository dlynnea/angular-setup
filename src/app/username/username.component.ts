import { Component } from '@angular/core';

@Component({
    selector: 'app-username',
    templateUrl: './username.component.html',
    styleUrls: ['./username.component.css']
})

export class UsernameComponent {
    username = '';
    creationUser = 'No user created';

    onCreateUser() {
        this.creationUser = 'Your username has been created!';
    }

    onUsername() {
        this.username = (<HTMLInputElement>event.target).value;
    }
}