import { IFile } from "../../interfaces/IFile.ts";

// TODO implements Created At as a Date

// Implementing the File Class
class File implements IFile {
  createdAt: string;
  name: string;
  content: string;

  constructor({
    createdAt,
    name,
    content,
  }: {
    createdAt: string;
    name: string;
    content: string;
  }) {
    this.createdAt = createdAt;
    this.name = name;
    this.content = content;
  }

  //TODO reviver function if Date implemented

  // Static method to convert Json object or string To a File Type
  static fromJSON(json: IFile | string): File {
    if (typeof json === "string") {
      return JSON.parse(json);
    }
    const file = Object.create(File.prototype);
    return Object.assign(file, json);
  }
}
