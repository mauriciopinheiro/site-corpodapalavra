import { useState, useEffect } from 'react';

export function useProgressoScroll() {
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const scrollAtual = window.scrollY;
        const porcentagem = Math.min(100, Math.max(0, (scrollAtual / totalHeight) * 100));
        setProgresso(porcentagem);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progresso;
}
