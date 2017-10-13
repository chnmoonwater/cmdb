app.factory("staticModel", function() {
    var instance = {
        ipType : [
            {
                code : 0,
                name : "公网"
            },
            {
                code : 1,
                name : "内网"
            }
        ],
        envType : [
            {
                code : 0,
                name : "保留"
            },
            {
                code : 1,
                name : "dev"
            },
            {
                code : 2,
                name : "daily"
            },
            {
                code : 3,
                name : "gray"
            },
            {
                code : 4,
                name : "prod"
            },
            {
                code : 5,
                name : "test"
            },
            {
                code : 6,
                name : "back"
            }
        ],
        groupEnvType : [
            {
                code : 0,
                name : "all"
            },
            {
                code : 1,
                name : "dev"
            },
            {
                code : 2,
                name : "daily"
            },
            {
                code : 3,
                name : "gray"
            },
            {
                code : 4,
                name : "prod"
            },
            {
                code : 5,
                name : "test"
            },
            {
                code : 6,
                name : "back"
            }
        ],
        userType : [
            {
                code : 10,
                name : "bi"
            },
            {
                code : 1,
                name : "zookeeper"
            },
            {
                code : 2,
                name : "web-service"
            },
            {
                code : 3,
                name : "mysql"
            },
            {
                code : 4,
                name : "other"
            },
            {
                code : 5,
                name : "web-php"
            },
            {
                code : 6,
                name : "public"
            },
            {
                code : 7,
                name : "redis"
            },
            {
                code : 8,
                name : "web-server"
            },
            {
                code : 9,
                name : "front-end"
            }
        ],
        logType : [
            {
                code : 0,
                name : "key"
            },
            {
                code : 1,
                name : "password"
            }
        ],
        serverType : [
            {
                code : 0,
                name : "物理机"
            },
            {
                code : 1,
                name : "虚拟机"
            },
            {
                code : 2,
                name : "阿里云"
            }
        ],
        serverStatus :[
            {
                code : -1,
                name : "所有"
            },
            {
                code : 0,
                name : "新增"
            },
            {
                code : 1,
                name : "关联"
            },
            {
                code : 2,
                name : "下线"
            },
            {
                code : 3,
                name : "删除"
            }
        ],
        zabbixStatus : [
            {
                code : 0,
                name : "启用"
            },
            {
                code : 1,
                name : "禁用"
            }
        ],
        zabbixMonitor : [
            {
                code : 0,
                name : "未添加"
            },
            {
                code : 1,
                name : "已添加"
            }
        ],
        ecsServerInternetChargeType : [
            {
                code : "PayByTraffic",
                name : "按流量计费"
            },
            {
                code : "PayByBandwidth",
                name : "按带宽计费"
            }
        ],
        ecsServerIoOptimized : [
            {
                code : 0,
                name : false
            },
            {
                code : 1,
                name : true
            }
        ],
        serverUseType : [
            {
                code : 0,
                name : "物理机"
            },
            {
                code : 1,
                name : "虚拟化"
            },
            {
                code : 2,
                name : "数据挖掘"
            },
            {
                code : 9,
                name : "其它用途"
            }
        ],
        deployStatus : [
            {
                code : 0,
                name : "部署完毕"
            },
            {
                code : 1,
                name : "正在部署"
            },
            {
                code : 2,
                name : "恢复正常"
            }
        ],
        deployType : [
            {
                code : 0,
                name : "WAR"
            },
            {
                code : 1,
                name : "PKG"
            }
        ],
        deployRollback : [
            {
                code : 1,
                name : "是"
            },
            {
                code : 0,
                name : "否"
            }
        ],
        deployErrorCode : [
            {
                code : 0,
                name : "正常"
            },
            {
                code : 1,
                name : "错误"
            }
        ],
        serverCreateYear : [
            {
                code : 2017,
                name : "2017年"
            },
            {
                code : 2016,
                name : "2016年"
            }
        ],
        serverCreateMonth : [
            {
                code : 1,
                name : "1月"
            },
            {
                code : 2,
                name : "2月"
            },
            {
                code : 3,
                name : "3月"
            }
            ,
            {
                code : 4,
                name : "4月"
            },
            {
                code : 5,
                name : "5月"
            },
            {
                code : 6,
                name : "6月"
            },
            {
                code : 7,
                name : "7月"
            },
            {
                code : 8,
                name : "8月"
            },
            {
                code : 9,
                name : "9月"
            },
            {
                code : 10,
                name : "10月"
            },
            {
                code : 11,
                name : "11月"
            },
            {
                code : 12,
                name : "12月"
            }
        ],
        enabled : [
            {
                code : 0,
                name : "disalbed"
            },
            {
                code : 1,
                name : "enabled"
            }
        ],
        zoneIds : [
            {
                code : "cn-hangzhou-e",
                name : "华东1可用区E"
            },
            {
                code : "cn-hangzhou-b",
                name : "华东1可用区B"
            },
            {
                code : "cn-hangzhou-c",
                name : "华东1可用区C"
            }
        ],
        allocatePublicIpAddress : [
            {
                code : 0,
                name : "否"
            },
            {
                code : 1,
                name : "是"
            }
        ],
        serverEnv : [
            {
                code : "online",
                name : "生产"
            },
            {
                code : "gray",
                name : "灰度"
            },
            {
                code : "daily",
                name : "日常"
            },
            {
                code : "dev",
                name : "开发"
            }
        ],
        configCenterItemGroup : [
            {
                code : "LDAP",
                name : "LDAP"
            },
            {
                code : "REDIS",
                name : "REDIS"
            },
            {
                code : "ZABBIX",
                name : "ZABBIX"
            },
            {
                code : "ALIYUN_ECS",
                name : "ALIYUN_ECS"
            },
            {
                code : "VCSA",
                name : "VCSA"
            },
            {
                code : "GETWAY",
                name : "GETWAY"
            },
            {
                code : "DINGTALK",
                name : "DINGTALK"
            },
            {
                code : "SHADOWSOCKS",
                name : "SHADOWSOCKS"
            },
            {
                code : "PUBLIC",
                name : "PUBLIC"
            },
            {
                code : "EXPLAIN_CDL",
                name : "EXPLAIN_CDL"
            },
            {
                code : "ANSIBLE",
                name : "ANSIBLE"
            }
        ],
        ecsExpansionNetworkConfig : [
            {
                code : 0,
                name : "默认"
            },
            {
                code : 1,
                name : "自定义"
            }
        ],
        dnsmasqItemType : [
            {
                code : 0,
                name : "system"
            },
            {
                code : 1,
                name : "server"
            },
            {
                code : 2,
                name : "address"
            }
        ]
    }

    return instance;
});