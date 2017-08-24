import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummie',
  templateUrl: './dummie.component.html',
  styleUrls: ['./dummie.component.css']
})
export class DummiesComponent implements OnInit{

  allowNewDummies = false;
  dummyCreationStatus = 'No dummy was created';
  dummyName = '';
  dummyCreated = false;
  constructor(){

    setTimeout(() => {
      this.allowNewDummies = true;

    }, 2000);
  }

ngOnInit(){
}

  onCreateDummy(){
    this.dummyCreated = true;
    this.dummyCreationStatus = 'Dummy was created, name is: '+ this.dummyName;
  };


}
