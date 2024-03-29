const lores = {
    "beasts":"Bestie",
    "daemonology":"Demonologia",
    "death":"Morte",
    "fire":"Fuoco",
    "heavens":"Empireo",
    "hedgecraft":"Soglia",
    "life":"Vita",
    "light":"Luce",
    "metal":"Metallo",
    "necromancy":"Necromanzia",
    "petty":"Petty",
    "shadow":"Ombre",
    "witchcraft":"Stregoneria"
};

const ranges = {
    "1 yard":"1 metro",
    "6 yards":"6 metri",
    "fellowship bonus yards":"Bonus Socialità metri",
    "fellowship yards":"Socialità metri",
    "initiative bonus miles":"Bonus Iniziativa × 1,5km",
    "initiative yards":"Iniziativa metri",
    "intelligence bonus yards":"Bonus Intelligenza metri",
    "special":"Speciale",
    "touch":"Tocco",
    "willpower bonus miles":"Bonus Volontà × 1,5km",
    "willpower bonus yards":"Bonus Volontà metri",
    "willpower yards":"Volontà metri",
    "you":"Sé Stessi"
};

const durations = {
    "1 hour":"1 Ora",
    "1 round":"1 Round",
    "30 - TB days":"30 - BR giorni",
    "30 - TB":"30 - BR",
    "6 rounds":"6 Round",
    "1d10 days, or instantly if developed from another symptom.":"1d10 giorni, o istantanea se legata ad altri sintomi.",
    "agility bonus rounds":"Bonus Agilità Round",
    "days":"giorni",
    "fellowship bonus hours":"Bonus Socialità Ore",
    "fellowship bonus hours (special)":"Bonus Socialità Ore (Speciale)",
    "fellowship bonus minutes":"Bonus Socialità Minuti",
    "fellowship bonus rounds":"Bonus Socialità Round",
    "hours":"ore",
    "initiative bonus minutes":"Bonus Iniziativa Minuti",
    "initiative bonus rounds":"Bonus Iniziativa Round",
    "instant":"Istantanea",
    "intelligence bonus minutes":"Bonus Intelligenza Minuti",
    "intelligence minutes":"Intelligenza Minuti",
    "minutes":"minuti",
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
};

const targets = {
    "1 sailing vessel within line of sight":"1 nave in linea di vista",
    "8 yards":"8 metri",
    "a single location":"un singolo luogo",
    "fellowship bonus":"Bonus Socialità",
    "fellowship bonus allies":"Bonus Socialità alleati",
    "fellowship bonus yards":"Bonus Socialità metri",
    "fellowship yards":"Socialità metri",
    "initative bonus yards":"Bonus Iniziativa metri",
    "initiative bonus yards":"Bonus Iniziativa metri",
    "intelligence bonus allies":"Bonus Intelligenza alleati",
    "line of sight":"linea di vista",
    "see description":"Vedi Descrizione",
    "special":"Speciale",
    "willpower bonus yards":"Bonus Volontà metri",
    "willpower bonus yards across maximum":"Bonus Volontà metri di diametro massimo",
    "you":"Sé Stessi"
};

const overcasts = {
    "blinded":"Accecato",
    "corruption points":"Punti Corruzione",
    "critical wounds":"Ferite Critiche",
    "diseases cured":"Malattie Curate",
    "effects":"Effetti",
    "entangled":"Afferrato",
    "extra damage":"Danno Extra",
    "fear":"Paura",
    "fortune points":"Punti Fortuna",
    "locks":"Chiusure",
    "people":"Persone",
    "range (yds.)":"Gittata (m)",
    "reanimations":"Rianimazioni",
    "skeletons":"Scheletri",
    "targets":"Bersagli",
    "test penalty":"Penalità Prova",
    "yards":"Metri",
    "yards moved":"Metri Movimento",
    "yards pushed":"Metri Spinta",
    "yards traveled":"Metri Percorsi"
};

