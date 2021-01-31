/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Intro from '../components/Intro';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Bio from '../components/Bio';
import './styles/index.scss';
import PostList from '../components/PostList';
import IntroPage from '../components/Intro';
import CategoryPage from '../components/Category';

import Img from "gatsby-image"
interface IndexPageProps {
  path: string;
  data: any;
}

const IndexPage = (props: IndexPageProps) => {
  const { data } = props;
  const posts = data.allMarkdownRemark.edges;
  const title = data.site.siteMetadata.title;

  return (
    <Layout>
      <SEO title={title} />
      <div className="index-wrap">
        <Bio />
        <CategoryPage></CategoryPage>
        <div className="index-post-list-wrap">
          <IntroPage></IntroPage>
          
          <PostList posts={posts} />
          {posts.length < 100 ? null : (
            <div className="show-more-posts">
              <div className="show-more-btn">
                <Link to="/search">
                  <Fa icon={faSearch} />
                  <span>SHOW MORE POSTS</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 100) {
      edges {
        node {
          excerpt(truncate: true, format: PLAIN)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            update(formatString: "MMM DD, YYYY")
            title
            tags
            category
          }
        }
      }
    }
  }
`;

export default IndexPage;
