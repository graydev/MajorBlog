import { Component } from '@angular/core';
import { User } from '../_models';

@Component({
    selector: 'app-login-widget',
    templateUrl: './login-widget.component.html'
})
/** loginWidget component*/
export class LoginWidgetComponent {
    /** loginWidget ctor */
    constructor() {

  }
  signedIn: boolean;
  currentUser: User;
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser != null) {
      this.signedIn = true;
    }
  }
}
