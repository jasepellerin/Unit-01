#!/usr/bin/env ts-node-script

import fs from "fs";

const bindingStartKey = "bindings = <";
const bindingEndKey = ">;";

/**
 * Change these values to match your needs
 */
const filePath = "./config/boards/shields/unit01/unit01.keymap";
const desiredKeyCharacters = 18;

try {
  const data = fs.readFileSync(filePath, "utf8") as string;

  const bindingMatches = [
    ...data.matchAll(new RegExp(`${bindingStartKey}`, "g")),
  ];

  const formatSpacesNeeded = bindingMatches.map((bindingMatch) => {
    const bindingKeyIndex = bindingMatch?.index;

    if (!bindingKeyIndex) {
      return [];
    }

    const bindingEndIndex =
      bindingKeyIndex + data.substring(bindingKeyIndex).indexOf(bindingEndKey);

    const bindingContent = data.substring(bindingKeyIndex, bindingEndIndex);

    // Find all the individual key mappings
    const keys = [...bindingContent.matchAll(/&[^&\n]+/g)];

    return keys.map((keyMatch) => {
      const keyContent = keyMatch[0];

      if (keyMatch.index && keyContent.length < desiredKeyCharacters) {
        const dataIndex = bindingKeyIndex + keyMatch.index;

        return {
          index: dataIndex,
          spacesNeeded: desiredKeyCharacters - keyContent.length,
        };
      } else {
        return {
          index: 0,
          spacesNeeded: 0,
        };
      }
    });
  });

  let newData = data;

  // Start at the end of the file, and work backwards
  formatSpacesNeeded.reverse().map((keySpacesNeededArray) => {
    keySpacesNeededArray.reverse().map(({ index, spacesNeeded }) => {
      if (spacesNeeded) {
        const spaces = " ".repeat(spacesNeeded);
        const startIndex = index + desiredKeyWidth - spacesNeeded - 1;

        console.log(`Adding ${spacesNeeded} spaces at ${startIndex}`);

        newData =
          newData.substring(0, startIndex) +
          spaces +
          newData.substring(startIndex);
      }
    });
  });

  fs.writeFileSync(filePath, newData);

  console.log("All good!");
} catch (err) {
  console.log("Oh no!");
  console.error(err);
}
