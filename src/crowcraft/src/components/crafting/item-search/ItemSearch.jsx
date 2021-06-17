import "./ItemSearch.css";

import { CraftingMaterial } from "models";
import { RawMaterial } from "components/crafting/raw-materials";
import { items } from "data";
import { TextInput } from "components";
import { useState } from "react";
import { Sorting } from "utils";

export const ItemSearch = ({ onItemSelected }) => {
    const [allItems] = useState(
        items
            .map(item => new item())
            .filter(item => item.isCraftable)
            .sort(Sorting.ascending(item => item.name)
    ));

    const [keywords, setKeywords] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const filterItems = e => {
        const search = e.target.value;
        setKeywords(search.split(" ").filter(keyword => keyword.length > 0));
    };

    const hasKeywordMatch = item => {
        if (keywords.length === 0) {
            return true;
        }

        return keywords.some(keyword => item.name.includes(keyword));
    };

    const selectItem = item => {
        setSelectedItemId(item.id);
        onItemSelected(item.createNew());
    };

    return (
        <div>
            <div className="mb2 f3 fw5">Find an item</div>
            <div className="mb3">
                <TextInput id="item-meta" name="item-meta" placeholder="Filter items" onInputChanged={filterItems} />
            </div>
            <div className="flex">
                {allItems.filter(hasKeywordMatch).map(item => (
                    <div key={item.id} className="mr2">
                        <Item item={item} onItemSelected={selectItem} isSelected={item.id === selectedItemId} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const Item = ({ item, onItemSelected, isSelected }) => {
    const selectItem = () => {
        onItemSelected(item);
    };

    const selectionClassName = isSelected ? "selected" : "";

    return (
        <div className={`item ${selectionClassName} | mr2 pointer`} onClick={selectItem}>
            <RawMaterial rawMaterial={new CraftingMaterial(null, item)} />
        </div>
    );
};
