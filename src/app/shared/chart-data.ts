export class ChartData {

  public MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  public generateSinFunctionData(from: number, to: number): number[]
  {

    let data: number[] = [];

    for (let x = from; x < to; x++) {

      data.push(Math.sin(x) * 1000)

    }

    return data;
  }

  public generateSquareFunctionData(from: number, to: number, b: number): number[]
  {
    let data: number[] = [];

    for (let x = from; x < to; x++) {

      data.push(Math.pow(x, 2) + b);

    }

    return data;
  }

  public generateList(from: number, to: number): string[]
  {
    let data: string[] = [];

    for (let x = from; x < to; x++) {

      data.push(String(Math.sin(x)))

    }

    return data;
  }
}
