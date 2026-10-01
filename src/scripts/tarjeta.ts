import { birthdayData } from '../data/evento';

export function initTarjeta(): void {
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = birthdayData.fiesta.fecha.getTime() - now;

        if (distance >= 0) {
            const dias = document.getElementById('dias');
            const horas = document.getElementById('horas');
            const minutos = document.getElementById('minutos');
            const segundos = document.getElementById('segundos');

            if (dias) dias.innerText = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            if (horas) horas.innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            if (minutos) minutos.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            if (segundos) segundos.innerText = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
        }
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // --- LOGICA DEL REPRODUCTOR DE MUSICA ---
    const btnMusic = document.getElementById('btn-music');
    const audio = document.getElementById('audio-player') as HTMLAudioElement | null;
    const iconPlay = document.getElementById('icon-play');
    const iconPause = document.getElementById('icon-pause');
    
    let isPlaying = false;

    btnMusic?.addEventListener('click', () => {
        // Guardia: Si algun elemento no existe en el DOM, cortamos la ejecucion
        if (!audio || !iconPlay || !iconPause) return;
        
        if (isPlaying) {
            audio.pause();
            iconPlay.classList.remove('hidden');
            iconPause.classList.add('hidden');
        } else {
            audio.play();
            iconPlay.classList.add('hidden');
            iconPause.classList.remove('hidden');
        }
        isPlaying = !isPlaying;
    });

    // --- LOGICA DE NAVEGACION Y ENLACES ---
    document.getElementById('btn-misa')?.addEventListener('click', () => {
        window.open(birthdayData.misa?.lugar.mapaUrl, '_blank');
    });

    document.getElementById('btn-fiesta')?.addEventListener('click', () => {
        window.open(birthdayData.fiesta.lugar.mapaUrl, '_blank');
    });

    document.getElementById('btn-whatsapp')?.addEventListener('click', () => {
        window.open(`https://wa.me/${birthdayData.fiesta.confimacion.numeroWhatsapp}?text=¡Hola!%20Confirmo%20mi%20asistencia%20al%20cumple%20de%20${birthdayData.nombrePersona}.`, '_blank');
    });

    async function copyToClipboard(text: string): Promise<void> {
        if (navigator.clipboard?.writeText) {
            try {
                await navigator.clipboard.writeText(text);
                return;
            } catch {
                // Usar el respaldo cuando el navegador móvil rechaza Clipboard API.
            }
        }

        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);

        const copied = document.execCommand('copy');
        textarea.remove();

        if (!copied) throw new Error('No se pudo copiar el texto');
    }

    // --- LOGICA DE COPIAR AL PORTAPAPELES ---
    const copyButtons = document.querySelectorAll('.btn-copy');
    copyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.currentTarget as HTMLElement; 
            const textToCopy = target.getAttribute('data-copy');
            
            if (textToCopy) {
                copyToClipboard(textToCopy).then(() => {
                    target.parentElement?.classList.add('copied');
                }).catch(() => {
                    alert('No se pudo copiar el texto. Mantén presionado el valor para copiarlo.');
                });
            }
        });
    });
}