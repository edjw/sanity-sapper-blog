export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eaf15270ecc6b4750d0ae20',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-tp8qmf4q',
                  apiId: 'a2e2918c-3ed6-4de8-bc60-155de99439de'
                },
                {
                  buildHookId: '5eaf15276d3a2d862ce11e93',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-norfnp7f',
                  apiId: '26d3667c-f437-48a6-9129-29497fb4ba30'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/edjw/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-norfnp7f.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
