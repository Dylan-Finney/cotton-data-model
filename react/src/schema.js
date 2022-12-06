const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLEnumType,
    GraphQLFloat,
    GraphQLBoolean,
    GraphQLUnionType,
    printSchema,
} = require("graphql")

/**************************************************************************
  ENUMS
**************************************************************************/
const tiffCompressionEnum = new GraphQLEnumType({
    name: 'Compression',
    description: '',
    values: {
        "UNCOMPRESSED": {
            value: 1,
            description: 'uncompressed',
        },
        "JPEG_COMPRESSION": {
            value: 6,
            description: 'JPEG compression (thumbnails only)',
        },
    },
});
const tiffPhotometricInterpretationEnum = new GraphQLEnumType({
    name: 'PhotometricInterpretation',
    description: '',
    values: {
        "RGB": {
            value: 2,
            description: 'RGB',
        },
        "YCbCr": {
            value: 6,
            description: 'YCbCr',
        },
    },
});
const tiffOrientationEnum = new GraphQLEnumType({
    name: 'Orientation',
    description: '',
    values: {
        "one": {
            value: 1,
            description: 'The 0th row is at the visual top of the image, and the 0th column is the visual left-hand side.',
        },
        "two": {
            value: 2,
            description: 'The 0th row is at the visual top of the image, and the 0th column is the visual right-hand side.',
        },
        "three": {
            value: 3,
            description: 'The 0th row is at the visual bottom of the image, and the 0th column is the visual right-hand side.',
        },
        "four": {
            value: 4,
            description: 'The 0th row is at the visual bottom of the image, and the 0th column is the visual left-hand side.',
        },
        "five": {
            value: 5,
            description: 'The 0th row is the visual left-hand side of the image, and the 0th column is the visual top.',
        },
        "six": {
            value: 6,
            description: 'The 0th row is the visual right-hand side of the image, and the 0th column is the visual top.',
        },
        "seven": {
            value: 7,
            description: 'The 0th row is the visual right-hand side of the image, and the 0th column is the visual bottom.',
        },
        "eight": {
            value: 8,
            description: 'The 0th row is the visual left-hand side of the image, and the 0th column is the visual bottom.',
        }
    },
});
const tiffPlanarConfigurationEnum = new GraphQLEnumType({
    name: 'PlanarConfiguration',
    description: '',
    values: {
        "CHUNKY": {
            value: 1,
            description: 'chunky format',
        },
        "PLANAR": {
            value: 2,
            description: 'planar format',
        }
    },
});
const tiffYCbCrSubSamplingEnum = new GraphQLEnumType({
    name: 'YCbCrSubSampling',
    description: '',
    values: {
        "four_two_two": {
            value: [2,1],
            description: 'YCbCr4:2:2',
        },
        "four_two_zero": {
            value: [2,2],
            description: 'YCbCr4:2:0',
        }
    },
});
const tiffYCbCrPositioningEnum = new GraphQLEnumType({
    name: 'YCbCrPositioning',
    description: '',
    values: {
        "centered": {
            value: 1,
            description: 'centered',
        },
        "co_sited": {
            value: 2,
            description: 'co-sited',
        }
    },
});
const tiffResolutionUnitEnum = new GraphQLEnumType({
    name: 'ResolutionUnit',
    description: '',
    values: {
        "inches": {
            value: 2,
            description: 'inches',
        },
        "centimeters": {
            value: 3,
            description: 'centimeters',
        }
    },
});
const exifExposureProgramEnum = new GraphQLEnumType({
  name: 'ExposureProgram',
  description: '',
  values: {
      "not_defined": {
          value: 0,
          description: 'Not defined',
      },
      "manual": {
          value: 1,
          description: 'Manual',
      },
      "Normal": {
          value: 2,
          description: 'Normal program',
      },
      "Aperture": {
          value: 3,
          description: 'Aperture priority',
      },
      "Shutter": {
          value: 4,
          description: 'Shutter priority',
      },
      "Creative": {
          value: 5,
          description: 'Creative program (biased toward depth of field)',
      },
      "Action": {
          value: 6,
          description: 'Action program (biased toward fast shutter speed)',
      },
      "Portrait": {
          value: 7,
          description: 'Portrait mode (for closeup photos with the background out of focus)',
      },
      "Landscape": {
          value: 8,
          description: 'Landscape mode (for landscape photos with the background in focus)',
      }
  },
});
const exifSensitivityTypeEnum = new GraphQLEnumType({
  name: 'SensitivityType',
  description: '',
  values: {
      "Unknown": {
          value: 0,
          description: 'Unknown',
      },
      "SOS": {
          value: 1,
          description: 'Standard output sensitivity (SOS)',
      },
      "REI": {
          value: 2,
          description: 'Recommended exposure index (REI)',
      },
      "ISO": {
          value: 3,
          description: 'ISO speed',
      },
      "SOS_REI": {
          value: 4,
          description: 'Standard output sensitivity (SOS) and recommended exposure index (REI)',
      },
      "SOS_ISO": {
          value: 5,
          description: 'Standard output sensitivity (SOS) and ISO speed',
      },
      "REI_ISO": {
          value: 6,
          description: 'Recommended exposure index (REI) and ISO speed',
      },
      "SOS_REI_ISO": {
          value: 7,
          description: 'Standard output sensitivity (SOS) and recommended exposure index (REI) and ISO speed',
      }
  },
});
const exifMeteringModeEnum = new GraphQLEnumType({
  name: 'MeteringMode',
  description: '',
  values: {
      "Unknown": {
          value: 0,
          description: 'Unknown',
      },
      "Average": {
          value: 1,
          description: 'Average',
      },
      "CenterWeightedAverage": {
          value: 2,
          description: 'CenterWeightedAverage',
      },
      "Spot": {
          value: 3,
          description: 'Spot',
      },
      "MultiSpot": {
          value: 4,
          description: 'MultiSpot',
      },
      "Pattern": {
          value: 5,
          description: 'Pattern',
      },
      "Partial": {
          value: 6,
          description: 'Partial',
      },
      "Other": {
          value: 255,
          description: 'Other',
      }
  },
});
const exifLightSourceEnum = new GraphQLEnumType({
  name: 'LightSource',
  description: '',
  values: {
      "Unknown": {
          value: 0,
          description: 'Unknown',
      },
      "Daylight": {
        value: 1,
        description: 'Daylight',
      },
      "Fluorescent": {
        value: 2,
        description: 'Fluorescent',
      },
      "Tungsten": {
        value: 3,
        description: 'Tungsten (incandescent light)',
      },
      "Flash": {
        value: 4,
        description: 'Flash',
      },
      "Fine_weather": {
        value: 9,
        description: 'Fine weather',
      },
      "Cloudy_weather": {
        value: 10,
        description: 'Cloudy weather',
      },
      "Shade": {
        value: 11,
        description: 'Shade',
      },
      "Daylight_fluorescent": {
        value: 12,
        description: 'Daylight fluorescent (D 5700 - 7100K)',
      },
      "Day_white_fluorescent": {
        value: 13,
        description: 'Day white fluorescent (N 4600 - 5500K)',
      },
      "Cool_white_fluorescent": {
        value: 14,
        description: 'Cool white fluorescent (W 3800 - 4500K)',
      },
      "White_fluorescent": {
        value: 15,
        description: 'White fluorescent (WW 3250 - 3800K)',
      },
      "Warm_white_fluorescent": {
        value: 16,
        description: 'Warm white fluorescent (L 2600 - 3250K)',
      },
      "Standard_light_A": {
        value: 17,
        description: 'Standard light A',
      },
      "Standard_light_B": {
        value: 18,
        description: 'Standard light B',
      },
      "Standard_light_C": {
        value: 19,
        description: 'Standard light C',
      },
      "D55": {
        value: 20,
        description: 'D55',
      },
      "D65": {
        value: 21,
        description: 'D65',
      },
      "D75": {
        value: 22,
        description: 'D75',
      },
      "D50": {
        value: 23,
        description: 'D50',
      },
      "ISO_Tungsten": {
        value: 24,
        description: 'ISO studio tungsten',
      },
      "Other": {
        value: 255,
        description: 'other light source',
      }
      
  },
});
const exifFlashLightStatusEnum = new GraphQLEnumType({
  name: 'FlashLightStatus',
  description: '',
  values: {
      "No_Function": {
          value: 0,
          description: 'No strobe return detection function',
      },
      "Reserved": {
          value: 1,
          description: 'Reserved',
      },
      "Not_Detected": {
          value: 2,
          description: 'Strobe return light not detected.',
      },
      "Detected": {
          value: 3,
          description: 'Strobe return light detected.',
      }
  },
});
const exifFlashLightModeEnum = new GraphQLEnumType({
  name: 'FlashLightMode',
  description: '',
  values: {
      "Unknown": {
          value: 0,
          description: 'unknown',
      },
      "Firing": {
          value: 1,
          description: 'Compulsory flash firing',
      },
      "Suppression": {
          value: 2,
          description: 'Compulsory flash suppression.',
      },
      "Auto": {
          value: 3,
          description: 'Auto mode.',
      }
  },
});
const exifSensingMethodEnum = new GraphQLEnumType({
  name: 'SensingMethod',
  description: '',
  values: {
      "Not_Defined": {
          value: 1,
          description: 'Not Defined',
      },
      "One_chip_color_area": {
          value: 2,
          description: 'One-chip color area sensor',
      },
      "Two_chip_color_area": {
          value: 3,
          description: 'Two-chip color area sensor.',
      },
      "Three_chip_color_area": {
          value: 4,
          description: 'Three-chip color area sensor.',
      },
      "Color_sequential_area": {
          value: 5,
          description: 'Color sequential area sensor.',
      },
      "Trilinear": {
          value: 7,
          description: 'Trilinear sensor.',
      },
      "Color_sequential_linear": {
          value: 8,
          description: 'Color sequential linear sensor.',
      }
  },
});
const exifFileSourceEnum = new GraphQLEnumType({
  name: 'FileSource',
  description: '',
  values: {
      "others": {
        value: 0,
        description: 'others',
      },
      "transparent": {
          value: 1,
          description: 'scanner of transparent type',
      },
      "reflex": {
          value: 2,
          description: 'scanner of reflex type',
      },
      "DSC": {
          value: 3,
          description: 'DSC.',
      }
  },
});
const exifSceneTypeEnum = new GraphQLEnumType({
  name: 'SceneType',
  description: '',
  values: {
      "directly_photographed": {
          value: 1,
          description: 'A directly photographed image',
      }
  },
});
const exifCustomRenderedEnum = new GraphQLEnumType({
  name: 'CustomRendered',
  description: '',
  values: {
      "Normal": {
          value: 0,
          description: 'Normal process',
      },
      "Custom": {
        value: 1,
        description: 'Custom process',
    }
  },
});
const exifExposureModeEnum = new GraphQLEnumType({
  name: 'ExposureMode',
  description: '',
  values: {
      "Auto_Exposure": {
          value: 0,
          description: 'Auto Exposure',
      },
      "Manual_Exposure": {
        value: 1,
        description: 'Manual Exposure',
      },
      "Auto_Bracket": {
        value: 1,
        description: 'Auto bracket',
      }
  },
});
const exifWhiteBalanceEnum = new GraphQLEnumType({
  name: 'WhiteBalance',
  description: '',
  values: {
      "Auto": {
          value: 0,
          description: 'Auto White Balance',
      },
      "Manual": {
        value: 1,
        description: 'Manual White Balance',
      }
  },
});
const exifSceneCaptureTypeEnum = new GraphQLEnumType({
  name: 'SceneCaptureType',
  description: '',
  values: {
      "Standard": {
          value: 0,
          description: 'Standard',
      },
      "Landscape": {
        value: 1,
        description: 'Landscape',
      },
      "Portrait": {
        value: 2,
        description: 'Portrait',
      },
      "Night_Scene": {
        value: 3,
        description: 'Night scene',
      }
  },
});
const exifGainControlEnum = new GraphQLEnumType({
  name: 'GainControl',
  description: '',
  values: {
      "None": {
          value: 0,
          description: 'None',
      },
      "Low_Gain_Up": {
        value: 1,
        description: 'Low gain up',
      },
      "High_Gain_Up": {
        value: 2,
        description: 'High gain up',
      },
      "Low_Gain_Down": {
        value: 3,
        description: 'Low gain down',
      },
      "High_Gain_Down": {
        value: 4,
        description: 'High gain down',
      }
  },
});
const exifContrastEnum = new GraphQLEnumType({
  name: 'Contrast',
  description: '',
  values: {
      "Normal": {
          value: 0,
          description: 'Normal',
      },
      "Soft": {
        value: 1,
        description: 'Soft',
      },
      "Hard": {
        value: 2,
        description: 'Hard',
      }
  },
});
const exifSaturationEnum = new GraphQLEnumType({
  name: 'Saturation',
  description: '',
  values: {
      "Normal": {
          value: 0,
          description: 'Normal',
      },
      "Low": {
        value: 1,
        description: 'Low saturation',
      },
      "High": {
        value: 2,
        description: 'High saturation',
      }
  },
});
const exifSharpnessEnum = new GraphQLEnumType({
  name: 'Sharpness',
  description: '',
  values: {
      "Normal": {
          value: 0,
          description: 'Normal',
      },
      "Soft": {
        value: 1,
        description: 'Soft Sharpness',
      },
      "Hard": {
        value: 2,
        description: 'Hard Sharpness',
      }
  },
});
const exifSubjectDistanceRangeEnum = new GraphQLEnumType({
  name: 'SubjectDistanceRange',
  description: '',
  values: {
      "Unknown": {
          value: 0,
          description: 'Unknown',
      },
      "Macro": {
        value: 1,
        description: 'Macro',
      },
      "Close": {
        value: 2,
        description: 'Close view',
      },
      "Distant": {
        value: 2,
        description: 'Distant view',
      }
  },
});
const GPSLatitudeRefEnum = new GraphQLEnumType({
  name: 'GPSLatitudeRef',
  description: '',
  values: {
      "N": {
          value: "N",
          description: 'North',
      },
      "S": {
        value: "S",
        description: 'South',
      }
  },
});
const GPSLongitudeRefEnum = new GraphQLEnumType({
  name: 'GPSLongitudeRef',
  description: '',
  values: {
      "E": {
          value: "E",
          description: 'East',
      },
      "W": {
        value: "W",
        description: 'West',
      }
  },
});
const GPSAltitudeRefEnum = new GraphQLEnumType({
  name: 'GPSAltitudeRef',
  description: '',
  values: {
      "Sea": {
          value: 0,
          description: 'Sea Level',
      },
      "Sea_Neg": {
        value: 1,
        description: 'Sea Level Reference (negative value)',
      }
  },
});
const GPSStatusEnum = new GraphQLEnumType({
  name: 'GPSStatus',
  description: '',
  values: {
      "A": {
          value: "A",
          description: 'Measurement in progress',
      },
      "V": {
        value: "V",
        description: 'Measurement interrupted',
      }
  },
});
const GPSMeasureModeEnum = new GraphQLEnumType({
  name: 'GPSMeasureMode',
  description: '',
  values: {
      "two_D": {
          value: "2",
          description: '2-dimensional measurement',
      },
      "three_D": {
        value: "3",
        description: '3-dimensional measurement',
      }
  },
});
const GPSSpeedRefEnum = new GraphQLEnumType({
  name: 'GPSSpeedRef',
  description: '',
  values: {
      "K": {
          value: "K",
          description: 'Kilometers per hour',
      },
      "M": {
        value: "M",
        description: 'Miles per hour',
      },
      "N": {
        value: "N",
        description: 'Knots',
      }
  },
});
const GPSTrackRefEnum = new GraphQLEnumType({
  name: 'GPSTrackRef',
  description: '',
  values: {
      "T": {
          value: "T",
          description: 'True direction',
      },
      "M": {
        value: "M",
        description: 'Magnetic direction',
      }
  },
});
const GPSImgDirectionRefEnum = new GraphQLEnumType({
  name: 'GPSImgDirectionRef',
  description: '',
  values: {
      "T": {
          value: "T",
          description: 'True direction',
      },
      "M": {
        value: "M",
        description: 'Magnetic direction',
      }
  },
});
const GPSDestLatitudeRefEnum = new GraphQLEnumType({
  name: 'GPSDestLatitudeRef',
  description: '',
  values: {
      "N": {
          value: "N",
          description: 'North Latitude',
      },
      "S": {
        value: "S",
        description: 'South Latitude',
      }
  },
});
const GPSDestLongitudeRefEnum = new GraphQLEnumType({
  name: 'GPSDestLongitudeRef',
  description: '',
  values: {
      "E": {
          value: "E",
          description: 'East Longitude',
      },
      "W": {
        value: "W",
        description: 'West Longitude',
      }
  },
});
const GPSDestBearingRefEnum = new GraphQLEnumType({
  name: 'GPSDestBearingRef',
  description: '',
  values: {
      "T": {
          value: "T",
          description: 'True direction',
      },
      "M": {
        value: "M",
        description: 'Magnetic direction',
      }
  },
});
const GPSDestDistanceRefEnum = new GraphQLEnumType({
  name: 'GPSDestDistanceRef',
  description: '',
  values: {
      "K": {
          value: "K",
          description: 'Kilometers per hour',
      },
      "M": {
        value: "M",
        description: 'Miles per hour',
      },
      "N": {
        value: "N",
        description: 'Knots',
      }
  },
});
const GPSDifferentialEnum = new GraphQLEnumType({
  name: 'GPSDifferential',
  description: '',
  values: {
      "No_Correction": {
          value: 0,
          description: 'Measurement without differential correction',
      },
      "Correction_Applied": {
        value: 1,
        description: 'Differential correction applied',
      }
  },
});

