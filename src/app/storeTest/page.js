'use client';

import { useEffect } from 'react';
import { useMusicStore } from '@/app/store/store';
// 如果你有其他組件，也可以在這裡引入
// import MusicController from '@/component/others/MusicController';

export default function StoreTestPage() {
  // 使用音樂 store
  const {
    isPlaying,
    isMuted,
    volume,
    isLoaded,
    initMusic,
    toggleMusic,
    toggleMute,
    setVolume,
    tryPlayAfterInteraction
  } = useMusicStore();

  // 初始化音樂
  useEffect(() => {
    console.log('📱 StoreTest 頁面載入，初始化音樂');
    initMusic();
  }, []);

  // 處理用戶互動
  useEffect(() => {
    const handleUserInteraction = () => {
      console.log('👆 用戶點擊頁面');
      tryPlayAfterInteraction();
    };

    // 監聽點擊事件
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    
    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-8">
      {/* 音樂控制面板 - 固定在右上角 */}
      <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-amber-200">
        <div className="text-center mb-3">
          <h3 className="text-sm font-bold text-amber-800">🎵 音樂控制</h3>
        </div>
        
        <div className="flex flex-col space-y-2">
          {/* 播放/暫停按鈕 */}
          <button
            onClick={toggleMusic}
            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            {isPlaying ? '⏸️ 暫停' : '▶️ 播放'}
          </button>
          
          {/* 靜音按鈕 */}
          <button
            onClick={toggleMute}
            className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            {isMuted ? '🔊 取消靜音' : '🔇 靜音'}
          </button>
          
          {/* 音量控制 */}
          <div className="flex flex-col space-y-1">
            <label className="text-xs text-amber-700 font-medium">音量</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-xs text-amber-600 text-center">
              {Math.round(volume * 100)}%
            </span>
          </div>
        </div>
        
        {/* 狀態顯示 */}
        <div className="mt-3 pt-3 border-t border-amber-200 text-xs text-amber-700 space-y-1">
          <div>載入: {isLoaded ? '✅' : '⏳'}</div>
          <div>播放: {isPlaying ? '▶️' : '⏸️'}</div>
          <div>音量: {isMuted ? '🔇' : '🔊'}</div>
        </div>
        
        <div className="mt-2 text-xs text-gray-500 text-center">
          點擊頁面任意位置啟動音樂
        </div>
      </div>

      {/* 主要內容區域 */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-amber-800 mb-8">
          🎵 午夜唱片行測試頁面
        </h1>
        
        {/* 提示卡片 */}
        <div className="bg-white/80 rounded-2xl p-6 shadow-lg border border-amber-200 mb-8">
          <h2 className="text-2xl font-semibold text-amber-700 mb-4">音樂測試說明</h2>
          <div className="space-y-3 text-amber-600">
            <p>1. 確保 <code className="bg-amber-100 px-2 py-1 rounded">bike.mp3</code> 檔案在 <code className="bg-amber-100 px-2 py-1 rounded">public</code> 資料夾中</p>
            <p>2. 點擊右上角的播放按鈕開始播放音樂</p>
            <p>3. 打開開發者工具 (F12) 查看 Console 訊息</p>
            <p>4. 點擊頁面任意位置也可以啟動音樂</p>
          </div>
        </div>

        {/* 測試區域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 測試按鈕區域 */}
          <div className="bg-white/80 rounded-2xl p-6 shadow-lg border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-700 mb-4">測試操作</h3>
            <div className="space-y-3">
              <button
                onClick={() => console.log('🧪 測試按鈕被點擊')}
                className="w-full px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
              >
                🧪 測試按鈕 (查看 Console)
              </button>
              
              <button
                onClick={() => {
                  console.log('🔍 檢查音樂狀態:', { isPlaying, isMuted, volume, isLoaded });
                }}
                className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
              >
                🔍 檢查音樂狀態
              </button>
              
              <button
                onClick={() => {
                  fetch('/bike.mp3')
                    .then(response => {
                      console.log('📁 檔案檢查結果:', response.status, response.statusText);
                      if (response.ok) {
                        console.log('✅ bike.mp3 檔案存在且可訪問');
                      } else {
                        console.log('❌ bike.mp3 檔案無法訪問');
                      }
                    })
                    .catch(error => {
                      console.error('❌ 檔案檢查失敗:', error);
                    });
                }}
                className="w-full px-4 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors"
              >
                📁 檢查音樂檔案
              </button>
            </div>
          </div>

          {/* 說明區域 */}
          <div className="bg-white/80 rounded-2xl p-6 shadow-lg border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-700 mb-4">調試資訊</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-amber-50 p-3 rounded-lg">
                <strong>當前狀態:</strong>
                <ul className="mt-2 space-y-1 text-amber-700">
                  <li>• 音樂載入: {isLoaded ? '✅ 完成' : '⏳ 載入中'}</li>
                  <li>• 播放狀態: {isPlaying ? '▶️ 播放中' : '⏸️ 已暫停'}</li>
                  <li>• 靜音狀態: {isMuted ? '🔇 已靜音' : '🔊 正常'}</li>
                  <li>• 音量設定: {Math.round(volume * 100)}%</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <strong>注意事項:</strong>
                <ul className="mt-2 space-y-1 text-blue-700 text-xs">
                  <li>• 現代瀏覽器需要用戶互動才能播放音樂</li>
                  <li>• 請確保音樂檔案路徑正確</li>
                  <li>• 查看 Console 獲取詳細調試信息</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 你的其他內容可以在這裡繼續添加 */}
        <div className="mt-8 text-center text-amber-600">
          <p>這是 StoreTest 頁面，用於測試音樂功能和其他 Store 功能</p>
        </div>
      </div>
    </div>
  );
}