const effects = {
    "Accurate Shot": "Tiro Accurato",
    "Acquiescence": "Rassegnazione",
    "Aethyric Armour": "Armatura Aethyrica",
    "Aethyric Armour (Beasts)": "Armatura Aethyrica (Bestie)",
    "Aethyric Armour (Daemonology)": "Armatura Aethyrica (Demonologia)",
    "Aethyric Armour (Death)": "Armatura Aethyrica (Morte)",
    "Aethyric Armour (Fire)": "Armatura Aethyrica (Fuoco)",
    "Aethyric Armour (Heavens)": "Armatura Aethyrica (Empireo)",
    "Aethyric Armour (Life)": "Armatura Aethyrica (Vita)",
    "Aethyric Armour (Light)": "Armatura Aethyrica (Luce)",
    "Aethyric Armour (Metal)": "Armatura Aethyrica (Metallo)",
    "Aethyric Armour (Necromancy)": "Armatura Aethyrica (Necromanzia)",
    "Aethyric Armour (Shadow)": "Armatura Aethyrica (Ombre)",
    "Aethyric Attunement": "Sintonia Aethyrica",
    "Alley Cat": "Randagio",
    "Ambidextrous": "Ambidestro",
    "Amputated Arm": "Braccio Amputato",
    "Amputated Foot": "Piede Amputato",
    "Amputated Hand": "Mano Amputata",
    "Amputated Leg": "Gamba Amputata",
    "Amputated Nose": "Naso Amputato",
    "Amputated Toe": "Dita del Piede Amputate",
    "Anchorite's Endurance": "Resistenza dell'Anacoreta",
    "Arboreal": "Arboreo",
    "Argumentative": "Polemico",
    "Armour": "Corazzato",
    "Arterial Damage": "Arteria Danneggiata",
    "Attractive": "Attraente",
    "Awful Cravings": "Orride Voglie",
    "Bad Cut": "Brutto Taglio",
    "Badly Cut Toe": "Brutto Taglio al Dito",
    "Badly Twisted Knee": "Brutta Storta al Ginocchio",
    "Banishment": "Esilio",
    "Barkskin": "Pelle di Corteccia",
    "Beacon of Righteous Virtue": "Faro di Giusta Virtù",
    "Beast Tongue": "Parlata delle Bestie",
    "Beast Within": "Bestia Interiore",
    "Berserk Charge": "Carica del Berserker",
    "Big": "Grosso",
    "Blazing Sun": "Sole Splendente",
    "Bleeding": "Sanguinante",
    "Blessing of Battle": "Benedizione della Battaglia",
    "Blessing of Charisma": "Benedizione del Carisma",
    "Blessing of Courage": "Benedizione del Coraggio",
    "Blessing of Finesse": "Benedizione della Delicatezza",
    "Blessing of Fortune": "Benedizione della Fortuna",
    "Blessing of Grace": "Benedizione della Grazia",
    "Blessing of Hardiness": "Benedizione della Resistenza",
    "Blessing of Healing": "Benedizione della Guarigione",
    "Blessing of Might": "Benedizione della Forza",
    "Blessing of Protection": "Benedizione della Protezione",
    "Blessing of Recuperation": "Benedizione del Recupero",
    "Blessing of Righteousness": "Benedizione della Rettitudine",
    "Blessing of Savagery": "Benedizione della Ferocia",
    "Blessing of The Hunt": "Benedizione della Caccia",
    "Blessing of Wisdom": "Benedizione della Saggezza",
    "Blessing of Wit": "Benedizione dell'Astuzia",
    "Blight": "Rovina",
    "Blight (Moderate)": "Rovina (Moderata)",
    "Blinded": "Accecato",
    "Blinding Light": "Luce Accecante",
    "Bookish": "Topo di Biblioteca",
    "Bounce": "Balzo",
    "Broken": "Atterrito",
    "Broken Arm": "Braccio Rotto",
    "Broken Body": "Torso Rotto",
    "Broken Collar Bone": "Clavicola Spezzata",
    "Broken Head": "Testa Rotta",
    "Broken Jaw": "Mascella Rotta",
    "Broken Knee": "Ginocchio Rotto",
    "Broken Leg": "Gamba Rotta",
    "Broken Nose": "Naso Rotto",
    "Bruised Ribs": "Livido alle Costole",
    "Brutal Dismemberment": "Smembramento",
    "Brute": "Bruto",
    "Buboes": "Bubboni",
    "Careful Strike": "Colpo Misurato",
    "Caress of Laniph": "Carezza di Laniph",
    "Carouser": "Beone",
    "Carved Shin": "Tibia Intaccata",
    "Catfall": "Cadere in Piedi",
    "Cauterise": "Cauterizzare",
    "Cerulean Damage": "Danno Ceruleo",
    "Cerulean Shield": "Scudo Ceruleo",
    "Characteristic Bonus": "Bonus Caratteristica",
    "Choking Shadows": "Ombre Soffocanti",
    "Clean Break": "Frattura Netta",
    "Cleft Hand": "Mano Affettata",
    "Clever": "Intelligente",
    "Cold Blooded": "Sangue Freddo",
    "Combat Reflexes": "Riflessi da Combattimento",
    "Comet of Casandora": "Cometa di Cassandora",
    "Concussive Blow": "Concussione",
    "Concussive Blow - Fatigued Effect": "Concussione - Effetto Affaticato",
    "Constrictor": "Costrittore",
    "Construct": "Costrutto",
    "Convulsions": "Convulsioni",
    "Coolheaded": "Razionale",
    "Corpulent": "Corpulento",
    "Corrosive Blood": "Sangue Corrosivo",
    "Corrosive Blood (Beasts)": "Sangue Corrosivo (Bestie)",
    "Corrosive Blood (Daemonology)": "Sangue Corrosivo (Demonologia)",
    "Corrosive Blood (Death)": "Sangue Corrosivo (Morte)",
    "Corrosive Blood (Fire)": "Sangue Corrosivo (Fuoco)",
    "Corrosive Blood (Heavens)": "Sangue Corrosivo (Empireo)",
    "Corrosive Blood (Life)": "Sangue Corrosivo (Vita)",
    "Corrosive Blood (Light)": "Sangue Corrosivo (Luce)",
    "Corrosive Blood (Metal)": "Sangue Corrosivo (Metallo)",
    "Corrosive Blood (Necromancy)": "Sangue Corrosivo (Necromanzia)",
    "Corrosive Blood (Shadow)": "Sangue Corrosivo (Ombre)",
    "Coughs and Sneezes": "Tosse e Starnuti",
    "Cracked Ribs": "Costole Incrinate",
    "Crawling Skin": "Pelle d'Oca",
    "Criminal": "Criminale",
    "Crown of Flame": "Corona di Fiamme",
    "Crushed Elbow": "Gomito Distrutto",
    "Crushed Foot": "Piede Schiacciato",
    "Cunning": "Astuto",
    "Curse of Ill-Fortune": "Maledizione della Sfortuna",
    "Cut Tendon": "Tendini Recisi",
    "Damaged Artery": "Arteria Danneggiata",
    "Dazzle": "Abbagliare",
    "Deafened": "Assordato",
    "Decapitated": "Decapitazione",
    "Deep Cut": "Taglio Profondo",
    "Destroy Lesser Demon": "Distruggere Demone Minore",
    "Destroy Undead": "Distruggere Nonmorti",
    "Devastated Eye": "Occhio Devastato",
    "Disfiguring Blow": "Sfigurato",
    "Dislocated Knee": "Ginocchio Slogato",
    "Dislocated Shoulder": "Spalla Slogata",
    "Distended Digits": "Falangi Allungate",
    "Distracting": "Distrazione",
    "Distracting (Beasts)": "Distrazione (Bestie)",
    "Distracting (Daemonology)": "Distrazione (Demonologia)",
    "Distracting (Death)": "Distrazione (Morte)",
    "Distracting (Fire)": "Distrazione (Fuoco)",
    "Distracting (Heavens)": "Distrazione (Empireo)",
    "Distracting (Life)": "Distrazione (Vita)",
    "Distracting (Light)": "Distrazione (Luce)",
    "Distracting (Metal)": "Distrazione (Metallo)",
    "Distracting (Necromancy)": "Distrazione (Necromanzia)",
    "Distracting (Shadow)": "Distrazione (Ombre)",
    "Drain": "Risucchio",
    "Dramatic Injury": "Ferita Drammatica",
    "Earthblood": "Sangue della Terra",
    "Elite": "Elite",
    "Emaciated": "Emaciato",
    "Enormous Eye": "Occhio Enorme",
    "Entangle": "Aggrovigliare",
    "Entangle (Beasts)": "Aggrovigliare (Bestie)",
    "Entangle (Daemonology)": "Aggrovigliare (Demonologia)",
    "Entangle (Death)": "Aggrovigliare (Morte)",
    "Entangle (Fire)": "Aggrovigliare (Fuoco)",
    "Entangle (Heavens)": "Aggrovigliare (Empireo)",
    "Entangle (Life)": "Aggrovigliare (Vita)",
    "Entangle (Light)": "Aggrovigliare (Luce)",
    "Entangle (Metal)": "Aggrovigliare (Metallo)",
    "Entangle (Necromancy)": "Aggrovigliare (Necromanzia)",
    "Entangle (Shadow)": "Aggrovigliare (Ombre)",
    "Erratic Fantasist": "Fantasie Errabonde",
    "Extra Leg Joints": "Articolazione Aggiuntiva alle Gambe",
    "Fast": "Rapido",
    "Fatigued": "Affaticato",
    "Faxtoryll": "Fior di Bosco",
    "Fear": "Spaventoso",
    "Fearful Concern": "Terribili Timori",
    "Fearsome": "Temibile",
    "Fearsome (Beasts)": "Temibile (Bestie)",
    "Fearsome (Daemonology)": "Temibile (Demonologia)",
    "Fearsome (Death)": "Temibile (Morte)",
    "Fearsome (Fire)": "Temibile (Fuoco)",
    "Fearsome (Heavens)": "Temibile (Empireo)",
    "Fearsome (Life)": "Temibile (Vita)",
    "Fearsome (Light)": "Temibile (Luce)",
    "Fearsome (Metal)": "Temibile (Metallo)",
    "Fearsome (Necromancy)": "Temibile (Necromanzia)",
    "Fearsome (Shadow)": "Temibile (Ombre)",
    "Feather of Lead - Overburdened": "Piume di Piombo - Sovraccarico",
    "Feather of Lead - Unburdened": "Piume di Piombo - Non Sovraccarico",
    "Fever": "Febbre",
    "Fever (Severe)": "Febbre (Grave)",
    "Firewall": "Muro di Fuoco",
    "Fleet Footed": "Pié Veloce",
    "Fleshy Tentacle": "Tentacoli Carnosi",
    "Flight": "Volo",
    "Flight (Beasts)": "Volo (Bestie)",
    "Flight (Daemonology)": "Volo (Demonologia)",
    "Flight (Death)": "Volo (Morte)",
    "Flight (Fire)": "Volo (Fuoco)",
    "Flight (Heavens)": "Volo (Empireo)",
    "Flight (Life)": "Volo (Vita)",
    "Flight (Light)": "Volo (Luce)",
    "Flight (Metal)": "Volo (Metallo)",
    "Flight (Necromancy)": "Volo (Necromanzia)",
    "Flight (Shadow)": "Volo (Ombre)",
    "Flux (Moderate)": "Diarrea (Moderata)",
    "Flux (Severe)": "Diarrea (Grave)",
    "Fortune Point Restriction": "Restrizione Punti Fortuna",
    "Fractured Hip": "Anca Fratturata",
    "Fractured Jaw": "Mascella Fratturata",
    "Frenzy": "Furia",
    "Fury's Call": "Chiamata della Furia",
    "Gangrene": "Cancrena",
    "Gaping Arm Wound": "Ferita Aperta",
    "Gaping Chest Wound": "Ferita Aperta",
    "Ghostly Howl": "Urlo Spettrale",
    "Goodwill": "Benevolenza",
    "Gregarious": "Amichevole",
    "Gunner": "Fuciliere",
    "Gut Blow": "Colpo al Ventre",
    "Gut Wound": "Ferita all'Addome",
    "Hacked Leg": "Gamba Affettata",
    "Hardy": "Gagliardo",
    "Hateful Impulses": "Impulsi d'Odio",
    "Hatred": "Odio",
    "Healing Draught": "Infuso Guaritore",
    "Healing Light": "Luce Guaritrice",
    "Hollow Heart": "Cuore Gelido",
    "Holy Hatred": "Odio Sacro",
    "Hunter's Hide": "Pelle del Cacciatore",
    "Implacable": "Implacabile",
    "Incendiary": "Bomba Incendiaria",
    "Infected": "Infetto",
    "Infestation": "Infestazione",
    "Inhuman Beauty": "Bellezza Inumana",
    "Inspiring": "Ispirare",
    "Instinctive Diction": "Dizione Istintiva",
    "Internal Bleeding": "Ferita Interna",
    "Inverted Face": "Volto Rovesciato",
    "Iron Skin": "Pelle di Ferro",
    "Jealous Thoughts": "Gelosia",
    "Last Rites": "Estrema Unzione",
    "Leader": "Capo",
    "Leaping Stag": "Balzo del Cervo",
    "Lightning Reflexes": "Riflessi Fulminei",
    "Lingering (Average)": "Persistenza (Media)",
    "Lingering (Challenging)": "Persistenza (Impegnativa)",
    "Lingering (Easy)": "Persistenza (Facile)",
    "Lolling Tongue": "Lingua Pigra",
    "Lonely Spirit": "Spirito Melanconico",
    "Lore of Beasts": "Sapere delle Bestie",
    "Lore of Death": "Sapere della Morte",
    "Lore of Fire": "Sapere del Fuoco",
    "Lore of Heavens": "Sapere dell'Empireo",
    "Lore of Hedgecraft": "Sapere della Soglia",
    "Lore of Life": "Sapere della Vita",
    "Lore of Light": "Sapere della Luce",
    "Lore of Metal": "Sapere del Metallo",
    "Lore of Shadow": "Sapere delle Ombre",
    "Lore of Tzeentch": "Sapere di Tzeentch",
    "Lore of Witchcraft": "Sapere della Stregoneria",
    "Lost Both Ears": "Perdita di Entrambe le Orecchie",
    "Lost Both Eyes": "Perdita di Entrambi gli Occhi",
    "Lost Ear": "Perdita di un Orecchio",
    "Lost Eye": "Perdita di un Occhio",
    "Lost Fingers": "Perdita di Dita",
    "Lost Footing": "Perdita d'Equilibrio",
    "Low Blow!": "Colpo Basso!",
    "Magic Resistance": "Resistente alla Magia",
    "Mail Coif": "Camaglio",
    "Major Chest Wound": "Ferita Grave al Petto",
    "Major Ear Wound": "Ferita Grave all'Orecchio",
    "Malaise": "Malessere",
    "Mangled Ear": "Orecchio Spappolato",
    "Mangled Hand": "Mano Maciullata",
    "Mangled Jaw": "Mascella Distrutta",
    "Marksman": "Tiratore",
    "Master Orator": "Abile Oratore",
    "Mauled Bicep": "Bicipite Spappolato",
    "Menacing": "Minaccioso",
    "Mental Blocks": "Blocco Mentale",
    "Movement Bonus": "Bonus Movimento",
    "Movement Halved": "Movimento Dimezzato",
    "Movement Increase": "Movimento Aumentato",
    "Movement Penalty": "Penalità Movimento",
    "Nausea": "Nausea",
    "Nimble Fingered": "Dita Agili",
    "Nostrum": "Nostrum",
    "Opposed Bonus": "Bonus Contrapposto",
    "Painful Cut": "Taglio Doloroso",
    "Plate Helm": "Elmo Chiuso",
    "Plate Leggings": "Gambali",
    "Plate Open Helm": "Elmo Aperto",
    "Pox": "Vescicole",
    "Primary Target": "Bersaglio Primario",
    "Profane Urgency": "Bisogno Profano",
    "Prone": "Prono",
    "Pulled Back": "Strappo alla Schiena",
    "Pure Soul": "Anima Pura",
    "Purge": "Epurare",
    "Purple Pall of Shyish": "Feretro Purpureo di Shyish",
    "Ranald's Delight": "Delizia di Ranald",
    "Ranald's Grace": "Grazia di Ranald",
    "Rapid Reload": "Ricarica Rapida",
    "Regenerate": "Rigenerare",
    "Resolute": "Determinato",
    "Robust": "Robusto",
    "Ruptered Ligament": "Legamento Rotto",
    "Ruptured Tendon": "Tendine Lesionato",
    "Salwort": "Salicornia",
    "Savvy": "Buon Senso",
    "Screaming Skull": "Teschio Urlante",
    "Sea Legs": "Gambe da Marinaio",
    "Severed Finger": "Dito Tagliato",
    "Severed Foot": "Piede Amputato",
    "Shaky Morale": "Spirito Debole",
    "Sharp": "Acuto",
    "Shattered Pelvis": "Bacino Distrutto",
    "Shield of Myrmidia": "Scudo di Myrmidia",
    "Shieldsman": "Esperto con lo Scudo",
    "Shock": "Shock",
    "Short Legs": "Gambe Corte",
    "Slayer": "Sventratore",
    "Sliced Tendons": "Tendini Recisi",
    "Smashed Mouth": "Bocca Distrutta",
    "Smashed Rib Cage": "Cassa Toracica Frantumata",
    "Sniper": "Cecchino",
    "Soulfire": "Fuoco dell'Anima",
    "Speed of Thought": "Velocità di Pensiero",
    "Sprain": "Slogatura",
    "Sprained Ankle": "Caviglia Slogata",
    "Sprinter": "Velocista",
    "Steal Life": "Rubavita",
    "Stealthy": "Furtivo",
    "Stride": "Falcata",
    "Strike Mighty Blow": "Colpo Poderoso",
    "Strike to Injure": "Colpo Crudele",
    "Strong Back": "Spalle Forti",
    "Strong Legs": "Gambe Forti",
    "Stubbed Toe": "Dito Schiacciato",
    "Stunned": "Stordito",
    "Sturdy": "Vigoroso",
    "Suave": "Cortese",
    "Supportive": "Solidale",
    "Suspicious Mind": "Sospettoso",
    "Swarm": "Sciame",
    "Swarm Bonuses": "Bonus Sciame",
    "T'Essla's Arc": "Arco di T'Essla",
    "Tail Attack": "Coda",
    "Tanglefoot": "Avviluppare",
    "Terrifying": "Terrificante",
    "Terrifying (Beasts)": "Terrificante (Bestie)",
    "Terrifying (Daemonology)": "Terrificante (Demonologia)",
    "Terrifying (Death)": "Terrificante (Morte)",
    "Terrifying (Fire)": "Terrificante (Fuoco)",
    "Terrifying (Heavens)": "Terrificante (Empireo)",
    "Terrifying (Life)": "Terrificante (Vita)",
    "Terrifying (Light)": "Terrificante (Luce)",
    "Terrifying (Metal)": "Terrificante (Metallo)",
    "Terrifying (Necromancy)": "Terrificante (Necromanzia)",
    "Terrifying (Shadow)": "Terrificante (Ombre)",
    "Terror": "Terrificante",
    "The Amber Spear": "Lancia d'Ambra",
    "The First Portent of Amul": "Il Primo Portento di Amul",
    "The Second Portent of Amul": "Il Secondo Portento di Amul",
    "The Third Portent of Amul": "Il Terzo Portento di Amul",
    "Thigh Strike": "Colpo alla Coscia",
    "Thorny Scales": "Scaglie Cornee",
    "Thrill Hunter": "Ricerca del Brivido",
    "Tongue Attack (Range)": "Lingua Prensile (Gittata)",
    "Tooth and Claw": "Zanne e Artigli",
    "Torn Apart": "Smembrato",
    "Torn Arm Muscle": "Strappo Muscolare al Braccio",
    "Torn Body Muscle": "Strappo Muscolare al Torso",
    "Torn Head Muscle": "Strappo Muscolare alla Testa",
    "Torn Leg Muscle": "Strappo Muscolare alla Gamba",
    "Torn Muscles": "Muscoli Strappati",
    "Torn Thigh": "Coscia Lacerata",
    "Tortured Visions": "Visioni Terribili",
    "Totally Unhinged": "Follia Totale",
    "Tough": "Tosto",
    "Tracker": "Battitore",
    "Transmutation (AP Increase)": "Trasmutazione (Aumento PA)",
    "Transmutation of Chamon": "Trasmutazione di Chamon",
    "Treason of Tzeentch": "Tradimento di Tzeentch",
    "Trick Riding": "Volteggio in Sella",
    "Twin-tailed Comet": "Cometa a Due Code",
    "Twisted Ankle": "Storta alla Caviglia",
    "Twisted Back": "Torsione della Schiena",
    "Twisted Knee": "Storta al Ginocchio",
    "Twitch": "Scossone",
    "Unconscious": "Privo di Sensi",
    "Unending Malice": "Malizia Infinita",
    "Uneven Horns": "Corna Irregolari",
    "Unholy Rage": "Rabbia Sacrilega",
    "Venom": "Veleno (Difficoltà)",
    "Very Resilient": "Saldo",
    "Very Strong": "Forzuto",
    "Vitality Draught": "Infuso Vitale",
    "Vomit": "Vomito",
    "Warrior Born": "Guerriero Nato",
    "Web": "Ragnatela",
    "Weirdroot": "Radice Stramba",
    "Whiskered Snout": "Naso Peloso",
    "Winded": "Fiato Mozzo",
    "Wisdom of the Owl": "Saggezza del Gufo",
    "Worried Jitters": "Tremiti Nervosi",
    "Wounded": "Lesioni"
};

