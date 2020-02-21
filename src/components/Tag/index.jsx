import React from 'react'
import classnames from 'classnames'
import './index.less'

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
    className={classnames('xTag', color ? 'xTagHasColor' : '')} 
    style={{ backgroundColor: color }}
    ref={tag}>
    { children } 
    { closable && <span className="closeBtn" onClick={handleClose}>x</span> }
  </div>
}