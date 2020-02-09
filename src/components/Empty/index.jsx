import classnames from 'classnames'
import styles from './index.less'

/**
 * 空状态组件
 * @param {className} string 自定义类名
 * @param {text} string 空状态文本
 */
export default function Empty(props) {
  let { text, className } = props
  
  return <div className={classnames(styles.emptyWrap, className)}>
    <div className={styles.emptyInner}><span className="icon-finder"></span></div>
    <p>{ text ? text : '空空如也'}</p>
  </div>
}