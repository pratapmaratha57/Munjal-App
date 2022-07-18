import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewschedulesupplier',
  templateUrl: './viewschedulesupplier.component.html',
  styleUrls: ['./viewschedulesupplier.component.css']
})
export class ViewschedulesupplierComponent implements OnInit {
  public singledelivery:any;
  public users1:any=[];
  constructor(public viewdeliveryserv:ServiceService) { }
  ngOnInit(): void {
    this.singledelivery=localStorage.getItem("selectedDSID");
    console.log(this.singledelivery);
    this.viewdeliveryserv.viewdelivery(this.singledelivery).subscribe((data)=>{
      this.users1=data;
      console.log(this.users1);
    })
  }

}
