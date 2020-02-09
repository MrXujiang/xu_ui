import { 
  Button
} from '@/components'
import styles from './index.less'
const NoFoundPage = () => {
  const onClick = () => {
    window.location.href = '/'
  }
  return <div className={styles.notFoundWrap}>
    <span className={styles.notFount}>404</span>
    <div className={styles.notFountText}>页面未发现,请返回&nbsp;&nbsp;<Button onClick={onClick}>首页</Button></div>
  </div>
}

export default NoFoundPage
