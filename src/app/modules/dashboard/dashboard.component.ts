import {Component} from '@angular/core';
import {Router} from '@angular/router';
//import {MainNavComponent} from './mainnav';

@Component({
	moduleId: module.id,
    selector:'dashboard-list',
    templateUrl: "./dashboardView.html"
})
export class DashboardComponent{
     constructor( private router:Router) {}
	getimageData(bannerImg:any) {
        this.router.navigate(['/flowdesigner']);
        bannerImg = event.currentTarget;
        let imgName = bannerImg.offsetParent.innerText;
        localStorage.setItem("imgName", imgName);
    }
}