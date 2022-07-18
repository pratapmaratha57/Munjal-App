import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';
// import * as XLSX from 'xlsx';

import * as XLSX from 'xlsx';
@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
  users: any=[];
  fileName= 'ExcelSheet.xlsx';
  constructor(public srv:ServiceService) { }

  ngOnInit(): void {
    this.srv.poadmin().subscribe((data)=>{
      this.users=data;
      console.log(this.users);
    })
  }

  print(){
    window.print();
  }
  exportexcel()
  {
     /* pass here the table id */
     let element = document.getElementById('exceltable');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
     /* save to file */  
     XLSX.writeFile(wb, this.fileName);
  }

}
