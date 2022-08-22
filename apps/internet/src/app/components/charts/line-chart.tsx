import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import { ChartContainer } from './chart-container';

export interface LineChartProps {
  title: string,
  xaxis: string[],
  yaxis: number[]
}

export const LineChart: React.FC<LineChartProps> = ({
  title,
  xaxis,
  yaxis
}) => {
  const chartId = `line-chart_${Math.ceil(Math.random() *  100)}`;
  const [myChart, setMyChart] = useState<echarts.EChartsType>();

  useEffect(() => {
    if (!myChart) {
      setMyChart(
        echarts.init(
          document.getElementById(chartId)!,
          undefined,
          {
            width: 600,
            height: 400
          }
        )
      );
    }
  }, [chartId, myChart])

  if (myChart) {
    let option = {
      title: {
        text: title
      },
      tooltip: {
        trigger: 'axis',
        valueFormatter: (value: number) => `${Math.floor(value * 100)/100}ms`
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xaxis
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: yaxis,
          type: 'line',
          smooth: true
        }
      ]
    };
  
    option && myChart.setOption(option);
  }

  return (
    <ChartContainer>
      <div id={chartId}></div>
    </ChartContainer>
  )
}



