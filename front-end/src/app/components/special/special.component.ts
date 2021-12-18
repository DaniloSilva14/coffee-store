import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {

  flag: boolean = false;
  color: string = 'cup-white'

  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    if(this.flag) 
      this.flag=false;
    else  
      this.flag=true;

    console.log(this.flag);
  }

  getColor(newColor: string){
    this.color = newColor;
  }
}