import classnames from 'classnames'
import PropTypes from 'prop-types'
import './index.less'

const colorArr = {
  'success': '#52c41a',
  'warning': '#faad14',
  'error': '#f5222d',
  'default': '#d9d9d9',
  'processing': '#1890ff'
}

/**
 * 徽标数组件
 * @param {style} 更改badge样式
 * @param {color} 自定义小圆点的颜色
 * @param {count} 展示的数字
 * @param {dot} 不展示数字,只展示一个小圆点
 * @param {offset} 设置状态点的偏移
 * @param {overflowCount} 展示封顶的数字
 * @param {showZero} 当数值为0时是否展示Badge
 * @param {status} 设置badge为状态点, 类型有success|warning|error|default|processing
 * @param {text} 当设置status时状态点的文本
 */
function Badge(props) {
  const {
    color,
    count = 0,
    dot,
    offset,
    overflowCount,
    showZero,
    status,
    text,
    style,
    children
  } = props
  return <div className="xBadgeWrap">
    {
      status || color ? <div className="statusDotWrap">
        <span className="dot" style={{backgroundColor: color || colorArr[status] || colorArr.default}}></span>
        { text }
      </div> :
        <div>
          <span 
            className={classnames('badge', dot ? 'badgeDot' : '')} 
            style={{
              right: offset ? offset[0] + 'px' : '', 
              top: offset ? offset[1] + 'px' : '',
              display: !showZero && !count ? 'none' : 'inline-block',
              ...style
            }}
          >
            { !dot && (overflowCount && overflowCount < count ? `${overflowCount}+` : count) }
          </span>
          { children }
        </div>  
    }
  </div>
}

Badge.propTypes = {
  style: PropTypes.object,
  color: PropTypes.string,
  count: PropTypes.number, 
  dot: PropTypes.bool, 
  offset: PropTypes.array, 
  overflowCount: PropTypes.number, 
  showZero: PropTypes.bool, 
  status: PropTypes.string, 
  zIndex: PropTypes.number,
  text: PropTypes.string
}

export default Badge

