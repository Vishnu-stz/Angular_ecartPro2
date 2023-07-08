import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  
	constructor( private fb : FormBuilder , private ps : ProductService , private router : Router ) { }

  	ngOnInit(): void {

	} 


	// model Form for add
	addForm = this.fb.group({

		Pid 		: [''] ,
		Pname 		: [''] , 
		PcataId 	: [''] ,
		Pdesc 		: [''] ,
		Pprice 		: [''] ,
		Pis_avail 	: [''] ,
		PprodImg 	: [''] ,
		Prating 	: [''] ,
		Preview 	: [''] ,
		PvendorName	: [''] , 
		Pwarrenty 	: [''] 

	})


	add() {

		var path = this.addForm.value
		
		var proData = {

			id 			  : path.Pid ,
        	productName   :	path.Pname ,
        	catagory 	  :	path.PcataId ,
        	descriptions  :	path.Pdesc ,
        	price 		  :	path.Pprice ,
        	productImage  :	path.PprodImg ,
        	Rating 		  :	path.Prating ,
        	review 		  :	path.Preview ,
        	vendorName 	  :	path.PvendorName ,
        	warrenty 	  :	path.Pwarrenty

		}

		this.ps.addproduct(proData).subscribe((result : any) => {
			alert('Product Added :)')
			this.router.navigateByUrl("")
		})

	}



}
