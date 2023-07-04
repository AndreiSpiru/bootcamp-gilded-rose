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
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        let change = 0
        if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.items[i].quality > 0) {
              change--     
          }
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
          if (this.items[i].name != 'Aged Brie') {
            if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].quality > 0) {
                  change--
              }
            } else {
              this.items[i].quality = 0
              change = 0
            }
          } else {
            change++
            
          }
        }
        this.items[i].sellIn = this.items[i].sellIn - 1;
        this.items[i].quality += change
        if(this.items[i].quality > 50) 
            this.items[i].quality = 50
        
    }
  }
    return this.items;
  }
}
