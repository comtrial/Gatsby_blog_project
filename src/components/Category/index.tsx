import * as React from 'react';
import './category.scss';
import { useStaticQuery, graphql, Link } from 'gatsby';

// interface PostListProps {
//     posts: any[];
// }
const CategoryPage = (props: PostListProps) => {
    const categories = useStaticQuery(
        graphql`
            query 
              CategoryQuery {
                categories: allMarkdownRemark(limit: 2000) {
                    group(field: frontmatter___category) {
                        fieldValue
                        totalCount
                    }
                }
            }
    `);
    
    const category_list = categories.categories.group;
    
    return (
        <div className="category" >
            <div className="title">Category</div>
            {category_list.map(ct => (<Link to={`/category#${ct["fieldValue"]}`}><p>{ct["fieldValue"]}({ct["totalCount"]})</p></Link>))}
        </div>
        
    );
}
export default CategoryPage;
//     const {posts} = props;
//     const mapToList = posts.map((post: any) => {
//         const { node } = post;
//         const { frontmatter } = node;
//         const { category } = frontmatter;

//         console.log(category)
//         if(category === null) return;

//         return (
//             <span>
//                 <Link to={`/category#${category.toString()}`}>
//                 <p>{category}</p>
//                     </Link>
//             </span>
//         );
    
//         console.log(category)
//     })
    
//     console.log(mapToList)
//     return (
//         <div className="category">
//             <div className="title">Category</div>
//             {mapToList}
//         </div>
//     )
// }

