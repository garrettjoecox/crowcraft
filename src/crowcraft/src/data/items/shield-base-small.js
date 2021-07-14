import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { BendingFormSmallShield } from "./bending-form-small-shield";
import { CompositeWoodPlank } from "./composite-wood-plank";

export class ShieldBaseSmall extends Item {
    constructor() {
        super(
            "shield base: small",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new BendingFormSmallShield()),
            ],
            1
        );
    }
}
