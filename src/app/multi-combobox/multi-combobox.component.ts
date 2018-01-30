import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-combobox',
  templateUrl: './multi-combobox.component.html',
  styleUrls: ['./multi-combobox.component.scss']
})
export class MultiComboboxComponent {

  public levelOneList = [];
  public levelThreeList = [];

  public objectOne = {
    value: '',
    plus: true,
    minus: true,
    levelTwoList: []
  };

  public objectTwo = {
    value: '',
    plus: true,
    minus: true
  };

  constructor() { 
    this.levelOneList.push(this.objectOne);
  }

  public addOne() {

    this.levelOneList = this.levelOneList.map(control => {
      control.plus = false;
      return control;
    });

    this.levelOneList.push({
      value: '',
      plus: true,
      minus: true,
      levelTwoList: []
    });
  }

  public addTwo( leOne ) {

    leOne.levelTwoList.forEach(control => {
      control.plus = false;
    });

    leOne.levelTwoList.push({
      key: '',
      values: [],
      plus: true,
      minus: true
    });
    
  }

  public addThree() {
    
    this.levelThreeList.forEach(control => {
      control.plus = false;
    });

    this.levelThreeList.push({
      key: '',
      values: [],
      plus: true,
      minus: true
    });
  }

  public addInput(inputControls) {
    inputControls.forEach(control => {
      control.plus = false;
    });

    inputControls.push({
      value: '',
      plus: true,
      minus: true
    })
  }

  public levelOneChange(levelName, item) {

    const index = this.levelOneList.indexOf(item);
    this.levelOneList[index].levelTwoList.push({
      key: '',
      values: [],
      plus: true,
      minus: true
    });

    this.levelThreeList.push({
      key: '',
      values: [],
      plus: true,
      minus: true
    });
  }

  public levelChange(item) {
    item.values.push({
      value: '',
      plus: true,
      minus: true
    });
  }

  minus(controlList, item) {
    const index = controlList.indexOf(item);
    controlList.splice(index, 1);
    if(controlList[controlList.length-1]) {
      controlList[controlList.length-1].plus = true;
    }
  }

}
