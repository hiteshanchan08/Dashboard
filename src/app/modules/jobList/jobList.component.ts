import {Component} from '@angular/core';
import {MaterialService} from "./../../material.service";
import {Material} from "./../../material";
import {Http} from "@angular/http";
/// <reference path="../jquery.d.ts"/>

@Component({
    selector:'jobList-list',
    moduleId: module.id,
    providers: [MaterialService],
    templateUrl: "./jobList.component.html"
})

export class JobListComponent{
    materials: Material[];
    errorMessage: string;
    searchText: string = "";
    constructor(private http: Http) {
        //this.materials = new Array<Material>();
    }
    public data: any[];
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";

   ngOnInit() {
      this.http.get("/app/data.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                    this.dataContent =  data.json();
                }, 2000);
            });
    }
    
    
    
    /* promise(data: Material[]) {
    
    for (var index = 0; index < data.length; index++) {
        let widthV:any = data[index].toq;
       
       $('.bar')[index].style.width = widthV+"%";
      if(data[index].status == "Error") {
          $('.slb-progress-indicator')[index].className = "slb-progress-indicator warning";
           $('.bar')[index].style.width = "100%";
      } else {
          $('.slb-progress-indicator')[index].className = "slb-progress-indicator positive"
      }
       
        
    }
    
} */
    
     public remove(item:any) {
        let index = this.data.indexOf(item);
        if(index>-1) {
            this.data.splice(index, 1);
        }
    }

    public view(item:any) {
		//window.open("http://google.com", '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
          alert(" The details are Flow Name : "+ item.mname +"  and Submitted By : "+ item.uom);
    }
}