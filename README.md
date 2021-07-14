# RiseMemo

Maintenance your project with memo. Based with React Typescript and Material UI

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn add
yarn dev
```

> Development Process

- Atomic Design System with Storybook
- State Management -> Redux? Recoil? Mobx?
- Test Driven Development -> Jest Library
- Event Driven Architecture
- Start Workflow with Github Project Kanban & Sprint Style
- Make Github issue with Enhancement & Error and To Fix

> Library

- React Material-UI
- React Beautiful Drag & Drop
- immutability-helper(for update state easily)
- React-router-dom
- Dateformat for date formatting

> Design

- [Design Figma Link](https://www.figma.com/file/UseUiYSjf0aLjAQJIpoOhw/RiseOfMemo?node-id=0%3A)

> Learned

- cssBasedLine : 어떤 브라우저를 돌아가느냐에 상관없이 일괄적인 스타일을 적용되려면, CSS를 전역에서 정규화(normalize)시켜줌
- Graph 만들기.
      - Canvas VS SVG
      - Bar Chart는 React tag로 가능.
      - Line Chart는 polyline tag / Curved Line Chart는 Path tag with Q/T/S etc
      - Canvas가 SVG보다 더 괜찮은 이유? 수많은 데이터를 처리할 때 SVG는 DOM Node를 만들어가면서 생성하기때문에 효율이 좋지않고 DOM관련 함수들이 느리기때문에 성능 문제도 있다. 하지만 SVG에서 상호작용해야하는 그러한 기능이 추가되면 쉽게 처리할수 있는 장점도 있는듯함.
- Event Type for React
      - MouseEvent / SVGElement / HTMLElement
      - React에서의 Icon내의 onClick을 통한 handle type 처리에서 onClick type 처리.
