import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
 
  @Input() breadcrumbArray:Array<{label:string , link?:string}> = [];
  
}
