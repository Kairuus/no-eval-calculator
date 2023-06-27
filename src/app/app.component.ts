import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  toshow = '0'
  currentValue = ''
  firstOperand: number = 0
  operator: string = ''
  newValue: string = ''
  result: number = 0

  insertNumber(num: string){
    if(this.operator !== ''){
      this.newValue = this.newValue + num
      this.currentValue = this.newValue
    }else{
    this.currentValue = this.currentValue + num
    }
    this.toshow = this.currentValue

  }

  insertOperator(op: string){
    if(this.result !== 0){
      this.firstOperand = this.result
    }else{
    this.firstOperand = Number(this.currentValue)
    }
    this.operator = op
    this.toshow = op
    this.newValue = ''

  }

  calculate(){
    if(this.operator === '+'){
      this.result = this.firstOperand + Number(this.newValue)
    }
    if(this.operator === '-'){
      this.result = this.firstOperand - Number(this.newValue)
    }
    if(this.operator === '*'){
      this.result = this.firstOperand * Number(this.newValue)
    }
    if(this.operator === '/'){
      this.result = this.firstOperand / Number(this.newValue)
    }

    this.toshow = this.result.toString()

    this.firstOperand = 0
    this.operator = ''
    this.newValue = ''
  }

  clear(){
    this.toshow = '0'
    this.currentValue = ''
    this.firstOperand = 0
    this.operator = ''
    this.newValue = ''
    this.result = 0
  }

  clearLast(){
    this.currentValue = this.toshow.slice(0, -1)
    this.toshow = this.currentValue
    this.result = 0
    this.newValue = ''
  }
}
