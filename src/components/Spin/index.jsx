import './index.less'

/**
 * Spin组件
 * @param {isLoading} bool 加载中状态，默认为true
 * @param {loadingText} string 加载状态的文本
 * @param {hiddenText} bool 是否隐藏加载状态的文本
 * @param {type} string spin的类型，目前有ball和line两种
 * @param {bgColor} string 加载动画颜色
 */
export default function Spin(props) {
  const spinType = {
    line: 'line'
  }
  const { 
    type,
    isLoading = true, 
    loadingText = '正在加载中...',
    hiddenText = false,
    bgColor = '#06c'
  } = props
  return isLoading ? 
    <div className="loader">
      <div 
        className={`loader-inner ball-spin-fade-loader${spinType[type] ? ' ' + spinType[type] : ''}`}
        style={{backgroundColor: bgColor}}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> 
      {
        !hiddenText && <p className="x-loading-text">{ loadingText }</p>
      }
    </div> : null
}