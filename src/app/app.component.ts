import { Component } from '@angular/core';
import { debug } from 'util';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MajorBlog';

  public constructor() {
    console.log("Launching AppComponent");
  }
}
