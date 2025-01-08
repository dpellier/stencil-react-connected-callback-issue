import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    reactOutputTarget({
      esModules: true,
      outDir: '../react-library/lib/components/stencil-generated/',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
