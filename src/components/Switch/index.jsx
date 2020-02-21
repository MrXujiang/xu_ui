import { useState } from 'react'
import classnames from 'classnames'
import './index.less'

/**
 * switch
 * @param {onClick} func 对外暴露的点击事件
 * @param {checked} bool 是否被选中
 * @param {disabled} bool 是否被禁用
 * @param {onText} string 开启状态的文本
 * @param {offText} string 关闭状态的文本
 * @param {onChange} func 状态切换时的文本
 * @param {size} string 组件的尺寸
 */
export default function Switch(props) {
  let { color = '#09f', className, checked, disabled, onText, offText, onChange, size } = props
  let handleChange = (e) => {
    e.persist()
    onChange && onChange(e.target.checked)
  }
  return <div className={classnames('xSwitch', className)}>
    <label className={classnames('xSwitchInner', size)} style={{pointerEvents: disabled ? 'none' : 'default', cursor: disabled ? 'not-allowed' : 'pointer'}}>
      <input type='checkbox' checked={checked} onChange={handleChange} />
      <span 
        className="xSwitchAnimatingNode"
        style={{ backgroundColor: color }} data-onText={onText}>
      </span>
      <span className="offText">{ offText }</span>
    </label>
  </div>
}