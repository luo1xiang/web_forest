'use client';

import { useState, useEffect } from 'react';
import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import cdBg from '@/../public/love.png';

export default function InstructionPage({nextStep}) {
  console.log('InstructionPage component rendered');

  // 動畫狀態控制
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // 頁面進入動畫
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleStartClick = () => {
    // 開始退出動畫
    setIsExiting(true);
    
    // 延迟執行頁面切換
    setTimeout(() => {
      console.log('Instruction page button clicked!');
      if (nextStep) {
        nextStep();
      } else {
        console.log('nextStep function is not provided!');
      }
    }, 300); // 等待退出動畫完成
  }

  return (
    <>
      {/* 背景圖片與效果層 */}
      <div className="fixed inset-0 z-0">
        <Image 
          src={cdBg} 
          alt="browser background" 
          fill
          className="object-cover"
          style={{
            objectPosition: 'center 40%',
          }}
          priority
          sizes="100vw"
        />
        
        {/* 夕陽氛圍強化層 */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-transparent to-purple-900/20"></div>
        
        {/* 溫暖光暈效果 */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/15 via-transparent to-pink-400/10"></div>
        
        {/* 漂浮光點 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-2 h-2 bg-pink-300/60 rounded-full animate-pulse" style={{top: '15%', left: '10%', animationDuration: '4s', animationDelay: '0s'}}></div>
          <div className="absolute w-1.5 h-1.5 bg-orange-300/70 rounded-full animate-pulse" style={{top: '25%', right: '15%', animationDuration: '5s', animationDelay: '1s'}}></div>
          <div className="absolute w-3 h-3 bg-purple-300/50 rounded-full animate-pulse" style={{top: '45%', left: '8%', animationDuration: '6s', animationDelay: '2s'}}></div>
          <div className="absolute w-2 h-2 bg-pink-400/55 rounded-full animate-pulse" style={{top: '65%', right: '12%', animationDuration: '4.5s', animationDelay: '3s'}}></div>
        </div>
        
        {/* 大範圍光暈 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse opacity-40" style={{top: '10%', left: '5%', animationDuration: '8s'}}></div>
          <div className="absolute w-80 h-80 bg-orange-400/25 rounded-full blur-3xl animate-pulse opacity-35" style={{top: '20%', right: '10%', animationDuration: '10s', animationDelay: '2s'}}></div>
          <div className="absolute w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse opacity-30" style={{bottom: '15%', left: '15%', animationDuration: '12s', animationDelay: '4s'}}></div>
        </div>
        
        {/* 細緻光線效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-0.5 h-32 bg-pink-300/30 blur-sm animate-pulse opacity-40" style={{top: '20%', left: '25%', animationDuration: '7s'}}></div>
          <div className="absolute w-0.5 h-24 bg-orange-300/35 blur-sm animate-pulse opacity-35" style={{top: '40%', right: '30%', animationDuration: '8s', animationDelay: '2s'}}></div>
          <div className="absolute w-0.5 h-28 bg-purple-300/25 blur-sm animate-pulse opacity-30" style={{top: '60%', left: '35%', animationDuration: '6s', animationDelay: '4s'}}></div>
        </div>
        
        {/* 夢幻漸變覆蓋 */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-600/8 animate-pulse opacity-60" style={{animationDuration: '15s'}}></div>
      </div>
      
      <MobileFrame>
        {/* 夕陽暖色調覆蓋層 */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/25 via-orange-900/20 to-purple-900/25"></div>
        
        {/* 夕陽濾鏡效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 via-orange-500/8 to-purple-600/12"></div>
        
        {/* 溫柔光暈效果 */}
        <div className="absolute inset-0 opacity-25" 
             style={{
               backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(251, 146, 60, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
               backgroundSize: '150px 150px, 200px 200px, 180px 180px',
               backgroundPosition: '0 0, 50px 50px, 100px 25px'
             }}>
        </div>
        
        {/* 夕陽暖光效果 */}
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-200/20 via-orange-100/15 to-purple-200/25 animate-pulse" style={{animationDuration: '8s'}}></div>
        
        {/* 浪漫光暈效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-100/15 to-transparent animate-pulse" style={{animationDuration: '10s', animationDelay: '3s'}}></div>
        
        {/* 漂浮的愛心和光點 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-4 h-4 bg-pink-400/70 rounded-full animate-bounce shadow-xl" style={{top: '20%', left: '16%', animationDelay: '0s', animationDuration: '4s'}}></div>
          <div className="absolute w-3 h-3 bg-orange-300/80 rounded-full animate-bounce shadow-lg" style={{top: '33%', right: '20%', animationDelay: '1s', animationDuration: '3.5s'}}></div>
          <div className="absolute w-5 h-5 bg-purple-400/60 rounded-full animate-bounce shadow-2xl" style={{top: '40%', left: '12%', animationDelay: '2s', animationDuration: '4.2s'}}></div>
          <div className="absolute w-3 h-3 bg-pink-300/75 rounded-full animate-bounce shadow-lg" style={{top: '60%', right: '25%', animationDelay: '2.8s', animationDuration: '3.8s'}}></div>
        </div>

        {/* 夕陽光線效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-1 h-20 bg-pink-200/15 opacity-25 animate-pulse blur-sm rounded-full" style={{left: '20%', top: '25%', animationDuration: '9s'}}></div>
          <div className="absolute w-1 h-16 bg-orange-200/12 opacity-20 animate-pulse blur-sm rounded-full" style={{right: '25%', top: '33%', animationDelay: '3s', animationDuration: '11s'}}></div>
          <div className="absolute w-1 h-24 bg-purple-200/15 opacity-25 animate-pulse blur-sm rounded-full" style={{left: '66%', top: '40%', animationDelay: '6s', animationDuration: '8s'}}></div>
        </div>

        {/* 浪漫光暈 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-200/25 rounded-full opacity-30 blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '9s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-300/20 rounded-full opacity-25 blur-2xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '4s', animationDuration: '11s'}}></div>
          
          <div className="absolute w-52 h-52 bg-purple-300/20 rounded-full opacity-20 animate-ping" style={{top: '25%', left: '25%', animationDuration: '8s'}}></div>
          <div className="absolute w-48 h-48 bg-pink-400/15 rounded-full opacity-18 animate-ping" style={{bottom: '25%', right: '25%', animationDelay: '4s', animationDuration: '9s'}}></div>
        </div>

        {/* 浪漫旋轉光環 */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-96 h-96 border-2 border-pink-300/10 rounded-full animate-spin opacity-12 shadow-lg" style={{animationDuration: '50s'}}></div>
          <div className="absolute w-80 h-80 border border-orange-300/8 rounded-full animate-spin opacity-10 shadow-md" style={{animationDuration: '45s', animationDirection: 'reverse'}}></div>
          <div className="absolute w-64 h-64 border border-purple-300/6 rounded-full animate-spin opacity-8" style={{animationDuration: '40s'}}></div>
        </div>

        {/* 主要內容容器 */}
        <div className={`relative z-20 min-h-full flex flex-col justify-center items-center px-4 py-8 transition-all duration-500 ease-out ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : isExiting ? 'opacity-0 transform -translate-y-8 scale-95' : 'opacity-0 transform translate-y-8 scale-95'}`}>
          
          {/* 說明內容卡片 */}
          <div className={`text-pink-800 font-medium text-center leading-relaxed tracking-wide relative bg-pink-50/90 backdrop-blur-md rounded-2xl p-6 border-2 border-pink-200/80 shadow-2xl w-full max-w-md mx-auto group transition-all duration-700 ease-out delay-200 ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 rotate-0' : isExiting ? 'opacity-0 transform translate-y-4 -rotate-2' : 'opacity-0 transform translate-y-12 rotate-2'}`}>
            
            {/* 卡片浪漫光暈效果 */}
            <div className={`absolute bg-pink-400/15 rounded-2xl blur-xl opacity-30 animate-pulse group-hover:opacity-45 transition-all duration-500 delay-300 ${isVisible && !isExiting ? 'opacity-30 group-hover:opacity-45' : 'opacity-0'}`} style={{top: '-1.5rem', left: '-1.5rem', right: '-1.5rem', bottom: '-1.5rem', animationDuration: '8s'}}></div>
            <div className={`absolute bg-orange-300/12 rounded-2xl blur-lg opacity-25 animate-pulse group-hover:opacity-35 transition-all duration-500 delay-400 ${isVisible && !isExiting ? 'opacity-25 group-hover:opacity-35' : 'opacity-0'}`} style={{top: '-0.75rem', left: '-0.75rem', right: '-0.75rem', bottom: '-0.75rem', animationDelay: '3s', animationDuration: '10s'}}></div>
            
            {/* 浪漫邊框裝飾 */}
            <div className="absolute bg-gradient-to-br from-pink-900/10 via-transparent to-purple-900/10 rounded-2xl border border-pink-600/20" style={{top: '-0.25rem', left: '-0.25rem', right: '-0.25rem', bottom: '-0.25rem'}}></div>
            
            {/* 愛心圖標 */}
            <div className={`mb-6 relative z-10 transition-all duration-600 ease-out delay-500 text-center ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-6 scale-90'}`}>
              <div className="text-4xl animate-pulse" style={{animationDuration: '3s'}}>💭</div>
            </div>
            
            {/* 說明內容 */}
            <div className={`space-y-4 text-sm mb-6 relative z-10 transition-all duration-700 ease-out delay-600 ${isVisible && !isExiting ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'}`}>
              <div className="text-middle space-y-3 bg-pink-100/70 rounded-xl p-4 border border-pink-300/50 font-serif leading-relaxed shadow-lg">
                <p className="text-pink-800 text-base leading-relaxed">
                  那天你們沒有吵架，卻也沒什麼話說。
                </p>
                <p className="text-pink-800 text-base leading-relaxed">
                  你開始懷疑，這段感情是不是走到了盡頭……
                </p>
              </div>
            </div>
            
            {/* 開始測驗按鈕 */}
            <div className={`relative transition-all duration-800 ease-out delay-900 ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-4 scale-90'}`}>
              <button 
                className="cursor-pointer hover:translate-y-1 transition-all duration-300 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-serif rounded-full px-8 py-4 shadow-2xl hover:shadow-3xl relative group overflow-hidden font-semibold text-lg flex items-center justify-center space-x-2 mx-auto border-2 border-pink-500/50 hover:border-pink-400/70 w-full max-w-xs"
                onClick={handleStartClick}
              >
                {/* 按鈕浪漫光暈 */}
                <div className="absolute bg-pink-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" style={{top: '-1rem', left: '-1rem', right: '-1rem', bottom: '-1rem'}}></div>
                <div className="absolute bg-purple-300/15 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" style={{top: '-0.5rem', left: '-0.5rem', right: '-0.5rem', bottom: '-0.5rem'}}></div>
                
                {/* 按鈕旋轉光環 */}
                <div className="absolute border border-pink-400/15 rounded-full animate-spin opacity-0 group-hover:opacity-30 transition-opacity duration-300" style={{top: '-0.25rem', left: '-0.25rem', right: '-0.25rem', bottom: '-0.25rem', animationDuration: '3s'}}></div>
                
                <span className="relative z-10">開始測驗</span>
                <span className="text-xl relative z-10 animate-pulse" style={{animationDuration: '2s'}}>💕</span>
                
                {/* 按鈕浪漫反射 */}
                <div className="absolute bottom-0 left-1/2 w-24 h-2 bg-pink-400/20 blur-md opacity-30 animate-pulse transform -translate-x-1/2 translate-y-2" style={{animationDuration: '4s'}}></div>
              </button>
            </div>
            
            {/* 卡片周圍裝飾愛心 */}
            <div className={`absolute text-pink-600/30 text-base animate-bounce delay-500 transition-all duration-700 ease-out delay-1000 ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 'opacity-0 transform -rotate-30'}`} style={{bottom: '-0.75rem', left: '-0.75rem', animationDuration: '3.5s'}}>💕</div>
            <div className={`absolute text-purple-600/30 text-lg animate-pulse delay-700 transition-all duration-700 ease-out delay-1100 ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 'opacity-0 transform rotate-30'}`} style={{bottom: '-0.5rem', right: '-0.75rem', animationDuration: '5s'}}>💝</div>
          </div>
        </div>

      </MobileFrame>
    </>
  );
}