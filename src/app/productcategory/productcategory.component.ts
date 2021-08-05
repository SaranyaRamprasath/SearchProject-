import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/models/productlist';

@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrls: ['./productcategory.component.css']
})
export class ProductcategoryComponent implements OnInit {

  @Input()
category : string;

@Input()
categoryItems : Product[];

  constructor() { }

  ngOnInit(): void {
  }

}
