

// --- Función para mostrar las ofertas del Bar ---
function mostrarBar() {
  document.body.innerHTML = `
  <div class="gallery">
   <img src="logo.png" alt="Logo">
   <img src="piña-colada.png" alt="piña">
  </div>
    <div class="botones">
      <button class="btn-bar" onclick="mostrarBar()">Bar</button>
      <button class="btn-cocina" onclick="toggleSubmenu()">Cocina</button>
    </div>
    <div id="submenu-cocina" class="submenu">
      <button onclick="mostrarPrincipal()">Menú Principal</button>
      <button onclick="mostrarComidaLigera()">Comida ligera</button>
      <button onclick="mostrarCenas()">Cenas</button>
    </div>
    <section class="menu-section">
      <h2>Cocteles</h2>
      <div class="menu-content" style="display:block;">
        <div class="menu-item"><p>Mojito</p><span class="price">$3.00</span></div>
        <div class="menu-item"><p>Cuba Libre</p><span class="price">$3.00</span></div>
        <div class="menu-item"><p>Piña Colada</p><span class="price">$3.00</span></div>
        <div class="menu-item"><p>Daiquirí</p><span class="price">$3.00</span></div>
        <div class="menu-item"><p>Cubata</p><span class="price">$4.00</span></div>
        <div class="menu-item"><p>Ron Collin</p><span class="price">$3.00</span></div>
        <div class="menu-item"><p>Tinto de verano</p><span class="price">$4.00</span></div>
        <div class="menu-item"><p>Sangria Tropical</p><span class="price">$4.00</span></div>
        <div class="menu-item"><p>Michelafa/Cerveza Importada</p><span class="price">$3.50</span></div>
        <div class="menu-item"><p>Michelada/Cerveza nacional</p><span class="price">$4.00</span></div>
        <div class="menu-item"><p>Gin Tonic</p><span class="price">$3.50</span></div>
        <div class="menu-item"><p>Blody Mary</p><span class="price">$3.50</span></div>
        <div class="menu-item"><p>Caipiriña</p><span class="price">$5.50</span></div>
        <div class="menu-item"><p>Caipiroska</p><span class="price">$5.50</span></div>
        <div class="menu-item"><p>Margarita</p><span class="price">$5.50</span></div>
        <div class="menu-item"><p>Canchanchara</p><span class="price">$4.00</span></div>
        <div class="menu-item"><p>Cubanito</p><span class="price">$4.00</span></div>
      </div>
    </section>
    <section class="menu-section">
      <h2>Jugos y otros</h2>
      <div class="menu-content" style="display:block;">
        <div class="menu-item"><p>Jugo de Frutas Tropicales</p><span class="price">$2.10</span></div>
        <div class="menu-item"><p>Limonada Natural</p><span class="price">$2.20</span></div>
        <div class="menu-item"><p>Limonada Frappe</p><span class="price">$2.30</span></div>
        <div class="menu-item"><p>Batido de Chocolate</p><span class="price">$3.70</span></div>
        <div class="menu-item"><p>Batido de Frutas Tropicales</p><span class="price">$3.60</span></div>
      </div>
    </section>
    <section class="menu-section">
      <h2>Agua Mineral</h2>
      <div class="menu-content" style="display:block;">
        <div class="menu-item"><p>Agua Mineral(500 ML)</p><span class="price">$1.50</span></div>
        <div class="menu-item"><p>Agua Mineral(1500 ML)</p><span class="price">$3.30</span></div>
    </section>
    <section class="menu-section">
      <h2>Agua Mineral Carbonatada</h2>
      <div class="menu-content" style="display:block;">
        <div class="menu-item"><p>Agua mimeral carbomatada(500 ML)</p><span class="price">$1.50</span></div>
        <div class="menu-item"><p>Agua mineral carbonatada(1500 ML)</p><span class="price">$3.30</span></div>
        <div class="menu-item"><p>Agua Tonica</p><span class="price">$2.00</span></div>
    </section>
    <section class="menu-section">
      <h2>Cerveza Nacional</h2>
      <div class="menu-content" style="display:block;">
        <div class="menu-item"><p>Cerveza Cristal</p><span class="price">$3.00</span></div>
        <div class="menu-item"><p>Cerveza Cristal Extra</p><span class="price">$3.00</span></div>
        <div class="menu-item"><p>Bucanero</p><span class="price">$3.00</span></div>
      </div>
    </section>
    <section class="menu-section">
      <h2>Cerveza Importada</h2>
      <div class="menu-content" style="display:block;">
        <div class="menu-item"><p>Cerveza Heinequen</p><span class="price">$3.00</span></div>
        <div class="menu-item"><p>Cerveza Corona</p><span class="price">$2.20</span></div>
        <div class="menu-item"><p>Cerveza Presidente</p><span class="price">$3.00</span></div>
    </section>
    <section class="menu-section">
      <h2>Botellas de avino</h2>
      <div class="menu-content" style="display:block;">
        <div class="menu-item"><p>Vino Tinto Viña Lanzar</p><span class="price">$30.00</span></div>
        <div class="menu-item"><p>Vino Tinto Finca del Viso</p><span class="price">$30.0</span></div>
        <div class="menu-item"><p>Vino Blanco Finca del Viso</p><span class="price">$30.00</span></div>
    </section>
    <section class="menu-section">
      <h2>Copas de Vino</h2>
      <div class="menu-content" style="display:block;">
        <div class="menu-item"><p>Blanco</p><span class="price">$4.00</span></div>
        <div class="menu-item"><p>Rosado</p><span class="price">$4.00</span></div>
        <div class="menu-item"><p>Tinto</p><span class="price">$4.30</span></div>
        <div class="menu-item"><p>Tinto especial (Gato Negro)</p><span class="price">$7.00</span></div>
    </section>
    <section class="menu-section">
      <h2>Café y Té</h2>
      <div class="menu-content" style="display:block;">
        <div class="menu-item"><p>Café expresso</p><span class="price">$1.30</span></div>
        <div class="menu-item"><p>Café Americano</p><span class="price">$1.60</span></div>
        <div class="menu-item"><p>Café con Leche</p><span class="price">$3.00</span></div>
        <div class="menu-item"><p>Café Capuchino</p><span class="price">$2.50</span></div>
        <div class="menu-item"><p>Café Caragillo</p><span class="price">$4.50</span></div>
        <div class="menu-item"><p>Café Cortada</p><span class="price">$2.50</span></div>
        <div class="menu-item"><p>Té</p><span class="price">$1.30</span></div>
    </section>
    <section class="menu-section">
      <h2>Ron Habana Club ( Tragos )</h2>
      <div class="menu-content" style="display:block;">
        <div class="menu-item"><p>Seleccion De Maestros</p><span class="price">$9.00</span></div>
        <div class="menu-item"><p>7 Años</p><span class="price">$6.00</span></div>
        <div class="menu-item"><p>Ritual</p><span class="price">$4.00</span></div>
        <div class="menu-item"><p>Añejo Espesial</p><span class="price">$4.00</span></div>
        <div class="menu-item"><p>Añejo Reserva</p><span class="price">$4.00</span></div>
        <div class="menu-item"><p>Añejo Blanco</p><span class="price">$3.00</span></div>
        <div class="menu-item"><p>Pacto Navío</p><span class="price">$9.00</span></div>
    </section>
    <section class="menu-section">
      <h2>Ron Santiago ( Tragos )</h2>
      <div class="menu-content" style="display:block;">
        <div class="menu-item"><p>8 Años</p><span class="price">$7.00</span></div>
        <div class="menu-item"><p>12 Años extra seco</p><span class="price">$8.00</span></div>
        <div class="menu-item"><p>11 Años</p><span class="price">$9.00</span></div>
        <div class="menu-item"><p>Añejo</p><span class="price">$4.00</span></div>
        <div class="menu-item"><p>Añejo Banco</p><span class="price">$3.00</span></div>
    </section>
    <section class="menu-section">
      <h2>Otros Destilados ( Tragos )</h2>
      <div class="menu-content" style="display:block;">
        <div class="menu-item"><p>Black Label</p><span class="price">$9.00</span></div>
        <div class="menu-item"><p>Vodka</p><span class="price">$5.00</span></div>
        <div class="menu-item"><p>Tequila</p><span class="price">$5.00</span></div>
        <div class="menu-item"><p>Wisky</p><span class="price">$5.00</span></div>
        <div class="menu-item"><p>Ginebra</p><span class="price">$3.00</span></div>
    </section>
  `;
}
// --- Función para desplegar/ocultar el submenú de Cocina ---
function toggleSubmenu() {
  const submenu = document.getElementById('submenu-cocina');
  if (submenu.style.display === 'flex') {
    submenu.style.display = 'none';
  } else {
    submenu.style.display = 'flex';
  }
}

