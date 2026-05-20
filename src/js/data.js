import dHome from './../assets/d_home.svg';
import dSkills from './../assets/d_skills.svg';
import dExp from './../assets/d_exp.svg';
import dWorks from './../assets/d_works.svg';
import dContact from './../assets/d_contact.svg';
import sGithub from './../assets/s_github.svg';
import sBlog from './../assets/s_blog.svg';
import sZh from './../assets/s_zh.svg';
import sWb from './../assets/s_wb.svg';
import eAndroid from './../assets/e_android.jpg';

export default {
  cn: {
    header: {
      langList: ['中'],
      titleList: [
        {
          svg: dHome,
          title: '首页'
        },
        {
          svg: dSkills,
          title: '能力'
        },
        {
          svg: dExp,
          title: '经历'
        },
        {
          svg: dWorks,
          title: '作品集'
        },
        {
          svg: dContact,
          title: '联系我'
        }
      ]
    },
    footer: ['Released under the MIT License', 'All Rights Reserved ', `Copyright © 2014-${new Date().getFullYear()} TMX`],
    overview: {
      infoList: ['34岁', '本科', '金华', '男'],
      quote: '持续追求代码质量、项目稳定性与用户体验优化',
      desList: ['我叫唐墨夏', '10年移动端与前端全栈开发经验', '求职意向：Web前端 / Android', '邮箱：csfwff@163.com', '手机：17706841382（微信：csfwff）', '个人网站：https://sszsj.com/']
    },
    skill: {
      outCircleList: [
        {
          bg: {
            backgroundColor: 'rgba(121,100,102,0.8)'
          },
          name: 'Android'
        },
        {
          bg: {
            backgroundColor: 'rgba(49,65,82,0.8)'
          },
          name: 'UniApp'
        },
        {
          bg: {
            backgroundColor: 'rgba(76,157,160,0.8)'
          },
          name: 'Vue'
        },
        {
          bg: {
            backgroundColor: 'rgba(66,66,66,0.8)'
          },
          name: 'Node.js'
        },
        {
          bg: {
            backgroundColor: 'rgba(193,131,106,0.8)'
          },
          name: '多端小程序'
        },
        {
          bg: {
            backgroundColor: 'rgba(117,148,179,0.8)'
          },
          name: 'React'
        },
        {
          bg: {
            backgroundColor: 'rgba(71,83,94,0.8)'
          },
          name: 'Element UI'
        },
        {
          bg: {
            backgroundColor: 'rgba(147,147,189,0.8)'
          },
          name: 'AI Coding'
        }
      ],
      innerCircleList: [
        {
          bg: {
            backgroundColor: 'rgba(179,164,140,0.8)'
          },
          name: 'Java'
        },
        {
          bg: {
            backgroundColor: 'rgba(171,209,220,0.8)'
          },
          name: 'Kotlin'
        },
        {
          bg: {
            backgroundColor: 'rgba(238,215,163,0.8)'
          },
          name: 'JavaScript'
        },
        {
          bg: {
            backgroundColor: 'rgba(207,184,178,0.8)'
          },
          name: 'Flutter'
        }
      ],
      desList: [
        '拥有10年移动端与前端全栈开发经验，具备扎实的Java/Kotlin语言基础',
        '精通Android原生开发，可独立搭建APP框架、自定义控件与复杂界面',
        '熟悉网络请求、JSON解析、消息推送、异步图片加载、列表分页等核心能力',
        '熟悉微信、抖音、淘宝、千牛小程序及UniApp多端开发、适配、编译发布',
        '精通Vue、Element UI，可高效搭建后台管理系统与业务中台',
        '熟练使用React、React Native、Ant Design开发网页与跨端应用',
        '掌握Node.js，可进行接口开发、脚本编写与前后端分离项目协作',
        '熟练对接微信、支付宝、高德、极光等第三方SDK',
        '熟练使用Git、SVN版本控制工具，擅长运用Codex、Claude Code等AI编码工具',
        '具备良好的需求理解、团队协作与项目迭代能力，勇于接受技术挑战'
      ]
    },
    exp: {
      expList: [
        {
          title: '金华仙娱科技有限公司',
          time: '2023年06月~至今',
          post: '前端 / Android 开发工程师',
          img: {
            backgroundImage: `url(${eAndroid})`
          },
          contentList: [
            '负责微信 / 抖音 / 淘宝 / 千牛多端小程序、移动端APP及后台管理系统开发',
            '完成接口联调、数据对接、登录授权、支付流程、权限控制等核心功能',
            '负责线上BUG修复、机型适配、性能优化，解决兼容性、加载卡顿、数据异常问题',
            '基于UniApp、Vue、Element UI搭建页面，使用AI工具提升开发效率',
            '独立负责自动发卡网站、选号小程序、云仓管理系统、珍宝阁交易APP等项目'
          ]
        },
        {
          title: '浙江云澎科技有限公司',
          time: '2021年07月~2023年05月',
          post: '前端 / Android 开发工程师',
          img: {
            backgroundImage: `url(${eAndroid})`
          },
          contentList: [
            '负责公司Android项目开发与维护，对接硬件接口、串口通信，实现设备数据交互',
            '快速完成页面搭建、接口联调、APP测试、BUG修复与版本发布',
            '参与点餐收银、智能称重、智能接单等Android设备端项目开发'
          ]
        },
        {
          title: '浙江亿点通 / 金华云电 / 浙江时利科技',
          time: '2016年07月~2021年06月',
          post: 'Android开发工程师',
          img: {
            backgroundImage: `url(${eAndroid})`
          },
          contentList: [
            '负责Android APP界面开发、接口对接、数据交互、测试上线与应用市场上架',
            '参与小程序、网页、小游戏、充电APP、商超APP等项目开发',
            '熟练使用Java、Retrofit、RxJava、EventBus进行原生开发与性能优化'
          ]
        }
      ]
    },
    works: {
      worksList: [
        {
          title: '选号网多端平台（UniApp）',
          des: '2024年09月起负责抖音小程序、淘宝网站、H5三端前端开发，一套代码多端发布。实现账号展示、筛选、下单、支付、订单管理全流程，并通过数据预取、预加载、滑动优化解决长列表卡顿问题。'
        },
        {
          title: '云仓账号管理系统（Vue+Element UI）',
          des: '2023年11月起负责账号入库、库存统计、权限分配、商户通货等管理功能，支持批量导入导出、数据可视化、第三方系统对接，满足高并发、多商户运营需求。'
        },
        {
          title: 'Rhythm开源社区系统',
          des: '使用Java二次开发的开源社区系统，包含聊天室、发帖、回帖、问答、清风明月、在线小游戏等功能，具备完整管理后台、用户权限系统、标签、领域、审计日志等模块。',
          url: 'https://github.com/csfwff/rhythm'
        },
        {
          title: '自动发卡系统',
          des: '2024年03月至2025年10月负责Node+Vue3前后端分离系统，对接抖店开放平台，实现订单自动接收、卡密自动采购、自动发货、状态回传，支持多供应商调度、故障自动切换与接口重试。'
        },
        {
          title: '点餐收银 / 智能称重 Android 项目',
          des: '开发Android设备端APP，实现人脸识别、刷卡 / 扫码支付、小票打印，对接串口、电子秤、摄像头、打印机等硬件，并封装通用基础库支持多项目复用。'
        },
        {
          title: '香榧林 / 在线商超 / 斗地主 APP',
          des: '负责原生Android开发，实现商品浏览、下单支付、订单查询、游戏逻辑等功能，完成APP测试、优化、应用市场发布，并使用Cocos Creator开发斗地主，适配Android、iOS双端。',
          url: 'https://sj.qq.com/myapp/detail.htm?apkName=com.mutong.xiangfeilin'
        },
        {
          title: 'ATab',
          des: '仿爱奇艺底部导航栏的自定义控件，实现相应的动画效果。',
          url: 'https://github.com/csfwff/ATab'
        },
        {
          title: '双生日记',
          des: '一款与众不同的日记APP，围绕心情记录、内容匹配与情绪管理展开，支持用户记录日记并发现相似心情内容。',
          url: 'https://github.com/csfwff/2life'
        },
        {
          title: 'AME',
          des: 'Android端Markdown富文本编辑器，基于b3log/vditor进行移动端编辑体验适配。',
          url: 'https://github.com/csfwff/Android-Markdown-Editor'
        },
        {
          title: '篆鼠',
          des: '小篆文字识别APP，基于Tesseract OCR识别引擎，同时集成说文解字查询、简体字转换等能力。',
          url: 'https://sj.qq.com/myapp/detail.htm?apkName=com.xiamo.zuanshu'
        },
        {
          title: 'Bolo博客',
          des: '基于Java的开源博客系统，参与博客设计以及部分皮肤开发，并参与B3log开源组织。',
          url: 'https://github.com/csfwff/bolo-solo'
        }
      ],
      viewMore: 'github上面查看更多'
    },
    contact: {
      title: '联系我',
      desList1: ['学习', '质量', '协作', '体验'],
      desList2: ['自学能力突出，可快速上手新技术并落地项目', '具备良好的需求理解、团队协作与项目迭代能力', '持续追求代码质量、项目稳定性与用户体验优化', '求职意向：Web前端 / Android'],
      download: '下载简历',
      fileList: [
        // {
        //   title: 'HTML版',
        //   url: 'www.baidu.com'
        // },
        // {
        //   title: 'PDF版',
        //   url: 'www.baidu.com'
        // }
      ],
      typeList: [
        {
          icon: sGithub,
          url: 'https://github.com/csfwff'
        },
        {
          icon: sBlog,
          url: 'https://sszsj.com/'
        },
        {
          icon: sZh,
          url: 'https://www.zhihu.com/people/xia-mo-29-55'
        },
        {
          icon: sWb,
          url: 'https://weibo.com/u/5058322670'
        }
      ]
    }
  }
};
