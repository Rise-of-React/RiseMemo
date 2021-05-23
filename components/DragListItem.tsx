import React, { CSSProperties } from 'react';
import { useDrag } from 'react-dnd';

export interface DragListItemProps {
  id: string;
  top: number;
  left: number;
}

const style: CSSProperties = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
};

export const DragListItem: React.FC<DragListItemProps> = ({ id, top, left, children }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'Box',
      item: { id, top, left },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, top, left]
  );
  console.log(children);
  if (isDragging) {
    return <div ref={drag} />;
  }
  return (
    <div ref={drag} style={{ ...style, left, top }} role="Box">
      {children}
    </div>
  );
};
