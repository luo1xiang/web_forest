'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import forestBg from '@/../public/forest.png';
import { usePsyStore, useQuestionStore } from '@/app/store/store'

export default function QuestionPage({questionIndex, nextStep}) {

  const questionData = useQuestionStore((state) => state);
  const psyData = usePsyStore((state) => state);

  // 森林系問題數據  
  const questions = [
    {
      emoji: "🍃",
      title: "你最嚮往什麼樣的生活環境？",
      description: "如果你可以選擇住在森林裡的一個角落，那會是什麼模樣呢？想像一下你每天醒來看到的景色、聽見的聲音，那裡會讓你感到最自在和安心。",
      options: [
        { title: "一片陽光灑落、總有笑聲的大樹草地 🌞", value: 1 },
        { title: "一條靜靜流動的小溪邊，微風吹拂 🍃", value: 3 },
        { title: "被可愛蘑菇和野花圍繞的溫暖洞穴 🌸", value: 5 }
      ]
    },
    {
      emoji: "🌊",
      title: "當你收到一個朋友的邀請，要一起參加熱鬧的聚會時，你的反應是？",
      description: "有位朋友傳訊邀你參加週末的森林派對，會有許多熟人與美食。想像當下的你正在休息或做自己喜歡的事，你會怎麼回應這份邀請？",
      options: [
        { title: "馬上答應，感覺好期待，可以和大家相聚最棒了！", value: 1 },
        { title: "猶豫一下，想看看自己當天的狀態再決定", value: 3 },
        { title: "可能會禮貌地婉拒，覺得在家自己待著也很好", value: 5 }
      ]
    },
    {
      emoji: "📚",
      title: "你覺得什麼活動最能讓你感到快樂又充實？",
      description: "每個人放鬆的方式都不一樣。有些人喜歡熱鬧的互動，有些人愛上靜態的小嗜好，也有人在充滿新鮮感的事情中找到樂趣。對你來說，什麼活動最像是「你的日常能量補充包」呢？",
      options: [
        { title: "一起烤棉花糖、講故事、唱歌的森林聚會 🎶", value: 1 },
        { title: "在草地上閱讀一本書或靜靜畫畫 🎨", value: 3 },
        { title: "收集可愛的小石頭、野花，裝飾自己的秘密基地 🪺", value: 5 }
      ]
    }
  ];

  const clickAnswer = function(option){
    nextStep();
    psyData.updateScore(psyData.score + option.value);
    console.log(option.title, option.value);
  }

  // 根據問題獲取不同主題色彩
  const getThemeColors = () => {
    if(questionIndex === 0) {
      return {
        primary: '#4ADE80', // 綠色 - 自然環境
        secondary: '#22C55E',
        light: '#DCFCE7',
        gradient: 'from-emerald-100 via-green-50 to-lime-100',
        overlay: 'from-emerald-200/40 via-green-100/30 to-lime-200/50',
        particle: 'bg-emerald-400/70',
        glow: 'bg-green-400/60',
        ring: 'border-emerald-400/40',
        buttonBg: 'bg-emerald-500',
        buttonShadow: 'shadow-[0px_4px_0px_1px_#10B981]',
        buttonHover: 'hover:bg-emerald-400',
        textColor: 'text-emerald-800',
        qBg: 'bg-emerald-50',
        qBorder: 'border-emerald-400',
        qText: 'text-emerald-700'
      };
    } else if(questionIndex === 1) {
      return {
        primary: '#3B82F6', // 藍色 - 社交聚會
        secondary: '#2563EB',
        light: '#DBEAFE',
        gradient: 'from-blue-100 via-sky-50 to-cyan-100',
        overlay: 'from-blue-200/40 via-sky-100/30 to-cyan-200/50',
        particle: 'bg-blue-400/70',
        glow: 'bg-sky-400/60',
        ring: 'border-blue-400/40',
        buttonBg: 'bg-blue-500',
        buttonShadow: 'shadow-[0px_4px_0px_1px_#2563EB]',
        buttonHover: 'hover:bg-blue-400',
        textColor: 'text-blue-800',
        qBg: 'bg-blue-50',
        qBorder: 'border-blue-400',
        qText: 'text-blue-700'
      };
    } else {
      return {
        primary: '#EC4899', // 粉色 - 興趣愛好
        secondary: '#DB2777',
        light: '#FCE7F3',
        gradient: 'from-pink-100 via-rose-50 to-purple-100',
        overlay: 'from-pink-200/40 via-rose-100/30 to-purple-200/50',
        particle: 'bg-pink-400/70',
        glow: 'bg-rose-400/60',
        ring: 'border-pink-400/40',
        buttonBg: 'bg-pink-500',
        buttonShadow: 'shadow-[0px_4px_0px_1px_#DB2777]',
        buttonHover: 'hover:bg-pink-400',
        textColor: 'text-pink-800',
        qBg: 'bg-pink-50',
        qBorder: 'border-pink-400',
        qText: 'text-pink-700'
      };
    }
  };

  const theme = getThemeColors();

  return (
    <>
      <MobileFrame>
        {/* 森林背景圖片 */}
        <div className="absolute inset-0">
          <Image 
            src={forestBg} 
            alt="forest background" 
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
        
        {/* 主題色彩覆蓋層 */}
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-70`}></div>
        
        {/* 動態覆蓋層 */}
        <div className={`absolute inset-0 bg-gradient-to-tl ${theme.overlay} animate-pulse`} style={{animationDuration: '4s'}}></div>
        
        {/* 額外光影效果 */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
        
        {/* 森林精靈光點效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute w-3 h-3 ${theme.particle} rounded-full animate-bounce top-1/6 left-1/5 shadow-lg`} style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className={`absolute w-4 h-4 ${theme.particle} rounded-full animate-bounce top-1/4 right-1/4 shadow-xl`} style={{animationDelay: '0.8s', animationDuration: '2.5s'}}></div>
          <div className={`absolute w-2 h-2 ${theme.particle} rounded-full animate-bounce top-2/5 left-1/8 shadow-md`} style={{animationDelay: '1.5s', animationDuration: '3.2s'}}></div>
          <div className={`absolute w-3 h-3 ${theme.particle} rounded-full animate-bounce top-3/5 right-1/6 shadow-lg`} style={{animationDelay: '2.2s', animationDuration: '2.8s'}}></div>
          <div className={`absolute w-4 h-4 ${theme.particle} rounded-full animate-bounce top-4/5 left-2/3 shadow-xl`} style={{animationDelay: '3s', animationDuration: '2.3s'}}></div>
          <div className={`absolute w-2 h-2 ${theme.particle} rounded-full animate-bounce top-1/12 right-2/5 shadow-sm`} style={{animationDelay: '3.8s', animationDuration: '3.5s'}}></div>
        </div>

        {/* 森林微風效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-1 h-20 bg-white/30 opacity-50 animate-pulse left-1/6 top-1/4 blur-sm rounded-full" style={{animationDuration: '5s'}}></div>
          <div className="absolute w-1 h-16 bg-white/25 opacity-40 animate-pulse right-1/5 top-1/3 blur-sm rounded-full" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
          <div className="absolute w-1 h-12 bg-white/20 opacity-35 animate-pulse left-2/3 top-2/5 blur-sm rounded-full" style={{animationDelay: '4s', animationDuration: '4.5s'}}></div>
        </div>

        {/* 森林光暈效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/2 left-1/2 w-80 h-80 ${theme.glow} rounded-full opacity-30 blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2`} style={{animationDuration: '6s'}}></div>
          <div className={`absolute top-1/4 left-1/4 w-32 h-32 ${theme.glow} rounded-full opacity-20 animate-ping`} style={{animationDuration: '4s'}}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-28 h-28 ${theme.glow} rounded-full opacity-15 animate-ping`} style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        </div>

        {/* 魔法光環 */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className={`w-96 h-96 border-2 ${theme.ring} rounded-full animate-spin opacity-25 shadow-lg`} style={{animationDuration: '25s'}}></div>
          <div className={`absolute w-80 h-80 border ${theme.ring} rounded-full animate-spin opacity-20 shadow-md`} style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
          <div className={`absolute w-64 h-64 border ${theme.ring} rounded-full animate-spin opacity-15`} style={{animationDuration: '15s'}}></div>
        </div>

        <div className='flex flex-col items-center justify-center relative z-20 min-h-screen py-6'>
          
          {/* 中央內容區域 - 完全居中 */}
          <div className="flex flex-col items-center justify-center gap-5 px-6 max-w-xs mx-auto">
            
            {/* Q標籤 */}
            <div className={`${theme.qBg} ${theme.qBorder} border-3 rounded-full w-12 h-12
            flex justify-center items-center font-bold text-lg ${theme.qText} shadow-lg
            backdrop-blur-md animate-pulse`} style={{animationDuration: '2s'}}>
              Q{questionIndex+1}
            </div>
            
            {/* 問題標題 */}
            <div 
              className={`text-center font-bold text-base ${theme.textColor} 
              leading-relaxed px-4 drop-shadow-md animate-pulse 
              backdrop-blur-sm bg-white/20 rounded-2xl py-3 border border-white/30`}
              style={{animationDuration: '3s'}}
            > 
              {questions[questionIndex].title} 
            </div>

            {/* 問題描述 */}
            <div 
              className={`text-center text-xs ${theme.textColor} opacity-75
              leading-relaxed px-4 mb-2 backdrop-blur-sm bg-white/15 rounded-xl py-3 
              border border-white/20`}
            > 
              {questions[questionIndex].description} 
            </div>

            {/* 選項按鈕區域 */}
            <div className="flex flex-col gap-3 w-full">
              {questions[questionIndex].options.map((option, index) => (
                <button 
                  key={`option-${index}`}
                  className={`${theme.buttonBg} ${theme.buttonHover} w-full rounded-2xl text-white
                    py-3 px-4 text-xs flex justify-center items-center font-medium 
                    ${theme.buttonShadow} cursor-pointer hover:translate-y-0.5 transition-all duration-300
                    leading-relaxed text-center active:translate-y-1 z-20 relative
                    min-h-[60px] backdrop-blur-md border-2 border-white/30
                    hover:shadow-2xl hover:scale-[1.02] group overflow-hidden
                    shadow-xl hover:border-white/50 animate-pulse`}
                  onClick={() => clickAnswer(option)}
                  type="button" 
                  style={{animationDelay: `${index * 0.3}s`, animationDuration: '4s'}}
                >
                  {/* 按鈕內部光效 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                                transition-transform duration-700 ease-out"></div>
                  
                  <span className="block relative z-10 drop-shadow-md text-center leading-relaxed px-2">
                    {option.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* 四角森林裝飾 */}
        <div className={`absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 ${theme.ring} animate-pulse`} style={{animationDuration: '5s'}}></div>
        <div className={`absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 ${theme.ring} animate-pulse`} style={{animationDelay: '1.2s', animationDuration: '5s'}}></div>
        <div className={`absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 ${theme.ring} animate-pulse`} style={{animationDelay: '2.5s', animationDuration: '5s'}}></div>
        <div className={`absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 ${theme.ring} animate-pulse`} style={{animationDelay: '3.8s', animationDuration: '5s'}}></div>

      </MobileFrame>
    </>
  );
}