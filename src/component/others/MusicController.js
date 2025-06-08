'use client';

import { useEffect } from 'react';
import { useMusicStore } from '@/app/store/store';

export default function MusicController() {
  const {
    isPlaying,
    isMuted,
    volume,
    initMusic,
    toggleMusic,
    toggleMute,
    setVolume,
    tryPlayAfterInteraction,
    cleanup
  } = useMusicStore();

  // 初始化音樂
  useEffect(() => {
    initMusic();
    
    // 清理函數
    return () => {
      cleanup();
    };
  }, []);

  // 處理用戶互動（點擊頁面任何地方時嘗試播放音樂）
  useEffect(() => {
    const handleUserInteraction = () => {
      tryPlayAfterInteraction();
    };

    // 監聽各種用戶互動事件
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center space-x-2">
      {/* 音樂控制面板 */}
      <div className="bg-amber-900/80 backdrop-blur-md rounded-2xl p-3 border border-amber-600/50 shadow-lg">
        <div className="flex items-center space-x-3">
          
          {/* 播放/暫停按鈕 */}
          <button
            onClick={toggleMusic}
            className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 
                     hover:from-amber-400 hover:to-orange-400 
                     rounded-full flex items-center justify-center 
                     text-white shadow-lg hover:shadow-xl 
                     transition-all duration-300 hover:scale-110
                     border-2 border-amber-300/50"
            title={isPlaying ? '暫停音樂' : '播放音樂'}
          >
            {isPlaying ? (
              // 暫停圖標
              <div className="flex space-x-1">
                <div className="w-1 h-4 bg-white rounded-sm"></div>
                <div className="w-1 h-4 bg-white rounded-sm"></div>
              </div>
            ) : (
              // 播放圖標
              <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5"></div>
            )}
          </button>

          {/* 靜音切換按鈕 */}
          <button
            onClick={toggleMute}
            className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-amber-500 
                     hover:from-yellow-400 hover:to-amber-400 
                     rounded-lg flex items-center justify-center 
                     text-white shadow-md hover:shadow-lg 
                     transition-all duration-300 hover:scale-110
                     border border-yellow-300/50"
            title={isMuted ? '取消靜音' : '靜音'}
          >
            {isMuted ? (
              // 靜音圖標
              <div className="relative">
                <div className="text-xs">🔇</div>
              </div>
            ) : (
              // 音量圖標
              <div className="text-xs">🎵</div>
            )}
          </button>

          {/* 音量控制滑桿 */}
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-16 h-1 bg-amber-600/50 rounded-lg appearance-none cursor-pointer
                       slider:bg-amber-300 slider:rounded-lg slider:cursor-pointer"
              style={{
                background: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${volume * 100}%, #92400e ${volume * 100}%, #92400e 100%)`
              }}
              title="調整音量"
            />
            <span className="text-amber-100 text-xs font-medium min-w-[2rem]">
              {Math.round(volume * 100)}%
            </span>
          </div>

        </div>
        
        {/* 音樂狀態指示器 */}
        <div className="mt-2 flex items-center justify-center">
          <div className={`flex items-center space-x-1 transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-50'}`}>
            <div className="w-1 h-1 bg-amber-300 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
            <div className="w-1 h-1 bg-orange-300 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-1 h-1 bg-yellow-300 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            <span className="text-amber-200 text-xs ml-2">
              {isPlaying ? '♪ 播放中' : '⏸ 已暫停'}
            </span>
          </div>
        </div>
      </div>

      {/* 復古裝飾 */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400/80 rounded-full border border-white/70 shadow-sm animate-ping"></div>
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-400/80 rounded-full border border-white/70 shadow-sm animate-bounce" style={{animationDelay: '0.5s'}}></div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #fbbf24;
          border: 2px solid #ffffff;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #fbbf24;
          border: 2px solid #ffffff;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}