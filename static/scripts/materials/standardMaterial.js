const standardMaterial = new BABYLON.StandardMaterial('standardMaterial', scene)
this.getMesh().material = standardMaterial
this.getMesh().receiveShadows = true
let diffuseTexture, specularTexture, emissiveTexture, ambientTexture, bumpTexture

fields = {
    diffuseColor: {
        type: 'GROUP',
        children: {
            r: {
                type: 'NUMBER',
                get: () => standardMaterial.diffuseColor.r,
                set: val => standardMaterial.diffuseColor.r = val,
                options: { max: 1, min: 0, step: 0.1 }
            },
            g: {
                type: 'NUMBER',
                get: () => standardMaterial.diffuseColor.g,
                set: val => standardMaterial.diffuseColor.g = val,
                options: { max: 1, min: 0, step: 0.1 }
            },
            b: {
                type: 'NUMBER',
                get: () => standardMaterial.diffuseColor.b,
                set: val => standardMaterial.diffuseColor.b = val,
                options: { max: 1, min: 0, step: 0.1 }
            }
        }
    },
    diffuseTexture: {
        type: 'GROUP',
        children: {
            texture: {
                type: 'FILE',
                get: () => diffuseTexture,
                set: val => val && (standardMaterial.diffuseTexture = new BABYLON.Texture((diffuseTexture = val).data, scene))
            },
            hasAlpha: {
                type: 'BOOLEAN',
                get: () => standardMaterial.diffuseTexture && standardMaterial.diffuseTexture.hasAlpha,
                set: val => standardMaterial.diffuseTexture && (standardMaterial.diffuseTexture.hasAlpha = val)
            }
        }
    },
    specularColor: {
        type: 'GROUP',
        children: {
            r: {
                type: 'NUMBER',
                get: () => standardMaterial.specularColor.r,
                set: val => standardMaterial.specularColor.r = val,
                options: { max: 1, min: 0, step: 0.1 }
            },
            g: {
                type: 'NUMBER',
                get: () => standardMaterial.specularColor.g,
                set: val => standardMaterial.specularColor.g = val,
                options: { max: 1, min: 0, step: 0.1 }
            },
            b: {
                type: 'NUMBER',
                get: () => standardMaterial.specularColor.b,
                set: val => standardMaterial.specularColor.b = val,
                options: { max: 1, min: 0, step: 0.1 }
            }
        }
    },
    specularTexture: {
        type: 'GROUP',
        children: {
            texture: {
                type: 'FILE',
                get: () => specularTexture,
                set: val => val && (standardMaterial.specularTexture = new BABYLON.Texture(specularTexture = val.data, scene))
            },
            hasAlpha: {
                type: 'BOOLEAN',
                get: () => standardMaterial.specularTexture && standardMaterial.specularTexture.hasAlpha,
                set: val => standardMaterial.specularTexture && (standardMaterial.specularTexture.hasAlpha = val)
            }
        }
    },
    emissiveColor: {
        type: 'GROUP',
        children: {
            r: {
                type: 'NUMBER',
                get: () => standardMaterial.emissiveColor.r,
                set: val => standardMaterial.emissiveColor.r = val,
                options: { max: 1, min: 0, step: 0.1 }
            },
            g: {
                type: 'NUMBER',
                get: () => standardMaterial.emissiveColor.g,
                set: val => standardMaterial.emissiveColor.g = val,
                options: { max: 1, min: 0, step: 0.1 }
            },
            b: {
                type: 'NUMBER',
                get: () => standardMaterial.emissiveColor.b,
                set: val => standardMaterial.emissiveColor.b = val,
                options: { max: 1, min: 0, step: 0.1 }
            }
        }
    },
    emissiveTexture: {
        type: 'GROUP',
        children: {
            texture: {
                type: 'FILE',
                get: () => emissiveTexture,
                set: val => val && (standardMaterial.emissiveTexture = new BABYLON.Texture(emissiveTexture = val.data, scene))
            },
            hasAlpha: {
                type: 'BOOLEAN',
                get: () => standardMaterial.emissiveTexture && standardMaterial.emissiveTexture.hasAlpha,
                set: val => standardMaterial.emissiveTexture && (standardMaterial.emissiveTexture.hasAlpha = val)
            }
        }
    },
    ambientColor: {
        type: 'GROUP',
        children: {
            r: {
                type: 'NUMBER',
                get: () => standardMaterial.ambientColor.r,
                set: val => standardMaterial.ambientColor.r = val,
                options: { max: 1, min: 0, step: 0.1 }
            },
            g: {
                type: 'NUMBER',
                get: () => standardMaterial.ambientColor.g,
                set: val => standardMaterial.ambientColor.g = val,
                options: { max: 1, min: 0, step: 0.1 }
            },
            b: {
                type: 'NUMBER',
                get: () => standardMaterial.ambientColor.b,
                set: val => standardMaterial.ambientColor.b = val,
                options: { max: 1, min: 0, step: 0.1 }
            }
        }
    },
    ambientTexture: {
        type: 'GROUP',
        children: {
            texture: {
                type: 'FILE',
                get: () => ambientTexture,
                set: val => val && (standardMaterial.ambientTexture = new BABYLON.Texture(ambientTexture = val.data, scene))
            },
            hasAlpha: {
                type: 'BOOLEAN',
                get: () => standardMaterial.ambientTexture && standardMaterial.ambientTexture.hasAlpha,
                set: val => standardMaterial.ambientTexture && (standardMaterial.ambientTexture.hasAlpha = val)
            }
        }
    },
    bumpTexture: {
        type: 'GROUP',
        children: {
            texture: {
                type: 'FILE',
                get: () => bumpTexture,
                set: val => val && (standardMaterial.bumpTexture = new BABYLON.Texture(bumpTexture = val.data, scene))
            },
            hasAlpha: {
                type: 'BOOLEAN',
                get: () => standardMaterial.bumpTexture && standardMaterial.bumpTexture.hasAlpha,
                set: val => standardMaterial.bumpTexture && (standardMaterial.bumpTexture.hasAlpha = val)
            }
        }
    },
    alpha: {
        type: 'NUMBER',
        get: () => standardMaterial.alpha,
        set: val => standardMaterial.alpha = val,
        options: { max: 1, min: 0, step: 0.1 }
    },
    backFaceCulling: {
        type: 'BOOLEAN',
        get: () => standardMaterial.backFaceCulling,
        set: val => standardMaterial.backFaceCulling = val
    },
    wireframe: {
        type: 'BOOLEAN',
        get: () => standardMaterial.wireframe,
        set: val => standardMaterial.wireframe = val
    }
}
