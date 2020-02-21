import PropTypes from 'prop-types'
import CodeImg from '../../assets/code_white.png'
import './index.less'

/**
 * 骨架屏组件(SEO)
 * 
 */
export default function Skeleton(props) {
  let { isLoading = true, loadingText = '正在为您疯狂加载...' } = props
  return isLoading ? <div className="skeletonWrap">
    <div className="skeletonContent" data-loadingText={loadingText}>
      <div className="imgBox">
        <img src={CodeImg} alt="趣谈前端,学前端学React" />
      </div>
      <div className="rightBox">
        <h2 className="tit">趣谈前端@徐小夕的Blog</h2>
        <div className="labelWrap">
          <span>前端</span>
          <span>前端框架</span>
          <span>前端面试</span>
          <span>前端职业发展规划</span>
          <span>React/Vue/Jquery</span>
          <span>前端工程化/可视化</span>
        </div>
        <p className="desc">
          趣谈前端作为笔者开创的第一个专栏,主要用来总结笔者在多年前端工作中积累的React,Vue, Node, javascript, CSS,
          设计模式,工程化的实战经验,作为一名一线的架构师和面试官, 也会总结一些前端的面试经验和职业思考和规划.
        </p>
      </div>
    </div>
  </div> : null
}

Skeleton.propTypes = {
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string
}