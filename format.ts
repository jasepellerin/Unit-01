#!/usr/bin/env ts-node-script

const fs = require("fs");

const fileName = "./config/boards/shields/unit01/unit01.keymap";
const desiredSpacing = 17;

const bindingStartKey = "bindings = <";
const bindingEndKey = ">;";

try {
  // One `&` sign is in each match, so account for that
  const checkSpacing = desiredSpacing + 1;

  const data = fs.readFileSync(fileName, "utf8") as string;

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

      if (keyMatch.index && keyContent.length < checkSpacing) {
        const dataIndex = bindingKeyIndex + keyMatch.index;

        return {
          index: dataIndex,
          spacesNeeded: checkSpacing - keyContent.length,
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
        const startIndex = index + checkSpacing - spacesNeeded - 1;

        console.log(`Adding ${spacesNeeded} spaces at ${startIndex}`);

        newData =
          newData.substring(0, startIndex) +
          spaces +
          newData.substring(startIndex);
      }
    });
  });

  fs.writeFileSync(fileName, newData);

  console.log("All good!");
} catch (err) {
  console.log("Oh no!");
  console.error(err);
}
