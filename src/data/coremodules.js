// coreModules.js
import {moduleList} from './listofmodules';

export const coreModules = {
  stage1: {
    semester1: [
      { code: "CM1112", ...moduleList.CM1112, type: "Core", source: "core"  },
      { code: "CM1119", ...moduleList.CM1119, type: "Core", source: "core"  },
    ],
    semester2: [
      { code: "CM1120", ...moduleList.CM1120, type: "Core", source: "core"  },
      { code: "CM1121", ...moduleList.CM1121, type: "Core", source: "core"  },
    ],
  },
  stage2: {
    semester1: [
      { code: "CM2112", ...moduleList.CM2112, type: "Core", source: "core"  },
    ],
    semester2: [
      { code: "CM2124", ...moduleList.CM2124, type: "Core", source: "core"  },
    ],
  },
  stage3: {
    semester1: [
      { code: "CM3130", ...moduleList.CM3130, type: "Core", source: "core"  },
    ],
    semester2: [
      { code: "CM3141", ...moduleList.CM3141, type: "Core", source: "core"  },
    ],
  },
  stage4: {
    semester2: [
      { code: "CM4134", ...moduleList.CM4134, type: "Core" },
    ],
  },
  // Add other stages and semesters as needed
};