const vAlarmcActionEnum = new GraphQLEnumType({
  name: 'vAlarmcAction',
  description: '',
  values: {
      "AUDIO": {
          value: 0,
          description: '',
      },
      "DISPLAY": {
        value: 1,
        description: '',
      },
      "EMAIL": {
        value: 2,
        description: '',
      },
      "PROCEDURE": {
        value: 3,
        description: '',
      }
  },
});

const iCalendarAttendeeCutypeEnum = new GraphQLEnumType({
  name: 'iCalendarAttendeeCutype',
  description: '',
  values: {
      "INDIVIDUAL": {
          value: 0,
          description: '',
      },
      "UNKNOWN": {
        value: 1,
        description: '',
      },
      "GROUP": {
        value: 2,
        description: '',
      },
      "ROOM": {
        value: 3,
        description: '',
      }
  },
}); 
const iCalendarAttendeeRoleEnum = new GraphQLEnumType({
  name: 'iCalendarAttendeeRole',
  description: '',
  values: {
      "CHAIR": {
          value: 0,
          description: '',
      },
      "REQ_PARTICIPANT": {
        value: 1,
        description: '',
      },
      "GROUP": {
        value: 2,
        description: '',
      }
  },
}); 
const iCalendarAttendeePartStatEnum = new GraphQLEnumType({
  name: 'iCalendarAttendeePartStat',
  description: '',
  values: {
      "NEEDS_ACTION": {
          value: 0,
          description: '',
      },
      "ACCEPTED": {
        value: 1,
        description: '',
      },
      "DECLINED": {
        value: 2,
        description: '',
      },
      "TENTATIVE": {
        value: 3,
        description: '',
      },
      "DELEGATED": {
        value: 4,
        description: '',
      }
  },
}); 
const iCalendarClassEnum = new GraphQLEnumType({
  name: 'iCalendarClass',
  description: '',
  values: {
      "PUBLIC": {
          value: 0,
          description: '',
      },
      "PRIVATE": {
        value: 1,
        description: '',
      },
      "CONFIDENTIAL": {
        value: 2,
        description: '',
      }
  },
}); 
const iCalendarStatusEnum = new GraphQLEnumType({
  name: 'iCalendarStatus',
  description: '',
  values: {
      "TENTATIVE": {
          value: 0,
          description: 'Indicates event is tentative',
      },
      "CONFIRMED": {
        value: 1,
        description: 'Indicates event is definite',
      },
      "CANCELLED": {
        value: 2,
        description: 'Indicates event is cancelled',
      }
  },
}); 
const iCalendarTranspEnum = new GraphQLEnumType({
  name: 'iCalendarTransp',
  description: '',
  values: {
      "OPAQUE": {
          value: 0,
          description: 'Blocks or opaque on busy time searches',
      },
      "TRANSPARENT": {
        value: 1,
        description: 'Transparent on busy time searches',
      }
  },
}); 
const iCalendarRecurrFreqEnum = new GraphQLEnumType({
  name: 'iCalendarRecurrFreq',
  description: '',
  values: {
      "SECONDLY": {
          value: 0,
          description: '',
      },
      "MINUTELY": {
        value: 1,
        description: '',
      },
      "HOURLY": {
        value: 2,
        description: '',
      },
      "DAILY": {
        value: 3,
        description: '',
      },
      "WEEKLY": {
        value: 4,
        description: '',
      },
      "MONTHLY": {
        value: 5,
        description: '',
      },
      "YEARLY": {
        value: 6,
        description: '',
      }
  },
}); 
const iCalendarRecurrWkstEnum = new GraphQLEnumType({
  name: 'iCalendarRecurrWkst',
  description: '',
  values: {
      "SU": {
          value: 0,
          description: 'Sunday',
      },
      "MO": {
        value: 1,
        description: 'Monday',
      },
      "TU": {
        value: 2,
        description: 'Tuesday',
      },
      "WE": {
        value: 3,
        description: 'Wednesday',
      },
      "TH": {
        value: 4,
        description: 'Thursday',
      },
      "FR": {
        value: 5,
        description: 'Friday',
      },
      "SA": {
        value: 6,
        description: 'Saturday',
      }
  },
}); 
const prifinaProjectAppTypeEnum = new GraphQLEnumType({
  name: 'prifinaProjectAppTypeEnum',
  description: 'Types of an App',
  values: {
      "Private": {
          value: 0,
          description: 'Apps that run privately for you, using data from your personal cloud',
      },
      "Profile": {
        value: 1,
        description: 'Apps that run on third-party servers personalize your experience with data profiles (using the iFrame communication interface).',
      },
      "Multi_user": {
        value: 2,
        description: 'Apps that run privately between multiple authorized personal clouds, where data remain in everyone\'s own cloud',
      },
      "Remote": {
        value: 3,
        description: 'Apps that primarily run on third-party servers with two-way API connection to your personal cloud.',
      },
      "Public": {
        value: 4,
        description: 'Apps that run on your public URL, using data from your private cloud, ',
      }
  },
})
const prifinaProjectWidgetTypeEnum = new GraphQLEnumType({
  name: 'prifinaProjectWidgetTypeEnum',
  description: 'Types of a Widget',
  values: {
      "Private": {
          value: 0,
          description: 'Small apps running privately from your personal cloud inside a display app container using primarily personal data.',
      },
      "Multi_user": {
        value: 1,
        description: 'Small Apps that run privately between multiple authorized personal clouds, where your content stays on your cloud.',
      },
      "Remote": {
        value: 2,
        description: 'Small apps that run privately from your personal cloud inside a display app container using primarily public API data.',
      },
      "Public": {
        value: 3,
        description: 'Small apps that run publicly from your personal cloud inside a public display app container. ',
      }
  },
})
const prifinaProjectStatusEnum = new GraphQLEnumType({
  name: 'prifinaProjectStatusEnum',
  description: '',
  values: {
      "first": {
          value: 0,
          description: 'first version',
      },
      "ready": {
        value: 1,
        description: 'ready for publishing',
      },
      "submitted": {
        value: 2,
        description: 'submitted to publishing',
      },
      "review": {
        value: 3,
        description: 'in review',
      },
      "clarifications": {
        value: 4,
        description: 'clarifications needed',
      },
      "published": {
        value: 5,
        description: 'published',
      },
      "update": {
        value: 6,
        description: 'version update',
      }
  },
})


/**************************************************************************
  OBJECTS
**************************************************************************/

const TiffType = new GraphQLObjectType({
    name: 'Tiff',
    description: 'This represents the TIFF metadata of a media file',
    fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLInt) },
      ImageWidth: {
        type: GraphQLInt,
        description: "The number of columns of image data, equal to the number of pixels per row. In JPEG compressed data, this tag shall not be used because a JPEG marker is used instead of it."
      },
      ImageLength: {
        type: GraphQLInt,
        description: "The number of rows of image data. In JPEG compressed data, this tag shall not be used because a JPEG marker is used instead of it."
      },
      BitsPerSample: {
        type: new GraphQLList(GraphQLInt),
        description: "The number of bits per image component. In this standard each component of the image is 8 bits, so the value for this tag is 8. See also SamplesPerPixel. In JPEG compressed data, this tag shall not be used because a JPEG marker is used instead of it."
      },
      Compression: {
        type: tiffCompressionEnum,
        description: "The compression scheme used for the image data. When a primary image is JPEG compressed, this designation is not necessary. So, this tag shall not be recorded. When thumbnails use JPEG compression, this tag value is set to 6."
      },
      PhotometricInterpretation: {
        type: tiffPhotometricInterpretationEnum,
        description: "The pixel composition. In JPEG compressed data, this tag shall not be used because a JPEG marker is used instead of it."
      },
      Orientation: {
        type: tiffOrientationEnum,
        description: "The image orientation viewed in terms of rows and columns."
      },
      SamplesPerPixel: {
        type: GraphQLInt,
        description: "The number of components per pixel. Since this standard applies to RGB and YCbCr images, the value set for this tag is 3. In JPEG compressed data, this tag shall not be used because a JPEG marker is used instead of it."
      },
      PlanarConfiguration: {
        type: tiffPlanarConfigurationEnum,
        description: "Indicates whether pixel components are recorded in chunky or planar format. In JPEG compressed data, this tag shall not be used because a JPEG marker is used instead of it. If this field does not exist, the TIFF default of 1 (chunky) is assumed."
      },
      YCbCrSubSampling: {
        type: tiffYCbCrSubSamplingEnum,
        description: "The sampling ratio of chrominance components in relation to the luminance component. In JPEG compressed data a JPEG marker is used instead of this tag. So, this tag shall not be recorded"
      },
      YCbCrPositioning: {
        type: tiffYCbCrPositioningEnum,
        description: "The position of chrominance components in relation to the luminance component. This field is designated only for JPEG compressed data or uncompressed YCbCr data. The TIFF default is 1 (centered); but when Y:Cb:Cr = 4:2:2 it is recommended in this standard that 2 (co-sited) be used to record data, in order to improve the image quality when viewed on TV systems. When this field does not exist, the reader shall assume the TIFF default. In the case of Y:Cb:Cr = 4:2:0, the TIFF default (centered) is recommended. If the Exif/DCF reader does not have the capability of supporting both kinds of YCbCrPositioning, it shall follow the TIFF default regardless of the value in this field. It is preferable that readers can support both centered and co-sited positioning"
      },
      XResolution: {
        type: GraphQLFloat,
        description: "The number of pixels per ResolutionUnit in the ImageWidth direction. When the image resolution is unknown, 72 [dpi] shall be designated"
      },
      YResolution: {
        type: GraphQLFloat,
        description: "The number of pixels per ResolutionUnit in the ImageLength direction. The same value as XResolution shall be designated"
      },
      ResolutionUnit: {
        type: tiffResolutionUnitEnum,
        description: ""
      },
      StripOffsets: {
        type: new GraphQLList(GraphQLInt),
        description: "For each strip, the byte offset of that strip. It is recommended that this be selected so the number of strip bytes does not exceed 64 KBytes.In the case of JPEG compressed data, this designation is not necessary,. So, this tag shall not be recorded. See also RowsPerStrip and StripByteCounts"
      },
      RowsPerStrip: {
        type: GraphQLInt,
        description: "The number of rows per strip. This is the number of rows in the image of one strip when an image is divided into strips.In the case of JPEG compressed data, this designation is not necessary. So, this tag shall not be recorded. See also RowsPerStrip and StripByteCounts."
      },
      StripByteCounts: {
        type: new GraphQLList(GraphQLInt),
        description: "The total number of bytes in each strip. In the case of JPEG compressed data,, this designation is not necessary. So, this tag shall not be recorded."
      },
      JPEGInterchangeFormat: {
        type: GraphQLInt,
        description: "The offset to the start byte (SOI) of JPEG compressed thumbnail data. This shall not be used for primary image JPEG data."
      },
      JPEGInterchangeFormatLength: {
        type: GraphQLInt,
        description: "The number of bytes of JPEG compressed thumbnail data. This is not used for primary image JPEG data. JPEG thumbnails are not divided but are recorded as a continuous JPEG bitstream from SOI to EOI. APPn and COM markers should not be recorded. Compressed thumbnails shall be recorded in no more than 64 KBytes, including all other data to be recorded in APP1."
      },
      TransferFunction: {
        type: new GraphQLList(GraphQLInt),
        description: "A transfer function for the image, described in tabular style. Normally this tag need not be used , since color space is specified in the color space information tag (ColorSpace)."
      },
      WhitePoint: {
        type: new GraphQLList(GraphQLFloat),
        description: "The chromaticity of the white point of the image. Normally this tag need not be used, since color space is specified in the color space information tag (ColorSpace)."
      },
      PrimaryChromaticities: {
        type: new GraphQLList(GraphQLFloat),
        description: "The chromaticity of the three primary colors of the image. Normally this tag need not be used, since color space is specified in the color space information tag (ColorSpace). Count: 6"
      },
      YCbCrCoefficients: {
        type: new GraphQLList(GraphQLFloat),
        description: "The matrix coefficients for transformation from RGB to YCbCr image data. No default is given in TIFF; Count: 3"
      },
      ReferenceBlackWhite: {
        type: new GraphQLList(GraphQLFloat),
        description: "The reference black point value and reference white point value. No defaults are given in TIFF, but the values below are given as defaults here. The color space is declared in a color space information tag, with the default being the value that gives the optimal image characteristics Interoperability these conditions."
      },
      DateTime: {
        type: GraphQLString,
        description: "The date and time of image creation. In this standard it is the date and time the file was changed. The format is 'YYYY:MM:DD HH:MM:SS' with time shown in 24-hour format, and the date and time separated by one blank character [20.H]. When the date and time are unknown, all the character spaces except colons (\':\') should be filled with blank characters, or else the Interoperability field should be filled with blank characters. The character string length is 20 Bytes including NULL for termination. When the field is left blank, it is treated as unknown."
      },
      ImageDescription: {
        type: GraphQLString,
        description: "A character string giving the title of the image. It is possible to be added a comment such as '1988 company picnic' or the like. Two-byte character codes cannot be used. When a 2-byte code is necessary, the Exif Private tag UserComment is to be used."
      },
      Make: {
        type: GraphQLString,
        description: "A character string giving the title of the image. It is possible to be added a comment such as '1988 company picnic' or the like. Two-byte character codes cannot be used. When a 2-byte code is necessary, the Exif Private tag UserComment is to be used."
      },
      Model: {
        type: GraphQLString,
        description: "The model name or model number of the equipment. This is the model name of number of the DSC, scanner, video digitizer or other equipment that generated the image. When the field is left blank, it is treated as unknown."
      },
      Software: {
        type: GraphQLString,
        description: "This tag records the name and version of the software or firmware of the camera or image input device used to generate the image. The detailed format is not specified, but it is recommended that the example shown below be followed. When the field is left blank, it is treated as unknown. Ex.) 'Exif Software Version 1.00a'"
      },
      Artist: {
        type: GraphQLString,
        description: "This tag records the name of the camera owner, photographer or image creator. The detailed format is not specified, but it is recommended that the information be written as in the example below for ease of Interoperability. When the field is left blank, it is treated as unknown."
      },
      Copyright: {
        type: GraphQLString,
        description: "In this standard the field records both the photographer and editor copyrights, with each recorded in a separate part of the statement. When there is a clear distinction between the photographer and editor copyrights, these are to be written in the order of photographer followed by editor copyright, separated by NULL (in this case, since the statement also ends with a NULL, there are two NULL codes) (see example 1). When only the photographer copyright is given, it is terminated by one NULL code (see example 2). When only the editor copyright is given, the photographer copyright part consists of one space followed by a terminating NULL code, then the editor copyright is given (see example 3). When the field is left blank, it is treated as unknown. Ex 1) When both the photographer copyright and editor copyright are given 'Photographer copyright + NULL[00.H] + editor copyright + NULL[00.H]' Ex 2) When only the photographer copyright is given 'Photographer copyright + NULL[00.H]' Ex 3) When only the editor copyright is given'Space[20.H]+ NULL[00.H] + editor copyright + NULL[00.H]'"
      },
      Exif: {
        type: ExifType,
        description: ""
      },
      GPS: {
        type: GPSType,
        description: ""
      },
    })
  })

