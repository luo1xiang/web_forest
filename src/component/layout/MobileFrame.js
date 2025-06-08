'use client';

export default function MobileFrame({children, transparent = false}) {
  return (
    <>
      <div className={`w-[33%] min-w-[380px] max-w-[420px] h-[85%] p-[52px] 
        ${transparent ? 'bg-transparent' : 'bg-gradient-to-b from-pink-200/40 via-purple-200/30 to-blue-200/40'}
        backdrop-blur-sm
        rounded-2xl flex justify-center items-center
        relative overflow-hidden
        shadow-lg shadow-pink-300/20
        border border-white/20`}>
        {children}
      </div>
    </>
  );
}