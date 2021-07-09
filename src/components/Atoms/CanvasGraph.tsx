import { Card, Grid } from '@material-ui/core';
import React from 'react';

//https://www.w3.org/TR/SVG/paths.html#PathDataCubicBezierCommands

export interface CanvasGraphProps {
  data: GraphData[];
  width: number;
  height: number;
  horizontalGuides: number;
  verticalGuides: number;
  precision: number;
  tension: number;
  isClosed: boolean;
  numOfSegments: number;
  showPoints: boolean;
}

export type GraphData = {
  label: string;
  x: number;
  y: number;
};

const defaultData: GraphData[] = [
  { label: 'S', x: 0, y: 2 },
  { label: 'M', x: 1, y: 4 },
  { label: 'T', x: 2, y: 3 },
  { label: 'W', x: 3, y: 1 },
  { label: 'TH', x: 4, y: 4 },
  { label: 'F', x: 5, y: 5 },
  { label: 'S', x: 6, y: 4 },
  { label: 'W', x: 7, y: 1 },
  { label: 'TH', x: 8, y: 4 },
  { label: 'F', x: 9, y: 5 },
  { label: 'S', x: 10, y: 2 },
  { label: 'F', x: 11, y: 2 },
];

export const CanvasGraph = (props: CanvasGraphProps) => {
  const {
    data,
    height,
    width,
    horizontalGuides: numberOfHorizontalGuides,
    verticalGuides: numberOfVerticalGuides,
    precision,
    tension,
    isClosed,
    numOfSegments,
    showPoints,
  } = props;
  const FONT_SIZE = width / 100;
  const maximumXFromData = Math.max(...data.map((e) => e.x));
  const maximumYFromData = Math.max(...data.map((e) => e.y));

  const digits = parseFloat(maximumYFromData.toString()).toFixed(precision).length + 1;

  const padding = (FONT_SIZE + digits) * 3;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const points = data.flatMap((element) => {
    const x = (element.x / maximumXFromData) * chartWidth + padding;
    const y = chartHeight - (element.y / maximumYFromData) * chartHeight + padding;

    return [x, y];
  });

  let canvas, ctx;
  const canvasRef = React.createRef<HTMLCanvasElement>();

  const drawLabelsXAxis = (ctx: CanvasRenderingContext2D) => {
    const y = height - padding + FONT_SIZE * 2;
    const maximumX = maximumXFromData;
    return (
      <>
        {data.map((element) => {
          const x = (element.x / maximumX) * chartWidth + padding - FONT_SIZE / 2;
          ctx.font = `${FONT_SIZE}px Helvetica`;
          ctx.fillStyle = '#d050f7';
          ctx.fillText(`${element.label}`, x, y);
          return;
        })}
      </>
    );
  };

  const drawLabelsYAxis = (ctx: CanvasRenderingContext2D) => {
    const PARTS = numberOfHorizontalGuides;
    const maximumY = maximumYFromData;
    return (
      <>
        {new Array(PARTS + 1).fill(0).map((_, index) => {
          const x = FONT_SIZE;
          const ratio = index / numberOfHorizontalGuides;

          const yCoordinate = chartHeight - chartHeight * ratio + padding + FONT_SIZE / 2;

          ctx.font = `${FONT_SIZE}px Helvetica`;
          ctx.fillStyle = '#d050f7';
          ctx.fillText(`${parseFloat(String(maximumY * (index / PARTS))).toFixed(precision)}`, x, yCoordinate);
          return;
        })}
      </>
    );
  };
  const drawAxis = (ctx: CanvasRenderingContext2D, points: number[]) => {
    ctx.beginPath();
    ctx.strokeStyle = '#ccc';
    ctx.moveTo(points[0], points[1]);
    ctx.lineTo(points[2], points[3]);
    ctx.stroke();
  };

  const drawHorizontalGuides = (ctx: CanvasRenderingContext2D) => {
    const startX = padding;
    const endX = width - padding;

    new Array(numberOfHorizontalGuides).fill(0).map((_, index) => {
      const ratio = (index + 1) / numberOfHorizontalGuides;
      const yCoordinate = chartHeight - chartHeight * ratio + padding;
      const points = `${startX},${yCoordinate} ${endX},${yCoordinate}`;

      ctx.beginPath();
      ctx.strokeStyle = '#ccc';
      ctx.moveTo(startX, yCoordinate);
      ctx.lineTo(endX, yCoordinate);
      ctx.lineWidth = 0.5;
      ctx.stroke();
    });
  };

  function drawXAxis(ctx: CanvasRenderingContext2D) {
    const points = [padding, height - padding, width - padding, height - padding];

    return drawAxis(ctx, points);
  }

  function drawYAxis(ctx: CanvasRenderingContext2D) {
    const points = [padding, padding, padding, height - padding];

    return drawAxis(ctx, points);
  }

  function drawLines(ctx: CanvasRenderingContext2D, pts: number[]) {
    for (let i = 2; i < pts.length - 1; i += 2) {
      ctx.lineTo(pts[i], pts[i + 1]);
      ctx.lineWidth = 2;
    }
  }

  function drawCurve(
    ctx: CanvasRenderingContext2D,
    ptsa: number[],
    tension: number,
    isClosed: boolean,
    numOfSegments: number,
    showPoints: boolean
  ) {
    ctx.beginPath();
    ctx.strokeStyle = '#d050f7';
    drawLines(ctx, getCurvePoints(ptsa, tension, isClosed, numOfSegments));

    // if (showPoints) {
    //   for (var i = 0; i < ptsa.length - 1; i += 2) {
    //     ctx.beginPath();
    //     ctx.fillRect(ptsa[i], ptsa[i + 1], 5, 5);
    //   }
    // }

    ctx.stroke();
  }

  function getCurvePoints(pts: number[], tension: number, isClosed: boolean, numOfSegments: number) {
    // use input value if provided, or use a default value
    tension = typeof tension != 'undefined' ? tension : 0.5;
    isClosed = isClosed ? isClosed : false;
    numOfSegments = numOfSegments ? numOfSegments : 16;

    var _pts = [],
      res = [], // clone array
      x,
      y, // our x,y coords
      t1x,
      t2x,
      t1y,
      t2y, // tension vectors
      c1,
      c2,
      c3,
      c4, // cardinal points
      st,
      t,
      i; // steps based on num. of segments

    // clone array so we don't change the original
    _pts = pts.slice(0);

    // The algorithm require a previous and next point to the actual point array.
    // Check if we will draw closed or open curve.
    // If closed, copy end points to beginning and first points to end
    // If open, duplicate first points to befinning, end points to end
    if (isClosed) {
      _pts.unshift(pts[pts.length - 1]);
      _pts.unshift(pts[pts.length - 2]);
      _pts.unshift(pts[pts.length - 1]);
      _pts.unshift(pts[pts.length - 2]);
      _pts.push(pts[0]);
      _pts.push(pts[1]);
    } else {
      _pts.unshift(pts[1]); //copy 1. point and insert at beginning
      _pts.unshift(pts[0]);
      _pts.push(pts[pts.length - 2]); //copy last point and append
      _pts.push(pts[pts.length - 1]);
    }

    // ok, lets start..

    // 1. loop goes through point array
    // 2. loop goes through each segment between the 2 pts + 1e point before and after
    for (i = 2; i < _pts.length - 4; i += 2) {
      for (t = 0; t <= numOfSegments; t++) {
        // calc tension vectors
        t1x = (_pts[i + 2] - _pts[i - 2]) * tension;
        t2x = (_pts[i + 4] - _pts[i]) * tension;

        t1y = (_pts[i + 3] - _pts[i - 1]) * tension;
        t2y = (_pts[i + 5] - _pts[i + 1]) * tension;

        // calc step
        st = t / numOfSegments;

        // calc cardinals
        c1 = 2 * Math.pow(st, 3) - 3 * Math.pow(st, 2) + 1;
        c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2);
        c3 = Math.pow(st, 3) - 2 * Math.pow(st, 2) + st;
        c4 = Math.pow(st, 3) - Math.pow(st, 2);

        // calc x and y cords with common control vectors
        x = c1 * _pts[i] + c2 * _pts[i + 2] + c3 * t1x + c4 * t2x;
        y = c1 * _pts[i + 1] + c2 * _pts[i + 3] + c3 * t1y + c4 * t2y;

        //store points in array
        res.push(x);
        res.push(y);
      }
    }

    return res;
  }

  React.useEffect(() => {
    if (canvasRef.current) {
      canvas = canvasRef.current;
      ctx = canvas.getContext('2d');
      if (ctx) {
        // drawYAxis(ctx);
        drawXAxis(ctx);
        drawLabelsXAxis(ctx);
        drawLabelsYAxis(ctx);
        drawHorizontalGuides(ctx);
        drawCurve(ctx, points, tension, isClosed, numOfSegments, showPoints);
      }
    } else {
      return;
    }
  }, []);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

CanvasGraph.defaultProps = {
  data: defaultData,
  height: 500,
  width: 1500,
  horizontalGuides: 4,
  verticalGuides: null,
  precision: 2,
  tension: 0.5,
  isClosed: false,
  numOfSegments: 18,
  showPoints: true,
};
