import Icon from '../Icon'
import classnames from 'classnames'
import './index.less'

/**
 * 空状态组件
 * @param {className} string 自定义类名
 * @param {src} string 空状态的图片地址
 * @param {text} string 空状态文本
 */
export default function Empty(props) {
  let { text, className, src } = props
  
  return <div className={classnames('emptyWrap', className)}>
    <div className="emptyInner">
      {
        src ? <img src={src} alt="空（empty）"/> :
          <Icon type="FaDropbox" />
      }
    </div>
    <p>{ text ? text : '空空如也'}</p>
  </div>
}