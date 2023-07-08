import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

	
	// Create an Object For Behaviour Subject
	search = new BehaviorSubject("")
	

	constructor( private http : HttpClient ) { }


	// api to get all products
	getAllproduct() {
	  return this.http.get('http://localhost:3000/products')
	}


	// api to get single product
	getproduct(pid : any) {
		return this.http.get('http://localhost:3000/products/' + pid)
	}

	
	// add product api
	addproduct(productObject : any) {
		return this.http.post('http://localhost:3000/products' , productObject)

	}

	
	// api to update product
	updateProduct(pid : any , productObject : any) {
		return this.http.put('http://localhost:3000/products/' + pid , productObject)
	}

	// api to delete product
	deleteProduct(pid : any) {
		return this.http.delete('http://localhost:3000/products/' + pid)
	}





}
