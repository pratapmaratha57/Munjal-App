import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-mng-admins',
  templateUrl: './mng-admins.component.html',
  styleUrls: ['./mng-admins.component.css']
})
export class MngAdminsComponent implements OnInit {

  users: any=[];
  constructor(public mngadminsrv:ServiceService) { }

  ngOnInit(): void {
    this.mngadminsrv.mngsupplier().subscribe((data)=>{
     this.users=data;
     console.log(data);
 })
}
}
