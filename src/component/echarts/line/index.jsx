// tips: echarts 折线图的组件

import React, { useState, useEffect, useRef } from "react";

import { Row } from "antd";

import echarts from "echarts";
import "./index.scss";

function Lines(props) {
  const line = useRef(null);

  useEffect(() => {
    const lineChart = echarts.init(line.current);
    const option = {
      xAxis: {
        type: "category",
        show: false
      },
      yAxis: {
        show: false
      },
      legend: {
        left: 0
      },
      series: [
        {
          data: [
            932,
            4,
            1330,
            932,
            4,
            1330,
            932,
            4,
            1330,
            932,
            4,
            1330,
            932,
            4,
            1330
          ],
          type: "line",
          smooth: true,
          areaStyle: {},
          itemStyle: {
            opacity: 0
          }
        }
      ]
    };

    lineChart.setOption(option);
    console.log(window);
    window.onresize = () => {
      lineChart.resize();
    };
    console.log("line组件渲染完成");
  }, []);

  return (
    <div ref={line} className="line">
      123
    </div>
  );
}

export default Lines;
