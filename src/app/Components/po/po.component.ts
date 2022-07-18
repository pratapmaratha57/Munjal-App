import { Router } from '@angular/router';
import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-po',
  templateUrl: './po.component.html',
  styleUrls: ['./po.component.css']
})
export class POComponent implements OnInit {
 istoken:any;
 fileName:any="POExcelSheet.xlsx";
//  headers=new Headers();
 header = new HttpHeaders();
public users:any=[];

 exportexcel():void
  {
    let element = document.getElementById('exporttab');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
  }

 constructor(public poservice:ServiceService,public router:Router) { }
 ngOnInit(): void {
   this.istoken=localStorage.getItem("token");
    this.poservice.fetchPOUser().subscribe((users)=>{
      this.users=users;
      console.log(users);
    });
  }

  selectrow(r:any){
    // debugger;
    localStorage.setItem("selectedPOID",r);
    console.log(r);
    alert(r+" is selected POID");
  }

 

}
