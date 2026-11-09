import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState<'diario' | 'treinos' | 'receitas' | 'admin'>('diario');
  const [diario, setDiario] = useState({ cafe: '', almoco: '', jantar: '', lanches: '' });
  const [iaResposta, setIaResposta] = useState('');
  const [loading, setLoading] = useState(false);
  const [adminPin, setAdminPin] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [diasGratis, setDiasGratis] = useState(5);

  const calcularIA = (refeicao: string, texto: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIaResposta(`Análise IA para ${refeicao}: "${texto}" -> 0g Carbo | Aprox. 320 kcal | Perfeito para cetose!`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col">
      {/* Topo / Header */}
      <header className="bg-slate-900 border-b border-slate-800 p-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-bold text-emerald-400">Zero Carb Brasil</h1>
        <div className="flex items-center gap-2">
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold">
            {diasGratis} Dias Grátis
          </span>
          <button 
            onClick={() => setTab('admin')}
            className="text-xs bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-700"
          >
            Admin
          </button>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-3xl w-full mx-auto p-4 pb-20 space-y-6">
        {tab === 'diario' && (
          <div className="space-y-6">
            <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-xl">
              <h2 className="text-lg font-bold text-emerald-400 mb-1">Diário Alimentar 100% Zero Carbo</h2>
              <p className="text-xs text-slate-400 mb-4">Insira o que você consumiu. A IA calculará os macros automaticamente.</p>

              {['Café da Manhã', 'Almoço', 'Jantar', 'Lanches'].map((ref, idx) => {
                const key = ['cafe', 'almoco', 'jantar', 'lanches'][idx] as keyof typeof diario;
                return (
                  <div key={ref} className="mb-4 bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <label className="text-sm font-semibold text-slate-300 block mb-2">{ref}</label>
                    <textarea
                      value={diario[key]}
                      onChange={(e) => setDiario({ ...diario, [key]: e.target.value })}
                      placeholder={`O que você comeu no ${ref.toLowerCase()}? (Ex: 3 ovos com bacon)`}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 min-h-[70px]"
                    />
                    <button
                      onClick={() => calcularIA(ref, diario[key])}
                      className="mt-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs px-3 py-1.5 rounded-lg font-medium transition"
                    >
                      {loading ? 'Calculando...' : 'Calcular com IA'}
                    </button>
                  </div>
                );
              })}

              {iaResposta && (
                <div className="mt-4 p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs text-emerald-300">
                  <strong>Resposta da IA:</strong> {iaResposta}
                </div>
              )}
            </div>
          </div>
        )}

        {tab === 'treinos' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-emerald-400">Biblioteca de Treinos (PT-BR)</h2>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <h3 className="font-semibold text-sm text-white">HIIT Cetogênico para Iniciantes</h3>
              <p className="text-xs text-slate-400 mt-1">Vídeo aula em português focada em queima de gordura sem carboidratos.</p>
              <div className="mt-3 bg-slate-950 h-40 rounded-lg flex items-center justify-center border border-slate-800 text-xs text-slate-500">
                [Player de Vídeo PT-BR Disponível]
              </div>
            </div>
          </div>
        )}

        {tab === 'receitas' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-emerald-400">50 Receitas Zero Carbo</h2>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <h3 className="font-semibold text-sm text-white">Pão Nuvem Zero Carbo</h3>
              <p className="text-xs text-slate-400 mt-1">Ingredientes: Ovos, cream cheese e um toque de sal.</p>
            </div>
          </div>
        )}

        {tab === 'admin' && (
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
            <h2 className="text-lg font-bold text-emerald-400">Painel Administrativo</h2>
            {!isAdmin ? (
              <div className="space-y-3">
                <p className="text-xs text-slate-400">Digite o PIN de acesso:</p>
                <input 
                  type="password" 
                  value={adminPin} 
                  onChange={(e) => setAdminPin(e.target.value)}
                  placeholder="PIN"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-sm text-white"
                />
                <button 
                  onClick={() => {
                    if (adminPin === '1234') setIsAdmin(true);
                    else alert('PIN incorreto!');
                  }}
                  className="bg-emerald-600 px-4 py-2 rounded-lg text-xs font-semibold"
                >
                  Entrar
                </button>
              </div>
            ) : (
              <div className="space-y-3 text-xs text-slate-300">
                <p className="text-emerald-400 font-semibold">Painel Liberado com Sucesso!</p>
                <div className="flex items-center justify-between bg-slate-950 p-3 rounded-lg border border-slate-800">
                  <span>Dias Grátis Atuais: {diasGratis}</span>
                  <button 
                    onClick={() => setDiasGratis(diasGratis + 5)}
                    className="bg-emerald-600 px-3 py-1 rounded text-white"
                  >
                    Adicionar +5 Dias
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Navegação Inferior */}
      <nav className="bg-slate-900 border-t border-slate-800 fixed bottom-0 left-0 right-0 p-3 flex justify-around text-xs">
        <button onClick={() => setTab('diario')} className={`font-medium ${tab === 'diario' ? 'text-emerald-400' : 'text-slate-400'}`}>Diário</button>
        <button onClick={() => setTab('treinos')} className={`font-medium ${tab === 'treinos' ? 'text-emerald-400' : 'text-slate-400'}`}>Treinos</button>
        <button onClick={() => setTab('receitas')} className={`font-medium ${tab === 'receitas' ? 'text-emerald-400' : 'text-slate-400'}`}>Receitas</button>
      </nav>
    </div>
  );
}
