import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styles: []
})
export class PageComponent implements OnInit {
  markdownPath: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const pageName = params.get('name');
      this.markdownPath = `assets/markdown/${pageName}.md`;
    });
  }
}
