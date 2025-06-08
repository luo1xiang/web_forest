import { create } from 'zustand';

// 心理測驗分數 Store - 合併所有狀態管理
export const usePsyStore = create((set, get) => ({
  // 整體流程狀態
  state: 0, // 0: StartPage, 1: InstructionPage, 2: QuestionPage, 3: DisplayResultPage, 4: ResultPage
  
  // 問題相關狀態
  questionState: 0, // 當前問題索引 (0-6)
  totalQuestions: 7, // 總問題數
  answers: [], // 答案記錄
  
  // 分數相關
  score: 0,
  minScore: 7,  // 7題 × 1分
  maxScore: 49, // 7題 × 7分
  
  // 更新整體狀態
  updateState: (newState) => set({ state: newState }),
  
  // 更新問題狀態
  updateQuestionState: (newQuestionState) => set({ questionState: newQuestionState }),
  
  // 更新分數
  updateScore: (newScore) => set({ score: newScore }),
  
  // 重置分數
  resetScore: () => set({ score: 0 }),
  
  // 重置所有狀態
  resetAll: () => set({ 
    state: 0,
    questionState: 0,
    score: 0,
    answers: []
  }),
  
  // 新增答案記錄
  addAnswer: (answer) => set((state) => ({
    answers: [...state.answers, answer]
  })),
  
  // 根據分數獲取結果分析
  getResult: () => {
    const score = get().score;
    
    if (score >= 7 && score <= 14) {
      return {
        type: 'KTV順唱',
        emoji: '🌈',
        theme: '王心凌《愛你》',
        description: '你被訓練得很好，懂得表演、知道何時該唱什麼，但內在聲音常常被蓋過。',
        suggestion: '✨ 建議：唱給沒人聽的你，會不一樣。',
        scoreRange: '7-14分'
      };
    } else if (score >= 15 && score <= 21) {
      return {
        type: '懷舊記憶',
        emoji: '🎞',
        theme: '周杰倫《夜曲》',
        description: '你擁有大量音樂記憶，懂得分類與保存，但偶爾也會困在過去的播放清單裡。',
        suggestion: '✨ 提醒：新的你，也值得一首新歌。',
        scoreRange: '15-21分'
      };
    } else if (score >= 22 && score <= 28) {
      return {
        type: '聲音拼貼',
        emoji: '🔊',
        theme: '蔡依林《天空》',
        description: '你把傷痕拼成旋律，把錯拍當成節奏，是用「不完美」寫自己的專輯作者。',
        suggestion: '✨ 問題是：你願意讓別人聽到這張專輯嗎？',
        scoreRange: '22-28分'
      };
    } else if (score >= 29 && score <= 35) {
      return {
        type: '潛意識電台',
        emoji: '🧬',
        theme: '孫燕姿《雨天》',
        description: '你總是讓那些被壓下的聲音偷偷播出，熟悉怎麼把自己藏在別人的歌詞裡。',
        suggestion: '✨ 也許，是時候開自己的頻道了。',
        scoreRange: '29-35分'
      };
    } else if (score >= 36 && score <= 49) {
      return {
        type: '靜音混音',
        emoji: '🔮',
        theme: '王菲《寓言》',
        description: '你最懂什麼話該不說，什麼聲音該靜音。你用「不發聲」來創造一種超然的存在。',
        suggestion: '✨ 或許，沉默本身就是你的樂器。',
        scoreRange: '36-49分'
      };
    } else {
      // 預設情況
      return {
        type: '未知音域',
        emoji: '🎵',
        theme: '神秘樂章',
        description: '你的聲音超出了預期的範圍，也許你正在創造全新的音樂類型。',
        suggestion: '✨ 繼續探索你獨特的聲音吧！',
        scoreRange: `${score}分`
      };
    }
  }
}));

// 保持原有的 useQuestionStore 以防其他地方有使用
export const useQuestionStore = create((set, get) => ({
  currentQuestion: 0,
  totalQuestions: 7,
  answers: [],
  
  // 進入下一題
  nextQuestion: () => set((state) => ({ 
    currentQuestion: state.currentQuestion + 1
  })),
  
  // 重置所有問題
  resetQuestions: () => set({ 
    currentQuestion: 0, 
    answers: [] 
  }),
  
  // 新增答案記錄
  addAnswer: (answer) => set((state) => ({
    answers: [...state.answers, answer]
  })),
  
  // 檢查是否完成所有問題
  isCompleted: () => {
    const state = get();
    return state.answers.length >= state.totalQuestions;
  },
  
  // 獲取當前進度百分比
  getProgress: () => {
    const state = get();
    return Math.round((state.answers.length / state.totalQuestions) * 100);
  }
}));

