import { eventEmitter } from '@/utils/EventEmitter';
import { Button } from 'antd';
import { useRef } from 'react';

export const B: React.FC<{}> = () => {
  const countRef = useRef(0);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          countRef.current += 1;
          console.log('B 发射 plus 信号, count: ', countRef.current);
          eventEmitter.emit('plus', countRef.current);
        }}
      >
        B 发射信号
      </Button>
    </>
  );
};
