import { Component, OnInit } from '@angular/core';
import {PageSectionModel} from "./page-section.model";

@Component({
  selector: 'app-page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.css']
})
export class PageSectionComponent implements OnInit {
sections: PageSectionModel[] = [
  new PageSectionModel('promo', 'firstSection', 'purple'),

];
  constructor() { }

  ngOnInit() {
  }

}