const symptoms = {
    "blight": "Consunzione",
    "buboes": "Bubboni",
    "convulsions": "Convulsioni",
    "coughsAndSneezes": "Tosse e Starnuti",
    "fever": "Febbre",
    "flux": "Diarrea",
    "gangrene": "Cancrena",
    "lingering": "Persistenza",
    "malaise": "Malessere",
    "nausea": "Nausea",
    "pox": "Vescicole",
    "wounded": "Lesioni",
    "delirium": "Delirium",
    "swelling": "Swelling"
};

const classes = {
    "academics":"Accademici",
    "burgher":"Gente di Città",
    "courtier":"Cortigiani",
    "peasants":"Gente di Campagna",
    "ranger":"Viandanti",
    "riverfolk":"Gente di Fiume",
    "rogues":"Furfanti",
    "warrior":"Guerrieri"
};

const locations = {
    "arm":"Braccio",
    "body":"Torso",
    "ear":"Orecchio",
    "eye":"Occhio",
    "finger":"Dito della Mano",
    "foot":"Piede",
    "hand":"Mano",
    "head":"Testa",
    "leg":"Gamba",
    "nose":"Naso",
    "teeth":"Denti",
    "toes":"Dita dei Piedi",
    "tongue":"Lingua"
};

const penalties = {
    "-10 to tests involving (specific) arm":"-10 alle Prove che coinvolgono il Braccio (specifico)",
    "-10 to tests involving (specific) leg":"-10 alle Prove che coinvolgono la Gamba (specifica)",
    "-20 fellowship, -30 to smell tests":"-20 alle Prove di Socialità, -30 alle Prove basate sull'olfatto",
    "-20 to mobility tests, cannot use dodge, half move":"-20 alle Prove che richiedono mobilità, non si può Schivare, Movimento dimezzato",
    "-20 to mobility tests, half move":"-20 alle Prove che richiedono mobilità, Movimento dimezzato",
    "-20 to tests involving (specific) arm":"-20 alle Prove che coinvolgono il Braccio (specifico)",
    "-20 to tests involving the body":"-20 alle Prove che coinvolgono il Torso",
    "-20 to tests involving the head":"-20 alle Prove che coinvolgono la Testa",
    "-20 when relying on two hands":"-20 alle Prove che richiedono entrambe le Mani",
    "-30 to all language tests.":"-30 alle Prove di Linguaggio.",
    "-30 to s and ag, half your move.":"-30 a Forza e Agilità, Movimento dimezzato.",
    "-5 fellowship":"-5 alle Prove di Socialità",
    "-5 using <specific hand>":"-5 alle Prove che coinvolgono la <mano specifica>",
    "fail all language tests":"Fallimento di tutte le Prove di Linguaggio"
};

