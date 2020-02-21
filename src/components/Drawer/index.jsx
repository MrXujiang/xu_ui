import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.less'

/**
 * Drawer 抽屉组件
 * @param {visible} bool 抽屉是否可见
 * @param {closable} bool 是否显示右上角的关闭按钮
 * @param {destroyOnClose} bool 关闭时销毁里面的子元素
 * @param {getContainer} HTMLElement 指定 Drawer 挂载的 HTML 节点, false 为挂载在当前 dom
 * @param {maskClosable} bool 点击蒙层是否允许关闭抽屉
 * @param {mask} bool 是否展示遮罩
 * @param {drawerStyle} object 用来设置抽屉弹出层样式
 * @param {width} number|string 弹出层宽度
 * @param {zIndex} number 弹出层层级
 * @param {placement} string 抽屉方向
 * @param {onClose} string 点击关闭时的回调
 */
function Drawer(props) {
  const { 
    closable = true, 
    destroyOnClose, 
    getContainer = document.body, 
    maskClosable = true, 
    mask = true, 
    drawerStyle, 
    width = '300px',
    zIndex = 10,
    placement = 'right', 
    onClose,
    children
  } = props

  let [visible, setVisible] = useState(props.visible)
  let [isDesChild, setIsDesChild] = useState(false)

  const handleClose = () => {
    onClose && onClose()
    setVisible((prev) => {
      if(getContainer !== false && prev) {
        getContainer.style.overflow = 'auto'
      }
      return false
    })
    if(destroyOnClose) {
      setIsDesChild(true)
    }
  }

  useEffect(() => {
    setVisible(() => {
      if(getContainer !== false && props.visible) {
        getContainer.style.overflow = 'hidden'
      }
      return props.visible
    })
    setIsDesChild(false)
  }, [props.visible, getContainer])

  const childDom = (
    <div 
      className="xDrawerWrap" 
      style={{
        position: getContainer === false ? 'absolute' : 'fixed',
        width: visible ? '100%' : '0',
        zIndex
      }}
    >
      { !!mask && <div className="xDrawerMask" onClick={maskClosable ? handleClose : null}></div> }
      <div 
        className="xDrawerContent" 
        style={{
          width,
          [placement]: visible ? 0 : '-100%',
          ...drawerStyle
        }}>
        {
          isDesChild ? null : children
        }
        {
          !!closable && <span className="xCloseBtn" onClick={handleClose}>X</span>
        }
      </div>
    </div>
  )

  return getContainer === false ? childDom : ReactDOM.createPortal(childDom, getContainer)
}

Drawer.propTypes = {
  visible: PropTypes.bool,
  closable: PropTypes.bool, 
  destroyOnClose: PropTypes.bool, 
  getContainer: PropTypes.element, 
  maskClosable: PropTypes.bool, 
  mask: PropTypes.bool, 
  drawerStyle: PropTypes.object, 
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  zIndex: PropTypes.number,
  placement: PropTypes.string, 
  onClose: PropTypes.func
}

export default Drawer