const CONFIG = {
    // URL do servidor PocketBase
    PB_URL: 'https://poketrcb.raiarruda.com.br/',

    // Configurações de Miniatura (Thumbnails)
    THUMB_SIZE: '400x300', // Largura x Altura
};

// Export para uso em módulos ES6 ou global no browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.APP_CONFIG = CONFIG;
}
