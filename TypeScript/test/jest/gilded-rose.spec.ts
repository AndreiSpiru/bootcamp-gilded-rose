import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('sanity test', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  it('Regular item should decrease by 1 before SellIn', () => {
    const gildedRose = new GildedRose([new Item('foo', 7, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
  });

  it('Regular item should have SellIn decrease by 1', () => {
    const gildedRose = new GildedRose([new Item('foo', 7, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(6);
  });

  it('Quality should not go below 0', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it('Quality should decrease twice as fast after SellIn', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);
  });

  it('Aged Brie increases in quality', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 1, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(7);
  });  

  it('Aged Brie changes sell in', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 1, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(0);
  });  

  it('Aged Brie does not increase in quality past 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });  

  it('Sulfuras does not change quality', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });  

  it('Sulfuras does not change sell in', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(0);
  });  

  it('Backstage passes quality increases by 1 when sell in > 10', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 8)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
  });  

  it('Backstage passes quality increases by 2 when sell in <= 10', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 8)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(10);
  }); 

  it('Backstage passes quality increases by 3 when sell in <= 5', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 8)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  }); 

  it('Backstage passes quality decreases to 0 when sell in <= 0', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 8)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  }); 

  it('Backstage passes do not increase in quality past 50', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it('Multiple items have functionality', () => {
    const gildedRose = new GildedRose([new Item('foo', 7, 10), new Item('foo2', 8, 37)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
    expect(items[1].quality).toBe(36);
  });

  it('Aged Brie increases twice as fast after SellIn', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', -1, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
  });  
});
