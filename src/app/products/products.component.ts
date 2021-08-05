import { Component, Input, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product } from 'src/models/productlist';
import { ProductCategory } from 'src/models/productCategory';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductResultComponent implements OnInit {
  
 
  
  productSource : Product[];
  @Input()
  electronicsItems : Product[];
  @Input()
  SportsGoods: Product[];

 
  productCategoryList : ProductCategory[];
 

  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {
    this.httpService.get('./assets/productlist.json').subscribe(
      data => {
        this.productSource = data as Product[];// Actual complete data.       
       this.setCategoriesData();
      
      },
      
    );
  }

  onSearchKeyUp($searchText:string){

    if($searchText == ""){
      this.setCategoriesData();
    }
    else{ 
      let filteredElectronicItems = this.electronicsItems.filter(p=>p.name.toLowerCase().startsWith($searchText.toLowerCase()));
      let filteredSportsGoodsItems = this.SportsGoods.filter(p=>p.name.toLowerCase().startsWith($searchText.toLowerCase()));
  
      this.productCategoryList = [{ categoryName:"Electronics", products : filteredElectronicItems  }, 
      {categoryName:"Sports Goods", products : filteredSportsGoodsItems }];
    }
   
  }

  setCategoriesData() 
  {
    this.electronicsItems = this.productSource.filter(p=>p.category== "Electronics");
    this.SportsGoods = this.productSource.filter(p=>p.category =="Sporting Goods");

    this.productCategoryList = [{ categoryName:"Electronics", products : this.electronicsItems  }, 
    {categoryName:"Sports Goods", products : this.SportsGoods }];

  }

  onCheckStock($checked : boolean){
    if($checked){
      let filteredElectronicItems = this.electronicsItems.filter(p=>p.stocked);
      let filteredSportsGoodsItems = this.SportsGoods.filter(p=>p.stocked);
  
      this.productCategoryList = [{ categoryName:"Electronics", products : filteredElectronicItems  }, 
      {categoryName:"Sports Goods", products : filteredSportsGoodsItems }];
    }
    else {
      this.setCategoriesData();
    }
   
  }

}
