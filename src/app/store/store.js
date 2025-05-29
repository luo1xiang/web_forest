import { create } from 'zustand'



// 建立 store hook
const usePsyStore = create((set) => ({
	// states and actions
  state: 0, //0:start, 1:question, 2:displayResult, 3: result
  questionState: 0,
  totalQuestions: 3,
  score: 0,
  updateState: (newState) => set( (state)=>({ state: newState}) ),
  updateQuestionState: (newState) => set( (state)=>({ questionState: newState}) ),
  updateTotalQuestions: (newState) => set( (state)=>({ totalQuestions: newState}) ),
  updateScore: (newState) => set( (state)=>({ score: newState}) )
}));


const useQuestionStore = create((set) => ({
  questions: {
    "1":{
      title: "麵包師傅要你「靜置 30 分鐘」，你會怎麼做？",
      options: [
        {title: "乖乖待著… 然後偷偷膨脹三倍大", value: 2},
        {title: "等個屁！我已經開始發酵狂飆了", value: 3},
        {title: "發…什麼？我忘記了，我睡著了", value: 1}
      ]
    },
    "2":{
      title: "當你被放進烤箱時，溫度突然升高，你的反應是？",
      options: [
        {title: "啊啊啊啊啊啊！（冒泡炸裂）", value: 2},
        {title: "熱熱熱快翻面！我要烤出最酥脆的皮！", value: 3},
        {title: "我已經放棄掙扎，來吧命運……", value: 1}
      ]
    },
    "3":{
      title: "如果你被顧客挑選時被放回去了，你會？",
      options: [
        {title: "立刻乾癟五公分，氣到扁掉", value: 2},
        {title: "更用力散發麵包香，讓他後悔！", value: 3},
        {title: "裝死，假裝自己是牛角麵包", value: 1}
      ]
    }
  },
}))



export { usePsyStore, useQuestionStore }