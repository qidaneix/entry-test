import styles from './index.less';
import { A } from './components/A';
import { theme } from '../data/theme';
import { ThemeContext } from './contexts';

export default function IndexPage() {
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h1 className={styles.title}>Page index</h1>
        <A />
      </div>
    </ThemeContext.Provider>
  );
}
