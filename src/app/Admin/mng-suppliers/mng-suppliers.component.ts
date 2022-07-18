import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mng-suppliers',
  templateUrl: './mng-suppliers.component.html',
  styleUrls: ['./mng-suppliers.component.css']
})
export class MngSuppliersComponent implements OnInit {
public allvendor:any=[];

  constructor(public srv:ServiceService) { }

  ngOnInit(): void {

    this.srv.fetchallvendor().subscribe((data)=>{
      this.allvendor=data;
      console.log(this.allvendor);
    })
  }

  disablesupplier(vid:any){
    //  this.srv.disabledsupplier(vid).subscribe(()=>{
    //   console.log(vid);
    //  })
    console.log(vid);
  }

}
