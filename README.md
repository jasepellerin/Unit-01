# Unit01 Firmware & Keymap

![Unit 01 PCB](/ergogen/kicad/pcbs/render.png)

## Repo info

- Top level - ZMK config and related files
- "ergogen" - files related to the tool used to design the PCB and basic case elements
- "case" - case models and related files

## How to run the formatter

1. Commit or save your current work in case things get wild
1. Add line breaks between your rows to define the basic shape of your board
1. Steal the `format.ts` file and put it wherever you like
1. Install a typescript runner like [esrun](https://www.npmjs.com/package/@digitak/esrun) with `npm i -g @digitak/esrun`
1. Add your `filePath` and `desiredKeyCharacters` variables in `format.ts`
1. Run with esrun format.ts
1. Tweak the output to match your formatting needs
1. Run again after you change stuff :D

## ZMK Process

### Shield creation / basic setup

Started by creating `boards/shields` files manually based on the [card](https://github.com/benvallack/zmk-config-card/tree/master/config/boards/shields/card) and the [a_dux](https://github.com/zmkfirmware/zmk/tree/main/app/boards/shields/a_dux)

### Initial key mapping

Moved into using [keymapper](https://www.keymapper.dev/layout) to generate base key layout with layers

- Start with 12 columns and 4 rows
- Delete the keys we don't need (double click)
- Scooch the right side over a bit (15 or so)
- Backup often :D

### Complex key mapping

Moved back into the raw keymap file for more precise control over the keys
