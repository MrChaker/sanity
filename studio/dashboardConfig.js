export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '61ffd11542d81b28664ed536',
                  title: 'Sanity Studio',
                  name: 'sanity-studio-n1ok3mr8',
                  apiId: 'ba8a26e6-b70d-4870-adad-b604c729221a'
                },
                {
                  buildHookId: '61ffd11537ee9f9a1d7e9535',
                  title: 'Landing pages Website',
                  name: 'sanity-web-txkkco1d',
                  apiId: '394cf754-954a-4750-b2b9-e1b1d8f7d9fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MrChaker/sanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-web-txkkco1d.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
