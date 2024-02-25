# 基于react的轻量级UI组件库
基于react的轻量级组件库，目前不依赖任何第三方ui组件库，支持按需导入，可定制

目前已开发完成如下ui组件：
* Button 按钮组件
* Badge 徽标数组件
* Alert 警告提示组件
* Drawer 抽屉组件
* Progress 进度条组件
* Switch 开关组件
* Tag tag标签页组件
* Modal 轻量实用的模态窗组件
* Icon组件（基于react-icons的二次封装）
* Input 输入框组件
* Spin 加载组件
* Notification 通知提示
* Message 消息提示框组件
* Empty 空状态组件
* Skeleton 专为个人网站准备的骨架屏组件

正在开发的组件：
* Form form表单组件
* Table 列表组件
* Menu 菜单组件
* DropDown 下拉框组件

后续会开发出更多优质轻量组件，敬请关注。

# 技术实现与版本
该组件库基于一下技术版本开发：
* react: 16.8.6
* react-dom: 6.8.6
* classnames

# 使用

## 1.安装
``` js
npm install @alex_xu/xui
```
或者用yarn安装
``` js
yarn add @alex_xu/xui
```
## 2. 使用
``` jsx
import { 
  Button,
  Skeleton,
  Empty,
  Progress,
  Tag,
  Switch,
  Drawer,
  Badge,
  Alert
} from '@alex_xu/xui'
import { useState } from 'react'
import styles from './index.css'

export default function() {
  const [visible, setVisible] = useState(false)
  let show = () => { setVisible(true)}
  let close = () => { setVisible(false)}
  return (
    <div className={styles.normal}>
      <Button className={styles.btn}>default</Button>
      <Button className={styles.btn} type="warning">warning</Button>
      <Button className={styles.btn} type="primary">primary</Button>
      <Button className={styles.btn} type="info">info</Button>
      <Button className={styles.btn} type="pure">pure</Button>
      <Button className={styles.btn} type="primary" shape="circle">circle</Button>
      <Button className={styles.mb16} type="primary" block>primary&block</Button>
      <Button type="warning" shape="circle" block onClick={show}>circle&block</Button>
      {/* <Skeleton /> */}
      <Progress
        percent={10}
      />
      <Progress
        percent={50}
        themeColor="#009933"
      />
      <Progress
        percent={50}
        width={240}
      />
      <Progress
        percent={30}
        width={240}
        textColor="#fff"
      />
      <Progress
        percent={50}
        width={200}
        themeColor="#FF6666"
        hiddenText
      />
      <Progress
        percent={10}
        themeColor="#6699FF"
        statusScope={[[18, 'red'], [40, 'orange']]}
      />
      <Progress
        percent={20}
        themeColor="#6699FF"
        statusScope={[[18, 'red'], [40, 'orange']]}
      />
      <div className={styles.mb16}></div>
      <Tag>Html</Tag>
      <Tag closable>react</Tag>
      <Tag color="#FF99CC">Css3</Tag>
      <Tag color="#06c" closable>react</Tag>
      <Tag color="rgb(135, 208, 104)">Node</Tag>
      <div className={styles.mb16}></div>
      <Switch onText="on" offText="off" size="small" />
      <Badge text="ddd" status="warning">6666ngd</Badge>
      <div className={styles.mb16}></div>
      <Alert message="success tip" />
      <Alert message="success tip" type="success" />
      <Alert message="success tip" type="error" />
      <Alert message="success tip" type="info" />
      <Alert message="success tip" type="info" closable />
      <Alert message="success tip" description="skfjdsalajdfjadkfjaldfhjaskdn你好,欢迎光临" closable type="success" />
      <Empty />
      <Drawer visible={visible} onClose={close} destroyOnClose>
        <h3>我是标题</h3>
        <br/>
        <input type="text"/>
        <br />
        <textarea />
      </Drawer>
    </div>
  )
}

```

欢迎提出更多issue以便让组件库更健壮

