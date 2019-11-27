import React, { Component } from "react";
import Table from "./Table";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import DataSet from "@antv/data-set";

class App extends React.Component {
  render() {
    // 随便mock一下数据
    const str = ["we", "are", "the", "black", "gold", "team"];
    const mockData = () => {
      let result = [];

      for (let i = 0, len = 6; i < len; i++) {
        result.push({
          xAxis: str[i],
          yAxis: Math.floor(Math.random() * 100)
        });
      }

      return result;
    };

    const tooltipsDisplayTpl = ` 
    <p class="chart-tooptip">
      <span class="chart-tooptip-right">{name}</span>
      <span>{value}</span>
    </p>
    `;

    const getTooltipData = (xAxis, yAxis) => {
      return {
        name: xAxis,
        value: yAxis
      };
    };

    return (
      <div>
        {/* forceFit  自适应 */}
        <Chart height={400} data={mockData()} forceFit>
          <Axis name="year" />
          <Axis name="sales" />
          <Tooltip
            // crosshairs={{
            //   type: "y",
            //   //描述辅助线样式的属性不是style对象，而是lineStyle对象，官方文档并未说明这一点。
            //   lineStyle: {
            //     stroke: "red", // 辅助线颜色
            //     lineWidth: 4, // 辅助线宽度，单位为px
            //     opacity: 1 // 辅助线透明度
            //   }
            // }}

            crosshairs={false}
            itemTpl={tooltipsDisplayTpl}
            showTitle={false} //去除标题
          />
          <Geom
            type="interval"
            position="xAxis*yAxis"
            // 设置名字
            tooltip={["xAxis*yAxis", getTooltipData]}
            // // 自定义鼠标hover样式
            // active={[
            //   true,
            //   {
            //     style: {
            //       fill: "black", // 柱子颜色，继续默哀
            //       shadowColor: "red", // 整体阴影颜色，包括边缘
            //       shadowBlur: 1, // 阴影的透明度
            //       opacity: 0 // 柱子颜色透明度
            //     }
            //   }
            // ]}

            // 渐变
            color={["xAxis", "#3DA4FF-#FFFFFF"]} // 从左到右
            // color={["xAxis", "l(90) 0:#000000 0.5:#FFFFFF 1:#000000"]} // 上往下渐变 【有到考究】
          />
        </Chart>
      </div>
    );
  }
}

export default App;
