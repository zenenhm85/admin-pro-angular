import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IncrementComponent } from './increment/increment.component';



@NgModule({
  declarations: [IncrementComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports:[    
    IncrementComponent
  ]
})
export class ComponentsModule { }