const specials = {
    "an incendiary gives every affected target 1+sl ablaze conditions.":"La Bomba Incendiaria causa 1+LS Condizioni In Fiamme.",
    "blunderbusses are the only weapons listed that use the small shot or improvised shot ammunition. all other blackpowder and engineering weapons use bullets.":"Il trombone è l’unica arma che usa le Cariche a Pallini o Improvvisate. Tutte le altre Armi da Fuoco o Sperimentali impiegano le normali Pallottole.",
    "entangling weapons have no range bands, just the listed range.":"Le Armi Intralcianti non hanno categorie di gittata, solo quella indicata.",
    "lances count as improvised weapons if used on a round where you have not charged":"Le lance da cavaliere contano come Armi Improvvisate nei Round in cui il Personaggio non Carica."
};

const items = {
    "8x Tentacles":"8x Tentacoli",
    "Accurate Shot":"Tiro Accurato",
    "Acute Sense (Smell)":"Senso Acuto (Odore)",
    "Acute Sense (Taste)":"Senso Acuto (Sapore)",
    "Afraid":"Timoroso",
    "Amphibious":"Anfibio",
    "Animosity":"Animosità",
    "Any Creature Trait":"Tutti i Tratti delle Creature",
    "Arboreal":"Arboreo",
    "Armour":"Corazzato",
    "Arrow":"Frecce",
    "Art":"Arte",
    "Athletics":"Atletica",
    "Belligerent":"Bellicoso",
    "Bestial":"Bestiale",
    "Bite":"Morso",
    "Bounce":"Balzo",
    "Brass Penny":"Penny in Ottone",
    "Breath":"Soffio",
    "Breath (Acid)":"Soffio (Acido)",
    "Breath (Corrosion)":"Soffio (Corrosivo)",
    "Breath (Druken Vomit)":"Soffio (Vomito da Ubriaco)",
    "Breath (Fire)":"Soffio (Fuoco)",
    "Breath (Gas)":"Soffio (Gas)",
    "Breath (Various)":"Soffio (Vario)",
    "Bribery":"Corrompere",
    "Brute":"Bruto",
    "Champion":"Campione",
    "Charm":"Affascinare",
    "Charm Animal":"Domare Animali",
    "Chill Grasp":"Tocco Gelido",
    "Clever":"Intelligente",
    "Climb":"Arrampicarsi",
    "Cold Blooded":"Sangue Freddo",
    "Combat Aware":"Vigile",
    "Constrictor":"Costrittore",
    "Construct":"Costrutto",
    "Consume Alcohol":"Reggere Alcolici",
    "Cool":"Freddezza",
    "Corrosive Blood":"Sangue Corrosivo",
    "Corruption":"Corrotto",
    "Cunning":"Astuto",
    "Daemonic":"Demoniaco",
    "Dark Vision":"Vista Oscura",
    "Die Hard":"Duro da Uccidere",
    "Disease":"Malattia",
    "Distracting":"Distraente",
    "Dodge":"Schivare",
    "Drive":"Guidare Carri",
    "Endurance":"Tempra",
    "Entertain":"Intrattenere",
    "Ethereal":"Etereo",
    "Fang":"Zanna",
    "Fast":"Rapido",
    "Fast Shot":"Tiro Rapido",
    "Fear":"Spaventoso",
    "Flight":"Volante",
    "Frenzy":"Furia",
    "Fury":"Furore",
    "Gamble":"Giocare d'Azzardo",
    "Ghostly Howl":"Urlo Spettrale",
    "Gold Crown":"Corona d'Oro",
    "Gossip":"Pettegolezzo",
    "Haggle":"Mercanteggiare",
    "Hardy":"Gagliardo",
    "Hatred":"Odio",
    "Horns":"Corna",
    "Horns (Tusks)":"Corna (Zanne)",
    "Hungry":"Affamato",
    "Immunity":"Immunità",
    "Immunity to Psychology":"Immunità alla Psicologia",
    "Infected":"Infetto",
    "Infestation":"Infestazione",
    "Intimidate":"Intimidire",
    "Intuition":"Intuire",
    "Leadership":"Comandare",
    "Longbow":"Arco Lungo",
    "Magic Resistance":"Resistente alla Magia",
    "Magical":"Magico",
    "Melee":"Mischia",
    "Melee (Basic)":"Mischia (Base)",
    "Mental Corruption":"Corruzione Mentale",
    "Mutation":"Mutazione",
    "Navigation":"Orientarsi",
    "Night Vision":"Vista Notturna",
    "Outdoor Survival":"Sopravvivere",
    "Painless":"Senza Dolore",
    "Perception":"Percepire",
    "Petrifying Gaze":"Sguardo Pietrificante",
    "Prejudice":"Pregiudizio",
    "Ranged (150)":"Mira (150)",
    "Ranged (25)":"Mira (25)",
    "Ranged (50)":"Mira (50)",
    "Ranged (Bow)":"Mira (Archi)",
    "Regenerate":"Rigenerazione",
    "Ride":"Cavalcare",
    "Row":"Remare",
    "Silver Shilling":"Scellino d'Argento",
    "Size":"Taglia",
    "Skittish":"Ombroso",
    "Spellcaster":"Incantatore",
    "Stealth":"Nascondersi",
    "Stealthy":"Furtivo",
    "Stride":"Falcata",
    "Stupid":"Stupido",
    "Swamp-strider":"Palustre",
    "Swarm":"Sciame",
    "Sword":"Spada",
    "Tail Attack":"Coda",
    "Territorial":"Territoriale",
    "Terror":"Terrificante",
    "Tongue Attack (12)":"Lingua Prensile (12)",
    "Tough":"Tosto",
    "Tracker":"Segugio",
    "Trade (Cheesemonger)":"Mestiere (Pizzicagnolo)",
    "Trained":"Addestrato",
    "Undead":"Nonmorto",
    "Unstable":"Instabile",
    "Vampiric":"Vampiro",
    "Venom":"Veleno",
    "Vomit":"Vomito",
    "Wallcrawler":"Arrampicamuri",
    "Weapon":"Arma",
    "Web":"Ragnatela"
};

