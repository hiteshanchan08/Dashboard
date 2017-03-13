import {Component} from '@angular/core';
@Component({
    selector:'seismicDrive-list',
    template: ` 
    <DIV class="framework-content-view">

<DIV class="heading-container">
<DIV class="heading">
<H2 id="contentTitle">Seismic Drive</H2>
<DIV class="sub-nav">

   <BUTTON class="slb-button icon-only">                   
<DIV class="slb-icon"> <span style="font-size:25px;" class="glyphicon glyphicon-search"></span>                    
 </DIV></BUTTON>
 <BUTTON class="slb-button icon-only">
<DIV class="slb-icon">     <span style="font-size:25px;" class="glyphicon glyphicon-tasks"></span>               
</DIV><SPAN class="text">Filter</SPAN>                     </BUTTON>             
 </DIV></DIV></DIV>

<DIV class="slb-dashboard">

<DIV class="view-container" style="width:1200px;">

</DIV>
</DIV>

     `
})
export class SeismicDriveComponent{}