import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-combobox',
  templateUrl: './multi-combobox.component.html',
  styleUrls: ['./multi-combobox.component.scss']
})
export class MultiComboboxComponent {

  public levelOneList = [];

  public objectOne = {
    value: '',
    plus: true,
    minus: true,
    levelTwoList: [],
    levelThreeList: []
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
    this.resetPlus('levelOneList');
    this.levelOneList.push({
      value: '',
      plus: true,
      minus: true,
      levelTwoList: [],
      levelThreeList: []
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

  public addThree( leOne ) {
    
    leOne.levelThreeList.forEach(control => {
      control.plus = false;
    });

    leOne.levelThreeList.push({
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

  public resetPlus( listReference ) {
    this[listReference] = this[listReference].map(control => {
      control.plus = false;
      return control;
    });
  }

  public levelOneChange(levelName, item) {
    ['levelTwoList', 'levelThreeList'].forEach(dropdownName => {
      const index = this.levelOneList.indexOf(item);
      this.levelOneList[index][dropdownName].push({
        key: '',
        values: [],
        plus: true,
        minus: true
      });
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
    controlList[controlList.length-1].plus = true;
  }

}
