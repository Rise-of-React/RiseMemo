import { Grid } from '@material-ui/core';

export interface GraphProps {
  data: GraphData[];
  width: number;
  height: number;
  horizontalGuides: number;
  verticalGuides: number;
  precision: number;
}

export type GraphData = {
  label: string;
  x: number;
  y: number;
};

const defaultData: GraphData[] = [
  { label: 'S', x: 0, y: 0 },
  { label: 'M', x: 1, y: 4 },
  { label: 'T', x: 2, y: 3 },
  { label: 'W', x: 3, y: 1 },
  { label: 'TH', x: 4, y: 4 },
  { label: 'F', x: 5, y: 5 },
  { label: 'S', x: 6, y: 4 },
];

export const Graph = (props: GraphProps) => {
  const {
    data,
    height,
    width,
    horizontalGuides: numberOfHorizontalGuides,
    verticalGuides: numberOfVerticalGuides,
    precision,
  } = props;
  const FONT_SIZE = width / 50;
  const maximumXFromData = Math.max(...data.map((e) => e.x));
  const maximumYFromData = Math.max(...data.map((e) => e.y));

  const digits = parseFloat(maximumYFromData.toString()).toFixed(precision).length + 1;

  const padding = (FONT_SIZE + digits) * 3;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const Axis = ({ points }: any) => <polyline fill="none" stroke="#ccc" strokeWidth=".5" points={points} />;

  const XAxis = () => {
    const points = `${padding},${height - padding} ${width - padding},${height - padding}`;

    return <Axis points={points} />;
  };

  const YAxis = () => {
    const points = `${padding},${padding} ${padding},${height - padding}`;

    return <Axis points={points} />;
  };

  const points = data
    .map((element) => {
      const x = (element.x / maximumXFromData) * chartWidth + padding;
      const y = chartHeight - (element.y / maximumYFromData) * chartHeight + padding;
      return `${x},${y}`;
    })
    .join(' ');

  const HorizontalGuides = () => {
    const startX = padding;
    const endX = width - padding;

    return (
      <>
        {new Array(numberOfHorizontalGuides).fill(0).map((_, index) => {
          const ratio = (index + 1) / numberOfHorizontalGuides;
          const yCoordinate = chartHeight - chartHeight * ratio + padding;
          const points = `${startX},${yCoordinate} ${endX},${yCoordinate}`;

          return <polyline fill="none" stroke={'#ccc'} strokeWidth=".5" points={points} />;
        })}
      </>
    );
  };

  const VerticalGuides = () => {
    const guideCount = numberOfVerticalGuides || data.length - 1;
    const startY = padding;
    const endY = height - padding;

    return (
      <>
        {new Array(guideCount).fill(0).map((_, index) => {
          const ratio = (index + 1) / guideCount;
          const xCoordinate = padding + ratio * (width - padding * 2);
          const points = `${xCoordinate},${startY} ${xCoordinate},${endY}`;
          return <polyline fill="none" stroke={'#ccc'} strokeWidth=".5" points={points} />;
        })}
      </>
    );
  };

  const LabelsXAxis = () => {
    const y = height - padding + FONT_SIZE * 2;
    const maximumX = maximumXFromData;
    return (
      <>
        {data.map((element) => {
          const x = (element.x / maximumX) * chartWidth + padding - FONT_SIZE / 2;
          return (
            <text x={x} y={y} style={{ fill: '#ccc', fontSize: FONT_SIZE, fontFamily: 'Helvetica' }}>
              {element.label}
            </text>
          );
        })}
      </>
    );
  };

  const LabelsYAxis = () => {
    const PARTS = numberOfHorizontalGuides;
    const maximumY = maximumYFromData;
    return (
      <>
        {new Array(PARTS + 1).fill(0).map((_, index) => {
          const x = FONT_SIZE;
          const ratio = index / numberOfHorizontalGuides;

          const yCoordinate = chartHeight - chartHeight * ratio + padding + FONT_SIZE / 2;
          return (
            <text x={x} y={yCoordinate} style={{ fill: '#ccc', fontSize: FONT_SIZE, fontFamily: 'Helvetica' }}>
              {parseFloat(String(maximumY * (index / PARTS))).toFixed(precision)}
            </text>
          );
        })}
      </>
    );
  };

  return (
    <Grid>
      <svg viewBox={`0 0 ${width} ${height}`}>
        <XAxis />
        <LabelsXAxis />
        <YAxis />
        <LabelsYAxis />
        {numberOfVerticalGuides && <VerticalGuides />}
        <HorizontalGuides />

        <polyline fill="none" stroke="#0074d9" strokeWidth={1} points={points} />
      </svg>
    </Grid>
  );
};

Graph.defaultProps = {
  data: defaultData,
  height: 200,
  width: 500,
  horizontalGuides: 4,
  verticalGuides: null,
  precision: 2,
};
