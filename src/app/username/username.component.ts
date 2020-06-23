import { Component } from '@angular/core';

@Component({
    selector: 'app-username',
    templateUrl: './username.component.html',
    styleUrls: ['./username.component.css']
})

export class UsernameComponent {
    username = '';
    creationUser = 'No user created';
    showSecret = false;
    log = [];

    onToggleCount() {
        this.showSecret = !this.showSecret;
        // this.log.push(this.log.length + 1);
        this.log.push(new Date())
    }

    onCreateUser() {
        this.creationUser = 'Your username has been created!';
    }

    onUsername() {
        this.username = (<HTMLInputElement>event.target).value;
    }

    onClick() {
        
    }
}