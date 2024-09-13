import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  
  // Array to hold the pages from pages.json
  pages: any[] = [];

  constructor(private http: HttpClient) {}

  // This will run when the component is initialized
  ngOnInit() {
    // Fetch the pages.json file and populate the pages array
    this.http.get<any[]>('assets/pages.json').subscribe(data => {
      this.pages = data;
    });
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
