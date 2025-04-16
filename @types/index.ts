import { SanityAssetDocument, SanityImageAssetDocument } from "next-sanity";

export namespace SanityTypes {
  export interface Post {
    _id: string;
    _createdAt: Date;
    _updatedAt: Date;
    title: string;
    description: string;
    slug: {
      current: string;
    };
    image: SanityImageAssetDocument;
    content: any;
    author: Author<SanityAssetDocument | undefined>;
  }
  export interface Author<T> {
    _id: string;
    _name: string;
    image: T;
  }
  export interface Automation {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    title: string;
    description: string;
    slug: { current: string };
    image: SanityImageAssetDocument;
    content: any;
  }
}