const ExifType = new GraphQLObjectType({
  name: 'Exif',
    description: 'This represents the EXIF metadata of a media file',
    fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLInt) },
      ExifVersion: {
        type: GraphQLString,
        description: "The version of this standard supported. Nonexistence of this field is taken to mean nonconformance to the standard (see section 4.2). In according with conformance to this standard, this tag shall be recorded like '0230' as 4-byte ASCII. Since the type is UNDEFINED, it shall not be terminated with NULL"
      },
      FlashpixVersion: {
        type: GraphQLString,
        description: "The Flashpix format version supported by a FPXR file. If the FPXR function supports Flashpix format Ver. 1.0, this is indicated similarly to ExifVersion by recording '0100' as 4-byte ASCII. Since the type is UNDEFINED, it shall not be terminated with NULL"
      },
      ColorSpace: {
        type: GraphQLInt,
        description: "The color space information tag (ColorSpace) is always recorded as the color space specifier. Normally sRGB (=1) is used to define the color space based on the PC monitor conditions and environment. If a color space other than sRGB is used, Uncalibrated (=FFFF.H) is set. Image data recorded as Uncalibrated may be treated as sRGB when it is converted to Flashpix."
      },
      Gamma: {
        type: GraphQLFloat,
        description: "Indicates the value of coefficient gamma. The formula of transfer function used for image reproduction is expressed as follows. (Reproduced value) = (Input value) gamma Both reproduced value and input value indicate normalized value, whose minimum value is 0 and maximum value is 1."
      },
      PixelXDimension: {
        type: GraphQLInt,
        description: "Information specific to compressed data. When a compressed file is recorded, the valid width of the meaningful image shall be recorded in this tag, whether or not there is padding data or a restart marker. This tag shall not exist in an uncompressed file"
      },
      PixelYDimension: {
        type: GraphQLInt,
        description: "Information specific to compressed data. When a compressed file is recorded, the valid height of the meaningful image shall be recorded in this tag, whether or not there is padding data or a restart marker. This tag shall not exist in an uncompressed file. For details see section 4.8.1 and Annex F. Since data padding is unnecessary in the vertical direction, the number of lines recorded in this valid image height tag will in fact be the same as that recorded in the SOF"
      },
      ComponentsConfiguration: {
        type: GraphQLInt,
        description: "Information specific to compressed data. The channels of each component are arranged in order from the 1st component to the 4th. For uncompressed data the data arrangement is given in the PhotometricInterpretation tag. However, since PhotometricInterpretation can only express the order of Y,Cb and Cr, this tag is provided for cases when compressed data uses components other than Y, Cb, and Cr and to enable support of other sequences."
      },
      CompressedBitsPerPixel: {
        type: GraphQLFloat,
        description: "Information specific to compressed data. The compression mode used for a compressed image is indicated in unit bits per pixel."
      },
      MakerNote: {
        type: new GraphQLList(GraphQLString),
        description: "A tag for manufacturers of Exif/DCF writers to record any desired information. The contents are up to the manufacturer, but this tag shall not be used for any other than its intended purpose."
      },
      UserComment: {
        type: GraphQLString,
        description: "A tag for Exif users to write keywords or comments on the image besides those in ImageDescription, and without the character code limitations of the ImageDescription tag."
      },
      RelatedSoundFile: {
        type: GraphQLString,
        description: "This tag is used to record the name of an audio file related to the image data. The only relational information recorded here is the Exif audio file name and extension (an ASCII string consisting of 8 characters + '.' + 3 characters). The path is not recorded."
      },
      DateTimeOriginal: {
        type: GraphQLString,
        description: "The date and time when the original image data was generated. For a DSC the date and time the picture was taken are recorded. The format is \"YYYY:MM:DD HH:MM:SS\" with time shown in 24-hour format, and the date and time separated by one blank character [20.H]. When the date and time are unknown, all the character spaces except colons (\":\") should be filled with blank characters, or else the Interoperability field should be filled with blank characters. The character string length is 20 Bytes including NULL for termination. When the field is left blank, it is treated as unknown."
      },
      DateTimeDigitized: {
        type: GraphQLString,
        description: "The date and time when the image was stored as digital data. If, for example, an image was captured by DSC and at the same time the file was recorded, then the DateTimeOriginal and DateTimeDigitized will have the same contents. The format is \"YYYY:MM:DD HH:MM:SS\" with time shown in 24-hour format, and the date and time separated by one blank character [20.H]. When the date and time are unknown, all the character spaces except colons (\":\")should be filled with blank characters, or else the Interoperability field should be filled with blank characters. The character string length is 20 Bytes including NULL for termination. When the field is left blank, it is treated as unknown"
      },
      SubsecTime: {
        type: GraphQLString,
        description: "A tag used to record fractions of seconds for the DateTime tag"
      },
      SubsecTimeOriginal: {
        type: GraphQLString,
        description: "A tag used to record fractions of seconds for the DateTimeOriginal tag."
      },
      ExposureTime: {
        type: GraphQLFloat,
        description: "Exposure time, given in seconds (sec)."
      },
      FNumber: {
        type: GraphQLFloat,
        description: "The F number"
      },
      ExposureProgram: {
        type: exifExposureProgramEnum,
        description: "The class of the program used by the camera to set exposure when the picture is taken. The tag values are as follows."
      },
      SpectralSensitivity: {
        type: GraphQLString,
        description: "Indicates the spectral sensitivity of each channel of the camera used. The tag value is an ASCII string compatible with the standard developed by the ASTM Technical committee"
      },
      PhotographicSensitivity: {
        type: GraphQLInt,
        description: "This tag indicates the sensitivity of the camera or input device when the image was shot. More specifically, it indicates one of the following values that are parameters defined in ISO 12232: standard output sensitivity (SOS), recommended exposure index (REI), or ISO speed. Accordingly, if a tag corresponding to a parameter that is designated by a SensitivityType tag is recorded, the values of the tag and of this PhotographicSensitivity tag are the same. However, if the value is 65535 (the maximum value of SHORT) or higher, the value of this tag shall be 65535. When recording this tag, the SensitivityType tag should also be recorded. In addition, while “Count = Any”, only 1 count should be used when recording this tag"
      },
      OECF: {
        type: GraphQLInt,
        description: "Indicates the Opto-Electric Conversion Function (OECF) specified in ISO 14524. OECF is the relationship between the camera optical input and the image values"
      },
      SensitivityType: {
        type: exifSensitivityTypeEnum,
        description: "The SensitivityType tag indicates which one of the parameters of ISO12232 is the PhotographicSensitivity tag. Although it is an optional tag, it should be recorded when a PhotographicSensitivity tag is recorded. Value = 4, 5, 6, or 7 may be used in case that the values of plural parameters are the same."
      },
      StandardOutputSensitivity: {
        type: GraphQLInt,
        description: "This tag indicates the standard output sensitivity value of a camera or input device defined in ISO 12232. When recording this tag, the PhotographicSensitivity and SensitivityType tags shall also be recorded."
      },
      RecommendedExposureIndex: {
        type: GraphQLInt,
        description: "This tag indicates the recommended exposure index value of a camera or input device defined in ISO 12232. When recording this tag, the PhotographicSensitivity and SensitivityType tags shall also be recorded"
      },
      ISOSpeed: {
        type: GraphQLInt,
        description: "This tag indicates the ISO speed value of a camera or input device that is defined in ISO 12232. When recording this tag, the PhotographicSensitivity and SensitivityType tags shall also be recorded."
      },
      ISOSpeedLatitudeyyy: {
        type: GraphQLInt,
        description: "This tag indicates the ISO speed latitude yyy value of a camera or input device that is defined in ISO 12232. However, this tag shall not be recorded without ISOSpeed and ISOSpeedLatitudezzz"
      },
      ISOSpeedLatitudezzz: {
        type: GraphQLInt,
        description: "This tag indicates the ISO speed latitude zzz value of a camera or input device that is defined in ISO 12232. However, this tag shall not be recorded without ISOSpeed and ISOSpeedLatitudeyyy."
      },
      ShutterSpeedValue: {
        type: GraphQLFloat,
        description: "Shutter speed. The unit is the APEX (Additive System of Photographic Exposure) setting"
      },
      ApertureValue: {
        type: GraphQLFloat,
        description: "The lens aperture"
      },
      BrightnessValue: {
        type: GraphQLFloat,
        description: "The value of brightness. The unit is the APEX value. Ordinarily it is given in the range of -99.99 to 99.99. Note that if the numerator of the recorded value is FFFFFFFF.H, Unknown shall be indicated"
      },
      ExposureBiasValue: {
        type: GraphQLFloat,
        description: "The exposure bias. The unit is the APEX value. Ordinarily it is given in the range of -99.99 to 99.99."
      },
      MaxApertureValue: {
        type: GraphQLFloat,
        description: "The smallest F number of the lens. The unit is the APEX value. Ordinarily it is given in the range of 00.00 to 99.99, but it is not limited to this range."
      },
      SubjectDistance: {
        type: GraphQLFloat,
        description: "The distance to the subject, given in meters. Note that if the numerator of the recorded value is FFFFFFFF.H, Infinity shall be indicated; and if the numerator is 0, Distance unknown shall be indicated."
      },
      MeteringMode: {
        type: exifMeteringModeEnum,
        description: "The metering mode."
      },
      LightSource: {
        type: exifLightSourceEnum,
        description: "The kind of light source."
      },
      Flash: {
        type: exifFlashObj,
        description: "This tag indicates the status of flash when the image was shot. Bit 0 indicates the flash firing status, bits 1 and 2 indicate the flash return status, bits 3 and 4 indicate the flash mode, bit 5 indicates whether the flash function is present, and bit 6 indicates \"red eye\" mode"
      },
      SubjectArea: {
        type: new GraphQLList(GraphQLInt),
        description: "This tag indicates the location and area of the main subject in the overall scene. Count between 2 and 4"
      },
      FocalLength: {
        type: GraphQLFloat,
        description: "The actual focal length of the lens, in mm. Conversion is not made to the focal length of a 35 mm film camera"
      },
      FlashEnergy: {
        type: GraphQLFloat,
        description: "Indicates the strobe energy at the time the image is captured, as measured in Beam Candle Power Seconds (BCPS)."
      },
      SpatialFrequencyResponse: {
        type: new GraphQLList(GraphQLInt),
        description: "This tag records the camera or input device spatial frequency table and SFR values in the direction of image width, image height, and diagonal direction, as specified in ISO 12233."
      },
      FocalPlaneXResolution: {
        type: GraphQLFloat,
        description: "Indicates the number of pixels in the image width (X) direction per FocalPlaneResolutionUnit on the camera focal plane"
      },
      FocalPlaneYResolution: {
        type: GraphQLFloat,
        description: "Indicates the number of pixels in the image height (Y) direction per FocalPlaneResolutionUnit on the camera focal plane"
      },
      FocalPlaneResolutionUnit: {
        type: tiffResolutionUnitEnum,
        description: "Indicates the unit for measuring FocalPlaneXResolution and FocalPlaneYResolution. This value is the same as the ResolutionUnit"
      },
      SubjectLocation: {
        type: GraphQLInt,
        description: "Indicates the location of the main subject in the scene. The value of this tag represents the pixel at the center of the main subject relative to the left edge, prior to rotation processing as per the Rotation tag."
      },
      ExposureIndex: {
        type: GraphQLFloat,
        description: "Indicates the exposure index selected on the camera or input device at the time the image is captured"
      },
      SensingMethod: {
        type: exifSensingMethodEnum,
        description: "Indicates the image sensor type on the camera or input device"
      },
      FileSource: {
        type: exifFileSourceEnum,
        description: "Indicates the image source. If a DSC recorded the image, this tag value always shall be set to 3."
      },
      SceneType: {
        type: exifSceneTypeEnum,
        description: "Indicates the type of scene. If a DSC recorded the image, this tag value shall always be set to 1, indicating that the image was directly photographed."
      },
      CFAPattern: {
        type: new GraphQLList(GraphQLInt),
        description: "Indicates the color filter array (CFA) geometric pattern of the image sensor when a one-chip color area sensor is used. It does not apply to all sensing methods"
      },
      CustomRendered: {
        type: exifCustomRenderedEnum,
        description: "This tag indicates the use of special processing on image data, such as rendering geared to output. When special processing is performed, the Exif/DCF reader is expected to disable or minimize any further processing"
      },
      ExposureMode: {
        type: exifExposureModeEnum,
        description: "This tag indicates the exposure mode set when the image was shot. In auto-bracketing mode, the camera shoots a series of frames of the same scene at different exposure settings"
      },
      WhiteBalance: {
        type: exifWhiteBalanceEnum,
        description: "This tag indicates the white balance mode set when the image was shot"
      },
      DigitalZoomRatio: {
        type: GraphQLFloat,
        description: "This tag indicates the digital zoom ratio when the image was shot. If the numerator of the recorded value is 0, this indicates that digital zoom was not used."
      },
      FocalLengthIn35mmFilm: {
        type: GraphQLInt,
        description: "This tag indicates the equivalent focal length assuming a 35mm film camera, in mm. A value of 0 means the focal length is unknown. Note that this tag differs from the FocalLength tag."
      },
      SceneCaptureType: {
        type: exifSceneCaptureTypeEnum,
        description: "This tag indicates the type of scene that was shot. It may also be used to record the mode in which the image was shot. Note that this differs from the scene type (SceneType) tag"
      },
      GainControl: {
        type: exifGainControlEnum,
        description: "This tag indicates the degree of overall image gain adjustment"
      },
      Contrast: {
        type: exifContrastEnum,
        description: "This tag indicates the direction of contrast processing applied by the camera when the image was shot."
      },
      Saturation: {
        type: exifSaturationEnum,
        description: "This tag indicates the direction of saturation processing applied by the camera when the image was shot"
      },
      Sharpness: {
        type: exifSharpnessEnum,
        description: "This tag indicates the direction of sharpness processing applied by the camera when the image was shot."
      },
      DeviceSettingDescription: {
        type: new GraphQLList(GraphQLString),
        description: "This tag indicates information on the picture-taking conditions of a particular camera model. The tag is used only to indicate the picture-taking conditions in the Exif/DCF reader."
      },
      SubjectDistanceRange: {
        type: exifSubjectDistanceRangeEnum,
        description: "This tag indicates the distance to the subject"
      },
      ImageUniqueID: {
        type: GraphQLString,
        description: "This tag indicates an identifier assigned uniquely to each image. It is recorded as an ASCII string equivalent to hexadecimal notation and 128-bit fixed length"
      },
      CameraOwnerName: {
        type: GraphQLString,
        description: "This tag records the owner of a camera used in photography as an ASCII string"
      },
      BodySerialNumber: {
        type: GraphQLString,
        description: "This tag records the serial number of the body of the camera that was used in photography as an ASCII string."
      },
      LensSpecification: {
        type: new GraphQLList(GraphQLFloat),
        description: "This tag notes minimum focal length, maximum focal length, minimum F number in the minimum focal length, and minimum F number in the maximum focal length, which are specification information for the lens that was used in photography. When the minimum F number is unknown, the notation is 0/0. Count: 4"
      },
      LensMake: {
        type: GraphQLString,
        description: "This tag records the lens manufacturer as an ASCII string"
      },
      LensModel: {
        type: GraphQLString,
        description: "This tag records the lens’s model name and model number as an ASCII string"
      },
      LensSerialNumber: {
        type: GraphQLString,
        description: "This tag records the serial number of the interchangeable lens that was used in photography as an ASCII string"
      },
    })
})

