import { Component } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as ChartAnnotation from 'chartjs-plugin-annotation';

import { ChartData } from '../shared/chart-data';
import { ChartConfig } from '../shared/chart-config';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent {

  public data     = new LineChartData()
  public config   = new LineChartConfig();

  constructor() { }
}

export class LineChartData extends ChartData {

  public datasets: ChartDataSets[] = [
    {
      data: this.generateSquareFunctionData(-50, 50, 50),
      label: 'Series A',
      fill: false
    }
  ];

  public labels: Label[] = this.generateList(-50, 50);
}

export class LineChartConfig extends ChartConfig {

  public options: ChartOptions = {
    responsive: true
  };

  public colors: Color[] = [
    {
      borderColor:      this.COLORS.blue,
      backgroundColor:  this.COLORS.blue
    },
  ];

  public legend       = true;
  public chartType    = 'line';
  public plugins      = [ChartAnnotation]
}
