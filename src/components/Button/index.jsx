import classnames from 'classnames'
import './index.less'

/**
 * @param {onClick} func 对外暴露的点击事件
 * @param {className} string 自定义类名
 * @param {type} string 按钮类型 primary | warning | info | default | pure
 * @param {shape} string 按钮形状 circle | radius(默认)
 */
export default function Button(props) {
  let { children, onClick, className, type, shape, block } = props
  return <div className={classnames('xButton', 'ripple', type, shape, block ? 'block' : '', className)} onClick={onClick}>
    { children }
  </div>
}