import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-manage-invoice-details',
  templateUrl: './manage-invoice-details.component.html',
  styleUrls: ['./manage-invoice-details.component.css']
})
export class ManageInvoiceDetailsComponent implements OnInit {
   invoice:any=[];
   istoken:any;
  constructor(public mnginvoiceservice:ServiceService) { }

  ngOnInit(): void {
    this.mnginvoiceservice.mnginvoice().subscribe((data)=>{
      this.invoice=data;
      console.log(this.invoice);
    })
  }
  viewinvoice(invid:any){
 localStorage.setItem("invoiceid",invid);
 console.log(localStorage.getItem("invoiceid"));
 alert(invid+" is selected invoice ID");
  }
}
