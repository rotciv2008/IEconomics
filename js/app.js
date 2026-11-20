/* ============================================================================
   js/app.js
   LÓGICA PRINCIPAL DEL PORTAL GENERAL "INTELIGENCIA ECONÓMICA"
   
   Funciones principales:
   1. Lee la lista de portales definida en js/portals.js (window.PORTALS_CATALOG).
   2. Construye dinámicamente las tarjetas visuales en el contenedor #portalsGrid.
   3. Permite filtrar entre "Todos", "Activos" y "Próximos lanzamientos".
   4. Actualiza el contador superior con el número de portales disponibles.
   ============================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('portalsGrid');
  const counter = document.getElementById('portalCounter');
  const filterButtons = document.querySelectorAll('#sidebarFilters button[data-filter]');
  const portals = Array.isArray(window.PORTALS_CATALOG) ? window.PORTALS_CATALOG : [];

  /**
   * Dibuja las tarjetas de los portales según el filtro seleccionado.
   * @param {string} filter - Puede ser 'all', 'active' o 'upcoming'.
   */
  function renderPortals(filter = 'all') {
    if (!grid) return;

    // 1. Filtrar la lista según el botón presionado en la barra lateral
    const filtered = portals.filter((portal) => {
      if (filter === 'all') return true;
      return portal.status === filter;
    });

    // 2. Actualizar el contador de la barra superior
    const activeCount = portals.filter((p) => p.status === 'active').length;
    if (counter) {
      counter.textContent = `${activeCount} portal activo · ${portals.length} en total`;
    }

    // 3. Generar el HTML de cada tarjeta
    grid.innerHTML = filtered
      .map((portal) => {
        const isActive = portal.status === 'active' && Boolean(portal.url);

        // Etiquetas temáticas (pills) dentro de cada tarjeta
        const topicsHtml = (portal.topics || [])
          .map((topic) => `<span class="topic-pill">${topic}</span>`)
          .join('');

        // Botón activo con enlace externo vs. botón en espera
        const buttonHtml = isActive
          ? `<a class="btn-portal" href="${portal.url}" target="_blank" rel="noopener noreferrer">Ingresar al portal ↗</a>`
          : `<span class="btn-portal disabled">En desarrollo</span>`;

        return `
          <article class="portal-card">
            <div>
              <div class="portal-card-top">
                <div class="portal-icon" aria-hidden="true">${portal.icon || '📊'}</div>
                <span class="badge ${isActive ? 'active' : 'upcoming'}">${portal.statusLabel}</span>
              </div>
              <h2>${portal.title}</h2>
              <p>${portal.description}</p>
              <div class="portal-topics">${topicsHtml}</div>
            </div>
            <div class="portal-actions">
              ${buttonHtml}
            </div>
          </article>
        `;
      })
      .join('');
  }

  // 4. Conectar los botones de filtro del menú lateral
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderPortals(btn.dataset.filter);
    });
  });

  // 5. Renderizado inicial al abrir la página
  renderPortals('all');
});