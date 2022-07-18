import { CommonModule } from '@angular/common';
import { EditAdminComponent } from './Admin/edit-admin/edit-admin.component';
import { ViewDeliveryScheduleComponent } from './Admin/view-delivery-schedule/view-delivery-schedule.component';
import { BrowserModule } from '@angular/platform-browser';
import { ViewComponent } from './Components/view/view.component';
import { LoginComponent } from './Components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { POComponent } from './Components/po/po.component';
import { ViewPODetailsComponent } from './Components/view-podetails/view-podetails.component';
import { ManageDeliveryScheduleComponent } from './Components/manage-delivery-schedule/manage-delivery-schedule.component';
import { ManageInvoiceDetailsComponent } from './Components/manage-invoice-details/manage-invoice-details.component';
import { TrackdeliveryComponent } from './Components/trackdelivery/trackdelivery.component';
import { ManagecircularComponent } from './Components/managecircular/managecircular.component';
import { ChangepasswordComponent } from './Components/changepassword/changepassword.component';
import { ViewInvoiceDetailsComponent } from './Components/view-invoice-details/view-invoice-details.component';
import { AddInvoiceComponent } from './Components/add-invoice/add-invoice.component';
import { ViewcircularComponent } from './Components/viewcircular/viewcircular.component';
import { ViewGRNDetailsComponent } from './Components/view-grndetails/view-grndetails.component';
import { MngSuppliersComponent } from './Admin/mng-suppliers/mng-suppliers.component';
import { PurchaseOrderComponent } from './Admin/purchase-order/purchase-order.component';
import { MngDeliveryScheduleComponent } from './Admin/mng-delivery-schedule/mng-delivery-schedule.component';
import { MngInvoiceDetailsComponent } from './Admin/mng-invoice-details/mng-invoice-details.component';
import { ManageCircularComponent } from './Admin/manage-circular/manage-circular.component';
import { ChangePassComponent } from './Admin/change-pass/change-pass.component';
import { MngAdminsComponent } from './Admin/mng-admins/mng-admins.component';
import { ReportsComponent } from './Admin/reports/reports.component';
import { EditSuppliersComponent } from './Admin/edit-suppliers/edit-suppliers.component';
import { ViewPoDetailsComponent } from './Admin/view-po-details/view-po-details.component';
import { AddDeliveryScheduleComponent } from './Admin/add-delivery-schedule/add-delivery-schedule.component';
import { ViewInvoiceComponent } from './Admin/view-invoice/view-invoice.component';
import { EditCircularComponent } from './Admin/edit-circular/edit-circular.component';
import { ViewCircularComponent } from './Admin/view-circular/view-circular.component';
import { ViewschedulesupplierComponent } from './Components/viewschedulesupplier/viewschedulesupplier.component';
import { AddadminComponent } from './Admin/addadmin/addadmin.component';
import { UpdateDeliveryScheduleComponent} from './Admin/update-delivery-schedule/update-delivery-schedule.component';
import { PaymentAdviceComponent } from './Admin/payment-advice/payment-advice.component';
import { PaymentDetailsComponent } from './Admin/payment-details/payment-details.component';
import { BinInformationComponent } from './Admin/bin-information/bin-information.component';


import { RegistrationComponent } from './registration/registration.component';
// import { RecoverPasswordComponent } from './recover-password/recover-password.component';

const routes: Routes = [
  {
    path: '',
    component:LoginComponent
  },
    {
    path:'register',
    component:RegistrationComponent
  },
  // {
  //   path:'recoverpwd',
  //   component:RecoverPasswordComponent
  // },
  {
    path:'',
    component:ViewComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'po',component:POComponent},
      {path:'podetails',component:ViewPODetailsComponent},
      {path:'mngdelivery',component:ManageDeliveryScheduleComponent},
      {path:'mnginvoice',component:ManageInvoiceDetailsComponent},
      {path:'trackdelivery',component:TrackdeliveryComponent},
      {path:'mngcircular',component:ManagecircularComponent},
      {path:'chngpass',component:ChangepasswordComponent},
      {path:'viewdelivery',component: ViewschedulesupplierComponent},
      {path:'viewinvoice',component:ViewInvoiceDetailsComponent},
      {path:'addinvoice',component:AddInvoiceComponent},
      {path:'viewcircular',component:ViewcircularComponent},
      {path:"grn",component:ViewGRNDetailsComponent},
      
      {path:"addadmin",component:AddadminComponent},
      {path:"editadmin",component:EditAdminComponent},
      {path:"mngadmin",component:MngAdminsComponent},
      {path:"mngsupplier",component:MngSuppliersComponent},
      {path:"editsupplier",component:EditSuppliersComponent},
      {path:"poadmin",component:PurchaseOrderComponent},
      {path:"purchasedetails",component:ViewPoDetailsComponent},
      {path:"mngdeladmin",component:MngDeliveryScheduleComponent},
      {path:"updateschedule",component:UpdateDeliveryScheduleComponent},
      {path:"ViewDeliverySchedule",component:ViewDeliveryScheduleComponent},
      {path:"AddDeliverschedule",component:AddDeliveryScheduleComponent},
      {path:"mnginvoiceadmin",component:MngInvoiceDetailsComponent},
      {path:"viewinvoiceadmin",component:ViewInvoiceComponent},
      {path:"mngcircularadmin",component:ManageCircularComponent},
      {path:"virecircularadmin",component:ViewCircularComponent},
      {path:"editcircularadmin",component:EditCircularComponent},
      {path:"trackdeladmin",component:MngDeliveryScheduleComponent},
      {path:"chngpassadmin",component:ChangePassComponent},
      {path:"reports",component:ReportsComponent},
      {path:"paymentadvice",component:PaymentAdviceComponent},
      {path:"paymentdetails",component:PaymentDetailsComponent},
      {path:"bininformation",component:BinInformationComponent}

    ]
  },
 
];

@NgModule({
  imports: [BrowserModule,CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
