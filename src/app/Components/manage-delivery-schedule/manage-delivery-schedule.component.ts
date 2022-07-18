import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-delivery-schedule',
  templateUrl: './manage-delivery-schedule.component.html',
  styleUrls: ['./manage-delivery-schedule.component.css']
})
export class ManageDeliveryScheduleComponent implements OnInit {
 users:any=[];
 istoken:any;
  constructor(public mngdelService:ServiceService) { }

  ngOnInit(): void {
    this.mngdelService.mngdelschedule().subscribe((users)=>{
      this.users=users;
      console.log(users);
    });
  }
  selecteddelivery(r:any){
    localStorage.setItem("selectedDSID",r);
    console.log(localStorage.getItem("selectedDSID"));
    alert(localStorage.getItem("selectedDSID")+" is selected Delivery Schedule ID");
  }
}
