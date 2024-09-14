import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  markdownPath: string;
  rawMarkdown: string = '';  // To store raw markdown content
  showRaw: boolean = false;  // Toggle between raw and rendered markdown view

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const pageName = this.route.snapshot.paramMap.get('name');
    this.markdownPath = `assets/markdown/${pageName}.md`;

    // Fetch the raw markdown content
    this.http.get(this.markdownPath, { responseType: 'text' }).subscribe(data => {
      this.rawMarkdown = data;
    }, error => {
      console.error("Error fetching markdown file: ", error);
    });
  }

  toggleView(): void {
    this.showRaw = !this.showRaw;
  }
}
