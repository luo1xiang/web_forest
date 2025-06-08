'use client';

import { useState, useEffect } from 'react';
import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import cdBg from '@/../public/love.png';

export default function StartPage({nextStep}) {
  console.log('StartPage component rendered');

  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleStartClick = () => {
    setIsExiting(true);
    
    setTimeout(() => {
      console.log('Start button clicked!');
      if (nextStep) {
        nextStep();
      } else {
        console.log('nextStep function is not provided!');
      }
    }, 300);
  }

  const playAudio = () => {
    try {
      const audio = new Audio("/love.wav");
      audio.play().catch(error => {
        console.log('音頻播放失敗:', error);
      });
    } catch (error) {
      console.log('創建音頻失敗:', error);
    }
  };

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
          <div className="absolute w-1 h-1 bg-orange-400/65 rounded-full animate-pulse" style={{top: '80%', left: '20%', animationDuration: '3.5s', animationDelay: '4s'}}></div>
          <div className="absolute w-2.5 h-2.5 bg-purple-400/45 rounded-full animate-pulse" style={{top: '35%', right: '25%', animationDuration: '5.5s', animationDelay: '1.5s'}}></div>
          <div className="absolute w-1.5 h-1.5 bg-pink-300/50 rounded-full animate-pulse" style={{top: '55%', left: '30%', animationDuration: '4.2s', animationDelay: '2.5s'}}></div>
          <div className="absolute w-1 h-1 bg-orange-300/75 rounded-full animate-pulse" style={{top: '75%', right: '30%', animationDuration: '3.8s', animationDelay: '3.5s'}}></div>
        </div>
        
        {/* 大範圍光暈 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse opacity-40" style={{top: '10%', left: '5%', animationDuration: '8s'}}></div>
          <div className="absolute w-80 h-80 bg-orange-400/25 rounded-full blur-3xl animate-pulse opacity-35" style={{top: '20%', right: '10%', animationDuration: '10s', animationDelay: '2s'}}></div>
          <div className="absolute w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse opacity-30" style={{bottom: '15%', left: '15%', animationDuration: '12s', animationDelay: '4s'}}></div>
          <div className="absolute w-64 h-64 bg-pink-300/30 rounded-full blur-2xl animate-pulse opacity-25" style={{bottom: '25%', right: '20%', animationDuration: '9s', animationDelay: '6s'}}></div>
        </div>
        
        {/* 細緻光線效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-0.5 h-32 bg-pink-300/30 blur-sm animate-pulse opacity-40" style={{top: '20%', left: '25%', animationDuration: '7s'}}></div>
          <div className="absolute w-0.5 h-24 bg-orange-300/35 blur-sm animate-pulse opacity-35" style={{top: '40%', right: '30%', animationDuration: '8s', animationDelay: '2s'}}></div>
          <div className="absolute w-0.5 h-28 bg-purple-300/25 blur-sm animate-pulse opacity-30" style={{top: '60%', left: '35%', animationDuration: '6s', animationDelay: '4s'}}></div>
          <div className="absolute w-1 h-20 bg-pink-400/40 blur-sm animate-pulse opacity-45" style={{top: '15%', right: '40%', animationDuration: '9s', animationDelay: '1s'}}></div>
        </div>
        
        {/* 浪漫粒子效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-1 h-1 bg-pink-200/80 rounded-full animate-bounce opacity-60" style={{top: '30%', left: '40%', animationDuration: '3s', animationDelay: '0s'}}></div>
          <div className="absolute w-0.5 h-0.5 bg-orange-200/90 rounded-full animate-bounce opacity-70" style={{top: '50%', right: '35%', animationDuration: '4s', animationDelay: '1s'}}></div>
          <div className="absolute w-1.5 h-1.5 bg-purple-200/60 rounded-full animate-bounce opacity-50" style={{top: '70%', left: '45%', animationDuration: '3.5s', animationDelay: '2s'}}></div>
          <div className="absolute w-0.5 h-0.5 bg-pink-300/85 rounded-full animate-bounce opacity-65" style={{top: '40%', right: '45%', animationDuration: '4.5s', animationDelay: '1.5s'}}></div>
          <div className="absolute w-1 h-1 bg-orange-300/75 rounded-full animate-bounce opacity-55" style={{top: '60%', left: '50%', animationDuration: '3.2s', animationDelay: '2.5s'}}></div>
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
        </div>

        {/* 浪漫旋轉光環 */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-96 h-96 border-2 border-pink-300/10 rounded-full animate-spin opacity-12 shadow-lg" style={{animationDuration: '50s'}}></div>
          <div className="absolute w-80 h-80 border border-orange-300/8 rounded-full animate-spin opacity-10 shadow-md" style={{animationDuration: '45s', animationDirection: 'reverse'}}></div>
        </div>

        <div className={`relative z-20 h-full flex flex-col justify-center items-center transition-all duration-500 ease-out ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : isExiting ? 'opacity-0 transform -translate-y-8 scale-95' : 'opacity-0 transform translate-y-8 scale-95'}`}>
          
          {/* 標準字 Logo */}
          <div className={`mb-10 relative group transition-all duration-700 ease-out delay-200 ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 rotate-0' : isExiting ? 'opacity-0 transform translate-y-4 -rotate-2' : 'opacity-0 transform translate-y-12 rotate-2'}`}>
            
            {/* Logo 光暈效果 */}
            <div className={`absolute bg-pink-400/15 rounded-full blur-3xl opacity-25 animate-pulse group-hover:opacity-40 transition-all duration-500 delay-300 ${isVisible && !isExiting ? 'opacity-25 group-hover:opacity-40' : 'opacity-0'}`} style={{top: '-6rem', left: '-6rem', right: '-6rem', bottom: '-6rem', animationDuration: '8s'}}></div>
            <div className={`absolute bg-orange-300/12 rounded-full blur-2xl opacity-20 animate-pulse group-hover:opacity-35 transition-all duration-500 delay-400 ${isVisible && !isExiting ? 'opacity-20 group-hover:opacity-35' : 'opacity-0'}`} style={{top: '-5rem', left: '-5rem', right: '-5rem', bottom: '-5rem', animationDelay: '3s', animationDuration: '10s'}}></div>
            
            {/* Logo 本體 */}
            <div className={`relative transition-all duration-600 ease-out delay-600 ${isVisible && !isExiting ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-75'}`}>
              <img 
                src="/word.png"
                alt="七日告別"
                className="w-80 h-auto relative z-10 drop-shadow-2xl group-hover:drop-shadow-[0_0_30px_rgba(236,72,153,0.4)]
                          transition-all duration-500 animate-pulse group-hover:animate-none
                          filter brightness-110 contrast-110 group-hover:brightness-125 group-hover:contrast-125"
                style={{animationDuration: '6s'}}
              />
              
              {/* Logo 反射效果 */}
              <div className="absolute bottom-0 left-1/2 w-72 h-6 bg-pink-400/15 blur-lg opacity-25 animate-pulse transform -translate-x-1/2 translate-y-3" style={{animationDuration: '6s'}}></div>
            </div>
            
            {/* 裝飾性愛心 */}
            <div className={`absolute text-pink-500/40 text-2xl animate-bounce transition-all duration-700 ease-out delay-800 ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 'opacity-0 transform -rotate-45'}`} style={{top: '-1rem', left: '-2rem', animationDelay: '1s', animationDuration: '3s'}}>♥</div>
            <div className={`absolute text-orange-500/40 text-xl animate-pulse delay-300 transition-all duration-700 ease-out delay-900 ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 'opacity-0 transform rotate-45'}`} style={{top: '-0.5rem', right: '-2rem', animationDuration: '4s'}}>♥</div>
          </div>

          {/* 副標題 */}
          <div className={`mb-12 relative transition-all duration-700 ease-out delay-600 ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            <p className="text-lg text-center leading-relaxed px-8 max-w-md text-pink-700 drop-shadow-lg"
               style={{fontFamily: 'serif'}}>
              當熱戀消退、訊息變冷，<br />
              留下或放手，你怎麼選？
            </p>
          </div>
          
          {/* 開始按鈕 */}
          <div className={`relative mt-8 transition-all duration-800 ease-out delay-1200 ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-4 scale-90'}`}>
            <button 
              className="cursor-pointer hover:translate-y-1 transition-all duration-300 relative group bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 hover:from-pink-400 hover:via-orange-300 hover:to-purple-400 text-white font-bold text-xl px-12 py-4 rounded-full shadow-lg hover:shadow-2xl border-2 border-white/20 hover:border-white/40"
              onClick={() => {
                handleStartClick();
                playAudio();
              }}
            >
              <div className="absolute bg-pink-400/20 rounded-full blur-xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-300" style={{top: '-1rem', left: '-1rem', right: '-1rem', bottom: '-1rem', animationDuration: '4s'}}></div>
              <div className="absolute bg-orange-300/15 rounded-full blur-lg opacity-25 animate-pulse group-hover:opacity-40 transition-opacity duration-300" style={{top: '-0.5rem', left: '-0.5rem', right: '-0.5rem', bottom: '-0.5rem', animationDelay: '1s', animationDuration: '5s'}}></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="relative z-10 drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300 animate-pulse group-hover:animate-none"
                    style={{animationDuration: '3s'}}>
                開始告別之旅
              </span>
              
              <div className="absolute bottom-0 left-1/2 w-24 h-2 bg-white/20 blur-md opacity-40 animate-pulse transform -translate-x-1/2 translate-y-1" style={{animationDuration: '4s'}}></div>
            </button>
          </div>
        </div>

      </MobileFrame>
    </>
  );
}