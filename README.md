# 💌 Invitación Digital - Mis 15 Años (Naiara)

Landing page interactiva para invitación de 15 años, optimizada para dispositivos móviles y diseñada con un enfoque de alto rendimiento, bajo consumo de datos y carga ultrarrápida.

---

## 🚀 Tecnologías

* **[Astro 5](https://astro.build/)** - Framework web enfocado en contenido y rendimiento (cero JS innecesario).
* **[Tailwind CSS](https://tailwindcss.com/)** - Estilos utilitarios y diseño responsivo *mobile-first*.
* **TypeScript** - Lógica interactiva tipada y mantenible.
* **Tipografías locales** - Montserrat y Rouge Script alojadas en local para eliminar bloqueos de red externos.

---

## ✨ Características

* **Mobile First:** Maquetado vertical optimizado para visualización fluida en pantallas de smartphones.
* **Copia rápida de datos bancarios:** Integración con Clipboard API para copiar el alias/CBU de regalos al portapapeles con feedback visual en un toque.
* **Confirmación ágil (RSVP):** Enlace directo con mensaje preconfigurado hacia WhatsApp.
* **Acceso a ubicación:** Enlace directo a Google Maps para navegación rápida hacia el salón.
* **Estructura desacoplada:** Centralización de variables y datos del evento (`birthdayData`) para fácil reutilización en futuros eventos.

---

## 📁 Estructura del Proyecto

```text
├── public/
│   ├── fonts/          # Tipografías locales (.ttf / .woff2)
│   └── images/         # Imágenes estáticas y optimizadas
├── src/
│   ├── components/     # Componentes de la interfaz
│   ├── data/           # Datos del evento (nombre, fechas, alias, etc.)
│   ├── pages/          # Páginas y rutas de Astro
│   ├── scripts/        # Lógica en cliente (interacciones, clipboard, timers)
│   └── styles/         # Estilos globales y configuración @theme
├── astro.config.mjs
├── package.json
└── tsconfig.json