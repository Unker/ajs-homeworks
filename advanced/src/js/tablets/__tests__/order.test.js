import orderByProps from "../order";

describe('orderByProps', () => {
    let obj = { name: 'мечник', health: 10, level: 2, defence: 40, attack: 80 };

    it('should return an array of objects with properties sorted according to the order', () => {
      const order = ['name', 'level', 'health'];
  
      const result = orderByProps(obj, order);
  
      expect(result).toEqual([
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'health', value: 10 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 }
      ]);
    });
  
    it('should return an array of objects with properties sorted in alphabetical order if not specified in the order array', () => {
      const order = [];
  
      const result = orderByProps(obj, order);
  
      expect(result).toEqual([
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
        { key: 'level', value: 2 },
        { key: 'name', value: 'мечник' }
      ]);
    });
  
    it('should handle an empty object and empty order array', () => {
      const obj = {};
      const order = [];
  
      const result = orderByProps(obj, order);
  
      expect(result).toEqual([]);
    });
  });