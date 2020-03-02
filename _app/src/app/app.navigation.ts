export const NavigationItems = [
  {
    title: 'Resumo',
    tags: 'dashboard',
    icon: 'fal fa-warehouse',
    routerLink: '/admin'
  },
  {
    title: 'Painel de Viagens',
    tags: 'painel de viagens',
    icon: 'fal fa-map-signs',
    routerLink: '/admin/transporte/painel-viagem'
  },
  {
    title: 'Cadastros',
    tags: 'cadastros',
    icon: 'fal fa-database',
    items: [
      {
        title: 'Usuários',
        tags: 'usuarios',
        routerLink: '/admin/cadastro/usuario'
      },
      {
        title: 'Motoristas',
        tags: 'motoristas',
        routerLink: '/admin/cadastro/motorista'
      }
    ]
  },
  {
    title: 'Transporte',
    tags: 'transporte',
    icon: 'fal fa-database',
    items: [
      {
        title: 'Viagens',
        tags: 'viagens',
        routerLink: '/admin/transporte/viagem'
      },
      {
        title: 'Veículos',
        tags: 'veiculos',
        routerLink: '/admin/transporte/veiculo'
      },
      {
        title: 'Categorias',
        tags: 'categorias',
        routerLink: '/admin/transporte/categoria'
      },
      {
        title: 'Marcas',
        tags: 'marcas',
        routerLink: '/admin/transporte/marca'
      }
    ]
  },
  {
    title: 'Endereço',
    tags: 'endereço',
    icon: 'fal fa-database',
    items: [
      {
        title: 'Endereços',
        tags: 'endereços',
        routerLink: '/admin/endereco/endereco'
      },
      {
        title: 'Cidades',
        tags: 'cidades',
        routerLink: '/admin/endereco/cidade'
      }
    ]
  },
  {
    title: 'Autorização',
    tags: 'autorizacao',
    icon: 'fal fa-shield-alt',
    items: [
      {
        title: 'Painel de Autorização',
        tags: 'Painel de Autorização',
        routerLink: '/admin/acl/panel-autorizacao'
      },
      {
        title: 'Recursos',
        tags: 'Recursos',
        routerLink: '/admin/acl/recurso'
      },
      {
        title: 'Ações',
        tags: 'Ações',
        routerLink: '/admin/acl/acao'
      },
      {
        title: 'Perfis',
        tags: 'Perfis',
        routerLink: '/admin/acl/perfil'
      },
      {
        title: 'Possibilidades',
        tags: 'Possibilidades',
        routerLink: '/admin/acl/possibilidade'
      }
    ]
  }
];

