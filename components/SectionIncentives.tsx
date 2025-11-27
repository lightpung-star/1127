import React from 'react';
import { TrendingUp, Award, Coins, Wallet } from 'lucide-react';
import { Card } from './ui/Card';

export const SectionIncentives: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">考核激励机制</h2>
        <p className="text-slate-500 mt-2">极具穿透力的价值分配机制 · 彻底激活个体活力</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-t-indigo-500 border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <Coins className="text-indigo-600 w-5 h-5" />
            <h3 className="font-bold text-slate-800">目标成本结余</h3>
          </div>
          <p className="text-sm text-slate-600 mb-3">
            节省即利润。项目结余的 <span className="font-bold text-indigo-600">20%-40%</span> 转化为团队奖金。
          </p>
          <div className="text-xs bg-slate-100 p-2 rounded text-slate-500">
            促使项目经理主动关注经营底线，“变要我省为我要省”。
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-t-indigo-500 border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="text-indigo-600 w-5 h-5" />
            <h3 className="font-bold text-slate-800">事前算赢</h3>
          </div>
          <p className="text-sm text-slate-600 mb-3">
            可视化激励。启动前明确目标收入与利润，设定阶梯奖励。
          </p>
          <div className="text-xs bg-slate-100 p-2 rounded text-slate-500">
            揭榜挂帅，将激励前置，让“听得见炮声的人”有动力打胜仗。
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-t-indigo-500 border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <Award className="text-indigo-600 w-5 h-5" />
            <h3 className="font-bold text-slate-800">积分制评价</h3>
          </div>
          <p className="text-sm text-slate-600 mb-3">
            全员激励。建立市场、交付、产品三类贡献积分体系。
          </p>
          <div className="text-xs bg-slate-100 p-2 rounded text-slate-500">
            收入不只看职级，而是看项目积分。实现价值刚性分享。
          </div>
        </div>
      </div>

      {/* Visual Flow Chart based on Page 5 */}
      <Card title="组织奖金分配流向图" className="bg-slate-50 overflow-hidden">
        <div className="flex flex-col items-center w-full text-xs sm:text-sm">
          
          {/* Level 1: Organization */}
          <div className="bg-indigo-600 text-white px-8 py-3 rounded-lg shadow-lg mb-8 relative">
            事业部总奖金
            <div className="absolute top-full left-1/2 -translate-x-1/2 h-8 w-0.5 bg-slate-300"></div>
          </div>

          {/* Level 2: Small Front End Pools */}
          <div className="w-full grid grid-cols-3 gap-4 mb-8 relative">
            <div className="absolute -top-4 left-[16%] right-[16%] h-4 border-t-2 border-l-2 border-r-2 border-slate-300 rounded-t-xl"></div>
            
            {/* Market */}
            <div className="flex flex-col items-center">
              <div className="bg-white border border-indigo-200 text-indigo-800 font-bold px-4 py-2 rounded shadow mb-4 z-10">
                市场奖金包 (20%)
              </div>
              <div className="flex flex-col gap-2 w-full max-w-[140px]">
                <div className="bg-orange-100 text-orange-800 p-2 rounded text-center border border-orange-200">工单市场贡献积分</div>
                <div className="h-4 border-l-2 border-dashed border-slate-300 mx-auto"></div>
                <div className="bg-white p-2 rounded border border-slate-200 text-center text-slate-500">售前/商务人员</div>
              </div>
            </div>

            {/* Delivery */}
            <div className="flex flex-col items-center">
              <div className="bg-white border border-indigo-200 text-indigo-800 font-bold px-4 py-2 rounded shadow mb-4 z-10">
                交付奖金包 (60%)
              </div>
               <div className="flex flex-col gap-2 w-full max-w-[140px]">
                <div className="bg-orange-100 text-orange-800 p-2 rounded text-center border border-orange-200">工单交付贡献积分</div>
                <div className="h-4 border-l-2 border-dashed border-slate-300 mx-auto"></div>
                <div className="bg-white p-2 rounded border border-slate-200 text-center text-slate-500">项目经理/实施/顾问</div>
              </div>
            </div>

            {/* Product */}
            <div className="flex flex-col items-center">
              <div className="bg-white border border-indigo-200 text-indigo-800 font-bold px-4 py-2 rounded shadow mb-4 z-10">
                产品奖金包 (20%)
              </div>
               <div className="flex flex-col gap-2 w-full max-w-[140px]">
                <div className="bg-orange-100 text-orange-800 p-2 rounded text-center border border-orange-200">工单产品贡献积分</div>
                <div className="h-4 border-l-2 border-dashed border-slate-300 mx-auto"></div>
                <div className="bg-white p-2 rounded border border-slate-200 text-center text-slate-500">产品经理/开发/运维</div>
              </div>
            </div>
          </div>

          {/* Individual */}
          <div className="w-full max-w-2xl bg-indigo-50 rounded-xl p-4 border border-indigo-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wallet className="text-indigo-600" />
              <span className="font-bold text-indigo-900">个人奖金</span>
            </div>
            <div className="h-0.5 flex-1 bg-indigo-200 mx-4"></div>
            <span className="text-indigo-700">个人奖金调节系数 × ∑个人贡献积分</span>
          </div>

        </div>
      </Card>
    </div>
  );
};
