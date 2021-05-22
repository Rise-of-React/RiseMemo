import React from 'react';
import { useDrag } from 'react-dnd';

export interface DragListItemProps {
  id: string;
  top: number;
  left: number;
}

export const DragListItem: React.FC<DragListItemProps> = ({ id, top, left, children }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'ListItem',
      item: { id, top, left },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, top, left]
  );

  if (isDragging) {
    return <div ref={drag} />;
  }
  return (
    <div ref={drag} style={{ left, top }}>
      {children}
    </div>
  );
};
