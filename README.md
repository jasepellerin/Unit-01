# Unit-01 Firmware & Keymap

![Unit-01 PCB](/images/pcbRender.png)

![Unit-01 Caseless](/images/caseless.jpg)

![Unit-01 Complete](/images/casePair.jpg)

## What is this?

Unit-01 is the first keyboard I've designed and my first real foray into electronics as a whole. Unit-01 is a split, ergonomic, columnar, bluetooth, 32-key keyboard designed to be built using [nice!nano](https://nicekeyboards.com/nice-nano/) boards and Kailh Choc switches.

## Repo info

- Top level - ZMK config and related files
- "ergogen" - files related to the tool used to design the PCB and basic case elements
- "case" - case models and related files

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

## How to run the formatter

1. Commit or save your current work in case things get wild
1. Add line breaks between your rows to define the basic shape of your board
1. Steal the `format.ts` file and put it wherever you like
1. Install a typescript runner like [esrun](https://www.npmjs.com/package/@digitak/esrun) with `npm i -g @digitak/esrun`
1. Add your `filePath` and `desiredKeyCharacters` variables in `format.ts`
1. Run with esrun format.ts
1. Tweak the output to match your formatting needs
1. Run again after you change stuff :D

---

## Project log

### Initial Idea

I had been curious about split ergonomic keyboards for a few years when I saw a few of Ben Vallack's videos on small custom keyboards. [This one in particular](https://www.youtube.com/watch?v=UKfeJrRIcxw) sparked my interest in designing and building my own board. I asked loads of questions on various Discord servers along the way, and sincerely appreciate all the help I received from the community.

### Ideation

I did some research to learn about different switch options and elements I might want on my board. I started looking other people's builds, like the [Architeuthis dux](https://github.com/tapioki/cephalopoda/tree/main/Architeuthis%20dux) and the [card](https://github.com/benvallack/ergogen/blob/master/config.yaml). This helped me decide on the basic shape of the board and how many keys it would have.

### PCB Design (Ergogen)

I began by measuring the natural paths of my fingers on a site called [Ergopad](https://pashutk.ru/ergopad/). Then I plugged that info into [the unofficial Ergogen frontend](https://ergogen.cache.works/) and spent probably 25 hours learning the syntax and tweaking positions.

Then I started tweaking the exported file in Kicad. While adding my traces, I kept learning new things which led me back into Ergogen for another iteration cycle. Overall, this process probably took 15 more hours.

### Part Ordering

At this time, I had all the necessary files to start ordering parts. Here's the total cost of parts I ordered (a detailed breakdown is available by expanding the section below):

**Total part costs**

| Item        |   Price |
| :---------- | ------: |
| Subtotal    | $134.81 |
| S/H         |  $19.48 |
| Grand Total | $154.29 |

<details>
  <summary>Detailed cost breakdown</summary>

[Boardsource](https://boardsource.xyz/)

| Item                           | Price |
| :----------------------------- | ----: |
| 40x Kailh Choc hotswap sockets |    $6 |
| S/H                            |    $4 |
| Order total                    |   $10 |

[MKULTRA](https://mkultra.click/)

| Item                             |  Price |
| :------------------------------- | -----: |
| 40x Kailh Choc Switches (Silver) | $28.60 |
| White MBK Choc Keycaps (Alphas)  |    $15 |
| S/H                              |  $5.59 |
| Order total                      | $49.19 |

[Little Keyboards](https://www.littlekeyboards.com/)

| Item                                      |  Price |
| :---------------------------------------- | -----: |
| 2x nice!nano v2.0                         | $49.98 |
| 2x Battery Combo for nice!nano Controller | $23.98 |
| S/H                                       |  $4.83 |
| Total                                     | $78.79 |

[JLCPCB](https://jlcpcb.com/)

| Item          |  Price |
| :------------ | -----: |
| 5x Custom PCB |  $9.25 |
| S/H           |  $4.06 |
| Total         | $13.31 |

[LCSC](https://lcsc.com/) - Part of a larger order

| Item    | Price |
| :------ | ----: |
| Buttons |   ~$2 |
| S/H     |    ~1 |
| Total   |    $3 |

</details>

### Assembly

After I received all the parts, I spent ~4 hours soldering everything. This step took a while since this was the first time I've ever soldered anything. Overall, it was pretty straightforward and I could feel myself getting more comfortable as I went.

I then spent around 8 hours debugging and fixing mistakes before I finally had a working keyboard.

### Firmware (ZMK)

The next step was setting up the firmware using [ZMK](https://zmk.dev/docs/), which probably took around 4 hours to learn and customize. I expect spend even more time on this stage getting all the keys laid out just how I want them.

### Case Design (Fusion 360)

Once everything was working to my liking, I decided to design a case for the keyboard. I spent probably 5 hours designing the case and another 1-2 hours messing with the 3D printer and fitting everything together.

### Conclusion

Overall, this build took me around 60 hours to complete. I started out not knowing anything about keyboard building or PCB design, I didn't even know how to solder!

I'm extremely pleased with how the board has turned out and am excited to actually use it now that it's done :D
