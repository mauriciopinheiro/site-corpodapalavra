import React, { createContext, useContext, useState, useEffect } from 'react';
import { audioMotor } from '../servicos/servicoAudio';

export type ModoExposicao = 'ler' | 'experimentar';

export interface MemoriaSessao {
  glifosDissecados: string[];
  excertosLidos: string[];
  carimbosAplicados: string[];
  marcasTotais: number;
  tempoInicio: number;
}

interface ContextoExposicaoTipo {
  modo: ModoExposicao;
  setModo: (modo: ModoExposicao) => void;
  alternarModo: () => void;
  audioAtivo: boolean;
  alternarAudio: () => void;
  tocarSom: (tipo: 'chumbo' | 'papel' | 'pedra' | 'madeira' | 'carimbo' | 'entalhe') => void;
  memoria: MemoriaSessao;
  registrarGlifo: (glifo: string) => void;
  registrarExcerto: (autor: string) => void;
  adicionarCarimbo: (carimbo: string) => void;
}

const ContextoExposicao = createContext<ContextoExposicaoTipo | null>(null);

export const ProvedorExposicao: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modo, setModo] = useState<ModoExposicao>('experimentar');
  const [audioAtivo, setAudioAtivo] = useState<boolean>(true);
  const [memoria, setMemoria] = useState<MemoriaSessao>({
    glifosDissecados: ['P'],
    excertosLidos: ['Paulo Freire'],
    carimbosAplicados: ['MATÉRIA'],
    marcasTotais: 1,
    tempoInicio: Date.now()
  });

  useEffect(() => {
    audioMotor.setMutado(!audioAtivo);
  }, [audioAtivo]);

  const alternarModo = () => {
    const novo = modo === 'ler' ? 'experimentar' : 'ler';
    setModo(novo);
    tocarSom('papel');
  };

  const alternarAudio = () => {
    setAudioAtivo(prev => !prev);
  };

  const tocarSom = (tipo: 'chumbo' | 'papel' | 'pedra' | 'madeira' | 'carimbo' | 'entalhe') => {
    if (audioAtivo) {
      audioMotor.tocar(tipo);
    }
  };

  const registrarGlifo = (glifo: string) => {
    setMemoria(prev => ({
      ...prev,
      glifosDissecados: Array.from(new Set([...prev.glifosDissecados, glifo])),
      marcasTotais: prev.marcasTotais + 1
    }));
  };

  const registrarExcerto = (autor: string) => {
    setMemoria(prev => ({
      ...prev,
      excertosLidos: Array.from(new Set([...prev.excertosLidos, autor])),
      marcasTotais: prev.marcasTotais + 1
    }));
  };

  const adicionarCarimbo = (carimbo: string) => {
    setMemoria(prev => ({
      ...prev,
      carimbosAplicados: [...prev.carimbosAplicados, carimbo],
      marcasTotais: prev.marcasTotais + 1
    }));
    tocarSom('carimbo');
  };

  return (
    <ContextoExposicao.Provider
      value={{
        modo,
        setModo,
        alternarModo,
        audioAtivo,
        alternarAudio,
        tocarSom,
        memoria,
        registrarGlifo,
        registrarExcerto,
        adicionarCarimbo
      }}
    >
      {children}
    </ContextoExposicao.Provider>
  );
};

export const useExposicao = () => {
  const ctx = useContext(ContextoExposicao);
  if (!ctx) throw new Error('useExposicao deve ser usado dentro de ProvedorExposicao');
  return ctx;
};
