import { Item, CraftingMaterial, Rarities, Vendors } from "models";
import { Gold } from "./gold";

export class BladeMoldGreatSword extends Item {
    constructor() {
        super(
            "blade mold: great sword",
            [Vendors.WeaponCrafting],
            [Rarities.Common],
            [
                new CraftingMaterial(100, new Gold()),
            ],
            1
        );
    }
}
