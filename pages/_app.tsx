import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React from 'react';
import { DndProvider } from 'react-dnd';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Component {...pageProps} />
    </DndProvider>
  );
}

export default MyApp;
