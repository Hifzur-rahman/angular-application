import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ServiceappService } from '.././serviceapp.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewupdate',
  templateUrl: './viewupdate.component.html',
  styleUrls: ['./viewupdate.component.css']
})
export class ViewupdateComponent implements OnInit {
  [x: string]: any;


  data:any
  updatedata:any
  updatedItem: any
  IsForUpdate: boolean = false; 


  edit_data;
  index;
  updated:any;


  constructor(public activated: ActivatedRoute, public serviceapp: ServiceappService, public location: Location) { }

  ngOnInit(): void {

    // this.updatedata = this.serviceapp.newmy_array;  
    // console.log("ViewUpdate >>>",this.updatedata);

    this.activated.queryParams.subscribe(x=>{
      console.log("Checking ActivatedRoute>>>>>", x);
      if(x){
        this.serviceapp.newmy_array.find(e => e.email === x.email);
        console.log("Checking Email>>>>", this.serviceapp.newmy_array);
        this.indexs = this.serviceapp.newmy_array.findIndex(s => s.email === x.email);
        this.updated = this.serviceapp.newmy_array[this.indexs];
        console.log("Checking Indexs",this.indexs);
        console.log("Checking Updated",this.updated);
      }
    })




    
  }

   // When user clicks on update button to submit updated value  
   UpdateItem() {  
   this.serviceapp.newmy_array.splice(this.indexs, 1, this.updated);
   console.log("Checking Data Update>>>>>", this.serviceapp.newmy_array[0]);



    // let data = this.updatedItem;  
    // for (let i = 0; i < this.serviceapp.newmy_array.length; i++) {  
    //   if (i == data) {  
    //     this.serviceapp.newmy_array[i].firstname = this.updatedata.firstname;  
    //   }  
    // }  
    // this.IsForUpdate = false;  
    // this.updatedata = {};  
  } 

  


  Goback() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
