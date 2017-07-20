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

  // Pie
  public osChartLabels:string[] = ['IOS', 'Android'];
  public osChartData:Array<boolean> = [];
  public osChartType:string = 'pie';
  public deviceChartLabels:string[] = ['Samsung', 'Apple', 'Nexus', 'Blackberry'];
  public deviceChartData:Array<boolean> = [];
  public deviceChartType:string = 'pie';

  constructor(private commonService: CommonService) {}

  ngOnInit() {
      this.getFullData();
  }

  getFullData() {
      this.commonService.getData()
        .subscribe(data => this.data = data);
  }

  onClick(value: string) {
      this.filterData = this.data[value] ? this.data[value] : [];
      this.dataUsage = this.filterData.dataUsage;
      this.users = this.filterData.users;
      this.userData = this.filterData.userData;
      this.osChart = [this.filterData.os.ios, this.filterData.os.android];
      this.totalChart = this.filterData.os.total;
      this.deviceType = [this.filterData.deviceType.samsung, this.filterData.deviceType.apple, this.filterData.deviceType.nexus, this.filterData.deviceType.blackberry];
      this.deviceTypeTotal = this.filterData.deviceType.total;
      this.dataUsageTotal = this.filterData.dataUsageTime.data;
      this.dataUsageTime = this.filterData.dataUsageTime.time;
      this.usersTimeTotal = this.filterData.usersTime.users;
      this.usersTime = this.filterData.usersTime.time;
      this.usersTotalData = this.filterData.usersDataTime.users;
      this.timeTotalData = this.filterData.usersDataTime.time;
      this.dataTotalUsers = this.filterData.usersDataTime.data;

      this.osChartData = this.osChart;
      this.deviceChartData = this.deviceType;
  }

  generateArray(obj){
   return Object.keys(obj).map((key)=>{ return obj[key]});
 }

  onSubmit() {
  }
}
