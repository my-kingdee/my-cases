---
title: 销售订单明细表报表扩展开发
date: 2025-03-05
categories:
  - 二次开发
tags:
  - 金蝶云星空
  - 报表开发
  - C#插件
  - 成本核算
---

# 销售订单明细表报表扩展开发

## 项目概览

| 项目信息 | 详情 |
|---------|------|
| **产品** | 金蝶云星空 |
| **开发语言** | C# |
| **开发类型** | 报表插件扩展 |
| **涉及报表** | 销售订单执行明细表 |
| **角色** | 二开工程师 |

## 项目背景

客户使用金蝶云星空系统，标准的销售订单执行明细表无法满足业务需求：

- 需要显示成本相关字段（成本金额、退货成本等）
- 需要扩展自定义字段（产品分类、基地等）
- 需要精确控制金额和数量的小数位数
- 需要支持特殊的数据展示逻辑

## 核心挑战

### 1. 报表字段扩展
- 标准报表字段不包含成本信息
- 需要关联多个单据获取成本数据
- 自定义字段需要支持名称引用

### 2. 精度控制
- 不同币别有不同的金额精度
- 不同物料有不同的数量精度
- 需要动态计算和展示

### 3. 性能要求
- 大数据量报表不能卡顿
- 复杂计算需要优化
- 不能影响系统整体性能

## 解决方案

### 开发架构
```csharp
namespace Kingdee.Wwd.Report.Plugin
{
    [Description("销售订单执行明细表-二开插件"), HotUpdate]
    public class SalDetailRptExt : SalDetailRpt
    {
        // 精度控制字段
        private readonly string FAMOUNTDIGITS = "FAMOUNTDIGITS";      // 币别金额精度
        private readonly string FPRICEDIGITS = "FPRICEDIGITS";        // 币别单价精度
        private readonly string FCHARGEPRECISION = "FCHARGEPRECISION"; // 数量精度
        
        public override void Initialize()
        {
            base.Initialize();
            
            // 注册名称引用字段
            base.ReportProperty.DspInsteadColumnsInfo.DefaultDspInsteadColumns
                .Add("F_ora_Base", "F_ora_BaseName");
            base.ReportProperty.DspInsteadColumnsInfo.DefaultDspInsteadColumns
                .Add("F_ora_CATEGORYID", "F_ora_CATEGORYIDName");
            
            // 注册精度控制字段
            base.ReportProperty.DecimalControlFieldList.Add(
                new DecimalControlField("F_ora_COSTAMOUNT", FAMOUNTDIGITS));
            base.ReportProperty.DecimalControlFieldList.Add(
                new DecimalControlField("F_ora_THCOSTAMOUNT", FAMOUNTDIGITS));
            // ... 更多精度控制字段
        }
    }
}
```

### 关键设计

**字段扩展**
- 成本金额（F_ora_COSTAMOUNT）
- 退货成本金额（F_ora_THCOSTAMOUNT）
- 累计出库数量（F_ora_TotalOutQty）
- 累计出库成本金额（F_ora_TotalOutCostAmt）
- 收款金额（不含税）（F_ora_receivenotaxamt）
- 收款成本金额（F_ora_receivecostamt）
- 收款税率（F_ora_receivetaxrate）

**精度控制**
- 金额精度：根据币别设置动态控制
- 单价精度：根据币别设置动态控制
- 数量精度：根据物料设置动态控制

**数据关联**
- 关联销售订单获取订单信息
- 关联出库单获取出库和成本信息
- 关联收款单获取收款信息

## 项目成果

| 功能 | 说明 | 效果 |
|------|------|------|
| 成本字段显示 | 成本金额、退货成本等 | 满足成本分析需求 |
| 精度动态控制 | 根据币别/物料自动调整 | 数据展示规范 |
| 名称引用 | 自定义字段显示名称 | 用户体验好 |
| 性能优化 | 大数据量流畅展示 | 操作体验好 |

## 交付物

- 报表插件源代码
- 部署文档
- 测试用例
- 使用说明

## 技术要点

### 报表插件开发规范
```csharp
// 继承标准报表类
public class SalDetailRptExt : SalDetailRpt
{
    // 初始化方法
    public override void Initialize()
    {
        base.Initialize();
        // 注册字段和精度控制
    }
    
    // 可以重写的方法
    // - GetSql()           : 自定义SQL
    // - GetHeaders()       : 自定义表头
    // - GetSummaryColums() : 自定义汇总列
    // - FormatCellValue()  : 自定义单元格格式
}
```

### 精度控制原理
```csharp
// DecimalControlField参数说明
new DecimalControlField(fieldName, precisionFieldName)
// fieldName: 需要控制精度的字段
// precisionFieldName: 存储精度值的字段

// 例如：
new DecimalControlField("F_ora_COSTAMOUNT", "FAMOUNTDIGITS")
// 表示 F_ora_COSTAMOUNT 字段的精度由 FAMOUNTDIGITS 字段的值决定
```

## 经验总结

### 做得好的
1. **继承标准类**: 复用标准报表逻辑，减少开发量
2. **精度控制完善**: 满足多币别、多物料的精度需求
3. **代码规范**: 命名规范，注释清晰

### 可以改进的
1. 可以增加更多的字段扩展
2. 可以优化SQL查询性能
3. 可以增加导出功能的定制

## 技术栈

- **ERP**: 金蝶云星空
- **开发语言**: C# (.NET Framework)
- **技术**: 报表插件框架、HotUpdate热更新
- **IDE**: Visual Studio

---

<small>本案例已经脱敏处理，不包含真实企业名称和敏感业务数据</small>
