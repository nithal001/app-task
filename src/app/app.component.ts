import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;
  filterData: any;
  constructor(private commonService: CommonService) {}

  ngOnInit() {

  }

  getFullData() {
      this.commonService.getData()
        .subscribe(data => this.data = data);
  }

  onClick(value: string) {
      return this.filterData = this.data[0][value].length ? this.data[0][value] : [];
  }
}
