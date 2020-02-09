import React from 'react'
import classnames from 'classnames'
import styles from './index.less'

/**
 * 标签组件
 * @param {closable} boolean 是否可关闭
 * @param {onClose} func 标签关闭时的回调
 * @param {color} string 标签的颜色,不设置则为默认颜色
 */
export default function Tag(props) {
  let { children, closable, onClose, color } = props
  let tag = React.createRef()
  let handleClose = () => {
    onClose && onClose()
    tag.current.style.display = 'none'
  }
  return <div 
    className={classnames(styles.xTag, color ? styles.xTagHasColor : '')} 
    style={{ backgroundColor: color }}
    ref={tag}>
    { children } 
    { closable && <span className={styles.closeBtn} onClick={handleClose}>x</span> }
  </div>
}