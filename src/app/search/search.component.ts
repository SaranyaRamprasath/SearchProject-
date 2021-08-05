import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText : string = "";
  constructor() { }
  @Output()
  searchKeyUp: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  checkStock: EventEmitter<boolean> = new EventEmitter<boolean>();


  ngOnInit(): void {
  }

  onKeyUp(){
    this.searchKeyUp.emit(this.searchText);
  }

  
  onCheckBoxChecked($event)
  {
    this.checkStock.emit($event.target.checked);
  }
  

}
