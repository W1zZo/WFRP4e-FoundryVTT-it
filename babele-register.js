Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'WFRP4e-FoundryVTT-it',
            lang: 'it',
            dir: 'compendium'
        });
        CONFIG.WFRP4E.conditions = {
            "in fiamme": "WFRP4E.ConditionName.Ablaze",
            "sanguinante": "WFRP4E.ConditionName.Bleeding",
            "accecato": "WFRP4E.ConditionName.Blinded",
            "atterrito": "WFRP4E.ConditionName.Broken",
            "assordato": "WFRP4E.ConditionName.Deafened",
            "afferrato": "WFRP4E.ConditionName.Entangled",
            "affaticato": "WFRP4E.ConditionName.Fatigued",
            "avvelenato": "WFRP4E.ConditionName.Poisoned",
            "prono": "WFRP4E.ConditionName.Prone",
            "stordito": "WFRP4E.ConditionName.Stunned",
            "sorpreso": "WFRP4E.ConditionName.Surprised",
            "privo di sensi": "WFRP4E.ConditionName.Unconscious",
            "ingaggiato": "WFRP4E.ConditionName.Grappling",
            "impaurito": "WFRP4E.ConditionName.Fear",
            "sconfitto": "WFRP4E.ConditionName.Defeated"
        }
    }
});
