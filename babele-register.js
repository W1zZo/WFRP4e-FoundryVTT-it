import { 
    types,
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
    specials
} from "./translations.js"

Hooks.on("init", () => {
    if(typeof Babele !== "undefined") {

        Babele.get().register({
            module: "WFRP4e-FoundryVTT-it",
            lang: "it",
            dir: "compendium"
        });

        Babele.get().registerConverters({
            // types can't be translated for now
            "type": (type) => {
                /*return types[type] 
                ? types[type] 
                : type;*/
                return type;
            },
            "lore": (lore) => {
                return lores[lore.toLowerCase()] 
                ? lores[lore.toLowerCase()] 
                : lore;
            },
            "duration": (duration) => {
                return durations[duration.toLowerCase()] 
                ? durations[duration.toLowerCase()] 
                : duration;
            },
            "range": (range) => {
                return ranges[range.toLowerCase()] 
                ? ranges[range.toLowerCase()] 
                : range;
            },
            "target": (target) => {
                return targets[target.toLowerCase()] 
                ? targets[target.toLowerCase()] 
                : target;
            },
            "location": (location) => {
                return locations[location.toLowerCase()] 
                ? locations[location.toLowerCase()] 
                : location;
            },
            "overcast": (overcast) => {
                return overcasts[overcast.toLowerCase()] 
                ? overcasts[overcast.toLowerCase()] 
                : overcast;
            },
            "class": (className) => {
                return classes[className.toLowerCase()] 
                ? classes[className.toLowerCase()] 
                : className;
            },
            "effects": (effectsArray) => {
                effectsArray.forEach(function(effect, index) {
                    this[index].label = effects[effect.label] 
                    ? effects[effect.label] 
                    : effect.label
                }, effectsArray);
                return effectsArray;
            },
            "penalty": (penalty) => {
                return penalties[penalty.toLowerCase()] 
                ? penalties[penalty.toLowerCase()] 
                : penalty;
            },
            "special": (special) => {
                return specials[special] 
                ? specials[special] 
                : special;
            }
        });
    }
});
