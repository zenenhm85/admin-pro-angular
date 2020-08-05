import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent implements OnInit {
  
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('value') progress: number = 10;
  @Input() btnClass:string = 'btn-primary';

  @Output('value') outValue: EventEmitter<number> = new EventEmitter<number>();

  changeValue(value:number){
    
    if(this.progress + value >100){
      this.outValue.emit(100);
      return this.progress = 100;
    }
    if(this.progress + value < 0){
      this.outValue.emit(0);
      return this.progress = 0;
    }
    this.progress+= value;
    this.outValue.emit(this.progress);    
  }
  onChange(value:number){
    
    if(value>=100){
      this.progress = 100;
    }
    else if(value <= 0){
      this.progress = 0;
    }
    else{
      this.progress = value;
    }
    this.outValue.emit(this.progress);

  }

}
