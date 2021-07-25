///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Bricks } from "./bricks";
import { Frame } from "./frame";

export class WallSection extends Item {
    constructor() {
        super(
            "wall section",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(8, new Bricks()),
				new CraftingMaterial(2, new Frame()),
            ],
            1,
            ""
        );
    }
}
