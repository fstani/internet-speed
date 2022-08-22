import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import { ChartContainer, ChartContainerProps } from './chart-container';

export interface StackedSeries {
  name: string,
  yaxis: number[]
}

export interface StackedLineChartProps {
  title: string,
  xaxis: string[],
  series: StackedSeries[]
}

export const StackedLineChart: React.FC<StackedLineChartProps> = ({
  title,
  xaxis,
  series
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
        valueFormatter: (value: number) => `${Math.floor(value * 100)/100} Mbps`
      },
      legend: {
        data: series.map(value => value.name)
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xaxis
      },
      yAxis: {
        type: 'value'
      },
      series: series.map(value => {
        return {
          name: value.name,
          type: 'line',
          stack: 'Total',
          data: value.yaxis
        } 
      })
    };
  
    option && myChart.setOption(option);
  }

  return (
    <ChartContainer>
      <div id={chartId}></div>
    </ChartContainer>
  )
}



