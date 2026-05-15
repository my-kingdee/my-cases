---
title: 仓库管理系统WMS
date: 2025-05-19
categories:
  - SaaS开发
tags:
  - 若依框架
  - Spring Boot
  - Vue
  - WMS
---

# 仓库管理系统WMS

## 项目概览

| 项目信息 | 详情 |
|---------|------|
| **项目类型** | Web应用（前后端分离） |
| **技术栈** | Spring Boot 3.1 + Vue 3 + Element UI |
| **基础框架** | 若依 (RuoYi) |
| **JDK版本** | JDK 17 |
| **角色** | 二次开发 |

## 项目背景

客户需要一套轻量级的仓库管理系统，用于管理多仓库的库存业务。基于若依框架进行二次开发，满足以下需求：

- 多仓库管理，支持入库、出库、移库、盘库
- 库存预警与到期提醒
- 入库单、出库单打印支持
- 库存看板与数据统计

## 核心功能

### 1. 仓库/库区管理
- 支持多仓库配置
- 库区划分与管理
- 仓库容量统计

### 2. 物料管理
- 物料基础数据维护
- 物料分类管理
- 批次/序列号管理

### 3. 入库管理
- 采购入库、外协入库、退货入库
- 入库单状态：暂存、作废、完成入库
- 支持网页打印入库单

### 4. 出库管理
- 销售出库、外协出库、调拨出库
- 出库单状态：暂存、作废、完成出库
- 支持网页打印出库单

### 5. 移库/盘库
- 移库单管理
- 盘库单管理
- 库存调整记录

### 6. 库存看板
- 库存预警与到期提醒
- 分仓库、库区、商品维度统计
- 库存明细与操作记录

## 技术架构

```
┌─────────────────────────────────────────────────────────────┐
│                      Vue 3 前端                              │
│  ├── Element Plus (UI组件库)                                 │
│  ├── Vuex/Pinia (状态管理)                                   │
│  ├── Vue Router (路由管理)                                   │
│  └── Axios (HTTP请求)                                       │
├─────────────────────────────────────────────────────────────┤
│                    Spring Boot 后端                          │
│  ├── Spring Security (安全认证)                              │
│  ├── JWT (Token认证)                                        │
│  ├── MyBatis Plus (ORM框架)                                  │
│  ├── Redis (缓存)                                           │
│  └── 动态权限菜单                                            │
├─────────────────────────────────────────────────────────────┤
│                      MySQL 数据库                            │
└─────────────────────────────────────────────────────────────┘
```

### 项目结构

```
wms-ruoyi/
├── ruoyi-admin-wms/          # WMS业务模块
│   └── src/main/java/
│       └── com/wms/
│           ├── controller/   # 控制器
│           ├── service/      # 业务逻辑
│           ├── mapper/       # 数据访问
│           └── domain/       # 实体类
│
├── ruoyi-common/             # 通用模块
├── ruoyi-modules/            # 业务模块
├── ruoyi-framework/          # 框架核心
└── ruoyi-system/             # 系统模块
```

### 前端结构

```
ruo-yi-wms-vue/
├── src/
│   ├── api/                  # 接口定义
│   ├── views/                # 页面组件
│   │   ├── wms/             # WMS业务页面
│   │   │   ├── warehouse/   # 仓库管理
│   │   │   ├── inbound/     # 入库管理
│   │   │   ├── outbound/    # 出库管理
│   │   │   ├── transfer/    # 移库管理
│   │   │   ├── inventory/   # 盘库管理
│   │   │   └── dashboard/   # 库存看板
│   │   └── system/          # 系统管理
│   ├── components/          # 公共组件
│   ├── router/              # 路由配置
│   ├── store/               # 状态管理
│   └── utils/               # 工具函数
└── public/                  # 静态资源
```

## 项目成果

| 功能模块 | 说明 | 效果 |
|---------|------|------|
| 多仓库管理 | 支持多仓库、多库区 | 灵活配置 |
| 入库管理 | 采购/外协/退货入库 | 流程规范 |
| 出库管理 | 销售/外协/调拨出库 | 状态可控 |
| 库存看板 | 预警+统计+明细 | 实时监控 |
| 单据打印 | 入库单、出库单打印 | Lodop+网页打印 |

## 技术亮点

### 若依框架优势
- **高效开发**: 代码生成器一键生成前后端代码
- **权限控制**: 动态权限菜单，多方式权限控制
- **安全认证**: JWT + Spring Security，多终端认证
- **易于扩展**: 模块化设计，便于二次开发

### WMS业务逻辑
```java
// 入库单状态流转
public enum InboundStatus {
    DRAFT(0, "暂存"),
    CANCELLED(1, "作废"),
    COMPLETED(2, "完成入库");
    
    private final int code;
    private final String desc;
}

// 库存计算
public class InventoryCalculator {
    public int calculateAvailableQty(int totalQty, int lockedQty) {
        return totalQty - lockedQty;
    }
}
```

### 打印功能集成
```javascript
// Lodop打印控件集成
function printInboundOrder(orderData) {
    LODOP = getLodop();
    LODOP.ADD_PRINT_HTM(0, 0, "100%", "100%", generatePrintHTML(orderData));
    LODOP.PREVIEW();
}
```

## 技术栈

### 后端
- **框架**: Spring Boot 3.1
- **安全**: Spring Security + JWT
- **ORM**: MyBatis Plus
- **缓存**: Redis
- **JDK**: JDK 17

### 前端
- **框架**: Vue 3
- **UI**: Element Plus
- **状态管理**: Vuex/Pinia
- **HTTP**: Axios
- **打印**: Lodop

## 经验总结

### 做得好的
1. **框架选型合理**: 若依框架成熟稳定，开发效率高
2. **功能完整**: 覆盖WMS核心业务场景
3. **打印支持**: Lodop+网页打印双模式

### 可以改进的
1. 可以增加PDA移动端支持
2. 可以接入条码/RFID扫描
3. 可以增加与ERP系统的集成接口

---

<small>本案例基于开源若依WMS框架进行二次开发</small>
