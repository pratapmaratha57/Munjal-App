import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  headers=new HttpHeaders();
  header=new HttpHeaders();
  public vid:any=sessionStorage.getItem("VendorID");
  token=localStorage.getItem("token");
  constructor(public http:HttpClient) { }

  login(user:any){
    return this.http.post("http://localhost:42182/BasePath/Authentication",user,{responseType: 'text'});
  }
  
  fetchPOUser(){
    console.log(this.token);
    this.header.append("Access-Control-Allow-Origin","http://local.mydomain.example:4200");
    return this.http.get('http://localhost:42182/BasePath/POMain/'+this.vid,
    {
          headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Access-Control-Allow-Headers":"content-type",
        "Authorization": `Bearer ${this.token}`
          }
    });
  }

  viewPOdetailsbyPOID(poid:any){
    return this.http.get('http://localhost:42182/BasePath/PODetail/'+poid,
    {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
  });
  }

  mngdelschedule(){
    return this.http.get('http://localhost:42182/BasePath/DSM/'+this.vid,
    {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
  });
  }

  viewdelivery(dsid:any){
    return this.http.get('http://localhost:42182/BasePath/DSDetail/'+dsid,
    {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
    }
    );
  }

 mngcircularmain(){
  return this.http.get('http://localhost:42182/BashPath/CMain/'+this.vid,
  {
    headers:{
  "Content-Type":"application/json",
  "Accept":"application/json",
  "Access-Control-Allow-Headers":"content-type",
  "Authorization": `Bearer ${this.token}`
    }
  }
  );
 }

  viewcircular(cid:any){
    return this.http.get('http://localhost:42182/BashPath/CDetail/'+cid,
    
    {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
    });
  }

  mnginvoice(){
    return this.http.get('http://localhost:42182/BasePath/InvoiceMains/'+this.vid,
    {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
    });
  }

  viewinvoice(invid:any)
  {
    return this.http.get('http://localhost:42182/BasePath/InvoiceDetails/'+invid,
    {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
    }
    );
  }

 fetchalldel(){
  return this.http.get('http://localhost:42182/BasePath/DSMain',
  {
    headers:{
  "Content-Type":"application/json",
  "Accept":"application/json",
  "Access-Control-Allow-Headers":"content-type",
  "Authorization": `Bearer ${this.token}`
    }
  }
  );
 }

  fetchallpo(){
    return this.http.get('http://localhost:42182/BasePath/POMain',
    {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
    });
  }
  fetchallvendor(){
    return this.http.get("http://localhost:42182/BasePath/AllVendor",
    {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
    }
    )
  }
  disabledsupplier(id:any){
   return this.http.get("http://localhost:42182/BasePath/AllVendor"+id); 
  }
  // adminpo(){
  //   return this.http.get('http://localhost:42182/BasePath/PO',
  //   {
  //     headers:{
  //   "Content-Type":"application/json",
  //   "Accept":"application/json",
  //   "Access-Control-Allow-Headers":"content-type",
  //   "Authorization": `Bearer ${this.token}`
  //     }
  //   });
  // }

  mngsupplier(){
     return this.http.get('http://jsonplaceholder.typicode.com/users');
  }
  poadmin(){
      return this.http.get('http://localhost:42182/BasePath/POMain',
      {
        headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Access-Control-Allow-Headers":"content-type",
      "Authorization": `Bearer ${this.token}`
        }
      });
  }
  mngadmin(){
     return this.http.get('http://jsonplaceholder.typicode.com/users');
  }
  mnginvoiceadmin(){
      return this.http.get('http://jsonplaceholder.typicode.com/users');
  }
  mngcirularadmin(){
     return this.http.get('http://jsonplaceholder.typicode.com/users');
  }
  viewcircularservice(){
     return this.http.get('http://jsonplaceholder.typicode.com/users');
  }


}
