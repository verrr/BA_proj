import {Component, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'app-page-section-migrate',
  templateUrl: './page-section-migrate.component.html',
  styleUrls: ['./page-section-migrate.component.sass']
})
export class PageSectionMigrateComponent implements OnInit {
  private scrollValue: any;
  private elementToMove : HTMLElement;

constructor(){

}

ngOnInit(){

}
  /*@HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.scrollValue = window.pageYOffset;
    this.elementToMove = document.getElementById('migrateButton');
    console.log(this.scrollValue);
    if (this.scrollValue >=3600){
      this.elementToMove.style.transform = (this.scrollValue/2);
    }
  }*/


}
