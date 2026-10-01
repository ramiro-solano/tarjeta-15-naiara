export interface Birthday {
	nombrePersona: string;
	misa?: {
		lugar: {
			nombre: string;
			direccion: string;
			mapaUrl: string;
		},
		fechaYHora: string;
	};
	fiesta: {
		lugar: {
			nombre: string;
			direccion: string;
			mapaUrl: string;
		},
		fecha: Date;
		fechaYHora: string;
		codigoVestimenta: string;
		confimacion: {
			fechaLimite: string;
			numeroWhatsapp: string;
		}
	};
	regalos: {
		titular: string;
		cbucvu?: string;
		alias?: string;
	}
}

export const birthdayData: Birthday = {
  nombrePersona: 'Naiara',
  misa: {
	lugar: {
      nombre: 'Iglesia Catedral',
      direccion: '24 de Septiembre 420 (esquina Congreso)',
      mapaUrl: 'https://maps.app.goo.gl/RHkjDRWeb2Kjkq8n7',
	},
    fechaYHora: '12 de octubre a las 20:00 hs',
  },
  fiesta: {
    lugar: {
      nombre: 'Camila Salon De Eventos',
      direccion: 'Avenida colon 3500',
      mapaUrl: 'https://maps.app.goo.gl/GME77nt3q4p9WyA96',
    },
    fecha: new Date('2026-10-17T22:00:00'),
    fechaYHora: '17 de octubre a las 22:00 hs',
    codigoVestimenta: 'Gala',
	confimacion: {
	  fechaLimite: '10 de octubre',
	  numeroWhatsapp: '3815669132',
  },
  },
  regalos: {
    titular: 'Naiara Guadalupe Gramajo',
    alias: 'naiara.112.mp',
  },
};