const exifFlashObj = new GraphQLObjectType({
  name: 'Flash',
  description: 'This tag indicates the status of flash when the image was shot. Bit 0 indicates the flash firing status, bits 1 and 2 indicate the flash return status, bits 3 and 4 indicate the flash mode, bit 5 indicates whether the flash function is present, and bit 6 indicates \"red eye\" mode',
  fields: () => ({
    Fired: {
      type: GraphQLBoolean,
      description: "indicating whether the flash fired"
    },
    LightStatus: {
      type: exifFlashLightStatusEnum,
      description: "indicating the status of returned light"
    },
    Mode: {
      type: exifFlashLightModeEnum,
      description: "indicating the camera's flash mode"
    },
    Function: {
      type: GraphQLBoolean,
      description: "indicating the presence of a flash function"
    },
    RedEye: {
      type: GraphQLBoolean,
      description: "indicating the camera's red-eye mode"
    },
  })
})

const GPSType = new GraphQLObjectType({
  name: 'GPS',
  description: 'This represents the GPS metadata of a media file',
  fields: () => ({
    GPSVersionID: {
      type: GraphQLString,
      description: "Indicates the version of GPSInfoIFD. The version is given as 2.3.0.0. This tag is mandatory when GPSInfo tag is present. Note that the GPSVersionID tag is written as a different byte than the Exif Version tag"
    },
    GPSLatitudeRef: {
      type: GPSLatitudeRefEnum,
      description: "Indicates whether the latitude is north or south latitude. The ASCII value 'N' indicates north latitude, and 'S' is south latitude"
    },
    GPSLatitude: {
      type: GraphQLFloat,
      description: "Indicates the latitude. The latitude is expressed as three RATIONAL values giving the degrees, minutes, and seconds, respectively. If latitude is expressed as degrees, minutes and seconds, a typical format would be dd/1,mm/1,ss/1. When degrees and minutes are used and, for example, fractions of minutes are given up to two decimal places, the format would be dd/1,mmmm/100,0/1."
    },
    GPSLongitudeRef: {
      type: GPSLongitudeRefEnum,
      description: "Indicates whether the longitude is east or west longitude. ASCII 'E' indicates east longitude, and 'W' is west longitude."
    },
    GPSLongitude: {
      type: GraphQLFloat,
      description: "Indicates the longitude. The longitude is expressed as three RATIONAL values giving the degrees, minutes, and seconds, respectively. If longitude is expressed as degrees, minutes and seconds, a typical format would be ddd/1,mm/1,ss/1. When degrees and minutes are used and, for example, fractions of minutes are given up to two decimal places, the format would be ddd/1,mmmm/100,0/1."
    },
    GPSAltitudeRef: {
      type: GPSAltitudeRefEnum,
      description: "Indicates the altitude used as the reference altitude. If the reference is sea level and the altitude is above sea level, 0 is given. If the altitude is below sea level, a value of 1 is given and the altitude is indicated as an absolute value in the GPSAltitude tag. The reference unit is meters. Note that this tag is BYTE type, unlike other reference tags."
    },
    GPSAltitude: {
      type: GraphQLFloat,
      description: "Indicates the altitude based on the reference in GPSAltitudeRef. Altitude is expressed as one RATIONAL value. The reference unit is meters."
    },
    GPSTimeStamp: {
      type: new GraphQLList(GraphQLFloat),
      description: "Indicates the time as UTC (Coordinated Universal Time). TimeStamp is expressed as three RATIONAL values giving the hour, minute, and second."
    },
    GPSSatellites: {
      type: GraphQLString,
      description: "Indicates the GPS satellites used for measurements. This tag may be used to describe the number of satellites, their ID number, angle of elevation, azimuth, SNR and other information in ASCII notation. The format is not specified. If the GPS receiver is incapable of taking measurements, value of the tag shall be set to NULL."
    },
    GPSStatus: {
      type: GPSStatusEnum,
      description: "Indicates the status of the GPS receiver when the image is recorded. 'A' means measurement is in progress, and 'V' means the measurement is interrupted."
    },
    GPSMeasureMode: {
      type: GPSMeasureModeEnum,
      description: "Indicates the GPS measurement mode. '2' means two-dimensional measurement and '3' means three-dimensional measurement is in progress. Originally it was defined for GPS, but it may be used for recording a measure mode to record the position information provided from a mobile base station or wireless LAN as well as GPS."
    },
    GPSDOP: {
      type: GraphQLFloat,
      description: "Indicates the GPS DOP (data degree of precision). An HDOP value is written during two-dimensional measurement, and PDOP during three-dimensional measurement."
    },
    GPSSpeedRef: {
      type: new GraphQLList(GPSSpeedRefEnum),
      description: "Indicates the unit used to express the GPS receiver speed of movement. 'K' 'M' and 'N' represents kilometers per hour, miles per hour, and knots."
    },
    GPSSpeed: {
      type: GraphQLFloat,
      description: "Indicates the speed of GPS receiver movement."
    },
    GPSTrackRef: {
      type: GPSTrackRefEnum,
      description: "Indicates the reference for giving the direction of GPS receiver movement. 'T' denotes true direction and 'M' is magnetic direction."
    },
    GPSTrack: {
      type: GraphQLFloat,
      description: "Indicates the direction of GPS receiver movement. The range of values is from 0.00 to 359.99."
    },
    GPSImgDirectionRef: {
      type: GPSImgDirectionRefEnum,
      description: "Indicates the reference for giving the direction of the image when it is captured. 'T' denotes true direction and 'M' is magnetic direction."
    },
    GPSImgDirection: {
      type: GraphQLFloat,
      description: "Indicates the direction of the image when it was captured. The range of values is from 0.00 to 359.99."
    },
    GPSMapDatum: {
      type: GraphQLString,
      description: "Indicates the geodetic survey data used by the GPS receiver. If the survey data is restricted to Japan,the value of this tag is 'TOKYO' or 'WGS-84'. If a GPS Info tag is recorded, it is strongly recommended that this tag be recorded."
    },
    GPSDestLatitudeRef: {
      type: GPSDestLatitudeRefEnum,
      description: "Indicates whether the latitude of the destination point is north or south latitude. The ASCII value 'N' indicates north latitude, and 'S' is south latitude."
    },
    GPSDestLatitude: {
      type: GraphQLFloat,
      description: "Indicates the latitude of the destination point. The latitude is expressed as three RATIONAL values giving the degrees, minutes, and seconds, respectively. If latitude is expressed as degrees, minutes and seconds, a typical format would be dd/1,mm/1,ss/1. When degrees and minutes are used and, for example, fractions of minutes are given up to two decimal places, the format would be dd/1, mmmm/100, 0/1."
    },
    GPSDestLongitudeRef: {
      type: GPSDestLongitudeRefEnum,
      description: "Indicates whether the longitude of the destination point is east or west longitude. ASCII 'E' indicates east longitude, and 'W' is west longitude."
    },
    GPSDestLongitude: {
      type: new GraphQLList(GraphQLFloat),
      description: "Indicates the longitude of the destination point. The longitude is expressed as three RATIONAL values giving the degrees, minutes, and seconds, respectively. If longitude is expressed as degrees, minutes and seconds, a typical format would be ddd/1, mm/1, ss/1. When degrees and minutes are used and, for example, fractions of minutes are given up to two decimal places, the format would be ddd/1, mmmm/100, 0/1."
    },
    GPSDestBearingRef: {
      type: GPSDestBearingRefEnum,
      description: "Indicates the reference used for giving the bearing to the destination point. 'T' denotes true direction and 'M' is magnetic direction."
    },
    GPSDestBearing: {
      type: GraphQLFloat,
      description: "Indicates the bearing to the destination point. The range of values is from 0.00 to 359.99."
    },
    GPSDestDistanceRef: {
      type: GPSDestDistanceRefEnum,
      description: "Indicates the unit used to express the distance to the destination point. 'K', 'M' and 'N' represent kilometers, miles and nautical miles."
    },
    GPSDestDistance: {
      type: GraphQLFloat,
      description: "Indicates the distance to the destination point."
    },
    GPSProcessingMethod: {
      type: new GraphQLList(GraphQLString),
      description: "A character string recording the name of the method used for location finding. The first byte indicates the character code used and this is followed by the name of the method. Since the Type is not ASCII, NULL termination is not necessary."
    },
    GPSAreaInformation: {
      type: new GraphQLList(GraphQLString),
      description: "A character string recording the name of the GPS area. The first byte indicates the character code used, and this is followed by the name of the GPS area. Since the Type is not ASCII, NULL termination is not necessary."
    },
    GPSDateStamp: {
      type: new GraphQLList(GraphQLString),
      description: "A character string recording date and time information relative to UTC (Coordinated Universal Time). The format is \"YYYY:MM:DD.\" The length of the string is 11 Bytes including NULL."
    },
    GPSDifferential: {
      type: GPSDifferentialEnum,
      description: "Indicates whether differential correction is applied to the GPS receiver."
    },
    GPSHPositioningError: {
      type: GraphQLFloat,
      description: "This tag indicates horizontal positioning errors in meters."
    },
  })
})


