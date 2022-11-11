export type CoursesType = {
  id: string;
  publishedAt: string;
  slug: string;
  title: string;
  teachers: {
    id: string;
    name: string;
    picture: {
      url: string;
    }
  }[];
  assets: {
    id: string;
    url: string;
  }[]
  updatedAt: string;
  createdAt: string;
  content: {
    html: string;
  }
}