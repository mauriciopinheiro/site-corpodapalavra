export interface Ponto {
  x: number;
  y: number;
}

/**
 * Reamostra uma lista de pontos para ter exatamente totalPontos uniformemente espaçados.
 */
export function reamostrarPontos(pontos: Ponto[], totalPontos: number = 64): Ponto[] {
  if (!pontos || pontos.length === 0) return [];
  if (pontos.length === 1) {
    return Array.from({ length: totalPontos }, () => ({ ...pontos[0] }));
  }

  const distancias: number[] = [0];
  for (let i = 1; i < pontos.length; i++) {
    const dx = pontos[i].x - pontos[i - 1].x;
    const dy = pontos[i].y - pontos[i - 1].y;
    const d = Math.sqrt(dx * dx + dy * dy);
    distancias.push(distancias[i - 1] + (d > 0 ? d : 0.001));
  }

  const comprimentoTotal = distancias[distancias.length - 1];
  const passo = comprimentoTotal / (totalPontos - 1);
  const resultado: Ponto[] = [];

  let idxSegmento = 0;
  for (let i = 0; i < totalPontos; i++) {
    const distanciaAlvo = i * passo;
    while (idxSegmento < distancias.length - 2 && distancias[idxSegmento + 1] < distanciaAlvo) {
      idxSegmento++;
    }

    const d0 = distancias[idxSegmento];
    const d1 = distancias[idxSegmento + 1];
    const segT = d1 > d0 ? (distanciaAlvo - d0) / (d1 - d0) : 0;

    const p0 = pontos[idxSegmento];
    const p1 = pontos[idxSegmento + 1];

    resultado.push({
      x: p0.x + (p1.x - p0.x) * segT,
      y: p0.y + (p1.y - p0.y) * segT
    });
  }

  return resultado;
}

/**
 * Gera os 64 pontos paramétricos da letra 'P' com proporções nobres de prelo.
 */
export function gerarPontosAlvoP(centroX: number, centroY: number, altura: number = 220, totalPontos: number = 64): Ponto[] {
  const largura = altura * 0.62;
  const xHaste = centroX - largura * 0.35;
  const yTopo = centroY - altura * 0.5;
  const yBase = centroY + altura * 0.5;
  const yMeio = centroY;
  const xBojoDireita = centroX + largura * 0.55;

  const pontosP: Ponto[] = [];

  // Segmento 1: Haste subindo de yBase para yTopo (32% dos pontos)
  const ptsHaste = Math.floor(totalPontos * 0.32);
  for (let i = 0; i < ptsHaste; i++) {
    const t = i / (ptsHaste - 1);
    pontosP.push({
      x: xHaste,
      y: yBase - (yBase - yTopo) * t
    });
  }

  // Segmento 2: Bojo curvo superior do topo ao meio (44% dos pontos)
  const ptsBojo = Math.floor(totalPontos * 0.44);
  for (let i = 0; i < ptsBojo; i++) {
    const t = i / (ptsBojo - 1);
    const angulo = -Math.PI / 2 + Math.PI * t;
    const raioX = xBojoDireita - xHaste;
    const raioY = (yMeio - yTopo) / 2;
    const centroBojoY = yTopo + raioY;

    pontosP.push({
      x: xHaste + Math.cos(angulo) * raioX,
      y: centroBojoY + Math.sin(angulo) * raioY
    });
  }

  // Segmento 3: Haste descendo até a base (o restante dos pontos)
  const ptsRestantes = totalPontos - pontosP.length;
  for (let i = 0; i < ptsRestantes; i++) {
    const t = i / (ptsRestantes - 1);
    pontosP.push({
      x: xHaste,
      y: yMeio + (yBase - yMeio) * t
    });
  }

  return pontosP;
}

/**
 * Interpolação com física elástica/magnética entre o traço do usuário e a letra P.
 */
export function interpolarPontos(origem: Ponto[], destino: Ponto[], t: number): Ponto[] {
  const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  return origem.map((pOrig, idx) => {
    const pDest = destino[idx] || pOrig;
    return {
      x: pOrig.x + (pDest.x - pOrig.x) * ease,
      y: pOrig.y + (pDest.y - pOrig.y) * ease
    };
  });
}

/**
 * Converte uma lista de pontos em um path SVG suave com curvas suaves.
 */
export function pontosParaSvgPath(pts: Ponto[]): string {
  if (!pts || pts.length === 0) return '';
  if (pts.length === 1) return `M ${pts[0].x} ${pts[0].y}`;

  let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const xc = (pts[i].x + pts[i + 1].x) / 2;
    const yc = (pts[i].y + pts[i + 1].y) / 2;
    d += ` Q ${pts[i].x.toFixed(1)} ${pts[i].y.toFixed(1)}, ${xc.toFixed(1)} ${yc.toFixed(1)}`;
  }
  const ultimo = pts[pts.length - 1];
  d += ` L ${ultimo.x.toFixed(1)} ${ultimo.y.toFixed(1)}`;
  return d;
}
