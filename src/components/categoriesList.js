import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

export const CategoriesList = () => {
  const categoriesForFilter = useStaticQuery(graphql`
query {
  wpgraphql {
    categories {
      edges {
        node {
          name
          id
          slug
        }
      }
    }
  }
    }
`)



  const edges = categoriesForFilter.wpgraphql.categories.edges








  return (
    <div className="categories">
      <ul>
        <Link to="/projekti">
          <li className="btn btn-outline-primary p-3 m-1 text-black" >
            Svi objekti
        </li>
        </Link>
        {
          edges.map((edge) => {
            return (
              <Link to={`/kategorija/${edge.node.slug}`} key={edge.node.id}>
                <li className="btn btn-outline-primary p-3 m-1 text-black" key={edge.node.id}>
                  {edge.node.name}
                </li>
              </Link>
            )
          }
          )}






      </ul>
    </div >
  )


}
export default CategoriesList