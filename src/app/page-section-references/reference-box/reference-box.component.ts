import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import {ServerService} from '../../server.service';

@Component({
  selector: 'app-reference-box',
  templateUrl: './reference-box.component.html',
  styleUrls: ['./reference-box.component.sass']
})
export class ReferenceBoxComponent implements OnInit {

    reference: object;

  constructor(private serverService: ServerService) {

  }

  onGet() {
    this.serverService.getReferences()
      .subscribe(
        (response: Response) => {
          this.reference = response.json();
          console.log(this.reference);
        },
        (error) => console.error(error)
      );
  }
ngOnInit() {
    this.onGet();
    }

}
