import { Component , OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

	productsArray : any = []
	catagoryArray : any = []
	searchString  : any = ""

	constructor(private ps : ProductService) { }

	ngOnInit(): void {
   
		this.ps.getAllproduct().subscribe((result : any) => {

		this.productsArray = result
		console.log(this.productsArray);
		this.catagoryArray = this.productsArray
	  
			this.ps.search.subscribe((value : any) => {
				// console.log(value);
				this.searchString=value

			})

		})

 	}



	catagoryProduct(catId : any) {

		this.catagoryArray = this.productsArray.filter((item : any) => item.catagory == catId || catId == "" )
		console.log(this.catagoryArray);
		
	}


	

}
