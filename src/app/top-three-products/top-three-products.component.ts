import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.scss']
})
export class TopThreeProductsComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'bar',
      height: 225
    },
    title: {
      text: 'Top 3 Products'
    },
    xAxis: {
      categories: [
        'Lenova Thinkpad E15',
        'Nectar Orange Juice',
        'Axe Deodarant',
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
      {
        type:'bar',
        showInLegend:false,
        data:[
          {
            name:'Lenova Thinkpad E15',
            y:395,
            color:'#044342'
          },
          {
            name:'Nectar Orange Juice',
            y:385,
            color:'#ed9e20'
          },
          {
            name:'Axe Deodarant',
            y:275,
            color:'#6920fb'
          },
          {
            name:'Appliances',
            y:3.5,
            color:'#121212'
          },
          {
            name:'Groceries',
            y:7,
            color:'grey'
          }

        ]
      }
    ],
    credits: {
      enabled: false
    }
  })
  constructor() { }

  ngOnInit(): void {
  }

}
