import { 
    lores, ranges, durations, targets, overcasts, effects 
} from "./translations.js"

Hooks.on("init", () => {
    if(typeof Babele !== "undefined") {

        Babele.get().register({
            module: "WFRP4e-FoundryVTT-it",
            lang: "it",
            dir: "compendium"
        });

        Babele.get().registerConverters({
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
            "overcast": (overcast) => {
                return overcasts[overcast.toLowerCase()] 
                ? overcasts[overcast.toLowerCase()] 
                : overcast;
            },
            "effects": (effectsArray) => {
                effectsArray.forEach(function(effect, index) {
                    this[index].label = effects[effect.label] 
                    ? effects[effect.label] 
                    : effect.label
                }, effectsArray);
                return effectsArray;
            }
        });
    }
});
