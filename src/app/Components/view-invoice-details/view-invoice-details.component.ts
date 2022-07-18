import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-invoice-details',
  templateUrl: './view-invoice-details.component.html',
  styleUrls: ['./view-invoice-details.component.css']
})
export class ViewInvoiceDetailsComponent implements OnInit {
  public inv:any=[];
  public invid:any;
  public selectedPO:any;
  public selectedDS:any;
  public searchpo:any=0;
  public searcharr:any=[];
  public allpos:any=[];
  public alldel:any=[];
  // arrval=[2123,2929];
  constructor(public srv:ServiceService) { }

  ngOnInit(): void {
  this.srv.fetchallpo().subscribe((data)=>{
 this.allpos=data;
 console.log("All POS : "+this.allpos);

 this.srv.fetchalldel().subscribe((data)=>{
      this.alldel=data;
      console.log("All Delivery : "+this.alldel);
    })
  })


  this.invid=localStorage.getItem("invoiceid");
  console.log(this.invid);
    this.srv.viewinvoice(this.invid).subscribe((data)=>{
      this.inv=data;
      console.log(this.inv);
    })
  }


  serachpo(){
    this.searchpo=this.selectedPO;
  }
  changeevent(e:any){
 this.selectedPO=e.target.value;
 console.log(this.selectedPO);
  }
  changeev(e:any){
    this.selectedDS=e.target.value;
    console.log(this.selectedDS);
  }
}
