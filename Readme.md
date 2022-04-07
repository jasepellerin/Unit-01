# Unit01 Firmware & Keymap

## TODO

- Make releases show the generated firmware
- Combine repos

## Creation Process

Started by creating `boards/shields` files manually based on the [card](https://github.com/benvallack/zmk-config-card/tree/master/config/boards/shields/card) and the [a_dux](https://github.com/zmkfirmware/zmk/tree/main/app/boards/shields/a_dux)

Moved into using [keymapper](https://www.keymapper.dev/layout) to generate base key layout with layers

- Start with 12 columns and 4 rows
- Delete the keys we don't need (double click)
- Scooch the right side over a bit (15 or so)
- Backup often :D