const iCalendarType = new GraphQLObjectType({
  name: 'iCalendar',
  description: 'This represents a the data of a Calendar',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    events: {
      type: new GraphQLList(vEventType),
      description: ""
    },
    todos: {
      type: new GraphQLList(vTodoType),
      description: ""
    },
    journals: {
      type: new GraphQLList(vJournalType),
      description: ""
    },
    freeBusys: {
      type: new GraphQLList(vFreeBusyType),
      description: ""
    },
    timezones: {
      type: new GraphQLList(vTimezoneType),
      description: ""
    },
    calendar: {
      type: vCalendarType,
      description: ""
    },
  })
})

const vEventType = new GraphQLObjectType({
  name: 'vEvent',
  description: 'Provide a grouping of component properties that describe an event.',
  fields: () => ({
    alarmc: {
      type: vAlarmcType,
      description: "vAlarm Calendar Component"
    },
    class: {
      type: iCalendarClassEnum,
      description: "This property defines the access classification for a calendar component."
    },
    created: {
      type: GraphQLString,
      description: "This property specifies the date and time that the calendar information was created by the calendar user agent in the calendar store. Note: This is analogous to the creation date and time for a file in the file system."
    },
    description: {
      type: GraphQLString,
      description: "This property provides a more complete description of the calendar component, than that provided by the \"SUMMARY\" property."
    },
    dtstart: {
      type: GraphQLString,
      description: "This property specifies when the calendar component begins."
    },
    geo: {
      type: new GraphQLList(GraphQLFloat),
      description: "This property specifies information related to the global position for the activity specified by a calendar component."
    },
    last_mod: {
      type: GraphQLString,
      description: "The property specifies the date and time that the information associated with the calendar component was last revised in the calendar store. Note: This is analogous to the modification date and time for a file in the file system."
    },
    location: {
      type: iCalendarLocationType,
      description: "The property defines the intended venue for the activity defined by a calendar component."
    },
    organizer: {
      type: iCalendarOrganizerType,
      description: "The property defines the organizer for a calendar component."
    },
    priority: {
      type: GraphQLInt,
      description: "The property defines the relative priority for a calendar component. Range: 0-9"
    },
    dtstamp: {
      type: GraphQLString,
      description: "The property indicates the date/time that the instance of the iCalendar object was created."
    },
    seq: {
      type: GraphQLInt,
      description: "This property defines the revision sequence number of the calendar component within a sequence of revisions."
    },
    status: {
      type: iCalendarStatusEnum,
      description: "This property defines the overall status or confirmation for the calendar component"
    },
    summary: {
      type: GraphQLString,
      description: "This property defines a short summary or subject for the calendar component."
    },
    transp: {
      type: iCalendarTranspEnum,
      description: "This property defines whether an event is transparent or not to busy time searches."
    },
    uid: {
      type: GraphQLString,
      description: "This property defines the persistent, globally unique identifier for the calendar component."
    },
    url: {
      type: GraphQLString,
      description: "This property defines a Uniform Resource Locator (URL) associated with the iCalendar object."
    },
    recurid: {
      type: iCalendarRecurIDType,
      description: "This property is used in conjunction with the \"UID\" and \"SEQUENCE\" property to identify a specific instance of a recurring \"VEVENT\", \"VTODO\" or \"VJOURNAL\" calendar component. The property value is the effective value of the \"DTSTART\" property of the recurrence instance."
    },
    dtend: {
      type: GraphQLString,
      description: "This property specifies the date and time that a calendar component ends."
    },
    duration: {
      type: GraphQLString,
      description: "The property specifies a positive duration of time. Example: PT1H0M0S"
    },
    attach: {
      type: iCalendarAttachType,
      description: "The property provides the capability to associate a document object with a calendar component."
    },
    attendee: {
      type: new GraphQLList(iCalendarAttendeeType),
      description: "The property defines an \"Attendee\" within a calendar component."
    },
    categories: {
      type: new GraphQLList(GraphQLString),
      description: "This property defines the categories for a calendar component."
    },
    comment: {
      type: GraphQLString,
      description: "This property specifies non-processing information intended to provide a comment to the calendar user."
    },
    contact: {
      type: GraphQLString,
      description: "The property is used to represent contact information or alternately a reference to contact information associated with the calendar component."
    },
    exdate: {
      type: new GraphQLList(GraphQLString),
      description: "This property defines the list of date/time exceptions for a recurring calendar component."
    },
    exrule: {
      type: iCalendarRecurrType,
      description: "This property defines a rule or repeating pattern for an exception to a recurrence set."
    },
    rstatus: {
      type: iCalendarRequestStatusType,
      description: "This property defines the status code returned for a scheduling request."
    },
    related: {
      type: GraphQLString,
      description: "The property is used to represent a relationship or reference between one calendar component and another."
    },
    resources: {
      type: GraphQLString,
      description: "This property defines the equipment or resources anticipated for an activity specified by a calendar entity."
    },
    rdate: {
      type: GraphQLString,
      description: "This property defines the list of DATE-TIME values for recurring events, to-dos, journal entries, or time zone definitions."
    },
    rrule: {
      type: iCalendarRecurrType,
      description: "This property defines a rule or repeating pattern for recurring events, to-dos, or time zone definitions"
    },
  })
})
const vTodoType = new GraphQLObjectType({
  name: 'vTodo',
  description: 'Provide a grouping of calendar properties that describe a to-do.',
  fields: () => ({
    alarmc: {
      type: vAlarmcType,
      description: "vAlarm Calendar Component"
    },
    class: {
      type: iCalendarClassEnum,
      description: "This property defines the access classification for a calendar component."
    },
    completed: {
      type: GraphQLString,
      description: "This property defines the date and time that a to-do was actually completed."
    },
    created: {
      type: GraphQLString,
      description: "This property specifies the date and time that the calendar information was created by the calendar user agent in the calendar store. Note: This is analogous to the creation date and time for a file in the file system."
    },
    description: {
      type: GraphQLString,
      description: "This property provides a more complete description of the calendar component, than that provided by the \"SUMMARY\" property."
    },
    dtstamp: {
      type: GraphQLString,
      description: "The property indicates the date/time that the instance of the iCalendar object was created."
    },
    geo: {
      type: new GraphQLList(GraphQLFloat),
      description: "This property specifies information related to the global position for the activity specified by a calendar component."
    },
    last_mod: {
      type: GraphQLString,
      description: "The property specifies the date and time that the information associated with the calendar component was last revised in the calendar store. Note: This is analogous to the modification date and time for a file in the file system."
    },
    location: {
      type: iCalendarLocationType,
      description: "The property defines the intended venue for the activity defined by a calendar component."
    },
    organizer: {
      type: iCalendarOrganizerType,
      description: "The property defines the organizer for a calendar component."
    },
    percent: {
      type: GraphQLInt,
      description: "This property is used by an assignee or delegatee of a to-do to convey the percent completion of a to-do to the Organizer."
    },
    priority: {
      type: GraphQLInt,
      description: "The property defines the relative priority for a calendar component. Range: 0-9"
    },
    recurid: {
      type: iCalendarRecurIDType,
      description: "This property is used in conjunction with the \"UID\" and \"SEQUENCE\" property to identify a specific instance of a recurring \"VEVENT\", \"VTODO\" or \"VJOURNAL\" calendar component. The property value is the effective value of the \"DTSTART\" property of the recurrence instance."
    },
    seq: {
      type: GraphQLInt,
      description: "This property defines the revision sequence number of the calendar component within a sequence of revisions."
    },
    status: {
      type: iCalendarStatusEnum,
      description: "This property defines the overall status or confirmation for the calendar component"
    },
    summary: {
      type: GraphQLString,
      description: "This property defines a short summary or subject for the calendar component."
    },
    uid: {
      type: GraphQLString,
      description: "This property defines the persistent, globally unique identifier for the calendar component."
    },
    url: {
      type: GraphQLString,
      description: "This property defines a Uniform Resource Locator (URL) associated with the iCalendar object."
    },
    due: {
      type: GraphQLString,
      description: "This property defines the date and time that a to-do is expected to be completed."
    },
    duration: {
      type: GraphQLString,
      description: "The property specifies a positive duration of time. Example: PT1H0M0S"
    },
    attach: {
      type: iCalendarAttachType,
      description: "The property provides the capability to associate a document object with a calendar component."
    },
    attendee: {
      type: new GraphQLList(iCalendarAttendeeType),
      description: "The property defines an \"Attendee\" within a calendar component."
    },
    categories: {
      type: new GraphQLList(GraphQLString),
      description: "This property defines the categories for a calendar component."
    },
    comment: {
      type: GraphQLString,
      description: "This property specifies non-processing information intended to provide a comment to the calendar user."
    },
    contact: {
      type: GraphQLString,
      description: "The property is used to represent contact information or alternately a reference to contact information associated with the calendar component."
    },
    exdate: {
      type: new GraphQLList(GraphQLString),
      description: "This property defines the list of date/time exceptions for a recurring calendar component."
    },
    exrule: {
      type: iCalendarRecurrType,
      description: "This property defines a rule or repeating pattern for an exception to a recurrence set."
    },
    rstatus: {
      type: iCalendarRequestStatusType,
      description: "This property defines the status code returned for a scheduling request."
    },
    related: {
      type: GraphQLString,
      description: "The property is used to represent a relationship or reference between one calendar component and another."
    },
    resources: {
      type: GraphQLString,
      description: "This property defines the equipment or resources anticipated for an activity specified by a calendar entity."
    },
    rdate: {
      type: GraphQLString,
      description: "This property defines the list of DATE-TIME values for recurring events, to-dos, journal entries, or time zone definitions."
    },
    rrule: {
      type: iCalendarRecurrType,
      description: "This property defines a rule or repeating pattern for recurring events, to-dos, or time zone definitions"
    },
  })
})
const vJournalType = new GraphQLObjectType({
  name: 'vJournal',
  description: 'Provide a grouping of component properties that describe a journal entry',
  fields: () => ({
    class: {
      type: iCalendarClassEnum,
      description: "This property defines the access classification for a calendar component."
    },
    created: {
      type: GraphQLString,
      description: "This property specifies the date and time that the calendar information was created by the calendar user agent in the calendar store. Note: This is analogous to the creation date and time for a file in the file system."
    },
    description: {
      type: GraphQLString,
      description: "This property provides a more complete description of the calendar component, than that provided by the \"SUMMARY\" property."
    },
    dtstart: {
      type: GraphQLString,
      description: "This property specifies when the calendar component begins."
    },
    dtstamp: {
      type: GraphQLString,
      description: "The property indicates the date/time that the instance of the iCalendar object was created."
    },
    last_mod: {
      type: GraphQLString,
      description: "The property specifies the date and time that the information associated with the calendar component was last revised in the calendar store. Note: This is analogous to the modification date and time for a file in the file system."
    },
    organizer: {
      type: iCalendarOrganizerType,
      description: "The property defines the organizer for a calendar component."
    },
    recurid: {
      type: iCalendarRecurIDType,
      description: "This property is used in conjunction with the \"UID\" and \"SEQUENCE\" property to identify a specific instance of a recurring \"VEVENT\", \"VTODO\" or \"VJOURNAL\" calendar component. The property value is the effective value of the \"DTSTART\" property of the recurrence instance."
    },
    seq: {
      type: GraphQLInt,
      description: "This property defines the revision sequence number of the calendar component within a sequence of revisions."
    },
    status: {
      type: iCalendarStatusEnum,
      description: "This property defines the overall status or confirmation for the calendar component"
    },
    summary: {
      type: GraphQLString,
      description: "This property defines a short summary or subject for the calendar component."
    },
    uid: {
      type: GraphQLString,
      description: "This property defines the persistent, globally unique identifier for the calendar component."
    },
    url: {
      type: GraphQLString,
      description: "This property defines a Uniform Resource Locator (URL) associated with the iCalendar object."
    },
    due: {
      type: GraphQLString,
      description: "This property defines the date and time that a to-do is expected to be completed."
    },
    attach: {
      type: iCalendarAttachType,
      description: "The property provides the capability to associate a document object with a calendar component."
    },
    attendee: {
      type: new GraphQLList(iCalendarAttendeeType),
      description: "The property defines an \"Attendee\" within a calendar component."
    },
    categories: {
      type: new GraphQLList(GraphQLString),
      description: "This property defines the categories for a calendar component."
    },
    comment: {
      type: GraphQLString,
      description: "This property specifies non-processing information intended to provide a comment to the calendar user."
    },
    contact: {
      type: GraphQLString,
      description: "The property is used to represent contact information or alternately a reference to contact information associated with the calendar component."
    },
    exdate: {
      type: new GraphQLList(GraphQLString),
      description: "This property defines the list of date/time exceptions for a recurring calendar component."
    },
    exrule: {
      type: iCalendarRecurrType,
      description: "This property defines a rule or repeating pattern for an exception to a recurrence set."
    },
    related: {
      type: GraphQLString,
      description: "The property is used to represent a relationship or reference between one calendar component and another."
    },
    rdate: {
      type: GraphQLString,
      description: "This property defines the list of DATE-TIME values for recurring events, to-dos, journal entries, or time zone definitions."
    },
    rrule: {
      type: iCalendarRecurrType,
      description: "This property defines a rule or repeating pattern for recurring events, to-dos, or time zone definitions"
    },
    rstatus: {
      type: iCalendarRequestStatusType,
      description: "This property defines the status code returned for a scheduling request."
    },
  })
})
const vFreeBusyType = new GraphQLObjectType({
  name: 'vFreeBusy',
  description: 'Provide a grouping of component properties that describe either a request for free/busy time, describe a response to a request for free/busy time or describe a published set of busy time.',
  fields: () => ({
    contact: {
      type: GraphQLString,
      description: "The property is used to represent contact information or alternately a reference to contact information associated with the calendar component."
    },
    dtstart: {
      type: GraphQLString,
      description: "This property specifies when the calendar component begins."
    },
    dtend: {
      type: GraphQLString,
      description: "This property specifies the date and time that a calendar component ends."
    },
    duration: {
      type: GraphQLString,
      description: "The property specifies a positive duration of time. Example: PT1H0M0S"
    },
    dtstamp: {
      type: GraphQLString,
      description: "The property indicates the date/time that the instance of the iCalendar object was created."
    },
    organizer: {
      type: iCalendarOrganizerType,
      description: "The property defines the organizer for a calendar component."
    },
    uid: {
      type: GraphQLString,
      description: "This property defines the persistent, globally unique identifier for the calendar component."
    },
    url: {
      type: GraphQLString,
      description: "This property defines a Uniform Resource Locator (URL) associated with the iCalendar object."
    },
    attendee: {
      type: new GraphQLList(iCalendarAttendeeType),
      description: "The property defines an \"Attendee\" within a calendar component."
    },
    comment: {
      type: GraphQLString,
      description: "This property specifies non-processing information intended to provide a comment to the calendar user."
    },
    freebusy: {
      type: iCalendarFreeBusyType,
      description: "The property defines one or more free or busy time intervals."
    },
    rstatus: {
      type: iCalendarRequestStatusType,
      description: "This property defines the status code returned for a scheduling request."
    },
  })
})
const vTimezoneType = new GraphQLObjectType({
  name: 'vTimezone',
  description: 'Provide a grouping of component properties that defines a time zone',
  fields: () => ({
    tzid: {
      type: GraphQLString,
      description: "This property specifies the text value that uniquely identifies the \"VTIMEZONE\" calendar component."
    },
    last_mod: {
      type: GraphQLString,
      description: "The property specifies the date and time that the information associated with the calendar component was last revised in the calendar store. Note: This is analogous to the modification date and time for a file in the file system."
    },
    tzurl: {
      type: GraphQLString,
      description: "The TZURL provides a means for a VTIMEZONE component to point to a network location that can be used to retrieve an up-to- date version of itself."
    },
    timezone: {
      type: new GraphQLList(iCalendarTimezoneType),
      description: "The TZURL provides a means for a VTIMEZONE component to point to a network location that can be used to retrieve an up-to- date version of itself."
    },
  })
})
const vCalendarType = new GraphQLObjectType({
  name: 'vCalendar',
  description: 'Provide a grouping of component properties that defines a calendar',
  fields: () => ({
    prodid: {
      type: GraphQLString,
      description: "This property specifies the identifier for the product that created the iCalendar object."
    },
    version: {
      type: GraphQLString,
      description: "This property specifies the identifier corresponding to the highest version number or the minimum and maximum range of the iCalendar specification that is required in order to interpret the iCalendar object."
    },
    calscale: {
      type: GraphQLString,
      description: "This property defines the calendar scale used for the calendar information specified in the iCalendar object."
    },
    method: {
      type: new GraphQLList(iCalendarTimezoneType),
      description: "This property defines the iCalendar object method associated with the calendar object."
    },
  })
})


