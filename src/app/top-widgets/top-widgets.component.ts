import { Component, OnInit } from '@angular/core';
import { faTachometerAlt,faLocationArrow,faChartBar,faMoneyBill, faMapMarkerAlt, faStore, faBox, faChartLine, faEnvelope, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;
  faLocationArrow = faLocationArrow;
  faBoxes=faBox;
  faStore = faStore;
  faMoneyBill= faMoneyBill
  constructor() { }

  ngOnInit(): void {
  }

}
