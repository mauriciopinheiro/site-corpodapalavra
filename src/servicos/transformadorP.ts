export interface Ponto {
  x: number;
  y: number;
}

/**
 * Reamostra uma lista de pontos para ter exatamente N pontos uniformemente espaçados ao longo do comprimento total.
 */
export function reamostrarPontos(pontos: Ponto[], totalPontos: number = 64): Ponto[] {
  if (!pontos || pontos.length === 0) return [];
  if (pontos.length === 1) {
    return Array.from({ length: totalPontos }, () => ({ ...pontos[0] }));
  }

  // 1. Calcular distâncias acumuladas
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
 * Gera N pontos paramétricos formando o traçado contínuo e monumental da letra capital 'P' com haste e bojo curvo.
 */
export function gerarPontosAlvoP(centroX: number, centroY: number, altura: number = 220, totalPontos: number = 64): Ponto[] {
  const largura = altura * 0.65;
  const xHaste = centroX - largura * 0.35;
  const yTopo = centroY - altura * 0.5;
  const yBase = centroY + altura * 0.5;
  const yMeio = centroY;
  const xBojoDireita = centroX + largura * 0.5;

  const pontosP: Ponto[] = [];

  // Segmento 1: Haste de baixo para cima (30% dos pontos)
  const ptsHaste = Math.floor(totalPontos * 0.3);
  for (let i = 0; i < ptsHaste; i++) {
    const t = i / (ptsHaste - 1);
    pontosP.push({
      x: xHaste,
      y: yBase - (yBase - yTopo) * t
    });
  }

  // Segmento 2: Bojo curvo superior (45% dos pontos) - arco elíptico do topo ao meio da haste
  const ptsBojo = Math.floor(totalPontos * 0.45);
  for (let i = 0; i < ptsBojo; i++) {
    const t = i / (ptsBojo - 1);
    // Ângulo de -PI/2 (topo) até +PI/2 (meio)
    const angulo = -Math.PI / 2 + Math.PI * t;
    const raioX = xBojoDireita - xHaste;
    const raioY = (yMeio - yTopo) / 2;
    const centroBojoY = yTopo + raioY;

    pontosP.push({
      x: xHaste + Math.cos(angulo) * raioX,
      y: centroBojoY + Math.sin(angulo) * raioY
    });
  }

  // Segmento 3: Fechamento de volta para o pé e serifa inferior (o restante dos pontos)
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
 * Interpolação elástica/física entre o traço do usuário e a letra P
 */
export function interpolarPontos(origem: Ponto[], destino: Ponto[], t: number): Ponto[] {
  // Easing cúbico para desaceleração suave e encaixe magnético
  const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  return origem.map((pOrig, idx) => {
    const pDest = destino[idx] || pOrig;
    return {
      x: pOrig.x + (pDest.x - pOrig.x) * ease,
      y: pOrig.y + (pDest.y - pOrig.y) * ease
    };
  });
}
