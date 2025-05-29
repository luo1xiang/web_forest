'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';

export default function ResultPage() {
  const psyState = usePsyStore((state) => state);

  const playAgain = function() {
    window.location.reload();
  }

  // 根據分數選擇結果和主題配色
  const getResultData = () => {
    if (psyState.score >= 3 && psyState.score <= 7) {
      return {
        image: "/fox.png", // 改為直接使用 public 路徑
        title: "狐狸｜森林開心果",
        description: "你聰明、外向又活潑，是大家心中的開心果！你喜歡和朋友一起冒險，總能帶來新點子和正能量。森林裡的夥伴們總是圍繞著你，因為你讓每一天都充滿陽光！",
        bgGradient: "from-orange-200 via-amber-100 to-yellow-200",
        overlay: "from-orange-300/50 via-amber-200/40 to-yellow-300/60",
        particle: "bg-orange-400/80",
        glow: "bg-amber-400/70",
        ring: "border-orange-400/50",
        buttonBg: "bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700",
        shadow: "shadow-orange-500/70",
        accent: "bg-yellow-500/90",
        textColor: "text-orange-900"
      };
    } else if (psyState.score >= 8 && psyState.score <= 10) {
      return {
        image: "/owl.png", // 改為直接使用 public 路徑
        title: "貓頭鷹｜夜晚溫柔智者",
        description: "你冷靜、細心、懂得傾聽，內心充滿想法與洞察力。你喜歡思考、閱讀和獨處的時光，就像一隻守護森林夜晚的貓頭鷹，帶著智慧與溫柔的力量。",
        bgGradient: "from-orange-200 via-pink-100 to-purple-200",
        overlay: "from-orange-300/50 via-pink-200/40 to-purple-300/60",
        particle: "bg-orange-400/80",
        glow: "bg-pink-400/70",
        ring: "border-purple-400/50",
        buttonBg: "bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700",
        shadow: "shadow-pink-500/70",
        accent: "bg-purple-500/90",
        textColor: "text-purple-900"
      };
    } else {
      return {
        image: "/squirrel.png", // 改為直接使用 public 路徑
        title: "松鼠｜細膩收藏家",
        description: "你擁有溫暖的心和豐富的想像力，喜歡創造與蒐集生活中美好的細節。你是那種會為朋友做手工卡片、在角落種花的人，森林裡最溫柔的一道風景就是你！",
        bgGradient: "from-orange-200 via-green-100 to-teal-200",
        overlay: "from-orange-300/50 via-green-200/40 to-teal-300/60",
        particle: "bg-orange-400/80",
        glow: "bg-green-400/70",
        ring: "border-teal-400/50",
        buttonBg: "bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700",
        shadow: "shadow-green-500/70",
        accent: "bg-teal-500/90",
        textColor: "text-teal-900"
      };
    }
  };

  const resultData = getResultData();

  return (
    <>
      <MobileFrame>
        {/* 森林背景圖片 */}
        <div className="absolute inset-0">
          <Image 
            src="/forest.png" // 改為直接使用 public 路徑
            alt="forest background" 
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        
        {/* 主題色彩覆蓋層 */}
        <div className={`absolute inset-0 bg-gradient-to-br ${resultData.bgGradient} opacity-75`}></div>
        
        {/* 動態覆蓋層 */}
        <div className={`absolute inset-0 bg-gradient-to-tl ${resultData.overlay} animate-pulse`} style={{animationDuration: '4s'}}></div>
        
        {/* 森林光芒掃過效果 */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        
        {/* 森林精靈光點效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute w-3 h-3 ${resultData.particle} rounded-full animate-bounce top-1/5 left-1/6 shadow-xl`} style={{animationDelay: '0s', animationDuration: '2.5s'}}></div>
          <div className={`absolute w-4 h-4 ${resultData.particle} rounded-full animate-bounce top-1/4 right-1/5 shadow-2xl`} style={{animationDelay: '0.8s', animationDuration: '2.8s'}}></div>
          <div className={`absolute w-2 h-2 ${resultData.particle} rounded-full animate-bounce top-3/5 left-1/8 shadow-lg`} style={{animationDelay: '1.2s', animationDuration: '3.2s'}}></div>
          <div className={`absolute w-3 h-3 ${resultData.particle} rounded-full animate-bounce top-2/3 right-1/6 shadow-xl`} style={{animationDelay: '2s', animationDuration: '2.4s'}}></div>
          <div className={`absolute w-4 h-4 ${resultData.particle} rounded-full animate-bounce top-4/5 left-2/3 shadow-2xl`} style={{animationDelay: '2.8s', animationDuration: '2s'}}></div>
          <div className={`absolute w-2 h-2 ${resultData.particle} rounded-full animate-bounce top-1/12 right-2/5 shadow-lg`} style={{animationDelay: '3.5s', animationDuration: '3.8s'}}></div>
          
          {/* 新增更多光點 */}
          <div className={`absolute w-1 h-1 ${resultData.glow} rounded-full animate-bounce top-1/8 left-1/3 shadow-md`} style={{animationDelay: '0.3s', animationDuration: '2.2s'}}></div>
          <div className={`absolute w-2 h-2 ${resultData.accent} rounded-full animate-bounce top-7/8 right-1/8 shadow-lg`} style={{animationDelay: '1.7s', animationDuration: '3.5s'}}></div>
          <div className={`absolute w-1 h-1 ${resultData.particle} rounded-full animate-bounce top-3/8 right-1/12 shadow-sm`} style={{animationDelay: '3.2s', animationDuration: '4s'}}></div>
        </div>

        {/* 森林光環 */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className={`w-96 h-96 border ${resultData.ring} rounded-full animate-spin opacity-15 shadow-lg`} style={{animationDuration: '30s'}}></div>
          <div className={`absolute w-80 h-80 border ${resultData.ring} rounded-full animate-spin opacity-12 shadow-md`} style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
          <div className={`absolute w-64 h-64 border ${resultData.ring} rounded-full animate-spin opacity-10 shadow-sm`} style={{animationDuration: '20s'}}></div>
        </div>

        {/* 主要內容 */}
        <div className="relative z-20 flex flex-col h-full py-4">
          
          {/* 結果展示區域 */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 gap-4">
            
            {/* 動物圖片 - 森林風格特效 */}
            <div className="relative group">
              {/* 森林樹葉環繞效果 */}
              <div className={`absolute -top-8 -left-8 w-4 h-2 ${resultData.glow} opacity-60 animate-bounce`} style={{animationDelay: '0s', animationDuration: '3s', borderRadius: '50% 10% 50% 10%'}}></div>
              <div className={`absolute -top-6 -right-10 w-3 h-2 ${resultData.accent} opacity-50 animate-bounce`} style={{animationDelay: '1s', animationDuration: '2.5s', borderRadius: '50% 10% 50% 10%'}}></div>
              <div className={`absolute -bottom-8 -left-6 w-5 h-3 ${resultData.particle} opacity-70 animate-bounce`} style={{animationDelay: '2s', animationDuration: '3.5s', borderRadius: '50% 10% 50% 10%'}}></div>
              <div className={`absolute -bottom-6 -right-8 w-3 h-2 bg-orange-400/40 opacity-40 animate-bounce`} style={{animationDelay: '0.5s', animationDuration: '2.8s', borderRadius: '50% 10% 50% 10%'}}></div>
              <div className={`absolute top-1/4 -left-12 w-2 h-1 ${resultData.glow} opacity-80 animate-bounce`} style={{animationDelay: '1.5s', animationDuration: '3.2s', borderRadius: '50% 10% 50% 10%'}}></div>
              <div className={`absolute top-3/4 -right-12 w-4 h-2 ${resultData.accent} opacity-60 animate-bounce`} style={{animationDelay: '2.5s', animationDuration: '2.2s', borderRadius: '50% 10% 50% 10%'}}></div>
              
              {/* 森林小花朵效果 */}
              <div className={`absolute top-1/6 right-1/6 w-2 h-2 ${resultData.particle} opacity-70 animate-pulse`} style={{animationDelay: '0s', animationDuration: '4s', borderRadius: '50% 0 50% 0'}}></div>
              <div className={`absolute bottom-1/4 left-1/8 w-3 h-3 ${resultData.glow} opacity-60 animate-pulse`} style={{animationDelay: '2s', animationDuration: '3s', borderRadius: '50% 0 50% 0'}}></div>
              <div className={`absolute top-2/3 right-1/4 w-2 h-2 ${resultData.accent} opacity-50 animate-pulse`} style={{animationDelay: '1s', animationDuration: '5s', borderRadius: '50% 0 50% 0'}}></div>
              
              {/* 森林螢火蟲效果 */}
              <div className={`absolute top-1/3 left-1/5 w-1 h-1 bg-orange-400/90 opacity-90 animate-ping`} style={{animationDelay: '0s', animationDuration: '2s'}}></div>
              <div className={`absolute bottom-1/3 right-1/5 w-1 h-1 ${resultData.glow} opacity-80 animate-ping`} style={{animationDelay: '1s', animationDuration: '2.5s'}}></div>
              <div className={`absolute top-1/2 right-1/8 w-1 h-1 ${resultData.particle} opacity-70 animate-ping`} style={{animationDelay: '0.5s', animationDuration: '3s'}}></div>
              <div className={`absolute bottom-1/6 left-1/3 w-1 h-1 ${resultData.accent} opacity-85 animate-ping`} style={{animationDelay: '1.8s', animationDuration: '2.2s'}}></div>
              
              {/* 主圖片 */}
              <Image 
                src={resultData.image} 
                alt={resultData.title}
                className="relative z-10 w-72 h-72 object-contain drop-shadow-2xl 
                         group-hover:scale-105 transition-all duration-700 
                         animate-pulse group-hover:animate-none group-hover:drop-shadow-[0_35px_60px_rgba(0,0,0,0.4)]"
                width={288}
                height={288}
                priority
                style={{animationDuration: '4s'}}
              />
              
              {/* 森林地面效果 */}
              <div className={`absolute -bottom-12 left-1/2 w-32 h-4 bg-orange-400/20 opacity-20 blur-md transform -translate-x-1/2`} style={{borderRadius: '50%'}}></div>
              <div className={`absolute -bottom-8 left-1/2 w-24 h-2 ${resultData.glow} opacity-30 blur-sm transform -translate-x-1/2 animate-pulse`} style={{animationDuration: '3s', borderRadius: '50%'}}></div>
            </div>

            {/* 結果標題 */}
            <div className="text-center">
              <h1 className={`text-lg font-bold ${resultData.textColor} drop-shadow-lg backdrop-blur-sm 
                           bg-white/25 rounded-2xl py-2 px-4 border border-white/40 animate-pulse max-w-sm`}
                  style={{animationDuration: '3s'}}>
                你是：{resultData.title}
              </h1>
            </div>

            {/* 結果描述 */}
            <div className={`text-center text-xs ${resultData.textColor} leading-relaxed px-4 
                          backdrop-blur-sm bg-white/20 rounded-2xl py-3 border border-white/30 
                          max-w-sm mx-auto shadow-lg`}>
              {resultData.description}
            </div>
          </div>

          {/* 底部按鈕區域 */}
          <div className="px-4 pb-4 flex items-center justify-center">
            {/* 再玩一次按鈕 */}
            <button 
              className={`relative z-50 w-full max-w-xs rounded-2xl text-white font-bold text-sm py-3 px-6
                         ${resultData.buttonBg} transition-all duration-500 transform 
                         hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0
                         shadow-xl hover:shadow-2xl border-2 border-white/40 overflow-hidden group
                         backdrop-blur-md flex items-center justify-center
                         hover:border-white/60 animate-pulse hover:animate-none`}
              onClick={playAgain}
              style={{animationDuration: '3s'}}
            >
              {/* 按鈕內部光效 */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                            transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                            transition-transform duration-800 ease-out"></div>
              
              {/* 按鈕文字 */}
              <div className="relative z-10 flex items-center justify-center gap-2">
                <span className="drop-shadow-lg">再玩一次</span>
              </div>
              
              {/* 按鈕邊緣效果 */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
            </button>
          </div>
        </div>

        {/* 四角森林裝飾 */}
        <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-white/40 animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-white/40 animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-white/40 animate-pulse" style={{animationDelay: '2s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-white/40 animate-pulse" style={{animationDelay: '3s', animationDuration: '4s'}}></div>
      </MobileFrame>
    </>
  );
}