const vAlarmcType = new GraphQLObjectType({
  name: 'vAlarm',
  description: 'Provide a grouping of component properties that define an alarm.',
  fields: () => ({
    audioprop: {
      type: new GraphQLObjectType({
        name: 'audioprop',
        description: 'Provide a grouping of component properties that define an alarm.',
        fields: () => ({
          action: {
            type: vAlarmcActionEnum,
            description: "This property defines the action to be invoked when an alarm is triggered."
          },
          trigger: {
            type: GraphQLString,
            description: "This property specifies when an alarm will trigger."
          },
          duration: {
            type: GraphQLString,
            description: "The property specifies a positive duration of time. Example: PT1H0M0S"
          },
          repeat: {
            type: GraphQLInt,
            description: "This property defines the number of time the alarm should be repeated, after the initial trigger."
          },
          attach: {
            type: iCalendarAttachType,
            description: "The property provides the capability to associate a document object with a calendar component."
          }
        })
      }),
      description: ""
    },
    dispprop: {
      type: new GraphQLObjectType({
        name: 'dispprop',
        description: 'Provide a grouping of component properties that define an alarm.',
        fields: () => ({
          action: {
            type: vAlarmcActionEnum,
            description: "This property defines the action to be invoked when an alarm is triggered."
          },
          description: {
            type: GraphQLString,
            description: "This property provides a more complete description of the calendar component, than that provided by the \"SUMMARY\" property."
          },
          trigger: {
            type: GraphQLString,
            description: "This property specifies when an alarm will trigger."
          },
          duration: {
            type: GraphQLString,
            description: "The property specifies a positive duration of time. Example: PT1H0M0S"
          },
          repeat: {
            type: GraphQLInt,
            description: "This property defines the number of time the alarm should be repeated, after the initial trigger."
          },
        })
      }),
      description: ""
    },
    emailprop: {
      type: new GraphQLObjectType({
        name: 'emailprop',
        description: 'Provide a grouping of component properties that define an alarm.',
        fields: () => ({
          action: {
            type: vAlarmcActionEnum,
            description: "This property defines the action to be invoked when an alarm is triggered."
          },
          description: {
            type: GraphQLString,
            description: "This property provides a more complete description of the calendar component, than that provided by the \"SUMMARY\" property."
          },
          trigger: {
            type: GraphQLString,
            description: "This property specifies when an alarm will trigger."
          },
          summary: {
            type: GraphQLString,
            description: "This property defines a short summary or subject for the calendar component."
          },
          attendee: {
            type: new GraphQLList(iCalendarAttendeeType),
            description: "The property defines an \"Attendee\" within a calendar component."
          },
          duration: {
            type: GraphQLString,
            description: "The property specifies a positive duration of time. Example: PT1H0M0S"
          },
          repeat: {
            type: GraphQLInt,
            description: "This property defines the number of time the alarm should be repeated, after the initial trigger."
          },
        })
      }),
      description: ""
    },
    procprop: {
      type: new GraphQLObjectType({
        name: 'procprop',
        description: 'Provide a grouping of component properties that define an alarm.',
        fields: () => ({
          action: {
            type: vAlarmcActionEnum,
            description: "This property defines the action to be invoked when an alarm is triggered."
          },
          attach: {
            type: iCalendarAttachType,
            description: "The property provides the capability to associate a document object with a calendar component."
          },
          trigger: {
            type: GraphQLString,
            description: "This property specifies when an alarm will trigger."
          },
          duration: {
            type: GraphQLString,
            description: "The property specifies a positive duration of time. Example: PT1H0M0S"
          },
          repeat: {
            type: GraphQLInt,
            description: "This property defines the number of time the alarm should be repeated, after the initial trigger."
          },
          description: {
            type: GraphQLString,
            description: "This property provides a more complete description of the calendar component, than that provided by the \"SUMMARY\" property."
          },
        })
      }),
      description: ""
    },
  })
})

const iCalendarAttachType =   new GraphQLObjectType({
  name: 'iCalendarAttach',
  description: 'This represents an attachment connected to a iCalendar component',
  fields: () => ({
    fmttype: {
      type: GraphQLString,
      description: "To specify the content type of a referenced object."
    },
    value: {
      type: GraphQLString,
      description: ""
    },
  })
})

const iCalendarAttendeeType =   new GraphQLObjectType({
  name: 'iCalendarAttendee',
  description: 'This represents an attendee connected to a iCalendar component',
  fields: () => ({
    cutype: {
      type: iCalendarAttendeeCutypeEnum,
      description: "to indicate the type of calendar user"
    },
    member: {
      type: GraphQLString,
      description: "to indicate the groups that the attendee belongs to"
    },
    role: {
      type: iCalendarAttendeeRoleEnum,
      description: "for the intended role that the attendee will have in the calendar component"
    },
    partstat: {
      type: iCalendarAttendeePartStatEnum,
      description: "for the status of the attendee's participation"
    },
    rsvp: {
      type: GraphQLBoolean,
      description: "for the status of the attendee's participation"
    },
    delto: {
      type: GraphQLString,
      description: "to indicate the calendar users that the original request was delegated to"
    },
    delfrom: {
      type: GraphQLString,
      description: "to indicate whom the request was delegated from"
    },
    sentby: {
      type: GraphQLString,
      description: "to indicate whom is acting on behalf of the ATTENDEE"
    },
    cn: {
      type: GraphQLString,
      description: "the common or displayable name associated with the calendar address"
    },
    dir: {
      type: GraphQLString,
      description: "to indicate the URI that points to the directory information corresponding to the attendee"
    },
    language: {
      type: GraphQLString,
      description: "If the LANGUAGE property parameter is specified, the identified language applies to the CN parameter."
    },
    mailto: {
      type: GraphQLString,
      description: ""
    },
  })
})

const iCalendarLocationType =   new GraphQLObjectType({
  name: 'iCalendarLocation',
  description: 'This represents a location connected to a iCalendar component',
  fields: () => ({
    altrep: {
      type: GraphQLString,
      description: "An alternate representation may be specified that is a URI that points to directory information with more structured specification of the location"
    },
    value: {
      type: GraphQLString,
      description: "Specific venues such as conference or meeting rooms may be explicitly specified using this property"
    },
  })
})

