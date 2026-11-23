/* ============================================================================
   js/portals.js
   CATÁLOGO CENTRALIZADO DE PORTALES DE "INTELIGENCIA ECONÓMICA"
   
   ¿Cómo agregar o activar un nuevo portal?
   1. Busca el portal en la lista PORTALS_CATALOG (o copia y pega un bloque {}).
   2. Cambia "status" de 'upcoming' a 'active'.
   3. Coloca la dirección web real en "url" (ej. 'https://rotciv2008.github.io/Macro/').
   4. Guarda el archivo: la tarjeta se actualizará automáticamente en la web.
   ============================================================================ */

window.PORTALS_CATALOG = [
  {
    id: 'ipc-colombia',
    title: 'IPC Colombia',
    icon: '📊',
    status: 'active', // 'active' = habilita el botón de ingreso | 'upcoming' = botón deshabilitado
    statusLabel: 'Activo · En vivo',
    url: 'https://rotciv2008.github.io/EconomicsIntelligence/',
    description:
      'Análisis integral de la inflación en Colombia: evolución histórica, poder adquisitivo, divisiones de gasto, niveles de ingreso, ciudades, subclases y tasas BanRep.',
    topics: ['Inflación DANE', 'Poder Adquisitivo', 'Ciudades y Subclases', 'Tasas BanRep']
  },
  {
    id: 'indicadores-macro',
    title: 'Indicadores Macroeconómicos',
    icon: '📈',
    status: 'upcoming',
    statusLabel: 'Próximamente',
    url: '', // Cuando lo publiques en GitHub Pages, pega aquí su URL y cambia status a 'active'
    description:
      'Seguimiento estructural de la economía colombiana: crecimiento del PIB, mercado laboral, tasas de interés, tasa de cambio (TRM), deuda pública y balanza comercial.',
    topics: ['PIB y Crecimiento', 'Empleo', 'Política Monetaria', 'TRM y Sector Externo']
  },
  {
    id: 'mercado-inmobiliario',
    title: 'Mercado Inmobiliario',
    icon: '🏢',
    status: 'active',
    statusLabel: 'Activo · En vivo',
    url: 'https://rotciv2008.github.io/realstate/',
    description:
      'Inteligencia territorial y sectorial: evolución de precios por metro cuadrado, índices de costos de construcción y dinámica urbana.',
    topics: ['Precios por m²', 'Valorización', 'Arriendos', 'Análisis Territorial']
  }
];
