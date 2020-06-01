import dHome from './assets/d_home.svg';
import dSkills from './assets/d_skills.svg';
import dExp from './assets/d_exp.svg';
import dWorks from './assets/d_works.svg';
import dContact from './assets/d_contact.svg';
import sGithub from './assets/s_github.svg';
import sBlog from './assets/s_blog.svg';
import sZh from './assets/s_zh.svg';
import sWb from './assets/s_Wb.svg';
import eAndroid from './assets/e_android.jpg';
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
      infoList: ['28岁', '本科', '金华', '在职'],
      quote: '我是不慎落入世界的一滴水墨',
      desList: ['我叫唐墨夏', '一名Android开发工程师，前端工程师', '邮箱：csfwff@163.com', '手机：17706841382（微信同号）', 'QQ：873997011', '个人主页：https://www.sszsj.top/']
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
          name: 'React'
        },
        {
          bg: {
            backgroundColor: 'rgba(76,157,160,0.8)'
          },
          name: 'ReactNative'
        },
        {
          bg: {
            backgroundColor: 'rgba(66,66,66,0.8)'
          },
          name: 'nodejs'
        },
        {
          bg: {
            backgroundColor: 'rgba(193,131,106,0.8)'
          },
          name: '小程序'
        },
        {
          bg: {
            backgroundColor: 'rgba(117,148,179,0.8)'
          },
          name: '快应用'
        },
        {
          bg: {
            backgroundColor: 'rgba(71,83,94,0.8)'
          },
          name: 'git'
        },
        {
          bg: {
            backgroundColor: 'rgba(147,147,189,0.8)'
          },
          name: 'svn'
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
          name: 'FreeMarker'
        },
        {
          bg: {
            backgroundColor: 'rgba(238,215,163,0.8)'
          },
          name: 'javascript'
        },
        {
          bg: {
            backgroundColor: 'rgba(207,184,178,0.8)'
          },
          name: 'Kotlin'
        }
      ],
      desList: [
        '熟悉Java和Android，熟悉Kotlin语言',
        '有良好的Java语言基础，熟悉面向对象编程思维',
        '熟悉React 和 React Native',
        '掌握APP应用开发基本框架，掌握Android各类控件',
        '熟悉网络请求，Json解析,熟悉常用的第三方SDK',
        '熟悉微信小程序，熟悉Cocos Creator游戏引擎'
      ]
    },
    exp: {
      expList: [
        {
          title: '金华云电科技有限公司',
          time: '2017年4月~至今',
          post: 'Android开发工程师/前端工程师',
          img: {
             backgroundImage: `url(${eAndroid})`
          },
          contentList: ['负责快速构建高质量Android应用', '根据业务需求设计合适的工程项目', '负责微信小程序的开发与维护', '负责Android应用在各大应用市场的上架与更新']
        },
        {
          title: '浙江时利科技有限公司',
          time: '2016年7月~2017年3月',
          post: 'Android开发工程师',
          img: {
             backgroundImage: `url(${eAndroid})`
          },
          contentList: ['负责公司Android应用开发', '负责Android应用测试', '同期工作之余学习微信小程序']
        }
      ]
    },
    works: {
      worksList: [
        {
          title: '香榧林',
          des: '手机香榧林专为用户退出的满足线上购买香榧树的软件，具有商品浏览，购买，支付，订单查询等功能，现已上架应用宝。',
          url:'https://sj.qq.com/myapp/detail.htm?apkName=com.mutong.xiangfeilin'
        },
        {
          title: '斗地主游戏',
          des: '斗地主游戏，实现在线匹配，打牌，每日任务，奖励兑换等功能，实现包括顺子，飞机，炸弹等相关游戏效果，实现出牌逻辑判断等。'
        },
        {
          title: '云电',
          des: '智能充电系统，通过扫描门店设备上的二维码开启设备给手机充电，同时覆盖Android，iOS，微信小程序，微信网页，支付宝网页等多个平台。',
          url:'https://sj.qq.com/myapp/detail.htm?apkName=com.dongdaozhu.yundian'

        },
        {
          title: '报单系统',
          des: '为代理商打造的在线报单系统，实现用户在线购买产品，用户间推荐奖励结算，具有完整的购物车，订单系统，奖励核算等。'
        },
        {
          title: '篆鼠识别',
          des: '首款能够认识小篆文字的OCR软件，基于Tesseract—OCR识别引擎，同时集成说文解字查询，简体字转换。',
          url: 'https://sj.qq.com/myapp/detail.htm?apkName=com.xiamo.zuanshu'
        },
        {
          title: '双生日记',
          des:
            '写春花秋月事，感喜乐怨哀情。双生可以在你写日记的同时匹配更多同类型心情的日记主人，一起分享彼此的心情，共建友谊。通过自研的 NLP 多维情感分析算法结合自研大五人格量表分析出用户的情绪状态，并配合专业的心理学知识，生成可视化情绪周期图表，为用户生成定制化的、科学的情绪管理方案。',
          url: 'https://github.com/csfwff/2life'
        },
        {
          title: '论道',
          des: '最友善最认真的高质量中文知识型讨论社区。在论道，你可以基于广泛的话题进行「提出问题」,「回答问题」,「发表文章」,「参与讨论」,「私信交流」等活动。',
          url: 'https://www.lundao.pub/'
        },
        {
          title: '墨璃编辑器',
          des: ' Android Markdown 编辑器，基于b3log/vditor。',
          url: 'https://github.com/csfwff/Android-Markdown-Editor'
        },
        {
          title: 'ATab',
          des: '仿爱奇艺底部Tabbar的自定义控件，实现相应的动画效果',
          url: 'https://github.com/csfwff/ATab'
        },
        {
          title: 'Bolo博客',
          des: '基于B3log搭建个人博客系统，参与博客设计以及部分皮肤开发，并参与B3log开源组织。',
          url: 'https://github.com/csfwff/bolo-solo'
        }
      ],
      viewMore: 'github上面查看更多'
    },
    contact: {
      title: '联系我',
      desList1: ['灵感', '创造', '梦想', '自由'],
      desList2: ['热爱学习，想要获取更多知识', '喜欢尝试，期待新鲜事物', '爱生活，爱游戏', '和朋友一起创造激动人心的代码'],
      download: '下载简历',
      fileList: [
        {
          title: 'HTML版',
          url: 'www.baidu.com'
        },
        {
          title: 'PDF版',
          url: 'www.baidu.com'
        }
      ],
      typeList: [
        {
          icon: sGithub,
          url: 'https://github.com/csfwff'
        },
        {
          icon: sBlog,
          url: 'https://www.sszsj.top'
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