const iCalendarOrganizerType =   new GraphQLObjectType({
  name: 'iCalendarOrganizer',
  description: 'This represents the organizer(s) connected to a iCalendar component',
  fields: () => ({
    sentby: {
      type: GraphQLString,
      description: "specifying another calendar user that is acting on behalf of the \"Organizer\""
    },
    cn: {
      type: GraphQLString,
      description: "Specifying the common or display name associated with the \"Organizer\""
    },
    dir: {
      type: GraphQLString,
      description: "specifying a pointer to the directory information associated with the \"Organizer\""
    },
    language: {
      type: GraphQLString,
      description: "If the LANGUAGE property parameter is specified, the identified language applies to the CN parameter."
    },
    mailto: {
      type: GraphQLString,
      description: "Specific venues such as conference or meeting rooms may be explicitly specified using this property"
    },
  })
})
const iCalendarRecurIDType =   new GraphQLObjectType({
  name: 'iCalendarRecurID',
  description: 'identify a specific instance of a recurring iCalendar component',
  fields: () => ({
    tzid: {
      type: GraphQLString,
      description: "Time zone identifier"
    },
    THISANDPRIOR: {
      type: GraphQLString,
      description: "indicate a range defined by the given recurrence instance and all prior instances"
    },
    dir: {
      type: GraphQLString,
      description: "specifying a pointer to the directory information associated with the \"Organizer\""
    },
    THISANDFUTURE: {
      type: GraphQLString,
      description: "indicate a range defined by the given recurrence instance and all subsequent instances"
    }
  })
})
const iCalendarRecurrType =   new GraphQLObjectType({
  name: 'iCalendarRecurr',
  description: 'This value type is used to identify properties that contain a recurrence rule specification',
  fields: () => ({
    freq: {
      type: iCalendarRecurrFreqEnum,
      description: "The FREQ rule part identifies the type of recurrence rule"
    },
    until: {
      type: GraphQLString,
      description: "defines a date-time value which bounds the recurrence rule in an inclusive manner"
    },
    count: {
      type: GraphQLInt,
      description: "defines the number of occurrences at which to range-bound the recurrence. Range: 0-9"
    },
    interval: {
      type: GraphQLInt,
      description: "contains a positive integer representing how often the recurrence rule repeats. Range: 0-9"
    },
    bySecond: {
      type: new GraphQLList(GraphQLInt),
      description: "specifies a COMMA character (US-ASCII decimal 44) separated list of seconds within a minute. Valid values are 0 to 59"
    },
    byMinute: {
      type: new GraphQLList(GraphQLInt),
      description: "specifies a COMMA character (US-ASCII decimal 44) separated list of minutes within an hour. Valid values are 0 to 59"
    },
    byHour: {
      type: new GraphQLList(GraphQLInt),
      description: "specifies a COMMA character (US- ASCII decimal 44) separated list of hours of the day. Valid values are 0 to 23"
    },
    byDay: {
      type: GraphQLString,
      description: "specifies a COMMA character (US-ASCII decimal 44) separated list of days of the week. Example:BYDAY=-1SU"
    },
    byMonthDay: {
      type: new GraphQLList(GraphQLInt),
      description: "specifies a COMMA character (ASCII decimal 44) separated list of days of the month. Valid values are 1 to 31 or -31 to -1."
    },
    byYearDay: {
      type: new GraphQLList(GraphQLInt),
      description: "specifies a COMMA character (US-ASCII decimal 44) separated list of days of the year. Valid values are 1 to 366 or -366 to -1"
    },
    byWeekNo: {
      type: new GraphQLList(GraphQLInt),
      description: "specifies a COMMA character (US-ASCII decimal 44) separated list of ordinals specifying weeks of the year. Valid values are 1 to 53 or -53 to -1."
    },
    byMonth: {
      type: new GraphQLList(GraphQLInt),
      description: "specifies a COMMA character (US-ASCII decimal 44) separated list of months of the year. Valid values are 1 to 12."
    },
    bySetPos: {
      type: new GraphQLList(GraphQLInt),
      description: "specifies a COMMA character (US-ASCII decimal 44) separated list of values which corresponds to the nth occurrence within the set of events specified by the rule. Valid values are 1 to 366 or -366 to -1."
    },
    wkst: {
      type: iCalendarRecurrWkstEnum,
      description: "specifies the day on which the workweek starts"
    },
  })
})
const iCalendarRequestStatusType =   new GraphQLObjectType({
  name: 'iCalendarRequestStatus',
  description: 'identify a specific instance of a recurring iCalendar component',
  fields: () => ({
    value: {
      type: GraphQLFloat,
      description: "1.xx\nPreliminary success.  This class of status code indicates that the request has been initially processed but that completion is pending.\n2.xx\nSuccessful.  This class of status code indicates that the request was completed successfully.  However, the exact status code can indicate that a fallback has been taken.\n3.xx\nClient Error.  This class of status code indicates that the request was not successful.  The error is the result of either a syntax or a semantic error in the client-formatted request.  Request should not be retried until the condition in the request is corrected.\n4.xx\nScheduling Error.  This class of status code indicates that the request was not successful.  Some sort of error occurred within the calendaring and scheduling service, not directly related to the request itself."
    },
    desc: {
      type: GraphQLString,
      description: ""
    }
  })
})
const iCalendarFreeBusyType =   new GraphQLObjectType({
  name: 'iCalendarFreeBusy',
  description: 'identify a free busy time interval of a iCalendar component',
  fields: () => ({
    fbtype: {
      type: new GraphQLEnumType({
        name: 'fbtype',
        description: '',
        values: {
            "FREE": {
                value: 0,
                description: 'indicates that the time interval is free for scheduling',
            },
            "BUSY": {
              value: 1,
              description: 'indicates that the time interval is busy because one or more events have been scheduled for that interval',
            },
            "BUSY_UNAVAILABLE": {
              value: 2,
              description: 'indicates that the time interval is busy and that the interval can not be scheduled',
            },
            "BUSY_TENTATIVE": {
              value: 3,
              description: 'indicates that the time interval is busy because one or more events have been tentatively scheduled for that interval',
            }
        },
      }),
      description: "To specify the free or busy time type."
    },
    value: {
      type: GraphQLString,
      description: ""
    }
  })
})
const iCalendarTimezoneType =   new GraphQLObjectType({
  name: 'iCalendarTimezone',
  description: 'identify a timezone of a iCalendar component',
  fields: () => ({
    type: {
      type: new GraphQLEnumType({
        name: 'type',
        description: '',
        values: {
            "STANDARD": {
                value: 0,
                description: '',
            },
            "DAYLIGHT": {
              value: 1,
              description: '',
            }
        },
      }),
      description: ""
    },
    dtstart: {
      type: GraphQLString,
      description: "This property specifies when the calendar component begins."
    },
    tzoffsetto: {
      type: GraphQLString,
      description: "This property specifies the offset which is in use in this time zone observance."
    },
    tzoffsetfrom: {
      type: GraphQLString,
      description: "This property specifies the offset which is in use prior to this time zone observance."
    },
    comment: {
      type: GraphQLString,
      description: "This property specifies non-processing information intended to provide a comment to the calendar user."
    },
    rdate: {
      type: GraphQLString,
      description: "This property defines the list of DATE-TIME values for recurring events, to-dos, journal entries, or time zone definitions."
    },
    rrule: {
      type: iCalendarRecurrType,
      description: "This property defines a rule or repeating pattern for recurring events, to-dos, or time zone definitions"
    },
    tzname: {
      type: GraphQLString,
      description: "This property specifies the customary designation for a time zone description."
    },
  })
})
const contactType =   new GraphQLObjectType({
  name: 'contact',
  description: '',
  fields: () => ({
    contactType: {
      type: new GraphQLEnumType({
        name: 'contactType',
        description: '',
        values: {
            "person": {
                value: 0,
                description: '',
            },
            "organization": {
              value: 1,
              description: '',
            }
        },
      }),
      description: "An enum identifying the contact type."
    },
    namePrefix: {
      type: GraphQLString,
      description: "The name prefix of the contact"
    },
    givenName: {
      type: GraphQLString,
      description: "The given name of the contact."
    },
    middleName: {
      type: GraphQLString,
      description: "The middle name of the contact."
    },
    familyName: {
      type: GraphQLString,
      description: "The family name of the contact"
    },
    previousFamilyName: {
      type: GraphQLString,
      description: "A string for the previous family name of the contact."
    },
    nameSuffix: {
      type: GraphQLString,
      description: "The name suffix of the contact."
    },
    nickname: {
      type: GraphQLString,
      description: "The nickname of the contact."
    },
    phoneticGivenName: {
      type: GraphQLString,
      description: "The phonetic given name of the contact."
    },
    phoneticMiddleName: {
      type: GraphQLString,
      description: "The phonetic middle name of the contact."
    },
    phoneticFamilyName: {
      type: GraphQLString,
      description: "A string for the phonetic family name of the contact."
    },
    jobTitle: {
      type: GraphQLString,
      description: "The contact’s job title."
    },
    departmentName: {
      type: GraphQLString,
      description: "The name of the department associated with the contact"
    },
    organizationName: {
      type: GraphQLString,
      description: "The name of the organization associated with the contact"
    },
    phoneticOrganizationName: {
      type: GraphQLString,
      description: "The phonetic name of the organization associated with the contact"
    },
    postalAddresses: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'LabeledAddress',
        description: '',
        fields: () => ({
          label: {
            type: GraphQLString,
            description: "The label for a contact property value"
          },
          value: {
            type: new GraphQLObjectType({
              name: 'PostalAddress',
              description: '',
              fields: () => ({
                street: {
                  type: GraphQLString,
                  description: "The street name in a postal address"
                },
                city: {
                  type: GraphQLString,
                  description: "The city name in a postal address"
                },
                state: {
                  type: GraphQLString,
                  description: "The state name in a postal address"
                },
                postalCode: {
                  type: GraphQLString,
                  description: "The state name in a postal address"
                },
                country: {
                  type: GraphQLString,
                  description: "The country or region name in a postal address"
                },
                isoCountryCode: {
                  type: GraphQLString,
                  description: "The ISO country code for the country or region in a postal address, using the ISO 3166-1 alpha-2 standard"
                },
                subAdministrativeArea: {
                  type: GraphQLString,
                  description: "The subadministrative area (such as a county or other region) in a postal address"
                },
                subLocality: {
                  type: GraphQLString,
                  description: "Additional information associated with the location, typically defined at the city or town level, in a postal address"
                },
              })
            }),
            description: "A contact property value"
          },
        })
      })),
      description: "An array of labeled postal addresses for a contact."
    },
    emailAddresses: {
      type: new GraphQLList(contactLabeledStringType),
      description: "An array of labeled email addresses for the contact"
    },
    urlAddresses: {
      type: new GraphQLList(contactLabeledStringType),
      description: "An array of labeled URL addresses for a contact"
    },
    phoneNumbers: {
      type: new GraphQLList(contactLabeledStringType),
      description: "An array of labeled phone numbers for a contact"
    },
    socialProfiles: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'LabeledSocialProfile',
        description: '',
        fields: () => ({
          label: {
            type: GraphQLString,
            description: "The label for a contact property value"
          },
          value: {
            type: new GraphQLObjectType({
              name: 'SocialProfile',
              description: '',
              fields: () => ({
                username: {
                  type: GraphQLString,
                  description: "The user name for the social profile"
                },
                service: {
                  type: GraphQLString,
                  description: "The social profile’s service name"
                },
                urlString: {
                  type: GraphQLString,
                  description: "The URL associated with the social profile"
                },
                userIdentifier: {
                  type: GraphQLString,
                  description: "The service’s user identifier associated with the social profile"
                }
              })
            }),
            description: "A contact property value"
          },
        })
      })),
      description: "An array of labeled social profiles for a contact"
    },
    birthday: {
      type: GraphQLString,
      description: "A date component for the Gregorian birthday of the contact"
    },
    dates: {
      type: new GraphQLList(contactLabeledStringType),
      description: "A date component for the Gregorian birthday of the contact"
    },
    note: {
      type: GraphQLString,
      description: "A string containing notes for the contact."
    },
    imageData: {
      type: GraphQLString,
      description: "The profile picture of a contact."
    },
    thumbnailImageData: {
      type: GraphQLString,
      description: "The thumbnail version of the contact’s profile picture."
    },
    imageDataAvailable: {
      type: GraphQLBoolean,
      description: "A Boolean indicating whether a contact has a profile picture."
    },
    contactRelations: {
      type: new GraphQLList(contactLabeledStringType),
      description: "An array of labeled contact relations for the contact."
    },
    instantMessageAddresses: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'LabeledIMA',
        description: '',
        fields: () => ({
          label: {
            type: GraphQLString,
            description: "The label for a contact property value"
          },
          value: {
            type: new GraphQLObjectType({
              name: 'InstantMessageAddress',
              description: '',
              fields: () => ({
                service: {
                  type: GraphQLString,
                  description: "The social profile’s service name"
                },
                username: {
                  type: GraphQLString,
                  description: "The user name for the social profile"
                }
              })
            }),
            description: "A contact property value"
          },
        })
      })),
      description: "An array of labeled IM addresses for the contact."
    },
  })
})

const contactLabeledStringType = new GraphQLObjectType({
  name: 'LabeledString',
  description: '',
  fields: () => ({
    label: {
      type: GraphQLString,
      description: "The label for a contact property value"
    },
    value: {
      type: GraphQLString,
      description: "A contact property value"
    },
  })
})

const individualType = new GraphQLObjectType({
  name: 'individual',
  description: '',
  fields: () => ({
    prifinaID: { type: new GraphQLNonNull(GraphQLInt) },
    credentials: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'PrifinaCredential',
        description: '',
        fields: () => ({
          username: {
            type: GraphQLString,
            description: ""
          },
          accessRoleGroup: {
            type: new GraphQLEnumType({
              name: 'prifinaAccessRoleGroup',
              description: '',
              values: {
                  "user": {
                      value: 0,
                      description: '',
                  },
                  "developer": {
                    value: 1,
                    description: '',
                  },
                  "prifina": {
                    value: 2,
                    description: '',
                  },
                  "external": {
                    value: 3,
                    description: '3rd party/partner',
                  }
              },
            }),
            description: ""
          },
          verifiedContacts: {
            type:   new GraphQLObjectType({
              name: 'verifiedContacts',
              description: '',
              fields: () => ({
                trustedDevice: {
                  type: new GraphQLList(new GraphQLObjectType({
                    name: 'trustedDevice',
                    description: '',
                    fields: () => ({
                      cookie: {
                        type: GraphQLString,
                        description: ""
                      },
                      uuid: {
                        type: GraphQLString,
                        description: ""
                      },
                      ip: {
                        type: GraphQLString,
                        description: ""
                      },
                    })
                  })),
                  description: ""
                },
                email: {
                  type: new GraphQLList(prifinaEmailType),
                  description: ""
                },
                phoneNum: {
                  type: new GraphQLList(prifinaPhoneNumType),
                  description: ""
                },
              })
            }),
            description: ""
          },
        })
      })),
      description: ""
    },
    systemProfile: {
      type: new GraphQLObjectType({
        name: 'systemProfile',
        description: '',
        fields: () => ({
          name: {
            type: GraphQLString,
            description: ""
          },
          givenName: {
            type: GraphQLString,
            description: ""
          },
          middleName: {
            type: GraphQLString,
            description: ""
          },
          familyName: {
            type: GraphQLString,
            description: ""
          },
          gender: {
            type: GraphQLString,
            description: ""
          },
          email: {
            type: new GraphQLList(prifinaEmailType),
            description: ""
          },
          phoneNum: {
            type: new GraphQLList(prifinaPhoneNumType),
            description: ""
          },
          avatarPicture: {
            type: GraphQLString,
            description: ""
          },
          address: {
            type: new GraphQLList(new GraphQLObjectType({
              name: 'prifinaAddress',
              description: '',
              fields: () => ({
                formatted: {
                  type: GraphQLString,
                  description: "Full mailing address, formatted for display or use on a mailing label. This field MAY contain multiple lines, separated by newline characters."
                },
                streetAddress: {
                  type: GraphQLString,
                  description: "Full street address component, which MAY include house number, street name, Post Office Box, and multi-line extended street address information. This field MAY contain multiple lines, separated by newline characters."
                },
                locality: {
                  type: GraphQLString,
                  description: "City or locality component."
                },
                region: {
                  type: GraphQLString,
                  description: "State, province, prefecture or region component."
                },
                postalCode: {
                  type: GraphQLString,
                  description: "Zip code or postal code component."
                },
                country: {
                  type: GraphQLString,
                  description: "Country name component."
                },
                type: {
                  type: new GraphQLEnumType({
                    name: 'prifinaAddressType',
                    description: '',
                    values: {
                        "home": {
                            value: 0,
                            description: '',
                        },
                        "work": {
                          value: 1,
                          description: '',
                        }
                    },
                  }),
                  description: ""
                },
              })
            })),
            description: ""
          },
          paymentDetails: {
            type: new GraphQLList(new GraphQLObjectType({
              name: 'prifinaPaymentDetails',
              description: '',
              fields: () => ({
                paypal: {
                  type: GraphQLString,
                  description: ""
                }
              })
            })),
            description: ""
          },
          subscriptionDetails: {
            type: new GraphQLObjectType({
              name: 'prifinaSubscriptionDetails',
              description: 'Stripe',
              fields: () => ({
                customerID: {
                  type: GraphQLString,
                  description: "Stripe"
                },
                subscriptionID: {
                  type: GraphQLString,
                  description: "Stripe"
                },
                active: {
                  type: GraphQLBoolean,
                  description: ""
                },
              })
            }),
            description: ""
          },
          credits: {
            type: GraphQLInt,
            description: ""
          },
        })
      }),
      description: ""
    },
    personProfile: {
      type: new GraphQLObjectType({
        name: 'personProfile',
        description: '',
        fields: () => ({
          name: {
            type: GraphQLString,
            description: ""
          },
          type: {
            type: new GraphQLEnumType({
              name: 'personProfileEnum',
              description: '',
              values: {
                  "Anonymous": {
                    value: 0,
                    description: 'Anonymous',
                  },
                  "Anonymous_role_specific": {
                    value: 1,
                    description: 'Anonymous role specific',
                  },
                  "General_Social": {
                    value: 2,
                    description: 'General Social',
                  },
                  "Real_Person_General_Work": {
                    value: 3,
                    description: 'Real Person General Work',
                  },
                  "Real_Person_Specific_Company_Role": {
                    value: 4,
                    description: 'Real Person Specific Company Role',
                  },
                  "Service_Specific": {
                    value: 5,
                    description: 'Service Specific',
                  }
              },
            }),
            description: ""
          },
          profileDetails: {
            type: prifinaProfileDetailsType,
            description: ""
          }
        })
      }),
      description: ""
    },
    activityData: {
      type: new GraphQLObjectType({
        name: 'ActivityData',
        description: '',
        fields: () => ({
          lastApp: {
            type: new GraphQLNonNull(GraphQLInt),
            description: "ID"
          },
          timestamp: {
            type: GraphQLString,
            description: ""
          }
        })
      }),
      description: ""
    },
    entities: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'Entity',
        description: '',
        fields: () => ({
          entityID: {
            type: prifinaEntitiesType,
            description: ""
          },
          role: {
            type: GraphQLString,
            description: ""
          }
        })
      })),
      description: ""
    },
    installedApps: {
      type: new GraphQLList(GraphQLInt),
      description: ""
    },
    installedWidgets: {
      type: new GraphQLList(GraphQLInt),
      description: ""
    },
    notifications: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'prifiinaIndividualNotifications',
        description: '',
        fields: () => ({
          notification: {
            type: prifinaNotificationType,
            description: ""
          },
          readAt: {
            type: GraphQLString,
            description: ""
          },
          status: {
            type: new GraphQLEnumType({
              name: 'prifiinaIndividualNotificationsStatusEnum',
              description: '',
              values: {
                  "RECEIVED": {
                      value: 0,
                      description: '',
                  },
                  "READ": {
                    value: 1,
                    description: '',
                  },
                  "DELETED": {
                    value: 2,
                    description: '',
                  },
              },
            }),
            description: ""
          },
        })
      })),
      description: ""
    }
  })
})

