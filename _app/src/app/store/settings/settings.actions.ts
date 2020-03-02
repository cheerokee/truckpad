import { createAction, props } from '@ngrx/store';


export const toggleFixedHeader = createAction(
  '[Settings] Toggle Fixed Header',
    props<{ check: any; }>()
);
export const toggleFixedNavigation = createAction(
  '[Settings] Toggle Fixed Navigation',
    props<{ check: any; }>()
);
export const toggleMinifyNavigation = createAction(
  '[Settings] Toggle Minify Navigation',
    props<{ check: any; }>()
);
export const toggleHideNavigation = createAction(
  '[Settings] Toggle Hide Navigation',
    props<{ check: any; }>()
);
export const toggleTopNavigation = createAction(
  '[Settings] Toggle Top Navigation',
    props<{ check: any; }>()
);
export const toggleBoxedLayout = createAction(
  '[Settings] Toggle Boxed Layout',
    props<{ check: any; }>()
);
export const togglePushContent = createAction(
  '[Settings] Toggle Push Content',
    props<{ check: any; }>()
);
export const toggleNoOverlay = createAction(
  '[Settings] Toggle No Overlay',
    props<{ check: any; }>()
);
export const toggleOffCanvas = createAction(
  '[Settings] Toggle Off Canvas',
    props<{ check: any; }>()
);
export const toggleBiggerContentFont = createAction(
  '[Settings] Toggle Bigger Content Font',
    props<{ check: any; }>()
);
export const toggleHighContrastText = createAction(
  '[Settings] Toggle High Contrast Text',
    props<{ check: any; }>()
);
export const toggleDaltonism = createAction(
  '[Settings] Toggle Daltonism',
    props<{ check: any; }>()
);
export const toggleRtl = createAction(
  '[Settings] Toggle RTL',
    props<{ check: any; }>()
);
export const togglePreloaderInsise = createAction(
  '[Settings] Toggle Preloader Insise',
    props<{ check: any; }>()
);
export const toggleCleanPageBackground = createAction(
  '[Settings] Toggle Clean Page Background',
    props<{ check: any; }>()
);
export const toggleHideNavigationIcons = createAction(
  '[Settings] Toggle Hide Navigation Icons',
    props<{ check: any; }>()
);
export const toggleDisableCSSAnimation = createAction(
  '[Settings] Toggle Disable CSS Animation',
    props<{ check: any; }>()
);
export const toggleHideInfoCard = createAction(
  '[Settings] Toggle Hide Info Card',
    props<{ check: any; }>()
);
export const toggleLeanSubheader = createAction(
  '[Settings] Toggle Lean Subheader',
    props<{ check: any; }>()
);
export const toggleHierarchicalNavigation = createAction(
  '[Settings] Toggle Hierarchical Navigation',
    props<{ check: any; }>()
);
export const setGlobalFontSize = createAction(
  '[Settings] Set Global Font Size',
  props<{ size: string; }>()
);
export const appReset = createAction(
  '[Settings] App Reset'
);
export const factoryReset = createAction(
  '[Settings] Factory Reset'
);


export const SettingsActionTypes: string[] = [
  toggleFixedHeader.type,
  toggleFixedNavigation.type,
  toggleMinifyNavigation.type,
  toggleHideNavigation.type,
  toggleTopNavigation.type,
  toggleBoxedLayout.type,
  togglePushContent.type,
  toggleNoOverlay.type,
  toggleOffCanvas.type,
  toggleBiggerContentFont.type,
  toggleHighContrastText.type,
  toggleDaltonism.type,
  toggleRtl.type,
  togglePreloaderInsise.type,
  toggleCleanPageBackground.type,
  toggleHideNavigationIcons.type,
  toggleDisableCSSAnimation.type,
  toggleHideInfoCard.type,
  toggleLeanSubheader.type,
  toggleHierarchicalNavigation.type,
  setGlobalFontSize.type,
  appReset.type,
  factoryReset.type,
];
