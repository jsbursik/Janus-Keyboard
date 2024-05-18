# Janus Split Ergonomic Keyboard

## Janus

From [Wikipedia](https://en.wikipedia.org/wiki/Janus) on the god Janus: "In ancient Roman religion and myth, Janus (/ˈdʒeɪnəs/ JAY-nəs; Latin: Ianvs [ˈi̯aːnʊs]) is the god of beginnings, gates, transitions, time, duality, doorways, passages, frames, and endings. He is usually depicted as having two faces. The month of January is named for Janus (Ianuarius). According to ancient Roman farmers' almanacs, Juno was mistaken as the tutelary deity of the month of January, but Juno is the tutelary deity of the month of June."

## Motivation

I designed this keyboard after ordering and assembling a [Piantor](https://github.com/beekeeb/piantor) and not really liking the switches and keycaps. After realizing choc switches don't use the normal "+" stems I'm used to and seeing that the choc stems are a bit niche for finding keycaps - I started looking for other low-profile switch options that supported the more ubiquitous "+" stems.

Other issues involved key density, I didn't like how close together everything was. I stretched my fingers out, then closed them up and tried to get a shape that roughly followed the paths of my fingertips. I also added a few more keys than the Piantor has making this a 50 key (25 x 2) keyboard.

In comes the KS27 from Gateron. At one point I had owned a wireless keyboard that used the KS27 Linear Red switches and liked them for the most part, but these days I prefer a more tactile switch (break-over feel without the click). After finding some KS27 Browns on Amazon, I concluded they were what I was looking for. I found the hotswap sockets for the KS27 on Aliexpress and ordered a few hundred to be safe since shipping times were so long. Next I was on the hunt for blank keycaps and found that it was pretty easy to source some blank DSA profile caps from Amazon as well. I haven't used them on a full keyboard yet, but I believe it should be easier to feel out the different keys than the choc low-profile keycaps that came with the Piantor.

## Workflow

I used the web version of Ergogen [here](https://ergogen.cache.works) to get the general shape down until I was ready for all the footprinting and stuff that would have to happen locally. Once I was happy with the general shape, I went through the tedious task of editing footprints and converting them to the `.js` versions that Ergogen expects in the `footprints/` folder. I set up [npm-watch](https://www.npmjs.com/package/npm-watch) (`npm run watch`) to watch out for changes to the `config.yaml` file to automatically run Ergogen. Once everything was placed where I wanted it, I created a `kicad_project` folder separate from the output folder so any Ergogen runs down the road won't effect my work in Kicad (`npm run pcb-update` moves new PCB changes to the `kicad_project` folder). I then routed everything in KiCad version 8, making sure to weave the traces for the reversible nice!nano v2 footprint I made. After everything was routed and the DRC reported no errors, I exported the gerbers and sent them off to JLCPCB. The case was also generated using Ergogen as it's easy enough to do, still working on tweaking some clearances to make everything fit nicely.

## ZMK

This keyboard is meant to use the [nice!nano v2](https://nicekeyboards.com/nice-nano) with the [nice!view screen](https://nicekeyboards.com/nice-view) which means my firmware options were limited as this will be full wireless. The obvious choice feature-wise is ZMK. The documentation is a bit rough around the edges so I've had to do a decent amount of trial and error, as well as researching other ergo keyboard repos to see what they did. The firmware repo for this version of the Janus can be found [here](https://github.com/jsbursik/zmk-janus).

## Parts

| Part                                            | Quantity |
| ----------------------------------------------- | -------- |
| nice!nano v2                                    | 2        |
| sockets/pins for n!n v2                         | 2 sets   |
| nice!view                                       | 2        |
| 5 pin header for nice!view, should come with it | 2 sets   |
| 3.7v Lithium Battery                            | 2        |
| Gateron KS27 Hotswap Sockets                    | 50       |
| Gateron KS27 Low profile Switches               | 50       |
| 1N4148 Diodes (SMD or Thru-hole)                | 100      |
| M2 \* 4mm screws                                | 14       |
| M2 Threaded inserts 2 x 3 x 3.5mm               | 14       |

Other than that, you just need the PCBs and keycaps of your choice.

Links to where I bought my parts:

- [nice!nano v2](https://typeractive.xyz/products/nice-nano)
- [nice!view](https://typeractive.xyz/products/nice-view)
- [sockets/pins](https://typeractive.xyz/products/machine-sockets-and-pins)
- [lithium batteries](https://typeractive.xyz/products/lithium-battery-110mah)
- [Gateron low-profile hot-swap socket](https://www.gateron.com/products/gateron-low-profile-switch-hot-swap-pcb-socket?VariantsId=10234)
- [Gateron KS27 brown switched](https://www.amazon.com/Gateron-ks-27-Switches-Mechanical-Keyboards/dp/B09WYGKDVN/ref=sr_1_1?crid=244VA1GQ1XDVB&dib=eyJ2IjoiMSJ9.Ob91f_tJCQ9o8IUTjbX-EPJT6_KlCjXipGEMMSUyjHpA--qqqJuk777kxlV9F388b-TQxAeNr32AKiCJuMiz9ZiVn6s0R0tHP5klRWKVt7c.dPctAoT2Xv_lhWrQO5m59fR_4n9eiqEAyL8dTO3Mifs&dib_tag=se&keywords=gateron%2Bks27%2Bbrown&qid=1715271708&sprefix=gateron%2Bks27%2Bbrown%2Caps%2C136&sr=8-1&th=1)
- [1N4148WS Surface Mount Diodes x100](https://www.amazon.com/dp/B089KD46P6?psc=1&ref=ppx_yo2ov_dt_b_product_details)
- [M2 screws](https://www.amazon.com/dp/B0BX96SMW4?psc=1&ref=ppx_yo2ov_dt_b_product_details)
- [M2 threaded inserts](https://www.amazon.com/dp/B0B8GN63S2?psc=1&ref=ppx_yo2ov_dt_b_product_details)

## Keymap Layout

This is still very much a work in progress. I've been using the [keymap editor found here](https://nickcoutsos.github.io/keymap-editor/) to try and come up with a barebones setup.

** TODO: add images