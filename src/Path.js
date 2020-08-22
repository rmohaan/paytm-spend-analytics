import React from "react";
import SubTitle from "./SubTitle";

function getAnglePoint(startAngle, endAngle, radius, x, y) {
  var x1, y1, x2, y2;

  x1 = x + radius * Math.cos((Math.PI * startAngle) / 180);
  y1 = y + radius * Math.sin((Math.PI * startAngle) / 180);
  x2 = x + radius * Math.cos((Math.PI * endAngle) / 180);
  y2 = y + radius * Math.sin((Math.PI * endAngle) / 180);

  return { x1, y1, x2, y2 };
}

class Path extends React.Component {
  state = {
    path: "",
    x: 0,
    y: 0,
    isMounted: true
  };

  componentDidMount() {
    this.setState({
      isMounted: true
    });
    this.animate();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.radius !== prevState.radius) {
      return { radius: nextProps.radius };
    } else if (nextProps.hole !== prevState.hole) {
      return { hole: nextProps.hole, trueHole: nextProps.hole };
    } else if (nextProps.value !== prevState.value) {
      return { value: nextProps.value };
    } else if (nextProps.percent !== prevState.percent) {
      return { percent: nextProps.percent };
    } else if (nextProps.percentValue !== prevState.percentValue) {
      return { percentValue: nextProps.percentValue };
    } else if (nextProps.startAngle !== prevState.startAngle) {
      return { startAngle: nextProps.startAngle };
    } else if (nextProps.angle !== prevState.angle) {
      return { angle: nextProps.angle };
    } else if (nextProps.fill !== prevState.fill) {
      return { fill: nextProps.fill };
    } else return null;
  }

  componentDidUpdate(prevProps, _prevState) {
    if (
      prevProps.radius !== this.props.radius ||
      prevProps.hole !== this.props.hole ||
      prevProps.value !== this.props.value ||
      prevProps.percent !== this.props.percent ||
      prevProps.percentValue !== this.props.percentValue ||
      prevProps.startAngle !== this.props.startAngle ||
      prevProps.angle !== this.props.angle ||
      prevProps.fill !== this.props.fill
    ) {
      this.setState({ path: "" });
      this.animate();
    }
  }

  componentWillUnmount() {
    this.setState({
      isMounted: false
    });
  }

  animate = () => {
    this.draw(0);
  };

  draw = (s) => {
    if (!this.state.isMounted) {
      return;
    }

    
    let p = this.props,
      path = [],
      a,
      b,
      c,
      self = this,
      step;

    step = p.angle / (37.5 / 2);

    if (s + step > p.angle) {
      s = p.angle;
    }

    // Get angle points
    a = getAnglePoint(
      p.startAngle,
      p.startAngle + s,
      p.radius,
      p.radius,
      p.radius
    );
    b = getAnglePoint(
      p.startAngle,
      p.startAngle + s,
      p.radius - p.hole,
      p.radius,
      p.radius
    );

    path.push("M" + a.x1 + "," + a.y1);
    path.push(
      "A" +
        p.radius +
        "," +
        p.radius +
        " 0 " +
        (s > 180 ? 1 : 0) +
        ",1 " +
        a.x2 +
        "," +
        a.y2
    );
    path.push("L" + b.x2 + "," + b.y2);
    path.push(
      "A" +
        (p.radius - p.hole) +
        "," +
        (p.radius - p.hole) +
        " 0 " +
        (s > 180 ? 1 : 0) +
        ",0 " +
        b.x1 +
        "," +
        b.y1
    );

    // Close
    path.push("Z");

    this.setState({ path: path.join(" ") });

    if (s < p.angle) {
      setTimeout(function () {
        self.draw(s + step);
      }, 16);
    } else if (p.showLabel) {
      c = getAnglePoint(
        p.startAngle,
        p.startAngle + p.angle / 2,
        p.radius / 2 + p.trueHole / 2,
        p.radius,
        p.radius
      );

      this.setState({
        x: c.x2,
        y: c.y2
      });
    }
  };

  render() {
    return (
      <g overflow="hidden">
        <path
          d={this.state.path}
          fill={this.props.fill}
          stroke={this.props.stroke}
          strokeWidth={this.props.strokeWidth ? this.props.strokeWidth : 1}
        />
        {this.props.showLabel && this.props.percentValue > 5 ? (
          <text
            x={this.state.x}
            y={this.state.y}
            fill="#fff"
            textAnchor="middle"
          >
            {this.props.percent
              ? this.props.percentValue + "%"
              : this.props.value}
          </text>
        ) : null}
        {this.props.subTitle1 ? (
          <SubTitle {...this.props} textAnchor="middle"/>
        ) : null}
      </g>
    );
  }
}

export default Path;
