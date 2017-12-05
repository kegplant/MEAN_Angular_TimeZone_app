import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  data:any[]=[];
  info;
  constructor(private _DataService:DataService) { }

  ngOnInit() {
    this._DataService.data.subscribe(
      (data)=>{this.data=data;}
    );
  }
  onSubmit(){
    console.log(this.info);
    this._DataService.updateData(this.info);
  }
  
}
