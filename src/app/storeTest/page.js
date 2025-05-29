'use client';

import { useState } from 'react';
import { usePsyStore, useQuestionStore } from '../store/store';

export default function StoreTest() {
  // 使用 usePsyStore 的狀態和方法
  const psyState = usePsyStore((state) => state.state);
  const questionState = usePsyStore((state) => state.questionState);
  const totalQuestions = usePsyStore((state) => state.totalQuestions);
  const score = usePsyStore((state) => state.score);
  const updateState = usePsyStore((state) => state.updateState);
  const updateQuestionState = usePsyStore((state) => state.updateQuestionState);
  const updateScore = usePsyStore((state) => state.updateScore);

  // 使用 useQuestionStore 的狀態
  const questions = useQuestionStore((state) => state.questions);

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Store 測試頁面</h1>
      
      {/* 顯示 PsyStore 狀態 */}
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">Psychology Store 狀態：</h2>
        <p>主要狀態: {psyState} (0:start, 1:question, 2:displayResult, 3:result)</p>
        <p>問題狀態: {questionState}</p>
        <p>總問題數: {totalQuestions}</p>
        <p>分數: {score}</p>
      </div>

      {/* 操作按鈕 */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">操作按鈕：</h2>
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => updateState(1)} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            設為問題狀態
          </button>
          <button 
            onClick={() => updateState(2)} 
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            設為顯示結果狀態
          </button>
          <button 
            onClick={() => updateQuestionState(questionState + 1)} 
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            下一題
          </button>
          <button 
            onClick={() => updateScore(score + 1)} 
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            增加分數
          </button>
          <button 
            onClick={() => {
              updateState(0);
              updateQuestionState(0);
              updateScore(0);
            }} 
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            重置所有狀態
          </button>
        </div>
      </div>

      {/* 顯示問題 */}
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">問題預覽：</h2>
        {Object.entries(questions).map(([key, question]) => (
          <div key={key} className="mb-4 border-b pb-2">
            <h3 className="font-medium">問題 {key}: {question.title}</h3>
            <div className="ml-4 mt-2">
              {question.options.map((option, index) => (
                <p key={index} className="text-sm">
                  • {option.title} (分數: {option.value})
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
