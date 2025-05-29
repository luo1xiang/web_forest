'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import forestBg from '@/../public/forest.png';

export default function DisplayResultPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        {/* 森林背景圖片 */}
        <div className="absolute inset-0">
          <Image 
            src={forestBg} 
            alt="forest background" 
            fill
            className="object-cover opacity-85"
            priority
          />
        </div>
        
        {/* 神秘森林覆蓋層 */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 via-green-100 to-lime-200 opacity-60"></div>
        
        {/* 動態光影覆蓋層 */}
        <div className="absolute inset-0 bg-gradient-to-tl from-green-300/40 via-emerald-200/30 to-lime-300/50 animate-pulse" style={{animationDuration: '4s'}}></div>
        
        {/* 森林魔法光芒掃過效果 */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
        
        {/* 森林精靈光點效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-2 h-2 bg-emerald-400/80 rounded-full animate-bounce top-1/5 left-1/6 shadow-md" 
               style={{animationDelay: '0s', animationDuration: '2.5s'}}></div>
          <div className="absolute w-3 h-3 bg-green-400/90 rounded-full animate-bounce top-1/4 right-1/4 shadow-lg" 
               style={{animationDelay: '0.5s', animationDuration: '3s'}}></div>
          <div className="absolute w-2 h-2 bg-lime-400/70 rounded-full animate-bounce top-2/5 left-1/8 shadow-sm" 
               style={{animationDelay: '1s', animationDuration: '2.8s'}}></div>
          <div className="absolute w-3 h-3 bg-emerald-500/85 rounded-full animate-bounce top-3/5 right-1/6 shadow-lg" 
               style={{animationDelay: '1.5s', animationDuration: '2.2s'}}></div>
          <div className="absolute w-4 h-4 bg-green-300/95 rounded-full animate-bounce top-4/5 left-2/3 shadow-xl" 
               style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
          <div className="absolute w-2 h-2 bg-lime-300/60 rounded-full animate-bounce top-1/12 right-2/5 shadow-sm" 
               style={{animationDelay: '2.5s', animationDuration: '4s'}}></div>
          <div className="absolute w-3 h-3 bg-emerald-300/75 rounded-full animate-bounce top-5/6 right-1/3 shadow-lg" 
               style={{animationDelay: '3s', animationDuration: '2.7s'}}></div>
          <div className="absolute w-2 h-2 bg-green-500/80 rounded-full animate-bounce top-1/8 left-3/4 shadow-md" 
               style={{animationDelay: '0.8s', animationDuration: '3.8s'}}></div>
        </div>

        {/* 森林能量波紋效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 中央自然能量源 */}
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-300/30 rounded-full opacity-50 blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '5s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-300/25 rounded-full opacity-40 blur-2xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '1.5s', animationDuration: '6s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-lime-300/20 rounded-full opacity-30 blur-xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '3s', animationDuration: '7s'}}></div>
          
          {/* 擴散波紋 */}
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-emerald-400/40 rounded-full opacity-40 animate-ping transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-green-400/35 rounded-full opacity-30 animate-ping transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-lime-400/30 rounded-full opacity-25 animate-ping transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          
          {/* 森林微風光束 */}
          <div className="absolute w-1 h-32 bg-emerald-400/50 opacity-50 animate-pulse left-1/4 top-1/3 blur-sm rotate-12" style={{animationDuration: '4s'}}></div>
          <div className="absolute w-1 h-28 bg-green-400/45 opacity-40 animate-pulse right-1/5 top-2/5 blur-sm -rotate-12" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          <div className="absolute w-1 h-24 bg-lime-400/40 opacity-35 animate-pulse left-2/3 top-1/5 blur-sm rotate-45" style={{animationDelay: '1s', animationDuration: '3.5s'}}></div>
        </div>

        {/* 森林魔法光環 */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[400px] h-[400px] border-2 border-emerald-300/30 rounded-full animate-spin opacity-30 shadow-xl" style={{animationDuration: '30s'}}></div>
          <div className="absolute w-80 h-80 border border-green-300/25 rounded-full animate-spin opacity-25 shadow-lg" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
          <div className="absolute w-64 h-64 border border-lime-300/20 rounded-full animate-spin opacity-20 shadow-md" style={{animationDuration: '20s'}}></div>
          <div className="absolute w-48 h-48 border border-emerald-400/15 rounded-full animate-spin opacity-15" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        </div>

        {/* 主要內容區域 */}
        <div className="relative z-20 flex justify-center items-center h-full">
          <div className="flex flex-col items-center gap-8 p-6 max-w-xs mx-auto">
            
            {/* 標題區域 - 森林揭曉效果 */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-emerald-400/25 rounded-2xl blur-lg opacity-50 animate-pulse group-hover:opacity-80 transition-opacity duration-500" style={{animationDuration: '3s'}}></div>
              <div className="absolute -inset-2 bg-green-300/20 rounded-xl blur-md opacity-40 animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
              
              <h1 className="relative z-10 text-2xl font-bold text-center bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent 
                           drop-shadow-lg animate-pulse hover:animate-none transition-all duration-500 hover:scale-105"
                  style={{animationDuration: '4s'}}>
                尋找我的森林夥伴
              </h1>
              
              {/* 標題裝飾光效 */}
              <div className="absolute -inset-1 border border-emerald-300/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            </div>
            
            {/* 森林分隔線 */}
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse" style={{animationDuration: '2s'}}></div>
            
            {/* 查看結果按鈕 - 森林風格 */}
            <div className="relative group">
              {/* 按鈕多層光暈 */}
              <div className="absolute -inset-6 bg-lime-400/30 rounded-full blur-xl opacity-60 animate-pulse group-hover:opacity-100 transition-opacity duration-300" style={{animationDuration: '2s'}}></div>
              <div className="absolute -inset-4 bg-green-400/25 rounded-full blur-lg opacity-50 animate-pulse" style={{animationDelay: '0.5s', animationDuration: '2.5s'}}></div>
              <div className="absolute -inset-2 bg-emerald-400/20 rounded-full blur-md opacity-40 animate-pulse" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
              
              {/* 按鈕旋轉光環 */}
              <div className="absolute -inset-2 border border-emerald-400/40 rounded-full animate-spin opacity-30 group-hover:opacity-70 transition-opacity duration-300" style={{animationDuration: '3s'}}></div>
              <div className="absolute -inset-1 border border-green-400/30 rounded-full animate-spin opacity-20 group-hover:opacity-60 transition-opacity duration-300" style={{animationDuration: '2s', animationDirection: 'reverse'}}></div>
              
              {/* 按鈕本體 */}
              <button 
                className="relative z-10 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 
                         w-full min-w-[240px] rounded-2xl text-white py-4 px-6 text-base flex justify-center items-center font-bold 
                         shadow-[0px_4px_0px_1px_#10B981] hover:shadow-[0px_6px_0px_1px_#059669] 
                         cursor-pointer hover:translate-y-0.5 transition-all duration-300
                         backdrop-blur-md border-2 border-white/30 overflow-hidden group/btn
                         hover:scale-105 animate-pulse group-hover:animate-none"
                onClick={nextStep}
                style={{animationDuration: '3s'}}
              >
                {/* 按鈕內部光效 */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                              transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full 
                              transition-transform duration-800 ease-out"></div>
                
                {/* 按鈕文字 */}
                <div className="relative z-10 flex items-center justify-center gap-2">
                  <span className="text-xl animate-bounce group-hover/btn:animate-pulse" style={{animationDuration: '2s'}}>🌲</span>
                  <span className="drop-shadow-md">查看結果</span>
                  <span className="text-xl animate-bounce group-hover/btn:animate-pulse" style={{animationDuration: '2s', animationDelay: '0.5s'}}>🦝</span>
                </div>
                
                {/* 按鈕邊緣效果 */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/15 opacity-0 group-hover/btn:opacity-100 transition-all duration-500 animate-pulse"></div>
              </button>
              
              {/* 按鈕底部森林反射 */}
              <div className="absolute bottom-0 left-1/2 w-32 h-2 bg-emerald-400/40 blur-md opacity-50 animate-pulse transform -translate-x-1/2 translate-y-3" style={{animationDuration: '2s'}}></div>
            </div>
            
            {/* 森林小動物預告 */}
            <div className="text-center text-emerald-700 text-sm opacity-70 animate-pulse backdrop-blur-sm bg-white/10 rounded-xl py-2 px-4 border border-white/20" style={{animationDuration: '4s'}}>
              🍄 準備遇見你的森林代表角色
            </div>
            
          </div>
        </div>

        {/* 四角森林裝飾 */}
        <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-emerald-400/50 animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-green-400/50 animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-lime-400/50 animate-pulse" style={{animationDelay: '2s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-emerald-400/50 animate-pulse" style={{animationDelay: '3s', animationDuration: '4s'}}></div>
        
        {/* 中央森林印記 */}
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white/60 rounded-full animate-ping transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '1.5s'}}></div>

      </MobileFrame>
    </>
  );
}