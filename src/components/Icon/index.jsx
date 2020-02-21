import PropTypes from 'prop-types'
import * as Fa from 'react-icons/fa'
import './index.less'

/**
 * Icon Icon组件
 * @param {type} string icon类型
 * @param {size} string icon大小 px|lg|xs
 * @param {rotation} number 选转角度
 * @param {style} object 图标样式
 */
function Icon(props) {
  const { type, size, rotation, style } = props
  const IconComponent = Fa[type]
  return <IconComponent size={size} rotation={rotation} style={style} />
}

Icon.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  rotation: PropTypes.number,
  style: PropTypes.object
}

export default Icon

