import styles from './index.less';
import { A } from '@/components/A';
import { B } from '@/components/B';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <A />
      <B />
    </div>
  );
}
