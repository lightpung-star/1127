import React, { useState } from 'react';
import { Users, Code, Database, Wrench, Zap, Cpu, Box, Activity } from 'lucide-react';
import { Card, Badge } from './ui/Card';

export const SectionFramework: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const frontEndTypes = [
    {
      title: '市场小前端',
      subtitle: '解决方案中心团队',
      icon: <Users className="w-5 h-5" />,
      desc: '聚焦客户需求挖掘与价值转化，采用“铁三角”模式。',
      roles: ['售前支持', '解决方案', '合同商务'],
      duty: '客户统一接口，打通线索到回款全流程。'
    },
    {
      title: '产品小前端',
      subtitle: '敏捷产品线团队',
      icon: <Box className="w-5 h-5" />,
      desc: '组建13个敏捷产品线（如矿权储量、地震测井）。',
      roles: ['产品经理', '领域专家', '开发工程师', '产品运维'],
      duty: '产品经理竞聘上岗，对商业成功负责，全生命周期管理。'
    },
    {
      title: '交付小前端',
      subtitle: '项目交付团队',
      icon: <Activity className="w-5 h-5" />,
      desc: '基于 BizDevOps 理念，针对173个在建项目组建。',
      roles: ['项目经理', '咨询顾问', '实施顾问', '开发人员'],
      duty: '项目经理全权组建，对质量、成本及满意度端到端负责。'
    },
    {
      title: '运维小前端',
      subtitle: '技术运维团队',
      icon: <Wrench className="w-5 h-5" />,
      desc: '由技术开发中心与业务研发中心运维工程师组成。',
      roles: ['运维工程师'],
      duty: '系统监控、修复及升级，收集反馈支持迭代。'
    }
  ];

  return (
    <div className="space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900">变革整体架构：四中心一团队</h2>
        <p className="text-slate-500 mt-2">明确小前端类型 · 强化AI赋能 · 落实价值导向激励</p>
      </div>

      {/* The 4 Centers Logic */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: '解决方案中心', type: 'Market' },
          { name: '业务研发中心', type: 'Product' },
          { name: '技术开发中心', type: 'Tech' },
          { name: '数据智能研发中心', type: 'Data' }
        ].map((center, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
              <Database className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-800">{center.name}</h4>
            <span className="text-xs text-slate-500 mt-1">资源池与能力底座</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
         <div className="h-8 w-0.5 bg-slate-300"></div>
      </div>
      
      {/* Dynamic Tabs for Small Front Ends */}
      <Card className="border-t-4 border-t-emerald-500">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 flex flex-col gap-2">
            <h3 className="text-xl font-bold text-slate-900 mb-4 px-2">四类小前端</h3>
            {frontEndTypes.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left p-3 rounded-lg flex items-center gap-3 transition-all ${
                  activeTab === index 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm' 
                    : 'hover:bg-slate-50 text-slate-600 border border-transparent'
                }`}
              >
                <div className={`${activeTab === index ? 'text-emerald-600' : 'text-slate-400'}`}>
                  {item.icon}
                </div>
                <div>
                  <div className="font-semibold text-sm">{item.title}</div>
                  <div className="text-xs opacity-80">{item.subtitle}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="md:w-2/3 bg-slate-50 rounded-xl p-6 border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-slate-800">{frontEndTypes[activeTab].title}</h4>
              <Badge color="green">{frontEndTypes[activeTab].subtitle}</Badge>
            </div>
            
            <p className="text-slate-600 mb-6">{frontEndTypes[activeTab].desc}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                <h5 className="text-xs font-bold text-slate-500 uppercase mb-2">核心角色</h5>
                <div className="flex flex-wrap gap-2">
                  {frontEndTypes[activeTab].roles.map((role, i) => (
                    <span key={i} className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                 <h5 className="text-xs font-bold text-slate-500 uppercase mb-2">主要职责</h5>
                 <p className="text-sm text-slate-700 leading-relaxed">
                   {frontEndTypes[activeTab].duty}
                 </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* AI Mechanism */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-purple-600" />
            小前端运转机制
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-purple-500"></div>
              <div>
                <span className="font-bold text-slate-800">数字化工单流转：</span>
                <p className="text-sm text-slate-600">打通Biz-Dev-Ops价值流。前端发起需求，中台作为资源池接单，实现透明化流转。</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-purple-500"></div>
              <div>
                <span className="font-bold text-slate-800">产品收敛闭环：</span>
                <p className="text-sm text-slate-600">建立业务驱动、产品收敛的数字化闭环协同机制。</p>
              </div>
            </li>
          </ul>
        </div>

        <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
          <h4 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
            <Zap className="w-4 h-4" /> AI 深度应用
          </h4>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded shadow-sm border border-purple-100">
              <div className="font-semibold text-sm text-purple-800">AI 辅助研发</div>
              <div className="text-xs text-slate-600">利用数据智能中心资源，构建智能工作流。</div>
            </div>
            <div className="bg-white p-3 rounded shadow-sm border border-purple-100">
              <div className="font-semibold text-sm text-purple-800">智能工具链</div>
              <div className="text-xs text-slate-600">利用昆仑小智、小梦AI大模型辅助代码生成、文档编写。</div>
            </div>
            <div className="bg-white p-3 rounded shadow-sm border border-purple-100">
              <div className="font-semibold text-sm text-purple-800">智能化决策支持</div>
              <div className="text-xs text-slate-600">算力资源对接业务需求，AI全流程嵌入。</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
