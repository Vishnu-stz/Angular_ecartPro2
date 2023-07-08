import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

	pid : any	
	pdata : any = {}

	// acrivateRoute -- for getting data from Url
	constructor( private ar : ActivatedRoute , private ps : ProductService , private router : Router)  { }

  	ngOnInit(): void {
   

	this.ar.params.subscribe((data : any) => {
		// console.log(data.id);

		this.pid = data.id
		console.log(this.pid);
		
		}
	)
		
	// api call
	this.ps.getproduct(this.pid).subscribe((result : any) => {
		this.pdata = result
		
	})	

	
	}

	deleteProduct() {
		this.ps.deleteProduct(this.pid).subscribe((result : any) => {
			alert("Product Deleted")
			this.router.navigateByUrl("")
		})

	}


}
