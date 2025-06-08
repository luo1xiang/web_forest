'use client';

import StartPage from '@/component/page/StartPage';
import InstructionPage from '@/component/page/InstructionPage';
import QuestionPage from '@/component/page/QuestionPage';
import DisplayResultPage from '@/component/page/DisplayResultPage';
import ResultPage from '@/component/page/ResultPage';
import { useState } from 'react';
import { usePsyStore } from '@/app/store/store'

export default function Croissant() {

  const psyState = usePsyStore( (state) => state );

  const nextStep = function(){
    console.log("nextStep called, current state:", psyState.state, "questionState:", psyState.questionState);

    if(psyState.state >= 4) {
      console.log("Already at maximum state, returning");
      return; // 最大狀態是 4
    }

    if(psyState.state == 2){ // QuestionPage 狀態
      //答題階段
      //要超過總題數才能結束答題階段
      console.log("In question state, current question:", psyState.questionState, "total:", psyState.totalQuestions);

      if(psyState.questionState < psyState.totalQuestions - 1){
        // 還有下一題
        const nextQuestion = psyState.questionState + 1;
        console.log("Moving to next question:", nextQuestion);
        psyState.updateQuestionState(nextQuestion);
      } else {
        // 已經是最後一題，進入下一個狀態
        console.log("Last question answered, moving to next state");
        psyState.updateState(psyState.state + 1);
      }

    } else {
      console.log("Moving to next state from:", psyState.state, "to:", psyState.state + 1);
      psyState.updateState(psyState.state + 1);
    }
  }

  const prevStep = function(){
    if(psyState.state <= 0) return;
    console.log("prev step from state:", psyState.state);
    psyState.updateState(psyState.state - 1);
  }

  // 調試用
  console.log("Croissant component rendered, current state:", psyState.state, "questionState:", psyState.questionState);

  return (
    <>
      <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
        { psyState.state == 0 && <StartPage nextStep={nextStep} />}
        { psyState.state == 1 && <InstructionPage nextStep={nextStep} />}
        { psyState.state == 2 && <QuestionPage nextStep={nextStep} questionIndex={psyState.questionState} />}
        { psyState.state == 3 && <DisplayResultPage nextStep={nextStep}/>}
        { psyState.state == 4 && <ResultPage/>}

        {/* 調試面板 */}
        <div className="fixed bottom-4 right-4 z-50">
          <details className="bg-black/80 text-white p-4 rounded-lg text-xs">
            <summary className="cursor-pointer">調試面板</summary>
            <div className="mt-2 space-y-2">
              <p>狀態: {psyState.state}</p>
              <p>問題: {psyState.questionState + 1}/{psyState.totalQuestions}</p>
              <p>分數: {psyState.score}</p>
              <p>已回答: {psyState.answers?.length || 0}</p>
              <div className="flex gap-1 flex-wrap">
                <button 
                  onClick={() => {
                    console.log('Debug: Setting state to 0');
                    psyState.updateState(0);
                    psyState.updateQuestionState(0);
                  }} 
                  className="px-2 py-1 bg-blue-500 rounded text-xs hover:bg-blue-400"
                >
                  起始
                </button>
                <button 
                  onClick={() => {
                    console.log('Debug: Setting state to 1');
                    psyState.updateState(1);
                  }} 
                  className="px-2 py-1 bg-green-500 rounded text-xs hover:bg-green-400"
                >
                  說明
                </button>
                <button 
                  onClick={() => {
                    console.log('Debug: Setting state to 2');
                    psyState.updateState(2);
                    psyState.updateQuestionState(0);
                  }} 
                  className="px-2 py-1 bg-yellow-500 rounded text-xs hover:bg-yellow-400"
                >
                  問題
                </button>
                <button 
                  onClick={() => {
                    console.log('Debug: Setting state to 3');
                    psyState.updateState(3);
                  }} 
                  className="px-2 py-1 bg-purple-500 rounded text-xs hover:bg-purple-400"
                >
                  顯示結果
                </button>
                <button 
                  onClick={() => {
                    console.log('Debug: Setting state to 4');
                    psyState.updateState(4);
                  }} 
                  className="px-2 py-1 bg-pink-500 rounded text-xs hover:bg-pink-400"
                >
                  結果
                </button>
                <button 
                  onClick={() => {
                    console.log('Debug: Resetting all states');
                    psyState.resetAll();
                  }} 
                  className="px-2 py-1 bg-red-500 rounded text-xs hover:bg-red-400"
                >
                  重置
                </button>
              </div>
              
              {/* 問題導航 */}
              {psyState.state === 2 && (
                <div className="border-t border-white/20 pt-2 mt-2">
                  <p className="text-xs opacity-80 mb-1">問題導航:</p>
                  <div className="flex gap-1 flex-wrap">
                    {Array.from({length: psyState.totalQuestions}, (_, i) => (
                      <button
                        key={i}
                        onClick={() => psyState.updateQuestionState(i)}
                        className={`px-2 py-1 rounded text-xs ${
                          psyState.questionState === i 
                            ? 'bg-orange-500 text-white' 
                            : psyState.answers?.length > i 
                              ? 'bg-green-600 text-white' 
                              : 'bg-gray-600 text-white'
                        }`}
                      >
                        Q{i + 1}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </details>
        </div>
      </div>
    </>
  );
}