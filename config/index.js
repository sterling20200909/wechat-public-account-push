export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID 
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  // APP_ID: "",

  // 公众号APP_SECRET 
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  // APP_SECRET: "",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [
   *  {
   *    // 想要发送的人的名字
   *    name: "sterling",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "ocGed57xUn4eW0MPqeDwT-ITUD6g",
   *    // 你想对他发送的模板消息的模板ID
   *    useTemplateId: "B4LK_Pa-aBdise2sDzQiJHi9F5gDqhlRbqTh3GyTzpE",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: ""
   *   }, 
   * ]
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "ysterling",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ocGed55wmhDFTf9t6govislfPkrU",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "BsxYwhGPHj7B3q34kZup8g1tRL7VUgshijaSJhINJ6I",
      // 所在省份
      province: "湖北",
      // 所在城市
      city: "武汉",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://www.shanghaidisneyresort.com/"
    },
     {
      // 想要发送的人的名字
      name: "Liz.",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ocGed5-Vb00w8wVlbfOCkWkTZWRE",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "BsxYwhGPHj7B3q34kZup8g1tRL7VUgshijaSJhINJ6I",
      // 所在省份
      province: "湖北",
      // 所在城市
      city: "武汉",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://www.shanghaidisneyresort.com/"
    },
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "HaMmWea_HIxeZq5YeYm6T-Dg6T41dN_If5SVTs98WaE",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "sterling",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ocGed57xUn4eW0MPqeDwT-ITUD6g",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "湖北",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "武汉",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "小猪猪", "year": "1996", "date": "01-04"},
    {"type": "节日", "name": "交往纪念日", "year": "2018", "date": "02-21"},
    {"type": "生日", "name": "大猪猪", "year": "1993", "date": "11-16"},
    {"type": "生日", "name": "圆圆", "year": "2020", "date": "07-18"},
    {"type": "节日", "name": "发薪日", "year": "2022", "date": "10-05"},
    {"type": "节日", "name": "发薪日", "year": "2022", "date": "11-05"},
    {"type": "节日", "name": "发薪日", "year": "2022", "date": "12-05"},
    {"type": "节日", "name": "发薪日", "year": "2023", "date": "01-05"},
    {"type": "节日", "name": "发薪日", "year": "2023", "date": "02-05"},
    {"type": "节日", "name": "发薪日", "year": "2023", "date": "03-05"},
    {"type": "节日", "name": "发薪日", "year": "2023", "date": "04-05"},
    {"type": "节日", "name": "发薪日", "year": "2023", "date": "05-05"},
    {"type": "节日", "name": "发薪日", "year": "2023", "date": "06-05"},
    {"type": "节日", "name": "发薪日", "year": "2023", "date": "07-05"},
    {"type": "节日", "name": "发薪日", "year": "2023", "date": "08-05"},
    {"type": "节日", "name": "发薪日", "year": "2023", "date": "09-05"},
    {"type": "节日", "name": "发薪日", "year": "2023", "date": "10-05"},
    {"type": "节日", "name": "发薪日", "year": "2023", "date": "11-05"},
    {"type": "节日", "name": "发薪日", "year": "2023", "date": "12-05"},
    {"type": "节日", "name": "发薪日", "year": "2024", "date": "01-05"},
     {"type": "节日", "name": "发薪日", "year": "2024", "date": "02-05"},
     {"type": "节日", "name": "发薪日", "year": "2024", "date": "03-05"},
     {"type": "节日", "name": "发薪日", "year": "2024", "date": "04-05"},
     {"type": "节日", "name": "发薪日", "year": "2024", "date": "05-05"},
     {"type": "节日", "name": "发薪日", "year": "2024", "date": "06-05"},
     {"type": "节日", "name": "发薪日", "year": "2024", "date": "07-05"},
     {"type": "节日", "name": "发薪日", "year": "2024", "date": "08-05"},
     {"type": "节日", "name": "发薪日", "year": "2024", "date": "09-05"},
     {"type": "节日", "name": "发薪日", "year": "2024", "date": "10-05"},
     {"type": "节日", "name": "发薪日", "year": "2024", "date": "11-05"},
     {"type": "节日", "name": "发薪日", "year": "2024", "date": "12-05"},
     {"type": "节日", "name": "发薪日", "year": "2025", "date": "01-05"},
     {"type": "节日", "name": "发薪日", "year": "2025", "date": "02-05"},
     {"type": "节日", "name": "发薪日", "year": "2025", "date": "03-05"},
     {"type": "节日", "name": "发薪日", "year": "2025", "date": "04-05"},
    {"type": "节日", "name": "发薪日", "year": "2025", "date": "05-05"},
     {"type": "节日", "name": "发薪日", "year": "2025", "date": "06-05"},
     {"type": "节日", "name": "发薪日", "year": "2025", "date": "07-05"},
     {"type": "节日", "name": "发薪日", "year": "2025", "date": "08-05"},
    {"type": "节日", "name": "发薪日", "year": "2025", "date": "09-05"},
     {"type": "节日", "name": "发薪日", "year": "2025", "date": "10-05"},
     {"type": "节日", "name": "发薪日", "year": "2025", "date": "11-05"},
     {"type": "节日", "name": "发薪日", "year": "2025", "date": "12-05"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 1,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2018-02-21"},
    // 结婚纪念日
    //{"keyword": "marry_day", date: "2020-01-04"},
    // 退伍日, 不用可以删掉
    //{"keyword": "ex_day", date: "2022-08-31"},
    // sakana日
    // {"keyword": "sakana_day", date: "2022-01-06"},
    // ... 
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    //{"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
 // LITERARY_PREFERENCE: ""


}
