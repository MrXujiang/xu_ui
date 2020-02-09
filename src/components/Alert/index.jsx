import { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './index.less'

/**
 * 警告提示组件
 * @param {style} object 更改Alert样式
 * @param {closable} bool 是否显示关闭按钮, 默认不显示
 * @param {closeText} string|reactNode 自定义关闭按钮
 * @param {message} string 警告提示内容
 * @param {description} string 警告提示的辅助性文字
 * @param {type} string 警告的类型
 * @param {onClose} func 关闭时触发的事件
 */
function Alert(props) {
  const {
    style,
    closable,
    closeText,
    message,
    description,
    type,
    onClose
  } = props
  let [visible, setVisible] = useState(true)

  const handleColse = () => {
    setVisible(false)
    onClose && onClose()
  }
  return visible ? 
    <div 
      className={classnames(styles.xAlertWrap, styles[type] || styles.warning)}
      style={{
        opacity: visible ? '1' : '0',
        ...style
      }}
    >
      <div className={styles.alertMes}>{ message }</div>
      <div className={styles.alertDesc}>{ description }</div>
      {
        !!closable && <span className={styles.closeBtn} onClick={handleColse}>{ closeText ? closeText : 'x' }</span>
      }
    </div> : null
}

Alert.propTypes = {
  style: PropTypes.object,
  closable: PropTypes.bool,
  closeText: PropTypes.string,
  message: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  onClose: PropTypes.func
}

export default Alert

