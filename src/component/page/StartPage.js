'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import forestBg from '@/../public/forest.png';
import startBtn from '@/../public/0.start/startBtn.png';

export default function StartPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        {/* 森林背景圖片 */}
        <div className="absolute inset-0">
          <Image 
            src={forestBg} 
            alt="forest background" 
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>
        
        {/* 神祕森林覆蓋層 */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-green-800/10 to-lime-900/30"></div>
        
        {/* 動態光影效果 */}
        <div className="absolute inset-0 bg-gradient-to-tl from-emerald-200/20 via-green-100/15 to-lime-200/25 animate-pulse" style={{animationDuration: '6s'}}></div>
        
        {/* 陽光穿透樹葉效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-100/20 to-transparent animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
        
        {/* 漂浮的森林精靈光點 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-2 h-2 bg-emerald-300/70 rounded-full animate-bounce top-1/5 left-1/6 shadow-lg" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
          <div className="absolute w-3 h-3 bg-lime-400/60 rounded-full animate-bounce top-1/3 right-1/5 shadow-md" style={{animationDelay: '1s', animationDuration: '3.5s'}}></div>
          <div className="absolute w-1 h-1 bg-yellow-300/80 rounded-full animate-bounce top-2/5 left-1/8 shadow-sm" style={{animationDelay: '2s', animationDuration: '4.2s'}}></div>
          <div className="absolute w-2 h-2 bg-green-400/65 rounded-full animate-bounce top-3/5 right-1/4 shadow-sm" style={{animationDelay: '2.8s', animationDuration: '3.8s'}}></div>
          <div className="absolute w-3 h-3 bg-emerald-200/75 rounded-full animate-bounce top-4/5 left-2/3 shadow-md" style={{animationDelay: '3.5s', animationDuration: '3.2s'}}></div>
          <div className="absolute w-1 h-1 bg-lime-200/50 rounded-full animate-bounce top-1/12 right-2/5 shadow-sm" style={{animationDelay: '4.2s', animationDuration: '4.5s'}}></div>
        </div>

        {/* 微風吹動效果 - 模擬樹葉搖擺 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-1 h-16 bg-white/25 opacity-40 animate-pulse left-1/5 top-1/4 blur-sm rounded-full" style={{animationDuration: '5s'}}></div>
          <div className="absolute w-1 h-12 bg-white/20 opacity-35 animate-pulse right-1/4 top-1/3 blur-sm rounded-full" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
          <div className="absolute w-1 h-20 bg-white/30 opacity-45 animate-pulse left-2/3 top-2/5 blur-sm rounded-full" style={{animationDelay: '3.5s', animationDuration: '4.5s'}}></div>
        </div>

        {/* 森林溫暖光暈 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 中央溫暖綠光 */}
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-200/30 rounded-full opacity-40 blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '7s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-lime-300/25 rounded-full opacity-35 blur-2xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '3s', animationDuration: '9s'}}></div>
          
          {/* 角落自然光點 */}
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-green-300/25 rounded-full opacity-25 animate-ping" style={{animationDuration: '6s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-emerald-400/20 rounded-full opacity-20 animate-ping" style={{animationDelay: '3s', animationDuration: '7s'}}></div>
        </div>

        {/* 魔法森林光環 */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[28rem] h-[28rem] border-2 border-emerald-300/25 rounded-full animate-spin opacity-30 shadow-lg" style={{animationDuration: '30s'}}></div>
          <div className="absolute w-80 h-80 border border-lime-300/20 rounded-full animate-spin opacity-25 shadow-md" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
          <div className="absolute w-64 h-64 border border-green-300/15 rounded-full animate-spin opacity-20" style={{animationDuration: '20s'}}></div>
        </div>

        <div className='flex justify-center items-center flex-col gap-12 relative z-20 px-6 py-8 min-h-screen'>
          
          {/* 標題區域 */}
          <div className="text-center relative group mt-8">
            <div className="absolute -inset-6 bg-emerald-300/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h1 className="text-3xl font-bold text-emerald-800 drop-shadow-lg relative z-10 mb-2">
              森林系小動物
            </h1>
            <h2 className="text-lg font-medium text-green-700 drop-shadow-md">
              小森林探險 🦝
            </h2>
          </div>
          
          {/* 描述文字區域 */}
          <div className='text-emerald-800 font-medium text-center text-sm
           leading-relaxed tracking-wide relative bg-white/30 backdrop-blur-md 
           rounded-3xl p-8 border border-white/40 shadow-xl
           hover:bg-white/40 transition-all duration-500 hover:shadow-2xl
           max-w-sm mx-auto'>
            <p className="mb-4">
              歡迎來到《森林系小動物》的小森林探險！
            </p>
            <p className="mb-4">
              在這片靜謐而神祕的森林裡，住著許多可愛又獨特的小動物朋友。牠們有的活潑、有的安靜、有的充滿創意，而你……屬於哪一種呢？
            </p>
            <p className="text-green-600">
              請依照你最真實的感覺作答，我們會為你找到內心深處的森林代表角色 🍄
            </p>
          </div>
          
          {/* 開始按鈕 */}
          <div 
            className='cursor-pointer hover:translate-y-1 transition-all duration-300 w-40 relative group mb-8'
            onClick={nextStep}
          >
            {/* 按鈕魔法光暈 */}
            <div className="absolute -inset-8 bg-emerald-400/40 rounded-full blur-xl opacity-50 animate-pulse group-hover:opacity-100 transition-opacity duration-300" style={{animationDuration: '4s'}}></div>
            <div className="absolute -inset-6 bg-lime-300/30 rounded-full blur-lg opacity-40 animate-pulse group-hover:opacity-70 transition-opacity duration-300" style={{animationDelay: '1.5s', animationDuration: '5s'}}></div>
            
            {/* 按鈕旋轉光環 */}
            <div className="absolute -inset-3 border-2 border-green-400/30 rounded-full animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animationDuration: '3s'}}></div>
            
            {/* 按鈕本體 */}
            <Image 
              className='w-full h-auto relative z-10 drop-shadow-xl group-hover:drop-shadow-2xl 
                        group-hover:scale-110 transition-all duration-300 animate-pulse group-hover:animate-none
                        filter brightness-110 group-hover:brightness-125' 
              src={startBtn} 
              alt='開始探險'
              style={{animationDuration: '3s'}}
            />
            
            {/* 按鈕魔法反射 */}
            <div className="absolute bottom-0 left-1/2 w-28 h-3 bg-emerald-400/30 blur-lg opacity-50 animate-pulse transform -translate-x-1/2 translate-y-3" style={{animationDuration: '3s'}}></div>
          </div>
          
        </div>

        {/* 四角森林裝飾 */}
        <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-emerald-500/40 animate-pulse" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-lime-500/40 animate-pulse" style={{animationDelay: '1.5s', animationDuration: '6s'}}></div>
        <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-green-500/40 animate-pulse" style={{animationDelay: '3s', animationDuration: '6s'}}></div>
        <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-emerald-500/40 animate-pulse" style={{animationDelay: '4.5s', animationDuration: '6s'}}></div>

        {/* 底部森林迷霧 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-900/30 via-green-800/15 to-transparent pointer-events-none"></div>

      </MobileFrame>
    </>
  );
}