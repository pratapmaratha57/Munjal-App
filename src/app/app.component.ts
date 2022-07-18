import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VendorAppPro';
  headers=new Headers();
  header = new HttpHeaders();
  // this.headers.append('Access-Control-Allow-Origin', '*');
  // this.header.set('Access-Control-Allow-Origin', '*');
}
