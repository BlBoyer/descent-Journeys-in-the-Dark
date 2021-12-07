import { map1 } from '../data/dungeonMaps/map1';
import { heroData } from '../data/heroData.js';
import { monsterData } from '../data/monsterData.js';


function TilesAndTokens({ chosenHero }) {
  let monsterArray = [];
  for (let key in map1.monsters) {
    monsterArray.push(map1.monsters[key])
  }
  // console.log(monsterArray)

  return (
    <div className='hidden'>
      {/* hero tokens */}
      <div>
        <img id='heroToken' src={heroData[chosenHero].token_path} alt={heroData[chosenHero].name} />
      </div >
      {/* dungeon floor tiles */}
      <div>
        <img id='mapTileToken' src={'images/map_tiles/floors/corridor_2x2.png'} alt={'map tile'} />
        <img id='marker' src={'images/map_tiles/marker.png'} alt={'target marker'} />
        <img id='rubble' src={'images/map_tiles/floors/rubble_1x1.png'} alt={'Rubble'} />
        <img id='pit' src={'images/map_tiles/floors/pit_1x1.png'} alt={'Pit'} />
        <img id='water' src={'images/map_tiles/floors/water_1x1.png'} alt={'Water'} />
      </div >
      <div>
        {/* monster tokens */}
        <img id='skeleton' src={'images/monster_token/skeleton.png'} alt={'Skeleton token'} />
        <img id='masterSkeleton' src={'images/monster_token/skeleton_master.png'} alt={'Master Skeleton token'} />
      </div>
      {/* items and icons */}
      <div>
        <img id='whiteGlyph' src={'images/map_tiles/item_icons/ancient glyph of teleportation white.jpg'} alt={'white glyph'} />
        <img id='redGlyph' src={'images/map_tiles/item_icons/ancient glyph of teleportation red.jpg'} alt={'red glyph'} />
        <img id='healthPotion' src={'images/items/shop/health_potion.png'} alt={'health potion'} />
        <img id='vitalityPotion' src={'images/items/shop/vitality_potion.png'} alt={'vitality potion'} />
        <img id='copperChest' src={'images/map_tiles/item_icons/chest_copper.png'} alt={'copper chest'} />
        <img id='silverChest' src={'images/map_tiles/item_icons/chest_silver.png'} alt={'silver chest'} />
        <img id='goldChest' src={'images/map_tiles/item_icons/chest_gold.png'} alt={'gold chest'} />
      </div >
      {/* town */}
      <div>
        <img id='town' src={'images/map_tiles/town.png'} alt={'town'} />
      </div>
      {/* doors */}
      <div>
        {/* horizontal */}
        <img id='normal_door' src={'images/map_tiles/doors/door_normal.png'} alt={'door'} />
        <img id='red_door' src={'images/map_tiles/doors/door_red.png'} alt={'door'} />
        <img id='yellow_door' src={'images/map_tiles/doors/door_yellow.png'} alt={'door'} />
        <img id='blue_door' src={'images/map_tiles/doors/door_blue.png'} alt={'door'} />
        {/* vertical */}
        <img id='normal_door_vert' src={'images/map_tiles/doors/door_normal_vert.png'} alt={'door'} />
        <img id='red_door_vert' src={'images/map_tiles/doors/door_red_vert.png'} alt={'door'} />
        <img id='yellow_door_vert' src={'images/map_tiles/doors/door_yellow_vert.png'} alt={'door'} />
        <img id='blue_door_vert' src={'images/map_tiles/doors/door_blue_vert.png'} alt={'door'} />
      </div>
      <div>
        {/* rune keys */}
        <img id='red_rune_key' src={'images/map_tiles/item_icons/red_rune.png'} alt={'Red Rune Key'} />
        <img id='yellow_rune_key' src={'images/map_tiles/item_icons/yellow_rune.png'} alt={'Yellow Rune Key'} />
        <img id='blue_rune_key' src={'images/map_tiles/item_icons/blue_rune.png'} alt={'Blue Rune Key'} />
      </div>
      <div>
        {/* gold pile*/}
        <img id='gold_pile' src={'images/map_tiles/item_icons/gold_pile.png'} alt={'Gold Pile'} />
      </div>
    </div>
  );
}

export default TilesAndTokens;
