import {
    ranges, 
    durations, 
    targets, 
    overcasts, 
    effects,
    classes, 
    locations,
    penalties,
    specials,
    lores,
    items,
    specs,
    damages
} from "./translations.js"

Hooks.on("init", () => {
    if(typeof Babele !== "undefined") {

        Babele.get().register({
            module: "WFRP4e-FoundryVTT-it",
            lang: "it",
            dir: "compendium"
        });

        Babele.get().registerConverters({
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
                return specials[special.toLowerCase()] 
                ? specials[special.toLowerCase()] 
                : special;
            },
            "lore": (lore) => {
                return lores[lore.toLowerCase()] 
                ? lores[lore.toLowerCase()] 
                : lore;
            },
            "items": (itemsArray) => {
                itemsArray.forEach(function(item, index) {
                    this[index].name = items[item.name] 
                    ? items[item.name] 
                    : item.name;
                    this[index].system.specification.value = specs[item.system.specification.value] 
                    ? specs[item.system.specification.value] 
                    : item.system.specification.value;
                }, itemsArray);
                return itemsArray;
            },
            "damage": (damage) => {
                return damages[damage.toLowerCase()] 
                ? damages[damage.toLowerCase()] 
                : damage;
            }
        });
    }
});
