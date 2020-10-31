import { ChartOptions } from 'chart.js';

export class ChartConfig {

  public COLORS = {
    red:      'rgb(255, 99, 132)',
    orange:   'rgb(255, 159, 64)',
    yellow:   'rgb(255, 205, 86)',
    green:    'rgb(75, 192, 192)',
    blue:     'rgb(54, 162, 235)',
    purple:   'rgb(153, 102, 255)',
    grey:     'rgb(201, 203, 207)'
  };


  public generateOptionsWithHorizontalLine(y: number) {

    const options = {
      responsive: true,
      annotation: {
        annotations: [{
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: String(y),
            borderColor: 'tomato',
            borderWidth: 1
        }],
        drawTime: "afterDraw" // (default)
      } as ChartOptions
    };

    return options;
  }
}
