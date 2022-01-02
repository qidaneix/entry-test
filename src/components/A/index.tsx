import { eventEmitter } from '@/utils/EventEmitter';
import { useEffect, useState, useCallback } from 'react';

export const A: React.FC<{}> = () => {
  const [count, setCount] = useState<number>(0);

  const handlePlus = useCallback((countt: number) => {
    console.log('A 收到 plus 信号, count: ', countt);
    setCount(countt);
  }, []);

  useEffect(() => {
    eventEmitter.on('plus', handlePlus);

    return () => {
      eventEmitter.off('plus', handlePlus);
    };
  });

  return (
    <div>
      <h2>接受信号：</h2>
      <p>{count}</p>
    </div>
  );
};
