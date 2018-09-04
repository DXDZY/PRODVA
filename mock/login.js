export const loginData = (req, res) => {
  const { password, account } = req.body;
  if (account === 'admin' && password === '1q2w3e4r') {
    res.json({
      msg: '成功',
      userInfo: {
        role: '',
        mail: '--',
        mobile: '--',
        userName: '超级管理员',
        department: '--',
        account: 'admin',
      },
      menuList: [
        {
          sequence: '0',
          level: 'null',
          children: [
            {
              sequence: '1',
              level: 'null',
              name: '首页',
              id: '26',
              leaf: true,
              parentId: '0',
              url: '/index/UserInfo',
            },
            {
              sequence: '3',
              level: 'null',
              children: [
                {
                  sequence: '1',
                  level: 'null',
                  name: '名词库',
                  id: '1',
                  leaf: true,
                  parentId: '3',
                  url: '/index/NounLibrary',
                },
                {
                  sequence: '2',
                  level: 'null',
                  name: '动词库',
                  id: '2',
                  leaf: true,
                  parentId: '3',
                  url: '/index/VerbLibrary',
                },
                {
                  sequence: '10',
                  level: 'null',
                  name: '词库审核',
                  id: '27',
                  leaf: true,
                  parentId: '3',
                  url: '/index/NounLibraryAuditing',
                },
                {
                  sequence: '3',
                  level: 'null',
                  name: '材料词库',
                  id: '63',
                  leaf: true,
                  parentId: '3',
                  url: '/index/MaterialNounLibrary',
                },
              ],
              name: '公共词库',
              id: '3',
              parentId: '0',
              url: 'null',
            },
            {
              sequence: '4',
              level: 'null',
              children: [
                {
                  sequence: '5',
                  level: 'null',
                  name: '维保类型分类',
                  id: '5',
                  leaf: true,
                  parentId: '4',
                  url: '/index/MaintenanceType',
                },
                {
                  sequence: '6',
                  level: 'null',
                  name: '可视化配置',
                  id: '6',
                  leaf: true,
                  parentId: '4',
                  url: '/index/VisulConfig',
                },
                {
                  sequence: '3',
                  level: 'null',
                  name: '估值映射配置',
                  id: '33',
                  leaf: true,
                  parentId: '4',
                  url: '/index/MappingTable',
                },
                {
                  sequence: '5',
                  level: 'null',
                  name: '前置检测解读',
                  id: '40',
                  leaf: true,
                  parentId: '4',
                  url: '/index/PreCar',
                },
                {
                  sequence: '4',
                  level: 'null',
                  name: '维保报告解读',
                  id: '41',
                  leaf: true,
                  parentId: '4',
                  url: '/index/Maintenance',
                },
                {
                  sequence: '6',
                  level: 'null',
                  name: '检测与维保映射表',
                  id: '43',
                  leaf: true,
                  parentId: '4',
                  url: '/index/TestingAndMaintenance',
                },
              ],
              name: '项目映射表',
              id: '4',
              parentId: '0',
              url: 'null',
            },
            {
              sequence: '7',
              level: 'null',
              children: [
                {
                  sequence: '8',
                  level: 'null',
                  name: '维保审核',
                  id: '8',
                  leaf: true,
                  parentId: '7',
                  url: '/index/OriginalReport',
                },
                {
                  sequence: '9',
                  level: 'null',
                  name: '订单管理',
                  id: '9',
                  leaf: true,
                  parentId: '7',
                  url: '/index/OrderManagement',
                },
                {
                  sequence: '12',
                  level: 'null',
                  name: '知识百科',
                  id: '10',
                  leaf: true,
                  parentId: '7',
                  url: '/index/KnowledgeList',
                },
                {
                  sequence: '11',
                  level: 'null',
                  name: '用户反馈',
                  id: '11',
                  leaf: true,
                  parentId: '7',
                  url: '/index/UserFeedback',
                },
                {
                  sequence: '10',
                  level: 'null',
                  name: '推广渠道',
                  id: '12',
                  leaf: true,
                  parentId: '7',
                  url: '/index/ExtensionList',
                },
                {
                  sequence: '15',
                  level: 'null',
                  name: '实时查维保',
                  id: '15',
                  leaf: true,
                  parentId: '7',
                  url: '/index/NowQueryMaintenance',
                },
                {
                  sequence: '14',
                  level: 'null',
                  name: '订单中心',
                  id: '35',
                  leaf: true,
                  parentId: '7',
                  url: '/index/OrderCenter',
                },
              ],
              name: '业务管理',
              id: '7',
              parentId: '0',
              url: 'null',
            },
            {
              sequence: '14',
              level: 'null',
              children: [
                {
                  sequence: '1',
                  level: 'null',
                  name: '系统监控',
                  id: '29',
                  leaf: true,
                  parentId: '28',
                  url: '/index/MonitorList',
                },
                {
                  sequence: '2',
                  level: 'null',
                  name: 'pptun对应关系',
                  id: '30',
                  leaf: true,
                  parentId: '28',
                  url: '/index/PpTun',
                },
              ],
              name: '查询系统管理',
              id: '28',
              parentId: '0',
              url: '/index',
            },
            {
              sequence: '15',
              level: 'null',
              children: [
                {
                  sequence: '1',
                  level: 'null',
                  name: '减损系数调校',
                  id: '32',
                  leaf: true,
                  parentId: '31',
                  url: '/index/DerogationConfficient',
                },
                {
                  sequence: '3',
                  level: 'null',
                  name: '精准估价审核',
                  id: '36',
                  leaf: true,
                  parentId: '31',
                  url: '/index/CarEvalutionAuditing',
                },
                {
                  sequence: '2',
                  level: 'null',
                  name: 'B2B车源列表',
                  id: '37',
                  leaf: true,
                  parentId: '31',
                  url: '/index/B2BCarList',
                },
              ],
              name: '维保记录估值',
              id: '31',
              parentId: '0',
              url: '/index',
            },
            {
              sequence: '16',
              level: 'null',
              children: [
                {
                  sequence: '1',
                  level: 'null',
                  name: '前置检测调校旧',
                  id: '50',
                  leaf: true,
                  parentId: '49',
                  url: '/index/NewPretestDerogation',
                },
                {
                  sequence: '3',
                  level: 'null',
                  name: '调校系数审核',
                  id: '51',
                  leaf: true,
                  parentId: '49',
                  url: '/index/CoefficientReview',
                },
                {
                  sequence: '8',
                  level: 'null',
                  name: '车辆估价监控',
                  id: '52',
                  leaf: true,
                  parentId: '49',
                  url: '/index/CarPriceMonitor',
                },
                {
                  sequence: '4',
                  level: 'null',
                  name: '抽样价格标注',
                  id: '53',
                  leaf: true,
                  parentId: '49',
                  url: '/index/SamplingPrice',
                },
                {
                  sequence: '5',
                  level: 'null',
                  name: '前置检测减损',
                  id: '54',
                  leaf: true,
                  parentId: '49',
                  url: '/index/PretestDerogation',
                },
                {
                  sequence: '6',
                  level: 'null',
                  name: '车辆估价审核',
                  id: '62',
                  leaf: true,
                  parentId: '49',
                  url: '/index/CarPriceAudit',
                },
                {
                  sequence: '8',
                  level: 'null',
                  name: '上架车源审核',
                  id: '65',
                  leaf: true,
                  parentId: '49',
                  url: '/index/CarHandAudit',
                },
                {
                  sequence: '7',
                  level: 'null',
                  name: '上架车源列表',
                  id: '66',
                  leaf: true,
                  parentId: '49',
                  url: '/index/CarSourceList',
                },
                {
                  sequence: '9',
                  level: 'null',
                  name: '审核车源配置',
                  id: '67',
                  leaf: true,
                  parentId: '49',
                  url: '/index/CarSourceConfig',
                },
                {
                  sequence: '2',
                  level: 'null',
                  name: '前置检测调校新',
                  id: '68',
                  leaf: true,
                  parentId: '49',
                  url: '/index/NewPretestDerogationNew',
                },
                {
                  sequence: '10',
                  level: 'null',
                  name: '估值配置',
                  id: '70',
                  leaf: true,
                  parentId: '49',
                  url: '/index/ValuationConfiguration',
                },
              ],
              name: '前置检测估值',
              id: '49',
              parentId: '0',
              url: 'NUll',
            },
            {
              sequence: '18',
              level: 'null',
              children: [
                {
                  sequence: '14',
                  level: 'null',
                  name: '清除缓存',
                  id: '14',
                  leaf: true,
                  parentId: '13',
                  url: '/index/ClearVinCache',
                },
                {
                  sequence: '1',
                  level: 'null',
                  name: '菜单管理',
                  id: '23',
                  leaf: true,
                  parentId: '13',
                  url: '/index/MenuManage',
                },
                {
                  sequence: '2',
                  level: 'null',
                  name: '角色管理',
                  id: '24',
                  leaf: true,
                  parentId: '13',
                  url: '/index/RoleManage',
                },
                {
                  sequence: '3',
                  level: 'null',
                  name: '用户管理',
                  id: '25',
                  leaf: true,
                  parentId: '13',
                  url: '/index/UserManage',
                },
              ],
              name: '系统功能',
              id: '13',
              parentId: '0',
              url: 'null',
            },
            {
              sequence: '19',
              level: 'null',
              children: [
                {
                  sequence: '2',
                  level: 'null',
                  name: '订单列表',
                  id: '56',
                  leaf: true,
                  parentId: '55',
                  url: '/index/GapOrderList',
                },
                {
                  sequence: '1',
                  level: 'null',
                  name: '查询配置',
                  id: '57',
                  leaf: true,
                  parentId: '55',
                  url: '/index/GapSearchList',
                },
                {
                  sequence: '3',
                  level: 'null',
                  name: '实时查保险',
                  id: '58',
                  leaf: true,
                  parentId: '55',
                  url: '/index/GapRealTimeSearch',
                },
                {
                  sequence: '4',
                  level: 'null',
                  name: '保险审核',
                  id: '69',
                  leaf: true,
                  parentId: '55',
                  url: '/index/GapAudit',
                },
              ],
              name: '保险查询',
              id: '55',
              parentId: '0',
              url: '/',
            },
            {
              sequence: '20',
              level: 'null',
              children: [
                {
                  sequence: '1',
                  level: 'null',
                  name: '保值率调校',
                  id: '60',
                  leaf: true,
                  parentId: '59',
                  url: '/index/HedgeRateManager',
                },
                {
                  sequence: '2',
                  level: 'null',
                  name: '保值率曲线',
                  id: '61',
                  leaf: true,
                  parentId: '59',
                  url: '/index/HedgeRateCurve',
                },
              ],
              name: '保值率管理',
              id: '59',
              parentId: '0',
              url: 'null',
            },
            {
              sequence: '21',
              level: 'null',
              name: '下载管理',
              id: '64',
              leaf: true,
              parentId: '0',
              url: '/index/ExportList',
            },
          ],
          name: '汽车简历',
          id: '0',
          parentId: '0',
          url: 'null',
        },
      ],
      code: '10000',
      cms: 'WBCK_66F91EB28672AEDC75D1BE94FCEBA5FD',
    });
  } else {
    res.send({
      code: '10007',
      msg: '账户或密码错误!!！',
    });
  }
};