import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { WeaponGrip } from "./weapon-grip";
import { WeaponPommel } from "./weapon-pommel";
import { WeaponCrossguard } from "./weapon-crossguard";

export class WeaponHilt extends Item {
    constructor() {
        super(
            "weapon hilt",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WeaponGrip()),
				new CraftingMaterial(1, new WeaponPommel()),
				new CraftingMaterial(1, new WeaponCrossguard()),
            ],
            1
        );
    }
}
