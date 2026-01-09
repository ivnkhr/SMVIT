import { createReducer, on } from '@ngrx/store';
import { AssetsActions } from './assets.actions';
import { AssetsState } from '../../models';
import { DEFAULT_FONTS } from '../../models/default-fonts';

const initialState: AssetsState = {
  imageCategories: [
    {
      id: 'abstract',
      name: 'Abstrakcja',
      images: [
        'images/abstract/0add8ef1-86d6-47da-a9cd-4328f5f2d9ce.png',
        'images/abstract/0b1a281f-f326-4884-bc3d-c6760f85ab3b.png',
        'images/abstract/12a891dc-434a-40e7-957a-aa814e29b412.png',
        'images/abstract/2e6f255b-0159-4d79-a135-bd24e5d21e21.png',
        'images/abstract/2fcd9579-fdc6-43ec-80b2-f0ec24039fd1.png',
        'images/abstract/58361d2e-439d-4279-bdd1-1ce89e08d83a.png',
        'images/abstract/6ac75c58-be99-4db4-b793-461ce5d6ed98.png',
        'images/abstract/71d42ece-e5cc-4641-80de-c4c39787fbcd.png',
        'images/abstract/742b61b2-150e-4f3b-95d4-8eb377e049c8.png',
        'images/abstract/8caab1e6-ba31-4851-8a53-0ff8985a0538.png',
        'images/abstract/91102ceb-b506-4eb8-ade8-4e99a5815171.png',
        'images/abstract/916d265e-6740-4346-8545-40535bfcd868.png',
        'images/abstract/92fa6495-58b8-463a-91e4-5b02dfd79780.png',
        'images/abstract/9e58f243-d6e2-4dbc-93a4-21051b7a128c.png',
        'images/abstract/a0f8c6c6-b473-4d39-beab-94a31f796c33.png',
        'images/abstract/a3ff2975-9447-4fa7-951b-5960b30c283c.png',
        'images/abstract/af282d09-b4b2-4885-8825-8f9f39805d06.png',
        'images/abstract/b216d570-a621-475c-ae32-69576161ae4e.png',
        'images/abstract/ba44882f-30ab-4584-a220-626dcaddefa8.png',
        'images/abstract/bbab8a2e-a57a-44f3-bd88-9cb47d4c9d38.png',
        'images/abstract/c6c4330f-8d90-49aa-80a9-aa46f95405e5.png',
        'images/abstract/cb25f6a9-630c-4af4-8bfa-69561ec949a2.png',
        'images/abstract/cbbf7cba-d57f-499e-8484-c4925db8a0f6.png',
        'images/abstract/cf93013a-f09f-4f39-b2b9-915396edbc0c.png',
        'images/abstract/da62e6c1-10a1-49eb-8f8e-37ee1c312e50.png',
        'images/abstract/f17ebf2f-b773-41c8-ab5e-b73d4f394e09.png',
        'images/abstract/f8ba6798-2282-43b2-a878-9081b9035860.png',
      ],
    },
    {
      id: 'figure',
      name: 'Postać',
      images: [
        'images/figure/08746618-c660-47d1-b737-b808d676247d.png',
        'images/figure/255550cc-a5f6-43ab-ab38-32c2c9e08671.png',
        'images/figure/2e55f5e4-431e-4f72-bd2a-c24b9b229250.png',
        'images/figure/3318e1a2-c28b-47ea-97e7-cd87d5cb2b84.png',
        'images/figure/379767b6-51ba-4aa3-b9a4-95ff1176125c.png',
        'images/figure/3fe95287-b3e2-4ec3-84a2-5777e3ca7c07.png',
        'images/figure/4dee5672-9451-482d-bc7e-942bc2e87ccc.png',
        'images/figure/4fb4700a-048e-4205-935f-95b93ce00ce8.png',
        'images/figure/66a0d12d-6645-4796-853b-64544e0175fd.png',
        'images/figure/6b38ac4e-0366-4847-915c-0e44ed65c8aa.png',
        'images/figure/7017aa9d-f757-47da-be98-8d16a6a2ccbb.png',
        'images/figure/8350f35a-7ab3-4e88-a053-1033638dd08c.png',
        'images/figure/852baa3b-e238-4734-9371-aaba73e13f9b.png',
        'images/figure/89b10d38-1c97-45c7-b07c-718bd7cb80f0.png',
        'images/figure/a6b54e9c-0adb-40d6-92b7-73cc9d37cd1d.png',
        'images/figure/b196a1ef-f42e-4624-aa64-376ceb2b1d40.png',
        'images/figure/b3229094-9b3b-4a4c-99f0-79f3131daf5c.png',
        'images/figure/b8bd7e23-de48-4a15-9db8-6bd1867bc8b1.png',
        'images/figure/cd47ebd8-0a5b-4d05-b6a6-d2db36b6253e.png',
        'images/figure/cd8cfa77-ea17-4305-a886-d529a94e8a90.png',
        'images/figure/d479e3d3-8af3-49fe-9ff9-9036b0e61434.png',
        'images/figure/d780af54-4c70-4591-a25f-37951fbed169.png',
        'images/figure/d848105b-a8f9-47ec-8bdb-5331c0d2035e.png',
        'images/figure/f20bf92a-365d-4e0b-b65d-511426116c64.png',
        'images/figure/f3c98c55-d15b-4f34-88f3-c50b2c4621f9.png',
      ],
    },
    {
      id: 'material',
      name: 'Materiał',
      images: [
        'images/material/0f081d1e-814b-4819-bf8d-b9e513fdceee.png',
        'images/material/10e2cdb8-8ada-4728-b6d9-d451d8b9a584.png',
        'images/material/2922a210-03ce-423e-80b6-b54bf278469e.png',
        'images/material/4f93c356-7269-429a-a89d-76671cf7aa3c.png',
        'images/material/546201a6-03a0-4de3-bf1f-5f62298fe7f4.png',
        'images/material/6d18c4bb-2811-49a0-b74a-caddf8196cab.png',
        'images/material/70abc79e-3d83-4a53-9af3-e4fd21a9ac99.png',
        'images/material/74b4dcbc-f4a6-471c-b3cc-14194e377168.png',
        'images/material/89d5c1fe-dc53-4e0a-865b-6cd51f1a5870.png',
        'images/material/91080d71-0bbb-4054-8fab-4c84f3f79142.png',
        'images/material/9f587f7c-fb75-4489-b415-bf50222f23e1.png',
        'images/material/9f772bbf-07e2-43f6-a39b-ed86963d3ffe.png',
        'images/material/a3230637-4402-4c2a-a7c0-d024687a2736.png',
        'images/material/af5acef5-3473-4768-91be-77ebe0813294.png',
        'images/material/c11196e4-e228-477b-bcaf-1a6e56bd361b.png',
        'images/material/c52732f8-d2f0-4753-b04f-69c231526627.png',
        'images/material/d58f26a0-e23a-438a-b078-d906242dab2b.png',
        'images/material/d9f07609-b325-43b0-9472-deefbbfc84ac.png',
        'images/material/faeb1b15-8d79-4aee-880b-51642079574c.png',
      ],
    },
  ],
  selectedCategory: 'abstract',
  logos: [
    'none',
    'logos/1.png',
    'logos/2.png',
    'logos/3.png',
    'logos/4.png',
  ],
  fonts: DEFAULT_FONTS,
  loadedFonts: [],
  isLoadingFonts: false,
};

export const assetsReducer = createReducer(
  initialState,

  on(AssetsActions.loadImageCategoriesSuccess, (state, { categories }) => ({
    ...state,
    imageCategories: categories,
  })),

  on(AssetsActions.selectImageCategory, (state, { categoryId }) => ({
    ...state,
    selectedCategory: categoryId,
  })),

  on(AssetsActions.loadFontsSuccess, (state, { fonts }) => ({
    ...state,
    fonts,
  })),

  on(AssetsActions.loadGoogleFont, (state) => ({
    ...state,
    isLoadingFonts: true,
  })),

  on(AssetsActions.fontLoaded, (state, { fontName }) => ({
    ...state,
    loadedFonts: [...state.loadedFonts, fontName],
    isLoadingFonts: false,
  })),

  on(AssetsActions.fontLoadFailed, (state) => ({
    ...state,
    isLoadingFonts: false,
  }))
);
