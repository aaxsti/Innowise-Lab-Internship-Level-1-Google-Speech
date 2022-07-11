import { useEffect, FC } from 'react';
import useHotjar from 'react-use-hotjar';
import App from './App';

// eslint-disable-next-line no-console
const myCustomLogger = console.info;

const HotjarReadyApp: FC = () => {
  const { initHotjar } = useHotjar();

  useEffect(() => {
    initHotjar(3060380, 6, false, myCustomLogger);
  }, [initHotjar]);

  return <App />;
};

export default HotjarReadyApp;
