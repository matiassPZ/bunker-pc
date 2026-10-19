// Generador vectorial SVG ultranítido para sistemas de refrigeración (Aire y Líquida)
function generarSvgCooler(c) {
    if (c._cachedSvg) return c._cachedSvg;
    const esLiquida = (c.tipo && c.tipo.toLowerCase().includes('quid')) || (c.tamano && c.tamano.includes('AIO'));
    const color = c.color || (esLiquida ? '#00e5ff' : '#00ff88');
    const esLcd = (c.tamano && (c.tamano.includes('Display') || c.tamano.includes('LCD'))) || (c.modelo && (c.modelo.includes('LCD') || c.modelo.includes('Digital')));
    let svg = '';

    if (esLiquida) {
        const es360 = (c.tamano && c.tamano.includes('360')) || (c.modelo && c.modelo.includes('360'));
        svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" width="100%" height="100%">
            <defs>
                <linearGradient id="bg_${c.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#141822"/>
                    <stop offset="100%" stop-color="#0a0c10"/>
                </linearGradient>
                <linearGradient id="rad_${c.id}" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#2a303c"/>
                    <stop offset="100%" stop-color="#14171d"/>
                </linearGradient>
                <filter id="glow_${c.id}" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                </filter>
            </defs>
            <rect width="280" height="200" rx="12" fill="url(#bg_${c.id})" stroke="#1f2533" stroke-width="1.5"/>
            <!-- Radiador Superior -->
            <rect x="25" y="16" width="230" height="24" rx="4" fill="url(#rad_${c.id})" stroke="#363f50" stroke-width="1"/>
            <line x1="30" y1="28" x2="250" y2="28" stroke="#1d222a" stroke-width="2" stroke-dasharray="3,3"/>
            <!-- Ventiladores del Radiador -->
            ${es360 ? `
                <circle cx="65" cy="28" r="9" fill="#0d0e12" stroke="${color}" stroke-width="1.5" opacity="0.85"/>
                <circle cx="140" cy="28" r="9" fill="#0d0e12" stroke="${color}" stroke-width="1.5" opacity="0.85"/>
                <circle cx="215" cy="28" r="9" fill="#0d0e12" stroke="${color}" stroke-width="1.5" opacity="0.85"/>
            ` : `
                <circle cx="95" cy="28" r="10" fill="#0d0e12" stroke="${color}" stroke-width="1.5" opacity="0.85"/>
                <circle cx="185" cy="28" r="10" fill="#0d0e12" stroke="${color}" stroke-width="1.5" opacity="0.85"/>
            `}
            <!-- Mangueras Trenzadas -->
            <path d="M 50 38 C 50 85, 110 85, 120 115" fill="none" stroke="#2b313d" stroke-width="6" stroke-linecap="round"/>
            <path d="M 50 38 C 50 85, 110 85, 120 115" fill="none" stroke="#161920" stroke-width="4" stroke-dasharray="2,2"/>
            <path d="M 68 38 C 68 95, 125 95, 135 115" fill="none" stroke="#2b313d" stroke-width="6" stroke-linecap="round"/>
            <path d="M 68 38 C 68 95, 125 95, 135 115" fill="none" stroke="#161920" stroke-width="4" stroke-dasharray="2,2"/>
            <!-- Bomba de Agua CPU (Bloque) -->
            <circle cx="140" cy="132" r="34" fill="#101318" stroke="#2c3342" stroke-width="2"/>
            <circle cx="140" cy="132" r="27" fill="#0a0c10" stroke="${color}" stroke-width="2.5" filter="url(#glow_${c.id})"/>
            ${esLcd ? `
                <rect x="122" y="117" width="36" height="30" rx="4" fill="#040608" stroke="#222" stroke-width="1"/>
                <text x="140" y="132" font-family="Consolas, monospace" font-size="11" font-weight="bold" fill="#00ff88" text-anchor="middle">34°C</text>
                <text x="140" y="142" font-family="sans-serif" font-size="6" font-weight="bold" fill="${color}" text-anchor="middle">PUMP OK</text>
            ` : `
                <circle cx="140" cy="132" r="18" fill="#131720" stroke="${color}" stroke-width="1.5" stroke-dasharray="4,2"/>
                <circle cx="140" cy="132" r="10" fill="${color}" opacity="0.3" filter="url(#glow_${c.id})"/>
                <text x="140" y="135" font-family="sans-serif" font-size="7.5" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1">${c.marca.toUpperCase()}</text>
            `}
            <!-- Etiqueta Inferior -->
            <text x="140" y="184" font-family="sans-serif" font-size="8.5" font-weight="800" fill="${color}" text-anchor="middle" letter-spacing="1.5">LIQUID COOLER • ${(c.tamano || 'AIO').toUpperCase()}</text>
        </svg>`;
    } else {
        const esDobleTorre = (c.tamano && c.tamano.includes('Doble'));
        svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" width="100%" height="100%">
            <defs>
                <linearGradient id="bg_${c.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#141822"/>
                    <stop offset="100%" stop-color="#0a0c10"/>
                </linearGradient>
                <linearGradient id="fin_${c.id}" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#3d4452"/>
                    <stop offset="50%" stop-color="#555f72"/>
                    <stop offset="100%" stop-color="#2a303c"/>
                </linearGradient>
                <filter id="glow_${c.id}" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                </filter>
            </defs>
            <rect width="280" height="200" rx="12" fill="url(#bg_${c.id})" stroke="#1f2533" stroke-width="1.5"/>
            <!-- Base de Cobre Pulido -->
            <rect x="105" y="152" width="70" height="12" rx="2" fill="#c86d3b" stroke="#e07a43" stroke-width="1"/>
            <!-- Heatpipes de Cobre Direct Touch -->
            <path d="M 115 152 L 115 65" stroke="#d47942" stroke-width="4" stroke-linecap="round"/>
            <path d="M 128 152 L 128 60" stroke="#d47942" stroke-width="4" stroke-linecap="round"/>
            <path d="M 152 152 L 152 60" stroke="#d47942" stroke-width="4" stroke-linecap="round"/>
            <path d="M 165 152 L 165 65" stroke="#d47942" stroke-width="4" stroke-linecap="round"/>
            ${esDobleTorre ? `
                <!-- Doble Torre de Aletas de Aluminio -->
                <rect x="75" y="55" width="55" height="92" rx="3" fill="url(#fin_${c.id})" stroke="#222832" stroke-width="1"/>
                <rect x="150" y="55" width="55" height="92" rx="3" fill="url(#fin_${c.id})" stroke="#222832" stroke-width="1"/>
                <!-- Ranuras de Aletas Disipadoras -->
                <line x1="77" y1="70" x2="128" y2="70" stroke="#1d222a" stroke-width="1.5"/>
                <line x1="77" y1="85" x2="128" y2="85" stroke="#1d222a" stroke-width="1.5"/>
                <line x1="77" y1="100" x2="128" y2="100" stroke="#1d222a" stroke-width="1.5"/>
                <line x1="77" y1="115" x2="128" y2="115" stroke="#1d222a" stroke-width="1.5"/>
                <line x1="77" y1="130" x2="128" y2="130" stroke="#1d222a" stroke-width="1.5"/>
                <line x1="152" y1="70" x2="203" y2="70" stroke="#1d222a" stroke-width="1.5"/>
                <line x1="152" y1="85" x2="203" y2="85" stroke="#1d222a" stroke-width="1.5"/>
                <line x1="152" y1="100" x2="203" y2="100" stroke="#1d222a" stroke-width="1.5"/>
                <line x1="152" y1="115" x2="203" y2="115" stroke="#1d222a" stroke-width="1.5"/>
                <line x1="152" y1="130" x2="203" y2="130" stroke="#1d222a" stroke-width="1.5"/>
                <!-- Ventilador Central -->
                <rect x="127" y="58" width="26" height="86" rx="2" fill="#0d0e12" stroke="${color}" stroke-width="1.5" filter="url(#glow_${c.id})"/>
                <circle cx="140" cy="101" r="10" fill="${color}" opacity="0.8"/>
            ` : `
                <!-- Torre Simple de Aletas -->
                <rect x="90" y="55" width="100" height="92" rx="3" fill="url(#fin_${c.id})" stroke="#222832" stroke-width="1"/>
                <line x1="92" y1="70" x2="188" y2="70" stroke="#1d222a" stroke-width="1.5"/>
                <line x1="92" y1="85" x2="188" y2="85" stroke="#1d222a" stroke-width="1.5"/>
                <line x1="92" y1="100" x2="188" y2="100" stroke="#1d222a" stroke-width="1.5"/>
                <line x1="92" y1="115" x2="188" y2="115" stroke="#1d222a" stroke-width="1.5"/>
                <line x1="92" y1="130" x2="188" y2="130" stroke="#1d222a" stroke-width="1.5"/>
                <!-- Ventilador Frontal ARGB -->
                <circle cx="140" cy="101" r="36" fill="#0d0e12" stroke="${color}" stroke-width="2" filter="url(#glow_${c.id})"/>
                <circle cx="140" cy="101" r="14" fill="#1a1e28" stroke="${color}" stroke-width="1.5"/>
            `}
            ${esLcd ? `
                <!-- Pantalla Digital Superior -->
                <rect x="110" y="44" width="60" height="15" rx="3" fill="#000" stroke="${color}" stroke-width="1"/>
                <text x="140" y="55" font-family="Consolas, monospace" font-size="9" font-weight="bold" fill="#00ff88" text-anchor="middle">32°C</text>
            ` : `
                <!-- Tapa Superior -->
                <rect x="88" y="49" width="104" height="7" rx="2" fill="#181c24" stroke="#2d3545" stroke-width="1"/>
            `}
            <!-- Etiqueta Inferior -->
            <text x="140" y="184" font-family="sans-serif" font-size="8.5" font-weight="800" fill="${color}" text-anchor="middle" letter-spacing="1.5">AIR COOLER • ${(c.tamano || 'TORRE').toUpperCase()}</text>
        </svg>`;
    }
    const uri = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
    c._cachedSvg = uri;
    return uri;
}

// 1. NUESTRA BASE DE DATOS
const dbComponentes = {
    "procesadores": [
        // --- INTEL CORE (LGA 1200 - 10ma y 11va Gen) ---
        { "id": "cpu_i3_10100f", "marca": "Intel", "modelo": "Core i3-10100F", "socket": "LGA 1200", "precio": 70, "imagen": "imagenes/corei3-1011f.jpg" },
        { "id": "cpu_i5_10400f", "marca": "Intel", "modelo": "Core i5-10400F", "socket": "LGA 1200", "precio": 105, "imagen": "imagenes/corei5-10400f.jpg" },
        { "id": "cpu_i5_10400", "marca": "Intel", "modelo": "Core i5-10400", "socket": "LGA 1200", "precio": 120, "imagen": "imagenes/corei5-10400f.jpg" },
        { "id": "cpu_i5_11400f", "marca": "Intel", "modelo": "Core i5-11400F", "socket": "LGA 1200", "precio": 130, "imagen": "imagenes/corei5-11400f.jpg" },
        { "id": "cpu_i7_10700k", "marca": "Intel", "modelo": "Core i7-10700K", "socket": "LGA 1200", "precio": 220, "imagen": "imagenes/corei7-10700k.jpg" },
        { "id": "cpu_i9_10900k", "marca": "Intel", "modelo": "Core i9-10900K", "socket": "LGA 1200", "precio": 350, "imagen": "imagenes/corei9-10900k.jpg" },
        // --- INTEL CORE i3 ---
        { "id": "cpu_i3_12100f", "marca": "Intel", "modelo": "Core i3-12100F", "socket": "LGA 1700", "precio": 100, "imagen": "imagenes/corei3-12100f.jpg" },
        { "id": "cpu_i3_12100", "marca": "Intel", "modelo": "Core i3-12100", "socket": "LGA 1700", "precio": 130, "imagen": "imagenes/corei3-12100.jpg" },
        { "id": "cpu_i3_13100f", "marca": "Intel", "modelo": "Core i3-13100F", "socket": "LGA 1700", "precio": 115, "imagen": "imagenes/corei3-13100f.jpg" },
        { "id": "cpu_i3_13100", "marca": "Intel", "modelo": "Core i3-13100", "socket": "LGA 1700", "precio": 140, "imagen": "imagenes/corei3-13100.jpg" },
        { "id": "cpu_i3_14100f", "marca": "Intel", "modelo": "Core i3-14100F", "socket": "LGA 1700", "precio": 125, "imagen": "imagenes/corei3-14100f.jpg" },

        // --- INTEL CORE i5 ---
        { "id": "cpu_i5_12400f", "marca": "Intel", "modelo": "Core i5-12400F", "socket": "LGA 1700", "precio": 150, "imagen": "imagenes/corei5-12400f.jpg" },
        { "id": "cpu_i5_12600k", "marca": "Intel", "modelo": "Core i5-12600K", "socket": "LGA 1700", "precio": 200, "imagen": "imagenes/corei5-12600k.jpg" },
        { "id": "cpu_i5_13400f", "marca": "Intel", "modelo": "Core i5-13400F", "socket": "LGA 1700", "precio": 210, "imagen": "imagenes/corei5-13400f.jpg" },
        { "id": "cpu_i5_13600k", "marca": "Intel", "modelo": "Core i5-13600K", "socket": "LGA 1700", "precio": 300, "imagen": "imagenes/corei5-13600k.jpg" },
        { "id": "cpu_i5_14400f", "marca": "Intel", "modelo": "Core i5-14400F", "socket": "LGA 1700", "precio": 230, "imagen": "imagenes/corei5-14400f.jpg" },

        // --- INTEL CORE i7 ---
        { "id": "cpu_i7_12700kf", "marca": "Intel", "modelo": "Core i7-12700KF", "socket": "LGA 1700", "precio": 280, "imagen": "imagenes/corei7-12700kf.jpg" },
        { "id": "cpu_i7_12700k", "marca": "Intel", "modelo": "Core i7-12700K", "socket": "LGA 1700", "precio": 310, "imagen": "imagenes/corei7-12700k.jpg" },
        { "id": "cpu_i7_13700kf", "marca": "Intel", "modelo": "Core i7-13700KF", "socket": "LGA 1700", "precio": 380, "imagen": "imagenes/corei7-13700kf.jpg" },
        { "id": "cpu_i7_13700k", "marca": "Intel", "modelo": "Core i7-13700K", "socket": "LGA 1700", "precio": 400, "imagen": "imagenes/corei7-13700k.jpg" },
        { "id": "cpu_i7_14700k", "marca": "Intel", "modelo": "Core i7-14700K", "socket": "LGA 1700", "precio": 430, "imagen": "imagenes/corei7-14700k.jpg" },

        // --- INTEL CORE i9 ---
        { "id": "cpu_i9_12900k", "marca": "Intel", "modelo": "Core i9-12900K", "socket": "LGA 1700", "precio": 450, "imagen": "imagenes/corei9-12900k.jpg" },
        { "id": "cpu_i9_12900kf", "marca": "Intel", "modelo": "Core i9-12900KF", "socket": "LGA 1700", "precio": 430, "imagen": "imagenes/corei9-12900kf.jpg" },
        { "id": "cpu_i9_13900k", "marca": "Intel", "modelo": "Core i9-13900K", "socket": "LGA 1700", "precio": 550, "imagen": "imagenes/corei9-13900k.jpg" },
        { "id": "cpu_i9_13900kf", "marca": "Intel", "modelo": "Core i9-13900KF", "socket": "LGA 1700", "precio": 530, "imagen": "imagenes/corei9-13900kf.jpg" },
        { "id": "cpu_i9_14900k", "marca": "Intel", "modelo": "Core i9-14900K", "socket": "LGA 1700", "precio": 600, "imagen": "imagenes/corei9-14900k.jpg" },

        // --- AMD RYZEN 3 ---
        { "id": "cpu_r3_4100", "marca": "AMD", "modelo": "Ryzen 3 4100", "socket": "AM4", "precio": 70, "imagen": "imagenes/r3-4100.jpg" },
        { "id": "cpu_r3_3100", "marca": "AMD", "modelo": "Ryzen 3 3100", "socket": "AM4", "precio": 85, "imagen": "imagenes/r3-3100.jpg" },
        { "id": "cpu_r3_3300x", "marca": "AMD", "modelo": "Ryzen 3 3300X", "socket": "AM4", "precio": 120, "imagen": "imagenes/r3-3300x.jpg" },
        { "id": "cpu_r3_3200g", "marca": "AMD", "modelo": "Ryzen 3 3200G", "socket": "AM4", "precio": 90, "imagen": "imagenes/r3-3200g.jpg" },
        { "id": "cpu_r3_2200g", "marca": "AMD", "modelo": "Ryzen 3 2200G", "socket": "AM4", "precio": 60, "imagen": "imagenes/r3-2200g.jpg" },

        // --- AMD RYZEN 5 ---
        { "id": "cpu_r5_7600x", "marca": "AMD", "modelo": "Ryzen 5 7600X", "socket": "AM5", "precio": 230, "imagen": "imagenes/r5-7600x.jpg" },
        { "id": "cpu_r5_7600", "marca": "AMD", "modelo": "Ryzen 5 7600", "socket": "AM5", "precio": 210, "imagen": "imagenes/r5-7600.jpg" },
        { "id": "cpu_r5_5600x", "marca": "AMD", "modelo": "Ryzen 5 5600X", "socket": "AM4", "precio": 150, "imagen": "imagenes/r5-5600x.jpg" },
        { "id": "cpu_r5_5600g", "marca": "AMD", "modelo": "Ryzen 5 5600G", "socket": "AM4", "precio": 130, "imagen": "imagenes/r5-5600g.jpg" },
        { "id": "cpu_r5_5500", "marca": "AMD", "modelo": "Ryzen 5 5500", "socket": "AM4", "precio": 100, "imagen": "imagenes/r5-5500.jpg" },

        // --- AMD RYZEN 7 ---
        { "id": "cpu_r7_7800x3d", "marca": "AMD", "modelo": "Ryzen 7 7800X3D", "socket": "AM5", "precio": 400, "imagen": "imagenes/r7-7800x3d.jpg" },
        { "id": "cpu_r7_7700x", "marca": "AMD", "modelo": "Ryzen 7 7700X", "socket": "AM5", "precio": 320, "imagen": "imagenes/r7-7700x.jpg" },
        { "id": "cpu_r7_5800x3d", "marca": "AMD", "modelo": "Ryzen 7 5800X3D", "socket": "AM4", "precio": 330, "imagen": "imagenes/r7-5700x3d.jpg" },
        { "id": "cpu_r7_5800x", "marca": "AMD", "modelo": "Ryzen 7 5800X", "socket": "AM4", "precio": 210, "imagen": "imagenes/r7-5800x.jpg" },
        { "id": "cpu_r7_5700g", "marca": "AMD", "modelo": "Ryzen 7 5700G", "socket": "AM4", "precio": 180, "imagen": "imagenes/r7-5700g.jpg" },

        // --- AMD RYZEN 9 ---
        { "id": "cpu_r9_7950x3d", "marca": "AMD", "modelo": "Ryzen 9 7950X3D", "socket": "AM5", "precio": 700, "imagen": "imagenes/r9-7950x3d.jpg" },
        { "id": "cpu_r9_7900x", "marca": "AMD", "modelo": "Ryzen 9 7900X", "socket": "AM5", "precio": 420, "imagen": "imagenes/r9-7900x.jpg" },
        { "id": "cpu_r9_5950x", "marca": "AMD", "modelo": "Ryzen 9 5950X", "socket": "AM4", "precio": 450, "imagen": "imagenes/r9-5950x.jpg" },
        { "id": "cpu_r9_5900x", "marca": "AMD", "modelo": "Ryzen 9 5900X", "socket": "AM4", "precio": 300, "imagen": "imagenes/r9-5900x.jpg" },
        { "id": "cpu_r9_3900x", "marca": "AMD", "modelo": "Ryzen 9 3900X", "socket": "AM4", "precio": 250, "imagen": "imagenes/r9-3900x.jpg" },

    ],
    "placasBase": [
        // --- INTEL: SOCKET LGA 1700 (12va, 13va y 14va Gen) ---
        { "id": "mb_1700_z790_maximus", "marca": "ASUS", "modelo": "ROG MAXIMUS Z790 HERO", "socket": "LGA 1700", "tipoRam": "DDR5", "precio": 650, "imagen": "imagenes/z790hero.jpg" },
        { "id": "mb_1700_z790_godlike", "marca": "MSI", "modelo": "MEG Z790 GODLIKE", "socket": "LGA 1700", "tipoRam": "DDR5", "precio": 1200, "imagen": "imagenes/z790meg.jpg" },
        { "id": "mb_1700_z790_aorus_m", "marca": "Gigabyte", "modelo": "Z790 AORUS MASTER", "socket": "LGA 1700", "tipoRam": "DDR5", "precio": 480, "imagen": "imagenes/z790aorus.jpg" },
        { "id": "mb_1700_z790_tuf", "marca": "ASUS", "modelo": "TUF GAMING Z790-PLUS WIFI", "socket": "LGA 1700", "tipoRam": "DDR5", "precio": 280, "imagen": "imagenes/z790tuf.jpg" },
        { "id": "mb_1700_z790_pro_a", "marca": "MSI", "modelo": "PRO Z790-A WIFI", "socket": "LGA 1700", "tipoRam": "DDR5", "precio": 240, "imagen": "imagenes/z790awifi.jpg" },
        { "id": "mb_1700_b760_strix_f", "marca": "ASUS", "modelo": "ROG STRIX B760-F GAMING WIFI", "socket": "LGA 1700", "tipoRam": "DDR5", "precio": 260, "imagen": "imagenes/b760fgaming.jpg" },
        { "id": "mb_1700_b760_aorus_e", "marca": "Gigabyte", "modelo": "B760 AORUS ELITE AX", "socket": "LGA 1700", "tipoRam": "DDR5", "precio": 210, "imagen": "imagenes/b760aorus.jpg" },
        { "id": "mb_1700_b760_tomahawk", "marca": "MSI", "modelo": "MAG B760 TOMAHAWK WIFI", "socket": "LGA 1700", "tipoRam": "DDR5", "precio": 230, "imagen": "imagenes/b760tomahawk.jpg" },
        { "id": "mb_1700_b760_steel", "marca": "ASRock", "modelo": "B760M Steel Legend WiFi", "socket": "LGA 1700", "tipoRam": "DDR5", "precio": 180, "imagen": "imagenes/b760msteel.jpg" },
        { "id": "mb_1700_b760_prime_d4", "marca": "ASUS", "modelo": "Prime B760-PLUS D4", "socket": "LGA 1700", "tipoRam": "DDR4", "precio": 160, "imagen": "imagenes/b760plusd4.jpg" },
        { "id": "mb_1700_b760_pro_d4", "marca": "MSI", "modelo": "PRO B760M-A WIFI DDR4", "socket": "LGA 1700", "tipoRam": "DDR4", "precio": 150, "imagen": "imagenes/b760mwifi.jp.png" },
        { "id": "mb_1700_b660_ds3h", "marca": "Gigabyte", "modelo": "B660M DS3H", "socket": "LGA 1700", "tipoRam": "DDR4", "precio": 110, "imagen": "imagenes/b660mds3h.jpg" },
        { "id": "mb_1700_b660_tuf", "marca": "ASUS", "modelo": "TUF GAMING B660M-PLUS WIFI D4", "socket": "LGA 1700", "tipoRam": "DDR4", "precio": 170, "imagen": "imagenes/b660mplus.jpg" },
        { "id": "mb_1700_b660_mortar", "marca": "MSI", "modelo": "MAG B660M MORTAR WIFI DDR4", "socket": "LGA 1700", "tipoRam": "DDR4", "precio": 190, "imagen": "imagenes/b660mmortar.jpg" },
        { "id": "mb_1700_h610_prime", "marca": "ASUS", "modelo": "Prime H610M-E D4", "socket": "LGA 1700", "tipoRam": "DDR4", "precio": 90, "imagen": "imagenes/Prime H610M-E D4.jpg" },
        { "id": "mb_1700_h610_asrock", "marca": "ASRock", "modelo": "H610M-HDV/M.2", "socket": "LGA 1700", "tipoRam": "DDR4", "precio": 85, "imagen": "imagenes/H610M-HDVM.2(M1).jpg" },

        // --- INTEL: SOCKET LGA 1200 (10ma y 11va Gen) ---
        { "id": "mb_1200_z590_maximus", "marca": "ASUS", "modelo": "ROG MAXIMUS XIII HERO", "socket": "LGA 1200", "tipoRam": "DDR4", "precio": 450, "imagen": "imagenes/ROG MAXIMUS XIII HERO.jpg" },
        { "id": "mb_1200_z590_ace", "marca": "MSI", "modelo": "MEG Z590 ACE", "socket": "LGA 1200", "tipoRam": "DDR4", "precio": 400, "imagen": "imagenes/MEG Z590 ACE.jpg" },
        { "id": "mb_1200_z590_aorus", "marca": "Gigabyte", "modelo": "Z590 AORUS ELITE AX", "socket": "LGA 1200", "tipoRam": "DDR4", "precio": 230, "imagen": "imagenes/Z590 AORUS ELITE AX.jpg" },
        { "id": "mb_1200_z590_tuf", "marca": "ASUS", "modelo": "TUF GAMING Z590-PLUS", "socket": "LGA 1200", "tipoRam": "DDR4", "precio": 200, "imagen": "imagenes/TUF GAMING Z590-PLUS.jpg" },
        { "id": "mb_1200_z490_edge", "marca": "MSI", "modelo": "MPG Z490 GAMING EDGE WIFI", "socket": "LGA 1200", "tipoRam": "DDR4", "precio": 210, "imagen": "imagenes/MPG Z490 GAMING EDGE WIFI.jpg" },
        { "id": "mb_1200_b560_strix", "marca": "ASUS", "modelo": "ROG STRIX B560-A GAMING WIFI", "socket": "LGA 1200", "tipoRam": "DDR4", "precio": 180, "imagen": "imagenes/ROG STRIX B560-A GAMING WIFI.jpg" },
        { "id": "mb_1200_b560_tomahawk", "marca": "MSI", "modelo": "MAG B560 TOMAHAWK WIFI", "socket": "LGA 1200", "tipoRam": "DDR4", "precio": 175, "imagen": "imagenes/MAG B560 TOMAHAWK WIFI.jpg" },
        { "id": "mb_1200_b560_aorus", "marca": "Gigabyte", "modelo": "B560M AORUS PRO AX", "socket": "LGA 1200", "tipoRam": "DDR4", "precio": 160, "imagen": "imagenes/B560M AORUS PRO AX.jpg" },
        { "id": "mb_1200_b560_pro4", "marca": "ASRock", "modelo": "B560M Pro4", "socket": "LGA 1200", "tipoRam": "DDR4", "precio": 120, "imagen": "imagenes/B560M Pro4.jpg" },
        { "id": "mb_1200_b560_prime", "marca": "ASUS", "modelo": "Prime B560-PLUS", "socket": "LGA 1200", "tipoRam": "DDR4", "precio": 130, "imagen": "imagenes/Prime B560-PLUS.jpg" },
        { "id": "mb_1200_b460_tomahawk", "marca": "MSI", "modelo": "MAG B460 TOMAHAWK", "socket": "LGA 1200", "tipoRam": "DDR4", "precio": 140, "imagen": "imagenes/MAG B460 TOMAHAWK.jpg" },
        { "id": "mb_1200_b460_ds3h", "marca": "Gigabyte", "modelo": "B460M DS3H", "socket": "LGA 1200", "tipoRam": "DDR4", "precio": 100, "imagen": "imagenes/B460M DS3H.jpg" },
        { "id": "mb_1200_b460_tuf", "marca": "ASUS", "modelo": "TUF GAMING B460-PRO", "socket": "LGA 1200", "tipoRam": "DDR4", "precio": 135, "imagen": "imagenes/TUF GAMING B460-PRO.jpg" },
        { "id": "mb_1200_h510_prime", "marca": "ASUS", "modelo": "Prime H510M-A", "socket": "LGA 1200", "tipoRam": "DDR4", "precio": 85, "imagen": "imagenes/Prime H510M-A.jpg" },
        { "id": "mb_1200_h510_pro", "marca": "MSI", "modelo": "H510M-A PRO", "socket": "LGA 1200", "tipoRam": "DDR4", "precio": 80, "imagen": "imagenes/H510M-A PRO.jpg" },
        { "id": "mb_1200_h410_asrock", "marca": "ASRock", "modelo": "H410M-HDV", "socket": "LGA 1200", "tipoRam": "DDR4", "precio": 70, "imagen": "imagenes/H410M-HDV.jpg" },

        // --- AMD: SOCKET AM5 (Ryzen 7000 y 8000) ---
        { "id": "mb_am5_x670e_crosshair", "marca": "ASUS", "modelo": "ROG CROSSHAIR X670E EXTREME", "socket": "AM5", "tipoRam": "DDR5", "precio": 1000, "imagen": "imagenes/ROG CROSSHAIR X670E EXTREME.jpg" },
        { "id": "mb_am5_x670e_godlike", "marca": "MSI", "modelo": "MEG X670E GODLIKE", "socket": "AM5", "tipoRam": "DDR5", "precio": 1300, "imagen": "imagenes/MEG X670E GODLIKE.jpg" },
        { "id": "mb_am5_x670e_aorus", "marca": "Gigabyte", "modelo": "X670E AORUS MASTER", "socket": "AM5", "tipoRam": "DDR5", "precio": 490, "imagen": "imagenes/X670E AORUS MASTER.jpg" },
        { "id": "mb_am5_x670e_taichi", "marca": "ASRock", "modelo": "X670E Taichi", "socket": "AM5", "tipoRam": "DDR5", "precio": 500, "imagen": "imagenes/X670E Taichi.jpg" },
        { "id": "mb_am5_x670e_tuf", "marca": "ASUS", "modelo": "TUF GAMING X670E-PLUS WIFI", "socket": "AM5", "tipoRam": "DDR5", "precio": 320, "imagen": "imagenes/TUF GAMING X670E-PLUS WIFI.jpg" },
        { "id": "mb_am5_b650e_strix", "marca": "ASUS", "modelo": "ROG STRIX B650E-F GAMING WIFI", "socket": "AM5", "tipoRam": "DDR5", "precio": 290, "imagen": "imagenes/ROG STRIX B650E-F GAMING WIFI.jpg" },
        { "id": "mb_am5_b650_carbon", "marca": "MSI", "modelo": "MPG B650 CARBON WIFI", "socket": "AM5", "tipoRam": "DDR5", "precio": 280, "imagen": "imagenes/MPG B650 CARBON WIFI.jpg" },
        { "id": "mb_am5_b650_aorus", "marca": "Gigabyte", "modelo": "B650 AORUS ELITE AX", "socket": "AM5", "tipoRam": "DDR5", "precio": 220, "imagen": "imagenes/B650 AORUS ELITE AX.jpg" },
        { "id": "mb_am5_b650e_steel", "marca": "ASRock", "modelo": "B650E Steel Legend WiFi", "socket": "AM5", "tipoRam": "DDR5", "precio": 250, "imagen": "imagenes/B650E Steel Legend WiFi.jpg" },
        { "id": "mb_am5_b650_tuf", "marca": "ASUS", "modelo": "TUF GAMING B650-PLUS WIFI", "socket": "AM5", "tipoRam": "DDR5", "precio": 210, "imagen": "imagenes/TUF GAMING B650-PLUS WIFI.jpg" },
        { "id": "mb_am5_b650_tomahawk", "marca": "MSI", "modelo": "MAG B650 TOMAHAWK WIFI", "socket": "AM5", "tipoRam": "DDR5", "precio": 230, "imagen": "imagenes/MAG B650 TOMAHAWK WIFI.jpg" },
        { "id": "mb_am5_b650_ds3h", "marca": "Gigabyte", "modelo": "B650M DS3H", "socket": "AM5", "tipoRam": "DDR5", "precio": 150, "imagen": "imagenes/B650M DS3H.jpg" },
        { "id": "mb_am5_b650_pro_rs", "marca": "ASRock", "modelo": "B650M Pro RS WiFi", "socket": "AM5", "tipoRam": "DDR5", "precio": 160, "imagen": "imagenes/B650M Pro RS WiFi.jpg" },
        { "id": "mb_am5_a620_prime", "marca": "ASUS", "modelo": "Prime A620M-A", "socket": "AM5", "tipoRam": "DDR5", "precio": 110, "imagen": "imagenes/Prime A620M-A.jpg" },
        { "id": "mb_am5_a620_pro", "marca": "MSI", "modelo": "PRO A620M-E", "socket": "AM5", "tipoRam": "DDR5", "precio": 95, "imagen": "imagenes/PRO A620M-E.jpg" },
        { "id": "mb_am5_a620_s2h", "marca": "Gigabyte", "modelo": "A620M S2H", "socket": "AM5", "tipoRam": "DDR5", "precio": 90, "imagen": "imagenes/A620M S2H.jpg" },

        // --- AMD: SOCKET AM4 (Ryzen 1000 a 5000) ---
        { "id": "mb_am4_x570_dark", "marca": "ASUS", "modelo": "ROG CROSSHAIR VIII DARK HERO", "socket": "AM4", "tipoRam": "DDR4", "precio": 450, "imagen": "imagenes/ROG CROSSHAIR VIII DARK HERO.jpg" },
        { "id": "mb_am4_x570_godlike", "marca": "MSI", "modelo": "MEG X570 GODLIKE", "socket": "AM4", "tipoRam": "DDR4", "precio": 700, "imagen": "imagenes/MEG X570 GODLIKE.jpg" },
        { "id": "mb_am4_x570_master", "marca": "Gigabyte", "modelo": "X570S AORUS MASTER", "socket": "AM4", "tipoRam": "DDR4", "precio": 380, "imagen": "imagenes/X570S AORUS MASTER.jpg" },
        { "id": "mb_am4_x570_tuf", "marca": "ASUS", "modelo": "TUF GAMING X570-PLUS (WI-FI)", "socket": "AM4", "tipoRam": "DDR4", "precio": 200, "imagen": "imagenes/TUF GAMING X570-PLUS (WI-FI).jpg" },
        { "id": "mb_am4_x570_edge", "marca": "MSI", "modelo": "MPG X570 GAMING EDGE WIFI", "socket": "AM4", "tipoRam": "DDR4", "precio": 210, "imagen": "imagenes/MPG X570 GAMING EDGE WIFI.jpg" },
        { "id": "mb_am4_b550_strix", "marca": "ASUS", "modelo": "ROG STRIX B550-F GAMING WIFI II", "socket": "AM4", "tipoRam": "DDR4", "precio": 190, "imagen": "imagenes/ROG STRIX B550-F GAMING WIFI II.jpg" },
        { "id": "mb_am4_b550_tomahawk", "marca": "MSI", "modelo": "MAG B550 TOMAHAWK", "socket": "AM4", "tipoRam": "DDR4", "precio": 170, "imagen": "imagenes/MAG B550 TOMAHAWK.jpg" },
        { "id": "mb_am4_b550_aorus", "marca": "Gigabyte", "modelo": "B550 AORUS ELITE V2", "socket": "AM4", "tipoRam": "DDR4", "precio": 150, "imagen": "imagenes/B550 AORUS ELITE V2.jpg" },
        { "id": "mb_am4_b550_steel", "marca": "ASRock", "modelo": "B550M Steel Legend", "socket": "AM4", "tipoRam": "DDR4", "precio": 140, "imagen": "imagenes/B550M Steel Legend.jpg" },
        { "id": "mb_am4_b550_tuf", "marca": "ASUS", "modelo": "TUF GAMING B550M-PLUS (WI-FI)", "socket": "AM4", "tipoRam": "DDR4", "precio": 160, "imagen": "imagenes/TUF GAMING B550M-PLUS (WI-FI).jpg" },
        { "id": "mb_am4_b550_pro", "marca": "MSI", "modelo": "B550-A PRO", "socket": "AM4", "tipoRam": "DDR4", "precio": 140, "imagen": "imagenes/B550-A PRO.jpg" },
        { "id": "mb_am4_b450_aorus", "marca": "Gigabyte", "modelo": "B450 AORUS ELITE V2", "socket": "AM4", "tipoRam": "DDR4", "precio": 110, "imagen": "imagenes/B450 AORUS ELITE V2.jpg" },
        { "id": "mb_am4_b450_tomahawk", "marca": "MSI", "modelo": "B450 TOMAHAWK MAX II", "socket": "AM4", "tipoRam": "DDR4", "precio": 120, "imagen": "imagenes/B450 TOMAHAWK MAX II.jpg" },
        { "id": "mb_am4_b450_strix", "marca": "ASUS", "modelo": "ROG STRIX B450-F GAMING II", "socket": "AM4", "tipoRam": "DDR4", "precio": 130, "imagen": "imagenes/ROG STRIX B450-F GAMING II.jpg" },
        { "id": "mb_am4_a320_prime", "marca": "ASUS", "modelo": "Prime A320M-K", "socket": "AM4", "tipoRam": "DDR4", "precio": 55, "imagen": "imagenes/Prime A320M-K.jpg" },
        { "id": "mb_am4_a320_s2h", "marca": "Gigabyte", "modelo": "GA-A320M-S2H", "socket": "AM4", "tipoRam": "DDR4", "precio": 60, "imagen": "imagenes/GA-A320M-S2H.jpg" }
    ],
    "refrigeracion": [
        // --- REFRIGERACIÓN POR AIRE: GAMA DE ENTRADA Y ECONÓMICAS ---
        { "id": "cooler_deepcool_ag300", "marca": "DeepCool", "modelo": "AG300 Compact", "tipo": "Aire", "tamano": "Torre Simple", "formato": "Torre Simple (1x92mm)", "consumo": 3, "precio": 22, "imagen": "imagenes/AG300 Compact.jpg" },
        { "id": "cooler_tr_assassin_x120", "marca": "Thermalright", "modelo": "Assassin X 120 Refined SE", "tipo": "Aire", "tamano": "Torre Simple", "formato": "Torre Simple (1x120mm)", "consumo": 4, "precio": 25, "imagen": "imagenes/Assassin X 120 Refined SE.jpg" },
        { "id": "cooler_id_se224xts", "marca": "ID-COOLING", "modelo": "SE-224-XTS Black", "tipo": "Aire", "tamano": "Torre Simple", "formato": "Torre Simple (1x120mm)", "consumo": 4, "precio": 28, "imagen": "imagenes/SE-224-XTS Black.jpg" },
        { "id": "cooler_deepcool_ag400_argb", "marca": "DeepCool", "modelo": "AG400 ARGB", "tipo": "Aire", "tamano": "Torre Simple", "formato": "Torre Simple (1x120mm)", "consumo": 5, "precio": 32, "imagen": "imagenes/AG400 ARGB.jpg" },
        { "id": "cooler_cm_hyper212_halo", "marca": "Cooler Master", "modelo": "Hyper 212 Halo Black", "tipo": "Aire", "tamano": "Torre Simple", "formato": "Torre Simple (1x120mm)", "consumo": 5, "precio": 38, "imagen": "imagenes/Hyper 212 Halo Black.jpg" },
        { "id": "cooler_arctic_f36_argb", "marca": "Arctic", "modelo": "Freezer 36 A-RGB", "tipo": "Aire", "tamano": "Torre Simple", "formato": "Push-Pull (2x120mm)", "consumo": 6, "precio": 42, "imagen": "imagenes/Freezer 36 A-RGB.jpg" },
        { "id": "cooler_noctua_l9x65", "marca": "Noctua", "modelo": "NH-L9x65 Low-Profile", "tipo": "Aire", "tamano": "Torre Simple", "formato": "Perfil Bajo ITX (1x92mm)", "consumo": 3, "precio": 55, "imagen": "imagenes/dNH-L9x65 Low-Profile.jpg" },

        // --- REFRIGERACIÓN POR AIRE: GAMA ALTA Y DOBLE TORRE ---
        { "id": "cooler_tr_peerless_120se", "marca": "Thermalright", "modelo": "Peerless Assassin 120 SE", "tipo": "Aire", "tamano": "Doble Torre", "formato": "Doble Torre (2x120mm)", "consumo": 6, "precio": 45, "tdpMax": 265, "iluminacion": "ARGB Dual", "ruido": "25.6 dBA", "color": "#00e5ff", "imagen": "" },
        { "id": "cooler_tr_phantom_evo", "marca": "Thermalright", "modelo": "Phantom Spirit 120 EVO", "tipo": "Aire", "tamano": "Doble Torre", "formato": "Doble Torre (7 Heatpipes)", "consumo": 7, "precio": 55, "tdpMax": 280, "iluminacion": "ARGB Stealth", "ruido": "24.5 dBA", "color": "#ff3366", "imagen": "" },
        { "id": "cooler_deepcool_ak620_dig", "marca": "DeepCool", "modelo": "AK620 Digital Display", "tipo": "Aire", "tamano": "Doble Torre LCD", "formato": "Doble Torre + Pantalla Digital", "consumo": 8, "precio": 75, "tdpMax": 260, "iluminacion": "Display LED Temp + Tiras ARGB", "ruido": "28.0 dBA", "color": "#00ff88", "imagen": "" },
        { "id": "cooler_bq_darkrock_pro5", "marca": "be quiet!", "modelo": "Dark Rock Pro 5", "tipo": "Aire", "tamano": "Doble Torre", "formato": "Doble Torre Ultra Silenciosa", "consumo": 8, "precio": 95, "tdpMax": 270, "iluminacion": "Sin RGB (Negro Mate)", "ruido": "23.3 dBA", "color": "#a0a8b8", "imagen": "" },
        { "id": "cooler_noctua_nhd15_chromax", "marca": "Noctua", "modelo": "NH-D15 chromax.black", "tipo": "Aire", "tamano": "Doble Torre", "formato": "Doble Torre Insignia (2x140mm)", "consumo": 7, "precio": 125, "tdpMax": 280, "iluminacion": "Sin RGB (Total Black)", "ruido": "24.6 dBA", "color": "#707d8f", "imagen": "" },

        // --- REFRIGERACIÓN LÍQUIDA AIO: 120mm & 240mm GAMA MEDIA / ALTA ---
        { "id": "cooler_cm_ml120l_v2", "marca": "Cooler Master", "modelo": "MasterLiquid ML120L V2 RGB", "tipo": "Líquida", "tamano": "AIO 120mm", "formato": "Radiador 120mm (1x120mm)", "consumo": 10, "precio": 52, "tdpMax": 180, "iluminacion": "RGB Bomba y Ventilador", "ruido": "27.0 dBA", "color": "#ff007f", "imagen": "" },
        { "id": "cooler_tr_aqua_elite_240", "marca": "Thermalright", "modelo": "Aqua Elite 240 V3 ARGB", "tipo": "Líquida", "tamano": "AIO 240mm", "formato": "Radiador 240mm (2x120mm)", "consumo": 14, "precio": 58, "tdpMax": 250, "iluminacion": "Espejo Infinito ARGB", "ruido": "26.0 dBA", "color": "#00e5ff", "imagen": "" },
        { "id": "cooler_deepcool_le520", "marca": "DeepCool", "modelo": "LE520 ARGB Anti-Leak", "tipo": "Líquida", "tamano": "AIO 240mm", "formato": "Radiador 240mm (2x120mm)", "consumo": 15, "precio": 72, "tdpMax": 260, "iluminacion": "ARGB Direccionable", "ruido": "28.5 dBA", "color": "#00e5ff", "imagen": "" },
        { "id": "cooler_cm_ml240l_v2", "marca": "Cooler Master", "modelo": "MasterLiquid ML240L V2 RGB", "tipo": "Líquida", "tamano": "AIO 240mm", "formato": "Radiador 240mm Doble Cámara", "consumo": 15, "precio": 85, "tdpMax": 250, "iluminacion": "RGB Bomba Reforzada", "ruido": "27.0 dBA", "color": "#9b51e0", "imagen": "" },
        { "id": "cooler_arctic_lf3_240", "marca": "Arctic", "modelo": "Liquid Freezer III 240 A-RGB", "tipo": "Líquida", "tamano": "AIO 240mm", "formato": "Radiador 38mm + Fan VRM", "consumo": 16, "precio": 95, "tdpMax": 280, "iluminacion": "A-RGB Bomba & Fans", "ruido": "22.5 dBA", "color": "#00ffcc", "imagen": "" },
        { "id": "cooler_corsair_h100x_rgb", "marca": "Corsair", "modelo": "H100x RGB Elite", "tipo": "Líquida", "tamano": "AIO 240mm", "formato": "Radiador 240mm SP120 Elite", "consumo": 18, "precio": 105, "tdpMax": 260, "iluminacion": "16 LEDs RGB Direccionables", "ruido": "28.0 dBA", "color": "#00e5ff", "imagen": "" },
        { "id": "cooler_nzxt_kraken_240", "marca": "NZXT", "modelo": "Kraken 240 LCD Display", "tipo": "Líquida", "tamano": "AIO 240mm LCD", "formato": "Radiador 240mm + Pantalla LCD", "consumo": 20, "precio": 135, "tdpMax": 260, "iluminacion": "Pantalla LCD a Color", "ruido": "25.0 dBA", "color": "#9b51e0", "imagen": "" },

        // --- REFRIGERACIÓN LÍQUIDA AIO: 360mm GAMA ALTA Y ENTUSIASTA ---
        { "id": "cooler_tr_frozen_notte_360", "marca": "Thermalright", "modelo": "Frozen Notte 360 ARGB", "tipo": "Líquida", "tamano": "AIO 360mm", "formato": "Radiador 360mm (3x120mm)", "consumo": 20, "precio": 85, "tdpMax": 300, "iluminacion": "Espejo Infinito ARGB", "ruido": "28.0 dBA", "color": "#00e5ff", "imagen": "" },
        { "id": "cooler_deepcool_ls720_se", "marca": "DeepCool", "modelo": "LS720 SE 360mm", "tipo": "Líquida", "tamano": "AIO 360mm", "formato": "Radiador 360mm Bomba 4ta Gen", "consumo": 22, "precio": 110, "tdpMax": 300, "iluminacion": "ARGB Espejo Infinito", "ruido": "29.0 dBA", "color": "#00ff88", "imagen": "" },
        { "id": "cooler_arctic_lf3_360", "marca": "Arctic", "modelo": "Liquid Freezer III 360 A-RGB", "tipo": "Líquida", "tamano": "AIO 360mm", "formato": "Radiador 38mm + Fan VRM", "consumo": 22, "precio": 125, "tdpMax": 330, "iluminacion": "A-RGB Bomba & 3 Fans", "ruido": "22.5 dBA", "color": "#00e5ff", "imagen": "" },
        { "id": "cooler_msi_mag_e360", "marca": "MSI", "modelo": "MAG CoreLiquid E360", "tipo": "Líquida", "tamano": "AIO 360mm", "formato": "Radiador 360mm Bloque Giratorio", "consumo": 24, "precio": 135, "tdpMax": 300, "iluminacion": "ARGB Eclipse Solar", "ruido": "28.5 dBA", "color": "#ff3366", "imagen": "" },
        { "id": "cooler_lianli_galahad2_360", "marca": "Lian Li", "modelo": "Galahad II Trinity SL-INF 360", "tipo": "Líquida", "tamano": "AIO 360mm", "formato": "Radiador 360mm Uni Fan SL-INF", "consumo": 28, "precio": 185, "tdpMax": 320, "iluminacion": "ARGB Espejo Infinito Extremo", "ruido": "29.0 dBA", "color": "#00e5ff", "imagen": "" },
        { "id": "cooler_corsair_icue_link_h150i", "marca": "Corsair", "modelo": "iCUE LINK H150i RGB", "tipo": "Líquida", "tamano": "AIO 360mm", "formato": "Radiador 360mm Ecosistema LINK", "consumo": 26, "precio": 195, "tdpMax": 320, "iluminacion": "QX120 RGB 34 Zonas", "ruido": "27.5 dBA", "color": "#ff007f", "imagen": "" },
        { "id": "cooler_nzxt_kraken_360_rgb", "marca": "NZXT", "modelo": "Kraken Elite 360 RGB LCD", "tipo": "Líquida", "tamano": "AIO 360mm LCD", "formato": "Radiador 360mm + Pantalla LCD 2.36\"", "consumo": 28, "precio": 215, "tdpMax": 320, "iluminacion": "Pantalla LCD 640x640 + Fans RGB", "ruido": "26.0 dBA", "color": "#9b51e0", "imagen": "" },
        { "id": "cooler_corsair_h150i_lcd_xt", "marca": "Corsair", "modelo": "iCUE H150i Elite LCD XT", "tipo": "Líquida", "tamano": "AIO 360mm LCD", "formato": "Radiador 360mm + Pantalla IPS 480x480", "consumo": 30, "precio": 260, "tdpMax": 330, "iluminacion": "Pantalla LCD IPS + Fans AF120 RGB", "ruido": "28.0 dBA", "color": "#00ff88", "imagen": "" },
        { "id": "cooler_asus_ryujin3_360", "marca": "ASUS", "modelo": "ROG Ryujin III 360 ARGB", "tipo": "Líquida", "tamano": "AIO 360mm LCD", "formato": "Radiador 360mm + Pantalla LCD 3.5\"", "consumo": 35, "precio": 340, "tdpMax": 350, "iluminacion": "Pantalla LCD 3.5\" Full Color + ARGB", "ruido": "29.7 dBA", "color": "#ff0055", "imagen": "" }
    ],
    "memoriasRam": [
        // --- Opciones DDR5 ---
        { "id": "ram_ddr5_corsair_32", "marca": "Corsair", "modelo": "Vengeance", "capacidad": "32GB (2x16GB)", "frecuencia": "6000MHz", "modulos": 2, "distribucion": "2x16GB", "tecnologia": "DDR5", "precio": 115, "imagen": "imagenes/ram ddr5 corsair 32.jpg" },
        { "id": "ram_ddr5_xpg_32", "marca": "XPG", "modelo": "Lancer RGB", "capacidad": "32GB (2x16GB)", "frecuencia": "6000MHz", "modulos": 2, "distribucion": "2x16GB", "tecnologia": "DDR5", "precio": 130, "imagen": "imagenes/ram ddr5 xpg 32.jpg" },
        { "id": "ram_ddr5_kingston_16", "marca": "Kingston", "modelo": "Fury Beast", "capacidad": "16GB (1x16GB)", "frecuencia": "5200MHz", "modulos": 1, "distribucion": "1x16GB", "tecnologia": "DDR5", "precio": 60, "imagen": "imagenes/ram ddr5 kingston 16.jpg" },

        // --- Opciones DDR4 ---
        { "id": "ram_ddr4_corsair_16", "marca": "Corsair", "modelo": "Vengeance LPX", "capacidad": "16GB (2x8GB)", "frecuencia": "3200MHz", "modulos": 2, "distribucion": "2x8GB", "tecnologia": "DDR4", "precio": 45, "imagen": "imagenes/ram ddr4 corsair 16.jpg" },
        { "id": "ram_ddr4_gskill_32", "marca": "G.Skill", "modelo": "Ripjaws V", "capacidad": "32GB (2x16GB)", "frecuencia": "3600MHz", "modulos": 2, "distribucion": "2x16GB", "tecnologia": "DDR4", "precio": 75, "imagen": "imagenes/ram_ddr4_gskill_32.jpg" },
        { "id": "ram_ddr4_crucial_8", "marca": "Crucial", "modelo": "Basics", "capacidad": "8GB (1x8GB)", "frecuencia": "2666MHz", "modulos": 1, "distribucion": "1x8GB", "tecnologia": "DDR4", "precio": 20, "imagen": "imagenes/ram_ddr4_crucial_8.jpg" },
        { "id": "ram_ddr4_kingston_rgb_16", "marca": "Kingston", "modelo": "Fury Beast RGB", "capacidad": "16GB (2x8GB)", "frecuencia": "3200MHz", "modulos": 2, "distribucion": "2x8GB", "tecnologia": "DDR4", "precio": 55, "imagen": "imagenes/ram_ddr4_kingston_rgb_16.jpg" }
    ],
    "tarjetasGraficas": [
        // --- OPCIÓN SIN TARJETA GRÁFICA (GRÁFICOS INTEGRADOS) ---
        { "id": "gpu_ninguna", "marca": "Sin Tarjeta Gráfica", "modelo": "(Usar Gráficos Integrados)", "vram": "N/A", "precio": 0, "imagen": "" },

        // --- SERIE RTX 5000 (¡Lo más top!) ---
        { "id": "gpu_rtx_5090", "marca": "NVIDIA", "modelo": "GeForce RTX 5090", "vram": "24GB GDDR7", "precio": 1800, "imagen": "imagenes/GeForce RTX 5090.jpg" },
        { "id": "gpu_rtx_5080", "marca": "NVIDIA", "modelo": "GeForce RTX 5080", "vram": "16GB GDDR7", "precio": 1200, "imagen": "imagenes/GeForce RTX 5080.jpg" },
        { "id": "gpu_rtx_5070", "marca": "NVIDIA", "modelo": "GeForce RTX 5070", "vram": "12GB GDDR7", "precio": 700, "imagen": "imagenes/GeForce RTX 5070.jpg" },
        { "id": "gpu_rtx_5060", "marca": "NVIDIA", "modelo": "GeForce RTX 5060", "vram": "8GB GDDR7", "precio": 400, "imagen": "imagenes/GeForce RTX 5060.jpg" },

        // --- SERIE RTX 4000 ---
        { "id": "gpu_rtx_4090", "marca": "NVIDIA", "modelo": "GeForce RTX 4090", "vram": "24GB GDDR6X", "precio": 1600, "imagen": "imagenes/GeForce RTX 4090.jpg" },
        { "id": "gpu_rtx_4080s", "marca": "NVIDIA", "modelo": "GeForce RTX 4080 SUPER", "vram": "16GB GDDR6X", "precio": 1000, "imagen": "imagenes/GeForce RTX 4080 SUPER.jpg" },
        { "id": "gpu_rtx_4070ti", "marca": "NVIDIA", "modelo": "GeForce RTX 4070 Ti", "vram": "12GB GDDR6X", "precio": 800, "imagen": "imagenes/GeForce RTX 4070 Ti.jpg" },
        { "id": "gpu_rtx_4070", "marca": "NVIDIA", "modelo": "GeForce RTX 4070", "vram": "12GB GDDR6X", "precio": 600, "imagen": "imagenes/GeForce RTX 4070.jpg" },
        { "id": "gpu_rtx_4060ti", "marca": "NVIDIA", "modelo": "GeForce RTX 4060 Ti", "vram": "8GB GDDR6", "precio": 400, "imagen": "imagenes/GeForce RTX 4060 Ti.jpg" },
        { "id": "gpu_rtx_4060", "marca": "NVIDIA", "modelo": "GeForce RTX 4060", "vram": "8GB GDDR6", "precio": 300, "imagen": "imagenes/GeForce RTX 4060.jpg" },

        // --- SERIE RTX 3000 ---
        { "id": "gpu_rtx_3090", "marca": "NVIDIA", "modelo": "GeForce RTX 3090", "vram": "24GB GDDR6X", "precio": 900, "imagen": "imagenes/GeForce RTX 3090.jpg" },
        { "id": "gpu_rtx_3080ti", "marca": "NVIDIA", "modelo": "GeForce RTX 3080 Ti", "vram": "12GB GDDR6X", "precio": 750, "imagen": "imagenes/GeForce RTX 3080 Ti.jpg" },
        { "id": "gpu_rtx_3080", "marca": "NVIDIA", "modelo": "GeForce RTX 3080", "vram": "10GB GDDR6X", "precio": 650, "imagen": "imagenes/GeForce RTX 3080.jpg" },
        { "id": "gpu_rtx_3070", "marca": "NVIDIA", "modelo": "GeForce RTX 3070", "vram": "8GB GDDR6", "precio": 450, "imagen": "imagenes/GeForce RTX 3070.jpg" },
        { "id": "gpu_rtx_3060ti", "marca": "NVIDIA", "modelo": "GeForce RTX 3060 Ti", "vram": "8GB GDDR6", "precio": 350, "imagen": "imagenes/GeForce RTX 3060 Ti.jpg" },
        { "id": "gpu_rtx_3060_12", "marca": "NVIDIA", "modelo": "GeForce RTX 3060", "vram": "12GB GDDR6", "precio": 280, "imagen": "imagenes/GeForce RTX 3060.jpg" },
        { "id": "gpu_rtx_3050", "marca": "NVIDIA", "modelo": "GeForce RTX 3050", "vram": "8GB GDDR6", "precio": 220, "imagen": "imagenes/GeForce RTX 3050.jpg" },

        // --- SERIE GTX (Clásicas y económicas) ---
        { "id": "gpu_gtx_1660s", "marca": "NVIDIA", "modelo": "GeForce GTX 1660 SUPER", "vram": "6GB GDDR6", "precio": 180, "imagen": "imagenes/GeForce GTX 1660 SUPER.jpg" },
        { "id": "gpu_gtx_1650", "marca": "NVIDIA", "modelo": "GeForce GTX 1650", "vram": "4GB GDDR5", "precio": 140, "imagen": "imagenes/GeForce GTX 1650.jpg" },
        { "id": "gpu_gtx_1050ti", "marca": "NVIDIA", "modelo": "GeForce GTX 1050 Ti", "vram": "4GB GDDR5", "precio": 100, "imagen": "imagenes/GeForce GTX 1050 Ti.jpg" },
        // (Asegúrate de que la línea de la GTX 1050 Ti de arriba termine en coma ,)

        // --- SERIE RADEON RX 7000 (Lo último de AMD) ---
        { "id": "gpu_rx_7900xtx", "marca": "AMD", "modelo": "Radeon RX 7900 XTX", "vram": "24GB GDDR6", "precio": 1000, "imagen": "imagenes/Radeon RX 7900 XTX.jpg" },
        { "id": "gpu_rx_7900xt", "marca": "AMD", "modelo": "Radeon RX 7900 XT", "vram": "20GB GDDR6", "precio": 800, "imagen": "imagenes/Radeon RX 7900 XT.jpg" },
        { "id": "gpu_rx_7800xt", "marca": "AMD", "modelo": "Radeon RX 7800 XT", "vram": "16GB GDDR6", "precio": 550, "imagen": "imagenes/Radeon RX 7800 XT.jpg" },
        { "id": "gpu_rx_7700xt", "marca": "AMD", "modelo": "Radeon RX 7700 XT", "vram": "12GB GDDR6", "precio": 450, "imagen": "imagenes/Radeon RX 7700 XT.jpg" },
        { "id": "gpu_rx_7600", "marca": "AMD", "modelo": "Radeon RX 7600", "vram": "8GB GDDR6", "precio": 280, "imagen": "imagenes/Radeon RX 7600.jpg" },

        // --- SERIE RADEON RX 6000 ---
        { "id": "gpu_rx_6950xt", "marca": "AMD", "modelo": "Radeon RX 6950 XT", "vram": "16GB GDDR6", "precio": 650, "imagen": "imagenes/Radeon RX 6950 XT.jpg" },
        { "id": "gpu_rx_6800xt", "marca": "AMD", "modelo": "Radeon RX 6800 XT", "vram": "16GB GDDR6", "precio": 500, "imagen": "imagenes/Radeon RX 6800 XT.jpg" },
        { "id": "gpu_rx_6700xt", "marca": "AMD", "modelo": "Radeon RX 6700 XT", "vram": "12GB GDDR6", "precio": 350, "imagen": "imagenes/Radeon RX 6700 XT.jpg" },
        { "id": "gpu_rx_6600xt", "marca": "AMD", "modelo": "Radeon RX 6600 XT", "vram": "8GB GDDR6", "precio": 250, "imagen": "imagenes/Radeon RX 6600 XT.jpg" },
        { "id": "gpu_rx_6600", "marca": "AMD", "modelo": "Radeon RX 6600", "vram": "8GB GDDR6", "precio": 200, "imagen": "imagenes/Radeon RX 6600.jpg" },

        // --- SERIE RADEON RX (Clásicas y económicas) ---
        { "id": "gpu_rx_5700xt", "marca": "AMD", "modelo": "Radeon RX 5700 XT", "vram": "8GB GDDR6", "precio": 180, "imagen": "imagenes/Radeon RX 5700 XT.png" },
        { "id": "gpu_rx_580", "marca": "AMD", "modelo": "Radeon RX 580", "vram": "8GB GDDR5", "precio": 120, "imagen": "imagenes/Radeon RX 580.jpg" }
    ],
    "almacenamiento": [
        // --- M.2 NVMe (Los más rápidos) ---
        { "id": "hdd_m2_990pro_2tb", "tipo": "M.2 NVMe Gen4", "marca": "Samsung", "modelo": "990 PRO", "capacidad": "2TB", "velocidad": "7450 MB/s", "precio": 170, "imagen": "imagenes/990 PRO.jpg" },
        { "id": "hdd_m2_sn850x_1tb", "tipo": "M.2 NVMe Gen4", "marca": "WD Black", "modelo": "SN850X", "capacidad": "1TB", "velocidad": "7300 MB/s", "precio": 120, "imagen": "imagenes/SN850X.jpg" },
        { "id": "hdd_m2_nv2_1tb", "tipo": "M.2 NVMe Gen3", "marca": "Kingston", "modelo": "NV2", "capacidad": "1TB", "velocidad": "3500 MB/s", "precio": 65, "imagen": "imagenes/NV2.jpg" },
        { "id": "hdd_m2_crucial_500gb", "tipo": "M.2 NVMe Gen3", "marca": "Crucial", "modelo": "P3", "capacidad": "500GB", "velocidad": "3500 MB/s", "precio": 45, "imagen": "imagenes/P3.jpg" },

        // --- SSD SATA (Velocidad estándar, ideales para revivir PCs) ---
        { "id": "hdd_ssd_mx500_1tb", "tipo": "SSD SATA", "marca": "Crucial", "modelo": "MX500", "capacidad": "1TB", "velocidad": "560 MB/s", "precio": 70, "imagen": "imagenes/MX500.jpg" },
        { "id": "hdd_ssd_870evo_500gb", "tipo": "SSD SATA", "marca": "Samsung", "modelo": "870 EVO", "capacidad": "500GB", "velocidad": "560 MB/s", "precio": 50, "imagen": "imagenes/870 EVO.jpg" },
        { "id": "hdd_ssd_a400_480gb", "tipo": "SSD SATA", "marca": "Kingston", "modelo": "A400", "capacidad": "480GB", "velocidad": "500 MB/s", "precio": 35, "imagen": "imagenes/A400.jpg" },

        // --- HDD (Discos mecánicos, ideales para almacenamiento masivo barato) ---
        { "id": "hdd_mec_barracuda_4tb", "tipo": "HDD", "marca": "Seagate", "modelo": "Barracuda", "capacidad": "4TB", "velocidad": "5400 RPM", "precio": 85, "imagen": "imagenes/Barracuda.jpg" },
        { "id": "hdd_mec_blue_2tb", "tipo": "HDD", "marca": "WD Blue", "modelo": "WD20EZBX", "capacidad": "2TB", "velocidad": "7200 RPM", "precio": 55, "imagen": "imagenes/WD20EZBX.jpg" },
        { "id": "hdd_mec_barracuda_1tb", "tipo": "HDD", "marca": "Seagate", "modelo": "Barracuda", "capacidad": "1TB", "velocidad": "7200 RPM", "precio": 45, "imagen": "imagenes/Barracuda1t.jpg" }
    ],
    "fuentesPoder": [
        // --- Fuentes de entrada (PCs básicas y ofimática) ---
        { "id": "psu_400w", "marca": "EVGA", "modelo": "W1", "watts": "400W", "certificacion": "80 Plus White", "precio": 35, "imagen": "imagenes/W1.jpg" },
        { "id": "psu_450w", "marca": "Corsair", "modelo": "CV450", "watts": "450W", "certificacion": "80 Plus Bronze", "precio": 45, "imagen": "imagenes/psu 450w.avif" },
        { "id": "psu_500w", "marca": "Thermaltake", "modelo": "Smart", "watts": "500W", "certificacion": "80 Plus White", "precio": 50, "imagen": "imagenes/psu 500w.jpg" },

        // --- Fuentes de gama media (Gamer estándar) ---
        { "id": "psu_550w", "marca": "MSI", "modelo": "MAG A550BN", "watts": "550W", "certificacion": "80 Plus Bronze", "precio": 60, "imagen": "imagenes/psu 550w.jpg" },
        { "id": "psu_600w", "marca": "EVGA", "modelo": "BQ", "watts": "600W", "certificacion": "80 Plus Bronze", "precio": 65, "imagen": "imagenes/psu 600w.jfif" },
        { "id": "psu_650w", "marca": "Corsair", "modelo": "CX650M", "watts": "650W", "certificacion": "80 Plus Bronze", "precio": 75, "imagen": "imagenes/psu 650w.webp" },
        { "id": "psu_700w", "marca": "Thermaltake", "modelo": "Smart BM2", "watts": "700W", "certificacion": "80 Plus Bronze", "precio": 80, "imagen": "imagenes/psu 700w.jpg" },

        // --- Fuentes de gama alta (Gamer entusiasta) ---
        { "id": "psu_750w", "marca": "Corsair", "modelo": "RM750e", "watts": "750W", "certificacion": "80 Plus Gold", "precio": 100, "imagen": "imagenes/psu 750w.jpg" },
        { "id": "psu_800w", "marca": "Cooler Master", "modelo": "G800", "watts": "800W", "certificacion": "80 Plus Gold", "precio": 110, "imagen": "imagenes/psu 800w.jpg" },
        { "id": "psu_850w", "marca": "XPG", "modelo": "Core Reactor", "watts": "850W", "certificacion": "80 Plus Gold", "precio": 125, "imagen": "imagenes/psu 850w.jfif" },
        { "id": "psu_900w", "marca": "FSP", "modelo": "Hydro G Pro", "watts": "900W", "certificacion": "80 Plus Gold", "precio": 140, "imagen": "imagenes/psu 900w.jpg" },


        // --- Fuentes monstruosas (Para las RTX 4090 y 5090) ---
        { "id": "psu_1000w", "marca": "Corsair", "modelo": "RM1000x", "watts": "1000W", "certificacion": "80 Plus Gold", "precio": 180, "imagen": "imagenes/psu_1000w.jpg" },
        { "id": "psu_1050w", "marca": "Thermaltake", "modelo": "Toughpower GF3", "watts": "1050W", "certificacion": "80 Plus Gold", "precio": 200, "imagen": "imagenes/psu 1050w.jpg" },
        { "id": "psu_1200w", "marca": "ASUS", "modelo": "ROG Thor", "watts": "1200W", "certificacion": "80 Plus Platinum", "precio": 300, "imagen": "imagenes/psu_1200w.jpg" }
    ],
    "gabinetes": [
        // --- CORSAIR ---
        { "id": "case_cor_4000d", "marca": "Corsair", "modelo": "4000D Airflow", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 105, "imagen": "imagenes/4000D Airflow.avif" },
        { "id": "case_cor_5000d", "marca": "Corsair", "modelo": "5000D Airflow", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 165, "imagen": "imagenes/5000D Airflow.avif" },
        { "id": "case_cor_7000d", "marca": "Corsair", "modelo": "7000D Airflow", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 260, "imagen": "imagenes/7000D Airflow.jpg" },
        { "id": "case_cor_4000x", "marca": "Corsair", "modelo": "iCUE 4000X RGB", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 145, "imagen": "imagenes/iCUE 4000X RGB.jpg" },
        { "id": "case_cor_5000x", "marca": "Corsair", "modelo": "iCUE 5000X RGB", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 205, "imagen": "imagenes/iCUE 5000X RGB.jpg" },
        { "id": "case_cor_280x", "marca": "Corsair", "modelo": "Crystal 280X RGB", "formato": "Micro-ATX, Mini-ITX", "precio": 160, "imagen": "imagenes/Crystal 280X RGB.png" },
        { "id": "case_cor_275r", "marca": "Corsair", "modelo": "Carbide 275R", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 80, "imagen": "imagenes/Carbide 275R.png" },
        { "id": "case_cor_175r", "marca": "Corsair", "modelo": "Carbide 175R", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 65, "imagen": "imagenes/Carbide 175R.jpg" },

        // --- NZXT ---
        { "id": "case_nzxt_h9_flow", "marca": "NZXT", "modelo": "H9 Flow", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 160, "imagen": "imagenes/H9 Flow.jpg" },
        { "id": "case_nzxt_h9_elite", "marca": "NZXT", "modelo": "H9 Elite", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 240, "imagen": "imagenes/H9 Elite.avif" },
        { "id": "case_nzxt_h7_flow", "marca": "NZXT", "modelo": "H7 Flow", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 130, "imagen": "imagenes/H7 Flow.jpg" },
        { "id": "case_nzxt_h7_elite", "marca": "NZXT", "modelo": "H7 Elite", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 200, "imagen": "imagenes/H7 Elite.webp" },
        { "id": "case_nzxt_h5_flow", "marca": "NZXT", "modelo": "H5 Flow", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 95, "imagen": "imagenes/H5 Flow.jpg" },
        { "id": "case_nzxt_h5_elite", "marca": "NZXT", "modelo": "H5 Elite", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 140, "imagen": "imagenes/H5 Elite.webp" },
        { "id": "case_nzxt_h510i", "marca": "NZXT", "modelo": "H510i", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 110, "imagen": "imagenes/H510i.jpg" },
        { "id": "case_nzxt_h210i", "marca": "NZXT", "modelo": "H210i", "formato": "Mini-ITX", "precio": 120, "imagen": "imagenes/H210i.jpg" },
        { "id": "case_nzxt_h1", "marca": "NZXT", "modelo": "H1 V2", "formato": "Mini-ITX", "precio": 350, "imagen": "imagenes/H1 V2.png" },

        // --- LIAN LI (Los reyes del cristal templado) ---
        { "id": "case_lian_o11_dyn", "marca": "Lian Li", "modelo": "O11 Dynamic", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 150, "imagen": "imagenes/O11 Dynamic.jpg" },
        { "id": "case_lian_o11_evo", "marca": "Lian Li", "modelo": "O11 Dynamic EVO", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 170, "imagen": "imagenes/O11 Dynamic EVO.jpg" },
        { "id": "case_lian_o11_xl", "marca": "Lian Li", "modelo": "O11 Dynamic XL", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 220, "imagen": "imagenes/O11 Dynamic XL.jpg" },
        { "id": "case_lian_o11_mini", "marca": "Lian Li", "modelo": "O11 Dynamic Mini", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 120, "imagen": "imagenes/O11 Dynamic Mini.webp" },
        { "id": "case_lian_lancool_2", "marca": "Lian Li", "modelo": "Lancool II Mesh", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 115, "imagen": "imagenes/Lancool II Mesh.jpg" },
        { "id": "case_lian_lancool_3", "marca": "Lian Li", "modelo": "Lancool III", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 150, "imagen": "imagenes/Lancool III.jpg" },
        { "id": "case_lian_lancool_215", "marca": "Lian Li", "modelo": "Lancool 215", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 90, "imagen": "imagenes/Lancool 215.jpg" },
        { "id": "case_lian_lancool_216", "marca": "Lian Li", "modelo": "Lancool 216", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 100, "imagen": "imagenes/Lancool 216.jpg" },
        { "id": "case_lian_a4h2o", "marca": "Lian Li", "modelo": "A4-H2O", "formato": "Mini-ITX", "precio": 155, "imagen": "imagenes/A4-H2O.jpg" },

        // --- FRACTAL DESIGN (Elegancia minimalista) ---
        { "id": "case_frac_meshify_c", "marca": "Fractal Design", "modelo": "Meshify C", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 100, "imagen": "imagenes/Meshify C.jpg" },
        { "id": "case_frac_meshify_2", "marca": "Fractal Design", "modelo": "Meshify 2", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 160, "imagen": "imagenes/Meshify 2.jpg" },
        { "id": "case_frac_meshify_2_comp", "marca": "Fractal Design", "modelo": "Meshify 2 Compact", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 120, "imagen": "imagenes/Meshify 2 Compact.jpg" },
        { "id": "case_frac_torrent", "marca": "Fractal Design", "modelo": "Torrent", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 190, "imagen": "imagenes/Torrent.jpg" },
        { "id": "case_frac_torrent_comp", "marca": "Fractal Design", "modelo": "Torrent Compact", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 150, "imagen": "imagenes/Torrent Compact.jpg" },
        { "id": "case_frac_torrent_nano", "marca": "Fractal Design", "modelo": "Torrent Nano", "formato": "Mini-ITX", "precio": 120, "imagen": "imagenes/Torrent Nano.jpg" },
        { "id": "case_frac_define_7", "marca": "Fractal Design", "modelo": "Define 7", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 180, "imagen": "imagenes/Define 7.jpg" },
        { "id": "case_frac_pop_air", "marca": "Fractal Design", "modelo": "Pop Air", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 90, "imagen": "imagenes/Pop Air.jpg" },
        { "id": "case_frac_pop_mini", "marca": "Fractal Design", "modelo": "Pop Mini Air", "formato": "Micro-ATX, Mini-ITX", "precio": 90, "imagen": "imagenes/Pop Mini Ai.jpg" },
        { "id": "case_frac_north", "marca": "Fractal Design", "modelo": "North", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 140, "imagen": "imagenes/North.png" },
        { "id": "case_frac_terra", "marca": "Fractal Design", "modelo": "Terra", "formato": "Mini-ITX", "precio": 180, "imagen": "imagenes/Terra.jpg" },

        // --- COOLER MASTER ---
        { "id": "case_cm_td500", "marca": "Cooler Master", "modelo": "MasterBox TD500 Mesh", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 110, "imagen": "imagenes/MasterBox TD500 Mesh.jpg" },
        { "id": "case_cm_nr600", "marca": "Cooler Master", "modelo": "MasterBox NR600", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 80, "imagen": "imagenes/MasterBox NR600.jpg" },
        { "id": "case_cm_nr200p", "marca": "Cooler Master", "modelo": "MasterBox NR200P", "formato": "Mini-ITX", "precio": 110, "imagen": "imagenes/MasterBox NR200P.jpg" },
        { "id": "case_cm_haf700", "marca": "Cooler Master", "modelo": "HAF 700 EVO", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 500, "imagen": "imagenes/HAF 700 EVO.jpg" },
        { "id": "case_cm_haf500", "marca": "Cooler Master", "modelo": "HAF 500", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 150, "imagen": "imagenes/HAF 500.jpg" },
        { "id": "case_cm_silencio", "marca": "Cooler Master", "modelo": "Silencio S600", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 100, "imagen": "imagenes/Silencio S600.jpg" },
        { "id": "case_cm_mb311l", "marca": "Cooler Master", "modelo": "MasterBox MB311L", "formato": "Micro-ATX, Mini-ITX", "precio": 65, "imagen": "imagenes/MasterBox MB311L.jpg" },
        { "id": "case_cm_q300l", "marca": "Cooler Master", "modelo": "MasterBox Q300L", "formato": "Micro-ATX, Mini-ITX", "precio": 50, "imagen": "imagenes/MasterBox Q300L.jpg" },

        // --- PHANTEKS ---
        { "id": "case_phan_p360a", "marca": "Phanteks", "modelo": "Eclipse P360A", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 90, "imagen": "imagenes/Eclipse P360A.jpg" },
        { "id": "case_phan_p400a", "marca": "Phanteks", "modelo": "Eclipse P400A Digital", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 100, "imagen": "imagenes/Eclipse P400A Digital.jpg" },
        { "id": "case_phan_p500a", "marca": "Phanteks", "modelo": "Eclipse P500A", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 150, "imagen": "imagenes/Eclipse P500A.jpg" },
        { "id": "case_phan_g360a", "marca": "Phanteks", "modelo": "Eclipse G360A", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 100, "imagen": "imagenes/Eclipse G360A.jpg" },
        { "id": "case_phan_nv7", "marca": "Phanteks", "modelo": "NV7", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 220, "imagen": "imagenes/NV7.jpg" },
        { "id": "case_phan_nv5", "marca": "Phanteks", "modelo": "NV5", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 130, "imagen": "imagenes/NV5.jpg" },
        { "id": "case_phan_evolv", "marca": "Phanteks", "modelo": "Evolv X", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 210, "imagen": "imagenes/Evolv X.jpg" },

        // --- THERMALTAKE ---
        { "id": "case_tt_core_p3", "marca": "Thermaltake", "modelo": "Core P3 TG Pro", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 140, "imagen": "imagenes/Core P3 TG Pro.jpg" },
        { "id": "case_tt_core_p5", "marca": "Thermaltake", "modelo": "Core P5", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 170, "imagen": "imagenes/Core P5.jpg" },
        { "id": "case_tt_tower100", "marca": "Thermaltake", "modelo": "The Tower 100", "formato": "Mini-ITX", "precio": 100, "imagen": "imagenes/The Tower 100.jpg" },
        { "id": "case_tt_tower500", "marca": "Thermaltake", "modelo": "The Tower 500", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 180, "imagen": "imagenes/The Tower 500.jpg" },
        { "id": "case_tt_view71", "marca": "Thermaltake", "modelo": "View 71 TG", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 200, "imagen": "imagenes/View 71 TG.jpg" },
        { "id": "case_tt_ceres500", "marca": "Thermaltake", "modelo": "Ceres 500 TG ARGB", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 170, "imagen": "imagenes/Ceres 500 TG ARGB.jpg" },

        // --- BE QUIET! ---
        { "id": "case_bq_pure500dx", "marca": "be quiet!", "modelo": "Pure Base 500DX", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 110, "imagen": "imagenes/Pure Base 500DX.jpg" },
        { "id": "case_bq_pure500fx", "marca": "be quiet!", "modelo": "Pure Base 500FX", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 130, "imagen": "imagenes/Pure Base 500FX.jpg" },
        { "id": "case_bq_silent802", "marca": "be quiet!", "modelo": "Silent Base 802", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 170, "imagen": "imagenes/Silencio S600.jpg" },
        { "id": "case_bq_dark900", "marca": "be quiet!", "modelo": "Dark Base Pro 900", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 260, "imagen": "imagenes/Dark Base Pro 900.jpg" },
        { "id": "case_bq_dark700", "marca": "be quiet!", "modelo": "Dark Base 700", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 190, "imagen": "imagenes/Dark Base 700.jpg" },

        // --- DEEPCOOL Y AEROCOOL (Opciones calidad-precio) ---
        { "id": "case_dc_ch510", "marca": "DeepCool", "modelo": "CH510", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 80, "imagen": "imagenes/CH510.jpg" },
        { "id": "case_dc_cg560", "marca": "DeepCool", "modelo": "CG560", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 85, "imagen": "imagenes/CG560.jpg" },
        { "id": "case_dc_macube110", "marca": "DeepCool", "modelo": "Macube 110", "formato": "Micro-ATX, Mini-ITX", "precio": 55, "imagen": "imagenes/Macube 110.jpg" },
        { "id": "case_dc_matrexx55", "marca": "DeepCool", "modelo": "Matrexx 55 V3", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 65, "imagen": "imagenes/Matrexx 55 V3.jpg" },
        { "id": "case_aero_cylon", "marca": "Aerocool", "modelo": "Cylon RGB", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 50, "imagen": "imagenes/Cylon RGB.jpg" },

        // --- GABINETES DE ENSAMBLADORES (Asus, MSI, Gigabyte) ---
        { "id": "case_asus_helios", "marca": "ASUS", "modelo": "ROG Strix Helios", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 300, "imagen": "imagenes/ROG Strix Helios.jpg" },
        { "id": "case_asus_tufgt501", "marca": "ASUS", "modelo": "TUF Gaming GT501", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 170, "imagen": "imagenes/TUF Gaming GT501.jpg" },
        { "id": "case_msi_gungnir", "marca": "MSI", "modelo": "MPG Gungnir 110R", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 110, "imagen": "imagenes/MPG Gungnir 110R.jpg" },
        { "id": "case_msi_forge", "marca": "MSI", "modelo": "MAG Forge 100R", "formato": "ATX, Micro-ATX, Mini-ITX", "precio": 70, "imagen": "imagenes/MAG Forge 100R.jpg" },
        { "id": "case_giga_c700", "marca": "Gigabyte", "modelo": "AORUS C700 Glass", "formato": "E-ATX, ATX, Micro-ATX, Mini-ITX", "precio": 400, "imagen": "imagenes/AORUS C700 Glass.jpg" },
    ],
    "perifericos": [
        // --- MOUSE (GAMA DE ENTRADA / ECONÓMICOS) ---
        { "id": "perif_m_logi_g203", "tipo": "Mouse", "marca": "Logitech", "modelo": "G203 Lightsync", "precio": 30, "imagen": "imagenes/G203 Lightsync.jpg" },
        { "id": "perif_m_razer_vipermini", "tipo": "Mouse", "marca": "Razer", "modelo": "Viper Mini", "precio": 35, "imagen": "imagenes/Viper Mini.jpg" },
        { "id": "perif_m_steel_rival3", "tipo": "Mouse", "marca": "SteelSeries", "modelo": "Rival 3", "precio": 35, "imagen": "imagenes/Rival 3.jpg" },
        { "id": "perif_m_corsair_katar", "tipo": "Mouse", "marca": "Corsair", "modelo": "Katar Pro", "precio": 30, "imagen": "imagenes/Katar Pro.jpg" },
        { "id": "perif_m_hyperx_core", "tipo": "Mouse", "marca": "HyperX", "modelo": "Pulsefire Core", "precio": 25, "imagen": "imagenes/Pulsefire Core.jpg" },
        { "id": "perif_m_blackshark_mako", "tipo": "Mouse", "marca": "Black Shark", "modelo": "Mako M1 Dual Mode", "precio": 40, "imagen": "imagenes/Mako M1 Dual Mode.jpg" },

        // --- MOUSE (GAMA MEDIA / COMPETITIVOS) ---
        { "id": "perif_m_logi_g305", "tipo": "Mouse", "marca": "Logitech", "modelo": "G305 Lightspeed", "precio": 50, "imagen": "imagenes/G305 Lightspeed.jpg" },
        { "id": "perif_m_logi_g502", "tipo": "Mouse", "marca": "Logitech", "modelo": "G502 HERO", "precio": 45, "imagen": "imagenes/G502 HERO.jpg" },
        { "id": "perif_m_razer_deathv2", "tipo": "Mouse", "marca": "Razer", "modelo": "DeathAdder V2", "precio": 50, "imagen": "imagenes/DeathAdder V2.jpg" },
        { "id": "perif_m_razer_basilisk", "tipo": "Mouse", "marca": "Razer", "modelo": "Basilisk V3", "precio": 65, "imagen": "imagenes/Basilisk V3.jpg" },
        { "id": "perif_m_hyperx_haste", "tipo": "Mouse", "marca": "HyperX", "modelo": "Pulsefire Haste", "precio": 50, "imagen": "imagenes/Pulsefire Haste.jpg" },
        { "id": "perif_m_glorious_o", "tipo": "Mouse", "marca": "Glorious", "modelo": "Model O", "precio": 55, "imagen": "imagenes/Model O.jpg" },
        { "id": "perif_m_glorious_d", "tipo": "Mouse", "marca": "Glorious", "modelo": "Model D", "precio": 55, "imagen": "imagenes/Model D.jpg" },
        { "id": "perif_m_zowie_ec2", "tipo": "Mouse", "marca": "Zowie", "modelo": "EC2-C", "precio": 70, "imagen": "imagenes/EC2-C.jpg" },
        { "id": "perif_m_zowie_fk2", "tipo": "Mouse", "marca": "Zowie", "modelo": "FK2-C", "precio": 70, "imagen": "imagenes/FK2-C.jpg" },
        { "id": "perif_m_coolerm_mm710", "tipo": "Mouse", "marca": "Cooler Master", "modelo": "MM710", "precio": 45, "imagen": "imagenes/MM710.jpg" },
        { "id": "perif_m_endgame_xm1r", "tipo": "Mouse", "marca": "Endgame Gear", "modelo": "XM1r", "precio": 60, "imagen": "imagenes/XM1r.jpg" },

        // --- MOUSE (GAMA ALTA / INALÁMBRICOS PREMIUM) ---
        { "id": "perif_m_logi_gpro", "tipo": "Mouse", "marca": "Logitech", "modelo": "G Pro X Superlight", "precio": 130, "imagen": "imagenes/G Pro X Superlight.jpg" },
        { "id": "perif_m_logi_gpro2", "tipo": "Mouse", "marca": "Logitech", "modelo": "G Pro X Superlight 2", "precio": 160, "imagen": "imagenes/G Pro X Superlight 2.jpg" },
        { "id": "perif_m_logi_g502x", "tipo": "Mouse", "marca": "Logitech", "modelo": "G502 X Plus", "precio": 150, "imagen": "imagenes/G502 X Plus.jpg" },
        { "id": "perif_m_razer_viperv2", "tipo": "Mouse", "marca": "Razer", "modelo": "Viper V2 Pro", "precio": 140, "imagen": "imagenes/Viper V2 Pro.jpg" },
        { "id": "perif_m_razer_deathv3", "tipo": "Mouse", "marca": "Razer", "modelo": "DeathAdder V3 Pro", "precio": 150, "imagen": "imagenes/DeathAdder V3 Pro.jpg" },
        { "id": "perif_m_asus_harpe", "tipo": "Mouse", "marca": "ASUS", "modelo": "ROG Harpe Ace Aim Lab", "precio": 140, "imagen": "imagenes/ROG Harpe Ace Aim Lab.jpg" },
        { "id": "perif_m_corsair_m65", "tipo": "Mouse", "marca": "Corsair", "modelo": "M65 RGB Ultra Wireless", "precio": 120, "imagen": "imagenes/M65 RGB Ultra Wireless.jpg" },
        { "id": "perif_m_steel_aerox5", "tipo": "Mouse", "marca": "SteelSeries", "modelo": "Aerox 5 Wireless", "precio": 130, "imagen": "imagenes/aerox5.jpg" },
        { "id": "perif_m_hyperx_haste2", "tipo": "Mouse", "marca": "HyperX", "modelo": "Pulsefire Haste 2 Wireless", "precio": 90, "imagen": "imagenes/Pulsefire Haste 2 Wireless.jpg" },
        { "id": "perif_m_roccat_kone", "tipo": "Mouse", "marca": "Roccat", "modelo": "Kone Pro Air", "precio": 110, "imagen": "imagenes/Kone Pro Air.jpg" },

        // --- MOUSEPADS (TAMAÑO ESTÁNDAR Y COMPETITIVO) ---
        { "id": "perif_mp_logi_g240", "tipo": "Mousepad", "marca": "Logitech", "modelo": "G240 Cloth (34x28cm)", "precio": 20, "imagen": "imagenes/G240 Cloth (34x28cm).jpg" },
        { "id": "perif_mp_steel_qck_m", "tipo": "Mousepad", "marca": "SteelSeries", "modelo": "QcK Medium (32x27cm)", "precio": 15, "imagen": "imagenes/QcK Medium (32x27cm).jpg" },
        { "id": "perif_mp_zowie_gsr", "tipo": "Mousepad", "marca": "Zowie", "modelo": "G-SR Control (47x39cm)", "precio": 35, "imagen": "imagenes/G-SR Control (47x39cm).jpg" },
        { "id": "perif_mp_zowie_gtfx", "tipo": "Mousepad", "marca": "Zowie", "modelo": "G-TF X Speed (47x39cm)", "precio": 35, "imagen": "imagenes/G-TF X Speed (47x39cm).jpg" },
        { "id": "perif_mp_razer_gigantus_l", "tipo": "Mousepad", "marca": "Razer", "modelo": "Gigantus V2 Large (45cmx40cm)", "precio": 30, "imagen": "imagenes/Gigantus V2 Large (45cmx40cm).jpg" },
        { "id": "perif_mp_artisan_zero", "tipo": "Mousepad", "marca": "Artisan", "modelo": "Ninja FX Zero XL (49x42cm)", "precio": 65, "imagen": "imagenes/Ninja FX Zero XL (49x42cm).jpg" },
        { "id": "perif_mp_lgg_saturn", "tipo": "Mousepad", "marca": "Lethal Gaming Gear", "modelo": "Saturn Pro XL (49x41cm)", "precio": 50, "imagen": "imagenes/Saturn Pro XL (49x41cm).jpg" },

        // --- MOUSEPADS (EXTENDIDOS / PARA TECLADO Y MOUSE) ---
        { "id": "perif_mp_hyperx_fury_xl", "tipo": "Mousepad", "marca": "HyperX", "modelo": "Fury S Pro XL (90x42cm)", "precio": 35, "imagen": "imagenes/Fury S Pro XL (90x42cm).jpg" },
        { "id": "perif_mp_logi_g840", "tipo": "Mousepad", "marca": "Logitech", "modelo": "G840 XL Cloth (90x40cm)", "precio": 50, "imagen": "imagenes/G840 XL Cloth (90x40cm).jpg" },
        { "id": "perif_mp_corsair_mm300", "tipo": "Mousepad", "marca": "Corsair", "modelo": "MM300 Pro Extended (93x30cm)", "precio": 40, "imagen": "imagenes/MM300 Pro Extended (93x30cm).jpg" },
        { "id": "perif_mp_steel_qck_xl", "tipo": "Mousepad", "marca": "SteelSeries", "modelo": "QcK Heavy XXL (90x40cm)", "precio": 40, "imagen": "imagenes/QcK Heavy XXL (90x40cm).jpg" },
        { "id": "perif_mp_asus_scabbard", "tipo": "Mousepad", "marca": "ASUS", "modelo": "ROG Scabbard II (90x40cm)", "precio": 55, "imagen": "imagenes/ROG Scabbard II (90x40cm).jpg" },
        { "id": "perif_mp_glorious_ext", "tipo": "Mousepad", "marca": "Glorious", "modelo": "Extended Gaming (36x11)", "precio": 35, "imagen": "imagenes/Extended Gaming (36x11).jpg" },

        // --- MOUSEPADS (CON ILUMINACIÓN RGB) ---
        { "id": "perif_mp_razer_goliathus_ext", "tipo": "Mousepad", "marca": "Razer", "modelo": "Goliathus Extended Chroma (92x29cm)", "precio": 60, "imagen": "imagenes/Goliathus Extended Chroma (92x29cm).jpg" },
        { "id": "perif_mp_corsair_mm700", "tipo": "Mousepad", "marca": "Corsair", "modelo": "MM700 RGB Extended (93x40cm)", "precio": 70, "imagen": "imagenes/MM700 RGB Extended (93x40cm).jpg" },
        { "id": "perif_mp_steel_prism_xl", "tipo": "Mousepad", "marca": "SteelSeries", "modelo": "QcK Prism Cloth XL (90x30cm)", "precio": 60, "imagen": "imagenes/QcK Prism Cloth XL (90x30cm).jpg" },
        { "id": "perif_mp_roccat_sense", "tipo": "Mousepad", "marca": "Roccat", "modelo": "Sense AIMO XXL (90x40cm)", "precio": 55, "imagen": "imagenes/Sense AIMO XXL (90x40cm).jpg" },

        // --- MOUSEPADS (GIGANTES / FULL DESK) ---
        { "id": "perif_mp_razer_gigantus_3xl", "tipo": "Mousepad", "marca": "Razer", "modelo": "Gigantus V2 3XL (120x55cm)", "precio": 55, "imagen": "imagenes/Gigantus V2 3XL (120x55cm).jpg" },
        { "id": "perif_mp_glorious_3xl", "tipo": "Mousepad", "marca": "Glorious", "modelo": "3XL Extended (122x61cm)", "precio": 60, "imagen": "imagenes/3XL Extended (122x61cm).jpg" },
        { "id": "perif_mp_corsair_mm500", "tipo": "Mousepad", "marca": "Corsair", "modelo": "MM500 Premium 3XL (122x61cm)", "precio": 55, "imagen": "imagenes/MM500 Premium 3XL (122x61cm).jpg" },
        // --- TECLADOS (COMPACTOS 60% y 65% - Máximo espacio para el mouse) ---
        { "id": "perif_t_redragon_k630", "tipo": "Teclado", "marca": "Redragon", "modelo": "Dragonborn K630 (60%)", "precio": 40, "imagen": "imagenes/Dragonborn K630 (60).jpg" },
        { "id": "perif_t_royal_rk61", "tipo": "Teclado", "marca": "Royal Kludge", "modelo": "RK61 Wireless (60%)", "precio": 50, "imagen": "imagenes/RK61 Wireless (60).jpg" },
        { "id": "perif_t_hyperx_60", "tipo": "Teclado", "marca": "HyperX", "modelo": "Alloy Origins 60", "precio": 85, "imagen": "imagenes/Alloy Origins 60.jpg" },
        { "id": "perif_t_razer_huntsman_mini", "tipo": "Teclado", "marca": "Razer", "modelo": "Huntsman Mini (60%)", "precio": 100, "imagen": "imagenes/Huntsman Mini (60).jpg" },
        { "id": "perif_t_corsair_k65", "tipo": "Teclado", "marca": "Corsair", "modelo": "K65 RGB MINI (60%)", "precio": 90, "imagen": "imagenes/K65 RGB MINI (60).jpg" },
        { "id": "perif_t_keychron_k6", "tipo": "Teclado", "marca": "Keychron", "modelo": "K6 Wireless (65%)", "precio": 85, "imagen": "imagenes/K6 Wireless (65).jpg" },
        { "id": "perif_t_glorious_compact", "tipo": "Teclado", "marca": "Glorious", "modelo": "GMMK Compact (60%)", "precio": 95, "imagen": "imagenes/GMMK Compact (60).jpg" },
        { "id": "perif_t_wooting_60he", "tipo": "Teclado", "marca": "Wooting", "modelo": "60HE (Switches Magnéticos)", "precio": 180, "imagen": "imagenes/60HE (Switches Magneticos).jpg" },

        // --- TECLADOS (TKL 80% - Sin pad numérico, el estándar competitivo) ---
        { "id": "perif_t_redragon_k552", "tipo": "Teclado", "marca": "Redragon", "modelo": "Kumara K552 TKL", "precio": 45, "imagen": "imagenes/Kumara K552 TKL.jpg" },
        { "id": "perif_t_logi_gpro", "tipo": "Teclado", "marca": "Logitech", "modelo": "G PRO X TKL", "precio": 120, "imagen": "imagenes/G PRO X TKL.jpg" },
        { "id": "perif_t_hyperx_core", "tipo": "Teclado", "marca": "HyperX", "modelo": "Alloy Origins Core TKL", "precio": 90, "imagen": "imagenes/Alloy Origins Core TKL.jpg" },
        { "id": "perif_t_razer_huntsman_v2_tkl", "tipo": "Teclado", "marca": "Razer", "modelo": "Huntsman V2 TKL", "precio": 130, "imagen": "imagenes/Huntsman V2 TKL.jpg" },
        { "id": "perif_t_steel_apex_tkl", "tipo": "Teclado", "marca": "SteelSeries", "modelo": "Apex Pro TKL", "precio": 170, "imagen": "imagenes/Apex Pro TKL.jpg" },
        { "id": "perif_t_corsair_k70_tkl", "tipo": "Teclado", "marca": "Corsair", "modelo": "K70 RGB TKL", "precio": 140, "imagen": "imagenes/K70 RGB TKL.jpg" },
        { "id": "perif_t_asus_scope_tkl", "tipo": "Teclado", "marca": "ASUS", "modelo": "ROG Strix Scope NX TKL", "precio": 115, "imagen": "imagenes/ROG Strix Scope NX TKL.jpg" },

        // --- TECLADOS (FULL SIZE 100% - Ideales para trabajar y macros extras) ---
        { "id": "perif_t_razer_blackwidow", "tipo": "Teclado", "marca": "Razer", "modelo": "BlackWidow V3", "precio": 120, "imagen": "imagenes/BlackWidow V3.jpg" },
        { "id": "perif_t_corsair_k100", "tipo": "Teclado", "marca": "Corsair", "modelo": "K100 RGB Optical-Mechanical", "precio": 200, "imagen": "imagenes/K100 RGB Optical-Mechanical.jpg" },
        { "id": "perif_t_logi_g915", "tipo": "Teclado", "marca": "Logitech", "modelo": "G915 Lightspeed Wireless", "precio": 220, "imagen": "imagenes/G915 Lightspeed Wireless.jpg" },
        { "id": "perif_t_hyperx_elite2", "tipo": "Teclado", "marca": "HyperX", "modelo": "Alloy Elite 2", "precio": 110, "imagen": "imagenes/Alloy Elite 2.jpg" },
        { "id": "perif_t_asus_flare2", "tipo": "Teclado", "marca": "ASUS", "modelo": "ROG Strix Flare II Animate", "precio": 190, "imagen": "imagenes/ROG Strix Flare II Animate.jpg" },
        { "id": "perif_t_evga_z15", "tipo": "Teclado", "marca": "EVGA", "modelo": "Z15 RGB", "precio": 65, "imagen": "imagenes/Z15 RGB.jpg" },

        // --- AURICULARES (COMPETITIVOS Y SHOOTERS - Audio espacial preciso) ---
        { "id": "perif_h_hyperx_cloud2", "tipo": "Auricular", "marca": "HyperX", "modelo": "Cloud II", "precio": 80, "imagen": "imagenes/Cloud II.JPG" },
        { "id": "perif_h_razer_blackshark", "tipo": "Auricular", "marca": "Razer", "modelo": "BlackShark V2 Pro", "precio": 130, "imagen": "imagenes/BlackShark V2 Pro.JPG" },
        { "id": "perif_h_logi_gpro", "tipo": "Auricular", "marca": "Logitech", "modelo": "G PRO X", "precio": 100, "imagen": "imagenes/G PRO X.jpg" },
        { "id": "perif_h_epos_h3", "tipo": "Auricular", "marca": "EPOS", "modelo": "H3", "precio": 120, "imagen": "imagenes/H3.jpg" },
        { "id": "perif_h_hyperx_alpha", "tipo": "Auricular", "marca": "HyperX", "modelo": "Cloud Alpha S", "precio": 110, "imagen": "imagenes/Cloud Alpha S.jpg" },

        // --- AURICULARES (INMERSIVOS Y BAJOS POTENTES - Graves profundos) ---
        { "id": "perif_h_razer_kraken", "tipo": "Auricular", "marca": "Razer", "modelo": "Kraken V3 Hypersense", "precio": 100, "imagen": "imagenes/Kraken V3 Hypersense.jpg" },
        { "id": "perif_h_corsair_hs80", "tipo": "Auricular", "marca": "Corsair", "modelo": "HS80 RGB USB", "precio": 100, "imagen": "imagenes/HS80 RGB USB.jpg" },
        { "id": "perif_h_audio_m50x", "tipo": "Auricular", "marca": "Audio-Technica", "modelo": "ATH-M50x", "precio": 150, "imagen": "imagenes/ATH-M50x.jpg" },
        { "id": "perif_h_beyer_dt770", "tipo": "Auricular", "marca": "Beyerdynamic", "modelo": "DT 770 PRO 80 Ohm", "precio": 160, "imagen": "imagenes/DT 770 PRO 80 Ohm.jpg" },
        { "id": "perif_h_jbl_quantum", "tipo": "Auricular", "marca": "JBL", "modelo": "Quantum 810", "precio": 150, "imagen": "imagenes/Quantum 810.jpg" },

        // --- AURICULARES (INALÁMBRICOS PREMIUM - Libertad sin cables) ---
        { "id": "perif_h_astro_a50", "tipo": "Auricular", "marca": "Astro", "modelo": "A50 Wireless + Base", "precio": 300, "imagen": "imagenes/A50 Wireless + Base.jpg" },
        { "id": "perif_h_steel_novapro", "tipo": "Auricular", "marca": "SteelSeries", "modelo": "Arctis Nova Pro Wireless", "precio": 350, "imagen": "imagenes/Arctis Nova Pro Wireless.jpg" },
        { "id": "perif_h_logi_g733", "tipo": "Auricular", "marca": "Logitech", "modelo": "G733 Lightspeed", "precio": 130, "imagen": "imagenes/G733 Lightspeed.jpg" },
        { "id": "perif_h_corsair_virtuoso", "tipo": "Auricular", "marca": "Corsair", "modelo": "Virtuoso RGB Wireless XT", "precio": 270, "imagen": "imagenes/Virtuoso RGB Wireless XT.jpg" },
        { "id": "perif_h_hyperx_flight", "tipo": "Auricular", "marca": "HyperX", "modelo": "Cloud Flight Wireless", "precio": 120, "imagen": "imagenes/Cloud Flight Wireless.jpg" },


        // --- MONITORES (1080p FHD - Máximo rendimiento y FPS para eSports) ---
        { "id": "perif_mon_aoc_24g2", "tipo": "Monitor", "marca": "AOC", "modelo": "24G2 24\" 1080p 144Hz", "precio": 180, "imagen": "imagenes/24G2 24.jpg" },
        { "id": "perif_mon_asus_tuf24", "tipo": "Monitor", "marca": "ASUS", "modelo": "TUF VG249Q 24\" 1080p 144Hz", "precio": 200, "imagen": "imagenes/TUF VG249Q 24.jpg" },
        { "id": "perif_mon_zowie_xl2546k", "tipo": "Monitor", "marca": "Zowie", "modelo": "XL2546K 24.5\" 1080p 240Hz", "precio": 430, "imagen": "imagenes/XL2546K 24.5.jpg" },
        { "id": "perif_mon_alien_360", "tipo": "Monitor", "marca": "Alienware", "modelo": "AW2523HF 24.5\" 1080p 360Hz", "precio": 400, "imagen": "imagenes/AW2523HF 24.5.jpg" },
        { "id": "perif_mon_viewsonic_xg24", "tipo": "Monitor", "marca": "ViewSonic", "modelo": "XG2431 24\" 1080p 240Hz", "precio": 280, "imagen": "imagenes/XG2431 24.jpg" },

        // --- MONITORES (2K / 1440p QHD - El punto dulce entre gráficos y fluidez) ---
        { "id": "perif_mon_lg_27gl850", "tipo": "Monitor", "marca": "LG", "modelo": "UltraGear 27GL850 27\" 2K 144Hz", "precio": 350, "imagen": "imagenes/UltraGear 27GL850 27.jpg" },
        { "id": "perif_mon_gigabyte_m27q", "tipo": "Monitor", "marca": "Gigabyte", "modelo": "M27Q 27\" 2K 170Hz", "precio": 320, "imagen": "imagenes/M27Q 27.jpg" },
        { "id": "perif_mon_msi_mag274", "tipo": "Monitor", "marca": "MSI", "modelo": "Optix MAG274QRF-QD 27\" 2K 165Hz", "precio": 380, "imagen": "imagenes/Optix MAG274QRF-QD 27.jpg" },
        { "id": "perif_mon_samsung_g7", "tipo": "Monitor", "marca": "Samsung", "modelo": "Odyssey G7 27\" 2K 240Hz Curvo", "precio": 550, "imagen": "imagenes/Odyssey G7 27.jpg" },
        { "id": "perif_mon_asus_rog27", "tipo": "Monitor", "marca": "ASUS", "modelo": "ROG Swift PG279QM 27\" 2K 240Hz", "precio": 700, "imagen": "imagenes/ROG Swift PG279QM 27.jpg" },

        // --- MONITORES (4K UHD - Calidad visual extrema e inmersión total) ---
        { "id": "perif_mon_gigabyte_m28u", "tipo": "Monitor", "marca": "Gigabyte", "modelo": "M28U 28\" 4K 144Hz", "precio": 500, "imagen": "imagenes/M28U 28.jpg" },
        { "id": "perif_mon_lg_27gn950", "tipo": "Monitor", "marca": "LG", "modelo": "UltraGear 27GN950-B 27\" 4K 144Hz", "precio": 650, "imagen": "imagenes/UltraGear 27GN950-B 27.jpg" },
        { "id": "perif_mon_samsung_neo_g8", "tipo": "Monitor", "marca": "Samsung", "modelo": "Odyssey Neo G8 32\" 4K 240Hz", "precio": 1200, "imagen": "imagenes/Odyssey Neo G8 32.jpg" },
        { "id": "perif_mon_asus_pg32uqx", "tipo": "Monitor", "marca": "ASUS", "modelo": "ROG Swift PG32UQX 32\" 4K 144Hz Mini-LED", "precio": 2500, "imagen": "imagenes/ROG Swift PG32UQX 32.jpg" },
        { "id": "perif_mon_dell_g3223q", "tipo": "Monitor", "marca": "Dell", "modelo": "G3223Q 32\" 4K 144Hz", "precio": 700, "imagen": "imagenes/G3223Q 32.jpg" },
    ],

    "laptops": [
        // --- LAPTOPS (ESTUDIO, PROGRAMACIÓN Y MOVILIDAD - Ultraligeras y batería extrema) ---
        {
            "id": "lap_apple_air_m1",
            "tipo": "Laptop",
            "marca": "Apple",
            "modelo": "MacBook Air M1",
            "categoria": "Ultrabook & Estudio",
            "precio": 799,
            "imagen": "imagenes/MacBook Air M1.jpg",
            "specs": {
                "cpu": "Apple M1 (8 núcleos CPU, hasta 3.2 GHz)",
                "gpu": "GPU Integrada Apple 7-Core",
                "ram": "8 GB Memoria Unificada LPDDR4X",
                "disco": "256 GB SSD Ultrarrápido",
                "pantalla": "13.3\" Retina IPS (2560x1600) 400 nits",
                "destacado": "Batería de 18h • 100% Silenciosa (Sin ventiladores) • Peso 1.29 kg"
            }
        },
        {
            "id": "lap_apple_air_m2",
            "tipo": "Laptop",
            "marca": "Apple",
            "modelo": "MacBook Air M2",
            "categoria": "Diseño & Movilidad",
            "precio": 999,
            "imagen": "imagenes/MacBook Air M2.jpg",
            "specs": {
                "cpu": "Apple M2 (8 núcleos CPU, hasta 3.5 GHz)",
                "gpu": "GPU Integrada Apple 8-Core",
                "ram": "8 GB Memoria Unificada LPDDR5",
                "disco": "256 GB SSD Ultrarrápido",
                "pantalla": "13.6\" Liquid Retina (2560x1664) 500 nits con Notch",
                "destacado": "Puerto de carga MagSafe 3 • Cámara FaceTime HD 1080p • Grosor 11.3 mm"
            }
        },
        {
            "id": "lap_apple_air_m3",
            "tipo": "Laptop",
            "marca": "Apple",
            "modelo": "MacBook Air M3",
            "categoria": "Alto Rendimiento",
            "precio": 1299,
            "imagen": "imagenes/MacBook Air M3.jpg",
            "specs": {
                "cpu": "Apple M3 (8 núcleos CPU de 3 nanómetros)",
                "gpu": "GPU Integrada Apple 10-Core con Ray Tracing",
                "ram": "16 GB Memoria Unificada LPDDR5",
                "disco": "512 GB SSD PCIe Ultrarrápido",
                "pantalla": "13.6\" Liquid Retina (2560x1664) 1 billón de colores",
                "destacado": "Soporte para 2 pantallas externas • Wi-Fi 6E ultrarrápido • Batería 18h"
            }
        },
        {
            "id": "lap_lg_gram_14",
            "tipo": "Laptop",
            "marca": "LG",
            "modelo": "Gram 14 Ultralight",
            "categoria": "Ultraligera (999g)",
            "precio": 1100,
            "imagen": "imagenes/Gram 14 Ultralight.jpg",
            "specs": {
                "cpu": "Intel Core i7-1360P (12 núcleos, 16 hilos, hasta 5.0 GHz)",
                "gpu": "Intel Iris Xe Graphics",
                "ram": "16 GB LPDDR5 6000 MHz",
                "disco": "512 GB SSD NVMe M.2 Gen4",
                "pantalla": "14\" WUXGA (1920x1200) IPS Antirreflejo 16:10",
                "destacado": "¡Solo pesa 999 gramos! • Chasis de nano-carbono y magnesio militar"
            }
        },
        {
            "id": "lap_lg_gram_16",
            "tipo": "Laptop",
            "marca": "LG",
            "modelo": "Gram 16 Pro",
            "categoria": "Batería Extrema",
            "precio": 1300,
            "imagen": "imagenes/Gram 16 Pro.jpg",
            "specs": {
                "cpu": "Intel Core i7-1360P (12 núcleos, 16 hilos, hasta 5.0 GHz)",
                "gpu": "Intel Iris Xe Graphics",
                "ram": "16 GB LPDDR5 6000 MHz",
                "disco": "1 TB SSD NVMe PCIe Gen4",
                "pantalla": "16\" WQXGA (2560x1600) IPS 99% DCI-P3 350 nits",
                "destacado": "Batería de 80Wh (hasta 20.5 horas de uso continuo) • Peso pluma 1.19 kg"
            }
        },
        {
            "id": "lap_asus_zenbook14",
            "tipo": "Laptop",
            "marca": "ASUS",
            "modelo": "Zenbook 14 OLED",
            "categoria": "Pantalla 2.8K OLED",
            "precio": 900,
            "imagen": "imagenes/Zenbook 14 OLED.jpg",
            "specs": {
                "cpu": "AMD Ryzen 7 7730U (8 núcleos, 16 hilos, hasta 4.5 GHz)",
                "gpu": "AMD Radeon Graphics Vega 8",
                "ram": "16 GB LPDDR4X 4266 MHz",
                "disco": "512 GB SSD M.2 NVMe PCIe 3.0",
                "pantalla": "14\" 2.8K (2880x1800) OLED 90Hz 100% DCI-P3 600 nits HDR",
                "destacado": "Validada por Pantone • Audio estéreo Harman Kardon • Chasis de aluminio"
            }
        },
        {
            "id": "lap_dell_xps13",
            "tipo": "Laptop",
            "marca": "Dell",
            "modelo": "XPS 13 Plus 9320",
            "categoria": "Ultrabook Premium",
            "precio": 1400,
            "imagen": "imagenes/XPS 13 Plus 9320.jpg",
            "specs": {
                "cpu": "Intel Core i7-1360P (12 núcleos, hasta 5.0 GHz)",
                "gpu": "Intel Iris Xe Graphics",
                "ram": "16 GB LPDDR5 6000 MHz",
                "disco": "512 GB SSD NVMe M.2 Gen4",
                "pantalla": "13.4\" FHD+ (1920x1200) InfinityEdge 500 nits antirreflejo",
                "destacado": "Touchpad háptico de vidrio invisible • Barra táctil de funciones capacitiva"
            }
        },
        {
            "id": "lap_lenovo_thinkpad_x1",
            "tipo": "Laptop",
            "marca": "Lenovo",
            "modelo": "ThinkPad X1 Carbon Gen 11",
            "categoria": "Empresarial & Dev",
            "precio": 1600,
            "imagen": "imagenes/ThinkPad X1 Carbon Gen 11.jpg",
            "specs": {
                "cpu": "Intel Core i7-1355U (10 núcleos, 12 hilos, hasta 5.0 GHz)",
                "gpu": "Intel Iris Xe Graphics",
                "ram": "16 GB LPDDR5 6400 MHz",
                "disco": "512 GB SSD PCIe 4.0 NVMe Opal2",
                "pantalla": "14\" WUXGA (1920x1200) IPS 100% sRGB 400 nits de bajo consumo",
                "destacado": "Teclado ergonómico legendario • Certificación militar MIL-STD-810H"
            }
        },
        {
            "id": "lap_lenovo_yoga7i",
            "tipo": "Laptop",
            "marca": "Lenovo",
            "modelo": "Yoga 7i 2-en-1 Convertible",
            "categoria": "Convertible Táctil 360°",
            "precio": 850,
            "imagen": "imagenes/Yoga 7i 2-en-1 Convertible.jpg",
            "specs": {
                "cpu": "Intel Core i5-1335U (10 núcleos, hasta 4.6 GHz)",
                "gpu": "Intel Iris Xe Graphics",
                "ram": "8 GB LPDDR5 5200 MHz",
                "disco": "512 GB SSD NVMe M.2",
                "pantalla": "14\" 2.2K (2240x1400) IPS Táctil 300 nits 100% sRGB",
                "destacado": "Bisagra de 360° para modo tablet y atril • Compatible con lápiz óptico"
            }
        },
        {
            "id": "lap_lenovo_ideapad_slim",
            "tipo": "Laptop",
            "marca": "Lenovo",
            "modelo": "IdeaPad Slim 5 16ABR8",
            "categoria": "Estudio & Oficina",
            "precio": 700,
            "imagen": "imagenes/IdeaPad Slim 5 16ABR8.jpg",
            "specs": {
                "cpu": "AMD Ryzen 7 7730U (8 núcleos, 16 hilos, 4.5 GHz)",
                "gpu": "AMD Radeon Graphics",
                "ram": "16 GB DDR4 3200 MHz",
                "disco": "512 GB SSD NVMe PCIe",
                "pantalla": "16\" WUXGA (1920x1200) IPS 16:10 Antirreflejo",
                "destacado": "Carga rápida Rapid Charge (2h de uso con 15min) • Cámara web FHD 1080p"
            }
        },
        {
            "id": "lap_hp_spectre",
            "tipo": "Laptop",
            "marca": "HP",
            "modelo": "Spectre x360 14",
            "categoria": "Convertible de Lujo",
            "precio": 1350,
            "imagen": "imagenes/Spectre x360 14.jpg",
            "specs": {
                "cpu": "Intel Core i7-1355U (10 núcleos, hasta 5.0 GHz)",
                "gpu": "Intel Iris Xe Graphics",
                "ram": "16 GB LPDDR4x 4266 MHz",
                "disco": "1 TB SSD PCIe Gen4 NVMe M.2",
                "pantalla": "13.5\" 3K2K (3000x2000) OLED Táctil Gorilla Glass NBT",
                "destacado": "Diseño en corte de gema CNC • Incluye lápiz recargable HP Tilt Pen"
            }
        },
        {
            "id": "lap_hp_envy",
            "tipo": "Laptop",
            "marca": "HP",
            "modelo": "Envy 13 x360",
            "categoria": "Creatividad & Portabilidad",
            "precio": 750,
            "imagen": "imagenes/Envy 13 x360.jpg",
            "specs": {
                "cpu": "Intel Core i5-1235U (10 núcleos, 12 hilos, 4.4 GHz)",
                "gpu": "Intel Iris Xe Graphics",
                "ram": "8 GB DDR4 3200 MHz",
                "disco": "512 GB SSD NVMe M.2",
                "pantalla": "13.3\" FHD (1920x1080) IPS Táctil 400 nits 100% sRGB",
                "destacado": "Chasis 100% de aluminio anodizado • Audio afinado por Bang & Olufsen"
            }
        },
        {
            "id": "lap_hp_aero",
            "tipo": "Laptop",
            "marca": "HP",
            "modelo": "Pavilion Aero 13",
            "categoria": "Ultraligera (<1kg)",
            "precio": 650,
            "imagen": "imagenes/Pavilion Aero 13.jpg",
            "specs": {
                "cpu": "AMD Ryzen 5 7535U (6 núcleos, 12 hilos, hasta 4.55 GHz)",
                "gpu": "AMD Radeon 660M",
                "ram": "8 GB LPDDR5 6400 MHz",
                "disco": "512 GB SSD NVMe M.2",
                "pantalla": "13.3\" WUXGA (1920x1200) IPS 16:10 400 nits sRGB 100%",
                "destacado": "Peso pluma de menos de 1 kg (970g) • Chasis de aleación de magnesio"
            }
        },
        {
            "id": "lap_acer_swift_go",
            "tipo": "Laptop",
            "marca": "Acer",
            "modelo": "Swift Go 14 OLED",
            "categoria": "Pantalla OLED 2.8K",
            "precio": 700,
            "imagen": "imagenes/Swift Go 14 OLED.jpg",
            "specs": {
                "cpu": "AMD Ryzen 5 7640U (6 núcleos Zen 4, hasta 4.9 GHz)",
                "gpu": "AMD Radeon 760M (Arquitectura RDNA 3)",
                "ram": "16 GB LPDDR5 6400 MHz",
                "disco": "512 GB SSD PCIe Gen4 NVMe",
                "pantalla": "14\" 2.8K (2880x1800) OLED 90Hz 100% DCI-P3 500 nits",
                "destacado": "DisplayHDR True Black 500 • Cámara 1440p QHD con reducción de ruido"
            }
        },
        {
            "id": "lap_microsoft_surface5",
            "tipo": "Laptop",
            "marca": "Microsoft",
            "modelo": "Surface Laptop 5",
            "categoria": "Elegancia & Windows 11",
            "precio": 1000,
            "imagen": "imagenes/Surface Laptop 5.jpg",
            "specs": {
                "cpu": "Intel Core i5-1235U (10 núcleos, certificación Intel Evo)",
                "gpu": "Intel Iris Xe Graphics",
                "ram": "8 GB LPDDR5x",
                "disco": "256 GB SSD Extraíble de alta velocidad",
                "pantalla": "13.5\" PixelSense (2256x1504) Táctil 3:2 Gorilla Glass",
                "destacado": "Acabado en aluminio anodizado • Teclado premium ultra silencioso"
            }
        },
        {
            "id": "lap_samsung_galaxybook3",
            "tipo": "Laptop",
            "marca": "Samsung",
            "modelo": "Galaxy Book3 Pro",
            "categoria": "Ecosistema & AMOLED 3K",
            "precio": 1250,
            "imagen": "imagenes/Galaxy Book3 Pro.jpg",
            "specs": {
                "cpu": "Intel Core i7-1360P (12 núcleos, hasta 5.0 GHz)",
                "gpu": "Intel Iris Xe Graphics",
                "ram": "16 GB LPDDR5",
                "disco": "512 GB SSD NVMe M.2",
                "pantalla": "14\" 3K (2880x1800) Dynamic AMOLED 2X 120Hz 500 nits",
                "destacado": "Integración total con celulares Galaxy • Grosor ultra delgado de 11.3 mm"
            }
        },

        // --- LAPTOPS (GAMING GAMA MEDIA - Ideales para 1080p a 144Hz y 165Hz) ---
        {
            "id": "lap_lenovo_loq15",
            "tipo": "Laptop",
            "marca": "Lenovo",
            "modelo": "LOQ 15IRH8",
            "categoria": "Gaming 1080p",
            "precio": 850,
            "imagen": "imagenes/LOQ 15IRH8.jpg",
            "specs": {
                "cpu": "Intel Core i5-13420H (8 núcleos, 12 hilos, hasta 4.6 GHz)",
                "gpu": "NVIDIA GeForce RTX 4050 6GB GDDR6 (95W TGP)",
                "ram": "16 GB DDR5 5200 MHz (Dual Channel)",
                "disco": "512 GB SSD NVMe PCIe 4.0 M.2",
                "pantalla": "15.6\" FHD (1920x1080) IPS 144Hz G-Sync 350 nits",
                "destacado": "Lenovo AI Engine+ con MUX Switch • Teclado gaming con retroiluminación"
            }
        },
        {
            "id": "lap_lenovo_legion5_slim",
            "tipo": "Laptop",
            "marca": "Lenovo",
            "modelo": "Legion Slim 5 16APH8",
            "categoria": "Gaming & 165Hz",
            "precio": 1150,
            "imagen": "imagenes/Legion Slim 5 16APH8.jpg",
            "specs": {
                "cpu": "AMD Ryzen 5 7640HS (6 núcleos, 12 hilos, hasta 5.0 GHz)",
                "gpu": "NVIDIA GeForce RTX 4060 8GB GDDR6 (140W TGP)",
                "ram": "16 GB DDR5 5600 MHz",
                "disco": "512 GB SSD PCIe 4.0 NVMe M.2",
                "pantalla": "16\" WQXGA (2560x1600) IPS 165Hz 100% sRGB G-Sync",
                "destacado": "Refrigeración Legion Coldfront 5.0 • Teclado Legion TrueStrike anti-ghosting"
            }
        },
        {
            "id": "lap_acer_nitro5_4050",
            "tipo": "Laptop",
            "marca": "Acer",
            "modelo": "Nitro 5 AN515-58",
            "categoria": "Gaming Accesible",
            "precio": 800,
            "imagen": "imagenes/Nitro 5 AN515-58.jpg",
            "specs": {
                "cpu": "Intel Core i5-12500H (12 núcleos, 16 hilos, hasta 4.5 GHz)",
                "gpu": "NVIDIA GeForce RTX 4050 6GB GDDR6 (140W MGP)",
                "ram": "16 GB DDR4 3200 MHz",
                "disco": "512 GB SSD NVMe PCIe Gen4",
                "pantalla": "15.6\" FHD (1920x1080) IPS 144Hz ComfyView",
                "destacado": "Doble ventilador Acer CoolBoost con 4 salidas de escape de aire"
            }
        },
        {
            "id": "lap_acer_nitro16",
            "tipo": "Laptop",
            "marca": "Acer",
            "modelo": "Nitro 16 AN16-41",
            "categoria": "Gaming Competitivo",
            "precio": 1100,
            "imagen": "imagenes/Nitro 16 AN16-41.jpg",
            "specs": {
                "cpu": "AMD Ryzen 7 7735HS (8 núcleos, 16 hilos, hasta 4.75 GHz)",
                "gpu": "NVIDIA GeForce RTX 4060 8GB GDDR6 (140W MGP)",
                "ram": "16 GB DDR5 4800 MHz",
                "disco": "1 TB SSD PCIe Gen4 NVMe M.2",
                "pantalla": "16\" WUXGA (1920x1200) IPS 165Hz sRGB 100% G-Sync",
                "destacado": "Pasta térmica de metal líquido en CPU • Conmutador MUX Switch integrado"
            }
        },
        {
            "id": "lap_asus_tuf_a15_4050",
            "tipo": "Laptop",
            "marca": "ASUS",
            "modelo": "TUF Gaming A15 FA507NU",
            "categoria": "Resistencia Militar",
            "precio": 900,
            "imagen": "imagenes/TUF Gaming A15 FA507NU.jpg",
            "specs": {
                "cpu": "AMD Ryzen 5 7535HS (6 núcleos, 12 hilos, 4.55 GHz)",
                "gpu": "NVIDIA GeForce RTX 4050 6GB GDDR6 (140W TGP)",
                "ram": "16 GB DDR5 4800 MHz",
                "disco": "512 GB SSD PCIe 4.0 NVMe",
                "pantalla": "15.6\" FHD (1920x1080) 144Hz IPS con Adaptive-Sync",
                "destacado": "Certificación militar MIL-STD-810H • Batería de 90Wh con carga rápida"
            }
        },
        {
            "id": "lap_asus_tuf_f15_4060",
            "tipo": "Laptop",
            "marca": "ASUS",
            "modelo": "TUF Gaming F15 FX507ZV",
            "categoria": "Máxima Potencia 1080p",
            "precio": 1050,
            "imagen": "imagenes/TUF Gaming F15 FX507ZV.jpg",
            "specs": {
                "cpu": "Intel Core i7-12700H (14 núcleos, 20 hilos, hasta 4.7 GHz)",
                "gpu": "NVIDIA GeForce RTX 4060 8GB GDDR6 (140W TGP)",
                "ram": "16 GB DDR4 3200 MHz",
                "disco": "1 TB SSD NVMe PCIe 4.0 M.2",
                "pantalla": "15.6\" FHD (1920x1080) 144Hz IPS 100% sRGB MUX Switch",
                "destacado": "Ventiladores Arc Flow de 84 aspas • Teclado tipo sobremesa retroiluminado RGB"
            }
        },
        {
            "id": "lap_asus_zephyrus_g14",
            "tipo": "Laptop",
            "marca": "ASUS",
            "modelo": "ROG Zephyrus G14 GA402",
            "categoria": "Portátil Gaming Compacto",
            "precio": 1200,
            "imagen": "imagenes/ROG Zephyrus G14 GA402.jpg",
            "specs": {
                "cpu": "AMD Ryzen 7 6800HS (8 núcleos, 16 hilos, hasta 4.7 GHz)",
                "gpu": "NVIDIA GeForce RTX 3060 6GB GDDR6",
                "ram": "16 GB DDR5 4800 MHz",
                "disco": "1 TB SSD NVMe PCIe 4.0",
                "pantalla": "14\" QHD+ (2560x1600) 144Hz ROG Nebula Display 500 nits",
                "destacado": "Chasis ultrafino de 1.65 kg • Refrigeración con cámara de vapor y metal líquido"
            }
        },
        {
            "id": "lap_msi_cyborg15",
            "tipo": "Laptop",
            "marca": "MSI",
            "modelo": "Cyborg 15 A12VE",
            "categoria": "Diseño Cyberpunk",
            "precio": 850,
            "imagen": "imagenes/Cyborg 15 A12VE.jpg",
            "specs": {
                "cpu": "Intel Core i7-12650H (10 núcleos, 16 hilos, hasta 4.7 GHz)",
                "gpu": "NVIDIA GeForce RTX 4050 6GB GDDR6",
                "ram": "16 GB DDR5 4800 MHz",
                "disco": "512 GB SSD NVMe PCIe Gen4",
                "pantalla": "15.6\" FHD (1920x1080) IPS-Level 144Hz",
                "destacado": "Partes translúcidas en chasis estilo cyberpunk • Peso ligero 1.98 kg"
            }
        },
        {
            "id": "lap_msi_katana15",
            "tipo": "Laptop",
            "marca": "MSI",
            "modelo": "Katana 15 B13VFK",
            "categoria": "Gaming & Acción",
            "precio": 1150,
            "imagen": "imagenes/Katana 15 B13VFK.jpg",
            "specs": {
                "cpu": "Intel Core i7-13620H (10 núcleos, 16 hilos, hasta 4.9 GHz)",
                "gpu": "NVIDIA GeForce RTX 4060 8GB GDDR6 (105W TGP)",
                "ram": "16 GB DDR5 5200 MHz",
                "disco": "1 TB SSD NVMe PCIe Gen4",
                "pantalla": "15.6\" FHD (1920x1080) 144Hz IPS-Level",
                "destacado": "Teclado RGB de 4 zonas con WASD transparentes • Sistema Cooler Boost 5"
            }
        },
        {
            "id": "lap_hp_victus15",
            "tipo": "Laptop",
            "marca": "HP",
            "modelo": "Victus 15-fa0031dx",
            "categoria": "Gaming de Entrada",
            "precio": 650,
            "imagen": "imagenes/Victus 15-fa0031dx.jpg",
            "specs": {
                "cpu": "Intel Core i5-12450H (8 núcleos, 12 hilos, 4.4 GHz)",
                "gpu": "NVIDIA GeForce GTX 1650 4GB GDDR6",
                "ram": "8 GB DDR4 3200 MHz",
                "disco": "512 GB SSD PCIe NVMe M.2",
                "pantalla": "15.6\" FHD (1920x1080) IPS 144Hz Micro-Edge",
                "destacado": "Audio afinado por Bang & Olufsen • Centro de control térmico OMEN Gaming Hub"
            }
        },
        {
            "id": "lap_hp_victus16",
            "tipo": "Laptop",
            "marca": "HP",
            "modelo": "Victus 16-s0000",
            "categoria": "Gaming Gran Pantalla",
            "precio": 1000,
            "imagen": "imagenes/Victus 16-s0000.jpg",
            "specs": {
                "cpu": "AMD Ryzen 7 7840HS (8 núcleos, 16 hilos, hasta 5.1 GHz)",
                "gpu": "NVIDIA GeForce RTX 4060 8GB GDDR6 (120W TGP)",
                "ram": "16 GB DDR5 5600 MHz",
                "disco": "1 TB SSD PCIe Gen4 NVMe",
                "pantalla": "16.1\" FHD (1920x1080) IPS 144Hz 300 nits",
                "destacado": "Pantalla expansiva de 16.1 pulgadas • Teclado numérico completo retroiluminado"
            }
        },
        {
            "id": "lap_hp_omen16",
            "tipo": "Laptop",
            "marca": "HP",
            "modelo": "OMEN 16-wf0000",
            "categoria": "Gaming Entusiasta",
            "precio": 1250,
            "imagen": "imagenes/OMEN 16-wf0000.jpg",
            "specs": {
                "cpu": "Intel Core i7-13700HX (16 núcleos, 24 hilos, hasta 5.0 GHz)",
                "gpu": "NVIDIA GeForce RTX 4060 8GB GDDR6 (140W TGP)",
                "ram": "16 GB DDR5 4800 MHz",
                "disco": "1 TB SSD NVMe PCIe Gen4",
                "pantalla": "16.1\" QHD (2560x1440) IPS 165Hz 3ms 100% sRGB",
                "destacado": "Tecnología OMEN Tempest Cooling • Teclado RGB 4 zonas con tecnología anti-ghosting"
            }
        },
        {
            "id": "lap_gigabyte_g5",
            "tipo": "Laptop",
            "marca": "Gigabyte",
            "modelo": "G5 KF Gaming",
            "categoria": "Gaming Equilibrado",
            "precio": 900,
            "imagen": "imagenes/G5 KF Gaming.jpg",
            "specs": {
                "cpu": "Intel Core i5-12500H (12 núcleos, 16 hilos, 4.5 GHz)",
                "gpu": "NVIDIA GeForce RTX 4060 8GB GDDR6 (75W TGP)",
                "ram": "16 GB DDR4 3200 MHz",
                "disco": "512 GB SSD NVMe Gen4",
                "pantalla": "15.6\" FHD (1920x1080) 144Hz Bisel Delgado",
                "destacado": "Refrigeración WINDFORCE con doble ventilador de 59 aspas • Audio DTS:X Ultra"
            }
        },
        {
            "id": "lap_dell_g15",
            "tipo": "Laptop",
            "marca": "Dell",
            "modelo": "G15 5525 Gaming",
            "categoria": "Gaming & Universidad",
            "precio": 800,
            "imagen": "imagenes/G15 5525 Gaming.jpg",
            "specs": {
                "cpu": "AMD Ryzen 7 6800H (8 núcleos, 16 hilos, hasta 4.7 GHz)",
                "gpu": "NVIDIA GeForce RTX 3050 Ti 4GB GDDR6",
                "ram": "16 GB DDR5 4800 MHz",
                "disco": "512 GB SSD NVMe M.2",
                "pantalla": "15.6\" FHD (1920x1080) 120Hz WVA 250 nits",
                "destacado": "Térmica inspirada en Alienware • Botón Game Shift para máximo rendimiento instantáneo"
            }
        },
        {
            "id": "lap_alienware_m15_r7",
            "tipo": "Laptop",
            "marca": "Alienware",
            "modelo": "m15 R7 Gaming",
            "categoria": "Gaming Alienware",
            "precio": 1300,
            "imagen": "imagenes/m15 R7 Gaming.jpg",
            "specs": {
                "cpu": "AMD Ryzen 7 6800H (8 núcleos, 16 hilos, 4.7 GHz)",
                "gpu": "NVIDIA GeForce RTX 3060 6GB GDDR6 (140W TGP)",
                "ram": "16 GB DDR5 4800 MHz",
                "disco": "1 TB SSD M.2 PCIe NVMe",
                "pantalla": "15.6\" QHD (2560x1440) 165Hz G-Sync & Advanced Optimus",
                "destacado": "Iluminación AlienFX RGB por tecla • Tecnología de refrigeración Alienware Cryo-tech"
            }
        },
        {
            "id": "lap_asus_scar18",
            "tipo": "Laptop",
            "marca": "ASUS",
            "modelo": "ROG Strix SCAR 18 (G834)",
            "categoria": "Titán Máximo (RTX 4090)",
            "precio": 3800,
            "imagen": "imagenes/ROG Strix SCAR 18 (G834).jpg",
            "specs": {
                "cpu": "Intel Core i9-13980HX (24 núcleos, 32 hilos, hasta 5.6 GHz)",
                "gpu": "NVIDIA GeForce RTX 4090 16GB GDDR6 (175W TGP)",
                "ram": "32 GB DDR5 5600 MHz",
                "disco": "2 TB SSD PCIe 4.0 NVMe RAID 0",
                "pantalla": "18\" 2.5K (2560x1600) ROG Nebula HDR Mini-LED 240Hz 1100 nits",
                "destacado": "Metal líquido Conductonaut Extreme • Barra RGB envolvente y 3 ventiladores"
            }
        },
        {
            "id": "lap_asus_zephyrus_m16",
            "tipo": "Laptop",
            "marca": "ASUS",
            "modelo": "ROG Zephyrus M16 (GU604)",
            "categoria": "Mini-LED 240Hz & AniMe Matrix",
            "precio": 2700,
            "imagen": "imagenes/ROG Zephyrus M16 (GU604).jpg",
            "specs": {
                "cpu": "Intel Core i9-13900H (14 núcleos, hasta 5.4 GHz)",
                "gpu": "NVIDIA GeForce RTX 4080 12GB GDDR6 (145W TGP)",
                "ram": "32 GB DDR5 4800 MHz",
                "disco": "1 TB SSD PCIe 4.0 NVMe",
                "pantalla": "16\" QHD+ (2560x1600) ROG Nebula HDR 240Hz Mini-LED 1100 nits",
                "destacado": "Pantalla trasera AniMe Matrix programable con LEDs • Bisagra ErgoLift 180°"
            }
        },
        {
            "id": "lap_lenovo_legion_pro7",
            "tipo": "Laptop",
            "marca": "Lenovo",
            "modelo": "Legion Pro 7i Gen 8",
            "categoria": "eSports Pro 240Hz",
            "precio": 2500,
            "imagen": "imagenes/Legion Pro 7i Gen 8.jpg",
            "specs": {
                "cpu": "Intel Core i9-13900HX (24 núcleos, 32 hilos, 5.4 GHz)",
                "gpu": "NVIDIA GeForce RTX 4080 12GB GDDR6 (175W TGP)",
                "ram": "32 GB DDR5 5600 MHz",
                "disco": "1 TB SSD M.2 PCIe Gen4 NVMe",
                "pantalla": "16\" WQXGA (2560x1600) IPS 240Hz 500 nits HDR400",
                "destacado": "Chip de Inteligencia Artificial Lenovo LA-2Q • Cámara de vapor Legion Coldfront"
            }
        },
        {
            "id": "lap_lenovo_legion_9i",
            "tipo": "Laptop",
            "marca": "Lenovo",
            "modelo": "Legion 9i Flagship",
            "categoria": "Ref. Líquida Integrada",
            "precio": 4200,
            "imagen": "imagenes/Legion 9i Flagship.jpg",
            "specs": {
                "cpu": "Intel Core i9-13980HX (24 núcleos, 32 hilos, hasta 5.6 GHz)",
                "gpu": "NVIDIA GeForce RTX 4090 16GB GDDR6 (175W TGP)",
                "ram": "64 GB DDR5 5600 MHz Dual Channel",
                "disco": "2 TB SSD PCIe 4.0 NVMe M.2",
                "pantalla": "16\" 3.2K (3200x2000) Mini-LED 165Hz 100% Adobe RGB",
                "destacado": "Sistema de refrigeración líquida interna Cooler Master • Tapa de carbono forjado única"
            }
        },
        {
            "id": "lap_msi_titan_gt77",
            "tipo": "Laptop",
            "marca": "MSI",
            "modelo": "Titan GT77 HX 13VI",
            "categoria": "La Más Potente del Mundo",
            "precio": 5000,
            "imagen": "imagenes/Titan GT77 HX 13VI.jpg",
            "specs": {
                "cpu": "Intel Core i9-13980HX (24 núcleos, 32 hilos, 5.6 GHz)",
                "gpu": "NVIDIA GeForce RTX 4090 16GB GDDR6 (175W TGP)",
                "ram": "64 GB DDR5 (Expandible a 128 GB en 4 ranuras)",
                "disco": "4 TB SSD PCIe Gen5 + Gen4 NVMe",
                "pantalla": "17.3\" 4K UHD (3840x2160) Mini-LED 144Hz 1000 nits 100% DCI-P3",
                "destacado": "Teclado mecánico Cherry MX Ultra Low Profile • 4 ventiladores y 8 tubos de disipación"
            }
        },
        {
            "id": "lap_msi_raider_ge78",
            "tipo": "Laptop",
            "marca": "MSI",
            "modelo": "Raider GE78 HX 13VH",
            "categoria": "Espectáculo RGB 240Hz",
            "precio": 3000,
            "imagen": "imagenes/Raider GE78 HX 13VH.jpg",
            "specs": {
                "cpu": "Intel Core i9-13980HX (24 núcleos, hasta 5.6 GHz)",
                "gpu": "NVIDIA GeForce RTX 4080 12GB GDDR6 (175W TGP)",
                "ram": "32 GB DDR5 5600 MHz",
                "disco": "2 TB SSD NVMe PCIe Gen4",
                "pantalla": "17\" QHD+ (2560x1600) 240Hz IPS-Level 100% DCI-P3",
                "destacado": "Barra frontal Matrix RGB Mystic Light • Sistema de 6 altavoces Dynaudio"
            }
        },
        {
            "id": "lap_alienware_m18",
            "tipo": "Laptop",
            "marca": "Alienware",
            "modelo": "m18 R1 Extreme",
            "categoria": "Pantalla 480Hz Ultrarrápida",
            "precio": 3500,
            "imagen": "imagenes/m18 R1 Extreme.jpg",
            "specs": {
                "cpu": "AMD Ryzen 9 7945HX (16 núcleos, 32 hilos, 5.4 GHz)",
                "gpu": "NVIDIA GeForce RTX 4090 16GB GDDR6 (175W TGP)",
                "ram": "32 GB DDR5 4800 MHz",
                "disco": "2 TB SSD NVMe PCIe M.2",
                "pantalla": "18\" FHD+ (1920x1200) ¡480Hz Ultrarrápida! 3ms G-Sync",
                "destacado": "Cámara de vapor de área completa • Chasis de aluminio anodizado Dark Metallic"
            }
        },
        {
            "id": "lap_alienware_x16",
            "tipo": "Laptop",
            "marca": "Alienware",
            "modelo": "x16 R1 Ultra-Slim",
            "categoria": "Ultradelgada de Magnesio",
            "precio": 3200,
            "imagen": "imagenes/x16 R1 Ultra-Slim.jpg",
            "specs": {
                "cpu": "Intel Core i9-13900HK (14 núcleos, hasta 5.4 GHz)",
                "gpu": "NVIDIA GeForce RTX 4080 12GB GDDR6",
                "ram": "32 GB LPDDR5 6000 MHz",
                "disco": "1 TB SSD NVMe PCIe M.2",
                "pantalla": "16\" QHD+ (2560x1600) 240Hz 3ms 100% DCI-P3",
                "destacado": "Chasis de magnesio Legend 3 de solo 18.5 mm • Touchpad con iluminación AlienFX RGB"
            }
        },
        {
            "id": "lap_razer_blade16",
            "tipo": "Laptop",
            "marca": "Razer",
            "modelo": "Blade 16 Dual-Mode",
            "categoria": "Pantalla Dual Mini-LED",
            "precio": 4300,
            "imagen": "imagenes/Blade 16 Dual-Mode.jpg",
            "specs": {
                "cpu": "Intel Core i9-13950HX (24 núcleos, hasta 5.5 GHz)",
                "gpu": "NVIDIA GeForce RTX 4090 16GB GDDR6 (175W TGP)",
                "ram": "32 GB DDR5 5600 MHz",
                "disco": "2 TB SSD PCIe 4.0 NVMe",
                "pantalla": "16\" Dual-Mode Mini-LED (Alterna entre 4K 120Hz y FHD+ 240Hz)",
                "destacado": "Chasis de aluminio macizo CNC unibody • Brillo récord de 1000 nits"
            }
        },
        {
            "id": "lap_razer_blade18",
            "tipo": "Laptop",
            "marca": "Razer",
            "modelo": "Blade 18 Desktop Replacement",
            "categoria": "Reemplazo de Escritorio",
            "precio": 3800,
            "imagen": "imagenes/Blade 18 Desktop Replacement.jpg",
            "specs": {
                "cpu": "Intel Core i9-13950HX (24 núcleos, 32 hilos, 5.5 GHz)",
                "gpu": "NVIDIA GeForce RTX 4080 12GB GDDR6 (175W TGP)",
                "ram": "32 GB DDR5 5600 MHz",
                "disco": "1 TB SSD PCIe 4.0 NVMe",
                "pantalla": "18\" QHD+ (2560x1600) 240Hz 100% DCI-P3 3ms",
                "destacado": "Sonido espacial THX Spatial Audio con 6 altavoces • Cámara web de 5MP Windows Hello"
            }
        },
        {
            "id": "lap_aorus_17x",
            "tipo": "Laptop",
            "marca": "Gigabyte",
            "modelo": "AORUS 17X AZF",
            "categoria": "RTX 4090 & 240Hz",
            "precio": 3400,
            "imagen": "imagenes/AORUS 17X AZF.jpg",
            "specs": {
                "cpu": "Intel Core i9-13980HX (24 núcleos, hasta 5.6 GHz)",
                "gpu": "NVIDIA GeForce RTX 4090 16GB GDDR6 (175W TGP)",
                "ram": "32 GB DDR5 5600 MHz",
                "disco": "2 TB SSD NVMe Gen4 M.2",
                "pantalla": "17.3\" QHD (2560x1440) 240Hz 100% DCI-P3 TÜV Rheinland",
                "destacado": "Refrigeración WINDFORCE Infinity con cámara de vapor • Teclado RGB por tecla"
            }
        },
        {
            "id": "lap_acer_predator_triton",
            "tipo": "Laptop",
            "marca": "Acer",
            "modelo": "Predator Triton 17X",
            "categoria": "Mini-LED 250Hz & CNC",
            "precio": 3800,
            "imagen": "imagenes/Predator Triton 17X.jpg",
            "specs": {
                "cpu": "Intel Core i9-13900HX (24 núcleos, 32 hilos, 5.4 GHz)",
                "gpu": "NVIDIA GeForce RTX 4090 16GB GDDR6 (175W TGP)",
                "ram": "64 GB DDR5 5600 MHz",
                "disco": "2 TB SSD PCIe Gen4 NVMe RAID 0",
                "pantalla": "17\" WQXGA (2560x1600) Mini-LED 250Hz 1000 nits HDR1000",
                "destacado": "Chasis unibody mecanizado por CNC • Triple ventilador AeroBlade 3D de 5ta Gen"
            }
        },
        {
            "id": "lap_hp_omen_17",
            "tipo": "Laptop",
            "marca": "HP",
            "modelo": "OMEN 17-ck2000",
            "categoria": "Teclado Óptico-Mecánico",
            "precio": 2600,
            "imagen": "imagenes/OMEN 17-ck2000.jpg",
            "specs": {
                "cpu": "Intel Core i9-13900HX (24 núcleos, 32 hilos, 5.4 GHz)",
                "gpu": "NVIDIA GeForce RTX 4080 12GB GDDR6 (175W TGP)",
                "ram": "32 GB DDR5 5600 MHz",
                "disco": "1 TB SSD PCIe NVMe M.2",
                "pantalla": "17.3\" QHD (2560x1440) 240Hz IPS 3ms con G-Sync",
                "destacado": "Teclado óptico-mecánico con interruptores individuales • Sistema de sonido Bang & Olufsen"
            }
        }
    ],

    "preensambladas": [
        // ================= GAMA BAJA (OFICINA, ESTUDIO Y ESPORTS DE ENTRADA) =================
        {
            "id": "pc_baja_starter_office",
            "gama": "baja",
            "etiquetaGama": "Gama Baja",
            "nombre": "Bunker Starter Office & Study",
            "subtitulo": "Ofimática ágil, estudio, multitarea y navegación ultra fluida",
            "precioBase": 320,
            "specs": {
                "cpu": "AMD Ryzen 3 3200G (4 núcleos / 4 hilos, hasta 4.0 GHz)",
                "refrigeracion": "Disipador por Aire AMD Wraith Stealth Silencioso (65W)",
                "gpu": "Gráficos Radeon Vega 8 Integrados (DirectX 12)",
                "ram": "8 GB DDR4 Crucial 2666 MHz",
                "disco": "480 GB SSD SATA Kingston A400 (500 MB/s)",
                "placa": "ASUS Prime A320M-K (Audio HD, Gigabit LAN)",
                "fuente": "EVGA 400W 80 Plus White Certificada",
                "gabinete": "Aerocool Cylon RGB con frontal estilizado",
                "destacado": "Excelente para Word, Excel, Zoom, Google Classroom y juegos ligeros (LoL, Valorant a 60+ FPS)."
            },
            "combos": [
                {
                    "id": "combo_ninguno",
                    "nombre": "Solo Torre / PC (Sin periféricos)",
                    "precioExtra": 0,
                    "descripcion": "Incluye exclusivamente el gabinete con todos sus componentes internos ensamblados, cableado optimizado y testeados."
                },
                {
                    "id": "combo_oficina",
                    "nombre": "Combo Oficina & Estudio (+ $85)",
                    "precioExtra": 85,
                    "descripcion": "Mouse Logitech G203 Lightsync + Mousepad Logitech G240 Cloth + Teclado Redragon K630."
                },
                {
                    "id": "combo_oficina_full",
                    "nombre": "Setup Completo con Monitor 144Hz (+ $265)",
                    "precioExtra": 265,
                    "descripcion": "Mouse Logitech G203 + Mousepad Logitech G240 + Teclado Redragon K630 + Monitor Gamer AOC 24G2 24\" 1080p 144Hz."
                }
            ]
        },
        {
            "id": "pc_baja_esports_5600g",
            "gama": "baja",
            "etiquetaGama": "Gama Baja",
            "nombre": "Bunker Entry Gamer 1080p",
            "subtitulo": "La campeona calidad-precio para eSports competitivos (Valorant, CS2, Fortnite)",
            "precioBase": 480,
            "specs": {
                "cpu": "AMD Ryzen 5 5600G (6 núcleos / 12 hilos, hasta 4.4 GHz)",
                "refrigeracion": "Disipador por Aire AMD Wraith Stealth Silencioso de Perfil Bajo",
                "gpu": "Gráficos Radeon Vega 7 Integrados de Alto Rendimiento",
                "ram": "16 GB (2x8GB) Kingston Fury Beast DDR4 3200 MHz en Dual Channel",
                "disco": "500 GB SSD M.2 NVMe Crucial P3 (3500 MB/s)",
                "placa": "Gigabyte B450 AORUS Elite V2 (Disipación térmica extendida)",
                "fuente": "Corsair CV450 450W 80 Plus Bronze",
                "gabinete": "Cooler Master MasterBox Q300L con filtros magnéticos",
                "destacado": "Rendimiento probado: Valorant (140+ FPS), League of Legends (160+ FPS), CS2 y Fortnite modo rendimiento."
            },
            "combos": [
                {
                    "id": "combo_ninguno",
                    "nombre": "Solo Torre / PC (Sin periféricos)",
                    "precioExtra": 0,
                    "descripcion": "Incluye exclusivamente el gabinete con todos sus componentes internos ensamblados, cableado optimizado y testeados."
                },
                {
                    "id": "combo_esports_esencial",
                    "nombre": "Combo Gamer eSports (+ $105)",
                    "precioExtra": 105,
                    "descripcion": "Mouse Razer Viper Mini + Mousepad Razer Gigantus V2 Large + Teclado Redragon Kumara K552 TKL Mecánico."
                },
                {
                    "id": "combo_esports_full",
                    "nombre": "Setup Gamer 144Hz Full (+ $385)",
                    "precioExtra": 385,
                    "descripcion": "Mouse Razer Viper Mini + Teclado Redragon K552 + Auriculares HyperX Cloud II + Monitor ASUS TUF VG249Q 144Hz."
                }
            ]
        },
        {
            "id": "pc_baja_rx580_dedicated",
            "gama": "baja",
            "etiquetaGama": "Gama Baja",
            "nombre": "Bunker Core RX 580 Gaming",
            "subtitulo": "Poder con tarjeta gráfica dedicada de 8GB para juegos de mundo abierto",
            "precioBase": 610,
            "specs": {
                "cpu": "Intel Core i3-12100F (4 núcleos / 8 hilos, arquitectura Golden Cove 4.3 GHz)",
                "refrigeracion": "Disipador por Aire Torre DeepCool AG300 (3 Heatpipes de cobre y ventilador 92mm PWM)",
                "gpu": "AMD Radeon RX 580 8GB GDDR5 (Doble ventilador)",
                "ram": "16 GB (2x8GB) Corsair Vengeance LPX DDR4 3200 MHz",
                "disco": "500 GB SSD M.2 NVMe Crucial P3 (3500 MB/s)",
                "placa": "ASUS Prime H510M-A con soporte PCIe 4.0",
                "fuente": "Thermaltake Smart 500W 80 Plus White",
                "gabinete": "DeepCool Matrexx 55 V3 con triple ventilador frontal RGB",
                "destacado": "Capaz de mover GTA V, Warzone, Apex Legends, Forza Horizon 5 y God of War en 1080p con fluidez."
            },
            "combos": [
                {
                    "id": "combo_ninguno",
                    "nombre": "Solo Torre / PC (Sin periféricos)",
                    "precioExtra": 0,
                    "descripcion": "Incluye exclusivamente el gabinete con todos sus componentes internos ensamblados, cableado optimizado y testeados."
                },
                {
                    "id": "combo_shooter_esencial",
                    "nombre": "Combo Shooter Competitivo (+ $115)",
                    "precioExtra": 115,
                    "descripcion": "Mouse SteelSeries Rival 3 + Mousepad SteelSeries QcK Heavy XXL + Teclado Redragon K552 TKL."
                },
                {
                    "id": "combo_shooter_full",
                    "nombre": "Setup Completo con Monitor 144Hz (+ $295)",
                    "precioExtra": 295,
                    "descripcion": "Mouse Rival 3 + Mousepad QcK Heavy + Teclado K552 + Monitor AOC 24G2 24\" 1080p 144Hz IPS."
                }
            ]
        },

        // ================= GAMA MEDIA (1080P ULTRA, 1440P 2K, STREAMING Y CREACIÓN) =================
        {
            "id": "pc_media_dominator_4060",
            "gama": "media",
            "etiquetaGama": "Gama Media",
            "nombre": "Bunker Dominator RTX 4060",
            "subtitulo": "El estándar de oro para jugar en 1080p Ultra con DLSS 3 y Ray Tracing",
            "precioBase": 960,
            "specs": {
                "cpu": "AMD Ryzen 5 5600X (6 núcleos / 12 hilos, hasta 4.6 GHz)",
                "refrigeracion": "Disipador por Aire Torre DeepCool AG400 ARGB (4 Heatpipes de Cobre Direct-Touch)",
                "gpu": "NVIDIA GeForce RTX 4060 8GB GDDR6 (Arquitectura Ada Lovelace)",
                "ram": "16 GB (2x8GB) Kingston Fury Beast RGB DDR4 3200 MHz",
                "disco": "1 TB SSD M.2 PCIe NVMe Kingston NV2 (3500 MB/s)",
                "placa": "MSI MAG B550 TOMAHAWK (VRM robusto y disipadores de aluminio)",
                "fuente": "MSI MAG A550BN 550W 80 Plus Bronze",
                "gabinete": "Corsair 4000D Airflow con rejilla de alto flujo de aire",
                "destacado": "Disfruta de más de 100 FPS en Cyberpunk 2077, Starfield, Warzone y Hogwarts Legacy con DLSS 3 y Frame Gen."
            },
            "combos": [
                {
                    "id": "combo_ninguno",
                    "nombre": "Solo Torre / PC (Sin periféricos)",
                    "precioExtra": 0,
                    "descripcion": "Incluye exclusivamente el gabinete con todos sus componentes internos ensamblados, cableado optimizado y testeados."
                },
                {
                    "id": "combo_hero_gamer",
                    "nombre": "Combo Gamer Logitech HERO (+ $165)",
                    "precioExtra": 165,
                    "descripcion": "Mouse Logitech G502 HERO + Mousepad Logitech G840 XL + Teclado HyperX Alloy Origins 60."
                },
                {
                    "id": "combo_hero_full",
                    "nombre": "Setup Gamer 144Hz + Audio Inmersivo (+ $445)",
                    "precioExtra": 445,
                    "descripcion": "Combo Logitech HERO + Auriculares HyperX Cloud II + Monitor ASUS TUF VG249Q 24\" 1080p 144Hz."
                }
            ]
        },
        {
            "id": "pc_media_streamer_pro",
            "gama": "media",
            "etiquetaGama": "Gama Media",
            "nombre": "Bunker Streamer & Creator Pro",
            "subtitulo": "Multitarea pesada, streaming en vivo y edición de video con 32GB RAM y RTX 4060 Ti",
            "precioBase": 1220,
            "specs": {
                "cpu": "Intel Core i5-13400F (10 núcleos: 6 Performance + 4 Efficient, 16 hilos)",
                "refrigeracion": "Refrigeración Líquida AIO 240mm Cooler Master MasterLiquid ML240L ARGB V2",
                "gpu": "NVIDIA GeForce RTX 4060 Ti 8GB GDDR6 (Encoder AV1 NVENC)",
                "ram": "32 GB (2x16GB) G.Skill Ripjaws V DDR4 3600 MHz",
                "disco": "1 TB SSD M.2 PCIe Gen4 NVMe WD Black SN850X (7300 MB/s)",
                "placa": "ASUS TUF GAMING B550M-PLUS (WI-FI)",
                "fuente": "Corsair CX650M 650W 80 Plus Bronze Semimodular",
                "gabinete": "Phanteks Eclipse G360A con triple ventilador D-RGB",
                "destacado": "Transmite en Twitch y YouTube en 1080p60 sin caídas de cuadros. Renderizado ultrarrápido en Premiere y Blender."
            },
            "combos": [
                {
                    "id": "combo_ninguno",
                    "nombre": "Solo Torre / PC (Sin periféricos)",
                    "precioExtra": 0,
                    "descripcion": "Incluye exclusivamente el gabinete con todos sus componentes internos ensamblados, cableado optimizado y testeados."
                },
                {
                    "id": "combo_creator_stream",
                    "nombre": "Combo Creator & Streamer Razer (+ $235)",
                    "precioExtra": 235,
                    "descripcion": "Mouse Razer DeathAdder V2 + Mousepad Razer Gigantus V2 Large + Teclado Razer BlackWidow V3 + Auriculares Razer BlackShark V2."
                },
                {
                    "id": "combo_creator_qhd_full",
                    "nombre": "Setup Pro Creator con Monitor 2K 170Hz (+ $555)",
                    "precioExtra": 555,
                    "descripcion": "Combo Creator & Streamer + Monitor Gigabyte M27Q 27\" 2K QHD (2560x1440) 170Hz IPS."
                }
            ]
        },
        {
            "id": "pc_media_am5_future_ready",
            "gama": "media",
            "etiquetaGama": "Gama Media",
            "nombre": "Bunker Next-Gen AM5 QHD",
            "subtitulo": "Arquitectura Zen 4, memorias DDR5 de 6000MHz y resolución nativa 1440p (2K)",
            "precioBase": 1390,
            "specs": {
                "cpu": "AMD Ryzen 5 7600 (6 núcleos / 12 hilos Zen 4 de 5 nanómetros, 5.1 GHz)",
                "refrigeracion": "Refrigeración Líquida AIO 240mm DeepCool LS520 SE ARGB con Bomba de Alto Flujo",
                "gpu": "AMD Radeon RX 7700 XT 12GB GDDR6 (Arquitectura RDNA 3)",
                "ram": "32 GB (2x16GB) Corsair Vengeance DDR5 6000 MHz",
                "disco": "1 TB SSD M.2 PCIe Gen4 NVMe Kingston NV2",
                "placa": "Gigabyte B650 AORUS ELITE AX con Wi-Fi 6E y Bluetooth",
                "fuente": "Corsair RM750e 750W 80 Plus Gold Totalmente Modular",
                "gabinete": "NZXT H5 Flow con conducto térmico directo a la gráfica",
                "destacado": "Plataforma AM5 moderna con soporte garantizado de procesadores AMD futuros hasta 2027+."
            },
            "combos": [
                {
                    "id": "combo_ninguno",
                    "nombre": "Solo Torre / PC (Sin periféricos)",
                    "precioExtra": 0,
                    "descripcion": "Incluye exclusivamente el gabinete con todos sus componentes internos ensamblados, cableado optimizado y testeados."
                },
                {
                    "id": "combo_wireless_esports",
                    "nombre": "Combo Inalámbrico eSports (+ $185)",
                    "precioExtra": 185,
                    "descripcion": "Mouse Logitech G305 Lightspeed + Mousepad HyperX Fury S Pro XL + Teclado Royal Kludge RK61 Wireless."
                },
                {
                    "id": "combo_qhd_full_2k",
                    "nombre": "Setup QHD 2K 144Hz Completo (+ $535)",
                    "precioExtra": 535,
                    "descripcion": "Combo Inalámbrico + Auriculares HyperX Cloud Flight Wireless + Monitor LG UltraGear 27GL850 27\" 2K 144Hz IPS."
                }
            ]
        },

        // ================= GAMA ALTA (GAMING 4K ULTRA, ENTUSIASTA Y WORKSTATION EXTREMA) =================
        {
            "id": "pc_alta_titan_4k_elite",
            "gama": "alta",
            "etiquetaGama": "Gama Alta",
            "nombre": "Bunker Titan 4K Elite",
            "subtitulo": "Monstruo de 20 núcleos y RTX 4080 SUPER para 4K nativo en ultra",
            "precioBase": 2490,
            "specs": {
                "cpu": "Intel Core i7-14700K (20 núcleos / 28 hilos, hasta 5.6 GHz Turbo Boost)",
                "refrigeracion": "Refrigeración Líquida AIO 360mm NZXT Kraken 360 RGB con Radiador Triple",
                "gpu": "NVIDIA GeForce RTX 4080 SUPER 16GB GDDR6X",
                "ram": "32 GB (2x16GB) XPG Lancer RGB DDR5 6000 MHz",
                "disco": "2 TB SSD M.2 PCIe Gen4 NVMe Samsung 990 PRO (7450 MB/s)",
                "placa": "ASUS TUF GAMING Z790-PLUS WIFI con PCIe 5.0",
                "fuente": "XPG Core Reactor 850W 80 Plus Gold Modular",
                "gabinete": "Lian Li O11 Dynamic EVO con paneles de cristal panorámicos",
                "destacado": "Potencia soberbia para juegos 4K al máximo, modelado 3D complejo, Unreal Engine 5 y edición 8K."
            },
            "combos": [
                {
                    "id": "combo_ninguno",
                    "nombre": "Solo Torre / PC (Sin periféricos)",
                    "precioExtra": 0,
                    "descripcion": "Incluye exclusivamente el gabinete con todos sus componentes internos ensamblados, cableado optimizado y testeados."
                },
                {
                    "id": "combo_pro_tournament",
                    "nombre": "Combo Pro Tournament Superlight (+ $335)",
                    "precioExtra": 335,
                    "descripcion": "Mouse Logitech G Pro X Superlight + Mousepad Artisan Ninja FX Zero XL + Teclado SteelSeries Apex Pro TKL."
                },
                {
                    "id": "combo_titan_4k_full",
                    "nombre": "Setup Máximo 4K UltraGear (+ $985)",
                    "precioExtra": 985,
                    "descripcion": "Combo Pro Tournament + Auriculares Astro A50 Wireless + Monitor LG UltraGear 27GN950-B 27\" 4K 144Hz."
                }
            ]
        },
        {
            "id": "pc_alta_apex_cyberpunk_4090",
            "gama": "alta",
            "etiquetaGama": "Gama Alta",
            "nombre": "Bunker Apex RTX 4090 Cyberpunk",
            "subtitulo": "La GPU más potente de la serie 40 con 24GB VRAM y chasis panorámico 360",
            "precioBase": 3380,
            "specs": {
                "cpu": "AMD Ryzen 9 7900X (12 núcleos / 24 hilos Zen 4, 5.6 GHz)",
                "refrigeracion": "Refrigeración Líquida AIO 360mm Corsair iCUE H150i Elite LCD XT con Pantalla IPS",
                "gpu": "NVIDIA GeForce RTX 4090 24GB GDDR6X (TGP 450W)",
                "ram": "32 GB (2x16GB) Corsair Vengeance DDR5 6000 MHz",
                "disco": "2 TB SSD M.2 PCIe Gen4 NVMe Samsung 990 PRO",
                "placa": "ASUS ROG STRIX B650E-F GAMING WIFI",
                "fuente": "Corsair RM1000x 1000W 80 Plus Gold con conector nativo 12VHPWR PCIe 5.0",
                "gabinete": "NZXT H9 Flow Cristal Panorámico con 4 ventiladores de 120mm",
                "destacado": "Capaz de correr cualquier juego en 4K Ultra con Path Tracing y Ray Tracing superando los 120 FPS fluidos."
            },
            "combos": [
                {
                    "id": "combo_ninguno",
                    "nombre": "Solo Torre / PC (Sin periféricos)",
                    "precioExtra": 0,
                    "descripcion": "Incluye exclusivamente el gabinete con todos sus componentes internos ensamblados, cableado optimizado y testeados."
                },
                {
                    "id": "combo_razer_enthusiast",
                    "nombre": "Combo Enthusiast Razer Chroma (+ $390)",
                    "precioExtra": 390,
                    "descripcion": "Mouse Razer DeathAdder V2 + Mousepad Razer Goliathus Extended Chroma + Teclado Razer Huntsman V2 TKL + Auricular Razer Kraken V3."
                },
                {
                    "id": "combo_apex_neo_g8_full",
                    "nombre": "Setup Élite 4K 240Hz Neo G8 (+ $1590)",
                    "precioExtra": 1590,
                    "descripcion": "Combo Enthusiast + Auriculares SteelSeries Arctis Nova Pro Wireless + Monitor Samsung Odyssey Neo G8 32\" 4K 240Hz."
                }
            ]
        },
        {
            "id": "pc_alta_godlike_5090_ready",
            "gama": "alta",
            "etiquetaGama": "Gama Alta",
            "nombre": "Bunker Ultimate Beast RTX 5090 Ready",
            "subtitulo": "El titán definitivo con Intel i9-14900K 6.0 GHz, 64GB RAM y soporte RTX 5090",
            "precioBase": 4650,
            "specs": {
                "cpu": "Intel Core i9-14900K (24 núcleos / 32 hilos, hasta 6.0 GHz con Thermal Velocity Boost)",
                "refrigeracion": "Refrigeración Líquida AIO 360mm ASUS ROG Ryujin III 360 ARGB con Pantalla LCD de 3.5 pulgadas y Bomba Asetek Gen 8",
                "gpu": "NVIDIA GeForce RTX 5090 24GB GDDR7 (La cúspide gráfica del mundo)",
                "ram": "64 GB (2x32GB) DDR5 6000 MHz Dual Channel",
                "disco": "4 TB SSD M.2 PCIe Gen4 NVMe (2x Samsung 990 PRO de 2TB)",
                "placa": "ASUS ROG MAXIMUS Z790 Extreme con disipadores térmicos integrales",
                "fuente": "ASUS ROG Thor 1200W 80 Plus Platinum con pantalla OLED de consumo en vivo",
                "gabinete": "Cooler Master HAF 700 EVO con pantalla circular LCD frontal programable",
                "destacado": "Estación de ensueño para desarrollo de Inteligencia Artificial (LLMs locales), simulaciones cuánticas, cine y gaming 8K."
            },
            "combos": [
                {
                    "id": "combo_ninguno",
                    "nombre": "Solo Torre / PC (Sin periféricos)",
                    "precioExtra": 0,
                    "descripcion": "Incluye exclusivamente el gabinete con todos sus componentes internos ensamblados, cableado optimizado y testeados."
                },
                {
                    "id": "combo_god_wireless",
                    "nombre": "Combo Dios Supremo Inalámbrico (+ $545)",
                    "precioExtra": 545,
                    "descripcion": "Mouse Logitech G Pro X Superlight 2 + Mousepad Glorious 3XL Extended + Teclado Corsair K100 Optical + Auricular Corsair Virtuoso RGB XT."
                },
                {
                    "id": "combo_god_miniled_full",
                    "nombre": "Setup Definitivo con Monitor Mini-LED 4K (+ $3045)",
                    "precioExtra": 3045,
                    "descripcion": "Combo Dios Supremo + Monitor ASUS ROG Swift PG32UQX 32\" 4K 144Hz Mini-LED (1400 nits HDR)."
                }
            ]
        }
    ]
}; // <--- FIN DE dbComponentes

// =========================================================================
// ESPECIFICACIONES TÉCNICAS Y HELPERS PARA TODOS LOS COMPONENTES
// =========================================================================

// Base de datos de consumo TDP (en Watts) para Procesadores
const tdpProcesadores = {
    // Intel LGA 1200
    'cpu_i3_10100f': 65, 'cpu_i5_10400f': 65, 'cpu_i5_10400': 65, 'cpu_i5_11400f': 65,
    'cpu_i7_10700k': 125, 'cpu_i9_10900k': 125,
    // Intel LGA 1700 Core i3
    'cpu_i3_12100f': 60, 'cpu_i3_12100': 60, 'cpu_i3_13100f': 60, 'cpu_i3_13100': 60, 'cpu_i3_14100f': 60,
    // Intel LGA 1700 Core i5
    'cpu_i5_12400f': 65, 'cpu_i5_12600k': 150, 'cpu_i5_13400f': 65, 'cpu_i5_13600k': 160, 'cpu_i5_14400f': 65,
    // Intel LGA 1700 Core i7
    'cpu_i7_12700kf': 190, 'cpu_i7_12700k': 190, 'cpu_i7_13700kf': 253, 'cpu_i7_13700k': 253, 'cpu_i7_14700k': 253,
    // Intel LGA 1700 Core i9
    'cpu_i9_12900k': 241, 'cpu_i9_12900kf': 241, 'cpu_i9_13900k': 253, 'cpu_i9_13900kf': 253, 'cpu_i9_14900k': 253,
    // AMD Ryzen 3
    'cpu_r3_4100': 65, 'cpu_r3_3100': 65, 'cpu_r3_3300x': 65, 'cpu_r3_3200g': 65, 'cpu_r3_2200g': 65,
    // AMD Ryzen 5
    'cpu_r5_7600x': 105, 'cpu_r5_7600': 65, 'cpu_r5_5600x': 65, 'cpu_r5_5600g': 65, 'cpu_r5_5500': 65,
    // AMD Ryzen 7
    'cpu_r7_7800x3d': 120, 'cpu_r7_7700x': 105, 'cpu_r7_5800x3d': 105, 'cpu_r7_5800x': 105, 'cpu_r7_5700g': 65,
    // AMD Ryzen 9
    'cpu_r9_7950x3d': 120, 'cpu_r9_7900x': 170, 'cpu_r9_5950x': 105, 'cpu_r9_5900x': 105, 'cpu_r9_3900x': 105
};

// Base de datos de consumo TDP (en Watts) para Tarjetas Gráficas
const tdpTarjetasGraficas = {
    'gpu_ninguna': 0,
    // NVIDIA RTX 5000
    'gpu_rtx_5090': 575, 'gpu_rtx_5080': 400, 'gpu_rtx_5070': 250, 'gpu_rtx_5060': 170,
    // NVIDIA RTX 4000
    'gpu_rtx_4090': 450, 'gpu_rtx_4080s': 320, 'gpu_rtx_4070ti': 285, 'gpu_rtx_4070': 200,
    'gpu_rtx_4060ti': 160, 'gpu_rtx_4060': 115,
    // NVIDIA RTX 3000
    'gpu_rtx_3090': 350, 'gpu_rtx_3080ti': 350, 'gpu_rtx_3080': 320, 'gpu_rtx_3070': 220,
    'gpu_rtx_3060ti': 200, 'gpu_rtx_3060_12': 170, 'gpu_rtx_3050': 130,
    // NVIDIA GTX
    'gpu_gtx_1660s': 125, 'gpu_gtx_1650': 75, 'gpu_gtx_1050ti': 75,
    // AMD RX 7000
    'gpu_rx_7900xtx': 355, 'gpu_rx_7900xt': 315, 'gpu_rx_7800xt': 263, 'gpu_rx_7700xt': 245, 'gpu_rx_7600': 165,
    // AMD RX 6000
    'gpu_rx_6950xt': 335, 'gpu_rx_6800xt': 300, 'gpu_rx_6700xt': 230, 'gpu_rx_6600xt': 160, 'gpu_rx_6600': 132,
    // AMD RX anteriores
    'gpu_rx_5700xt': 225, 'gpu_rx_580': 185
};

function obtenerWattsCpu(cpuId) {
    if (!cpuId) return 65;
    return tdpProcesadores[cpuId] || 65;
}

function obtenerWattsGpu(gpuId) {
    if (!gpuId || gpuId === 'gpu_ninguna') return 0;
    return tdpTarjetasGraficas[gpuId] || 150;
}

const dbSpecsCpu = {
    // Intel LGA 1200
    'cpu_i3_10100f': { nucleos: 4, hilos: 8, boost: '4.3 GHz', cache: '6MB', igpu: false },
    'cpu_i5_10400f': { nucleos: 6, hilos: 12, boost: '4.3 GHz', cache: '12MB', igpu: false },
    'cpu_i5_10400': { nucleos: 6, hilos: 12, boost: '4.3 GHz', cache: '12MB', igpu: true, igpuNombre: 'Intel UHD 630' },
    'cpu_i5_11400f': { nucleos: 6, hilos: 12, boost: '4.4 GHz', cache: '12MB', igpu: false },
    'cpu_i7_10700k': { nucleos: 8, hilos: 16, boost: '5.1 GHz', cache: '16MB', igpu: true, igpuNombre: 'Intel UHD 630' },
    'cpu_i9_10900k': { nucleos: 10, hilos: 20, boost: '5.3 GHz', cache: '20MB', igpu: true, igpuNombre: 'Intel UHD 630' },

    // Intel LGA 1700 - i3
    'cpu_i3_12100f': { nucleos: 4, hilos: 8, boost: '4.3 GHz', cache: '12MB', igpu: false },
    'cpu_i3_12100': { nucleos: 4, hilos: 8, boost: '4.3 GHz', cache: '12MB', igpu: true, igpuNombre: 'Intel UHD 730' },
    'cpu_i3_13100f': { nucleos: 4, hilos: 8, boost: '4.5 GHz', cache: '12MB', igpu: false },
    'cpu_i3_13100': { nucleos: 4, hilos: 8, boost: '4.5 GHz', cache: '12MB', igpu: true, igpuNombre: 'Intel UHD 730' },
    'cpu_i3_14100f': { nucleos: 4, hilos: 8, boost: '4.7 GHz', cache: '12MB', igpu: false },

    // Intel LGA 1700 - i5
    'cpu_i5_12400f': { nucleos: 6, hilos: 12, boost: '4.4 GHz', cache: '18MB', igpu: false },
    'cpu_i5_12600k': { nucleos: 10, hilos: 16, nucleosDetalle: '6P+4E', boost: '4.9 GHz', cache: '20MB', igpu: true, igpuNombre: 'Intel UHD 770' },
    'cpu_i5_13400f': { nucleos: 10, hilos: 16, nucleosDetalle: '6P+4E', boost: '4.6 GHz', cache: '20MB', igpu: false },
    'cpu_i5_13600k': { nucleos: 14, hilos: 20, nucleosDetalle: '6P+8E', boost: '5.1 GHz', cache: '24MB', igpu: true, igpuNombre: 'Intel UHD 770' },
    'cpu_i5_14400f': { nucleos: 10, hilos: 16, nucleosDetalle: '6P+4E', boost: '4.7 GHz', cache: '20MB', igpu: false },

    // Intel LGA 1700 - i7
    'cpu_i7_12700kf': { nucleos: 12, hilos: 20, nucleosDetalle: '8P+4E', boost: '5.0 GHz', cache: '25MB', igpu: false },
    'cpu_i7_12700k': { nucleos: 12, hilos: 20, nucleosDetalle: '8P+4E', boost: '5.0 GHz', cache: '25MB', igpu: true, igpuNombre: 'Intel UHD 770' },
    'cpu_i7_13700kf': { nucleos: 16, hilos: 24, nucleosDetalle: '8P+8E', boost: '5.4 GHz', cache: '30MB', igpu: false },
    'cpu_i7_13700k': { nucleos: 16, hilos: 24, nucleosDetalle: '8P+8E', boost: '5.4 GHz', cache: '30MB', igpu: true, igpuNombre: 'Intel UHD 770' },
    'cpu_i7_14700k': { nucleos: 20, hilos: 28, nucleosDetalle: '8P+12E', boost: '5.6 GHz', cache: '33MB', igpu: true, igpuNombre: 'Intel UHD 770' },

    // Intel LGA 1700 - i9
    'cpu_i9_12900k': { nucleos: 16, hilos: 24, nucleosDetalle: '8P+8E', boost: '5.2 GHz', cache: '30MB', igpu: true, igpuNombre: 'Intel UHD 770' },
    'cpu_i9_12900kf': { nucleos: 16, hilos: 24, nucleosDetalle: '8P+8E', boost: '5.2 GHz', cache: '30MB', igpu: false },
    'cpu_i9_13900k': { nucleos: 24, hilos: 32, nucleosDetalle: '8P+16E', boost: '5.8 GHz', cache: '36MB', igpu: true, igpuNombre: 'Intel UHD 770' },
    'cpu_i9_13900kf': { nucleos: 24, hilos: 32, nucleosDetalle: '8P+16E', boost: '5.8 GHz', cache: '36MB', igpu: false },
    'cpu_i9_14900k': { nucleos: 24, hilos: 32, nucleosDetalle: '8P+16E', boost: '6.0 GHz', cache: '36MB', igpu: true, igpuNombre: 'Intel UHD 770' },

    // AMD AM4 - Ryzen 3
    'cpu_r3_4100': { nucleos: 4, hilos: 8, boost: '4.0 GHz', cache: '4MB', igpu: false },
    'cpu_r3_3100': { nucleos: 4, hilos: 8, boost: '3.9 GHz', cache: '16MB', igpu: false },
    'cpu_r3_3300x': { nucleos: 4, hilos: 8, boost: '4.3 GHz', cache: '16MB', igpu: false },
    'cpu_r3_3200g': { nucleos: 4, hilos: 4, boost: '4.0 GHz', cache: '4MB', igpu: true, igpuNombre: 'Radeon Vega 8' },
    'cpu_r3_2200g': { nucleos: 4, hilos: 4, boost: '3.7 GHz', cache: '4MB', igpu: true, igpuNombre: 'Radeon Vega 8' },

    // AMD AM5 / AM4 - Ryzen 5
    'cpu_r5_7600x': { nucleos: 6, hilos: 12, boost: '5.3 GHz', cache: '32MB', igpu: true, igpuNombre: 'Radeon Graphics' },
    'cpu_r5_7600': { nucleos: 6, hilos: 12, boost: '5.1 GHz', cache: '32MB', igpu: true, igpuNombre: 'Radeon Graphics' },
    'cpu_r5_5600x': { nucleos: 6, hilos: 12, boost: '4.6 GHz', cache: '32MB', igpu: false },
    'cpu_r5_5600g': { nucleos: 6, hilos: 12, boost: '4.4 GHz', cache: '16MB', igpu: true, igpuNombre: 'Radeon Vega 7' },
    'cpu_r5_5500': { nucleos: 6, hilos: 12, boost: '4.2 GHz', cache: '16MB', igpu: false },

    // AMD AM5 / AM4 - Ryzen 7
    'cpu_r7_7800x3d': { nucleos: 8, hilos: 16, boost: '5.0 GHz', cache: '96MB 3D V-Cache', igpu: true, igpuNombre: 'Radeon Graphics' },
    'cpu_r7_7700x': { nucleos: 8, hilos: 16, boost: '5.4 GHz', cache: '32MB', igpu: true, igpuNombre: 'Radeon Graphics' },
    'cpu_r7_5800x3d': { nucleos: 8, hilos: 16, boost: '4.5 GHz', cache: '96MB 3D V-Cache', igpu: false },
    'cpu_r7_5800x': { nucleos: 8, hilos: 16, boost: '4.7 GHz', cache: '32MB', igpu: false },
    'cpu_r7_5700g': { nucleos: 8, hilos: 16, boost: '4.6 GHz', cache: '16MB', igpu: true, igpuNombre: 'Radeon Vega 8' },

    // AMD AM5 / AM4 - Ryzen 9
    'cpu_r9_7950x3d': { nucleos: 16, hilos: 32, boost: '5.7 GHz', cache: '128MB 3D V-Cache', igpu: true, igpuNombre: 'Radeon Graphics' },
    'cpu_r9_7900x': { nucleos: 12, hilos: 24, boost: '5.6 GHz', cache: '64MB', igpu: true, igpuNombre: 'Radeon Graphics' },
    'cpu_r9_5950x': { nucleos: 16, hilos: 32, boost: '4.9 GHz', cache: '64MB', igpu: false },
    'cpu_r9_5900x': { nucleos: 12, hilos: 24, boost: '4.8 GHz', cache: '64MB', igpu: false },
    'cpu_r9_3900x': { nucleos: 12, hilos: 24, boost: '4.6 GHz', cache: '64MB', igpu: false }
};

// Función auxiliar para extraer datos normalizados y legibles de Procesadores (CPU)
function obtenerInfoCpu(item) {
    if (!item) return { nucleos: 6, hilos: 12, boost: '4.4 GHz', textoNucleos: '6 Núcleos / 12 Hilos', textoCorto: '6N / 12H', socket: 'AM4', igpu: false };
    const spec = dbSpecsCpu[item.id] || {};
    const nucleos = spec.nucleos || 6;
    const hilos = spec.hilos || (nucleos * 2);
    const boost = spec.boost || '';
    const socket = item.socket || '';
    const detalle = spec.nucleosDetalle ? ` (${spec.nucleosDetalle})` : '';
    const textoNucleos = `${nucleos} Núcleos / ${hilos} Hilos${detalle}`;
    const textoCorto = `${nucleos}N / ${hilos}H`;

    return {
        nucleos,
        hilos,
        boost,
        cache: spec.cache || '',
        socket,
        textoNucleos,
        textoCorto,
        igpu: spec.igpu,
        igpuNombre: spec.igpuNombre
    };
}

// Función auxiliar para Placas Base
function obtenerInfoPlaca(item) {
    if (!item) return { socket: '', tipoRam: '', formato: 'ATX', chipset: '' };
    const socket = item.socket || '';
    const tipoRam = item.tipoRam || 'DDR4';
    const matchChipset = item.modelo.match(/\b(Z790|B760|B660|H610|Z590|Z490|B560|B460|H510|H410|X670E|X670|B650E|B650|A620|X570S|X570|B550|B450|A320)\b/i);
    const chipset = matchChipset ? matchChipset[1].toUpperCase() : '';
    const formato = (item.modelo.includes('M-') || item.modelo.includes('M ') || item.modelo.includes('Micro') || item.modelo.endsWith('M')) ? 'Micro-ATX' : 'ATX';
    return {
        socket,
        tipoRam,
        chipset,
        formato,
        etiqueta: `${socket} • ${tipoRam}`
    };
}

// Función auxiliar para Tarjetas Gráficas (GPU)
function obtenerInfoGpu(item) {
    if (!item || item.id === 'gpu_ninguna') return { vram: 'Integrada', watts: 0, serie: 'Gráficos Integrados', esIntegrada: true };
    const vram = item.vram || '';
    const watts = (typeof tdpTarjetasGraficas !== 'undefined' && tdpTarjetasGraficas[item.id]) ? tdpTarjetasGraficas[item.id] : 150;
    let serie = 'Gamer';
    if (item.modelo.includes('5090') || item.modelo.includes('5080') || item.modelo.includes('5070') || item.modelo.includes('5060')) serie = 'RTX Serie 5000 (Blackwell)';
    else if (item.modelo.includes('4090') || item.modelo.includes('4080') || item.modelo.includes('4070') || item.modelo.includes('4060')) serie = 'RTX Serie 4000 (Ada Lovelace)';
    else if (item.modelo.includes('3090') || item.modelo.includes('3080') || item.modelo.includes('3070') || item.modelo.includes('3060') || item.modelo.includes('3050')) serie = 'RTX Serie 3000 (Ampere)';
    else if (item.modelo.includes('1660') || item.modelo.includes('1650') || item.modelo.includes('1050')) serie = 'GTX Turing / Pascal';
    else if (item.modelo.includes('7900') || item.modelo.includes('7800') || item.modelo.includes('7700') || item.modelo.includes('7600')) serie = 'Radeon RX 7000 (RDNA 3)';
    else if (item.modelo.includes('6950') || item.modelo.includes('6800') || item.modelo.includes('6700') || item.modelo.includes('6600')) serie = 'Radeon RX 6000 (RDNA 2)';
    else if (item.modelo.includes('5700') || item.modelo.includes('580')) serie = 'Radeon Clásica';

    return {
        vram,
        watts,
        serie,
        esIntegrada: false
    };
}

// Función auxiliar para Almacenamiento
function obtenerInfoAlmacenamiento(item) {
    if (!item) return { tipo: 'SSD', capacidad: '', velocidad: '' };
    return {
        tipo: item.tipo || 'SSD',
        capacidad: item.capacidad || '',
        velocidad: item.velocidad || ''
    };
}

// Función auxiliar para Gabinetes
function obtenerInfoGabinete(item) {
    if (!item) return { formato: 'ATX', principal: 'ATX', esCompacto: false };
    const formato = item.formato || 'ATX';
    const esCompacto = formato.includes('Mini-ITX') && !formato.includes('ATX');
    const principal = formato.includes('E-ATX') ? 'E-ATX' : (formato.includes('ATX') ? 'ATX' : (formato.includes('Micro-ATX') ? 'Micro-ATX' : 'Mini-ITX'));
    return {
        formato,
        principal,
        esCompacto
    };
}

// Función auxiliar para Periféricos
function obtenerInfoPeriferico(item) {
    if (!item) return { tipo: 'Periférico', badge: 'Periférico', pills: [] };
    const tipo = item.tipo || '';

    if (tipo === 'Monitor') {
        const matchRes = item.modelo.match(/(1080p|2K|4K)/i);
        const matchHz = item.modelo.match(/(\d+\s*Hz)/i);
        const matchPulg = item.modelo.match(/(\d+(\.\d+)?\")/i);
        const res = matchRes ? matchRes[1] : 'FHD';
        const hz = matchHz ? matchHz[1].replace(/\s+/g, '') : '';
        const pulg = matchPulg ? matchPulg[1] : '';
        return {
            tipo,
            badge: `📺 ${res}${hz ? ' • ' + hz : ''}${pulg ? ' • ' + pulg : ''}`,
            pills: [
                { icono: '📺', texto: res, clase: 'pill-mon-res' },
                hz ? { icono: '⚡', texto: hz, clase: 'pill-mon-hz' } : null,
                pulg ? { icono: '📐', texto: pulg, clase: 'pill-mon-tam' } : null
            ].filter(Boolean)
        };
    } else if (tipo === 'Teclado') {
        let formato = 'TKL / Gamer';
        if (item.modelo.includes('60%') || item.modelo.includes('(60)')) formato = '60% Ultra Compacto';
        else if (item.modelo.includes('65%')) formato = '65% Compacto';
        else if (item.modelo.includes('TKL')) formato = 'TKL 80% eSports';
        else if (item.modelo.includes('Full') || item.modelo.includes('100%') || item.modelo.includes('BlackWidow') || item.modelo.includes('K100')) formato = '100% Full Size';
        else if (item.modelo.includes('Magnetic') || item.modelo.includes('60HE')) formato = 'Switches Magnéticos';

        const esWireless = item.modelo.toLowerCase().includes('wireless');
        return {
            tipo,
            badge: `⌨️ ${formato}`,
            pills: [
                { icono: '⌨️', texto: formato, clase: 'pill-tec-form' },
                esWireless ? { icono: '📶', texto: 'Inalámbrico', clase: 'pill-tec-wire' } : { icono: '🎮', texto: 'Mecánico / RGB', clase: 'pill-tec-rgb' }
            ]
        };
    } else if (tipo === 'Mouse') {
        const esWireless = item.modelo.toLowerCase().includes('wireless') || item.modelo.toLowerCase().includes('lightspeed') || item.modelo.toLowerCase().includes('superlight');
        const esUltra = item.modelo.toLowerCase().includes('superlight') || item.modelo.toLowerCase().includes('mini') || item.modelo.toLowerCase().includes('haste');
        return {
            tipo,
            badge: `🖱️ ${esWireless ? 'Wireless Ultrarrápido' : 'Óptico Competitivo'}`,
            pills: [
                esWireless ? { icono: '📶', texto: 'Inalámbrico', clase: 'pill-mouse-wire' } : { icono: '⚡', texto: 'Cableado USB', clase: 'pill-mouse-cable' },
                esUltra ? { icono: '🪶', texto: 'Ultraligero Pro', clase: 'pill-mouse-ultra' } : { icono: '🎯', texto: 'Sensor Alta Precisión', clase: 'pill-mouse-sensor' }
            ]
        };
    } else if (tipo === 'Mousepad') {
        const matchDim = item.modelo.match(/\(([^)]+)\)/);
        const dim = matchDim ? matchDim[1] : '';
        const esRgb = item.modelo.toLowerCase().includes('chroma') || item.modelo.toLowerCase().includes('rgb') || item.modelo.toLowerCase().includes('prism');
        return {
            tipo,
            badge: `🏁 ${dim || 'Superficie Gaming'}`,
            pills: [
                dim ? { icono: '📏', texto: dim, clase: 'pill-mp-dim' } : null,
                esRgb ? { icono: '🌈', texto: 'Iluminación RGB', clase: 'pill-mp-rgb' } : { icono: '🧵', texto: 'Control / Speed', clase: 'pill-mp-cloth' }
            ].filter(Boolean)
        };
    } else if (tipo === 'Auricular') {
        const esWireless = item.modelo.toLowerCase().includes('wireless');
        return {
            tipo,
            badge: `🎧 ${esWireless ? 'Wireless Sin Latencia' : 'Audio Espacial 7.1'}`,
            pills: [
                esWireless ? { icono: '📶', texto: 'Inalámbrico Pro', clase: 'pill-aur-wire' } : { icono: '🎙️', texto: 'Micrófono con Cancelación', clase: 'pill-aur-mic' },
                { icono: '🔊', texto: 'Sonido Envolvente', clase: 'pill-aur-sound' }
            ]
        };
    }

    return { tipo, badge: `📦 ${tipo}`, pills: [] };
}

// Función auxiliar para extraer datos normalizados y legibles de la Memoria RAM
function obtenerInfoRam(item) {
    if (!item) return { frecuencia: '', modulos: 1, textoModulos: '1 módulo', distribucion: '', canal: 'Single Channel' };
    const frecuencia = item.frecuencia || '';
    let modulos = item.modulos;
    let distribucion = item.distribucion || '';

    if (!modulos && item.capacidad) {
        const match = item.capacidad.match(/(\d+)\s*x\s*(\d+\s*GB)/i);
        if (match) {
            modulos = parseInt(match[1], 10);
            distribucion = `${match[1]}x${match[2]}`.replace(/\s+/g, '');
        } else {
            modulos = 1;
        }
    }
    if (!modulos) modulos = 1;

    if (!distribucion && item.capacidad) {
        const matchCap = item.capacidad.match(/\(([^)]+)\)/);
        distribucion = matchCap ? matchCap[1] : item.capacidad;
    }

    const textoModulos = modulos === 1 ? '1 módulo' : `${modulos} módulos`;
    const canal = modulos >= 2 ? 'Dual Channel' : 'Single Channel';

    return {
        frecuencia,
        modulos,
        distribucion,
        textoModulos,
        canal
    };
}

// --- SISTEMA DE INDEXACIÓN O(1) Y PRECOMPUTACIÓN DE BÚSQUEDA ---
const mapComponentes = new Map();

(function indexarBaseDatos() {
    for (const cat in dbComponentes) {
        const items = dbComponentes[cat];
        if (Array.isArray(items)) {
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                if (item && item.id) {
                    mapComponentes.set(item.id, item);
                    // Precomputación de texto en minúsculas para búsquedas instantáneas
                    if (cat === 'procesadores') {
                        const info = obtenerInfoCpu(item);
                        item._searchText = `${item.marca || ''} ${item.modelo || ''} ${item.socket || ''} ${info.nucleos} nucleos ${info.hilos} hilos ${info.boost} ${info.cache} ${info.igpu ? 'integrados igpu' : ''}`.toLowerCase();
                    } else if (cat === 'placasBase') {
                        const info = obtenerInfoPlaca(item);
                        item._searchText = `${item.marca || ''} ${item.modelo || ''} ${item.socket || ''} ${item.tipoRam || ''} ${info.chipset} ${info.formato}`.toLowerCase();
                    } else if (cat === 'refrigeracion') {
                        if (!item.imagen) {
                            item.imagen = generarSvgCooler(item);
                        }
                        item._searchText = `${item.marca || ''} ${item.modelo || ''} ${item.tipo || ''} ${item.tamano || ''} ${item.formato || ''} ${item.iluminacion || ''} ${item.consumo}w ${item.tdpMax}w`.toLowerCase();
                    } else if (cat === 'memoriasRam') {
                        const info = obtenerInfoRam(item);
                        item._searchText = `${item.marca || ''} ${item.modelo || ''} ${item.frecuencia || ''} ${item.tecnologia || ''} ${item.capacidad || ''} ${info.textoModulos} ${info.distribucion} ${info.canal}`.toLowerCase();
                    } else if (cat === 'tarjetasGraficas') {
                        const info = obtenerInfoGpu(item);
                        item._searchText = `${item.marca || ''} ${item.modelo || ''} ${item.vram || ''} ${info.serie}`.toLowerCase();
                    } else if (cat === 'almacenamiento') {
                        item._searchText = `${item.marca || ''} ${item.modelo || ''} ${item.tipo || ''} ${item.capacidad || ''} ${item.velocidad || ''}`.toLowerCase();
                    } else if (cat === 'fuentesPoder') {
                        item._searchText = `${item.marca || ''} ${item.modelo || ''} ${item.watts || ''} ${item.certificacion || ''}`.toLowerCase();
                    } else if (cat === 'gabinetes') {
                        item._searchText = `${item.marca || ''} ${item.modelo || ''} ${item.formato || ''}`.toLowerCase();
                    } else if (cat === 'perifericos') {
                        item._searchText = `${item.marca || ''} ${item.modelo || ''} ${item.tipo || ''}`.toLowerCase();
                    } else if (cat === 'laptops') {
                        item._searchText = `${item.marca} ${item.modelo} ${item.categoria} ${item.specs?.cpu || ''} ${item.specs?.gpu || ''} ${item.specs?.ram || ''} ${item.specs?.disco || ''} ${item.specs?.pantalla || ''} ${item.specs?.destacado || ''}`.toLowerCase();
                    } else if (cat === 'preensambladas') {
                        const combosTxt = item.combos ? item.combos.map(c => `${c.nombre} ${c.descripcion}`).join(' ') : '';
                        item._searchText = `${item.nombre} ${item.gama} ${item.etiquetaGama} ${item.subtitulo} ${item.specs?.cpu || ''} ${item.specs?.refrigeracion || ''} ${item.specs?.gpu || ''} ${item.specs?.ram || ''} ${item.specs?.disco || ''} ${item.specs?.placa || ''} ${item.specs?.fuente || ''} ${item.specs?.gabinete || ''} ${item.specs?.destacado || ''} ${combosTxt}`.toLowerCase();
                    } else {
                        item._searchText = `${item.marca || ''} ${item.modelo || ''}`.toLowerCase();
                    }
                }
            }
        }
    }
})();


// 2. CONECTAMOS CON EL NUEVO HTML (ASISTENTE)
const panelAsistente = document.getElementById('panel-asistente');
const tituloPaso = document.getElementById('titulo-paso');
const buscadorTarjetas = document.getElementById('buscador-tarjetas');
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const contenedorCalculoFuente = document.getElementById('contenedor-calculo-fuente');
const btnSiguiente = document.getElementById('btn-siguiente');
const btnOmitir = document.getElementById('btn-omitir');
const btnAtras = document.getElementById('btn-atras');
const btnVolverAsistente = document.getElementById('btn-volver-asistente');

// Conexiones de la derecha (Calculadora y Fotos)
const listaResumen = document.getElementById('lista-resumen');
const precioFinal = document.getElementById('precio-final');
const resumenPotenciaContenedor = document.getElementById('resumen-potencia-contenedor');
const imagenComponente = document.getElementById('imagen-componente');
const textoVisualizador = document.getElementById('texto-visualizador');
const btnConfirmar = document.getElementById('btn-confirmar'); // El botón final que tenías apagado
const btnReiniciar = document.getElementById('btn-reiniciar');
const panelLaptops = document.getElementById('panel-laptops');
const btnVolverLaptops = document.getElementById('btn-volver-laptops');
const contenedorLaptops = document.getElementById('contenedor-laptops');
const buscadorLaptops = document.getElementById('buscador-laptops');
const conteoLaptops = document.getElementById('conteo-laptops');

// Conexiones de la sección PCs Pre-ensambladas
const panelPreensambladas = document.getElementById('panel-preensambladas');
const btnVolverPreensambladas = document.getElementById('btn-volver-preensambladas');
const contenedorPreensambladas = document.getElementById('contenedor-preensambladas');
const buscadorPreensambladas = document.getElementById('buscador-preensambladas');
const conteoPreensambladas = document.getElementById('conteo-preensambladas');
let filtroGamaActual = 'todas';
let combosSeleccionadosPorPc = {};

// CONEXIONES DEL MENÚ DE INICIO
const pantallaBienvenida = document.getElementById('pantalla-bienvenida');
const btnMenuEnsamblar = document.getElementById('btn-menu-ensamblar');
const btnMenuPreensambladas = document.getElementById('btn-menu-preensambladas');
const btnMenuLaptops = document.getElementById('btn-menu-laptops');

// Conexiones Institucionales
const seccionInstitucional = document.getElementById('institucional');
const contenedorTienda = document.getElementById('contenedor-tienda');
const btnIrTienda = document.getElementById('btn-ir-tienda');

// Conexión al panel derecho para poder ocultarlo
const panelResumenDerecho = document.getElementById('panel-resumen');

// --- UTILIDAD DE RENDIMIENTO (DEBOUNCE) ---
function debounce(fn, delay = 120) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
}

// --- FUNCIÓN PARA ANIMACIONES FLUIDAS (SIN REFLOW FORZADO) ---
function mostrarConAnimacion(elemento, displayType = 'block') {
    elemento.style.display = displayType;
    elemento.classList.remove('animacion-entrada');
    requestAnimationFrame(() => {
        elemento.classList.add('animacion-entrada');
    });
}

// --- LÓGICA DE NAVEGACIÓN INICIAL ---
// 1. Ocultamos el configurador al entrar a la página
panelAsistente.style.display = 'none';
panelResumenDerecho.style.display = 'none';

// Evento para pasar de lo Institucional a la Tienda
btnIrTienda.addEventListener('click', () => {
    seccionInstitucional.style.display = 'none';
    mostrarConAnimacion(contenedorTienda);
});

// 2. Eventos de los botones del menú
btnMenuEnsamblar.addEventListener('click', () => {
    // Ocultamos la bienvenida
    pantallaBienvenida.style.display = 'none';
    // Mostramos los paneles del configurador
    mostrarConAnimacion(panelAsistente);
    mostrarConAnimacion(panelResumenDerecho);
});

// Abrir sección PCs Pre-ensambladas
btnMenuPreensambladas.addEventListener('click', () => {
    pantallaBienvenida.style.display = 'none';
    mostrarConAnimacion(panelPreensambladas);
    if (buscadorPreensambladas) buscadorPreensambladas.value = '';
    filtroGamaActual = 'todas';
    actualizarBotonesFiltroGama();
    cargarPreensambladas();
});

// Botón para regresar al menú principal desde PCs Pre-ensambladas
if (btnVolverPreensambladas) {
    btnVolverPreensambladas.addEventListener('click', () => {
        panelPreensambladas.style.display = 'none';
        mostrarConAnimacion(pantallaBienvenida);
    });
}

// Abrir sección Laptops
btnMenuLaptops.addEventListener('click', () => {
    pantallaBienvenida.style.display = 'none';
    mostrarConAnimacion(panelLaptops);
    if (buscadorLaptops) buscadorLaptops.value = '';
    cargarLaptops(); // Llama a la función que dibuja las tarjetas
});

// Botón para regresar al menú principal desde Laptops
btnVolverLaptops.addEventListener('click', () => {
    panelLaptops.style.display = 'none';
    mostrarConAnimacion(pantallaBienvenida);
});

// Botón para regresar al menú principal desde el Asistente
if (btnVolverAsistente) {
    btnVolverAsistente.addEventListener('click', () => {
        volverAlInicioDesdeEnsamblaje();
    });
}

// Función que genera un renderizado SVG vectorial ultranítido para cada laptop (con caché)
function generarSvgLaptop(lap) {
    if (lap._cachedSvg) return lap._cachedSvg;
    const esApple = lap.marca === 'Apple';
    const esGamer = lap.categoria.toLowerCase().includes('gaming') || (lap.specs && lap.specs.gpu && (lap.specs.gpu.toLowerCase().includes('rtx') || lap.specs.gpu.toLowerCase().includes('gtx') || lap.specs.gpu.toLowerCase().includes('radeon rx')));
    const colorCuerpo = esApple ? '#3a3d42' : esGamer ? '#121418' : '#22252a';
    const colorBorde = esApple ? '#777' : esGamer ? '#00e5ff' : '#4da8da';
    const colorTeclado = esApple ? '#202225' : esGamer ? '#00ff88' : '#333b45';
    const wallpaperGrad1 = esApple ? '#0f2027' : esGamer ? '#200122' : '#141e30';
    const wallpaperGrad2 = esApple ? '#203a43' : esGamer ? '#6f0000' : '#243b55';
    const logoTexto = lap.marca.toUpperCase();

    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <defs>
            <linearGradient id="bg_screen_${lap.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="${wallpaperGrad1}"/>
                <stop offset="100%" stop-color="${wallpaperGrad2}"/>
            </linearGradient>
            <linearGradient id="body_metal_${lap.id}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#2c3035"/>
                <stop offset="100%" stop-color="${colorCuerpo}"/>
            </linearGradient>
            <filter id="glow_${lap.id}" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        <!-- Tapa / Pantalla -->
        <rect x="70" y="24" width="260" height="152" rx="8" fill="#0d0d0d" stroke="#333" stroke-width="2"/>
        <rect x="78" y="32" width="244" height="136" rx="4" fill="url(#bg_screen_${lap.id})"/>
        
        <!-- Wallpaper / Identidad Gamer -->
        <circle cx="200" cy="92" r="25" fill="rgba(0,0,0,0.5)" stroke="${colorBorde}" stroke-width="1.5"/>
        <text x="200" y="97" font-family="'Segoe UI', Tahoma, sans-serif" font-weight="800" font-size="12" fill="#ffffff" text-anchor="middle" letter-spacing="1">${logoTexto}</text>
        <rect x="90" y="152" width="220" height="8" rx="3" fill="rgba(0,0,0,0.35)"/>
        
        <!-- Cámara web y bisel -->
        <circle cx="200" cy="28" r="2.2" fill="#444"/>
        <circle cx="200" cy="28" r="1" fill="#00e5ff"/>
        
        <!-- Base / Chasis inferior -->
        <path d="M 40 182 L 360 182 L 382 208 L 18 208 Z" fill="url(#body_metal_${lap.id})" stroke="#333" stroke-width="1.5"/>
        
        <!-- Teclado en perspectiva -->
        <polygon points="85,185 315,185 330,200 70,200" fill="#14161a" stroke="${colorBorde}" stroke-width="0.8" opacity="0.95"/>
        <line x1="90" y1="189" x2="310" y2="189" stroke="${colorTeclado}" stroke-width="1.4" stroke-dasharray="8,3" filter="url(#glow_${lap.id})"/>
        <line x1="84" y1="194" x2="316" y2="194" stroke="${colorTeclado}" stroke-width="1.4" stroke-dasharray="10,3" filter="url(#glow_${lap.id})"/>
        
        <!-- Touchpad -->
        <rect x="175" y="201" width="50" height="5.5" rx="1.5" fill="#181a1d" stroke="#444" stroke-width="0.8"/>
        
        <!-- Tira de luz frontal si es gamer -->
        ${esGamer ? `<line x1="55" y1="207" x2="345" y2="207" stroke="${colorBorde}" stroke-width="2.5" filter="url(#glow_${lap.id})"/>` : ''}
        
        <!-- Borde frontal de apertura -->
        <rect x="180" y="182" width="40" height="2.5" rx="1" fill="#555"/>
    </svg>
    `;
    lap._cachedSvg = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg.trim());
    return lap._cachedSvg;
}

// Función que dibuja las laptops en pantalla con su descripción detallada de componentes
function cargarLaptops(filtro = '') {
    contenedorLaptops.innerHTML = '';

    // Filtrar laptops según la búsqueda (búsqueda optimizada O(N) sin re-alocaciones)
    let lista = dbComponentes.laptops;
    if (filtro) {
        lista = lista.filter(lap => (lap._searchText || lap.modelo.toLowerCase()).includes(filtro));
    }

    if (conteoLaptops) {
        conteoLaptops.textContent = `${lista.length} de ${dbComponentes.laptops.length} modelos disponibles`;
    }

    if (lista.length === 0) {
        contenedorLaptops.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; background: #0c0c0c; border: 2px dashed #333; border-radius: 12px; margin: 20px 0;">
                <p style="font-size: 1.4rem; color: #ff4c4c; font-weight: bold; margin-bottom: 10px;">No se encontraron laptops para "${filtro}"</p>
                <p style="color: #aaa; font-size: 1.1rem;">Intenta buscando por marca (ej: Apple, ASUS, Lenovo, HP), procesador (i7, Ryzen), o tarjeta gráfica (RTX 4060, RTX 4090).</p>
            </div>
        `;
        return;
    }

    // Animación de entrada sin reflow forzado
    contenedorLaptops.classList.remove('animacion-entrada');
    requestAnimationFrame(() => {
        contenedorLaptops.classList.add('animacion-entrada');
    });

    const fragment = document.createDocumentFragment();

    lista.forEach(lap => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'laptop-tarjeta';

        const imgUrl = (lap.imagen && lap.imagen.trim() !== '') ? lap.imagen : generarSvgLaptop(lap);

        tarjeta.innerHTML = `
            <div class="laptop-header-info">
                <span class="laptop-categoria-badge">${lap.categoria}</span>
                <h3 class="laptop-titulo">${lap.marca}</h3>
                <p class="laptop-modelo-sub">${lap.modelo}</p>
            </div>
            
            <div class="laptop-img-wrapper">
                <img src="${imgUrl}" alt="${lap.marca} ${lap.modelo}">
            </div>

            <div class="laptop-specs-grid">
                <div class="laptop-spec-row">
                    <span class="spec-titulo">CPU:</span>
                    <span class="spec-detalle">${lap.specs.cpu}</span>
                </div>
                <div class="laptop-spec-row">
                    <span class="spec-titulo">GPU:</span>
                    <span class="spec-detalle">${lap.specs.gpu}</span>
                </div>
                <div class="laptop-spec-row">
                    <span class="spec-titulo">RAM:</span>
                    <span class="spec-detalle">${lap.specs.ram}</span>
                </div>
                <div class="laptop-spec-row">
                    <span class="spec-titulo">Disco:</span>
                    <span class="spec-detalle">${lap.specs.disco}</span>
                </div>
                <div class="laptop-spec-row">
                    <span class="spec-titulo">Pantalla:</span>
                    <span class="spec-detalle">${lap.specs.pantalla}</span>
                </div>
                ${lap.specs.destacado ? `
                <div class="laptop-spec-row destacada">
                    <span class="spec-titulo">Extra:</span>
                    <span class="spec-detalle">${lap.specs.destacado}</span>
                </div>` : ''}
            </div>

            <div class="laptop-precio-box">
                <div>
                    <span style="font-size: 0.85rem; color: #888; text-transform: uppercase;">Precio Especial</span>
                    <p class="laptop-precio">$${lap.precio} USD</p>
                </div>
                <button class="btn-comprar-laptop" onclick="alert('¡Has seleccionado la laptop ${lap.marca} ${lap.modelo}!\\n\\nEspecificaciones técnicas:\\n• Procesador: ${lap.specs.cpu}\\n• Gráfica: ${lap.specs.gpu}\\n• RAM: ${lap.specs.ram}\\n• Almacenamiento: ${lap.specs.disco}\\n• Pantalla: ${lap.specs.pantalla}\\n\\nPrecio: $${lap.precio} USD\\n\\n¡Comunícate con Bunker PC para apartarla!')">Comprar</button>
            </div>
        `;
        const laptopImg = tarjeta.querySelector('.laptop-img-wrapper img');
        if (laptopImg) {
            laptopImg.addEventListener('error', function () {
                this.src = generarSvgLaptop(lap);
            }, { once: true });
        }
        fragment.appendChild(tarjeta);
    });

    contenedorLaptops.appendChild(fragment);
}

// Escuchar cambios en el buscador en tiempo real de Laptops (con Debounce optimizado)
if (buscadorLaptops) {
    buscadorLaptops.addEventListener('input', debounce((e) => {
        cargarLaptops(e.target.value.toLowerCase().trim());
    }, 120));
}

// =========================================================================
// SECCIÓN DE PCS PRE-ENSAMBLADAS Y COMBOS DE PERIFÉRICOS
// =========================================================================

// Generador de SVG vectorial hiperrealista para Gabinetes / Torres de PC Pre-ensambladas (con caché)
function generarSvgPcTorre(pc) {
    if (pc._cachedSvg) return pc._cachedSvg;
    const esBaja = pc.gama === 'baja';
    const esMedia = pc.gama === 'media';
    const esAlta = pc.gama === 'alta';

    // Paleta de iluminación según gama
    const colorLuzPrimario = esBaja ? '#00b4d8' : esMedia ? '#00ff88' : '#f72585';
    const colorLuzSecundario = esBaja ? '#48cae4' : esMedia ? '#4da8da' : '#7209b7';
    const colorAcento = esBaja ? '#90e0ef' : esMedia ? '#00ffcc' : '#4cc9f0';
    const textoGpu = pc.specs.gpu.toLowerCase().includes('rtx') ? 'GEFORCE RTX' : pc.specs.gpu.toLowerCase().includes('radeon') ? 'RADEON RX' : 'RADEON VEGA';

    return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="100%" height="100%">
        <defs>
            <linearGradient id="chassis_grad_${pc.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1e222a"/>
                <stop offset="50%" stop-color="#111317"/>
                <stop offset="100%" stop-color="#0a0b0d"/>
            </linearGradient>
            <linearGradient id="glass_panel_${pc.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#141820" stop-opacity="0.92"/>
                <stop offset="100%" stop-color="#0c0e12" stop-opacity="0.96"/>
            </linearGradient>
            <linearGradient id="rgb_fans_${pc.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="${colorLuzPrimario}"/>
                <stop offset="100%" stop-color="${colorLuzSecundario}"/>
            </linearGradient>
            <linearGradient id="glass_reflection_${pc.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.14"/>
                <stop offset="35%" stop-color="#ffffff" stop-opacity="0.04"/>
                <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
            </linearGradient>
            <filter id="rgb_glow_${pc.id}" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>

        <!-- Sombra base del gabinete -->
        <ellipse cx="200" cy="188" rx="145" ry="8" fill="rgba(0,0,0,0.7)" filter="blur(4px)"/>

        <!-- Patas del gabinete -->
        <rect x="95" y="180" width="18" height="6" rx="2" fill="#222"/>
        <rect x="287" y="180" width="18" height="6" rx="2" fill="#222"/>

        <!-- Chasis exterior (Torre) -->
        <rect x="90" y="15" width="220" height="168" rx="6" fill="url(#chassis_grad_${pc.id})" stroke="#2b313d" stroke-width="2"/>

        <!-- Panel Frontal (Malla de entrada de aire) -->
        <rect x="268" y="19" width="38" height="160" rx="3" fill="#13161c" stroke="#252a33" stroke-width="1.5"/>
        <line x1="274" y1="26" x2="300" y2="26" stroke="#222730" stroke-width="2" stroke-linecap="round"/>
        <line x1="274" y1="32" x2="300" y2="32" stroke="#222730" stroke-width="2" stroke-linecap="round"/>
        
        <!-- Ventiladores frontales ARGB -->
        <circle cx="287" cy="55" r="14" fill="#0c0e12" stroke="url(#rgb_fans_${pc.id})" stroke-width="2.5" filter="url(#rgb_glow_${pc.id})"/>
        <circle cx="287" cy="55" r="4" fill="${colorLuzPrimario}"/>
        <circle cx="287" cy="100" r="14" fill="#0c0e12" stroke="url(#rgb_fans_${pc.id})" stroke-width="2.5" filter="url(#rgb_glow_${pc.id})"/>
        <circle cx="287" cy="100" r="4" fill="${colorLuzPrimario}"/>
        <circle cx="287" cy="145" r="14" fill="#0c0e12" stroke="url(#rgb_fans_${pc.id})" stroke-width="2.5" filter="url(#rgb_glow_${pc.id})"/>
        <circle cx="287" cy="145" r="4" fill="${colorLuzPrimario}"/>

        <!-- Ventana de Cristal Templado -->
        <rect x="96" y="21" width="168" height="156" rx="4" fill="url(#glass_panel_${pc.id})" stroke="#1f232b" stroke-width="1"/>

        <!-- Placa Madre (Interior) -->
        <rect x="102" y="27" width="156" height="118" rx="2" fill="#15181f" stroke="#1d212b" stroke-width="1"/>

        <!-- Ventilador trasero de extracción -->
        <circle cx="118" cy="52" r="12" fill="#0f1116" stroke="${colorLuzSecundario}" stroke-width="2" filter="url(#rgb_glow_${pc.id})"/>
        <circle cx="118" cy="52" r="3" fill="${colorAcento}"/>

        <!-- Cooler de CPU (Disipador por aire o Bomba Líquida con Bloque RGB) -->
        ${esBaja ? `
            <circle cx="165" cy="58" r="16" fill="#181b22" stroke="${colorLuzPrimario}" stroke-width="2" filter="url(#rgb_glow_${pc.id})"/>
            <circle cx="165" cy="58" r="6" fill="#2b313d"/>
        ` : `
            <!-- Radiador Superior y Bomba AIO Líquida -->
            <rect x="135" y="24" width="90" height="7" rx="2" fill="${colorLuzSecundario}" filter="url(#rgb_glow_${pc.id})" opacity="0.8"/>
            <path d="M 180 31 C 180 44, 165 44, 165 52" fill="none" stroke="#2a2e38" stroke-width="3"/>
            <path d="M 185 31 C 185 46, 170 46, 170 52" fill="none" stroke="#2a2e38" stroke-width="3"/>
            <circle cx="168" cy="56" r="13" fill="#0d0e12" stroke="${colorLuzPrimario}" stroke-width="2.5" filter="url(#rgb_glow_${pc.id})"/>
            <text x="168" y="59" font-family="'Segoe UI', sans-serif" font-weight="900" font-size="5" fill="#ffffff" text-anchor="middle">BUNKER</text>
        `}

        <!-- Memorias RAM con difusores RGB -->
        <rect x="195" y="44" width="4" height="24" rx="1" fill="${colorLuzPrimario}" filter="url(#rgb_glow_${pc.id})"/>
        <rect x="202" y="44" width="4" height="24" rx="1" fill="${colorLuzSecundario}" filter="url(#rgb_glow_${pc.id})"/>
        ${esAlta ? `
            <rect x="209" y="44" width="4" height="24" rx="1" fill="${colorLuzPrimario}" filter="url(#rgb_glow_${pc.id})"/>
            <rect x="216" y="44" width="4" height="24" rx="1" fill="${colorLuzSecundario}" filter="url(#rgb_glow_${pc.id})"/>
        ` : ''}

        <!-- Tarjeta Gráfica (GPU dedicada con Backplate y Logo Iluminado) -->
        <rect x="108" y="96" width="144" height="26" rx="3" fill="#1c2027" stroke="#2c3340" stroke-width="1.5"/>
        <rect x="110" y="98" width="140" height="4" rx="1" fill="${colorLuzPrimario}" opacity="0.85"/>
        <!-- Ventiladores de la GPU -->
        <circle cx="140" cy="111" r="7" fill="#121418" stroke="#333" stroke-width="1"/>
        <circle cx="170" cy="111" r="7" fill="#121418" stroke="#333" stroke-width="1"/>
        ${!esBaja ? `<circle cx="200" cy="111" r="7" fill="#121418" stroke="#333" stroke-width="1"/>` : ''}
        <text x="236" y="113" font-family="'Segoe UI', sans-serif" font-weight="800" font-size="6" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">${textoGpu}</text>

        <!-- Cubierta de Fuente de Poder (PSU Shroud) -->
        <rect x="98" y="148" width="164" height="26" fill="#111317" stroke="#1d222b" stroke-width="1"/>
        <rect x="108" y="156" width="60" height="10" rx="2" fill="#161a22"/>
        <text x="138" y="163" font-family="'Segoe UI', sans-serif" font-weight="800" font-size="6.5" fill="${colorLuzPrimario}" text-anchor="middle" letter-spacing="1">BUNKER PC</text>

        <!-- Reflejo diagonal de cristal templado -->
        <polygon points="100,22 170,22 120,175 100,175" fill="url(#glass_reflection_${pc.id})"/>
        <polygon points="190,22 240,22 150,175 100,175" fill="url(#glass_reflection_${pc.id})" opacity="0.4"/>
    </svg>
    `;
    pc._cachedSvg = svg;
    return pc._cachedSvg;
}

// Función para cambiar el combo de periféricos en tiempo real
function cambiarComboPc(pcId, comboId) {
    combosSeleccionadosPorPc[pcId] = comboId;
    const pc = mapComponentes.get(pcId);
    if (!pc) return;

    const combo = pc.combos.find(c => c.id === comboId) || pc.combos[0];
    const precioTotal = pc.precioBase + combo.precioExtra;

    // Actualizar valor de precio en pantalla
    const elPrecio = document.getElementById(`precio-pc-${pcId}`);
    if (elPrecio) {
        elPrecio.textContent = `$${precioTotal} USD`;
    }

    // Actualizar detalle de periféricos incluidos
    const elDetalle = document.getElementById(`detalle-combo-${pcId}`);
    if (elDetalle) {
        elDetalle.innerHTML = `<strong>Contenido del paquete:</strong> ${combo.descripcion}`;
    }
}

// Función de compra / contacto rápido
function solicitarCompraPc(pcId) {
    const pc = mapComponentes.get(pcId);
    if (!pc) return;

    const comboId = combosSeleccionadosPorPc[pcId] || 'combo_ninguno';
    const combo = pc.combos.find(c => c.id === comboId) || pc.combos[0];
    const precioTotal = pc.precioBase + combo.precioExtra;

    alert(
        `¡Has seleccionado: ${pc.nombre}!\n\n` +
        `• Nivel: ${pc.etiquetaGama.toUpperCase()}\n` +
        `• Procesador: ${pc.specs.cpu}\n` +
        `• Refrigeración: ${pc.specs.refrigeracion || 'Disipación por aire'}\n` +
        `• Tarjeta Gráfica: ${pc.specs.gpu}\n` +
        `• Memoria RAM: ${pc.specs.ram}\n` +
        `• Almacenamiento: ${pc.specs.disco}\n` +
        `• Placa Base: ${pc.specs.placa}\n` +
        `• Fuente: ${pc.specs.fuente}\n` +
        `• Gabinete: ${pc.specs.gabinete}\n\n` +
        `CONFIGURACIÓN SELECCIONADA:\n` +
        `• ${combo.nombre}\n` +
        `• Periféricos: ${combo.descripcion}\n\n` +
        `TOTAL ESTIMADO: $${precioTotal} USD\n\n` +
        `Garantía oficial de 1 año con servicio técnico de Bunker PC.\n` +
        `¡Contáctanos para apartar tu equipo con entrega inmediata!`
    );
}

// Función para generar e imprimir una Proforma / Nota de Venta para una PC Pre-ensamblada
function exportarProformaPreensamblada(pcId) {
    const pc = mapComponentes.get(pcId);
    if (!pc) return;

    const comboId = combosSeleccionadosPorPc[pcId] || 'combo_ninguno';
    const combo = pc.combos.find(c => c.id === comboId) || pc.combos[0];
    const precioTotal = pc.precioBase + combo.precioExtra;

    const numComprobante = "PRO-" + Math.floor(100000 + Math.random() * 900000);
    const fechaHoy = new Date().toLocaleDateString('es-ES', {
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    let filasTabla = `
        <tr>
            <td style="padding: 10px; text-align: center;">1</td>
            <td style="padding: 10px; font-weight: bold; color: #4da8da;">Equipo Base</td>
            <td style="padding: 10px;"><strong>${pc.nombre}</strong> (${pc.etiquetaGama})<br><small style="color: #666;">Chasis: ${pc.specs.gabinete}</small></td>
            <td style="padding: 10px; text-align: right; font-weight: bold;">$${pc.precioBase}</td>
        </tr>
        <tr>
            <td style="padding: 10px; text-align: center;">2</td>
            <td style="padding: 10px; font-weight: bold; color: #4da8da;">Procesador (CPU)</td>
            <td style="padding: 10px;">${pc.specs.cpu}</td>
            <td style="padding: 10px; text-align: right; color: #666;">Incluido</td>
        </tr>
        <tr>
            <td style="padding: 10px; text-align: center;">3</td>
            <td style="padding: 10px; font-weight: bold; color: #4da8da;">Refrigeración (Cooler)</td>
            <td style="padding: 10px;">${pc.specs.refrigeracion || 'Disipación por aire de alta eficiencia'}</td>
            <td style="padding: 10px; text-align: right; color: #666;">Incluido</td>
        </tr>
        <tr>
            <td style="padding: 10px; text-align: center;">4</td>
            <td style="padding: 10px; font-weight: bold; color: #4da8da;">Tarjeta Gráfica (GPU)</td>
            <td style="padding: 10px;">${pc.specs.gpu}</td>
            <td style="padding: 10px; text-align: right; color: #666;">Incluido</td>
        </tr>
        <tr>
            <td style="padding: 10px; text-align: center;">5</td>
            <td style="padding: 10px; font-weight: bold; color: #4da8da;">Memoria RAM</td>
            <td style="padding: 10px;">${pc.specs.ram}</td>
            <td style="padding: 10px; text-align: right; color: #666;">Incluido</td>
        </tr>
        <tr>
            <td style="padding: 10px; text-align: center;">6</td>
            <td style="padding: 10px; font-weight: bold; color: #4da8da;">Almacenamiento SSD</td>
            <td style="padding: 10px;">${pc.specs.disco}</td>
            <td style="padding: 10px; text-align: right; color: #666;">Incluido</td>
        </tr>
        <tr>
            <td style="padding: 10px; text-align: center;">7</td>
            <td style="padding: 10px; font-weight: bold; color: #4da8da;">Placa Base</td>
            <td style="padding: 10px;">${pc.specs.placa}</td>
            <td style="padding: 10px; text-align: right; color: #666;">Incluido</td>
        </tr>
        <tr>
            <td style="padding: 10px; text-align: center;">8</td>
            <td style="padding: 10px; font-weight: bold; color: #4da8da;">Fuente de Poder</td>
            <td style="padding: 10px;">${pc.specs.fuente}</td>
            <td style="padding: 10px; text-align: right; color: #666;">Incluido</td>
        </tr>
    `;

    if (combo.id !== 'combo_ninguno') {
        filasTabla += `
        <tr style="background: #fdfdfd;">
            <td style="padding: 10px; text-align: center;">9</td>
            <td style="padding: 10px; font-weight: bold; color: #0078d4;">Combo de Periféricos</td>
            <td style="padding: 10px;"><strong>${combo.nombre}</strong><br><small style="color: #555;">${combo.descripcion}</small></td>
            <td style="padding: 10px; text-align: right; font-weight: bold; color: #0078d4;">+$${combo.precioExtra}</td>
        </tr>
        `;
    }

    const ventana = window.open('', '_blank');
    ventana.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Bunker PC - Proforma ${numComprobante}</title>
            <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 30px; background-color: #f4f6f8; color: #333; margin: 0; }
                .contenedor { max-width: 850px; margin: 0 auto; background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e1e4e8; }
                .encabezado { display: flex; justify-content: space-between; border-bottom: 2px solid #2b313d; padding-bottom: 20px; margin-bottom: 25px; }
                .marca h1 { margin: 0; color: #0d0f12; font-size: 28px; text-transform: uppercase; letter-spacing: 1px; }
                .marca p { margin: 5px 0 0; color: #666; font-size: 13px; }
                .comprobante-info { text-align: right; }
                .comprobante-info h2 { margin: 0; color: #0078d4; font-size: 20px; }
                .comprobante-info p { margin: 4px 0 0; font-size: 13px; color: #555; }
                .datos-venta { display: flex; justify-content: space-between; background: #f8f9fa; padding: 14px 18px; border-radius: 8px; margin-bottom: 25px; font-size: 14px; border-left: 4px solid #0078d4; }
                table { width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 14px; }
                th { background-color: #1a1e24; color: white; padding: 12px 10px; border: 1px solid #1a1e24; }
                td { border: 1px solid #e9ecef; }
                .caja-total { display: flex; justify-content: flex-end; margin-bottom: 25px; }
                .total-card { background: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px; padding: 14px 24px; text-align: right; min-width: 250px; }
                .total-card span { font-size: 13px; color: #166534; font-weight: bold; text-transform: uppercase; }
                .total-card h3 { margin: 5px 0 0; font-size: 26px; color: #15803d; }
                .condiciones { font-size: 12px; color: #6c757d; border-top: 1px dashed #ced4da; padding-top: 15px; line-height: 1.6; }
                .barra-acciones { text-align: right; margin-bottom: 20px; }
                .btn-imprimir { background-color: #0078d4; color: white; border: none; padding: 10px 22px; font-size: 14px; font-weight: bold; border-radius: 6px; cursor: pointer; }
                @media print { .barra-acciones { display: none; } body { padding: 0; background: white; } .contenedor { box-shadow: none; border: none; } }
            </style>
        </head>
        <body>
            <div class="contenedor">
                <div class="barra-acciones">
                    <button class="btn-imprimir" onclick="window.print()">Guardar como PDF / Imprimir</button>
                </div>
                <div class="encabezado">
                    <div class="marca">
                        <h1>Bunker PC</h1>
                        <p>Catálogo Oficial de Equipos Pre-ensamblados</p>
                        <p style="color: #888; font-size: 12px;">Centro Educativo San Martín de Porres</p>
                    </div>
                    <div class="comprobante-info">
                        <h2>PROFORMA COMERCIAL</h2>
                        <p><strong>N°:</strong> ${numComprobante}</p>
                        <p><strong>Fecha:</strong> ${fechaHoy}</p>
                    </div>
                </div>
                <div class="datos-venta">
                    <div>
                        <strong>Modelo:</strong> ${pc.nombre}<br>
                        <strong>Gama:</strong> ${pc.etiquetaGama}
                    </div>
                    <div style="text-align: right;">
                        <strong>Garantía:</strong> 1 Año (Hardware, Ensamblaje y Pruebas)<br>
                        <strong>Estado:</strong> Disponible para Despacho
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th style="width: 8%; text-align: center;">N°</th>
                            <th style="width: 26%; text-align: left;">Categoría</th>
                            <th style="width: 48%; text-align: left;">Descripción Técnica</th>
                            <th style="width: 18%; text-align: right;">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filasTabla}
                    </tbody>
                </table>
                <div class="caja-total">
                    <div class="total-card">
                        <span>Total de la Proforma</span>
                        <h3>$${precioTotal} USD</h3>
                    </div>
                </div>
                <div class="condiciones">
                    <p>• Esta proforma incluye todos los componentes seleccionados, pruebas de rendimiento y estrés térmico previas a la entrega.</p>
                    <p>• Validez de la cotización: 15 días calendario.</p>
                    <p>• Gracias por elegir a <strong>Bunker PC</strong>.</p>
                </div>
            </div>
        </body>
        </html>
    `);
    ventana.document.close();
}

// Sincronizar estilo activo de los botones de gama
function actualizarBotonesFiltroGama() {
    document.querySelectorAll('.btn-filtro-gama').forEach(btn => {
        if (btn.getAttribute('data-gama') === filtroGamaActual) {
            btn.classList.add('activo');
        } else {
            btn.classList.remove('activo');
        }
    });
}

// Función principal que renderiza el catálogo de PCs Pre-ensambladas
function cargarPreensambladas(filtroTexto = '', filtroGama = 'todas') {
    if (!contenedorPreensambladas) return;

    let lista = dbComponentes.preensambladas;

    // Filtro por Gama
    if (filtroGama !== 'todas') {
        lista = lista.filter(pc => pc.gama === filtroGama);
    }

    // Filtro por texto en tiempo real optimizado O(N) sin re-alocaciones
    if (filtroTexto && filtroTexto.trim() !== '') {
        const query = filtroTexto.toLowerCase().trim();
        lista = lista.filter(pc => (pc._searchText || pc.nombre.toLowerCase()).includes(query));
    }

    // Actualizar contador
    if (conteoPreensambladas) {
        conteoPreensambladas.textContent = `${lista.length} de ${dbComponentes.preensambladas.length} equipos disponibles`;
    }

    // Estado sin resultados
    if (lista.length === 0) {
        contenedorPreensambladas.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; background: #0c0c0c; border: 2px dashed #333; border-radius: 12px; margin: 20px 0;">
                <p style="font-size: 1.4rem; color: #ff4c4c; font-weight: bold; margin-bottom: 10px;">No se encontraron PCs pre-ensambladas para "${filtroTexto}"</p>
                <p style="color: #aaa; font-size: 1.1rem;">Prueba buscando por procesador (i3, i5, i7, i9, Ryzen), gráfica (RTX 4060, RTX 4090, RX 580) o gama (baja, media, alta).</p>
            </div>
        `;
        return;
    }

    // Animación de entrada
    contenedorPreensambladas.classList.remove('animacion-entrada');
    requestAnimationFrame(() => {
        contenedorPreensambladas.classList.add('animacion-entrada');
    });

    contenedorPreensambladas.innerHTML = '';
    const fragment = document.createDocumentFragment();

    lista.forEach(pc => {
        const comboActivoId = combosSeleccionadosPorPc[pc.id] || 'combo_ninguno';
        const comboActivo = pc.combos.find(c => c.id === comboActivoId) || pc.combos[0];
        const precioTotal = pc.precioBase + comboActivo.precioExtra;

        const tarjeta = document.createElement('div');
        tarjeta.className = `pc-tarjeta gama-${pc.gama}`;

        const svgTorre = generarSvgPcTorre(pc);

        let opcionesComboHtml = pc.combos.map(c => `
            <option value="${c.id}" ${c.id === comboActivoId ? 'selected' : ''}>
                ${c.nombre}
            </option>
        `).join('');

        tarjeta.innerHTML = `
            <div class="pc-header-info">
                <div class="pc-badges-row">
                    <span class="pc-gama-badge">[ ${pc.etiquetaGama.toUpperCase()} ]</span>
                    <span class="pc-entrega-badge">Garantía 1 Año • Ensamble y Testeo Incluido</span>
                </div>
                <h3 class="pc-titulo">${pc.nombre}</h3>
                <p class="pc-subtitulo">${pc.subtitulo}</p>
            </div>

            <div class="pc-img-wrapper">
                ${svgTorre}
            </div>

            <div class="pc-specs-grid">
                <div class="pc-spec-row">
                    <span class="spec-titulo">CPU:</span>
                    <span class="spec-detalle">${pc.specs.cpu}</span>
                </div>
                <div class="pc-spec-row">
                    <span class="spec-titulo">Cooler:</span>
                    <span class="spec-detalle">${pc.specs.refrigeracion || 'Disipación por aire eficiente'}</span>
                </div>
                <div class="pc-spec-row">
                    <span class="spec-titulo">GPU:</span>
                    <span class="spec-detalle">${pc.specs.gpu}</span>
                </div>
                <div class="pc-spec-row">
                    <span class="spec-titulo">RAM:</span>
                    <span class="spec-detalle">${pc.specs.ram}</span>
                </div>
                <div class="pc-spec-row">
                    <span class="spec-titulo">Disco:</span>
                    <span class="spec-detalle">${pc.specs.disco}</span>
                </div>
                <div class="pc-spec-row">
                    <span class="spec-titulo">Placa:</span>
                    <span class="spec-detalle">${pc.specs.placa}</span>
                </div>
                <div class="pc-spec-row">
                    <span class="spec-titulo">Fuente:</span>
                    <span class="spec-detalle">${pc.specs.fuente}</span>
                </div>
                <div class="pc-spec-row">
                    <span class="spec-titulo">Gabinete:</span>
                    <span class="spec-detalle">${pc.specs.gabinete}</span>
                </div>
                <div class="pc-spec-row destacada">
                    <span class="spec-titulo">Extra:</span>
                    <span class="spec-detalle">${pc.specs.destacado}</span>
                </div>
            </div>

            <div class="pc-combos-box">
                <div class="pc-combos-box-header">
                    <span>Combos de Periféricos del Catálogo:</span>
                </div>
                <select class="pc-combo-select" onchange="cambiarComboPc('${pc.id}', this.value)">
                    ${opcionesComboHtml}
                </select>
                <div class="pc-combo-detalle" id="detalle-combo-${pc.id}">
                    <strong>Contenido del paquete:</strong> ${comboActivo.descripcion}
                </div>
            </div>

            <div class="pc-precio-box">
                <div>
                    <span class="pc-precio-label">Total con Configuración Elegida</span>
                    <p class="pc-precio-valor" id="precio-pc-${pc.id}">$${precioTotal} USD</p>
                </div>
                <div class="pc-acciones-grupo">
                    <button class="btn-proforma-pc" onclick="exportarProformaPreensamblada('${pc.id}')">Ver Proforma</button>
                    <button class="btn-comprar-pc" onclick="solicitarCompraPc('${pc.id}')">Comprar</button>
                </div>
            </div>
        `;

        fragment.appendChild(tarjeta);
    });

    contenedorPreensambladas.appendChild(fragment);
}

// Asignar eventos de los botones de filtro de gama
document.querySelectorAll('.btn-filtro-gama').forEach(btn => {
    btn.addEventListener('click', () => {
        filtroGamaActual = btn.getAttribute('data-gama');
        actualizarBotonesFiltroGama();
        const textoBusqueda = buscadorPreensambladas ? buscadorPreensambladas.value : '';
        cargarPreensambladas(textoBusqueda, filtroGamaActual);
    });
});

// Asignar evento de búsqueda en tiempo real (con Debounce optimizado)
if (buscadorPreensambladas) {
    buscadorPreensambladas.addEventListener('input', debounce((e) => {
        cargarPreensambladas(e.target.value, filtroGamaActual);
    }, 120));
}

// 3. EL CEREBRO DEL ASISTENTE (ESTADO Y CONFIGURACIÓN)
const pcArmada = {
    cpu: null, placa: null, cooler: null, ram: null, gpu: null,
    almacenamiento: null, fuente: null, gabinete: null,
    monitor: null, teclado: null, mouse: null, mousepad: null, auricular: null
};

const ordenPasos = [
    { id: 'cpu', titulo: 'Paso 1: Elige tu Procesador', db: dbComponentes.procesadores },
    { id: 'placa', titulo: 'Paso 2: Elige tu Placa Base', db: dbComponentes.placasBase },
    { id: 'cooler', titulo: 'Paso 3: Elige tu Refrigeración (Cooler)', db: dbComponentes.refrigeracion },
    { id: 'ram', titulo: 'Paso 4: Elige tu Memoria RAM', db: dbComponentes.memoriasRam },
    { id: 'gpu', titulo: 'Paso 5 (Opcional): Tarjeta Gráfica (GPU)', db: dbComponentes.tarjetasGraficas },
    { id: 'almacenamiento', titulo: 'Paso 6: Almacenamiento', db: dbComponentes.almacenamiento },
    { id: 'fuente', titulo: 'Paso 7: Fuente de Poder', db: dbComponentes.fuentesPoder },
    { id: 'gabinete', titulo: 'Paso 8: Gabinete (Case)', db: dbComponentes.gabinetes },
    { id: 'monitor', titulo: 'Paso 9 (Opcional): Monitor', db: dbComponentes.perifericos.filter(p => p.tipo === "Monitor") },
    { id: 'teclado', titulo: 'Paso 10 (Opcional): Teclado', db: dbComponentes.perifericos.filter(p => p.tipo === "Teclado") },
    { id: 'mouse', titulo: 'Paso 11 (Opcional): Mouse', db: dbComponentes.perifericos.filter(p => p.tipo === "Mouse") },
    { id: 'mousepad', titulo: 'Paso 12 (Opcional): Mousepad', db: dbComponentes.perifericos.filter(p => p.tipo === "Mousepad") },
    { id: 'auricular', titulo: 'Paso 13 (Opcional): Auriculares', db: dbComponentes.perifericos.filter(p => p.tipo === "Auricular") }
];
let pasoActual = 0; // Empezamos en el nivel 0
let idSeleccionadoTemporal = null; // Guarda lo que tocas antes de darle a "Siguiente"

// Función auxiliar para detectar si el procesador cuenta con gráficos integrados
function cpuTieneGraficosIntegrados(cpuId) {
    const cpu = mapComponentes.get(cpuId);
    if (!cpu) return true;
    if (cpu.marca === 'Intel') {
        const mod = cpu.modelo.toUpperCase();
        return !(mod.endsWith('F') || mod.endsWith('KF'));
    }
    if (cpu.socket === 'AM5') {
        return true;
    }
    if (cpu.socket === 'AM4') {
        return cpu.modelo.toUpperCase().includes('G');
    }
    return true;
}

// =========================================================================
// CALCULADOR DE POTENCIA ENERGÉTICA (WATTAGE CALCULATOR PARA FUENTE DE PODER)
// =========================================================================



// Retorna desglose detallado y potencia mínima recomendada
function calcularConsumoEstimadoPc() {
    const cpu = mapComponentes.get(pcArmada.cpu);
    const gpu = mapComponentes.get(pcArmada.gpu);
    const cooler = mapComponentes.get(pcArmada.cooler);

    const wattsCpu = pcArmada.cpu ? obtenerWattsCpu(pcArmada.cpu) : 65;
    const wattsGpu = pcArmada.gpu ? obtenerWattsGpu(pcArmada.gpu) : 0;
    const wattsCooler = (cooler && cooler.consumo) ? cooler.consumo : 15;
    const wattsBase = 70; // Placa madre (~40W) + RAM (~10W) + SSD NVMe (~10W) + Ventiladores chasis (~10W)
    const consumoTotal = wattsCpu + wattsGpu + wattsCooler + wattsBase;

    // Margen de seguridad del 30% para picos transitorios y eficiencia óptima (50-80% de carga)
    // Redondeado al múltiplo de 50W superior, con piso mínimo de 400W
    const potenciaMinima = Math.max(400, Math.ceil((consumoTotal * 1.30) / 50) * 50);

    const nombreCpu = cpu ? `${cpu.marca} ${cpu.modelo}` : 'Procesador Estándar';
    const nombreGpu = (gpu && pcArmada.gpu !== 'gpu_ninguna') ? `${gpu.marca} ${gpu.modelo}` : 'Sin GPU Dedicada (0W)';
    const nombreCooler = cooler ? `${cooler.marca} ${cooler.modelo}` : 'Cooler Estándar (~15W)';

    return {
        wattsCpu,
        wattsGpu,
        wattsCooler,
        wattsBase,
        consumoTotal,
        potenciaMinima,
        nombreCpu,
        nombreGpu,
        nombreCooler
    };
}

// Renderiza el banner informativo al llegar al paso de la Fuente de Poder
function renderizarBannerCalculoFuente() {
    if (!contenedorCalculoFuente) return;

    const datos = calcularConsumoEstimadoPc();

    contenedorCalculoFuente.innerHTML = `
        <div class="banner-calculo-fuente">
            <div class="banner-fuente-header">
                <div class="banner-fuente-icono-box">
                    <span class="banner-fuente-icono">⚡</span>
                </div>
                <div class="banner-fuente-info-principal">
                    <span class="banner-fuente-badge-top">Asesor Energético Bunker PC</span>
                    <h3 class="banner-fuente-titulo">Cálculo de Potencia de tu Equipo</h3>
                    <p class="banner-fuente-sub">Estimación calculada según el consumo TDP real de tus componentes seleccionados.</p>
                </div>
                <div class="banner-fuente-potencia-caja">
                    <span class="potencia-caja-label">Potencia Mínima Sugerida</span>
                    <span class="potencia-caja-watts">${datos.potenciaMinima}W</span>
                    <span class="potencia-caja-sub">+30% margen de seguridad</span>
                </div>
            </div>

            <div class="banner-fuente-desglose-grid">
                <div class="desglose-item">
                    <span class="desglose-item-titulo">Procesador (CPU)</span>
                    <span class="desglose-item-watts">~${datos.wattsCpu}W</span>
                    <span class="desglose-item-desc" title="${datos.nombreCpu}">${datos.nombreCpu}</span>
                </div>
                <div class="desglose-item">
                    <span class="desglose-item-titulo">Tarjeta Gráfica (GPU)</span>
                    <span class="desglose-item-watts">~${datos.wattsGpu}W</span>
                    <span class="desglose-item-desc" title="${datos.nombreGpu}">${datos.nombreGpu}</span>
                </div>
                <div class="desglose-item">
                    <span class="desglose-item-titulo">Refrigeración (Cooler)</span>
                    <span class="desglose-item-watts">~${datos.wattsCooler}W</span>
                    <span class="desglose-item-desc" title="${datos.nombreCooler}">${datos.nombreCooler}</span>
                </div>
                <div class="desglose-item">
                    <span class="desglose-item-titulo">Placa / RAM / SSD</span>
                    <span class="desglose-item-watts">~${datos.wattsBase}W</span>
                    <span class="desglose-item-desc">Consumo base estimado del sistema</span>
                </div>
                <div class="desglose-item desglose-item-total">
                    <span class="desglose-item-titulo">Consumo Total Estimado</span>
                    <span class="desglose-item-watts color-verde">~${datos.consumoTotal}W</span>
                    <span class="desglose-item-desc">Bajo máxima carga continua</span>
                </div>
            </div>

            <div class="banner-fuente-footer">
                <div class="banner-fuente-consejo">
                    <span class="icono-escudo">🛡️</span>
                    <div>
                        <strong>Recomendación Profesional:</strong> Tu configuración consume aproximadamente <strong>~${datos.consumoTotal}W</strong> a plena carga. Para máxima estabilidad, evitar sobrecalentamiento y permitir futuras actualizaciones, te recomendamos una fuente de <strong>al menos ${datos.potenciaMinima}W</strong> (etiquetadas en verde abajo con certificación 80 Plus).
                    </div>
                </div>
            </div>
        </div>
    `;

    mostrarConAnimacion(contenedorCalculoFuente);
}

// =========================================================================
// MOTOR DE PREDICCIÓN DE RENDIMIENTO GAMING (FPS EN 1080P, 2K Y 4K)
// =========================================================================

// Base de datos de los 10 juegos más jugados a nivel mundial
const dbJuegosFps = [
    {
        id: 'cs2',
        nombre: 'Counter-Strike 2',
        genero: 'Shooter Táctico Competitivo',
        categoria: 'esports',
        preset: 'Ajustes Competitivos / Calidad Alta',
        color: '#ff7700',
        pesoCpu: 0.40,
        base1080p: 215,
        base2k: 155,
        base4k: 82,
        icono: 'cs2'
    },
    {
        id: 'valorant',
        nombre: 'Valorant',
        genero: 'Tactical Hero Shooter',
        categoria: 'esports',
        preset: 'Calidad Gráfica Alta (100% Nativo)',
        color: '#ff4655',
        pesoCpu: 0.55,
        base1080p: 380,
        base2k: 305,
        base4k: 210,
        icono: 'valorant'
    },
    {
        id: 'fortnite',
        nombre: 'Fortnite',
        genero: 'Battle Royale',
        categoria: 'esports',
        preset: 'Modo Competitivo / DX12 Alta',
        color: '#00d2ff',
        pesoCpu: 0.35,
        base1080p: 145,
        base2k: 98,
        base4k: 52,
        icono: 'fortnite'
    },
    {
        id: 'warzone',
        nombre: 'Call of Duty: Warzone',
        genero: 'Battle Royale Bélico',
        categoria: 'aaa',
        preset: 'Ajustes Equilibrados / Competitivos',
        color: '#eab308',
        pesoCpu: 0.30,
        base1080p: 110,
        base2k: 75,
        base4k: 44,
        icono: 'warzone'
    },
    {
        id: 'gtav',
        nombre: 'Grand Theft Auto V',
        genero: 'Mundo Abierto / Acción',
        categoria: 'aaa',
        preset: 'Muy Alto / FXAA Activado',
        color: '#22c55e',
        pesoCpu: 0.25,
        base1080p: 165,
        base2k: 120,
        base4k: 68,
        icono: 'gtav'
    },
    {
        id: 'cyberpunk',
        nombre: 'Cyberpunk 2077',
        genero: 'RPG Futurista / Ray Tracing',
        categoria: 'aaa',
        preset: 'Calidad Ultra (DLSS / FSR Calidad)',
        color: '#fcee0a',
        pesoCpu: 0.15,
        base1080p: 78,
        base2k: 52,
        base4k: 28,
        icono: 'cyberpunk'
    },
    {
        id: 'rdr2',
        nombre: 'Red Dead Redemption 2',
        genero: 'Mundo Abierto Western',
        categoria: 'aaa',
        preset: 'Calidad Alta / Texturas Ultra',
        color: '#ef4444',
        pesoCpu: 0.20,
        base1080p: 86,
        base2k: 62,
        base4k: 36,
        icono: 'rdr2'
    },
    {
        id: 'apex',
        nombre: 'Apex Legends',
        genero: 'Battle Royale Frenético',
        categoria: 'esports',
        preset: 'Ajustes Competitivos / Gráficos Altos',
        color: '#dc2626',
        pesoCpu: 0.30,
        base1080p: 185,
        base2k: 130,
        base4k: 74,
        icono: 'apex'
    },
    {
        id: 'lol',
        nombre: 'League of Legends',
        genero: 'MOBA Estratégico',
        categoria: 'esports',
        preset: 'Calidad Gráfica Muy Alta',
        color: '#06b6d4',
        pesoCpu: 0.50,
        base1080p: 340,
        base2k: 280,
        base4k: 195,
        icono: 'lol'
    },
    {
        id: 'minecraft',
        nombre: 'Minecraft',
        genero: 'Sandbox / Aventura',
        categoria: 'aaa',
        preset: '16 Chunks + Shaders BSL / RTX',
        color: '#10b981',
        pesoCpu: 0.35,
        base1080p: 115,
        base2k: 80,
        base4k: 48,
        icono: 'minecraft'
    }
];

// Puntuaciones relativas de potencia de Tarjetas Gráficas (Base 100 = RTX 4060)
const potenciaRelativaGpu = {
    'gpu_rtx_5090': 250,
    'gpu_rtx_5080': 195,
    'gpu_rtx_5070': 155,
    'gpu_rtx_5060': 115,
    'gpu_rtx_4090': 215,
    'gpu_rtx_4080s': 172,
    'gpu_rtx_4070ti': 145,
    'gpu_rtx_4070': 128,
    'gpu_rtx_4060ti': 114,
    'gpu_rtx_4060': 100,
    'gpu_rtx_3090': 142,
    'gpu_rtx_3080ti': 136,
    'gpu_rtx_3080': 125,
    'gpu_rtx_3070': 105,
    'gpu_rtx_3060ti': 96,
    'gpu_rtx_3060_12': 82,
    'gpu_rtx_3050': 58,
    'gpu_gtx_1660s': 52,
    'gpu_gtx_1650': 32,
    'gpu_gtx_1050ti': 22,
    'gpu_rx_7900xtx': 188,
    'gpu_rx_7900xt': 162,
    'gpu_rx_7800xt': 135,
    'gpu_rx_7700xt': 118,
    'gpu_rx_7600': 95,
    'gpu_rx_6950xt': 155,
    'gpu_rx_6800xt': 132,
    'gpu_rx_6700xt': 102,
    'gpu_rx_6600xt': 88,
    'gpu_rx_6600': 78,
    'gpu_rx_5700xt': 68,
    'gpu_rx_580': 36
};

// Multiplicadores de Procesadores según impacto en 1080p, 2K y 4K
const multiplicadoresCpu = {
    // Entusiasta (Caché 3D y tope de gama)
    'cpu_r7_7800x3d': { mult1080p: 1.25, mult2k: 1.10, mult4k: 1.02 },
    'cpu_r9_7950x3d': { mult1080p: 1.25, mult2k: 1.10, mult4k: 1.02 },
    'cpu_r9_7900x': { mult1080p: 1.22, mult2k: 1.09, mult4k: 1.02 },
    'cpu_i9_14900k': { mult1080p: 1.24, mult2k: 1.10, mult4k: 1.02 },
    'cpu_i9_13900k': { mult1080p: 1.22, mult2k: 1.09, mult4k: 1.02 },
    'cpu_i9_13900kf': { mult1080p: 1.22, mult2k: 1.09, mult4k: 1.02 },
    'cpu_i7_14700k': { mult1080p: 1.20, mult2k: 1.08, mult4k: 1.01 },
    'cpu_i7_13700k': { mult1080p: 1.18, mult2k: 1.07, mult4k: 1.01 },
    'cpu_i7_13700kf': { mult1080p: 1.18, mult2k: 1.07, mult4k: 1.01 },
    'cpu_r7_5800x3d': { mult1080p: 1.20, mult2k: 1.08, mult4k: 1.01 },
    // Gama Alta
    'cpu_r7_7700x': { mult1080p: 1.14, mult2k: 1.05, mult4k: 1.01 },
    'cpu_r5_7600x': { mult1080p: 1.12, mult2k: 1.05, mult4k: 1.01 },
    'cpu_r5_7600': { mult1080p: 1.10, mult2k: 1.04, mult4k: 1.01 },
    'cpu_i5_13600k': { mult1080p: 1.14, mult2k: 1.06, mult4k: 1.01 },
    'cpu_i5_14400f': { mult1080p: 1.08, mult2k: 1.03, mult4k: 1.00 },
    'cpu_i9_12900k': { mult1080p: 1.14, mult2k: 1.06, mult4k: 1.01 },
    'cpu_i9_12900kf': { mult1080p: 1.14, mult2k: 1.06, mult4k: 1.01 },
    'cpu_i7_12700k': { mult1080p: 1.10, mult2k: 1.05, mult4k: 1.01 },
    'cpu_i7_12700kf': { mult1080p: 1.10, mult2k: 1.05, mult4k: 1.01 },
    'cpu_r9_5950x': { mult1080p: 1.10, mult2k: 1.05, mult4k: 1.01 },
    'cpu_r9_5900x': { mult1080p: 1.08, mult2k: 1.04, mult4k: 1.01 },
    // Gama Media (Referencia 1.0)
    'cpu_i5_12600k': { mult1080p: 1.05, mult2k: 1.02, mult4k: 1.00 },
    'cpu_i5_13400f': { mult1080p: 1.03, mult2k: 1.01, mult4k: 1.00 },
    'cpu_i5_12400f': { mult1080p: 1.00, mult2k: 1.00, mult4k: 1.00 },
    'cpu_r5_5600x': { mult1080p: 1.02, mult2k: 1.01, mult4k: 1.00 },
    'cpu_r5_5600g': { mult1080p: 0.98, mult2k: 0.99, mult4k: 1.00 },
    'cpu_r7_5800x': { mult1080p: 1.04, mult2k: 1.02, mult4k: 1.00 },
    'cpu_r7_5700g': { mult1080p: 1.00, mult2k: 1.00, mult4k: 1.00 },
    'cpu_i9_10900k': { mult1080p: 1.02, mult2k: 1.01, mult4k: 1.00 },
    'cpu_i7_10700k': { mult1080p: 0.98, mult2k: 0.99, mult4k: 1.00 },
    'cpu_i5_11400f': { mult1080p: 0.95, mult2k: 0.98, mult4k: 1.00 },
    'cpu_r9_3900x': { mult1080p: 0.96, mult2k: 0.98, mult4k: 1.00 },
    // Gama de Entrada
    'cpu_r5_5500': { mult1080p: 0.92, mult2k: 0.96, mult4k: 0.99 },
    'cpu_i3_14100f': { mult1080p: 0.95, mult2k: 0.98, mult4k: 1.00 },
    'cpu_i3_13100': { mult1080p: 0.92, mult2k: 0.96, mult4k: 0.99 },
    'cpu_i3_13100f': { mult1080p: 0.92, mult2k: 0.96, mult4k: 0.99 },
    'cpu_i3_12100': { mult1080p: 0.90, mult2k: 0.95, mult4k: 0.99 },
    'cpu_i3_12100f': { mult1080p: 0.90, mult2k: 0.95, mult4k: 0.99 },
    'cpu_i5_10400': { mult1080p: 0.88, mult2k: 0.94, mult4k: 0.98 },
    'cpu_i5_10400f': { mult1080p: 0.88, mult2k: 0.94, mult4k: 0.98 },
    'cpu_r3_3300x': { mult1080p: 0.88, mult2k: 0.94, mult4k: 0.98 },
    // Gama Básica
    'cpu_i3_10100f': { mult1080p: 0.80, mult2k: 0.88, mult4k: 0.95 },
    'cpu_r3_4100': { mult1080p: 0.80, mult2k: 0.88, mult4k: 0.95 },
    'cpu_r3_3100': { mult1080p: 0.80, mult2k: 0.88, mult4k: 0.95 },
    'cpu_r3_3200g': { mult1080p: 0.76, mult2k: 0.85, mult4k: 0.93 },
    'cpu_r3_2200g': { mult1080p: 0.72, mult2k: 0.82, mult4k: 0.90 }
};

// Potencia gráfica de Gráficos Integrados (APUs / iGPUs)
const potenciaGraficosIntegrados = {
    'cpu_r7_5700g': 16,
    'cpu_r5_5600g': 14,
    'cpu_r3_3200g': 11,
    'cpu_r3_2200g': 10,
    // AM5 con gráficos RDNA2 (2 CUs)
    'cpu_r7_7800x3d': 9,
    'cpu_r9_7950x3d': 9,
    'cpu_r9_7900x': 9,
    'cpu_r7_7700x': 9,
    'cpu_r5_7600x': 9,
    'cpu_r5_7600': 9,
    // Intel Gen 12-14 sin sufijo F (UHD 770 / 730)
    'cpu_i9_14900k': 8.5,
    'cpu_i9_13900k': 8.5,
    'cpu_i7_14700k': 8.5,
    'cpu_i7_13700k': 8.5,
    'cpu_i5_13600k': 8.5,
    'cpu_i9_12900k': 8.5,
    'cpu_i7_12700k': 8.5,
    'cpu_i5_12600k': 8.5,
    'cpu_i3_13100': 7.5,
    'cpu_i3_12100': 7.5,
    // Intel Gen 10 sin F (UHD 630)
    'cpu_i9_10900k': 5.5,
    'cpu_i7_10700k': 5.5,
    'cpu_i5_10400': 5.0
};

// Estado reactivo del visor de FPS
const estadoPrediccionFps = {
    resolucion: '1080p', // '1080p' | '2k' | '4k'
    filtro: 'todos',      // 'todos' | 'esports' | 'aaa'
    vista: 'tarjetas'     // 'tarjetas' | 'tabla'
};

// Generador de vectores SVG ultranítidos para los logos emblemáticos de cada juego
function generarSvgIconoJuego(icono) {
    switch (icono) {
        case 'cs2':
            return `<svg viewBox="0 0 40 40" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="#18130d" stroke="#ff7700" stroke-width="2"/>
                <circle cx="20" cy="20" r="11" stroke="#ff9933" stroke-width="1.5" stroke-dasharray="3 2"/>
                <circle cx="20" cy="20" r="4" fill="#ff7700"/>
                <path d="M 20 4 L 20 12 M 20 28 L 20 36 M 4 20 L 12 20 M 28 20 L 36 20" stroke="#ff7700" stroke-width="2" stroke-linecap="round"/>
            </svg>`;
        case 'valorant':
            return `<svg viewBox="0 0 40 40" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#141820"/>
                <path d="M 12 10 L 23 28 L 19 28 L 8 10 Z" fill="#ff4655"/>
                <path d="M 28 10 L 32 10 L 24 23 L 20 23 Z" fill="#ffffff"/>
            </svg>`;
        case 'fortnite':
            return `<svg viewBox="0 0 40 40" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#0c182a"/>
                <path d="M 14 8 L 28 8 L 28 14 L 20 14 L 20 19 L 26 19 L 26 24 L 20 24 L 20 32 L 14 32 Z" fill="#00d2ff"/>
            </svg>`;
        case 'warzone':
            return `<svg viewBox="0 0 40 40" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#171810"/>
                <path d="M 20 6 L 31 12 L 31 23 C 31 29 20 34 20 34 C 20 34 9 29 9 23 L 9 12 Z" fill="#242817" stroke="#eab308" stroke-width="2"/>
                <circle cx="20" cy="18" r="4" fill="#eab308"/>
                <line x1="20" y1="12" x2="20" y2="24" stroke="#eab308" stroke-width="2"/>
                <line x1="14" y1="18" x2="26" y2="18" stroke="#eab308" stroke-width="2"/>
            </svg>`;
        case 'gtav':
            return `<svg viewBox="0 0 40 40" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#0a1a0f"/>
                <path d="M 11 11 L 18 29 L 22 29 L 29 11 L 24 11 L 20 23 L 16 11 Z" fill="#22c55e" stroke="#15803d" stroke-width="1"/>
                <text x="20" y="36" font-family="'Impact', sans-serif" font-size="9" font-weight="900" fill="#eab308" text-anchor="middle">FIVE</text>
            </svg>`;
        case 'cyberpunk':
            return `<svg viewBox="0 0 40 40" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#1c1c04"/>
                <path d="M 10 12 L 30 12 L 28 17 L 16 17 L 16 22 L 29 22 L 27 28 L 10 28 Z" fill="#fcee0a"/>
                <line x1="6" y1="33" x2="34" y2="33" stroke="#00f0ff" stroke-width="2"/>
            </svg>`;
        case 'rdr2':
            return `<svg viewBox="0 0 40 40" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#200d0d"/>
                <polygon points="20,6 23,15 32,15 25,20 27,29 20,24 13,29 15,20 8,15 17,15" fill="#ef4444" stroke="#f59e0b" stroke-width="1.5"/>
                <circle cx="20" cy="18" r="3" fill="#f59e0b"/>
            </svg>`;
        case 'apex':
            return `<svg viewBox="0 0 40 40" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#1f0c0c"/>
                <path d="M 20 7 L 32 30 L 25 30 L 20 18 L 15 30 L 8 30 Z" fill="#dc2626"/>
                <polygon points="20,13 23,20 17,20" fill="#ffffff"/>
            </svg>`;
        case 'lol':
            return `<svg viewBox="0 0 40 40" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#081820"/>
                <path d="M 14 10 L 19 10 L 19 25 L 28 25 L 28 29 L 14 29 Z" fill="#06b6d4"/>
                <path d="M 12 8 L 21 8 L 21 23 L 30 23 L 30 31 L 12 31 Z" fill="none" stroke="#c8aa6e" stroke-width="1.5"/>
            </svg>`;
        case 'minecraft':
            return `<svg viewBox="0 0 40 40" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#122014"/>
                <rect x="10" y="10" width="20" height="7" fill="#10b981"/>
                <rect x="10" y="17" width="20" height="13" fill="#78350f"/>
                <rect x="12" y="14" width="4" height="4" fill="#059669"/>
                <rect x="22" y="14" width="5" height="4" fill="#059669"/>
                <rect x="14" y="21" width="3" height="3" fill="#572607"/>
                <rect x="23" y="24" width="3" height="3" fill="#572607"/>
            </svg>`;
        default:
            return `<svg viewBox="0 0 40 40" width="100%" height="100%" fill="#38bdf8" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="16"/></svg>`;
    }
}

// Extraer cantidad de VRAM numérica
function obtenerVramGpu(gpuComp) {
    if (!gpuComp || !gpuComp.vram || gpuComp.vram === 'N/A') return 2;
    const match = gpuComp.vram.match(/(\d+)\s*GB/i);
    return match ? parseInt(match[1]) : 8;
}

// Clasificación visual y porcentaje de la barra medidora según los FPS
function obtenerMetricasFps(fps) {
    if (fps <= 0) {
        return {
            etiqueta: '❌ Sin Video',
            colorTexto: '#ef4444',
            colorFondo: 'rgba(239, 68, 68, 0.15)',
            porcentaje: 0,
            gradiente: '#ef4444'
        };
    }
    if (fps >= 240) {
        return {
            etiqueta: '⚡ 240Hz+ Esports Pro',
            colorTexto: '#c084fc',
            colorFondo: 'rgba(192, 132, 252, 0.18)',
            porcentaje: 100,
            gradiente: 'linear-gradient(90deg, #00ff88, #00e5ff, #c084fc)'
        };
    }
    if (fps >= 144) {
        return {
            etiqueta: '💎 144Hz+ Competitivo',
            colorTexto: '#00e5ff',
            colorFondo: 'rgba(0, 229, 255, 0.16)',
            porcentaje: Math.min(95, 60 + ((fps - 144) / (240 - 144)) * 35),
            gradiente: 'linear-gradient(90deg, #00e5ff, #38bdf8)'
        };
    }
    if (fps >= 100) {
        return {
            etiqueta: '🔥 100Hz+ Muy Fluido',
            colorTexto: '#00ff88',
            colorFondo: 'rgba(0, 255, 136, 0.16)',
            porcentaje: Math.min(75, 45 + ((fps - 100) / (144 - 100)) * 30),
            gradiente: 'linear-gradient(90deg, #00ff88, #34d399)'
        };
    }
    if (fps >= 60) {
        return {
            etiqueta: '✔ 60Hz+ Fluido y Estable',
            colorTexto: '#38bdf8',
            colorFondo: 'rgba(56, 189, 248, 0.16)',
            porcentaje: Math.min(50, 30 + ((fps - 60) / (100 - 60)) * 20),
            gradiente: 'linear-gradient(90deg, #38bdf8, #60a5fa)'
        };
    }
    if (fps >= 30) {
        return {
            etiqueta: '⚠️ Jugable (30 - 59 FPS)',
            colorTexto: '#fbbf24',
            colorFondo: 'rgba(251, 191, 36, 0.16)',
            porcentaje: Math.min(30, 15 + ((fps - 30) / (60 - 30)) * 15),
            gradiente: 'linear-gradient(90deg, #f59e0b, #ef4444)'
        };
    }
    return {
        etiqueta: '❌ No Recomendado (<30 FPS)',
        colorTexto: '#ef4444',
        colorFondo: 'rgba(239, 68, 68, 0.16)',
        porcentaje: 10,
        gradiente: '#ef4444'
    };
}

// Función principal que calcula la predicción de rendimiento de todos los juegos
function calcularPrediccionFps() {
    const cpuComp = pcArmada.cpu ? mapComponentes.get(pcArmada.cpu) : null;
    const gpuComp = pcArmada.gpu ? mapComponentes.get(pcArmada.gpu) : null;
    const ramComp = pcArmada.ram ? mapComponentes.get(pcArmada.ram) : null;

    const tieneGpuDedicada = (pcArmada.gpu && pcArmada.gpu !== 'gpu_ninguna' && gpuComp);
    const cpuTieneIgpu = pcArmada.cpu ? cpuTieneGraficosIntegrados(pcArmada.cpu) : true;
    const sinVideo = !tieneGpuDedicada && !cpuTieneIgpu;

    let gpuPower = 0;
    let vramGb = 2;
    let esGraficoIntegrado = false;

    if (tieneGpuDedicada) {
        gpuPower = potenciaRelativaGpu[pcArmada.gpu] || 100;
        vramGb = obtenerVramGpu(gpuComp);
    } else if (cpuTieneIgpu && pcArmada.cpu) {
        gpuPower = potenciaGraficosIntegrados[pcArmada.cpu] || 8.0;
        vramGb = 2; // Memoria compartida de sistema
        esGraficoIntegrado = true;
    } else if (sinVideo) {
        gpuPower = 0;
        vramGb = 0;
    } else {
        gpuPower = 100;
        vramGb = 8;
    }

    const cpuData = (pcArmada.cpu && multiplicadoresCpu[pcArmada.cpu])
        ? multiplicadoresCpu[pcArmada.cpu]
        : { mult1080p: 1.0, mult2k: 1.0, mult4k: 1.0 };

    let ramGb = 16;
    if (ramComp && ramComp.capacidad) {
        const mRam = ramComp.capacidad.match(/(\d+)\s*GB/i);
        if (mRam) ramGb = parseInt(mRam[1]);
    }
    const ramFactor = (ramGb <= 8) ? 0.85 : (ramGb >= 32) ? 1.02 : 1.00;

    const resultadosJuegos = dbJuegosFps.map(juego => {
        if (sinVideo) {
            return {
                ...juego,
                fps1080p: 0,
                fps2k: 0,
                fps4k: 0
            };
        }

        // 1. Cálculo en 1080p (Full HD)
        const gpuFactor1080 = gpuPower / 100;
        const comb1080 = (gpuFactor1080 * (1 - juego.pesoCpu)) + (cpuData.mult1080p * juego.pesoCpu);
        let fps1080p = Math.round(juego.base1080p * comb1080 * ramFactor);
        if (esGraficoIntegrado) {
            fps1080p = Math.max(10, Math.round(juego.base1080p * (gpuPower / 100) * 0.95));
        }

        // 2. Cálculo en 2K (1440p QHD)
        const pesoGpu2k = Math.min(0.92, (1 - juego.pesoCpu) + 0.12);
        const pesoCpu2k = 1 - pesoGpu2k;
        const gpuFactor2k = gpuPower / 100;
        const vramFactor2k = (vramGb < 6) ? 0.72 : 1.0;
        const comb2k = (gpuFactor2k * pesoGpu2k) + (cpuData.mult2k * pesoCpu2k);
        let fps2k = Math.round(juego.base2k * comb2k * vramFactor2k * ramFactor);
        if (esGraficoIntegrado) {
            fps2k = Math.max(3, Math.round(juego.base2k * (gpuPower / 100) * 0.55));
        }

        // 3. Cálculo en 4K (2160p UHD)
        const pesoGpu4k = Math.min(0.96, (1 - juego.pesoCpu) + 0.22);
        const pesoCpu4k = 1 - pesoGpu4k;
        const gpuFactor4k = gpuPower / 100;
        const vramFactor4k = (vramGb <= 4) ? 0.35 : (vramGb === 6) ? 0.70 : (vramGb >= 16) ? 1.05 : 1.0;
        const comb4k = (gpuFactor4k * pesoGpu4k) + (cpuData.mult4k * pesoCpu4k);
        let fps4k = Math.round(juego.base4k * comb4k * vramFactor4k * ramFactor);
        if (esGraficoIntegrado) {
            fps4k = Math.max(1, Math.round(juego.base4k * (gpuPower / 100) * 0.25));
        }

        return {
            ...juego,
            fps1080p: Math.max(0, fps1080p),
            fps2k: Math.max(0, fps2k),
            fps4k: Math.max(0, fps4k)
        };
    });

    const esports = resultadosJuegos.filter(j => j.categoria === 'esports');
    const aaa = resultadosJuegos.filter(j => j.categoria === 'aaa');
    const prom = (arr, campo) => Math.round(arr.reduce((acc, curr) => acc + curr[campo], 0) / (arr.length || 1));

    let tier = {
        nombre: 'TIER A - GAMING ALTO RENDIMIENTO 2K',
        color: '#00ff88',
        fondo: 'rgba(0, 255, 136, 0.12)',
        monitor: 'Monitor 2K (1440p) @ 165Hz - 240Hz Fast IPS',
        desc: 'Excelente rendimiento en 1440p con más de 100 FPS en casi todo el catálogo y más de 200 FPS en esports.'
    };

    if (sinVideo) {
        tier = {
            nombre: 'ALERTA: SIN SALIDA DE VIDEO NI GPU',
            color: '#ef4444',
            fondo: 'rgba(239, 68, 68, 0.18)',
            monitor: 'Requiere agregar Tarjeta Gráfica en el Paso 5',
            desc: 'El procesador no cuenta con gráficos integrados y omitiste la GPU. Se necesita tarjeta gráfica para dar imagen.'
        };
    } else if (esGraficoIntegrado) {
        tier = {
            nombre: 'TIER APU - GRÁFICOS INTEGRADOS BÁSICOS',
            color: '#ec4899',
            fondo: 'rgba(236, 72, 153, 0.15)',
            monitor: 'Monitor 1080p @ 60Hz - 75Hz estándar',
            desc: 'Apto para esports ligeros (Valorant, LoL) en 1080p. Recomendamos agregar GPU dedicada para títulos AAA.'
        };
    } else if (gpuPower >= 200) {
        tier = {
            nombre: 'TIER S+ - GODLIKE 4K ULTRA RAY TRACING',
            color: '#c084fc',
            fondo: 'rgba(192, 132, 252, 0.15)',
            monitor: 'Monitor 4K (3840x2160) @ 144Hz - 240Hz OLED',
            desc: 'La máxima cúspide del gaming actual. Fluidez absoluta en 4K Ultra con trazado de rayos extremo activado.'
        };
    } else if (gpuPower >= 140) {
        tier = {
            nombre: 'TIER S - MASTER 4K / 2K COMPETITIVO',
            color: '#00e5ff',
            fondo: 'rgba(0, 229, 255, 0.15)',
            monitor: 'Monitor 2K @ 240Hz o 4K @ 144Hz Fast IPS',
            desc: 'Potencia sobresaliente para exprimir altas tasas de refresco en 2K y sólida experiencia en 4K Ultra.'
        };
    } else if (gpuPower >= 95) {
        tier = {
            nombre: 'TIER A - SWEET SPOT 2K / 1080P PRO',
            color: '#00ff88',
            fondo: 'rgba(0, 255, 136, 0.15)',
            monitor: 'Monitor 2K (1440p) @ 165Hz - 240Hz Fast IPS',
            desc: 'El punto dulce del PC Gaming moderno. Más de 120-144 FPS estables en la gran mayoría de títulos.'
        };
    } else if (gpuPower >= 55) {
        tier = {
            nombre: 'TIER B - SÓLIDO GAMING 1080P',
            color: '#38bdf8',
            fondo: 'rgba(56, 189, 248, 0.15)',
            monitor: 'Monitor 1080p @ 144Hz - 165Hz IPS',
            desc: 'Ideal para jugar a todo el catálogo actual en resolución 1080p a 60-120+ FPS sin dificultades.'
        };
    } else {
        tier = {
            nombre: 'TIER C - ENTRADA 1080P / ESPORTS',
            color: '#f59e0b',
            fondo: 'rgba(245, 158, 11, 0.15)',
            monitor: 'Monitor 1080p @ 60Hz - 144Hz',
            desc: 'Suficiente para juegos populares competitivos en 1080p con ajustes visuales optimizados.'
        };
    }

    return {
        juegos: resultadosJuegos,
        tier,
        promedios: {
            esports: { '1080p': prom(esports, 'fps1080p'), '2k': prom(esports, 'fps2k'), '4k': prom(esports, 'fps4k') },
            aaa: { '1080p': prom(aaa, 'fps1080p'), '2k': prom(aaa, 'fps2k'), '4k': prom(aaa, 'fps4k') }
        },
        cpuTexto: cpuComp ? `${cpuComp.marca} ${cpuComp.modelo}` : 'CPU Estándar',
        gpuTexto: tieneGpuDedicada ? `${gpuComp.marca} ${gpuComp.modelo} (${gpuComp.vram})` : (esGraficoIntegrado ? 'Gráficos Integrados (iGPU)' : 'Sin Tarjeta Gráfica'),
        ramTexto: ramComp ? `${ramComp.marca} ${ramComp.modelo} ${ramComp.capacidad}` : '16GB RAM',
        ramAlerta: ramGb <= 8 ? 'Recomendación: Configurar 16GB o más de RAM para evitar caídas de FPS en títulos modernos.' : null,
        sinVideo
    };
}

// Renderiza el HTML estructural de la sección de FPS
function generarHtmlSeccionPrediccionFps() {
    const pred = calcularPrediccionFps();
    const resActual = estadoPrediccionFps.resolucion;

    let alertaHtml = '';
    if (pred.sinVideo) {
        alertaHtml = `
            <div class="fps-alerta-box">
                <span style="font-size: 1.4rem;">⚠️</span>
                <div>
                    <strong>¡Atención Técnica!</strong> Has seleccionado un procesador Intel serie F (sin gráficos integrados) y omitiste la GPU. Este equipo <strong>requiere una tarjeta gráfica dedicada</strong> para emitir señal de video al monitor y ejecutar juegos.
                </div>
            </div>
        `;
    } else if (pred.ramAlerta) {
        alertaHtml = `
            <div class="fps-alerta-box" style="background: rgba(245, 158, 11, 0.15); border-color: #f59e0b; color: #fde68a;">
                <span style="font-size: 1.4rem;">💡</span>
                <div>
                    <strong>Sugerencia de Rendimiento:</strong> Has seleccionado 8GB de RAM. Se recomienda actualizar a 16GB o 32GB en Dual Channel para eliminar micro-tirones (stuttering) y ganar hasta un 15% más de estabilidad en juegos pesados.
                </div>
            </div>
        `;
    }

    return `
        <div class="seccion-prediccion-fps" id="seccion-prediccion-fps">
            <div class="fps-encabezado-bloque">
                <span class="fps-badge-super">🎮 Benchmark y Telemetría Bunker PC</span>
                <h3 class="fps-titulo-principal">
                    ¿Cuántos FPS Rendirá tu PC Personalizada?
                </h3>
                <p class="fps-subtitulo">
                    Predicción calculada en tiempo real según la combinación exacta de tu Procesador (CPU), Tarjeta Gráfica (GPU) y Memoria RAM en los <strong>10 títulos más jugados</strong>.
                </p>
            </div>

            <div class="fps-diagnostico-caja">
                <div class="fps-diagnostico-top">
                    <div class="fps-hardware-chips">
                        <span class="fps-chip">⚡ CPU: <strong>${pred.cpuTexto}</strong></span>
                        <span class="fps-chip">🎯 GPU: <strong>${pred.gpuTexto}</strong></span>
                        <span class="fps-chip">🧠 RAM: <strong>${pred.ramTexto}</strong></span>
                    </div>
                    <div class="fps-tier-badge" style="background: ${pred.tier.fondo}; color: ${pred.tier.color}; border: 1px solid ${pred.tier.color};">
                        ${pred.tier.nombre}
                    </div>
                </div>

                <div class="fps-diagnostico-detalles">
                    <div class="fps-detalle-item">
                        <span class="icono">🖥️</span>
                        <div>
                            <strong style="color: #fff; display: block;">Monitor Recomendado:</strong>
                            <span style="color: #38bdf8;">${pred.tier.monitor}</span>
                        </div>
                    </div>
                    <div class="fps-detalle-item">
                        <span class="icono">🎯</span>
                        <div>
                            <strong style="color: #fff; display: block;">Diagnóstico de Rendimiento:</strong>
                            <span style="color: #94a3b8;">${pred.tier.desc}</span>
                        </div>
                    </div>
                </div>

                ${alertaHtml}
            </div>

            <!-- BARRA DE HERRAMIENTAS: SELECTOR DE RESOLUCIÓN 1080p, 2K Y 4K -->
            <div class="fps-toolbar">
                <div class="fps-resoluciones-grupo">
                    <button class="btn-fps-res ${resActual === '1080p' ? 'activo' : ''}" data-res="1080p">
                        <span class="res-nombre">🖥️ 1080p (Full HD)</span>
                        <span class="res-sub">1920 × 1080 • Esports & Competitivo</span>
                    </button>
                    <button class="btn-fps-res ${resActual === '2k' ? 'activo' : ''}" data-res="2k">
                        <span class="res-nombre">🚀 2K (Quad HD)</span>
                        <span class="res-sub">2560 × 1440 • Nitidez & Sweet Spot</span>
                    </button>
                    <button class="btn-fps-res ${resActual === '4k' ? 'activo' : ''}" data-res="4k">
                        <span class="res-nombre">👑 4K (Ultra HD)</span>
                        <span class="res-sub">3840 × 2160 • Máxima Fidelidad Visual</span>
                    </button>
                </div>

                <div class="fps-filtros-grupo">
                    <button class="btn-fps-filtro ${estadoPrediccionFps.filtro === 'todos' ? 'activo' : ''}" data-filtro="todos">
                        Todos (10 Juegos)
                    </button>
                    <button class="btn-fps-filtro ${estadoPrediccionFps.filtro === 'esports' ? 'activo' : ''}" data-filtro="esports">
                        🎯 Esports & Shooters
                    </button>
                    <button class="btn-fps-filtro ${estadoPrediccionFps.filtro === 'aaa' ? 'activo' : ''}" data-filtro="aaa">
                        💥 AAA & Mundos Abiertos
                    </button>
                </div>

                <div>
                    <button class="btn-fps-vista ${estadoPrediccionFps.vista === 'tabla' ? 'activo' : ''}" id="btn-toggle-vista-fps">
                        ${estadoPrediccionFps.vista === 'tarjetas' ? '📊 Ver Tabla Comparativa 1080p/2K/4K' : '🃏 Ver Tarjetas de Juegos'}
                    </button>
                </div>
            </div>

            <!-- CONTENEDOR DINÁMICO DE JUEGOS O TABLA -->
            <div id="contenedor-dinamico-fps">
                ${generarContenidoDinamicoFps(pred)}
            </div>

            <div class="fps-notas-consejos">
                <div style="display: flex; gap: 10px; align-items: flex-start;">
                    <span style="font-size: 1.3rem;">ℹ️</span>
                    <div>
                        <strong>Metodología de Predicción Bunker PC:</strong> Las tasas de cuadros (FPS) son estimaciones basadas en pruebas de hardware reales con controladores actualizados y tecnologías de escalado (DLSS 3 / FSR 3) habilitadas en modo Calidad en títulos compatibles. Para disfrutar al máximo de las altas tasas de cuadros en títulos competitivos (144+ FPS), asegúrate de utilizar un monitor con frecuencia de actualización (Hz) adecuada con cable DisplayPort.
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Genera la cuadrícula de tarjetas o la tabla comparativa según el estado
function generarContenidoDinamicoFps(pred) {
    const resActual = estadoPrediccionFps.resolucion;
    const campoFps = resActual === '1080p' ? 'fps1080p' : (resActual === '2k' ? 'fps2k' : 'fps4k');

    // Filtrar juegos
    let lista = pred.juegos;
    if (estadoPrediccionFps.filtro === 'esports') {
        lista = lista.filter(j => j.categoria === 'esports');
    } else if (estadoPrediccionFps.filtro === 'aaa') {
        lista = lista.filter(j => j.categoria === 'aaa');
    }

    // Modo Tabla Comparativa
    if (estadoPrediccionFps.vista === 'tabla') {
        const filas = lista.map(j => {
            const m1080 = obtenerMetricasFps(j.fps1080p);
            const m2k = obtenerMetricasFps(j.fps2k);
            const m4k = obtenerMetricasFps(j.fps4k);
            return `
                <tr>
                    <td style="display: flex; align-items: center; gap: 10px;">
                        <div style="width: 32px; height: 32px; flex-shrink: 0;">${generarSvgIconoJuego(j.icono)}</div>
                        <div>
                            <strong>${j.nombre}</strong>
                            <span style="display: block; font-size: 0.75rem; color: #64748b;">${j.genero}</span>
                        </div>
                    </td>
                    <td style="color: #94a3b8; font-size: 0.85rem;">${j.preset}</td>
                    <td style="text-align: center;">
                        <span class="fps-celda-res" style="color: ${m1080.colorTexto};">${j.fps1080p} FPS</span>
                        <span style="display: block; font-size: 0.72rem; color: #888;">${m1080.etiqueta.split(' ')[0]} ${m1080.etiqueta.split(' ')[1] || ''}</span>
                    </td>
                    <td style="text-align: center;">
                        <span class="fps-celda-res" style="color: ${m2k.colorTexto};">${j.fps2k} FPS</span>
                        <span style="display: block; font-size: 0.72rem; color: #888;">${m2k.etiqueta.split(' ')[0]} ${m2k.etiqueta.split(' ')[1] || ''}</span>
                    </td>
                    <td style="text-align: center;">
                        <span class="fps-celda-res" style="color: ${m4k.colorTexto};">${j.fps4k} FPS</span>
                        <span style="display: block; font-size: 0.72rem; color: #888;">${m4k.etiqueta.split(' ')[0]} ${m4k.etiqueta.split(' ')[1] || ''}</span>
                    </td>
                </tr>
            `;
        }).join('');

        return `
            <div class="tabla-comparativa-fps-contenedor">
                <table class="tabla-comparativa-fps">
                    <thead>
                        <tr>
                            <th style="width: 30%;">Juego</th>
                            <th style="width: 25%;">Calidad Gráfica</th>
                            <th style="width: 15%; text-align: center; color: #38bdf8;">1080p (Full HD)</th>
                            <th style="width: 15%; text-align: center; color: #00ff88;">2K (QHD 1440p)</th>
                            <th style="width: 15%; text-align: center; color: #c084fc;">4K (UHD 2160p)</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filas}
                    </tbody>
                </table>
            </div>
        `;
    }

    // Modo Cuadrícula de Tarjetas
    const tarjetasHtml = lista.map(j => {
        const fpsValor = j[campoFps];
        const metricas = obtenerMetricasFps(fpsValor);

        return `
            <div class="tarjeta-juego-fps" style="--juego-color: ${j.color};">
                <div>
                    <div class="juego-header">
                        <div class="juego-icono-box">
                            ${generarSvgIconoJuego(j.icono)}
                        </div>
                        <div class="juego-titulos">
                            <h4 class="juego-nombre" title="${j.nombre}">${j.nombre}</h4>
                            <span class="juego-genero">${j.genero}</span>
                        </div>
                    </div>

                    <div class="juego-preset-badge">
                        <span>⚙️</span>
                        <span>${j.preset}</span>
                    </div>

                    <div class="juego-fps-display">
                        <div>
                            <span class="juego-fps-numero" style="color: ${metricas.colorTexto};">${fpsValor}</span>
                            <span class="juego-fps-unidad">FPS</span>
                        </div>
                        <span class="juego-veredicto-badge" style="background: ${metricas.colorFondo}; color: ${metricas.colorTexto}; border: 1px solid ${metricas.colorTexto}40;">
                            ${metricas.etiqueta}
                        </span>
                    </div>

                    <div class="juego-meter-track">
                        <div class="juego-meter-fill" style="width: ${metricas.porcentaje}%; background: ${metricas.gradiente};"></div>
                    </div>
                </div>

                <div class="juego-otras-resoluciones">
                    <div class="mini-res-pill ${resActual === '1080p' ? 'destacado' : ''}" data-cambiar-res="1080p">
                        <span class="label">1080p</span>
                        <span class="valor">${j.fps1080p} FPS</span>
                    </div>
                    <div class="mini-res-pill ${resActual === '2k' ? 'destacado' : ''}" data-cambiar-res="2k">
                        <span class="label">2K QHD</span>
                        <span class="valor">${j.fps2k} FPS</span>
                    </div>
                    <div class="mini-res-pill ${resActual === '4k' ? 'destacado' : ''}" data-cambiar-res="4k">
                        <span class="label">4K UHD</span>
                        <span class="valor">${j.fps4k} FPS</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `<div class="grid-juegos-fps">${tarjetasHtml}</div>`;
}

// Actualiza dinámicamente el contenido de la sección FPS al interactuar con los botones
function actualizarVistaPrediccionFps() {
    const contenedor = document.getElementById('contenedor-dinamico-fps');
    if (!contenedor) return;

    const pred = calcularPrediccionFps();
    contenedor.innerHTML = generarContenidoDinamicoFps(pred);

    // Actualizar botones de resolución activa
    document.querySelectorAll('.btn-fps-res').forEach(btn => {
        btn.classList.toggle('activo', btn.getAttribute('data-res') === estadoPrediccionFps.resolucion);
    });

    // Actualizar botones de filtro activo
    document.querySelectorAll('.btn-fps-filtro').forEach(btn => {
        btn.classList.toggle('activo', btn.getAttribute('data-filtro') === estadoPrediccionFps.filtro);
    });

    // Actualizar botón de vista
    const btnVista = document.getElementById('btn-toggle-vista-fps');
    if (btnVista) {
        btnVista.classList.toggle('activo', estadoPrediccionFps.vista === 'tabla');
        btnVista.textContent = estadoPrediccionFps.vista === 'tarjetas'
            ? '📊 Ver Tabla Comparativa 1080p/2K/4K'
            : '🃏 Ver Tarjetas de Juegos';
    }

    // Vincular clics en mini-pills de las tarjetas
    contenedor.querySelectorAll('.mini-res-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            const targetRes = pill.getAttribute('data-cambiar-res');
            if (targetRes && targetRes !== estadoPrediccionFps.resolucion) {
                estadoPrediccionFps.resolucion = targetRes;
                actualizarVistaPrediccionFps();
            }
        });
    });
}

// Asignar listeners a los botones de resolución, categorías y vista
function vincularEventosPrediccionFps() {
    document.querySelectorAll('.btn-fps-res').forEach(btn => {
        btn.addEventListener('click', () => {
            const res = btn.getAttribute('data-res');
            if (res && res !== estadoPrediccionFps.resolucion) {
                estadoPrediccionFps.resolucion = res;
                actualizarVistaPrediccionFps();
            }
        });
    });

    document.querySelectorAll('.btn-fps-filtro').forEach(btn => {
        btn.addEventListener('click', () => {
            const filtro = btn.getAttribute('data-filtro');
            if (filtro && filtro !== estadoPrediccionFps.filtro) {
                estadoPrediccionFps.filtro = filtro;
                actualizarVistaPrediccionFps();
            }
        });
    });

    const btnVista = document.getElementById('btn-toggle-vista-fps');
    if (btnVista) {
        btnVista.addEventListener('click', () => {
            estadoPrediccionFps.vista = estadoPrediccionFps.vista === 'tarjetas' ? 'tabla' : 'tarjetas';
            actualizarVistaPrediccionFps();
        });
    }

    // Vincular clics en mini-pills de las tarjetas
    const contenedor = document.getElementById('contenedor-dinamico-fps');
    if (contenedor) {
        contenedor.querySelectorAll('.mini-res-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                const targetRes = pill.getAttribute('data-cambiar-res');
                if (targetRes && targetRes !== estadoPrediccionFps.resolucion) {
                    estadoPrediccionFps.resolucion = targetRes;
                    actualizarVistaPrediccionFps();
                }
            });
        });
    }
}

// 4. FUNCIONES PRINCIPALES DEL ASISTENTE
function cargarPaso() {
    const paso = ordenPasos[pasoActual];
    tituloPaso.textContent = paso.titulo;
    buscadorTarjetas.value = ''; // Limpiar buscador
    idSeleccionadoTemporal = null;

    // Mostrar el banner de cálculo si estamos en el paso de Fuente de Poder, de lo contrario ocultar
    if (paso.id === 'fuente') {
        renderizarBannerCalculoFuente();
    } else if (contenedorCalculoFuente) {
        contenedorCalculoFuente.style.display = 'none';
    }

    // Bloquear el botón hasta que elija algo
    btnSiguiente.disabled = true;
    btnSiguiente.textContent = 'Selecciona una pieza para continuar';

    // Mostrar botón omitir SOLO si es un paso opcional
    const pasosOpcionales = ['gpu', 'monitor', 'teclado', 'mouse', 'mousepad', 'auricular'];
    if (pasosOpcionales.includes(paso.id)) {
        btnOmitir.style.display = 'block';
        btnOmitir.textContent = paso.id === 'gpu' ? 'Continuar sin Tarjeta Gráfica' : 'Omitir este paso';
    } else {
        btnOmitir.style.display = 'none';
    }

    // Mostrar botón atrás si no estamos en el primer paso
    if (pasoActual > 0) {
        btnAtras.style.display = 'block';
    } else {
        btnAtras.style.display = 'none';
    }

    // MAGIA DE COMPATIBILIDAD: Filtramos antes de mostrar las tarjetas
    let listaMostrar = paso.db;

    if (paso.id === 'placa') {
        const cpuElegido = mapComponentes.get(pcArmada.cpu);
        if (cpuElegido) listaMostrar = listaMostrar.filter(p => p.socket === cpuElegido.socket);
    } else if (paso.id === 'ram') {
        const placaElegida = mapComponentes.get(pcArmada.placa);
        if (placaElegida) listaMostrar = listaMostrar.filter(r => r.tecnologia === placaElegida.tipoRam);
    }

    mostrarTarjetas(listaMostrar, paso.id);
}

let tarjetaSeleccionadaPrevia = null;

function mostrarTarjetas(lista) {
    contenedorTarjetas.innerHTML = ''; // Limpiar tarjetas viejas
    tarjetaSeleccionadaPrevia = null;

    // Animación de las tarjetas sin forzar reflow
    contenedorTarjetas.classList.remove('animacion-entrada');
    requestAnimationFrame(() => {
        contenedorTarjetas.classList.add('animacion-entrada');
    });

    if (lista.length === 0) {
        contenedorTarjetas.innerHTML = '<p style="color: #ff0000; grid-column: 1 / -1; text-align: center;">No hay componentes encontrados.</p>';
        return;
    }

    const pasoActualObj = ordenPasos[pasoActual];
    const pasoIdActual = pasoActualObj ? pasoActualObj.id : '';
    const esPasoFuente = pasoIdActual === 'fuente';
    const esPasoCooler = pasoIdActual === 'cooler';
    const esPasoRam = pasoIdActual === 'ram';
    const esPasoCpu = pasoIdActual === 'cpu';
    const esPasoPlaca = pasoIdActual === 'placa';
    const esPasoGpu = pasoIdActual === 'gpu';
    const esPasoAlmacenamiento = pasoIdActual === 'almacenamiento';
    const esPasoGabinete = pasoIdActual === 'gabinete';
    const esPasoPeriferico = ['monitor', 'teclado', 'mouse', 'mousepad', 'auricular'].includes(pasoIdActual);
    const datosPotencia = esPasoFuente ? calcularConsumoEstimadoPc() : null;

    const fragment = document.createDocumentFragment();

    lista.forEach(item => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta tiene-badge-componente';

        // Si es la opción "Sin Tarjeta Gráfica", se renderiza solo como texto (sin espacio de imagen)
        if (item.id === 'gpu_ninguna') {
            tarjeta.classList.add('tarjeta-sin-imagen');
            tarjeta.innerHTML = `
                <div style="margin: auto 0; padding: 25px 12px;">
                    <div style="font-size: 1.1rem; letter-spacing: 2px; text-transform: uppercase; color: #888; margin-bottom: 15px; font-weight: bold; border: 1px solid #333; display: inline-block; padding: 6px 14px; border-radius: 6px;">[ INTEGRADA ]</div>
                    <h3 style="font-size: 1.45rem; color: #4da8da; margin-bottom: 14px;">Sin Tarjeta Gráfica</h3>
                    <p style="font-size: 1.15rem; color: #bbb; margin-bottom: 20px; font-weight: normal; line-height: 1.5;">Usar Gráficos Integrados del Procesador</p>
                    <span style="display: inline-block; padding: 8px 18px; background: rgba(77, 168, 218, 0.15); border: 1px solid #4da8da; border-radius: 20px; font-size: 1rem; color: #4da8da; font-weight: bold;">Configuración Básica</span>
                </div>
                <p style="color: #00ff88; font-weight: bold; font-size: 1.7rem; margin-top: auto;">$0</p>
            `;
        } else {
            const urlImagen = item.imagen ? item.imagen : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23141414' rx='10'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' fill='%234da8da' font-family='sans-serif' font-size='36'%3E🎮%3C/text%3E%3Ctext x='50%25' y='70%25' dominant-baseline='middle' text-anchor='middle' fill='%23888' font-family='sans-serif' font-size='12'%3EBUNKER PC%3C/text%3E%3C/svg%3E";
            let badgeHtml = '';
            let extraInfoHtml = '';
            let tituloTarjetaHtml = `<h3>${item.marca} ${item.modelo}</h3>`;

            if (esPasoCpu) {
                tarjeta.classList.add('tiene-badge-cpu');
                const infoCpu = obtenerInfoCpu(item);
                badgeHtml = `<div class="comp-badge-top comp-badge-cpu">
                    <span>🧠 <strong>${infoCpu.textoCorto}</strong></span>
                    <span style="opacity: 0.6;">•</span>
                    <span>🔌 <strong>${item.socket}</strong></span>
                </div>`;
                tituloTarjetaHtml = `<h3 class="tarjeta-titulo-comp">${item.marca} ${item.modelo} <span class="comp-subtitulo-inline">(${infoCpu.nucleos} Núcleos / ${infoCpu.hilos} Hilos)</span></h3>`;
                extraInfoHtml = `
                    <div class="comp-specs-badge">
                        <span class="comp-spec-pill pill-cpu-cores" title="Núcleos y Hilos de procesamiento">🧮 <strong>${infoCpu.textoCorto}</strong></span>
                        ${infoCpu.boost ? `<span class="comp-spec-pill pill-cpu-boost" title="Frecuencia Turbo Máxima">⚡ <strong>${infoCpu.boost}</strong></span>` : ''}
                        <span class="comp-spec-pill pill-cpu-socket" title="Zócalo Socket">🔌 <strong>${item.socket}</strong></span>
                    </div>
                `;
            } else if (esPasoPlaca) {
                tarjeta.classList.add('tiene-badge-placa');
                const infoPlaca = obtenerInfoPlaca(item);
                badgeHtml = `<div class="comp-badge-top comp-badge-placa">
                    <span>🔌 <strong>Socket ${item.socket}</strong></span>
                    <span style="opacity: 0.6;">•</span>
                    <span>💾 <strong>RAM ${item.tipoRam}</strong></span>
                </div>`;
                tituloTarjetaHtml = `<h3 class="tarjeta-titulo-comp">${item.marca} ${item.modelo} <span class="comp-subtitulo-inline">(${item.socket} • Soporta ${item.tipoRam})</span></h3>`;
                extraInfoHtml = `
                    <div class="comp-specs-badge">
                        <span class="comp-spec-pill pill-placa-socket" title="Socket soportado">🔌 <strong>${item.socket}</strong></span>
                        <span class="comp-spec-pill pill-placa-ram" title="Tecnología de Memoria RAM">💾 <strong>${item.tipoRam}</strong></span>
                        <span class="comp-spec-pill pill-placa-formato" title="Factor de forma">📐 <strong>${infoPlaca.formato}</strong></span>
                    </div>
                `;
            } else if (esPasoCooler) {
                tarjeta.classList.add('tiene-badge-cooler');
                const esLiquida = (item.tipo && item.tipo.toLowerCase().includes('quid')) || (item.tamano && item.tamano.includes('AIO'));
                const labelBadge = esLiquida
                    ? `💧 Líquida ${item.tamano ? item.tamano.replace('AIO ', '') : 'AIO'}`
                    : `❄️ Torre de Aire`;

                badgeHtml = `<div class="comp-badge-top ${esLiquida ? 'comp-badge-liquida' : 'comp-badge-aire'}">${labelBadge}</div>`;
                tituloTarjetaHtml = `<h3 class="tarjeta-titulo-comp">${item.marca} ${item.modelo} <span class="comp-subtitulo-inline">(${item.tamano || item.tipo})</span></h3>`;
                extraInfoHtml = `
                    <div class="comp-specs-badge">
                        <span class="comp-spec-pill pill-cooler-tdp" title="Capacidad de enfriamiento TDP">🔥 <strong>TDP ${item.tdpMax}W</strong></span>
                        <span class="comp-spec-pill pill-cooler-watts" title="Consumo energético">⚡ <strong>${item.consumo}W</strong></span>
                        <span class="comp-spec-pill pill-cooler-tipo" title="Tipo de disipador">❄️ <strong>${item.tipo}</strong></span>
                    </div>
                `;
            } else if (esPasoRam) {
                tarjeta.classList.add('tiene-badge-ram');
                const infoRam = obtenerInfoRam(item);
                const esDual = infoRam.modulos >= 2;

                badgeHtml = `<div class="comp-badge-top comp-badge-ram">
                    <span>⚡ <strong>${infoRam.frecuencia}</strong></span>
                    <span style="opacity: 0.6;">•</span>
                    <span>📦 <strong>${infoRam.textoModulos}</strong> <span class="ram-badge-dist">(${infoRam.distribucion})</span></span>
                </div>`;
                tituloTarjetaHtml = `<h3 class="tarjeta-titulo-comp">${item.marca} ${item.modelo} <span class="comp-subtitulo-inline">(${infoRam.frecuencia} • ${infoRam.textoModulos})</span></h3>`;
                extraInfoHtml = `
                    <div class="comp-specs-badge">
                        <span class="comp-spec-pill pill-ram-freq" title="Frecuencia de memoria">⚡ <strong>${infoRam.frecuencia}</strong></span>
                        <span class="comp-spec-pill pill-ram-modulos" title="Cantidad de módulos incluidos">📦 <strong>${infoRam.textoModulos}</strong> <small>(${infoRam.distribucion})</small></span>
                        <span class="comp-spec-pill ${esDual ? 'pill-ram-dual' : 'pill-ram-single'}" title="Canal">🔄 <strong>${infoRam.canal}</strong></span>
                    </div>
                `;
            } else if (esPasoGpu) {
                tarjeta.classList.add('tiene-badge-gpu');
                const infoGpu = obtenerInfoGpu(item);
                badgeHtml = `<div class="comp-badge-top comp-badge-gpu">
                    <span>🎮 <strong>${item.vram}</strong></span>
                    <span style="opacity: 0.6;">•</span>
                    <span>🚀 <strong>${infoGpu.serie}</strong></span>
                </div>`;
                tituloTarjetaHtml = `<h3 class="tarjeta-titulo-comp">${item.marca} ${item.modelo} <span class="comp-subtitulo-inline">(${item.vram})</span></h3>`;
                extraInfoHtml = `
                    <div class="comp-specs-badge">
                        <span class="comp-spec-pill pill-gpu-vram" title="Memoria de Video VRAM">🎮 <strong>${item.vram}</strong></span>
                        <span class="comp-spec-pill pill-gpu-tdp" title="Consumo TDP">⚡ <strong>~${infoGpu.watts}W</strong></span>
                        <span class="comp-spec-pill pill-gpu-serie" title="Arquitectura / Serie">🚀 <strong>${infoGpu.serie}</strong></span>
                    </div>
                `;
            } else if (esPasoAlmacenamiento) {
                tarjeta.classList.add('tiene-badge-almacenamiento');
                const infoHdd = obtenerInfoAlmacenamiento(item);
                badgeHtml = `<div class="comp-badge-top comp-badge-almacenamiento">
                    <span>💾 <strong>${infoHdd.tipo}</strong></span>
                    <span style="opacity: 0.6;">•</span>
                    <span>📦 <strong>${infoHdd.capacidad}</strong></span>
                </div>`;
                tituloTarjetaHtml = `<h3 class="tarjeta-titulo-comp">${item.marca} ${item.modelo} <span class="comp-subtitulo-inline">(${infoHdd.capacidad} • ${infoHdd.velocidad})</span></h3>`;
                extraInfoHtml = `
                    <div class="comp-specs-badge">
                        <span class="comp-spec-pill pill-storage-cap" title="Capacidad">📦 <strong>${infoHdd.capacidad}</strong></span>
                        <span class="comp-spec-pill pill-storage-speed" title="Velocidad">🚀 <strong>${infoHdd.velocidad}</strong></span>
                        <span class="comp-spec-pill pill-storage-tipo" title="Interfaz">💾 <strong>${infoHdd.tipo}</strong></span>
                    </div>
                `;
            } else if (esPasoFuente && item.certificacion) {
                tarjeta.classList.add('tiene-badge-psu');
                const wattsNum = parseInt(item.watts) || 0;
                const esOptima = datosPotencia ? wattsNum >= datosPotencia.potenciaMinima : true;

                badgeHtml = `<div class="psu-badge-potencia ${esOptima ? 'psu-badge-optima' : 'psu-badge-baja'}">` +
                    (esOptima ? `✔ Potencia Óptima (${item.watts})` : `⚠ Potencia Ajustada (${item.watts} &lt; ${datosPotencia.potenciaMinima}W)`) +
                    `</div>`;
                tituloTarjetaHtml = `<h3 class="tarjeta-titulo-comp">${item.marca} ${item.modelo} <span class="comp-subtitulo-inline">(${item.watts} • ${item.certificacion})</span></h3>`;
                extraInfoHtml = `
                    <div class="comp-specs-badge">
                        <span class="comp-spec-pill pill-psu-watts" title="Potencia de salida">⚡ <strong>${item.watts}</strong></span>
                        <span class="comp-spec-pill pill-psu-cert" title="Certificación de Eficiencia">🏅 <strong>${item.certificacion}</strong></span>
                    </div>
                `;
            } else if (esPasoGabinete) {
                tarjeta.classList.add('tiene-badge-case');
                const infoCase = obtenerInfoGabinete(item);
                badgeHtml = `<div class="comp-badge-top comp-badge-case">
                    <span>🖥️ <strong>Formato: ${infoCase.principal}</strong></span>
                </div>`;
                tituloTarjetaHtml = `<h3 class="tarjeta-titulo-comp">${item.marca} ${item.modelo} <span class="comp-subtitulo-inline">(${infoCase.principal})</span></h3>`;
                extraInfoHtml = `
                    <div class="comp-specs-badge">
                        <span class="comp-spec-pill pill-case-formato" title="Placas compatibles">📐 <strong>${item.formato}</strong></span>
                    </div>
                `;
            } else if (esPasoPeriferico) {
                tarjeta.classList.add('tiene-badge-periferico');
                const infoPerif = obtenerInfoPeriferico(item);
                badgeHtml = `<div class="comp-badge-top comp-badge-periferico">${infoPerif.badge}</div>`;
                tituloTarjetaHtml = `<h3 class="tarjeta-titulo-comp">${item.marca} ${item.modelo}</h3>`;
                const pillsHtml = infoPerif.pills.map(p => `
                    <span class="comp-spec-pill ${p.clase}">
                        ${p.icono} <strong>${p.texto}</strong>
                    </span>
                `).join('');
                extraInfoHtml = `<div class="comp-specs-badge">${pillsHtml}</div>`;
            }

            tarjeta.innerHTML = `
                ${badgeHtml}
                <img src="${urlImagen}" alt="${item.modelo}" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 200 200\\'%3E%3Crect width=\\'200\\' height=\\'200\\' fill=\\'%23141414\\' rx=\\'10\\'/%3E%3Ctext x=\\'50%25\\' y=\\'45%25\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' fill=\\'%234da8da\\' font-family=\\'sans-serif\\' font-size=\\'36\\'%3E🎮%3C/text%3E%3Ctext x=\\'50%25\\' y=\\'70%25\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' fill=\\'%23888\\' font-family=\\'sans-serif\\' font-size=\\'12\\'%3EBUNKER PC%3C/text%3E%3C/svg%3E';">
                ${tituloTarjetaHtml}
                ${extraInfoHtml}
                <p>$${item.precio}</p>
            `;
        }

        // Selección eficiente O(1) sin recorrer todo el DOM
        tarjeta.addEventListener('click', () => {
            if (tarjetaSeleccionadaPrevia && tarjetaSeleccionadaPrevia !== tarjeta) {
                tarjetaSeleccionadaPrevia.classList.remove('seleccionada');
            }
            tarjeta.classList.add('seleccionada');
            tarjetaSeleccionadaPrevia = tarjeta;
            idSeleccionadoTemporal = item.id;

            // Activar botón de Siguiente
            btnSiguiente.disabled = false;
            btnSiguiente.textContent = pasoActual === ordenPasos.length - 1 ? '¡Finalizar Ensamblaje!' : 'Siguiente Paso';

            // Feedback en tiempo real para cualquier componente seleccionado
            if (resumenPotenciaContenedor) {
                resumenPotenciaContenedor.style.display = 'block';
                if (esPasoCpu) {
                    const infoCpu = obtenerInfoCpu(item);
                    resumenPotenciaContenedor.innerHTML = `
                        <div class="resumen-detalle-box">
                            <div class="resumen-detalle-header">
                                <span>🧠 Procesador Seleccionado</span>
                                <strong style="color: #4da8da;">${item.marca}</strong>
                            </div>
                            <div class="resumen-detalle-row">
                                <span>Arquitectura:</span>
                                <strong style="color: #00ff88;">${infoCpu.textoNucleos}</strong>
                            </div>
                            ${infoCpu.boost ? `<div class="resumen-detalle-row"><span>Turbo Boost:</span><strong style="color: #facc15;">${infoCpu.boost}</strong></div>` : ''}
                            <div class="resumen-detalle-row">
                                <span>Socket compatible:</span>
                                <strong style="color: #38bdf8;">${item.socket}</strong>
                            </div>
                            <div class="resumen-detalle-row">
                                <span>Consumo TDP:</span>
                                <strong style="color: #ffaa00;">~${obtenerWattsCpu(item.id)}W</strong>
                            </div>
                            <div class="resumen-detalle-row">
                                <span>Gráficos Integrados:</span>
                                <strong style="color: ${infoCpu.igpu ? '#00ff88' : '#bbb'};">${infoCpu.igpu ? (infoCpu.igpuNombre ? 'Sí (' + infoCpu.igpuNombre + ')' : 'Sí') : 'No (Requiere GPU)'}</strong>
                            </div>
                        </div>
                    `;
                } else if (esPasoPlaca) {
                    const infoPlaca = obtenerInfoPlaca(item);
                    resumenPotenciaContenedor.innerHTML = `
                        <div class="resumen-detalle-box">
                            <div class="resumen-detalle-header">
                                <span>🔌 Placa Base Seleccionada</span>
                                <strong style="color: #4da8da;">${item.marca}</strong>
                            </div>
                            <div class="resumen-detalle-row">
                                <span>Socket CPU:</span>
                                <strong style="color: #00ff88;">${item.socket}</strong>
                            </div>
                            <div class="resumen-detalle-row">
                                <span>Memoria Soportada:</span>
                                <strong style="color: #facc15;">DDR${item.tipoRam.replace('DDR', '')}</strong>
                            </div>
                            <div class="resumen-detalle-row">
                                <span>Factor de Forma:</span>
                                <strong style="color: #38bdf8;">${infoPlaca.formato}</strong>
                            </div>
                        </div>
                    `;
                } else if (esPasoCooler) {
                    resumenPotenciaContenedor.innerHTML = `
                        <div class="resumen-detalle-box">
                            <div class="resumen-detalle-header">
                                <span>❄️ Refrigeración Seleccionada</span>
                                <strong style="color: #4da8da;">${item.marca}</strong>
                            </div>
                            <div class="resumen-detalle-row">
                                <span>Tipo y Formato:</span>
                                <strong style="color: #00ff88;">${item.tipo} (${item.tamano})</strong>
                            </div>
                            <div class="resumen-detalle-row">
                                <span>TDP Máximo Soportado:</span>
                                <strong style="color: #facc15;">${item.tdpMax}W</strong>
                            </div>
                            <div class="resumen-detalle-row">
                                <span>Consumo Eléctrico:</span>
                                <strong style="color: #38bdf8;">~${item.consumo}W</strong>
                            </div>
                        </div>
                    `;
                } else if (esPasoRam) {
                    const infoRam = obtenerInfoRam(item);
                    resumenPotenciaContenedor.innerHTML = `
                        <div class="resumen-ram-box">
                            <div style="display: flex; justify-content: space-between; width: 100%; align-items: center; margin-bottom: 6px;">
                                <span style="color: #4da8da; font-weight: 700; font-size: 0.92rem;">⚡ Frecuencia:</span>
                                <strong style="font-size: 1.15rem; color: #facc15;">${infoRam.frecuencia}</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; width: 100%; align-items: center; border-top: 1px solid #1f2d3d; padding-top: 6px; font-size: 0.9rem;">
                                <span style="color: #ccc;">📦 Módulos incluidos:</span>
                                <strong style="color: #38bdf8;">${infoRam.textoModulos} (${infoRam.distribucion})</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; width: 100%; align-items: center; margin-top: 5px; font-size: 0.82rem;">
                                <span style="color: #8892b0;">Canal de Rendimiento:</span>
                                <strong style="color: ${infoRam.modulos >= 2 ? '#00ff88' : '#38bdf8'}; font-weight: 700;">${infoRam.canal}</strong>
                            </div>
                        </div>
                    `;
                } else if (esPasoGpu) {
                    const infoGpu = obtenerInfoGpu(item);
                    resumenPotenciaContenedor.innerHTML = `
                        <div class="resumen-detalle-box">
                            <div class="resumen-detalle-header">
                                <span>🎮 Tarjeta Gráfica Seleccionada</span>
                                <strong style="color: #4da8da;">${item.marca}</strong>
                            </div>
                            <div class="resumen-detalle-row">
                                <span>Memoria VRAM:</span>
                                <strong style="color: #00ff88;">${item.vram}</strong>
                            </div>
                            <div class="resumen-detalle-row">
                                <span>Familia:</span>
                                <strong style="color: #facc15;">${infoGpu.serie}</strong>
                            </div>
                            <div class="resumen-detalle-row">
                                <span>Consumo TDP:</span>
                                <strong style="color: #ffaa00;">~${infoGpu.watts}W</strong>
                            </div>
                        </div>
                    `;
                } else if (esPasoAlmacenamiento) {
                    const infoHdd = obtenerInfoAlmacenamiento(item);
                    resumenPotenciaContenedor.innerHTML = `
                        <div class="resumen-detalle-box">
                            <div class="resumen-detalle-header">
                                <span>💾 Almacenamiento Seleccionado</span>
                                <strong style="color: #4da8da;">${item.marca}</strong>
                            </div>
                            <div class="resumen-detalle-row">
                                <span>Capacidad:</span>
                                <strong style="color: #00ff88;">${infoHdd.capacidad}</strong>
                            </div>
                            <div class="resumen-detalle-row">
                                <span>Velocidad de Lectura:</span>
                                <strong style="color: #facc15;">${infoHdd.velocidad}</strong>
                            </div>
                            <div class="resumen-detalle-row">
                                <span>Interfaz:</span>
                                <strong style="color: #38bdf8;">${infoHdd.tipo}</strong>
                            </div>
                        </div>
                    `;
                } else if (esPasoFuente) {
                    const wattsNum = parseInt(item.watts) || 0;
                    const esOptima = datosPotencia ? wattsNum >= datosPotencia.potenciaMinima : true;
                    resumenPotenciaContenedor.innerHTML = `
                        <div class="resumen-potencia-box">
                            <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
                                <span>⚡ Consumo Estimado:</span>
                                <strong style="font-size: 1.05rem; color: #00ff88;">~${datosPotencia ? datosPotencia.consumoTotal : 350}W</strong>
                            </div>
                            <div style="width: 100%; border-top: 1px solid #1f2d3d; padding-top: 6px; margin-top: 6px; display: flex; justify-content: space-between; font-size: 0.82rem;">
                                <span>Fuente: <strong>${item.marca} (${item.watts})</strong></span>
                                <span style="color: ${esOptima ? '#00ff88' : '#ffaa00'}; font-weight: bold;">
                                    ${esOptima ? '✔ Potencia Óptima' : '⚠ Ajustada'}
                                </span>
                            </div>
                        </div>
                    `;
                } else if (esPasoGabinete) {
                    const infoCase = obtenerInfoGabinete(item);
                    resumenPotenciaContenedor.innerHTML = `
                        <div class="resumen-detalle-box">
                            <div class="resumen-detalle-header">
                                <span>🖥️ Gabinete Seleccionado</span>
                                <strong style="color: #4da8da;">${item.marca}</strong>
                            </div>
                            <div class="resumen-detalle-row">
                                <span>Formato Principal:</span>
                                <strong style="color: #00ff88;">${infoCase.principal}</strong>
                            </div>
                            <div class="resumen-detalle-row">
                                <span>Compatibilidad de Placas:</span>
                                <strong style="color: #38bdf8;">${item.formato}</strong>
                            </div>
                        </div>
                    `;
                } else if (esPasoPeriferico) {
                    const infoPerif = obtenerInfoPeriferico(item);
                    resumenPotenciaContenedor.innerHTML = `
                        <div class="resumen-detalle-box">
                            <div class="resumen-detalle-header">
                                <span>🎁 Periférico: ${item.tipo}</span>
                                <strong style="color: #4da8da;">${item.marca}</strong>
                            </div>
                            <div class="resumen-detalle-row">
                                <span>Modelo:</span>
                                <strong style="color: #00ff88;">${item.modelo}</strong>
                            </div>
                            <div class="resumen-detalle-row">
                                <span>Detalle:</span>
                                <strong style="color: #38bdf8;">${infoPerif.badge}</strong>
                            </div>
                        </div>
                    `;
                }
            }

            // Mostrar imagen o texto explicativo en el visualizador lateral
            if (item.id === 'gpu_ninguna') {
                imagenComponente.style.display = 'none';
                imagenComponente.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'/%3E';
                textoVisualizador.style.display = 'block';

                // Verificación técnica de compatibilidad si el procesador no cuenta con gráficos integrados
                const cpu = mapComponentes.get(pcArmada.cpu);
                if (cpu && !cpuTieneGraficosIntegrados(cpu.id)) {
                    textoVisualizador.innerHTML = `<strong style="color: #ffaa00;">Aviso Técnico:</strong> Tu procesador seleccionado (<strong>${cpu.marca} ${cpu.modelo}</strong>) no dispone de gráficos integrados. Se recomienda una GPU dedicada para dar señal de video.`;
                } else if (cpu) {
                    textoVisualizador.innerHTML = `<strong>Sin Tarjeta Gráfica Dedicada</strong><br><br><span style="color: #ccc; font-size: 0.95rem;">Tu equipo utilizará los gráficos integrados de tu procesador <strong>${cpu.marca} ${cpu.modelo}</strong>.</span>`;
                } else {
                    textoVisualizador.innerHTML = `<strong>Sin Tarjeta Gráfica Dedicada</strong><br><br><span style="color: #ccc; font-size: 0.95rem;">Configuración seleccionada sin costo adicional ($0).</span>`;
                }
            } else if (item.imagen) {
                imagenComponente.onerror = function () {
                    this.onerror = null;
                    this.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23141414' rx='10'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' fill='%234da8da' font-family='sans-serif' font-size='36'%3E🎮%3C/text%3E%3Ctext x='50%25' y='70%25' dominant-baseline='middle' text-anchor='middle' fill='%23888' font-family='sans-serif' font-size='12'%3EBUNKER PC%3C/text%3E%3C/svg%3E";
                };
                imagenComponente.src = item.imagen;
                imagenComponente.style.display = 'block';
                textoVisualizador.style.display = 'none';
            } else {
                imagenComponente.style.display = 'none';
                textoVisualizador.style.display = 'block';
                textoVisualizador.textContent = 'Selecciona un componente para ver su imagen';
            }
        });

        fragment.appendChild(tarjeta);
    });

    contenedorTarjetas.appendChild(fragment);
}

// 5. EVENTOS: EL BUSCADOR UNIVERSAL (Con Debounce optimizado)
buscadorTarjetas.addEventListener('input', debounce((e) => {
    const texto = e.target.value.toLowerCase().trim();
    const paso = ordenPasos[pasoActual];
    let listaMostrar = paso.db;

    // Volver a aplicar compatibilidad
    if (paso.id === 'placa') {
        const cpu = mapComponentes.get(pcArmada.cpu);
        if (cpu) listaMostrar = listaMostrar.filter(p => p.socket === cpu.socket);
    } else if (paso.id === 'ram') {
        const placa = mapComponentes.get(pcArmada.placa);
        if (placa) listaMostrar = listaMostrar.filter(r => r.tecnologia === placa.tipoRam);
    }

    // Filtrar por el texto con _searchText precomputado
    if (texto) {
        listaMostrar = listaMostrar.filter(item => {
            return (item._searchText || `${item.marca} ${item.modelo}`.toLowerCase()).includes(texto);
        });
    }

    mostrarTarjetas(listaMostrar);
}, 120));

// Nombres legibles para las categorías de la Nota de Venta
const nombresCategorias = {
    cpu: 'Procesador (CPU)',
    placa: 'Placa Base (Motherboard)',
    cooler: 'Refrigeración / Cooler',
    ram: 'Memoria RAM',
    gpu: 'Tarjeta Gráfica (GPU)',
    almacenamiento: 'Almacenamiento',
    fuente: 'Fuente de Poder (PSU)',
    gabinete: 'Gabinete (Case)',
    monitor: 'Monitor',
    teclado: 'Teclado',
    mouse: 'Mouse',
    mousepad: 'Mousepad',
    auricular: 'Auriculares'
};

// Función para obtener la lista de piezas seleccionadas y el total
function obtenerResumenItems() {
    const items = [];
    let total = 0;
    let contador = 1;

    ordenPasos.forEach(paso => {
        const idElegido = pcArmada[paso.id];
        if (idElegido) {
            const comp = mapComponentes.get(idElegido);
            if (comp) {
                total += comp.precio;
                let prodNombre = `${comp.marca} ${comp.modelo}`;
                if (comp.id === 'gpu_ninguna') {
                    prodNombre = 'Sin Tarjeta Gráfica (Gráficos Integrados del Procesador)';
                } else if (paso.id === 'cpu') {
                    const infoCpu = obtenerInfoCpu(comp);
                    prodNombre = `${comp.marca} ${comp.modelo} (${infoCpu.textoNucleos}${infoCpu.boost ? ', Boost ' + infoCpu.boost : ''}, Socket ${comp.socket})`;
                } else if (paso.id === 'placa') {
                    const infoPlaca = obtenerInfoPlaca(comp);
                    prodNombre = `${comp.marca} ${comp.modelo} (Socket ${comp.socket}, Memoria ${comp.tipoRam}, ${infoPlaca.formato})`;
                } else if (paso.id === 'cooler') {
                    prodNombre = `${comp.marca} ${comp.modelo} (${comp.tipo}, ${comp.tamano}, TDP ${comp.tdpMax}W)`;
                } else if (paso.id === 'ram') {
                    const infoRam = obtenerInfoRam(comp);
                    prodNombre = `${comp.marca} ${comp.modelo} (${infoRam.frecuencia}, ${infoRam.textoModulos} ${infoRam.distribucion})`;
                } else if (paso.id === 'gpu') {
                    const infoGpu = obtenerInfoGpu(comp);
                    prodNombre = `${comp.marca} ${comp.modelo} (${comp.vram}, ${infoGpu.serie})`;
                } else if (paso.id === 'almacenamiento') {
                    const infoHdd = obtenerInfoAlmacenamiento(comp);
                    prodNombre = `${comp.marca} ${comp.modelo} (${infoHdd.capacidad}, ${infoHdd.velocidad}, ${infoHdd.tipo})`;
                } else if (paso.id === 'fuente') {
                    prodNombre = `${comp.marca} ${comp.modelo} (${comp.watts}${comp.certificacion ? ', ' + comp.certificacion : ''})`;
                } else if (paso.id === 'gabinete') {
                    const infoCase = obtenerInfoGabinete(comp);
                    prodNombre = `${comp.marca} ${comp.modelo} (Formato ${infoCase.principal}, Soporta ${comp.formato})`;
                } else if (['monitor', 'teclado', 'mouse', 'mousepad', 'auricular'].includes(paso.id)) {
                    const infoPerif = obtenerInfoPeriferico(comp);
                    prodNombre = `${comp.marca} ${comp.modelo} (${infoPerif.badge.replace(/^[^a-zA-Z0-9]+/, '').trim()})`;
                }
                items.push({
                    n: contador++,
                    categoria: nombresCategorias[paso.id] || paso.titulo,
                    marca: comp.marca,
                    modelo: comp.modelo,
                    producto: prodNombre,
                    precio: comp.precio
                });
            }
        }
    });

    return { items, total };
}

// 1. EXPORTAR NOTA DE VENTA A EXCEL (.CSV compatible universal)
function exportarExcelNotaVenta() {
    const { items, total } = obtenerResumenItems();
    if (items.length === 0) {
        alert("Aún no has seleccionado componentes.");
        return;
    }

    const fechaHoy = new Date().toLocaleDateString('es-ES');
    const horaHoy = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

    // UTF-8 BOM y delimitador para que Microsoft Excel lo abra en columnas directas
    let csv = "\uFEFFsep=;\n";
    csv += "BUNKER PC - NOTA DE VENTA Y COTIZACIÓN DE HARDWARE\n";
    csv += "Centro Educativo San Martín de Porres\n";
    csv += `Fecha:;${fechaHoy};Hora:;${horaHoy}\n`;
    csv += "Concepto:;Ensamblaje de Computadora Personalizada (PC Custom)\n";
    csv += "Moneda:;Dólares Estadounidenses (USD)\n\n";

    csv += "N°;Categoría;Componente / Descripción;Precio Unitario ($)\n";

    items.forEach(it => {
        const prod = it.producto.replace(/"/g, '""');
        const cat = it.categoria.replace(/"/g, '""');
        csv += `${it.n};"${cat}";"${prod}";$${it.precio}\n`;
    });

    const datosPot = calcularConsumoEstimadoPc();
    const psuComp = pcArmada.fuente ? mapComponentes.get(pcArmada.fuente) : null;
    const predFps = calcularPrediccionFps();

    csv += "\n";
    csv += `;;TOTAL ESTIMADO:;$${total}\n`;
    csv += `;;CONSUMO ELECTRICO ESTIMADO:;~${datosPot.consumoTotal}W\n`;
    csv += `;;POTENCIA RECOMENDADA (PSU):;>= ${datosPot.potenciaMinima}W\n`;
    if (psuComp) {
        csv += `;;FUENTE DE PODER ELEGIDA:;${psuComp.marca} ${psuComp.modelo} (${psuComp.watts})\n`;
    }
    csv += `;;NIVEL GAMING ESTIMADO:;${predFps.tier.nombre.replace(/;/g, ' ')}\n`;
    csv += `;;MONITOR RECOMENDADO:;${predFps.tier.monitor.replace(/;/g, ' ')}\n\n`;

    csv += "PREDICCIÓN DE RENDIMIENTO GAMING (FPS ESTIMADOS POR BUNKER PC)\n";
    csv += "Juego;Categoría;Ajustes Gráficos;1080p (Full HD);2K (QHD 1440p);4K (UHD 2160p);Veredicto\n";
    predFps.juegos.forEach(j => {
        const m1080 = obtenerMetricasFps(j.fps1080p);
        csv += `"${j.nombre}";"${j.genero}";"${j.preset}";${j.fps1080p} FPS;${j.fps2k} FPS;${j.fps4k} FPS;"${m1080.etiqueta}"\n`;
    });
    csv += "\n";
    csv += "Condiciones:;• Precios válidos según disponibilidad de stock en Bunker PC.\n";
    csv += ";• 1 año de garantía técnica en componentes y servicio de ensamblaje.\n";
    csv += ";• Las tasas de cuadros (FPS) son estimaciones basadas en pruebas de hardware reales con escalado inteligente.\n";

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Nota_de_Venta_Bunker_PC_${Date.now()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// 2. EXPORTAR / IMPRIMIR NOTA DE VENTA EN FORMATO PDF
function exportarPDFNotaVenta() {
    const { items, total } = obtenerResumenItems();
    if (items.length === 0) {
        alert("Aún no has seleccionado componentes.");
        return;
    }

    const datosPot = calcularConsumoEstimadoPc();
    const psuComp = pcArmada.fuente ? mapComponentes.get(pcArmada.fuente) : null;
    const predFps = calcularPrediccionFps();

    const fechaHoy = new Date().toLocaleDateString('es-ES', {
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    const numComprobante = `COT-${Date.now().toString().slice(-6)}`;

    const filasHtml = items.map(it => `
        <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e5e5e5; text-align: center; color: #666;">${it.n}</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #111;">${it.categoria}</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e5e5; color: #333;">${it.producto}</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e5e5; text-align: right; font-weight: 700; color: #107c41;">$${it.precio}</td>
        </tr>
    `).join('');

    const ventana = window.open('', '_blank');
    ventana.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Nota de Venta - Bunker PC</title>
            <style>
                * { box-sizing: border-box; margin: 0; padding: 0; }
                body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #222; background: #fff; }
                .contenedor { max-width: 850px; margin: 0 auto; }
                .barra-acciones { text-align: right; margin-bottom: 25px; }
                .btn-imprimir { background: #0078d4; color: white; border: none; padding: 12px 24px; font-size: 15px; border-radius: 6px; cursor: pointer; font-weight: bold; }
                .btn-imprimir:hover { background: #005a9e; }
                .encabezado { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 3px solid #1a1a1a; padding-bottom: 20px; margin-bottom: 25px; }
                .marca h1 { font-size: 32px; color: #0a0a0a; text-transform: uppercase; letter-spacing: 1px; }
                .marca p { color: #555; font-size: 14px; margin-top: 4px; }
                .marca .institucion { color: #888; font-size: 12px; margin-top: 2px; }
                .comprobante-info { text-align: right; }
                .comprobante-info h2 { font-size: 20px; color: #107c41; margin-bottom: 6px; }
                .comprobante-info p { font-size: 13px; color: #555; }
                .datos-venta { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 15px 20px; margin-bottom: 25px; display: flex; justify-content: space-between; font-size: 14px; }
                table { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
                th { background-color: #1a1a1a; color: white; padding: 12px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; }
                .caja-total { display: flex; justify-content: flex-end; margin-bottom: 30px; }
                .total-card { background: #f0fdf4; border: 2px solid #107c41; border-radius: 8px; padding: 15px 25px; text-align: right; }
                .total-card span { font-size: 14px; color: #555; text-transform: uppercase; }
                .total-card h3 { font-size: 28px; color: #107c41; margin-top: 5px; }
                .condiciones { border-top: 1px dashed #ccc; padding-top: 15px; font-size: 12px; color: #777; line-height: 1.6; }
                @media print {
                    .barra-acciones { display: none; }
                    body { padding: 0; }
                }
            </style>
        </head>
        <body>
            <div class="contenedor">
                <div class="barra-acciones">
                    <button class="btn-imprimir" onclick="window.print()">Guardar como PDF / Imprimir</button>
                </div>
                <div class="encabezado">
                    <div class="marca">
                        <h1>Bunker PC</h1>
                        <p>Expertos en ensamblaje y asesoría tecnológica</p>
                        <p class="institucion">Centro Educativo San Martín de Porres</p>
                    </div>
                    <div class="comprobante-info">
                        <h2>NOTA DE VENTA</h2>
                        <p><strong>N°:</strong> ${numComprobante}</p>
                        <p><strong>Fecha:</strong> ${fechaHoy}</p>
                    </div>
                </div>
                <div class="datos-venta">
                    <div>
                        <strong>Concepto:</strong> Ensamblaje de PC Personalizada<br>
                        <strong>Asistente:</strong> Configurador Inteligente Bunker PC<br>
                        <strong>Perfil Energético:</strong> Consumo estimado ~${datosPot.consumoTotal}W (Sugerido ≥ ${datosPot.potenciaMinima}W)
                    </div>
                    <div style="text-align: right;">
                        <strong>Garantía:</strong> 1 Año (Hardware y Ensamblaje)<br>
                        <strong>Fuente:</strong> ${psuComp ? `${psuComp.marca} ${psuComp.modelo} (${psuComp.watts})` : 'A definir'}<br>
                        <strong>Nivel Gaming:</strong> ${predFps.tier.nombre.split('-')[0].trim()}
                    </div>
                </div>

                <!-- SECCIÓN BENCHMARK GAMING EN EL PDF -->
                <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px 20px; margin-bottom: 25px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
                        <div>
                            <h3 style="font-size: 17px; color: #0f172a; margin-bottom: 2px;">🎮 Predicción de Rendimiento Gaming (FPS Estimados)</h3>
                            <p style="font-size: 12px; color: #64748b;">Rendimiento estimado según tu Procesador, Tarjeta Gráfica y Memoria RAM</p>
                        </div>
                        <div style="background: #0f172a; color: #38bdf8; padding: 6px 12px; border-radius: 6px; font-weight: bold; font-size: 12px;">
                            ${predFps.tier.nombre}
                        </div>
                    </div>
                    <p style="font-size: 12px; color: #475569; margin-bottom: 12px;"><strong>Monitor sugerido:</strong> ${predFps.tier.monitor}</p>
                    <table style="width: 100%; border-collapse: collapse; font-size: 12px; margin-bottom: 0;">
                        <thead>
                            <tr style="background: #1e293b; color: #ffffff;">
                                <th style="padding: 8px; text-align: left;">Juego</th>
                                <th style="padding: 8px; text-align: left;">Calidad Gráfica</th>
                                <th style="padding: 8px; text-align: center; color: #38bdf8;">1080p (Full HD)</th>
                                <th style="padding: 8px; text-align: center; color: #22c55e;">2K (QHD 1440p)</th>
                                <th style="padding: 8px; text-align: center; color: #a855f7;">4K (UHD 2160p)</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${predFps.juegos.map(j => `
                                <tr style="border-bottom: 1px solid #e2e8f0;">
                                    <td style="padding: 7px 8px; font-weight: 600; color: #1e293b;">${j.nombre}</td>
                                    <td style="padding: 7px 8px; color: #64748b;">${j.preset}</td>
                                    <td style="padding: 7px 8px; text-align: center; font-weight: bold; color: #0284c7;">${j.fps1080p} FPS</td>
                                    <td style="padding: 7px 8px; text-align: center; font-weight: bold; color: #16a34a;">${j.fps2k} FPS</td>
                                    <td style="padding: 7px 8px; text-align: center; font-weight: bold; color: #9333ea;">${j.fps4k} FPS</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <table style="margin-bottom: 25px;">
                    <thead>
                        <tr>
                            <th style="width: 8%; text-align: center;">N°</th>
                            <th style="width: 27%; text-align: left;">Categoría</th>
                            <th style="width: 47%; text-align: left;">Componente / Descripción</th>
                            <th style="width: 18%; text-align: right;">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filasHtml}
                    </tbody>
                </table>
                <div class="caja-total">
                    <div class="total-card">
                        <span>Total Estimado a Pagar</span>
                        <h3>$${total} USD</h3>
                    </div>
                </div>
                <div class="condiciones">
                    <p>• Esta nota de venta refleja el desglose exacto de los componentes seleccionados para tu computadora personalizada.</p>
                    <p>• Todos los componentes han sido validados por nuestro algoritmo de compatibilidad técnica.</p>
                    <p>• Gracias por elegir a <strong>Bunker PC</strong>.</p>
                </div>
            </div>
        </body>
        </html>
    `);
    ventana.document.close();
}

// Función para regresar al menú de bienvenida inicial desde el ensamblaje
function volverAlInicioDesdeEnsamblaje() {
    // 1. Ocultar paneles del ensamblador
    panelAsistente.style.display = 'none';
    panelResumenDerecho.style.display = 'none';
    if (contenedorCalculoFuente) contenedorCalculoFuente.style.display = 'none';
    if (resumenPotenciaContenedor) {
        resumenPotenciaContenedor.style.display = 'none';
        resumenPotenciaContenedor.innerHTML = '';
    }

    // 2. Limpiar la configuración actual para que si vuelve a pulsar "Ensamblar PC", empiece limpia
    ordenPasos.forEach(p => pcArmada[p.id] = null);
    pasoActual = 0;
    actualizarCalculadora();

    // 3. Restaurar visibilidad y estados normales del asistente
    buscadorTarjetas.style.display = 'block';
    btnSiguiente.style.display = 'block';
    btnConfirmar.disabled = true;
    btnConfirmar.textContent = 'Confirmar Ensamblaje';
    btnConfirmar.style = '';

    // 4. Limpiar imagen en el visualizador lateral
    imagenComponente.src = '';
    imagenComponente.style.display = 'none';
    textoVisualizador.style.display = 'block';
    textoVisualizador.textContent = 'Selecciona un componente para ver su imagen';

    // 5. Cargar el paso 1
    cargarPaso();

    // 6. Mostrar el menú de bienvenida inicial
    mostrarConAnimacion(pantallaBienvenida);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Función para mostrar la pantalla final
function finalizarEnsamblaje() {
    tituloPaso.textContent = "¡PC Completada - Nota de Venta!";
    buscadorTarjetas.style.display = 'none';
    btnSiguiente.style.display = 'none';
    btnOmitir.style.display = 'none';
    btnAtras.style.display = 'block'; // Permitir regresar desde la pantalla final
    if (contenedorCalculoFuente) contenedorCalculoFuente.style.display = 'none';

    btnConfirmar.disabled = false;
    btnConfirmar.textContent = 'Descargar Nota de Venta (Excel)';
    btnConfirmar.style.backgroundColor = '#107c41';
    btnConfirmar.style.color = '#fff';
    btnConfirmar.style.boxShadow = '0 0 20px rgba(16, 124, 65, 0.7)';

    const { items, total } = obtenerResumenItems();
    const datosPot = calcularConsumoEstimadoPc();
    const psuComp = pcArmada.fuente ? mapComponentes.get(pcArmada.fuente) : null;
    const psuWatts = psuComp ? (parseInt(psuComp.watts) || 0) : 0;
    const esOptima = psuWatts >= datosPot.potenciaMinima;

    let filasHtml = items.map(it => `
        <tr style="border-bottom: 1px solid #222;">
            <td style="padding: 10px; color: #888; text-align: center;">${it.n}</td>
            <td style="padding: 10px; color: #4da8da; font-weight: bold;">${it.categoria}</td>
            <td style="padding: 10px; color: #eee;">${it.producto}</td>
            <td style="padding: 10px; text-align: right; color: #00ff00; font-weight: bold;">$${it.precio}</td>
        </tr>
    `).join('');

    contenedorTarjetas.innerHTML = `
        <div class="nota-venta-final" style="grid-column: 1 / -1; width: 100%; background: #0d0d0d; border: 2px solid #222; border-radius: 14px; padding: 35px 30px; box-shadow: 0 0 25px rgba(0,0,0,0.85);">
            <div style="text-align: center; margin-bottom: 25px;">
                <h2 style="color: #00ff88; margin: 12px 0; font-size: 2.2rem; font-weight: 800;">¡Ensamblaje Completado con Éxito!</h2>
                <p style="color: #bbb; font-size: 1.2rem;">Hemos generado tu <strong>Nota de Venta</strong> detallada con todos los productos, balance de potencia y precios seleccionados.</p>
            </div>

            <div style="background: rgba(16, 24, 38, 0.75); border: 1px solid #293d56; border-radius: 12px; padding: 18px 24px; margin-bottom: 25px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; text-align: center;">
                <div>
                    <span style="color: #8892b0; font-size: 0.85rem; text-transform: uppercase; font-weight: bold; display: block;">Consumo Estimado (100% Carga)</span>
                    <strong style="color: #00ff88; font-size: 1.6rem; display: block; margin-top: 4px;">~${datosPot.consumoTotal}W</strong>
                    <span style="color: #888; font-size: 0.8rem;">CPU, GPU, Cooler y Sistema</span>
                </div>
                <div>
                    <span style="color: #8892b0; font-size: 0.85rem; text-transform: uppercase; font-weight: bold; display: block;">Potencia Mínima Sugerida</span>
                    <strong style="color: #4da8da; font-size: 1.6rem; display: block; margin-top: 4px;">≥ ${datosPot.potenciaMinima}W</strong>
                    <span style="color: #888; font-size: 0.8rem;">+30% Margen de Seguridad</span>
                </div>
                <div>
                    <span style="color: #8892b0; font-size: 0.85rem; text-transform: uppercase; font-weight: bold; display: block;">Fuente Instalada</span>
                    <strong style="color: ${esOptima ? '#00ff88' : '#ffaa00'}; font-size: 1.6rem; display: block; margin-top: 4px;">${psuComp ? `${psuComp.watts}` : 'N/A'}</strong>
                    <span style="color: ${esOptima ? '#00ff88' : '#ffaa00'}; font-size: 0.82rem; font-weight: bold;">${esOptima ? '✔ Potencia Óptima' : '⚠ Potencia Ajustada'}</span>
                </div>
            </div>

            <!-- MÓDULO INTERACTIVO DE PREDICCIÓN DE RENDIMIENTO GAMING (1080p, 2K y 4K) -->
            ${generarHtmlSeccionPrediccionFps()}

            <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 30px; flex-wrap: wrap;">
                <button id="btn-exportar-excel-final" class="btn-nota-venta" style="background: #107c41; color: white; padding: 16px 26px; border: none; border-radius: 10px; font-weight: bold; font-size: 1.12rem; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: 0.3s; box-shadow: 0 4px 15px rgba(16, 124, 65, 0.4);">
                    📊 Descargar en Excel (.csv)
                </button>
                <button id="btn-exportar-pdf-final" class="btn-nota-venta" style="background: #0078d4; color: white; padding: 16px 26px; border: none; border-radius: 10px; font-weight: bold; font-size: 1.12rem; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: 0.3s; box-shadow: 0 4px 15px rgba(0, 120, 212, 0.4);">
                    🖨️ Guardar como PDF / Imprimir
                </button>
                <button id="btn-volver-inicio-final" class="btn-nota-venta" style="background: #1a222d; color: #4da8da; padding: 16px 26px; border: 2px solid #4da8da; border-radius: 10px; font-weight: bold; font-size: 1.12rem; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: 0.3s; box-shadow: 0 4px 15px rgba(77, 168, 218, 0.35);">
                    🏠 Volver al Menú de Inicio
                </button>
            </div>

            <div style="overflow-x: auto; background: #000; border-radius: 10px; border: 1px solid #222; margin-bottom: 25px;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 1.05rem;">
                    <thead>
                        <tr style="background: #161616; border-bottom: 2px solid #333; color: #fff;">
                            <th style="padding: 16px; width: 6%; text-align: center;">N°</th>
                            <th style="padding: 16px; width: 28%;">Categoría</th>
                            <th style="padding: 16px; width: 48%;">Producto</th>
                            <th style="padding: 16px; width: 18%; text-align: right;">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filasHtml}
                    </tbody>
                    <tfoot>
                        <tr style="background: #161616; border-top: 2px solid #4da8da;">
                            <td colspan="3" style="padding: 18px 16px; font-weight: bold; text-align: right; color: #fff; font-size: 1.25rem;">TOTAL ESTIMADO:</td>
                            <td style="padding: 18px 16px; font-weight: bold; text-align: right; color: #00ff88; font-size: 1.5rem;">$${total}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <p style="text-align: center; color: #888; font-size: 1rem; margin-top: 15px;">
                Puedes descargar el archivo de Excel o imprimir tu comprobante en PDF con los botones superiores.
            </p>

            <div style="margin-top: 35px; padding-top: 28px; border-top: 1px solid #222; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 14px;">
                <h3 style="color: #ffffff; font-size: 1.45rem; font-weight: 700; margin: 0;">¿Qué deseas hacer a continuación?</h3>
                <p style="color: #aaa; font-size: 1.1rem; margin: 0; max-width: 680px; line-height: 1.5;">
                    Regresa al menú de bienvenida para elegir si deseas <strong>ensamblar otra PC</strong> desde cero, explorar nuestras <strong>PCs pre-ensambladas</strong> o consultar las <strong>laptops</strong>.
                </p>
                <button id="btn-volver-inicio-bottom" style="background: linear-gradient(135deg, #102438 0%, #1f4260 100%); color: #ffffff; border: 2px solid #4da8da; border-radius: 12px; padding: 18px 36px; font-size: 1.25rem; font-weight: 800; cursor: pointer; transition: 0.3s; box-shadow: 0 0 25px rgba(77, 168, 218, 0.45); display: inline-flex; align-items: center; gap: 12px; margin-top: 6px;">
                    <span style="font-size: 1.5rem;">🏠</span> Volver al Menú Principal (Armar otra, Pre-ensambladas o Laptops)
                </button>
            </div>
        </div>
    `;

    // Asignar eventos de clic a los botones de exportación y retorno
    document.getElementById('btn-exportar-excel-final').addEventListener('click', exportarExcelNotaVenta);
    document.getElementById('btn-exportar-pdf-final').addEventListener('click', exportarPDFNotaVenta);
    document.getElementById('btn-volver-inicio-final').addEventListener('click', volverAlInicioDesdeEnsamblaje);
    document.getElementById('btn-volver-inicio-bottom').addEventListener('click', volverAlInicioDesdeEnsamblaje);

    // Inicializar interacción y filtros del módulo de FPS
    vincularEventosPrediccionFps();
}

// 6. EVENTOS: BOTONES DE NAVEGACIÓN
btnSiguiente.addEventListener('click', () => {
    const paso = ordenPasos[pasoActual];
    pcArmada[paso.id] = idSeleccionadoTemporal; // Guardamos lo elegido
    actualizarCalculadora();
    pasoActual++;

    if (pasoActual < ordenPasos.length) {
        cargarPaso();
    } else {
        finalizarEnsamblaje();
    }
});

btnOmitir.addEventListener('click', () => {
    const paso = ordenPasos[pasoActual];
    if (paso.id === 'gpu') {
        pcArmada.gpu = 'gpu_ninguna'; // Guardar explícitamente sin tarjeta gráfica
    } else {
        pcArmada[paso.id] = null; // Guardamos "nada" (saltó el paso)
    }
    actualizarCalculadora();
    pasoActual++;

    if (pasoActual < ordenPasos.length) {
        cargarPaso();
    } else {
        finalizarEnsamblaje();
    }
});

btnAtras.addEventListener('click', () => {
    if (pasoActual > 0) {
        pasoActual--;

        // Restaurar visibilidad de controles por si estábamos en la pantalla final
        buscadorTarjetas.style.display = 'block';
        btnSiguiente.style.display = 'block';
        btnConfirmar.disabled = true;
        btnConfirmar.textContent = 'Confirmar Ensamblaje';
        btnConfirmar.style = '';

        // Limpiar la selección del paso actual al que volvemos
        const paso = ordenPasos[pasoActual];
        pcArmada[paso.id] = null;
        actualizarCalculadora();

        cargarPaso();
    }
});

btnReiniciar.addEventListener('click', () => {
    // 1. Limpiar toda la configuración
    ordenPasos.forEach(p => pcArmada[p.id] = null);
    pasoActual = 0;
    actualizarCalculadora();
    if (contenedorCalculoFuente) contenedorCalculoFuente.style.display = 'none';
    if (resumenPotenciaContenedor) {
        resumenPotenciaContenedor.style.display = 'none';
        resumenPotenciaContenedor.innerHTML = '';
    }

    // 2. Restaurar interfaz
    buscadorTarjetas.style.display = 'block';
    btnSiguiente.style.display = 'block';
    btnConfirmar.disabled = true;
    btnConfirmar.textContent = 'Confirmar Ensamblaje';
    btnConfirmar.style = ''; // Limpia el verde de la pantalla final

    // 3. Limpiar imagen
    imagenComponente.src = '';
    imagenComponente.style.display = 'none';
    textoVisualizador.style.display = 'block';
    textoVisualizador.textContent = 'Selecciona un componente para ver su imagen';

    // 4. Volver a empezar
    cargarPaso();
});

// Evento para el botón Confirmar Ensamblaje (descarga la Nota de Venta en Excel)
btnConfirmar.addEventListener('click', () => {
    exportarExcelNotaVenta();
});



// 7. LA CALCULADORA REDISEÑADA
function actualizarCalculadora() {
    let total = 0;
    listaResumen.innerHTML = '';
    const fragment = document.createDocumentFragment();

    ordenPasos.forEach(paso => {
        const idElegido = pcArmada[paso.id];
        if (idElegido) {
            const componente = mapComponentes.get(idElegido);
            if (componente) {
                total += componente.precio;
                const li = document.createElement('li');
                let descComp = `${componente.marca} ${componente.modelo}`;
                if (componente.id === 'gpu_ninguna') {
                    descComp = 'Sin Tarjeta Gráfica (Gráficos Integrados)';
                } else if (paso.id === 'cpu') {
                    const info = obtenerInfoCpu(componente);
                    descComp = `${componente.marca} ${componente.modelo} (${info.textoCorto}, ${componente.socket})`;
                } else if (paso.id === 'placa') {
                    const info = obtenerInfoPlaca(componente);
                    descComp = `${componente.marca} ${componente.modelo} (${componente.socket}, ${componente.tipoRam}, ${info.formato})`;
                } else if (paso.id === 'cooler') {
                    descComp = `${componente.marca} ${componente.modelo} (${componente.tipo}, ${componente.tamano})`;
                } else if (paso.id === 'ram') {
                    const infoRam = obtenerInfoRam(componente);
                    descComp = `${componente.marca} ${componente.modelo} (${infoRam.frecuencia}, ${infoRam.textoModulos})`;
                } else if (paso.id === 'gpu') {
                    descComp = `${componente.marca} ${componente.modelo} (${componente.vram})`;
                } else if (paso.id === 'almacenamiento') {
                    const infoHdd = obtenerInfoAlmacenamiento(componente);
                    descComp = `${componente.marca} ${componente.modelo} (${infoHdd.capacidad}, ${infoHdd.velocidad})`;
                } else if (paso.id === 'fuente') {
                    descComp = `${componente.marca} ${componente.modelo} (${componente.watts}${componente.certificacion ? ' ' + componente.certificacion : ''})`;
                } else if (paso.id === 'gabinete') {
                    const infoCase = obtenerInfoGabinete(componente);
                    descComp = `${componente.marca} ${componente.modelo} (${infoCase.principal})`;
                } else if (['monitor', 'teclado', 'mouse', 'mousepad', 'auricular'].includes(paso.id)) {
                    const infoPerif = obtenerInfoPeriferico(componente);
                    descComp = `${componente.marca} ${componente.modelo} (${infoPerif.badge.replace(/^[^a-zA-Z0-9]+/, '').trim()})`;
                }
                li.textContent = `${descComp} - $${componente.precio}`;
                fragment.appendChild(li);
            }
        }
    });

    if (fragment.children.length === 0) {
        const placeholder = document.createElement('li');
        placeholder.className = 'placeholder';
        placeholder.textContent = 'Aún no has seleccionado componentes.';
        fragment.appendChild(placeholder);
    }

    listaResumen.appendChild(fragment);
    precioFinal.textContent = total;

    // Actualizar indicador de potencia en el panel de resumen lateral
    if (resumenPotenciaContenedor) {
        if (pcArmada.cpu) {
            const datos = calcularConsumoEstimadoPc();
            const psuElegida = pcArmada.fuente ? mapComponentes.get(pcArmada.fuente) : null;
            let infoFuenteHtml = '';

            if (psuElegida) {
                const wattsPsu = parseInt(psuElegida.watts) || 0;
                const esOptima = wattsPsu >= datos.potenciaMinima;
                infoFuenteHtml = `
                    <div style="width: 100%; border-top: 1px solid #1f2d3d; padding-top: 6px; margin-top: 6px; display: flex; justify-content: space-between; font-size: 0.82rem;">
                        <span>Fuente: <strong>${psuElegida.watts}</strong></span>
                        <span style="color: ${esOptima ? '#00ff88' : '#ffaa00'}; font-weight: bold;">
                            ${esOptima ? '✔ Potencia Óptima' : '⚠ Ajustada'}
                        </span>
                    </div>
                `;
            } else {
                infoFuenteHtml = `
                    <div style="width: 100%; border-top: 1px solid #1f2d3d; padding-top: 6px; margin-top: 6px; font-size: 0.82rem; color: #8892b0;">
                        Fuente sugerida: <strong style="color: #4da8da;">≥ ${datos.potenciaMinima}W</strong>
                    </div>
                `;
            }

            const predPreview = calcularPrediccionFps();
            const previewGamingHtml = (pcArmada.gpu || pcArmada.cpu) ? `
                <div class="resumen-fps-preview-box">
                    <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
                        <span>🎮 Rendimiento Gaming:</span>
                        <strong style="color: ${predPreview.tier.color}; font-size: 0.92rem;">${predPreview.tier.nombre.split('-')[0].trim()}</strong>
                    </div>
                    <span style="font-size: 0.76rem; color: #8892b0; width: 100%; display: block; margin-top: 2px;">
                        Predicción completa 1080p / 2K / 4K al finalizar
                    </span>
                </div>
            ` : '';

            resumenPotenciaContenedor.style.display = 'block';
            resumenPotenciaContenedor.innerHTML = `
                <div class="resumen-potencia-box">
                    <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
                        <span>⚡ Consumo Estimado:</span>
                        <strong style="font-size: 1.05rem; color: #00ff88;">~${datos.consumoTotal}W</strong>
                    </div>
                    ${infoFuenteHtml}
                </div>
                ${previewGamingHtml}
            `;
        } else {
            resumenPotenciaContenedor.style.display = 'none';
            resumenPotenciaContenedor.innerHTML = '';
        }
    }
}

// ¡ARRANCAR MOTOR!
cargarPaso();