const specs = {
    "Any":"Qualsiasi",
    "Any Chaos":"Qualsiasi Chaos",
    "Any Lore":"Qualsiasi Sapere",
    "Average":"Media",
    "Bailiffs, Lawyers":"Balivi e Avvocati",
    "Beasts":"Bestie",
    "Broken":"Atterrito",
    "Challenging":"Impegnativa",
    "Chaos":"Caos",
    "Choose one":"Uno a Scelta",
    "Choose two":"Due a Scelta",
    "Daemonology":"Demonologia",
    "Death":"Morte",
    "Difficult":"Difficile",
    "Difficulty":"Difficoltà",
    "Drive":"Guidare Carri",
    "Dwarfs":"Nani",
    "Easy":"Facile",
    "Elves":"Elfi",
    "Enormous":"Enorme",
    "Entertain":"Intrattenere",
    "Everything":"Tutto",
    "Fetch":"Prendere",
    "Greenskins":"Pelleverde",
    "Guard":"Guardia",
    "Hard":"Ardua",
    "Home":"Casa",
    "Itching Pox":"Vaiolo Pruriginoso",
    "Large":"Grande",
    "Little":"Minuta",
    "Living":"Vivente",
    "Lore":"Sapere",
    "Magic":"Magico",
    "Major":"Maggiore",
    "Minor":"Minore",
    "Moderate":"Moderato",
    "Monstrous":"Mostruosa",
    "Mount":"Montatura",
    "Necromancy":"Necromanzia",
    "Nurgle":"Nurgle",
    "Packer's Pox":"Vaiolo del Conciatore",
    "Poison":"Veleni",
    "Predators":"Predatori",
    "Ratte Fever":"Febbre dei Ratti",
    "Shadow":"Ombra",
    "Sigmarites":"Sigmariti",
    "Slaanesh":"Slaanesh",
    "Small":"Piccola",
    "Target":"Bersaglio",
    "The Black Plague":"Peste Nera",
    "Thin People":"Persone Magre",
    "Tiny":"Minuscola",
    "Type":"Tipo",
    "Various":"Vario",
    "Venom":"Veleno",
    "Very Easy":"Molto Facile",
    "Very Hard":"Molto Difficile",
    "War":"Guerra",
    "Witch":"Strega",
    "the Rich, Beastmen":"Ricchi, e Uominibestia"
}

const damages = {
    "toughness bonus":"Bonus Resistenza",
    "willpower bonus":"Bonus Volontà"
};

export { 
    lores,
    ranges, 
    durations, 
    targets, 
    overcasts, 
    effects, 
    symptoms, 
    classes, 
    locations,
    penalties,
    specials,
    items,
    specs,
    damages,
};