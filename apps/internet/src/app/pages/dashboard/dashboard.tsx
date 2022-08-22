import React, { useEffect, useState } from "react";
import { LineChart, LineChartProps } from "../../components/charts/line-chart";
import { StackedLineChart, StackedLineChartProps } from "../../components/charts/stacked-line-chart";
import { Layout } from "../layout";

export const Dashboard: React.FC = () => {
  const maxPoints = 20;

  const [speedData, setSpeedData] = useState<StackedLineChartProps>({
    title: 'Speed',
    xaxis: [],
    series: [
      {
        name: 'Download',
        yaxis: []
      },
      {
        name: 'Upload',
        yaxis: []
      }
    ]
  });
  const [pingData, setPingData] = useState<LineChartProps>({
    title: 'Ping',
    xaxis: [],
    yaxis: []
  });

  const generateSpeedData = (newSpeedData: any, time: Date) => {
    newSpeedData.xaxis.push(time.toISOString());
    newSpeedData.series[0].yaxis.push(Math.random() * 1000);
    newSpeedData.series[1].yaxis.push(Math.random() * 100);
    if (newSpeedData.series[0].yaxis.length > maxPoints) {
      newSpeedData.series[0].yaxis.shift();
      newSpeedData.series[1].yaxis.shift();
    }
  }

  const generatePingData = (newPingData: any, time: Date) => {
    newPingData.xaxis.push(time.toISOString());
    newPingData.yaxis.push(Math.random() * 30);
    if (newPingData.yaxis.length > maxPoints) {
      newPingData.yaxis.shift();
    }
  }

  useEffect(() => {
    let _30SecsAgo = new Date();
    _30SecsAgo.setSeconds(_30SecsAgo.getSeconds() - (30 * 5));
    const newSpeedData = {... speedData};
    const newPingData = {... pingData};
    [1,2,3,4,5].forEach(() => {
      generateSpeedData(newSpeedData, _30SecsAgo);
      generatePingData(newPingData, _30SecsAgo);
    });

    setPingData(newPingData);
    setSpeedData(newSpeedData);

    setInterval(() => {
      const time = new Date();
      const newSpeedData = {... speedData};
      const newPingData = {... pingData};
      generatePingData(newPingData, time);
      generateSpeedData(newSpeedData, time);
      setPingData(newPingData);
      setSpeedData(newSpeedData);
    }, 30000);
  }, []);
  
  return (
    <Layout>
      <h1 className="font-bold text-2xl text-gray-700">Dashboard</h1>
      <div className="flex flex-row flex-grow mt-4 gap-4">
        <StackedLineChart {...speedData} />
        <LineChart {...pingData} />
      </div>
    </Layout>
  )
}

export default Dashboard