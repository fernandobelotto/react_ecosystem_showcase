import React, { ReactElement } from "react";
import { Card } from "../../components/ui-card";

interface Props {}

export default function ChartsPage({}: Props): ReactElement {
  const libs = [
    {
      title: "recharts",
      link: "https://github.com/recharts/recharts",
      description: "Redefined chart library built with React and D3",
    },
    {
      title: "vx",
      link: "https://github.com/airbnb/visx",
      description: "Visualization components",
    },
    {
      title: "nivo",
      link: "https://github.com/plouc/nivo",
      description:
        "Provides a rich set of data visualization components, built on top of the D3 and React libraries",
    },
    {
      title: "react-vis",
      link: "https://github.com/uber/react-vis",
      description: "Data Visualization Components",
    },
    {
      title: "react-d3-components",
      link: "https://github.com/codesuki/react-d3-components",
      description: "D3 Components for React.",
    },
    {
      title: "chartify",
      link: "https://github.com/kirillstepkin/chartify",
      description:
        "React.js plugin for building animated draggable and customizable charts.",
    },
    {
      title: "essential js 2 charts",
      link: "https://github.com/syncfusion/ej2-react-ui-components/tree/master/components/charts",
      description: "Beautiful and interactive charts & graphs for react.",
    },
    {
      title: "jscharting-react",
      link: "https://github.com/jscharting/jscharting-react",
      description:
        "React chart component offering a complete set of chart types and engaging data visualizations with [JSCharting]",
    },
    {
      title: "react-chartist",
      link: "https://github.com/fraserxu/react-chartist",
      description: "React component for Chartist.js.",
    },
    {
      title: "react-charty",
      link: "https://github.com/99ff00/react-charty",
      description:
        "Small but powerful interactive data viz with multiple chart types, animations, zooming, theming.",
    },
    {
      title: "react-chartjs-2",
      link: "https://github.com/jerairrest/react-chartjs-2",
      description: "Common react charting components using Chart.js 2.0.",
    },

    {
      title: "react-dazzle",
      link: "https://github.com/Raathigesh/Dazzle",
      description: "Dashboards made easy in React JS.",
    },
    {
      title: "react-google-charts",
      link: "https://github.com/RakanNimer/react-google-charts",
      description: "React-google-charts React component.",
    },
    {
      title: "react-highcharts",
      link: "https://github.com/kirjs/react-highcharts",
      description: "React-highcharts.",
    },
    {
      title: "react-sigmajs",
      link: "https://github.com/dunnock/react-sigma",
      description:
        "Lightweight but powerful library for drawing network graphs built on top of SigmaJS.",
    },
    {
      title: "react-sparklines",
      link: "https://github.com/borisyankov/react-sparklines",
      description: "Beautiful and expressive Sparklines React component.",
    },
    {
      title: "react-timeseries-charts",
      link: "https://github.com/esnet/react-timeseries-charts",
      description: "Declarative timeseries charts.",
    },

    {
      title: "rumble-charts",
      link: "https://github.com/rumble-charts/rumble-charts",
      description:
        "React components for building composable and flexible charts.",
    },
    {
      title: "semiotic",
      link: "https://semiotic.nteract.io/",
      description: "Semiotic is a data visualization framework for React.",
    },
    {
      title: "DevExtreme React Chart",
      link: "https://devexpress.github.io/devextreme-reactive/react/chart/",
      description:
        "High-performance plugin-based chart for Bootstrap and Material Design.",
    },
    {
      title: "Smart React Chart",
      link: "https://www.htmlelements.com/react/demos/chart/overview/",
      description: "Feature complete Charting library.",
    },
    {
      title: "react-muze",
      link: "https://github.com/chartshq/react-muze",
      description:
        "React wrapper for [muze] free data visualization library for creating exploratory data visualizations in browser, using WebAssembly)",
    },

    {
      title: "victory",
      link: "https://github.com/FormidableLabs/victory",
      description:
        "A collection of composable React components for building interactive data visualizations",
    },

    {
      title: "echarts-for-react",
      link: "https://github.com/hustcc/echarts-for-react",
      description: "Apache ECharts components for React wrapper",
    },
    {
      title: "react-apexcharts",
      link: "https://github.com/apexcharts/react-apexcharts",
      description: "React Component for ApexCharts",
    },
  ];

  return (
    <>
      <div className="p-10 grid sm:grid-cols-1 md:grid-cols-4 gap-5">
        {libs.map((item) => {
          return <Card title={item.title} link={item.link} />;
        })}
      </div>
      <div className="m-10 text-center p-3 bg-white rounded-md w-28">
        <p>Total of {libs.length}</p>
      </div>
    </>
  );
}
