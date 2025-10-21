// electives.js
import { moduleList } from './listofmodules';

export const electives = {
  stage1: {
    semester1: {
      csElec: {
        ...moduleList.CM1109,
        type: "Elective",
        source: "elective",
      },
      cyElec: {
        ...moduleList.CM1131,
        type: "Elective",
        source: "elective",
      },
      dsElec: {
        ...moduleList.CM1122,
        type: "Elective",
        source: "elective",
      },
      ccdElec: {
        ...moduleList.CM1108,
        type: "Elective",
        source: "elective",
      },
    },
    semester2: {
      csElec: {
        ...moduleList.CM1113,
        type: "Elective",
        source: "elective",
      },
      cyElec: {
        ...moduleList.CM1132,
        type: "Elective",
        source: "elective",
      },
      dsElec: {
        ...moduleList.CM1123,
        type: "Elective",
        source: "elective",
      },
      ccdElec: {
        ...moduleList.CM1116,
        type: "Elective",
        source: "elective",
      },
    },
  },
  stage2: {
    semester1: {
      csElec: {
        ...moduleList.CM2115,
        type: "Elective",
        source: "elective",
      },
      cyElec: {
        ...moduleList.CM2133,
        type: "Elective",
        source: "elective",
      },
      dsElec: {
        ...moduleList.CM2137,
        type: "Elective",
        source: "elective",
      },
      ccdElec: {
        ...moduleList.CM2119,
        type: "Elective",
        source: "elective",
      },
      gdElec: {
        ...moduleList.CM2120,
        type: "Elective",
        source: "elective",
      },
      wmElec: {
        ...moduleList.CE2000,
        type: "Elective",
        source: "elective",
      },
    },
    semester2: {
      csElec: {
        ...moduleList.CM2116,
        type: "Elective",
        source: "elective",
      },
      cyElec: {
        ...moduleList.CM2136,
        type: "Elective",
        source: "elective",
      },
      dsElec: {
        ...moduleList.CM2138,
        type: "Elective",
        source: "elective",
      },
      ccdElec: {
        ...moduleList.CM2125,
        type: "Elective",
        source: "elective",
      },
      gdElec: {
        ...moduleList.CM2123,
        type: "Elective",
        source: "elective",
      },
      wmElec: {
        ...moduleList.CE2001,
        type: "Elective",
        source: "elective",
      },
    },
  },
  stage3: {
    semester1: {
      csElec: {
        ...moduleList.CM3113,
        type: "Elective",
        source: "elective",
      },
      cyElec: {
        ...moduleList.CM3144,
        type: "Elective",
        source: "elective",
      },
      dsElec: {
        ...moduleList.CM3151,
        type: "Elective",
        source: "elective",
      },
      ccdElec: {
        ...moduleList.CM3112,
        type: "Elective",
        source: "elective",
      },
      gdElec: {
        ...moduleList.CM3137,
        type: "Elective",
        source: "elective",
      },
      wmElec: {
        ...moduleList.CM3147,
        type: "Elective",
        source: "elective",
      },
    },
    semester2: {
      csElec: {
        ...moduleList.CM3142,
        type: "Elective",
        source: "elective",
      },
      cyElec: {
        ...moduleList.CM3145,
        type: "Elective",
        source: "elective",
      },
      dsElec: {
        ...moduleList.CM3153,
        type: "Elective",
        source: "elective",
      },
      ccdElec: {
        ...moduleList.CM3149,
        type: "Elective",
        source: "elective",
      },
      gdElec: {
        ...moduleList.CM3150,
        type: "Elective",
        source: "elective",
      },
      wmElec: {
        ...moduleList.CM3138,
        type: "Elective",
        source: "elective",
      },
    },
  },
  stage4: {
    semester1: {
      csElec: {
        ...moduleList.CE4145,
        type: "Elective",
        source: "elective",
      },
      cyElec: {
        ...moduleList.CM4143,
        type: "Elective",
        source: "elective",
      },
      dsElec: {
        ...moduleList.CM4125,
        type: "Elective",
        source: "elective",
      },
      ccdElec: {
        ...moduleList.CM4136,
        type: "Elective",
        source: "elective",
      },
      gdElec: {
        ...moduleList.CM4137,
        type: "Elective",
        source: "elective",
      },
      wmElec: {
        ...moduleList.CM4132,
        type: "Elective",
        source: "elective",
      },
    },
  },
};