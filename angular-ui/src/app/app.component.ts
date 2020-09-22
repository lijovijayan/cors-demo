import { Component } from '@angular/core';
import { APIService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg: string = '';
  constructor(private apiService: APIService) { }
  requestToServer(port: number) {
    this.apiService.requestToServer(`http://127.0.0.1:${port}`).subscribe((res) => {
      this.msg = `${res}`;
      console.log(`${res}`);
    }, () => {
      console.log("error while communicating with server 1");
    })
  }
}
