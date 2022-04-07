# Unit01 Firmware & Keymap

## TODO

- Make releases show the generated firmware
- Combine repos

## Creation Process

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
