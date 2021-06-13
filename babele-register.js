Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'WFRP4e-FoundryVTT-it',
            lang: 'it',
            dir: 'compendium'
        });
    }
});
