import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { WeaponGrip } from "./weapon-grip";
import { CompositeWoodPlank } from "./composite-wood-plank";

export class LimbsStaff extends Item {
    constructor() {
        super(
            "limbs: staff",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new WeaponGrip()),
				new CraftingMaterial(1, new WeaponGrip()),
            ],
            1
        );
    }
}
