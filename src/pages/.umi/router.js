import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import RendererWrapper0 from '/Users/xujiang/Desktop/test/my_blog/src/pages/.umi/LocaleWrapper.jsx';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/index.html',
    redirect: '/home',
    exact: true,
    _title: '趣谈前端',
    _title_default: '趣谈前端',
  },
  {
    path: '/',
    redirect: '/home',
    exact: true,
    _title: '趣谈前端',
    _title_default: '趣谈前端',
  },
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts" */ '../../layouts'),
        })
      : require('../../layouts').default,
    routes: [
      {
        path: '/home',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__index" */ '../index'),
            })
          : require('../index').default,
        exact: true,
        _title: '趣谈前端',
        _title_default: '趣谈前端',
      },
      {
        path: '/welcome',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Welcome" */ '../Welcome'),
            })
          : require('../Welcome').default,
        exact: true,
        _title: '趣谈前端',
        _title_default: '趣谈前端',
      },
      {
        path: '/visualization',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Visualization" */ '../Visualization'),
            })
          : require('../Visualization').default,
        exact: true,
        _title: '趣谈前端',
        _title_default: '趣谈前端',
      },
      {
        path: '/openSource',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__OpenSource" */ '../OpenSource'),
            })
          : require('../OpenSource').default,
        exact: true,
        _title: '趣谈前端',
        _title_default: '趣谈前端',
      },
      {
        path: '/learnPunch',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__LearnPunch" */ '../LearnPunch'),
            })
          : require('../LearnPunch').default,
        exact: true,
        _title: '趣谈前端',
        _title_default: '趣谈前端',
      },
      {
        path: '/game',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Game" */ '../Game'),
            })
          : require('../Game').default,
        exact: true,
        _title: '趣谈前端',
        _title_default: '趣谈前端',
      },
      {
        path: '/effectiveness',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Effectiveness" */ '../Effectiveness'),
            })
          : require('../Effectiveness').default,
        exact: true,
        _title: '趣谈前端',
        _title_default: '趣谈前端',
      },
      {
        path: '/blog',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Blog" */ '../Blog'),
            })
          : require('../Blog').default,
        exact: true,
        _title: '趣谈前端',
        _title_default: '趣谈前端',
      },
      {
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__404__index" */ '../404/index'),
            })
          : require('../404/index').default,
        exact: true,
        _title: '趣谈前端',
        _title_default: '趣谈前端',
      },
      {
        component: () =>
          React.createElement(
            require('/Users/xujiang/Desktop/test/my_blog/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
        _title: '趣谈前端',
        _title_default: '趣谈前端',
      },
    ],
    _title: '趣谈前端',
    _title_default: '趣谈前端',
  },
  {
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "p__404__index" */ '../404/index'),
        })
      : require('../404/index').default,
    exact: true,
    _title: '趣谈前端',
    _title_default: '趣谈前端',
  },
  {
    component: () =>
      React.createElement(
        require('/Users/xujiang/Desktop/test/my_blog/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
    _title: '趣谈前端',
    _title_default: '趣谈前端',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
