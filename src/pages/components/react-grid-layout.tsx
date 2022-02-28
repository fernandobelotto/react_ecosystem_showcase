import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

const UsedReactGridLayout = WidthProvider(RGL);

export default class ReactGridLayout extends React.PureComponent {
  static defaultProps = {
    className: " layout bg-gray-400 border-black",
    items: 10,
    rowHeight: 30,
    onLayoutChange: function () {},
    cols: 12,
  };

  constructor(props: any) {
    super(props);

    const layout = this.generateLayout();
    this.state = { layout };
  }

  generateDOM() {
    //@ts-ignore
    return _.map(_.range(this.props.items), function (i) {
      return (
        <div className="bg-white border border-black p-10 rounded-lg" key={i}>
          <span className="">{i}</span>
        </div>
      );
    });
  }

  generateLayout() {
    const p = this.props;
    //@ts-ignore
    return _.map(new Array(p.items), function (item, i) {
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        // @ts-ignore
        y: Math.floor(i / 6) * y,
        w: 1,
        h: y,
        i: i.toString(),
      };
    });
  }

  onLayoutChange(layout: any) {
    //@ts-ignore
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <UsedReactGridLayout
        //@ts-ignore
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.generateDOM()}
      </UsedReactGridLayout>
    );
  }
}
