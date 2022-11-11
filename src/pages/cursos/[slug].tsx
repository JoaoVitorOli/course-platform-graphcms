import { gql } from "@apollo/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import client from "../../../apollo-client";
import CourseInfo from "../../components/CourseInfo";
import Header from "../../components/Header";
import { CoursesType } from "../../types/courses.type";

export interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface CursosProps {
  courses: CoursesType
}

export default function Cursos({ courses }: CursosProps) {
  return (
    <>
      <Header />

      <main>
        <CourseInfo 
          courses={courses}
        />
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;

  const { data } = await client.query({
    query: gql`
      query Courses {
        courses(where: { slug: "${slug}" }) {
          title
          teachers {
            id
            name
            picture {
              url
            }
          }
          assets {
            id
            url
          }
          content {
            html
          }
        }
      }
    `,
  });
  
  if (data.courses.length === 0) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  const courses = data.courses[0];

  return {
    props: {
      courses
    },
  } 
}
