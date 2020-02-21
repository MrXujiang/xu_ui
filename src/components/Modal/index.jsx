import { useState, useEffect } from 'react'
import Button from '../Button'
import Icon from '../Icon'
import PropTypes from 'prop-types'
import './index.less'

let hiddenCount = 0
/**
 * Modal Modal组件
 * @param {afterClose} func Modal完全关闭后的回调
 * @param {bodyStyle} object Modal body的样式
 * @param {cancelText} string|ReactNode 取消按钮文字
 * @param {centered} bool 居中展示Modal
 * @param {closable} bool 是否展示右上角的关闭按钮
 * @param {closeIcon} ReactNode 自定义关闭图标
 * @param {destroyOnClose} bool 关闭时销毁Modal里的子元素
 * @param {footer} null|ReactNode 底部内容，当不需要底部默认按钮时，可以设置为footer={null}
 * @param {keyboard} bool 是否支持键盘的esc键退出
 * @param {mask} bool 是否展示遮罩
 * @param {maskclosable} bool 点击蒙层是否允许关闭
 * @param {maskStyle} object 遮罩样式
 * @param {okText} string|ReactNode 确认按钮的文本
 * @param {title} string|ReactNode 标题内容
 * @param {visible} bool Modal是否可见
 * @param {width} string Modal宽度
 * @param {onCancel} func 点击遮罩或者取消按钮，或者键盘esc按键时的回调
 * @param {onOk} func 点击确定的回调
 */
function Modal(props) {
  const {
    afterClose,
    bodyStyle,
    cancelText = '取消',
    centered,
    closable = true,
    closeIcon,
    destroyOnClose,
    footer,
    keyboard,
    mask = true,
    maskclosable = true,
    maskStyle,
    okText = '确认',
    title,
    visible = false,
    width = '520px',
    onCancel,
    onOk,
    children
  } = props

  let [isHidden, setHidden] = useState(!visible)
  let [destroyChild, setDestroyChild] = useState(false)

  const hiddenModal = (cb) => {
    setHidden(() => {
      cb && cb()
      return true
    })
    if(destroyOnClose) {
      setDestroyChild(true)
    }
    document.body.style.overflow = 'auto'
  }

  const handleClose = () => {
    hiddenModal(onCancel)
  }

  const handleOk = () => {
    hiddenModal(onOk)
  }

  const toggle = () => {
    setHidden(prev => !prev)
  }

  const closeModal = function (event) {
    let e = event || window.event || arguments.callee.caller.arguments[0]
    if (e && e.keyCode === 27) { 
      handleClose()
    }
  }

  useEffect(() => {
    if(isHidden && hiddenCount) {
      hiddenCount = 0
      afterClose && afterClose()
    }
    hiddenCount = 1
  }, [isHidden])

  useEffect(() => {
    if(!isHidden) {
      document.body.style.overflow = 'hidden'
    }
  }, [isHidden])

  useEffect(() => {
    if(visible) {
      if(destroyOnClose) {
        setDestroyChild(true)
      }
    }
  }, [visible, destroyOnClose])

  useEffect(() => {
    keyboard && document.addEventListener('keydown', closeModal, false)
    return () => {
      keyboard && document.removeEventListener('keydown', closeModal, false)
    }
  }, [])

  return <div className="xModalWrap" style={{display: isHidden ? 'none' : 'block'}}>
    <div 
      className={`xModalContent${centered ? ' xCentered' : ''}`}
      style={{
        width
      }}
    >
      <div className="xModalHeader">
        <div className="xModalTitle">
          { title }
        </div>
      </div>
      {
        closable && 
        <span className="xModalCloseBtn" onClick={handleClose}>
          { closeIcon || <Icon type="FaTimes" /> }
        </span>
      }
      <div className="xModalBody" style={bodyStyle}>
        { destroyChild ? null : children }
      </div>
      {
        footer === null ? null :
          <div className="xModalFooter">
            {
              footer ? footer :
                <div className="xFooterBtn">
                  <Button className="xFooterBtnCancel" onClick={handleClose} type="pure">{ cancelText }</Button>
                  <Button className="xFooterBtnOk" onClick={handleOk}>{ okText }</Button>
                </div>
            }
          </div>
      }
    </div>
    {
      mask && <div 
        className="xModalMask" 
        style={maskStyle} 
        onClick={maskclosable && handleClose}>
      </div>
    }
  </div> 
}

Modal.propTypes = {
  afterClose: PropTypes.func,
  bodyStyle: PropTypes.object,
  cancelText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  centered: PropTypes.bool,
  closable: PropTypes.bool,
  closeIcon: PropTypes.element,
  destroyOnClose: PropTypes.bool,
  footer: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object
  ]),
  keyboard: PropTypes.bool,
  mask: PropTypes.bool,
  maskclosable: PropTypes.bool,
  maskStyle: PropTypes.object,
  okText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  visible: PropTypes.bool,
  width: PropTypes.string,
  onCancel: PropTypes.func,
  onOk: PropTypes.func
}

export default Modal

