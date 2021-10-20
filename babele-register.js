var ranges = {
    "1 yard":"1 metro",
    "6 yards":"6 metri",
    "as weapon":"Come l’arma",
    "fellowship bonus yards":"Bonus Socialità metri",
    "fellowship yards":"Socialità metri",
    "half weapon":"Metà dell’arma",
    "initiative bonus miles":"Bonus Iniziativa × 1,5km",
    "initiative yards":"Iniziativa metri",
    "intelligence bonus yards":"Bonus Intelligenza metri",
    "sb":"BF",
    "sbx2":"BFx2",
    "sbx3":"BFx3",
    "special":"Speciale",
    "touch":"Tocco",
    "willpower bonus miles":"Bonus Volontà × 1,5km",
    "willpower bonus yards":"Bonus Volontà metri",
    "willpower yards":"Volontà metri",
    "you":"Sé Stessi"
};


Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {

        Babele.get().register({
            module: 'WFRP4e-FoundryVTT-it',
            lang: 'it',
            dir: 'compendium'
        });

        Babele.get().registerConverters({
            "range": (range) => {
				return ranges[range.toLowerCase()] ? ranges[range.toLowerCase()] : range;
			}
        });
    }
});
