import React from 'react';
import {
  _setIntlObject,
  addLocaleData,
  IntlProvider,
  intlShape,
  LangContext,
  _setLocaleContext
} from 'umi-plugin-locale/lib/locale';

const InjectedWrapper = (() => {
  let sfc = (props, context) => {
    _setIntlObject(context.intl);
    return props.children;
  };
  sfc.contextTypes = {
    intl: intlShape,
  };
  return sfc;
})();


const baseNavigator = true;
const baseSeparator = '-';
const useLocalStorage = true;


const localeInfo = {
  'en-US': {
    messages: {
      ...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/xujiang/Desktop/test/my_blog/src/locales/en-US.js')),
    },
    locale: 'en-US',
    
    data: require('react-intl/locale-data/en'),
    momentLocale: '',
  },
};

class LocaleWrapper extends React.Component{
  state = {
    locale: 'zh-CN',
  };
  getAppLocale(){
    let appLocale = {
      locale: 'zh-CN',
      messages: {},
      data: require('react-intl/locale-data/zh'),
      momentLocale: 'zh-cn',
    };

    const runtimeLocale = require('umi/_runtimePlugin').mergeConfig('locale') || {};
    const runtimeLocaleDefault =  typeof runtimeLocale.default === 'function' ? runtimeLocale.default() : runtimeLocale.default;
    if (
      useLocalStorage
      && typeof localStorage !== 'undefined'
      && localStorage.getItem('umi_locale')
      && localeInfo[localStorage.getItem('umi_locale')]
    ) {
      appLocale = localeInfo[localStorage.getItem('umi_locale')];
    } else if (
      typeof navigator !== 'undefined'
      && localeInfo[navigator.language]
      && baseNavigator
    ) {
      appLocale = localeInfo[navigator.language];
    } else if(localeInfo[runtimeLocaleDefault]){
      appLocale = localeInfo[runtimeLocaleDefault];
    } else {
      appLocale = localeInfo['zh-CN'] || appLocale;
    }
    window.g_lang = appLocale.locale;
    window.g_langSeparator = baseSeparator || '-';
    appLocale.data && addLocaleData(appLocale.data);

    // support dynamic add messages for umi ui
    // { 'zh-CN': { key: value }, 'en-US': { key: value } }
    const runtimeLocaleMessagesType = typeof runtimeLocale.messages;
    if (runtimeLocaleMessagesType === 'object' || runtimeLocaleMessagesType === 'function') {
      const runtimeMessage = runtimeLocaleMessagesType === 'object'
        ? runtimeLocale.messages[appLocale.locale]
        : runtimeLocale.messages()[appLocale.locale];
      Object.assign(appLocale.messages, runtimeMessage || {});
    }

    return appLocale;
  }
  reloadAppLocale = () => {
    const appLocale = this.getAppLocale();
    this.setState({
      locale: appLocale.locale,
    });
  };

  render(){
    const appLocale = this.getAppLocale();
    // react-intl must use `-` separator
    const reactIntlLocale = appLocale.locale.split(baseSeparator).join('-');
    const LangContextValue = {
      locale: reactIntlLocale,
      reloadAppLocale: this.reloadAppLocale,
    };
    let ret = this.props.children;
    ret = (<IntlProvider locale={reactIntlLocale} messages={appLocale.messages}>
      <InjectedWrapper>
        <LangContext.Provider value={LangContextValue}>
          <LangContext.Consumer>{(value) => {
            _setLocaleContext(value);
            return this.props.children
            }}</LangContext.Consumer>
        </LangContext.Provider>
      </InjectedWrapper>
    </IntlProvider>)
    return ret;
  }
}
export default LocaleWrapper;
