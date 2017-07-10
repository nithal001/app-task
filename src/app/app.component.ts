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
  osChart: Array<boolean> = [];
  totalChart: number;
  deviceType: Array<boolean> = [];
  deviceTypeTotal: number;
  dataUsageTotal: Array<boolean> = [];
  dataUsageTime: Array<boolean> = [];
  usersTimeTotal: Array<boolean> = [];
  usersTime: Array<boolean> = [];
  usersTotalData: Array<boolean> = [];
  timeTotalData: Array<boolean> = [];
  dataTotalUsers: Array<boolean> = [];

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
      this.osChart = [this.filterData[3].os[0].ios, this.filterData[3].os[1].android];
      this.totalChart = this.filterData[3].os[2].total;
      this.deviceType = [this.filterData[4].deviceType[0].samsung, this.filterData[4].deviceType[1].apple, this.filterData[4].deviceType[2].nexus, this.filterData[4].deviceType[3].blackberry];
      this.deviceTypeTotal = this.filterData[4].deviceType[4].total;
      this.dataUsageTotal = this.filterData[5].dataUsageTime[0].data;
      this.dataUsageTime = this.filterData[5].dataUsageTime[1].time;
      this.usersTimeTotal = this.filterData[6].usersTime[0].users;
      this.usersTime = this.filterData[6].usersTime[1].time;
      this.usersTotalData = this.filterData[7].usersDataTime[0].users;
      this.timeTotalData = this.filterData[7].usersDataTime[1].time;
      this.dataTotalUsers = this.filterData[7].usersDataTime[2].data;
  }

  generateArray(obj){
   return Object.keys(obj).map((key)=>{ return obj[key]});
 }

  onSubmit() {
      alert('yes');
  }
}
