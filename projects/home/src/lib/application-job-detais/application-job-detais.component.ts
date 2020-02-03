import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-application-job-detais',
  templateUrl: './application-job-detais.component.html',
  styleUrls: ['./application-job-detais.component.sass']
})
export class ApplicationJobDetaisComponent implements OnInit {
  public data;
  @Input() set appDetails(val) {
    this.data = val;
  }
  constructor() { }

  ngOnInit() {
  }

}
