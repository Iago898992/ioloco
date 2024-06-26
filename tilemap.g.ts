// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "niveau1":
            case "niveau1":return tiles.createTilemap(hex`1900280000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101020000000000000000000000000000000000000000000606000200050000000000000000000000000000000000000606060602010101010000000000000000000000000000000006060606020000000001010201010101010101010101010101010101010101010101000002000000000000000000000000000000000000000000000300070000000000000000000000000000000000000000000001010101010100000000000000000000000000000000000000000000000001010101010101010000000000000000000201010000000000000000000000000101010101010101020002000000000000000000000000000000000000000000000200020000000000000000000000000000000000000000000004000405000000000000000000000000000000000000000000010101010100000000000000000000000001010101020101010100000000000000000101020101010101010000000200000000000000000003000000000200000000000000000002000000000000000001010000000007000000000000000000020000000000000000000101010101010100000000000000000200000000000000000000000000000101010102010101000007000000000000000000000000000000000000020001010101010102010100000000000000000000000000000200000000000000020000000000000000000000000000000002000000000000000400000000050000000000000000000000020000000000010101010101010101000000000000000000000401010102010101000000000000000000010102010101010101010000020000000000000000000000000000020000000000000000000200000000000000000000000300000700000000000000000002000000000000000000000101010101010100000000000000020000000000000000000000000000000101010101010101000700000000000000000000000000000000000000000001010101010101010201010000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000040000000500000000000000000000000000000000000101010101010101010000000000000001010101010101010101010101000000000001010101010101010101010000000000000000000000000000`, img`
.........................
.........................
.........................
.........................
.........................
................2222.....
.........................
.....................2222
.........................
22.2222222222222222222222
.........................
.........................
222222...................
.....22222222..........22
............22222222.....
.........................
.........................
....................22222
............2222.2222....
....22.222222............
.........................
22.......................
.2222222.................
......2222.222...........
............222222.22....
.........................
.........................
................222222222
...........222.222.......
..22.2222222.............
.........................
.........................
2222222..................
.....22222222............
...........22222222.22...
.........................
.........................
................222222222
.......2222222222222.....
22222222222..............
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.stairSouth,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.stairLadder,myTiles.tile8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
