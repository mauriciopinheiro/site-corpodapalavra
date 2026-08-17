/**
 * Motor central de áudio sintético usando Web Audio API.
 * Sons táteis táteis ultra-sutis de impressão e atelier.
 */

type TipoSom = 'chumbo' | 'papel' | 'pedra' | 'madeira' | 'carimbo' | 'entalhe';

class ServicoAudio {
  private ctx: AudioContext | null = null;
  private mutado: boolean = false;

  private obterContexto(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public setMutado(mutado: boolean) {
    this.mutado = mutado;
  }

  public isMutado(): boolean {
    return this.mutado;
  }

  public tocar(tipo: TipoSom) {
    if (this.mutado) return;
    const ctx = this.obterContexto();
    if (!ctx) return;

    try {
      const agora = ctx.currentTime;
      const osc = ctx.createOscillator();
      const ganho = ctx.createGain();
      osc.connect(ganho);
      ganho.connect(ctx.destination);

      switch (tipo) {
        case 'chumbo':
          // Clique metálico seco e curto (tipo móvel encaixando)
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(800, agora);
          osc.frequency.exponentialRampToValueAtTime(120, agora + 0.04);
          ganho.gain.setValueAtTime(0.12, agora);
          ganho.gain.exponentialRampToValueAtTime(0.001, agora + 0.04);
          osc.start(agora);
          osc.stop(agora + 0.04);
          break;

        case 'papel':
          // Ruído suave de atrito e dobra de folha
          osc.type = 'sine';
          osc.frequency.setValueAtTime(220, agora);
          osc.frequency.linearRampToValueAtTime(340, agora + 0.08);
          ganho.gain.setValueAtTime(0.06, agora);
          ganho.gain.exponentialRampToValueAtTime(0.001, agora + 0.09);
          osc.start(agora);
          osc.stop(agora + 0.09);
          break;

        case 'pedra':
          // Pancada firme e seca de cinzel
          osc.type = 'square';
          osc.frequency.setValueAtTime(180, agora);
          osc.frequency.exponentialRampToValueAtTime(40, agora + 0.06);
          ganho.gain.setValueAtTime(0.15, agora);
          ganho.gain.exponentialRampToValueAtTime(0.001, agora + 0.06);
          osc.start(agora);
          osc.stop(agora + 0.06);
          break;

        case 'madeira':
          // Toque oco de bloco de madeira
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(320, agora);
          osc.frequency.exponentialRampToValueAtTime(80, agora + 0.07);
          ganho.gain.setValueAtTime(0.14, agora);
          ganho.gain.exponentialRampToValueAtTime(0.001, agora + 0.07);
          osc.start(agora);
          osc.stop(agora + 0.07);
          break;

        case 'carimbo':
          // Pressão grave de carimbada com tinta
          osc.type = 'sine';
          osc.frequency.setValueAtTime(140, agora);
          osc.frequency.exponentialRampToValueAtTime(50, agora + 0.08);
          ganho.gain.setValueAtTime(0.18, agora);
          ganho.gain.exponentialRampToValueAtTime(0.001, agora + 0.08);
          osc.start(agora);
          osc.stop(agora + 0.08);
          break;

        case 'entalhe':
          // Ranhura afiada
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(450, agora);
          osc.frequency.linearRampToValueAtTime(150, agora + 0.05);
          ganho.gain.setValueAtTime(0.08, agora);
          ganho.gain.exponentialRampToValueAtTime(0.001, agora + 0.05);
          osc.start(agora);
          osc.stop(agora + 0.05);
          break;
      }
    } catch {
      // Falha silenciosa caso áudio seja bloqueado pelo navegador
    }
  }
}

export const audioMotor = new ServicoAudio();
