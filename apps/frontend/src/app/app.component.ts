import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'nodeproj-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  data = this.service.getData();

  constructor(private service: AppService) {}
}
