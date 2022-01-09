import styles from './index.less';
import { Outer } from '../components/Outer';
import { Inner } from '../components/Inner';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Outer>
        {(sb) => {
          console.log(sb);
          return <Inner sb={sb} />;
        }}
      </Outer>
    </div>
  );
}
