import { Component, OnInit } from '@angular/core';
import { ServiceappService } from '.././serviceapp.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit  {

  

  data:any
  model2:any;
 
  

  constructor(public serviceapp: ServiceappService, public location: Location, public route: Router) { }




  ngOnInit(): void {

    this.data = this.serviceapp.newmy_array;  
    console.log("hey checking data",this.data);
  }

    // Edit Code Comes here
  //   EditItem(i) {

  //     // this.model2.firstname = this.data[k].firstname;
  //     // this.model2.lastname = this.data[k].lastname;
  //     // this.model2.password = this.data[k].password;
  //     // this.model2.confrimpassword = this.data[k].confrimpassword;
  //     // this.model2.mobile = this.data[k].mobile;
  //     // this.model2.zip = this.data[k].zip;
  //     // this.myValue = k;

  //     this.data[i]
  //     this.route.navigateByUrl('viewupdate')
  //     console.log('Edititem>>>>>>>',this.data[i]);

  //     // console.log(i,this.serviceapp.newmy_array[i],document.getElementById('hiddenID'))
  //     // this.data = this.serviceapp.newmy_array[i]; 
  //     // this.data.firstname = this.serviceapp.newmy_array[i].firstname; 
  //     // this.data.lastname = this.serviceapp.newmy_array[i].lastname; 
  //   // // this.data.password = this.serviceapp.newmy_array[i].password; 
  //   // // this.data.confrimpassword = this.serviceapp.newmy_array[i].confrimpassword; 
  //   // // this.data.mobile = this.serviceapp.newmy_array[i].mobile;  
  //   // this.updatedItem = i;  
  //   // this.IsForUpdate = true;  

  //     console.log('index >>>>>>>',i);

    
  // } 


  onedit(email){
    this.route.navigate(['viewupdate'],{
      queryParams:{
        email,
      }
    })
    console.log("Checking Email", email);
  }


    // To delete specific item  
    DeleteItem(i: any) {
      console.log('delete',i,this.data)  
      this.data.splice(i, 1);  
    }  

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

 
}
