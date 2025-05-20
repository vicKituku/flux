import { SanityAssetDocument, SanityImageAssetDocument } from "next-sanity";

export namespace SanityTypes {
  export interface BlogCategory {
    _id: string;
    title: string;
    description?: string;
  }

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
    category?: BlogCategory;
  }
  export interface Author<T> {
    _id: string;
    _name: string;
    image: T;
  }
  export interface AutomationCategory {
    _id: string;
    title: string;
    description?: string;
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
    category?: AutomationCategory;
  }
}

export interface AutomationResponse {
  automations: SanityTypes.Automation[];
  total: number;
}
