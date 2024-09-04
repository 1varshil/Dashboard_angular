import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.scss']
})
export class SalesByCategoryComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Category wise sales'
    },
    xAxis: {
      categories: [
        'Electronics',
        'Groceries',
        'Cosmetics',
        'Clothes',
        'Appliances'
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
      {
        type:'pie',
        data:[
          {
            name:'Electronics',
            y:51.0,
            color:'#044342'
          },
          {
            name:'Cosmetics',
            y:16,
            color:'#ed9e20'
          },
          {
            name:'Clothes',
            y:15.2,
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
