'use client';

import { useState, useEffect } from 'react';
import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import { usePsyStore, useQuestionStore } from '@/app/store/store'

export default function QuestionPage({questionIndex, nextStep}) {

  const psyData = usePsyStore((state) => state);
  const questionData = useQuestionStore((state) => state);
  
  // 动画状态控制
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [backgroundTransition, setBackgroundTransition] = useState(false);

  // 愛情測驗問題數據
  const loveQuestions = [
    {
      title: "倒數七天｜週五晚上，你們各自加班沒聯絡",
      description: "「他沒傳晚安。你等到凌晨也沒有任何訊息。」你會怎麼做？",
      backgroundImage: "/1.png",
      options: [
        { title: "傳訊問他還好嗎", value: 1 },
        { title: "假裝沒事，繼續等", value: 3 },
        { title: "默默關掉手機，明天再說", value: 5 }
      ]
    },
    {
      title: "倒數六天｜朋友聚會時有人問起你們",
      description: "「你突然說不出最近你們做過什麼浪漫的事。」你怎麼回應？",
      backgroundImage: "/2.png",
      options: [
        { title: "笑著轉移話題", value: 1 },
        { title: "誠實說最近好像都很平淡", value: 3 },
        { title: "說很忙但感情沒變，自己都不太相信", value: 5 }
      ]
    },
    {
      title: "倒數五天｜你滑到他對前女友點讚的照片",
      description: "「一種熟悉又陌生的不安感湧上心頭。」你會？",
      backgroundImage: "/3.png",
      options: [
        { title: "裝作沒看到", value: 1 },
        { title: "翻更多看看他最近在幹嘛", value: 3 },
        { title: "傳訊問他是什麼意思", value: 5 }
      ]
    },
    {
      title: "倒數四天｜你主動提議週末一起出去，他說太累",
      description: "「這已經是他第三次拒絕你了。」你會？",
      backgroundImage: "/4.png",
      options: [
        { title: "理解他需要休息", value: 1 },
        { title: "小小鬧脾氣，問他是不是在逃避你", value: 3 },
        { title: "開始安排自己的行程，順便冷靜思考", value: 5 }
      ]
    },
    {
      title: "倒數三天｜你們聊天越來越像例行公事",
      description: "「你傳了限時動態，他也不再回應。」你怎麼面對？",
      backgroundImage: "/5.png",
      options: [
        { title: "問他最近是不是有心事", value: 1 },
        { title: "傳一些甜蜜回憶的照片試圖喚醒感覺", value: 3 },
        { title: "安靜觀察，等待他主動開口", value: 5 }
      ]
    },
    {
      title: "倒數兩天｜某天你在路上看到他一個人走著",
      description: "「他沒看到你，神情淡然。」你會？",
      backgroundImage: "/6.png",
      options: [
        { title: "主動跑過去打招呼", value: 1 },
        { title: "站遠遠地看他一會就離開", value: 3 },
        { title: "拿起手機拍下來，傳給朋友吐槽", value: 5 }
      ]
    },
    {
      title: "最後一天｜你終於鼓起勇氣問：「我們是不是變了？」",
      description: "「他沉默了一會，只說：我也不知道。」你怎麼回應？",
      backgroundImage: "/7.png",
      options: [
        { title: "抱住他說：我們一起努力好嗎", value: 1 },
        { title: "說：如果連你也不確定，也許真的該停下來", value: 3 },
        { title: "微笑說：那我們先分開冷靜一下吧", value: 5 }
      ]
    }
  ];

  // 页面进入动画
  useEffect(() => {
    setIsVisible(false);
    setIsExiting(false);
    setBackgroundTransition(true);
    setAnimationKey(prev => prev + 1);
    
    // 背景轉場動畫
    const backgroundTimer = setTimeout(() => {
      setBackgroundTransition(false);
    }, 100);
    
    // 內容進入動畫
    const contentTimer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => {
      clearTimeout(backgroundTimer);
      clearTimeout(contentTimer);
    };
  }, [questionIndex]);

  const clickAnswer = function(option){
    // 开始退出动画
    setIsExiting(true);
    
    // 延迟执行数据更新和页面切换
    setTimeout(() => {
      // 更新心理測驗分數
      psyData.updateScore(psyData.score + option.value);
      
      // 記錄答案到 questionStore
      questionData.addAnswer({
        questionIndex: questionIndex,
        selectedOption: option,
        timestamp: new Date().toISOString()
      });
      
      console.log(`Q${questionIndex + 1}:`, option.title, option.value);
      console.log('當前總分:', psyData.score + option.value);
      
      // 如果還有下一步，則執行
      if (nextStep) {
        nextStep();
      }
    }, 300); // 等待退出动画完成
  }

  // 確保 questionIndex 在有效範圍內
  if (questionIndex < 0 || questionIndex >= loveQuestions.length) {
    return (
      <MobileFrame>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center text-red-600">
            <h2 className="text-xl font-bold mb-2">問題索引錯誤</h2>
            <p>問題索引 {questionIndex} 超出範圍 (0-{loveQuestions.length - 1})</p>
          </div>
        </div>
      </MobileFrame>
    );
  }

  // 獲取當前問題的背景圖片
  const currentQuestion = loveQuestions[questionIndex];

  return (
    <>
      {/* 動態背景圖片與效果層 */}
      <div className="fixed inset-0 z-0">
        {/* 背景圖片容器 */}
        <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${backgroundTransition ? 'opacity-0 transform scale-105' : 'opacity-100 transform scale-100'}`}>
          <Image 
            src={currentQuestion.backgroundImage}
            alt={`Question ${questionIndex + 1} background`}
            fill
            className="object-cover transition-transform duration-700 ease-in-out"
            style={{
              objectPosition: 'center 40%',
            }}
            priority
            sizes="100vw"
          />
        </div>
        
        {/* 夕陽氛圍強化層 */}
        <div className={`absolute inset-0 bg-gradient-to-b from-pink-500/10 via-transparent to-purple-900/20 transition-opacity duration-500 ${backgroundTransition ? 'opacity-0' : 'opacity-100'}`}></div>
        
        {/* 溫暖光暈效果 */}
        <div className={`absolute inset-0 bg-gradient-to-tr from-orange-400/15 via-transparent to-pink-400/10 transition-opacity duration-500 delay-100 ${backgroundTransition ? 'opacity-0' : 'opacity-100'}`}></div>
        
        {/* 漂浮光點 */}
        <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-500 delay-200 ${backgroundTransition ? 'opacity-0' : 'opacity-100'}`}>
          <div className="absolute w-2 h-2 bg-pink-300/60 rounded-full animate-pulse" style={{top: '15%', left: '10%', animationDuration: '4s', animationDelay: '0s'}}></div>
          <div className="absolute w-1.5 h-1.5 bg-orange-300/70 rounded-full animate-pulse" style={{top: '25%', right: '15%', animationDuration: '5s', animationDelay: '1s'}}></div>
          <div className="absolute w-3 h-3 bg-purple-300/50 rounded-full animate-pulse" style={{top: '45%', left: '8%', animationDuration: '6s', animationDelay: '2s'}}></div>
          <div className="absolute w-2 h-2 bg-pink-400/55 rounded-full animate-pulse" style={{top: '65%', right: '12%', animationDuration: '4.5s', animationDelay: '3s'}}></div>
        </div>
        
        {/* 大範圍光暈 */}
        <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-500 delay-300 ${backgroundTransition ? 'opacity-0' : 'opacity-100'}`}>
          <div className="absolute w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse opacity-40" style={{top: '10%', left: '5%', animationDuration: '8s'}}></div>
          <div className="absolute w-80 h-80 bg-orange-400/25 rounded-full blur-3xl animate-pulse opacity-35" style={{top: '20%', right: '10%', animationDuration: '10s', animationDelay: '2s'}}></div>
          <div className="absolute w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse opacity-30" style={{bottom: '15%', left: '15%', animationDuration: '12s', animationDelay: '4s'}}></div>
        </div>
        
        {/* 夢幻漸變覆蓋 */}
        <div className={`absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-600/8 animate-pulse opacity-60 transition-opacity duration-500 delay-400 ${backgroundTransition ? 'opacity-0' : 'opacity-100'}`} style={{animationDuration: '15s'}}></div>
        
        {/* 轉場遮罩效果 */}
        <div className={`absolute inset-0 bg-white/20 backdrop-blur-sm transition-opacity duration-300 ${backgroundTransition ? 'opacity-100' : 'opacity-0'}`}></div>
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
        <div className={`relative z-20 min-h-screen overflow-y-auto transition-all duration-500 ease-out ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : isExiting ? 'opacity-0 transform -translate-y-8 scale-95' : 'opacity-0 transform translate-y-8 scale-95'}`}
             key={animationKey}>
          <div className='flex flex-col items-center justify-start py-4 px-4 min-h-screen'>
            
            {/* 主要內容容器 */}
            <div className={`w-full max-w-sm mx-auto relative my-auto transition-all duration-700 ease-out delay-100 ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 rotate-0' : isExiting ? 'opacity-0 transform translate-y-4 -rotate-2' : 'opacity-0 transform translate-y-12 rotate-2'}`}>
              
              {/* 主要面板背景 - 更柔和的顏色 */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-md 
                              rounded-3xl shadow-2xl border-2 border-white/40
                              before:absolute before:inset-2 before:border before:border-white/30 before:rounded-2xl
                              after:absolute after:inset-4 after:border after:border-white/20 after:rounded-xl
                              transition-all duration-1000 ease-in-out"></div>
              
              {/* 光暈效果 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-300/10 via-orange-200/15 to-purple-300/10 
                              rounded-full blur-xl animate-pulse opacity-50"></div>
              
              {/* 內容區域 */}
              <div className="relative z-10 p-6 pt-5">
                
                {/* Q標籤 - 柔和顏色 */}
                <div className={`flex justify-center mb-5 transition-all duration-500 ease-out delay-200 ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform -translate-y-4 scale-75'}`}>
                  <div className="relative group">
                    <div className="w-14 h-14 bg-white/70 backdrop-blur-sm rounded-full 
                                  flex items-center justify-center shadow-lg border-2 border-white/50
                                  before:absolute before:inset-1 before:rounded-full before:border before:border-white/30
                                  transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <span className="text-pink-600 font-bold text-base drop-shadow-md">Q{questionIndex+1}</span>
                    </div>
                    {/* 裝飾點 */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-300/80 rounded-full border border-white/70 shadow-sm
                                  animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-300/80 rounded-full border border-white/70 shadow-sm
                                  animate-bounce" style={{animationDelay: '0.5s'}}></div>
                  </div>
                </div>
                
                {/* 問題標題 - 柔和顏色 */}
                <div className={`text-center mb-5 transition-all duration-600 ease-out delay-300 ${isVisible && !isExiting ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'}`}>
                  <div className="inline-block px-5 py-2.5 bg-white/60 backdrop-blur-sm
                                rounded-full shadow-lg border border-white/50
                                hover:scale-105 transition-all duration-300">
                    <h2 className="text-pink-700 font-bold text-sm drop-shadow-md leading-tight">
                      {currentQuestion.title}
                    </h2>
                  </div>
                </div>

                {/* 問題描述 - 柔和顏色 */}
                <div className={`mb-6 relative group transition-all duration-700 ease-out delay-400 ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-6 scale-95'}`}>
                  <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl 
                                shadow-md border border-white/40 relative overflow-hidden
                                group-hover:shadow-lg transition-all duration-300">
                    {/* 光效 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <p className="text-pink-800 text-xs leading-relaxed text-center relative z-10 font-medium">
                      {currentQuestion.description}
                    </p>
                  </div>
                </div>

                {/* 選項按鈕區域 - 柔和顏色 */}
                <div className="space-y-3 mb-5">
                  {currentQuestion.options.map((option, index) => (
                    <button 
                      key={`option-${questionIndex}-${index}`}
                      className={`group w-full relative overflow-hidden rounded-xl shadow-md 
                                 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5
                                 active:translate-y-0 active:shadow-sm hover:scale-[1.02]
                                 ${isVisible && !isExiting ? 
                                   'opacity-100 transform translate-x-0' : 
                                   'opacity-0 transform translate-x-8'}`}
                      style={{
                        transitionDelay: `${500 + index * 100}ms`,
                        transitionDuration: '600ms'
                      }}
                      onClick={() => clickAnswer(option)}
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
                      <div className="relative z-10 px-4 py-3 min-h-[60px] flex items-center justify-center">
                        <span className="text-pink-700 text-xs font-medium text-center leading-tight 
                                       drop-shadow-sm group-hover:text-pink-800 transition-colors duration-300">
                          {option.title}
                        </span>
                      </div>
                      
                      {/* 裝飾效果 */}
                      <div className="absolute top-2 left-3 w-1.5 h-1.5 rounded-full bg-pink-300/40 animate-pulse"></div>
                      <div className="absolute bottom-2 right-3 w-1 h-1 rounded-full bg-purple-300/40 animate-ping" 
                           style={{animationDelay: `${index * 0.2}s`}}></div>
                    </button>
                  ))}
                </div>
                
                {/* 進度顯示 - 柔和顏色 */}
                <div className={`text-center transition-all duration-800 ease-out delay-900 ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-4 scale-90'}`}>
                  <div className="inline-flex items-center px-4 py-2 bg-white/50 backdrop-blur-sm
                                rounded-full shadow-md border border-white/40
                                hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></div>
                      <span className="text-pink-700 text-xs font-medium drop-shadow-sm">
                        {questionIndex + 1} / {loveQuestions.length}
                      </span>
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </MobileFrame>
    </>
  );
}