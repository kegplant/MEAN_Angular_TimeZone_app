import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  today=Date.now();
  zone:string='PST';
  isVisible=true;
  zones=['PST','MST','CST','EST'];
  status={[this.zone]:true};
  changeTimeZone(newZone:string){
    this.status[this.zone]=false;    
    this.zone=newZone;
    this.status[newZone]=true;    
    this.isVisible=true;
    console.log(status)
  }
  clearTime(){
    this.isVisible=false;
    this.status[this.zone]=false;    
  }
  // clearTime(){//doesn't work
  //   this.zone=''
  // }
}  
