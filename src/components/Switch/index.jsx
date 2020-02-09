import { useState } from 'react'
import classnames from 'classnames'
import styles from './index.less'

/**
 * switch
 * @param {onClick} func 对外暴露的点击事件
 */
export default function Switch(props) {
  let { color = '#09f', className, checked, disabled, onText, offText, onChange, size } = props
  let handleChange = (e) => {
    e.persist()
    onChange && onChange(e.target.checked)
  }
  return <div className={classnames(styles.xSwitch, className)}>
    <label className={classnames(styles.xSwitchInner, styles[size])} style={{pointerEvents: disabled ? 'none' : 'default', cursor: disabled ? 'not-allowed' : 'pointer'}}>
      <input type='checkbox' checked={checked} onChange={handleChange} />
      <span 
        className={styles.xSwitchAnimatingNode} 
        style={{ backgroundColor: color }} data-onText={onText}>
      </span>
      <span className={styles.offText}>{ offText }</span>
    </label>
  </div>
}