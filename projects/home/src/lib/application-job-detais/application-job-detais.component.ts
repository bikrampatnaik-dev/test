import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "lib-application-job-detais",
  templateUrl: "./application-job-detais.component.html",
  styleUrls: ["./application-job-detais.component.sass"]
})
export class ApplicationJobDetaisComponent implements OnInit {
  public data = { appDetails: [] };
  @Input() set appDetails(val) {
    if (val) Object.assign(this.data, ...val.value);
  }
  constructor() {}

  ngOnInit() {}
}
