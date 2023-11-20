import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  navigationArray:Array<{label:string , link?:string}> = [
    {
      label:'Home',
      link:'/home',
    },
    {
      label: 'About'
    }];
}
