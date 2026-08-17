import React, { createContext, useContext, useState } from 'react';
import { servicoAudio } from '../servicos/servicoAudio';

export type ModoExposicao = 'ler' | 'experimentar';

export interface PontoGesto {
  x: number;
  y: number;
}

export interface MemoriaPercurso {
  tempoInicio: number;
  gestoInicial: PontoGesto[];
  glifosDissecados: string[];
  excertosLidos: string[];
  materiaisExplorados: string[];
  carimbosAplicados: string[];
  marcasTotais: number;
}

interface ContextoExposicaoTipo {
  modo: ModoExposicao;
  alternarModo: () => void;
  audioAtivo: boolean;
  alternarAudio: () => void;
  tocarSom: (tipo: 'chumbo' | 'papel' | 'pedra' | 'madeira' | 'carimbo' | 'entalhe') => void;
  prologoConcluido: boolean;
  concluirPrologo: () => void;
  reiniciarPrologo: () => void;
  gravarPontoGesto: (ponto: PontoGesto) => void;
  memoria: MemoriaPercurso;
  registrarGlifo: (glifo: string) => void;
  registrarExcerto: (autorOuId: string) => void;
  registrarMaterial: (mat: string) => void;
  adicionarCarimbo: (carimbo: string) => void;
}

const ContextoExposicao = createContext<ContextoExposicaoTipo | undefined>(undefined);

export const ProvedorExposicao: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modo, setModo] = useState<ModoExposicao>('experimentar');
  const [audioAtivo, setAudioAtivo] = useState<boolean>(true);
  const [prologoConcluido, setPrologoConcluido] = useState<boolean>(false);
  const [memoria, setMemoria] = useState<MemoriaPercurso>({
    tempoInicio: Date.now(),
    gestoInicial: [],
    glifosDissecados: ['P'],
    excertosLidos: ['Paulo Freire'],
    materiaisExplorados: ['pedra'],
    carimbosAplicados: ['MATÉRIA'],
    marcasTotais: 1
  });

  const alternarModo = () => {
    const novo = modo === 'ler' ? 'experimentar' : 'ler';
    setModo(novo);
    if (audioAtivo) servicoAudio.tocar('papel');
  };

  const alternarAudio = () => {
    const novo = !audioAtivo;
    setAudioAtivo(novo);
    servicoAudio.setMutado(!novo);
  };

  const tocarSom = (tipo: 'chumbo' | 'papel' | 'pedra' | 'madeira' | 'carimbo' | 'entalhe') => {
    if (audioAtivo) servicoAudio.tocar(tipo);
  };

  const concluirPrologo = () => {
    setPrologoConcluido(true);
    if (audioAtivo) servicoAudio.tocar('chumbo');
  };

  const reiniciarPrologo = () => {
    setPrologoConcluido(false);
  };

  const gravarPontoGesto = (ponto: PontoGesto) => {
    setMemoria(prev => ({
      ...prev,
      gestoInicial: [...prev.gestoInicial, ponto],
      marcasTotais: prev.marcasTotais + 1
    }));
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

  const registrarMaterial = (mat: string) => {
    setMemoria(prev => ({
      ...prev,
      materiaisExplorados: Array.from(new Set([...prev.materiaisExplorados, mat])),
      marcasTotais: prev.marcasTotais + 1
    }));
  };

  const adicionarCarimbo = (carimbo: string) => {
    if (audioAtivo) servicoAudio.tocar('carimbo');
    setMemoria(prev => ({
      ...prev,
      carimbosAplicados: [...prev.carimbosAplicados, carimbo],
      marcasTotais: prev.marcasTotais + 1
    }));
  };

  return (
    <ContextoExposicao.Provider
      value={{
        modo,
        alternarModo,
        audioAtivo,
        alternarAudio,
        tocarSom,
        prologoConcluido,
        concluirPrologo,
        reiniciarPrologo,
        gravarPontoGesto,
        memoria,
        registrarGlifo,
        registrarExcerto,
        registrarMaterial,
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
