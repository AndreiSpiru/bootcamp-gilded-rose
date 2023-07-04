export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      // If item is Sulfuras, nothing changes
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        let change = 0
        if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') { // Then regular item
          change--     
        } else {
            change++
            if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].sellIn <= 10) {
                change++
              }
              if (this.items[i].sellIn <= 5) {
                change++
              }
            }
      
        }
        
        if (this.items[i].sellIn <= 0) {
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            this.items[i].quality = 0
            change = 0
          } else {
            change *= 2
          }
        }
        this.items[i].sellIn -= 1;

        if (change < 0 && this.items[i].name.startsWith('Conjured')) {
          change *=  2
        } 
        this.items[i].quality += change

        // Quality must be between 0 and 50 if not Sulfuras
        this.items[i].quality = clamp(this.items[i].quality, 0 , 50)
    }
  }
  return this.items;
  }
}

function clamp(val, min, max) {
  return val > max ? max : val < min ? min : val;
}
