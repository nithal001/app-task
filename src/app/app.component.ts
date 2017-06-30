import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { Os } from './_models/os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;
  filterData: any;
  dataUsage: number;
  users: number;
  userData: number;
  opSy: Os[] = [];
  osChart: Array<boolean> = [];

  constructor(private commonService: CommonService) {}

  ngOnInit() {
      this.getFullData();
  }

  getFullData() {
      this.commonService.getData()
        .subscribe(data => this.data = data)
  }

  onClick(value: string) {
      this.filterData = this.data[0][value].length ? this.data[0][value] : [];
      this.dataUsage = this.filterData[0].dataUsage;
      this.users = this.filterData[1].users;
      this.userData = this.filterData[2].userData;
      this.opSy.push(this.filterData[3].os);
      this.osChart.push(this.opSy[0][0].ios)
      console.log(this.filterData[3].os);
  }

  generateArray(obj){
   return Object.keys(obj).map((key)=>{ return obj[key]});
 }

  onSubmit() {
      alert('yes');
  }
}
