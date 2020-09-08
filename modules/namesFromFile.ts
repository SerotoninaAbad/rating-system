import Name from './names';
import path from 'path';
import fs from 'fs';

export class NamesFromFile implements Name {
  public async getNames(): Promise<string[]> {
    const candidatesDirectory = path.join(process.cwd(), 'files');
    const candidatesJson = await fs.promises.readFile(
      `${candidatesDirectory}/candidates.json`,
      'utf8'
    );
    const namesInArray = JSON.parse(candidatesJson).candidates;
    console.log(typeof namesInArray);
    return namesInArray;
  }
}
