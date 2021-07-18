///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { GroundMineral } from "./ground-mineral";
import { Sulphur } from "./sulphur";

export class GroundSulphur extends GroundMineral {
    constructor() {
        super(
            "ground sulphur",
            [Professions.Alchemist],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new Sulphur()),
            ],
            1,
            "grind resource"
        );
    }
}
