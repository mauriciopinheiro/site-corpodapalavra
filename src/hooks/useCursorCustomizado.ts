import { useState, useEffect } from 'react';

export type ModoCursor = 'padrao' | 'ler' | 'abrir' | 'mover' | 'tocar' | 'mais' | 'tipo';

export function useCursorCustomizado() {
  const [posicao, setPosicao] = useState({ x: -100, y: -100 });
  const [modo, setModo] = useState<ModoCursor>('padrao');
  const [visivel, setVisivel] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detecta se é dispositivo com tela de toque
    const checkTouch = () => {
      if (window.matchMedia('(pointer: coarse)').matches) {
        setIsTouch(true);
      }
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      setPosicao({ x: e.clientX, y: e.clientY });
      setVisivel(true);
    };

    const handleMouseLeave = () => {
      setVisivel(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return {
    posicao,
    modo,
    setModo,
    visivel,
    isTouch
  };
}