const prifinaNotificationType = new GraphQLObjectType({
  name: 'prifinaNotification',
  description: '',
  fields: () => ({
    prifinaSender: {
      type: individualType,
      description: "Sender of Notification"
    },
    prifinaReceiver: {
      type: individualType,
      description: "Receiver of Notification"
    },
    type: {
      type: new GraphQLEnumType({
        name: 'prifiinaNotificationTypeEnum',
        description: '',
        values: {
            "Dashboard": {
                value: 0,
                description: 'Dashboard',
            },
            "Profile_Cards": {
              value: 1,
              description: 'Profile Cards',
            },
            "Smart_Search": {
              value: 2,
              description: 'Smart Search',
            },
            "Data_Cloud": {
              value: 3,
              description: 'Data Cloud',
            },
            "News_Muzzler": {
              value: 4,
              description: 'News Muzzler',
            }
        },
      }),
      description: ""
    },
    notificationType: {
      type: new GraphQLEnumType({
        name: 'prifiinaNotificationTypeCategoryEnum',
        description: '',
        values: {
            "Social": {
                value: 0,
                description: 'Social',
            },
            "Settings": {
              value: 1,
              description: 'Settings',
            },
            "Billing": {
              value: 2,
              description: 'Billing',
            }
        },
      }),
      description: ""
    },
    createdAt: {
      type: GraphQLString,
      description: ""
    },
    msgBody: {
      type: GraphQLString,
      description: "JSON"
    },
    reports: {
      type: new GraphQLList(prifinaNotificationReportType),
      description: ""
    },
    important: {
      type: GraphQLBoolean,
      description: ""
    },
  })
})

const prifinaNotificationReportType = new GraphQLObjectType({
  name: 'prifinaNotificationReport',
  description: '',
  fields: () => ({
    prifinaNotificationType: {
      type: prifinaNotificationType,
      description: "Reported Notification"
    },
    prifinaReporter: {
      type: individualType,
      description: "Reporter of Notification"
    },
    reportType: {
      type: new GraphQLEnumType({
        name: 'prifiinaNotificationReportTypeEnum',
        description: '',
        values: {
            "OFFESNSIVE": {
                value: 0,
                description: '',
            },
            "MISCONDUCT": {
              value: 1,
              description: '',
            }
        },
      }),
      description: ""
    },
    reportedAt: {
      type: GraphQLString,
      description: ""
    },
    reportReason: {
      type: GraphQLString,
      description: ""
    }
  })
})

const prifinaProjectType = new GraphQLObjectType({
  name: 'prifinaProject',
  description: '',
  fields: () => ({
    appMarketListing: {
      type: prifinaAppMarketListingType,
      description: ""
    },
    appPackage: {
      type: GraphQLString,
      description: ""
    },
    appType:{
      type: prifinaProjectAppTypeUnion,
      description: ""
    },
    appSettings:{
      type: new GraphQLList(prifinaProjectSettingType),
      description: ""
    },
    assets:{
      type: new GraphQLList(GraphQLString),
      description: ""
    },
    dataTypes:{
      type: new GraphQLList(GraphQLString),
      description: ""
    },
    id:{ type: new GraphQLNonNull(GraphQLInt) },
    identity:{
      type: GraphQLString,
      description: ""
    },
    identityPool:{
      type: GraphQLString,
      description: ""
    },
    internalStatus:{
      type: prifinaProjectStatusEnum,
      description: ""
    },
    manifest:{
      type: GraphQLString,
      description: ""
    },
    nextVersion:{
      type: GraphQLString,
      description: ""
    },
    prifinaID: {
      type: individualType,
      description: ""
    },
    publishStatus: {
      type: prifinaProjectStatusEnum,
      description: ""
    },
    public:{
      type: GraphQLString,
      description: ""
    },
    remoteUrl:{
      type: new GraphQLList(GraphQLString),
      description: ""
    },
    status:{
      type: GraphQLInt,
      description: ""
    },
    sub:{
      type: GraphQLString,
      description: ""
    },
    type:{
      type: new GraphQLEnumType({
        name: 'prifiinaProjectTypeEnum',
        description: '',
        values: {
            "App": {
                value: 0,
                description: '',
            },
            "Widget": {
              value: 1,
              description: '',
            }
        },
      }),
      description: ""
    },
    visible:{
      type: GraphQLBoolean,
      description: ""
    },
    editable:{
      type: GraphQLBoolean,
      description: ""
    },
  })
})

const prifinaProjectSettingType = new GraphQLObjectType({
  name: 'prifinaProjectSetting',
  description: '',
  fields: () => ({
    field: {
      type: GraphQLString,
      description: ""
    },
    type: {
      type: GraphQLString,
      description: ""
    },
    label:{
      type: GraphQLString,
      description: ""
    },
    value:{
      type: GraphQLString,
      description: ""
    }
  })
})

const prifinaAppMarketListingType = new GraphQLObjectType({
  name: 'prifinaAppMarketListing',
  description: '',
  fields: () => ({
    age: {
      type: new GraphQLEnumType({
        name: 'prifiinaAppMarketListingAgeEnum',
        description: '',
        values: {
            "family": {
                value: 0,
                description: '3+',
            },
            "child": {
              value: 1,
              description: '7+',
            },
            "teen": {
              value: 2,
              description: '12+',
            },
            "adults": {
              value: 3,
              description: '18+',
            }
        },
      }),
      description: ""
    },
    category: {
      type: new GraphQLEnumType({
        name: 'prifiinaAppMarketListingCategoryEnum',
        description: '',
        values: {
            "Health_Fitness": {
                value: 0,
                description: 'Health & Fitness',
            },
            "Communciation": {
              value: 1,
              description: '',
            },
            "Productivity": {
              value: 2,
              description: '',
            },
            "Gaming": {
              value: 3,
              description: '',
            },
            "Weather": {
              value: 4,
              description: '',
            },
            "Other": {
              value: 5,
              description: '',
            }
        },
      }),
      description: ""
    },
    dataSources: {
      type: new GraphQLList(GraphQLString),
      description: ""
    },
    deviceSupport: {
      type: new GraphQLEnumType({
        name: 'prifiinaAppMarketListingDeviceSupportEnum',
        description: '',
        values: {
            "Desktop": {
                value: 0,
                description: '',
            }
        },
      }),
      description: ""
    },
    icon: {
      type: GraphQLString,
      description: ""
    },
    appID: {
      type: GraphQLString,
      description: ""
    },
    keyFeatures: {
      type: new GraphQLList(GraphQLString),
      description: ""
    },
    languages: {
      type: new GraphQLList(new GraphQLEnumType({
        name: 'prifiinaAppMarketListingLanguageEnum',
        description: '',
        values: {
            "en": {
                value: 0,
                description: 'English',
            }
        },
      })),
      description: ""
    },
    longDescription: {
      type: GraphQLString,
      description: ""
    },
    name: {
      type: GraphQLString,
      description: ""
    },
    public: {
      type: new GraphQLList(GraphQLString),
      description: ""
    },
    publisher: {
      type: new GraphQLList(GraphQLString),
      description: ""
    },
    screenshots: {
      type: new GraphQLList(GraphQLString),
      description: ""
    },
    settings: {
      type: new GraphQLList(prifinaProjectSettingType),
      description: ""
    },
    shortDescription: {
      type: GraphQLString,
      description: ""
    },
    title: {
      type: GraphQLString,
      description: ""
    },
    userGeneratered: {
      type: new GraphQLList(GraphQLString),
      description: ""
    },
    userHeld: {
      type: new GraphQLList(GraphQLString),
      description: ""
    },
    version: {
      type: GraphQLString,
      description: ""
    },
  })
})

const prifinaProjectAppTypeUnion = new GraphQLUnionType({
  name: 'prifinaProjectAppTypeUnion',
  types: [ new GraphQLObjectType({
    name: 'prifinaProjectAppType',
    description: '',
    fields: () => ({
      type: {
        type: prifinaProjectAppTypeEnum,
        description: ""
      }
    })}),new GraphQLObjectType({
      name: 'prifinaProjectWidgetType',
      description: '',
      fields: () => ({
        type: {
          type: prifinaProjectWidgetTypeEnum,
          description: ""
        }
      })})]
});


const prifinaGeneralSocialTemplateType = new GraphQLObjectType({
  name: 'GeneralSocialTemplate',
  description: '',
  fields: () => ({
    interests: {
      type: new GraphQLList(GraphQLString),
      description: ""
    }
  })
})
const prifinaGeneralWorkTemplateType = new GraphQLObjectType({
  name: 'GeneralWorkTemplate',
  description: '',
  fields: () => ({
    job: {
      type: GraphQLString,
      description: ""
    }
  })
})

const prifinaProfileDetailsType = new GraphQLUnionType({
  name: 'prifinaProfileDetails',
  types: [ prifinaGeneralSocialTemplateType,prifinaGeneralWorkTemplateType ]
});

const prifinaCompanyEntityType = new GraphQLObjectType({
  name: 'CompanyEntity',
  description: '',
  fields: () => ({
    entityID: {
      type:new  GraphQLNonNull(GraphQLInt),
      description: ""
    },
    name: {
      type: GraphQLString,
      description: ""
    },
    logo: {
      type: GraphQLString,
      description: ""
    },
    members: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'CompanyEntityMember',
        description: '',
        fields: () => ({
          prifinaIndividual: {
            type: individualType,
            description: ""
          },
          role: {
            type: new GraphQLEnumType({
              name: 'companyProfileRoleEnum',
              description: '',
              values: {
                  "Dev": {
                    value: 0,
                    description: 'Developer',
                  },
                  "Community_Manager": {
                    value: 1,
                    description: 'Community Manager',
                  },
                  "Marketer": {
                    value: 2,
                    description: 'Marketer',
                  },
                  "Account_Holder": {
                    value: 3,
                    description: 'Account Holder',
                  }
              },
            }),
            description: ""
          },
        })
      })),
      description: ""
    },
    projects: {
      type: new GraphQLList(prifinaProjectType),
      description: ""
    },
    
  })
})




const prifinaFamilyEntityType = new GraphQLObjectType({
  name: 'FamilyEntity',
  description: '',
  fields: () => ({
    entityID: {
      type:new GraphQLNonNull(GraphQLInt),
      description: ""
    },
    name: {
      type: GraphQLString,
      description: ""
    },
    parentalControls: {
      type: GraphQLBoolean,
      description: ""
    },
    members: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'FamilyMember',
        description: '',
        fields: () => ({
          prifinaIndividual: {
            type: individualType,
            description: ""
          },
          role: {
            type: new GraphQLEnumType({
              name: 'familyProfileRoleEnum',
              description: '',
              values: {
                  "Child": {
                    value: 0,
                    description: 'Child',
                  },
                  "YA": {
                    value: 1,
                    description: 'Young Adult',
                  },
                  "Adult": {
                    value: 2,
                    description: 'Adult',
                  }
              },
            }),
            description: ""
          },
        })
      })),
      description: ""
    }
  })
})

const prifinaCommunityEntityType = new GraphQLObjectType({
  name: 'CommunityEntity',
  description: '',
  fields: () => ({
    entityID: {
      type:new GraphQLNonNull(GraphQLInt),
      description: ""
    },
    name: {
      type: GraphQLString,
      description: ""
    },
    members: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'CommunityMember',
        description: '',
        fields: () => ({
          prifinaIndividual: {
            type: individualType,
            description: ""
          },
          role: {
            type: new GraphQLEnumType({
              name: 'communityProfileRoleEnum',
              description: '',
              values: {
                  "member": {
                    value: 0,
                    description: 'member',
                  },
                  "moderator": {
                    value: 1,
                    description: 'moderator',
                  },
                  "admin": {
                    value: 2,
                    description: 'admin',
                  }
              },
            }),
            description: ""
          },
        })
      })),
      description: ""
    }
  })
})

const prifinaEntitiesType = new GraphQLUnionType({
  name: 'prifinaEntities',
  types: [ prifinaCompanyEntityType ,prifinaFamilyEntityType, prifinaCommunityEntityType]
});



const prifinaEmailType = new GraphQLObjectType({
  name: 'prifinaEmail',
  description: '',
  fields: () => ({
    email: {
      type: GraphQLString,
      description: ""
    },
    emailVerified: {
      type: GraphQLBoolean,
      description: ""
    },
    primary: {
      type: GraphQLBoolean,
      description: ""
    },
  })
})

const prifinaPhoneNumType = new GraphQLObjectType({
  name: 'prifinaPhoneNum',
  description: '',
  fields: () => ({
    phoneNumber: {
      type: GraphQLString,
      description: ""
    },
    phoneNumberVerified: {
      type: GraphQLBoolean,
      description: ""
    },
    primary: {
      type: GraphQLBoolean,
      description: ""
    },
    type: {
      type: new GraphQLEnumType({
        name: 'prifinaPhoneNumType',
        description: '',
        values: {
            "home": {
                value: 0,
                description: '',
            },
            "work": {
              value: 1,
              description: '',
            }
        },
      }),
      description: ""
    },
  })
})

//   new GraphQLObjectType({
//   name: 'iCalendar',
//   description: 'This represents a the data of a Calendar',
//   fields: () => ({
//     id: { type: GraphQLNonNull(GraphQLInt) },
//     events: {
//       type: new GraphQLList(vEventType),
//       description: ""
//     },
//   })
// })

/**************************************************************************
  QUERY
**************************************************************************/
const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    tiff: {
      type: TiffType,
      description: 'A Single Tiff',
      args: {
        id: { type: GraphQLInt }
      },
    },
    iCalendar: {
      type: iCalendarType,
      description: 'A Single iCalendar Object',
      args: {
        id: { type: GraphQLInt }
      },
    },
    contact: {
      type: contactType,
      description: 'A Single iCalendar Object',
      args: {
        id: { type: GraphQLInt }
      },
    },
    individual: {
      type: individualType,
      description: 'A Single Prifina User',
      args: {
        id: { type: GraphQLInt }
      },
    },
    project: {
      type: prifinaProjectType,
      description: 'A Single Prifina Project',
      args: {
        id: { type: GraphQLInt }
      },
    },
  })
})
export const localSchema = new GraphQLSchema({
    query: RootQueryType
})