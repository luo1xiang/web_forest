'use client';

import { useState, useEffect } from 'react';
import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore, useQuestionStore } from '@/app/store/store';
import Image from 'next/image';

// 使用原本的夕陽背景
import endBg from '@/../public/love.png';

export default function ResultPage() {
  const psyState = usePsyStore((state) => state);
  const questionStore = useQuestionStore((state) => state);
  
  // 動畫狀態控制
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // 頁面進入動畫
  useEffect(() => {
    setIsVisible(false);
    setAnimationKey(prev => prev + 1);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  // 修正重新開始邏輯
  const playAgain = function() {
    try {
      // 1. 重置所有 store 狀態
      psyState.resetScore();
      questionStore.resetQuestions();
      
      // 2. 確保狀態已經重置後再跳轉
      setTimeout(() => {
        window.location.replace(window.location.origin + window.location.pathname.replace('/result', ''));
      }, 100);
      
    } catch (error) {
      console.error('重置失敗:', error);
      // 備用方案：強制刷新
      window.location.reload(true);
    }
  }

  // 根據分數選擇結果數據
  const getResultData = () => {
    if (psyState.score >= 7 && psyState.score <= 14) {
      return {
        title: "「留戀型戀人」：愛情的固執守候者",
        description: "你傾向為感情投入並且願意努力經營，即使感受到疏離，也會試圖找回過去的甜蜜。但有時，你需要明白「留住的，不一定是愛」。"
      };
    } else if (psyState.score >= 15 && psyState.score <= 21) {
      return {
        title: "「放任型戀人」：靜靜等待愛自己沉沒",
        description: "你習慣觀察與隱忍，對感情變化敏感卻常選擇不說。你不是不在意，而是不知道怎麼說出失望。偶爾，你也該允許自己主動出聲。"
      };
    } else if (psyState.score >= 22 && psyState.score <= 28) {
      return {
        title: "「對抗型戀人」：衝突中尋找答案",
        description: "你在感情中坦率且直接，不害怕對峙，也不容許模糊地帶。你渴望確定與安全感，但有時，過於激烈反而會嚇退對方。"
      };
    } else if (psyState.score >= 29 && psyState.score <= 35) {
      return {
        title: "「抽離型戀人」：情感的預演離場者",
        description: "當感覺不對，你往往是那個先退一步的人。你害怕失去，於是選擇提前告別。學著相信關係也需要等待，也許你會發現意外的驚喜。"
      };
    } else {
      return {
        title: "「成長型戀人」：分手也能讓人變更好",
        description: "你擁有覺察自我與對方狀態的能力，不逃避問題，也願意承擔結果。你相信：結束不是失敗，而是一種彼此成長的機會。"
      };
    }
  };

  const resultData = getResultData();

  return (
    <>
      {/* 背景圖片與效果層 */}
      <div className="fixed inset-0 z-0">
        <Image 
          src={endBg} 
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
        
        {/* 夢幻漸變覆蓋 */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-600/8 animate-pulse opacity-60" style={{animationDuration: '15s'}}></div>
      </div>
      
      <MobileFrame>
        {/* 夕陽暖色調覆蓋層 */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/25 via-orange-900/20 to-purple-900/25"></div>
        
        {/* 夕陽濾鏡效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 via-orange-500/8 to-purple-600/12"></div>
        
        {/* 動態光影效果層 */}
        <div className="absolute inset-0 overflow-hidden">
          {/* 旋轉光環 */}
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-transparent via-white/3 to-transparent 
                            animate-spin" style={{animationDuration: '20s'}}></div>
          </div>
          
          {/* 浮動光點 */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-pink-300/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-16 w-3 h-3 bg-purple-300/25 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-orange-300/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-48 right-8 w-2.5 h-2.5 bg-pink-300/25 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          
          {/* 波動效果 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-200/5 to-transparent 
                          animate-pulse" style={{animationDuration: '4s'}}></div>
        </div>
        
        {/* 溫暖的燈光效果 */}
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-200/30 via-orange-100/25 to-purple-200/35 animate-pulse" style={{animationDuration: '6s'}}></div>
        
        {/* 可滾動的主要內容容器 */}
        <div className={`relative z-20 h-full overflow-y-auto transition-all duration-500 ease-out ${isVisible ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-8 scale-95'}`}
             key={animationKey}>
          <div className='flex flex-col items-center justify-center py-2 px-4 h-full'>
            
            {/* 主要內容容器 */}
            <div className={`w-full max-w-sm mx-auto relative transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 transform translate-y-0 rotate-0' : 'opacity-0 transform translate-y-12 rotate-2'}`}>
              
              {/* 主要面板背景 - 柔和白色 */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-md 
                              rounded-3xl shadow-2xl border-2 border-white/40
                              before:absolute before:inset-2 before:border before:border-white/30 before:rounded-2xl
                              after:absolute after:inset-4 after:border after:border-white/20 after:rounded-xl
                              transition-all duration-1000 ease-in-out"></div>
              
              {/* 光暈效果 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-300/10 via-orange-200/15 to-purple-300/10 
                              rounded-full blur-xl animate-pulse opacity-50"></div>
              
              {/* 內容區域 */}
              <div className="relative z-10 p-4 pt-3">
                
                {/* 結局標籤 - 柔和顏色 */}
                <div className={`flex justify-center mb-3 transition-all duration-500 ease-out delay-200 ${isVisible ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform -translate-y-4 scale-75'}`}>
                  <div className="relative group">
                    <div className="w-12 h-12 bg-white/70 backdrop-blur-sm rounded-full 
                                  flex items-center justify-center shadow-lg border-2 border-white/50
                                  before:absolute before:inset-1 before:rounded-full before:border before:border-white/30
                                  transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <span className="text-pink-600 font-bold text-sm drop-shadow-md">💕</span>
                    </div>
                    {/* 裝飾點 */}
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-pink-300/80 rounded-full border border-white/70 shadow-sm
                                  animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-300/80 rounded-full border border-white/70 shadow-sm
                                  animate-bounce" style={{animationDelay: '0.5s'}}></div>
                  </div>
                </div>
                
                {/* 結局標題 - 柔和顏色 */}
                <div className={`text-center mb-4 transition-all duration-600 ease-out delay-300 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'}`}>
                  <div className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm
                                rounded-full shadow-lg border border-white/50
                                hover:scale-105 transition-all duration-300">
                    <h2 className="text-pink-700 font-bold text-xs drop-shadow-md leading-tight">
                      結局分析｜你的愛情類型
                    </h2>
                  </div>
                </div>

                {/* 結果類型 - 柔和顏色 */}
                <div className={`mb-4 relative group transition-all duration-700 ease-out delay-500 ${isVisible ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-6 scale-95'}`}>
                  <div className="bg-white/50 backdrop-blur-sm p-3 rounded-xl 
                                shadow-md border border-white/40 relative overflow-hidden text-center
                                group-hover:shadow-lg transition-all duration-300">
                    {/* 光效 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <h3 className="text-pink-800 text-sm font-bold relative z-10">{resultData.title}</h3>
                  </div>
                </div>

                {/* 結果描述 - 柔和顏色 */}
                <div className={`mb-5 relative group transition-all duration-700 ease-out delay-600 ${isVisible ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-6 scale-95'}`}>
                  <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl 
                                shadow-md border border-white/40 relative overflow-hidden
                                group-hover:shadow-lg transition-all duration-300">
                    {/* 光效 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <p className="text-pink-800 text-xs leading-relaxed text-center relative z-10 font-medium">
                      {resultData.description}
                    </p>
                  </div>
                </div>

                {/* 再次測驗按鈕 - 柔和顏色 */}
                <div className={`text-center transition-all duration-800 ease-out delay-700 ${isVisible ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-4 scale-90'}`}>
                  <button 
                    className="group w-full relative overflow-hidden rounded-xl shadow-md 
                             hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5
                             active:translate-y-0 active:shadow-sm hover:scale-[1.02]"
                    onClick={playAgain}
                    type="button"
                  >
                    {/* 按鈕背景 - 柔和顏色 */}
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-sm
                                  group-hover:bg-white/50 transition-all duration-300"></div>
                    
                    {/* 光澤效果 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                  group-hover:via-white/30 transition-all duration-300
                                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    
                    {/* 按鈕邊框 */}
                    <div className="absolute inset-0 border border-white/40 rounded-xl 
                                  group-hover:border-white/60 transition-all duration-300"></div>
                    
                    {/* 按鈕內容 */}
                    <div className="relative z-10 px-4 py-2.5 min-h-[44px] flex items-center justify-center">
                      <span className="text-pink-700 text-sm font-medium text-center leading-tight 
                                     drop-shadow-sm group-hover:text-pink-800 transition-colors duration-300">
                        重新測驗
                      </span>
                    </div>
                    
                    {/* 裝飾效果 */}
                    <div className="absolute top-2 left-3 w-1.5 h-1.5 rounded-full bg-pink-300/40 animate-pulse"></div>
                    <div className="absolute bottom-2 right-3 w-1 h-1 rounded-full bg-purple-300/40 animate-ping"></div>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </MobileFrame>
    </>
  );
}