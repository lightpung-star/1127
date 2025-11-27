import React from 'react';
import { ArrowRight, Globe, AlertTriangle, Layers, Clock, Repeat, BatteryWarning } from 'lucide-react';
import { Card } from './ui/Card';

export const SectionDrivers: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">变革驱动因素</h2>
        <p className="text-slate-500 mt-2">外部行业转型压力与内部管理瓶颈的双重驱动</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* External Drivers */}
        <Card className="border-t-4 border-t-blue-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">外部行业趋势倒逼</h3>
              <p className="text-sm text-slate-500">从资源主导向“技术+低碳”双轮驱动转变</p>
            </div>
          </div>
          
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">1</span>
              <p className="text-slate-700 text-sm"><span className="font-semibold">范式变革：</span>人工智能与工业互联网驱动，全球企业正经历根本性变革。</p>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">2</span>
              <p className="text-slate-700 text-sm"><span className="font-semibold">国家战略：</span>“稳油增气强非”战略要求及数智中国石油建设规划。</p>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">3</span>
              <p className="text-slate-700 text-sm"><span className="font-semibold">决策转移：</span>核心业务智能化升级，需从经验决策向数据决策转移。</p>
            </li>
          </ul>
        </Card>

        {/* Internal Pain Points */}
        <Card className="border-t-4 border-t-amber-500">
           <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-amber-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">内部管理亟待破解</h3>
              <p className="text-sm text-slate-500">传统事业部制下面临四大核心痛点</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <div className="flex items-center gap-2 mb-2 text-amber-700 font-semibold">
                <Layers className="w-4 h-4" /> 部门壁垒明显
              </div>
              <p className="text-xs text-slate-600">资源调配冗长，难以实现跨部门高效协同。</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <div className="flex items-center gap-2 mb-2 text-amber-700 font-semibold">
                <Clock className="w-4 h-4" /> 决策链条长
              </div>
              <p className="text-xs text-slate-600">审批环节多，难以敏捷响应客户多变需求。</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <div className="flex items-center gap-2 mb-2 text-amber-700 font-semibold">
                <Repeat className="w-4 h-4" /> 资源复用率低
              </div>
              <p className="text-xs text-slate-600">同类技术重复建设，缺乏统一资产沉淀。</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <div className="flex items-center gap-2 mb-2 text-amber-700 font-semibold">
                <BatteryWarning className="w-4 h-4" /> 创新动力不足
              </div>
              <p className="text-xs text-slate-600">传统科层管控下，员工缺乏“代理老板”意识。</p>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="flex justify-center mt-8">
        <div className="bg-slate-800 text-white py-3 px-6 rounded-full flex items-center gap-2 shadow-lg">
          <span className="font-semibold">目标</span>
          <ArrowRight className="w-4 h-4" />
          <span>构建适应不确定性环境的敏捷组织形态</span>
        </div>
      </div>
    </div>
  );
};
