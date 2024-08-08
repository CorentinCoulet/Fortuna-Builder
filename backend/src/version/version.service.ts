import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class VersionService {
  private versionFilePath = path.join(__dirname, 'latest_version.txt');

  getLatestVersion(): string {
    if (fs.existsSync(this.versionFilePath)) {
      return fs.readFileSync(this.versionFilePath, 'utf8').trim();
    }
    return '';
  }

  saveVersion(version: string) {
    fs.writeFileSync(this.versionFilePath, version, 'utf8');
  }
}
