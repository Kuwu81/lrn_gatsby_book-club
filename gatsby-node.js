const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const bookTemplate = path.resolve('src/templates/bookTemplate.js');

    return graphql(`
        {
            allBook {
              edges {
                node {
                  summary
                  title
                  id
                  author {
                    name
                  }
                  localImage {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FIXED
                            width: 200
                            placeholder: DOMINANT_COLOR
                        )
                    }
                  }
                }
              }
           }
        }
    `).then((result) => {
        if(result.errors) {
            throw result.errors;
        }

        result.data.allBook.edges.forEach((book) => {
            createPage({
                path: `/book/${book.node.id}`,
                component: bookTemplate,
                context: book.node,
            })
        })
    });
}