// --- Función para restaurar el menú principal completo ---
function mostrarPrincipal() {
  document.body.innerHTML = `
    <header>Casa Zuleida&Viñola</header>
    <div class="gallery">
      <img src="logo.png" alt="Logo">
      <img src="papas.png" alt="papas">
    </div>
    <div class="botones">
      <button class="btn-bar" onclick="mostrarBar()">Bar</button>
      <button class="btn-cocina" onclick="toggleSubmenu()">Cocina</button>
    </div>
    <div id="submenu-cocina" class="submenu">
      <button onclick="mostrarPrincipal()">Plato Principal</button>
      <button onclick="mostrarComidaLigera()">Comida ligera</button>
      <button onclick="mostrarCenas()">Cenas</button>
    </div>

    <!-- Carta completa -->
    <section class="menu-section">
      <h2 class="toggle">Entrantes</h2>
      <div class="menu-content">
        <div class="menu-item"><p>Coctel de camarón</p><span class="price">$6.50</span></div>
        <div class="menu-item"><p>Coctel de atún</p><span class="price">$5.35</span></div>
        <div class="menu-item"><p>Sopa Tradiciolal</p><span class="price">$2.10</span></div>
        <div class="menu-item"><p>Ensalada fria de la casa</p><span class="price">$4.50</span></div>
        <div class="menu-item"><p>Entremés de jamón y queso</p><span class="price">$5.50</span></div>
      </div>
    </section>

    <section class="menu-section">
      <h2 class="toggle">Pollo</h2>
      <div class="menu-content">
        <div class="menu-item"><p>Punta de pollo</p><span class="price">$12.00</span></div>
        <div class="menu-item"><p>Suprema de pollo</p><span class="price">$13.00</span></div>
        <div class="menu-item"><p>Pollo frito</p><span class="price">$11.50</span></div>
        <div class="menu-item"><p>Bistec de pollo</p><span class="price">$12.50</span></div>
        <div class="menu-item"><p>Bistec de pollo gratinado</p><span class="price">$13.50</span></div>
      </div>
    </section>

    <section class="menu-section">
      <h2 class="toggle">Cerdo</h2>
      <div class="menu-content">
        <div class="menu-item"><p>Punta de cerdo grillé</p><span class="price">$11.50</span></div>
        <div class="menu-item"><p>Bistec de cerdo</p><span class="price">$11.00</span></div>
        <div class="menu-item"><p>Bistec de cerdo gratinado</p><span class="price">$13.50</span></div>
        <div class="menu-item"><p>Bistec de cerdo empanado</p><span class="price">$12.20</span></div>
        <div class="menu-item"><p>Cerdo asado buffet</p><span class="price">$15.00</span></div>
      </div>
    </section>

    <section class="menu-section">
      <h2 class="toggle">Asado al carbón</h2>
      <div class="menu-content">
        <div class="menu-item"><p>Pescado</p><span class="price">$15.00</span></div>
        <div class="menu-item"><p>Pollo</p><span class="price">$12.50</span></div>
        <div class="menu-item"><p>Cerdo</p><span class="price">$12.50</span></div>
        <div class="menu-item"><p>Camarón</p><span class="price">$12.50</span></div>
        <div class="menu-item"><p>Res</p><span class="price">$14.50</span></div>
        <div class="menu-item"><p>Brocheta de carne</p><span class="price">$17.00</span></div>
      </div>
    </section>

    <section class="menu-section">
      <h2 class="toggle">Brochetas</h2>
      <div class="menu-content">
        <div class="menu-item"><p>Brocheta de carne</p><span class="price">$11.50</span></div>
        <div class="menu-item"><p>Punta de cerdo grillé</p><span class="price">$11.50</span></div>
      </div>
    </section>

    <section class="menu-section bebidas">
      <h2 class="toggle">Res</h2>
      <div class="menu-content">
        <div class="menu-item"><p>Ropa vieja de res</p><span class="price">$13.50</span></div>
        <div class="menu-item"><p>Bistec grille</p><span class="price">$13.00</span></div>
      </div>
      <img class="pollo" src="pollo-frito1.png" alt="Pollo Frito">
    </section>
  `;

  activarToggle(); // reaplicar acordeón
}
// --- Función para mostrar Comida ligera ---
function mostrarComidaLigera() {
  document.body.innerHTML = `
    <header>Casa Zuleida&Viñola</header>
    <div class="gallery"><img src="logo.png" alt="Logo"></div>
    <div class="botones">
      <button class="btn-bar" onclick="mostrarBar()">Bar</button>
      <button class="btn-cocina" onclick="toggleSubmenu()">Cocina</button>
    </div>
    <div id="submenu-cocina" class="submenu">
      <button onclick="mostrarPrincipal()"><Plato Principal</button>
      <button onclick="mostrarComidaLigera()">Comida ligera</button>
      <button onclick="mostrarCenas()">Postres</button>
    </div>
    <section class="menu-section">
      <h2>Pizza</h2>
      <div class="menu-content" style="display:block;">
        <div class="menu-item"><p>Pizza Napolitana</p><span class="price">$5.30</span></div>
        <div class="menu-item"><p>Cerveza Corona</p><span class="price">$2.20</span></div>
        <div class="menu-item"><p>Cerveza Presidente</p><span class="price">$3.00</span></div>
    </section>
  `;
}

// --- Función para mostrar Cenas ---
function mostrarCenas() {
  document.body.innerHTML = `
    <header>Casa Zuleida&Viñola</header>
    <div class="gallery"><img src="logo.png" alt="Logo"></div>
    <div class="botones">
      <button class="btn-bar" onclick="mostrarBar()">Bar</button>
      <button class="btn-cocina" onclick="toggleSubmenu()">Cocina</button>
    </div>
    <div id="submenu-cocina" class="submenu">
      <button onclick="mostrarPrincipal()">Plato Principal</button>
      <button onclick="mostrarComidaLigera()">Comida ligera</button>
      <button onclick="mostrarCenas()">Postres</button>
    </div>
    <section class="menu-section">
      <h2>Postres</h2>
      <p>Aquí pondremos las opciones de cenas.</p>
    </section>
  `;
}