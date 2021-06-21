import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { MetalScales } from "./metal-scales";
import { LeatherPadding } from "./leather-padding";
import { EtherealDust } from "./ethereal-dust";

export class MailGloves extends Item {
    constructor() {
        super(
            "mail gloves",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalScales()),
				new CraftingMaterial(1, new MetalScales()),
				new CraftingMaterial(1, new LeatherPadding()),
				new CraftingMaterial(6, new EtherealDust()),
            ],
            1
        );
    }
}
    