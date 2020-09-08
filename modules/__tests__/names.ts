import { NamesFromFile } from '../namesFromFile';

describe('getNames', () => {
  it('gets name', async () => {
    const namesFromFile = new NamesFromFile();
    const names = await namesFromFile.getNames();
    expect(names).toStrictEqual([
      'Jorge',
      'Pancho',
      'Belén',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
    ]);
  });
});
