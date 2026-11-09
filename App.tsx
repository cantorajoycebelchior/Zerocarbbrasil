import React, { useState } from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 font-sans">
      <header className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-emerald-400">Zero Carb Brasil</h1>
        <div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-sm font-semibold">
          5 Dias Grátis Ativados
        </div>
      </header>

      <main className="max-w-2xl mx-auto space-y-6">
        {/* Banner 5 Dias */}
        <div className="bg-gradient-to-r from-emerald-950 to-slate-800 p-4 rounded-xl border border-emerald-500/30 flex justify-between items-center">
          <div>
            <h2 className="font-bold text-lg text-emerald-300">5 Dias de Teste Grátis</h2>
            <p className="text-xs text-slate-300">Acesso ilimitado ao Diário, Treinos e IA Nutricional.</p>
          </div>
        </div>

        {/* Macros / Metas */}
        <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-400">Meta Carboidratos Líquidos</span>
            <span className="text-xl font-bold text-emerald-400">0g / dia</span>
          </div>
          <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-0 transition-all duration-500"></div>
          </div>
        </div>

        {/* Diário Livre */}
        <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-4">
          <h3 className="font-semibold text-lg text-emerald-400">Diário Alimentar</h3>
          <p className="text-xs text-slate-400">Escreva o que comeu hoje para registrar:</p>
          <textarea 
            placeholder="Ex: 3 ovos fritos na manteiga com 50g de queijo muçarela e rúcula..."
            className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-500 min-h-[100px]"
          />
        </div>
      </main>
    </div>
  );
}
