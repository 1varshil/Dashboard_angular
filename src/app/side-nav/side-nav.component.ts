import { Component, OnInit } from '@angular/core';
import { faTachometerAlt,faChartBar,faMoneyBill, faMapMarkerAlt, faStore, faBox, faChartLine, faEnvelope, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  faTachometerAlt = faTachometerAlt;
  faStore =faStore;
  faChartBar=faChartBar;
  faMapMarkerAlt = faMapMarkerAlt;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartLine = faChartLine;
  faEnvelope = faEnvelope;
  faQuestionCircle = faQuestionCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
