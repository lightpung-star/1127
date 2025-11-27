import React from 'react';
import { CheckCircle2, AlertOctagon, Lightbulb, PieChart, TrendingUp, Users } from 'lucide-react';
import { Card } from './ui/Card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export const SectionOutcome: React.FC = () => {
  // Mock data to visualize the Talent Gap mentioned in the PDF
  const talentData = [
    { name: 'AI 渗透率', current: 3.8, target: 15 },
    { name: 'AI 技能掌握', current: 21, target: 100 }, // 100 - 79% who don't have it
    { name: '产品经理占比', current: 15, target: 30 }, // Target is estimated for visual
  ];

  return (
    <div className="space-y-8">
      
      {/* Outcomes */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-emerald-50 border-emerald-100">
          <h3 className="flex items-center gap-2 font-bold text-emerald-800 mb-2">
            <CheckCircle2 className="w-5 h-5" /> 响应效率提升
          </h3>
          <p className="text-sm text-emerald-700">
            初步解决跨部门协作难题，实现对客户需求的快速响应。
          </p>
        </Card>
        <Card className="bg-emerald-50 border-emerald-100">
          <h3 className="flex items-center gap-2 font-bold text-emerald-800 mb-2">
            <TrendingUp className="w-5 h-5" /> 经营意识增强
          </h3>
          <p className="text-sm text-emerald-700">
            经营压力传递至前端项目经理，团队主动降本增效意识显著提升。
          </p>
        </Card>
        <Card className="bg-emerald-50 border-emerald-100">
           <h3 className="flex items-center gap-2 font-bold text-emerald-800 mb-2">
            <PieChart className="w-5 h-5" /> 产品化路径清晰
          </h3>
          <p className="text-sm text-emerald-700">
            明确了将项目资产沉淀为标准化产品的路径，为规模化发展奠定基础。
          </p>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Challenges */}
        <Card title="面临的挑战" className="border-t-4 border-t-red-500">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Users className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">人才结构性短缺</h4>
                <p className="text-xs text-slate-500 mt-1">既懂油气业务又懂AI技术的复合型人才严重不足。</p>
              </div>
            </div>
            
            <div className="h-48 w-full bg-slate-50 rounded-lg p-2">
               <ResponsiveContainer width="100%" height="100%">
                <BarChart data={talentData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 10}} />
                  <Tooltip />
                  <Bar dataKey="current" fill="#94a3b8" name="当前现状 (%)" radius={[0, 4, 4, 0]}>
                     <Cell fill="#ef4444" />
                     <Cell fill="#f97316" />
                     <Cell fill="#eab308" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-[10px] text-center text-slate-400 mt-1">
                * 数据来源：AI渗透率3.8%，软件工程师未掌握AI技能79%，产品经理占比15%
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <AlertOctagon className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">AI 转型赋能待深化</h4>
                <p className="text-xs text-slate-500 mt-1">79%的软件工程师尚未掌握AI协同开发技能。</p>
              </div>
            </div>

             <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <AlertOctagon className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">产品管理能力薄弱</h4>
                <p className="text-xs text-slate-500 mt-1">产品经理人数占比低(15%)，人均负责多条产品线。</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Suggestions */}
        <Card title="后续工作建议" className="border-t-4 border-t-blue-500">
          <ul className="space-y-4">
            <li className="bg-blue-50 p-4 rounded-lg flex gap-3">
              <span className="flex-shrink-0 font-bold text-blue-600 text-lg">01</span>
              <div>
                <h4 className="font-bold text-blue-900 text-sm">加速人才结构重构</h4>
                <p className="text-xs text-blue-800 mt-1">启动AI人才专项引进与培养，推动软件工程师向AI协同工程师转型。</p>
              </div>
            </li>
            <li className="bg-blue-50 p-4 rounded-lg flex gap-3">
              <span className="flex-shrink-0 font-bold text-blue-600 text-lg">02</span>
              <div>
                <h4 className="font-bold text-blue-900 text-sm">深化三总师赋能体系</h4>
                <p className="text-xs text-blue-800 mt-1">做实业务、技术、数据三总师决策权，构建行业数据图谱。</p>
              </div>
            </li>
            <li className="bg-blue-50 p-4 rounded-lg flex gap-3">
              <span className="flex-shrink-0 font-bold text-blue-600 text-lg">03</span>
              <div>
                <h4 className="font-bold text-blue-900 text-sm">完善 AI 协同研发环境</h4>
                <p className="text-xs text-blue-800 mt-1">推广 AI 代码助手与智能体 Agent，降低人力成本。</p>
              </div>
            </li>
          </ul>
        </Card>
      </div>

       <div className="bg-slate-900 text-white p-8 rounded-2xl text-center mt-8">
        <Lightbulb className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">试点实践的推广价值</h2>
        <p className="max-w-3xl mx-auto text-slate-300">
          通过构建“四中心一团队”架构、落地四类小前端、融入AI技术与精细化激励机制，形成了可复制的实践经验。为其他事业部提供清晰的落地模板，推动公司平台型组织变革整体落地见效。
        </p>
      </div>
    </div>
  );
};