// 🎵 背景音樂管理 Store - 新增
export const useMusicStore = create((set, get) => ({
  isPlaying: false,
  isMuted: false,
  volume: 0.5,
  audio: null,
  isLoaded: false,
  
  // 初始化音樂
  initMusic: () => {
    console.log('🎵 開始初始化音樂...');
    if (typeof window !== 'undefined') {
      const audio = new Audio('/bike.mp3');
      audio.loop = true; // 自動循環
      audio.volume = get().volume;
      audio.preload = 'auto';
      
      console.log('🎵 音樂檔案路徑: /bike.mp3');
      console.log('🎵 設定音量:', get().volume);
      
      // 音樂載入完成
      audio.addEventListener('canplaythrough', () => {
        set({ isLoaded: true });
        console.log('✅ 音樂載入完成！');
      });
      
      // 音樂載入中
      audio.addEventListener('loadstart', () => {
        console.log('🔄 開始載入音樂...');
      });
      
      // 音樂可以開始播放
      audio.addEventListener('canplay', () => {
        console.log('▶️ 音樂可以開始播放');
      });
      
      // 錯誤處理
      audio.addEventListener('error', (e) => {
        console.error('❌ 音樂載入失敗:', e);
        console.error('❌ 錯誤詳情:', audio.error);
      });
      
      set({ audio });
      console.log('🎵 音樂初始化完成');
    } else {
      console.log('❌ window 未定義，跳過音樂初始化');
    }
  },
  
  // 播放音樂
  playMusic: async () => {
    console.log('🎵 嘗試播放音樂...');
    const { audio, isMuted } = get();
    
    if (!audio) {
      console.log('❌ 音樂物件不存在');
      return;
    }
    
    if (isMuted) {
      console.log('🔇 音樂已靜音，跳過播放');
      return;
    }
    
    try {
      await audio.play();
      set({ isPlaying: true });
      console.log('✅ 音樂開始播放！');
    } catch (error) {
      console.error('❌ 音樂播放失敗:', error);
    }
  },
  
  // 暫停音樂
  pauseMusic: () => {
    console.log('⏸️ 暫停音樂');
    const { audio } = get();
    if (audio) {
      audio.pause();
      set({ isPlaying: false });
      console.log('✅ 音樂已暫停');
    }
  },
  
  // 切換播放/暫停
  toggleMusic: async () => {
    const { isPlaying } = get();
    console.log('🔄 切換音樂狀態，當前:', isPlaying ? '播放中' : '已暫停');
    if (isPlaying) {
      get().pauseMusic();
    } else {
      await get().playMusic();
    }
  },
  
  // 靜音/取消靜音
  toggleMute: () => {
    const { isMuted, audio } = get();
    const newMutedState = !isMuted;
    console.log('🔇 切換靜音狀態:', newMutedState ? '靜音' : '取消靜音');
    
    if (audio) {
      audio.muted = newMutedState;
    }
    
    set({ isMuted: newMutedState });
    
    // 如果取消靜音且音樂還沒播放，則開始播放
    if (!newMutedState && !get().isPlaying) {
      console.log('🎵 取消靜音後自動播放音樂');
      get().playMusic();
    }
  },
  
  // 設置音量
  setVolume: (newVolume) => {
    const { audio } = get();
    const volume = Math.max(0, Math.min(1, newVolume));
    console.log('🔊 設定音量:', volume);
    
    if (audio) {
      audio.volume = volume;
    }
    
    set({ volume });
  },
  
  // 嘗試用戶互動後播放
  tryPlayAfterInteraction: async () => {
    console.log('👆 檢測到用戶互動，嘗試播放音樂');
    const { audio, isMuted, isPlaying } = get();
    
    if (!audio) {
      console.log('❌ 音樂物件不存在');
      return;
    }
    
    if (isMuted) {
      console.log('🔇 音樂已靜音，跳過播放');
      return;
    }
    
    if (isPlaying) {
      console.log('▶️ 音樂已在播放中');
      return;
    }
    
    try {
      await audio.play();
      set({ isPlaying: true });
      console.log('✅ 用戶互動後音樂開始播放！');
    } catch (error) {
      console.error('❌ 用戶互動後音樂播放失敗:', error);
    }
  },
  
  // 重置音樂狀態
  resetMusic: () => {
    console.log('🔄 重置音樂狀態');
    const { audio } = get();
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    set({ isPlaying: false });
  },
  
  // 清理音樂資源
  cleanup: () => {
    console.log('🧹 清理音樂資源');
    const { audio } = get();
    if (audio) {
      audio.pause();
      audio.src = '';
    }
    set({ 
      audio: null, 
      isPlaying: false, 
      isLoaded: false 
    });
  }
}));