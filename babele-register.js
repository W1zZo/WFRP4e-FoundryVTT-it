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

var durations = {
    "1 hour":"1 Ora",
    "1 round":"1 Round",
    "6 rounds":"6 Round",
    "agility bonus rounds":"Bonus Agilità Round",
    "fellowship bonus hours":"Bonus Socialità Ore",
    "fellowship bonus hours (special)":"Bonus Socialità Ore (Speciale)",
    "fellowship bonus minutes":"Bonus Socialità Minuti",
    "fellowship bonus rounds":"Bonus Socialità Round",
    "initiative bonus minutes":"Bonus Iniziativa Minuti",
    "initiative bonus rounds":"Bonus Iniziativa Round",
    "instant":"Istantanea",
    "intelligence bonus minutes":"Bonus Intelligenza Minuti",
    "intelligence minutes":"Intelligenza Minuti",
    "special":"Speciale",
    "target's intelligence bonus rounds":"Bonus Intelligenza del Bersaglio Round",
    "toughness bonus hours":"Bonus Resistenza Ore",
    "toughness bonus rounds":"Bonus Resistenza Round",
    "until sunrise":"Fino all’alba successiva",
    "until the next sunrise":"Fino all’alba successiva",
    "willpower bonus days":"Bonus Volontà Giorni",
    "willpower bonus minutes":"Bonus Volontà Minuti",
    "willpower bonus rounds":"Bonus Volontà Round",
    "willpower bonus rounds+":"Bonus Volontà Round+",
    "willpower days":"Volontà Giorni",
    "willpower minutes":"Volontà Minuti"
}


Hooks.on("init", () => {
    if(typeof Babele !== "undefined") {

        Babele.get().register({
            module: "WFRP4e-FoundryVTT-it",
            lang: "it",
            dir: "compendium"
        });

        Babele.get().registerConverters({
            "range": (range) => {
				return ranges[range.toLowerCase()] ? ranges[range.toLowerCase()] : range;
			},
            "duration": (duration) => {
				return durations[duration.toLowerCase()] ? durations[duration.toLowerCase()] : duration;
			}
        });
    }
});
