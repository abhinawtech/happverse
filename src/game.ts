import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../ed36149f-76c5-45c4-a678-d4b31c4ed9ca/src/item"
import Script2 from "../03829f2d-a9ab-4292-aa97-6f51a02b3ba9/src/item"
import Script3 from "../3bc461a1-e060-4e46-b80c-4b016678a7f9/src/item"
import Script4 from "../a0c742c7-c376-465c-832d-305deb1c4b78/src/item"
import Script5 from "../68986c60-c95c-41ab-adf0-d0e02f5b5440/src/item"
import Script6 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"
import { movePlayerTo } from '@decentraland/RestrictedActions'

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const woodTile = new Entity('woodTile')
engine.addEntity(woodTile)
woodTile.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(10.30021858215332, 5.362170219421387, 12.507386207580566),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000066757202148, 0.4867538809776306, 8.203039169311523)
})
woodTile.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("df6bc5c0-5989-4251-8d1f-38edcf9c9beb/FloorBlock_03/FloorBlock_03.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
woodTile.addComponentOrReplace(gltfShape)

const woodTile2 = new Entity('woodTile2')
engine.addEntity(woodTile2)
woodTile2.setParent(_scene)
woodTile2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(10.30021858215332, 5.362170219421387, 10.504023551940918),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000073909759521, 0.4867538809776306, 8.203031539916992)
})
woodTile2.addComponentOrReplace(transform3)

const woodTile3 = new Entity('woodTile3')
engine.addEntity(woodTile3)
woodTile3.setParent(_scene)
woodTile3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(10.30021858215332, 5.362170219421387, 14.503148078918457),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000083446502686, 0.4867538809776306, 8.203020095825195)
})
woodTile3.addComponentOrReplace(transform4)

const woodTile4 = new Entity('woodTile4')
engine.addEntity(woodTile4)
woodTile4.setParent(_scene)
woodTile4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(10.30021858215332, 5.362170219421387, 16.506511688232422),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000076293945312, 0.4867538809776306, 8.203031539916992)
})
woodTile4.addComponentOrReplace(transform5)

const woodTile5 = new Entity('woodTile5')
engine.addEntity(woodTile5)
woodTile5.setParent(_scene)
woodTile5.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(10.30021858215332, 5.362170219421387, 22.519180297851562),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000097751617432, 0.4867538809776306, 8.203001022338867)
})
woodTile5.addComponentOrReplace(transform6)

const woodTile6 = new Entity('woodTile6')
engine.addEntity(woodTile6)
woodTile6.setParent(_scene)
woodTile6.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(10.30021858215332, 5.362170219421387, 18.52005386352539),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000088214874268, 0.4867538809776306, 8.203009605407715)
})
woodTile6.addComponentOrReplace(transform7)

const woodTile7 = new Entity('woodTile7')
engine.addEntity(woodTile7)
woodTile7.setParent(_scene)
woodTile7.addComponentOrReplace(gltfShape)
const transform8 = new Transform({
  position: new Vector3(10.30021858215332, 5.362170219421387, 20.523418426513672),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000081062316895, 0.4867538809776306, 8.203017234802246)
})
woodTile7.addComponentOrReplace(transform8)

const woodTile8 = new Entity('woodTile8')
engine.addEntity(woodTile8)
woodTile8.setParent(_scene)
woodTile8.addComponentOrReplace(gltfShape)
const transform9 = new Transform({
  position: new Vector3(10.30021858215332, 5.362170219421387, 24.522541046142578),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000090599060059, 0.4867538809776306, 8.203019142150879)
})
woodTile8.addComponentOrReplace(transform9)

const woodTile9 = new Entity('woodTile9')
engine.addEntity(woodTile9)
woodTile9.setParent(_scene)
woodTile9.addComponentOrReplace(gltfShape)
const transform10 = new Transform({
  position: new Vector3(10.30021858215332, 5.362170219421387, 26.53195571899414),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000009536743164, 0.4867538809776306, 8.203015327453613)
})
woodTile9.addComponentOrReplace(transform10)

const stickFenceEndModule = new Entity('stickFenceEndModule')
engine.addEntity(stickFenceEndModule)
stickFenceEndModule.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(17.50203514099121, 0, 10.425348281860352),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.5152788162231445, 5.285109043121338, 4.644650459289551)
})
stickFenceEndModule.addComponentOrReplace(transform11)
const gltfShape2 = new GLTFShape("1766c251-9c6e-41f4-9141-7ffcfb73a612/FenceSticksEnd_01/FenceSticksEnd_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
stickFenceEndModule.addComponentOrReplace(gltfShape2)

const stickFenceEndModule2 = new Entity('stickFenceEndModule2')
engine.addEntity(stickFenceEndModule2)
stickFenceEndModule2.setParent(_scene)
stickFenceEndModule2.addComponentOrReplace(gltfShape2)
const transform12 = new Transform({
  position: new Vector3(17.50203514099121, 0, 26.540103912353516),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.5152788162231445, 5.285109043121338, 4.644650459289551)
})
stickFenceEndModule2.addComponentOrReplace(transform12)

const stickFenceEndModule3 = new Entity('stickFenceEndModule3')
engine.addEntity(stickFenceEndModule3)
stickFenceEndModule3.setParent(_scene)
stickFenceEndModule3.addComponentOrReplace(gltfShape2)
const transform13 = new Transform({
  position: new Vector3(3.1769332885742188, 0, 26.540103912353516),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.5152788162231445, 5.285109043121338, 4.644650459289551)
})
stickFenceEndModule3.addComponentOrReplace(transform13)

const stickFenceEndModule4 = new Entity('stickFenceEndModule4')
engine.addEntity(stickFenceEndModule4)
stickFenceEndModule4.setParent(_scene)
stickFenceEndModule4.addComponentOrReplace(gltfShape2)
const transform14 = new Transform({
  position: new Vector3(3.1769332885742188, 0, 10.425348281860352),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.5152788162231445, 5.285109043121338, 4.644650459289551)
})
stickFenceEndModule4.addComponentOrReplace(transform14)

const largeCeilingJoist2 = new Entity('largeCeilingJoist2')
engine.addEntity(largeCeilingJoist2)
largeCeilingJoist2.setParent(_scene)
const gltfShape3 = new GLTFShape("0e61dad1-11e3-4b81-bdf5-96849d99ebf9/Column_Wood_5M/Column_Wood_5M.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
largeCeilingJoist2.addComponentOrReplace(gltfShape3)
const transform15 = new Transform({
  position: new Vector3(18.535079956054688, 7.053133487701416, 17.99309539794922),
  rotation: new Quaternion(0, 0, 0.7071067690849304, 0.7071068286895752),
  scale: new Vector3(0.6525132060050964, 1, 1)
})
largeCeilingJoist2.addComponentOrReplace(transform15)

const largeCeilingJoist3 = new Entity('largeCeilingJoist3')
engine.addEntity(largeCeilingJoist3)
largeCeilingJoist3.setParent(_scene)
largeCeilingJoist3.addComponentOrReplace(gltfShape3)
const transform16 = new Transform({
  position: new Vector3(18.535079956054688, 7.053133487701416, 22.81497573852539),
  rotation: new Quaternion(0, 0, 0.7071067690849304, 0.7071068286895752),
  scale: new Vector3(0.6525132060050964, 1, 1)
})
largeCeilingJoist3.addComponentOrReplace(transform16)

const largeCeilingJoist4 = new Entity('largeCeilingJoist4')
engine.addEntity(largeCeilingJoist4)
largeCeilingJoist4.setParent(_scene)
largeCeilingJoist4.addComponentOrReplace(gltfShape3)
const transform17 = new Transform({
  position: new Vector3(18.535079956054688, 7.053133487701416, 13.515081405639648),
  rotation: new Quaternion(0, 0, 0.7071067690849304, 0.7071068286895752),
  scale: new Vector3(0.6525132060050964, 1, 1)
})
largeCeilingJoist4.addComponentOrReplace(transform17)

const largeCeilingJoist6 = new Entity('largeCeilingJoist6')
engine.addEntity(largeCeilingJoist6)
largeCeilingJoist6.setParent(_scene)
largeCeilingJoist6.addComponentOrReplace(gltfShape3)
const transform18 = new Transform({
  position: new Vector3(2.3569040298461914, 11.216668128967285, 22.81497573852539),
  rotation: new Quaternion(0, 0, 0.7071067690849304, 0.7071068286895752),
  scale: new Vector3(2.337153673171997, 1, 1)
})
largeCeilingJoist6.addComponentOrReplace(transform18)

const largeCeilingJoist8 = new Entity('largeCeilingJoist8')
engine.addEntity(largeCeilingJoist8)
largeCeilingJoist8.setParent(_scene)
largeCeilingJoist8.addComponentOrReplace(gltfShape3)
const transform19 = new Transform({
  position: new Vector3(2.356903076171875, 11.216668128967285, 17.99309539794922),
  rotation: new Quaternion(0, 0, 0.7071067690849304, 0.7071068286895752),
  scale: new Vector3(2.337153673171997, 1, 1)
})
largeCeilingJoist8.addComponentOrReplace(transform19)

const largeCeilingJoist9 = new Entity('largeCeilingJoist9')
engine.addEntity(largeCeilingJoist9)
largeCeilingJoist9.setParent(_scene)
largeCeilingJoist9.addComponentOrReplace(gltfShape3)
const transform20 = new Transform({
  position: new Vector3(2.3569040298461914, 11.216668128967285, 13.515081405639648),
  rotation: new Quaternion(0, 0, 0.7071067690849304, 0.7071068286895752),
  scale: new Vector3(2.337153673171997, 1, 1)
})
largeCeilingJoist9.addComponentOrReplace(transform20)

const largeCeilingJoist10 = new Entity('largeCeilingJoist10')
engine.addEntity(largeCeilingJoist10)
largeCeilingJoist10.setParent(_scene)
largeCeilingJoist10.addComponentOrReplace(gltfShape3)
const transform21 = new Transform({
  position: new Vector3(2.356903076171875, 11.249759674072266, 9.640397071838379),
  rotation: new Quaternion(0, 0, 0.7071067690849304, 0.7071068286895752),
  scale: new Vector3(2.337153673171997, 1, 1)
})
largeCeilingJoist10.addComponentOrReplace(transform21)

const largeCeilingJoist11 = new Entity('largeCeilingJoist11')
engine.addEntity(largeCeilingJoist11)
largeCeilingJoist11.setParent(_scene)
largeCeilingJoist11.addComponentOrReplace(gltfShape3)
const transform22 = new Transform({
  position: new Vector3(9.903494834899902, 11.249759674072266, 9.519320487976074),
  rotation: new Quaternion(0.5, 0.5000000596046448, 0.4999999403953552, 0.5000001192092896),
  scale: new Vector3(2.3371596336364746, 1.0000030994415283, 1.0000030994415283)
})
largeCeilingJoist11.addComponentOrReplace(transform22)

const largeCeilingJoist12 = new Entity('largeCeilingJoist12')
engine.addEntity(largeCeilingJoist12)
largeCeilingJoist12.setParent(_scene)
largeCeilingJoist12.addComponentOrReplace(gltfShape3)
const transform23 = new Transform({
  position: new Vector3(14.497684478759766, 11.216667175292969, 9.519320487976074),
  rotation: new Quaternion(0.5, 0.5000000596046448, 0.4999999403953552, 0.5000001192092896),
  scale: new Vector3(2.337157726287842, 1.000002145767212, 1.000002145767212)
})
largeCeilingJoist12.addComponentOrReplace(transform23)

const largeCeilingJoist13 = new Entity('largeCeilingJoist13')
engine.addEntity(largeCeilingJoist13)
largeCeilingJoist13.setParent(_scene)
largeCeilingJoist13.addComponentOrReplace(gltfShape3)
const transform24 = new Transform({
  position: new Vector3(5.6526079177856445, 11.249760627746582, 9.519320487976074),
  rotation: new Quaternion(0.5, 0.5000000596046448, 0.4999999403953552, 0.5000001192092896),
  scale: new Vector3(2.3371591567993164, 1.0000028610229492, 1.0000028610229492)
})
largeCeilingJoist13.addComponentOrReplace(transform24)

const largeCeilingJoist14 = new Entity('largeCeilingJoist14')
engine.addEntity(largeCeilingJoist14)
largeCeilingJoist14.setParent(_scene)
largeCeilingJoist14.addComponentOrReplace(gltfShape3)
const transform25 = new Transform({
  position: new Vector3(18.374629974365234, 11.24975872039795, 9.519320487976074),
  rotation: new Quaternion(0.5, 0.5000000596046448, 0.4999999403953552, 0.5000001192092896),
  scale: new Vector3(2.337161064147949, 1.0000038146972656, 1.0000038146972656)
})
largeCeilingJoist14.addComponentOrReplace(transform25)

const largeCeilingJoist5 = new Entity('largeCeilingJoist5')
engine.addEntity(largeCeilingJoist5)
largeCeilingJoist5.setParent(_scene)
largeCeilingJoist5.addComponentOrReplace(gltfShape3)
const transform26 = new Transform({
  position: new Vector3(18.374629974365234, 11.216667175292969, 27.231582641601562),
  rotation: new Quaternion(0.5, 0.5000000596046448, 0.4999999403953552, 0.5000001192092896),
  scale: new Vector3(2.3371615409851074, 1.0000040531158447, 1.0000040531158447)
})
largeCeilingJoist5.addComponentOrReplace(transform26)

const largeCeilingJoist15 = new Entity('largeCeilingJoist15')
engine.addEntity(largeCeilingJoist15)
largeCeilingJoist15.setParent(_scene)
largeCeilingJoist15.addComponentOrReplace(gltfShape3)
const transform27 = new Transform({
  position: new Vector3(14.497684478759766, 11.216667175292969, 27.231582641601562),
  rotation: new Quaternion(0.5, 0.5000000596046448, 0.4999999403953552, 0.5000001192092896),
  scale: new Vector3(2.3371596336364746, 1.0000030994415283, 1.0000030994415283)
})
largeCeilingJoist15.addComponentOrReplace(transform27)

const largeCeilingJoist16 = new Entity('largeCeilingJoist16')
engine.addEntity(largeCeilingJoist16)
largeCeilingJoist16.setParent(_scene)
largeCeilingJoist16.addComponentOrReplace(gltfShape3)
const transform28 = new Transform({
  position: new Vector3(9.903494834899902, 11.216668128967285, 27.231582641601562),
  rotation: new Quaternion(0.5, 0.5000000596046448, 0.4999999403953552, 0.5000001192092896),
  scale: new Vector3(2.337160110473633, 1.0000033378601074, 1.0000033378601074)
})
largeCeilingJoist16.addComponentOrReplace(transform28)

const largeCeilingJoist17 = new Entity('largeCeilingJoist17')
engine.addEntity(largeCeilingJoist17)
largeCeilingJoist17.setParent(_scene)
largeCeilingJoist17.addComponentOrReplace(gltfShape3)
const transform29 = new Transform({
  position: new Vector3(5.6526079177856445, 11.216669082641602, 27.231582641601562),
  rotation: new Quaternion(0.5, 0.5000000596046448, 0.4999999403953552, 0.5000001192092896),
  scale: new Vector3(2.3371596336364746, 1.0000030994415283, 1.0000030994415283)
})
largeCeilingJoist17.addComponentOrReplace(transform29)

const largeCeilingJoist18 = new Entity('largeCeilingJoist18')
engine.addEntity(largeCeilingJoist18)
largeCeilingJoist18.setParent(_scene)
largeCeilingJoist18.addComponentOrReplace(gltfShape3)
const transform30 = new Transform({
  position: new Vector3(2.356903076171875, 11.216668128967285, 27.3526611328125),
  rotation: new Quaternion(0, 0, 0.7071067690849304, 0.7071068286895752),
  scale: new Vector3(2.337153673171997, 1, 1)
})
largeCeilingJoist18.addComponentOrReplace(transform30)

const wallPlainGlass = new Entity('wallPlainGlass')
engine.addEntity(wallPlainGlass)
wallPlainGlass.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(2.2295827865600586, 5.370682239532471, 27.385974884033203),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-8.182331085205078, 2.914914608001709, 0.08846686035394669)
})
wallPlainGlass.addComponentOrReplace(transform31)
const gltfShape4 = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
wallPlainGlass.addComponentOrReplace(gltfShape4)

const wallPlainGlass2 = new Entity('wallPlainGlass2')
engine.addEntity(wallPlainGlass2)
wallPlainGlass2.setParent(_scene)
wallPlainGlass2.addComponentOrReplace(gltfShape4)
const transform32 = new Transform({
  position: new Vector3(2.2295827865600586, 5.370682239532471, 27.385974884033203),
  rotation: new Quaternion(4.63280985907419e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(-8.919089317321777, 2.9013543128967285, 0.08846684545278549)
})
wallPlainGlass2.addComponentOrReplace(transform32)

const wallPlainGlass3 = new Entity('wallPlainGlass3')
engine.addEntity(wallPlainGlass3)
wallPlainGlass3.setParent(_scene)
wallPlainGlass3.addComponentOrReplace(gltfShape4)
const transform33 = new Transform({
  position: new Vector3(18.447206497192383, 5.370682239532471, 9.686769485473633),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.327243804931641, 2.914914608001709, 0.08846685290336609)
})
wallPlainGlass3.addComponentOrReplace(transform33)

const wallPlainGlass4 = new Entity('wallPlainGlass4')
engine.addEntity(wallPlainGlass4)
wallPlainGlass4.setParent(_scene)
wallPlainGlass4.addComponentOrReplace(gltfShape4)
const transform34 = new Transform({
  position: new Vector3(18.362539291381836, 5.370682239532471, 27.385974884033203),
  rotation: new Quaternion(4.63280985907419e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(-8.919098854064941, 0.8168936371803284, 0.08846680074930191)
})
wallPlainGlass4.addComponentOrReplace(transform34)

const woodTile10 = new Entity('woodTile10')
engine.addEntity(woodTile10)
woodTile10.setParent(_scene)
woodTile10.addComponentOrReplace(gltfShape)
const transform35 = new Transform({
  position: new Vector3(10.30021858215332, 17.064653396606445, 10.504023551940918),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000078678131104, 0.4867538809776306, 8.203035354614258)
})
woodTile10.addComponentOrReplace(transform35)

const woodTile11 = new Entity('woodTile11')
engine.addEntity(woodTile11)
woodTile11.setParent(_scene)
woodTile11.addComponentOrReplace(gltfShape)
const transform36 = new Transform({
  position: new Vector3(10.30021858215332, 17.064653396606445, 12.507386207580566),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000007152557373, 0.4867538809776306, 8.203042984008789)
})
woodTile11.addComponentOrReplace(transform36)

const woodTile12 = new Entity('woodTile12')
engine.addEntity(woodTile12)
woodTile12.setParent(_scene)
woodTile12.addComponentOrReplace(gltfShape)
const transform37 = new Transform({
  position: new Vector3(10.30021858215332, 17.064653396606445, 14.503148078918457),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000088214874268, 0.4867538809776306, 8.203023910522461)
})
woodTile12.addComponentOrReplace(transform37)

const woodTile13 = new Entity('woodTile13')
engine.addEntity(woodTile13)
woodTile13.setParent(_scene)
woodTile13.addComponentOrReplace(gltfShape)
const transform38 = new Transform({
  position: new Vector3(10.30021858215332, 17.064653396606445, 16.506511688232422),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000081062316895, 0.4867538809776306, 8.203035354614258)
})
woodTile13.addComponentOrReplace(transform38)

const woodTile14 = new Entity('woodTile14')
engine.addEntity(woodTile14)
woodTile14.setParent(_scene)
woodTile14.addComponentOrReplace(gltfShape)
const transform39 = new Transform({
  position: new Vector3(10.30021858215332, 17.064653396606445, 18.52005386352539),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000009298324585, 0.4867538809776306, 8.20301342010498)
})
woodTile14.addComponentOrReplace(transform39)

const woodTile15 = new Entity('woodTile15')
engine.addEntity(woodTile15)
woodTile15.setParent(_scene)
woodTile15.addComponentOrReplace(gltfShape)
const transform40 = new Transform({
  position: new Vector3(10.30021858215332, 17.064653396606445, 20.523418426513672),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000085830688477, 0.4867538809776306, 8.203021049499512)
})
woodTile15.addComponentOrReplace(transform40)

const woodTile16 = new Entity('woodTile16')
engine.addEntity(woodTile16)
woodTile16.setParent(_scene)
woodTile16.addComponentOrReplace(gltfShape)
const transform41 = new Transform({
  position: new Vector3(10.30021858215332, 17.064653396606445, 22.519180297851562),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000102519989014, 0.4867538809776306, 8.203004837036133)
})
woodTile16.addComponentOrReplace(transform41)

const woodTile17 = new Entity('woodTile17')
engine.addEntity(woodTile17)
woodTile17.setParent(_scene)
woodTile17.addComponentOrReplace(gltfShape)
const transform42 = new Transform({
  position: new Vector3(10.30021858215332, 17.064653396606445, 24.522541046142578),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000009536743164, 0.4867538809776306, 8.203022956848145)
})
woodTile17.addComponentOrReplace(transform42)

const woodTile18 = new Entity('woodTile18')
engine.addEntity(woodTile18)
woodTile18.setParent(_scene)
woodTile18.addComponentOrReplace(gltfShape)
const transform43 = new Transform({
  position: new Vector3(10.30021858215332, 17.064653396606445, 26.53195571899414),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000100135803223, 0.4867538809776306, 8.203019142150879)
})
woodTile18.addComponentOrReplace(transform43)

const deckStairs = new Entity('deckStairs')
engine.addEntity(deckStairs)
deckStairs.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(5.4203901290893555, 0.11907196044921875, 9.54004955291748),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.0378258228302, 1.435255527496338, 1.5779964923858643)
})
deckStairs.addComponentOrReplace(transform44)
const gltfShape5 = new GLTFShape("a2c0b460-57ce-4097-8613-255c6aba21a4/Deck Stairs.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
deckStairs.addComponentOrReplace(gltfShape5)

const wallPlainGlass5 = new Entity('wallPlainGlass5')
engine.addEntity(wallPlainGlass5)
wallPlainGlass5.setParent(_scene)
wallPlainGlass5.addComponentOrReplace(gltfShape4)
const transform45 = new Transform({
  position: new Vector3(2.2295827865600586, 5.370682239532471, 9.68677043914795),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-1.7237659692764282, 2.914914608001709, 0.08846686035394669)
})
wallPlainGlass5.addComponentOrReplace(transform45)

const wallPlainGlass6 = new Entity('wallPlainGlass6')
engine.addEntity(wallPlainGlass6)
wallPlainGlass6.setParent(_scene)
wallPlainGlass6.addComponentOrReplace(gltfShape4)
const transform46 = new Transform({
  position: new Vector3(5.705665588378906, 17.07930564880371, 9.68677043914795),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-2.092805862426758, -1.1053990125656128, 0.08846686035394669)
})
wallPlainGlass6.addComponentOrReplace(transform46)

const stickFenceEndModule5 = new Entity('stickFenceEndModule5')
engine.addEntity(stickFenceEndModule5)
stickFenceEndModule5.setParent(_scene)
stickFenceEndModule5.addComponentOrReplace(gltfShape2)
const transform47 = new Transform({
  position: new Vector3(3.1769332885742188, 0, 17.947498321533203),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.5152788162231445, 5.285109043121338, 4.644650459289551)
})
stickFenceEndModule5.addComponentOrReplace(transform47)

const stickFenceEndModule6 = new Entity('stickFenceEndModule6')
engine.addEntity(stickFenceEndModule6)
stickFenceEndModule6.setParent(_scene)
stickFenceEndModule6.addComponentOrReplace(gltfShape2)
const transform48 = new Transform({
  position: new Vector3(17.50203514099121, 0, 18.238746643066406),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.5152788162231445, 5.285109043121338, 4.644650459289551)
})
stickFenceEndModule6.addComponentOrReplace(transform48)

const stickFenceEndModule7 = new Entity('stickFenceEndModule7')
engine.addEntity(stickFenceEndModule7)
stickFenceEndModule7.setParent(_scene)
stickFenceEndModule7.addComponentOrReplace(gltfShape2)
const transform49 = new Transform({
  position: new Vector3(9.957462310791016, 0, 10.425348281860352),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.5152788162231445, 5.285109043121338, 4.644650459289551)
})
stickFenceEndModule7.addComponentOrReplace(transform49)

const stickFenceEndModule8 = new Entity('stickFenceEndModule8')
engine.addEntity(stickFenceEndModule8)
stickFenceEndModule8.setParent(_scene)
stickFenceEndModule8.addComponentOrReplace(gltfShape2)
const transform50 = new Transform({
  position: new Vector3(9.957462310791016, 0, 26.540103912353516),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.5152788162231445, 5.285109043121338, 4.644650459289551)
})
stickFenceEndModule8.addComponentOrReplace(transform50)

const largeCeilingJoist = new Entity('largeCeilingJoist')
engine.addEntity(largeCeilingJoist)
largeCeilingJoist.setParent(_scene)
largeCeilingJoist.addComponentOrReplace(gltfShape3)
const transform51 = new Transform({
  position: new Vector3(18.535079956054688, 8.670038223266602, 18.552940368652344),
  rotation: new Quaternion(0.5000000596046448, -0.5, 0.4999999403953552, 0.5000001192092896),
  scale: new Vector3(3.507810354232788, 1.000003457069397, 1.0000035762786865)
})
largeCeilingJoist.addComponentOrReplace(transform51)

const largeCeilingJoist7 = new Entity('largeCeilingJoist7')
engine.addEntity(largeCeilingJoist7)
largeCeilingJoist7.setParent(_scene)
largeCeilingJoist7.addComponentOrReplace(gltfShape3)
const transform52 = new Transform({
  position: new Vector3(2.35939884185791, 16.949413299560547, 18.552940368652344),
  rotation: new Quaternion(0.5000000596046448, -0.5, 0.4999999403953552, 0.5000001192092896),
  scale: new Vector3(3.50781512260437, 1.0000046491622925, 1.000004768371582)
})
largeCeilingJoist7.addComponentOrReplace(transform52)

const largeCeilingJoist19 = new Entity('largeCeilingJoist19')
engine.addEntity(largeCeilingJoist19)
largeCeilingJoist19.setParent(_scene)
largeCeilingJoist19.addComponentOrReplace(gltfShape3)
const transform53 = new Transform({
  position: new Vector3(18.535079956054688, 16.949413299560547, 18.552940368652344),
  rotation: new Quaternion(0.5000000596046448, -0.5, 0.4999999403953552, 0.5000001192092896),
  scale: new Vector3(3.507812261581421, 1.0000039339065552, 1.0000040531158447)
})
largeCeilingJoist19.addComponentOrReplace(transform53)

const largeCeilingJoist20 = new Entity('largeCeilingJoist20')
engine.addEntity(largeCeilingJoist20)
largeCeilingJoist20.setParent(_scene)
largeCeilingJoist20.addComponentOrReplace(gltfShape3)
const transform54 = new Transform({
  position: new Vector3(10.328994750976562, 16.949413299560547, 27.22447967529297),
  rotation: new Quaternion(0.7071067690849304, 7.450580596923828e-9, -8.27282491400183e-8, 0.70710688829422),
  scale: new Vector3(3.2482056617736816, 1.0000066757202148, 1.000006914138794)
})
largeCeilingJoist20.addComponentOrReplace(transform54)

const largeCeilingJoist21 = new Entity('largeCeilingJoist21')
engine.addEntity(largeCeilingJoist21)
largeCeilingJoist21.setParent(_scene)
largeCeilingJoist21.addComponentOrReplace(gltfShape3)
const transform55 = new Transform({
  position: new Vector3(10.328994750976562, 16.949413299560547, 9.523632049560547),
  rotation: new Quaternion(0.7071067690849304, 7.450580596923828e-9, -8.27282491400183e-8, 0.70710688829422),
  scale: new Vector3(3.2482056617736816, 1.000007152557373, 1.0000073909759521)
})
largeCeilingJoist21.addComponentOrReplace(transform55)

const largeCeilingJoist22 = new Entity('largeCeilingJoist22')
engine.addEntity(largeCeilingJoist22)
largeCeilingJoist22.setParent(_scene)
largeCeilingJoist22.addComponentOrReplace(gltfShape3)
const transform56 = new Transform({
  position: new Vector3(7.910433769226074, 12.634238243103027, 9.523632049560547),
  rotation: new Quaternion(0.7071067690849304, 7.450580596923828e-9, -8.27282491400183e-8, 0.70710688829422),
  scale: new Vector3(0.8482939600944519, 1.0000081062316895, 1.0000083446502686)
})
largeCeilingJoist22.addComponentOrReplace(transform56)

const largeCeilingJoist23 = new Entity('largeCeilingJoist23')
engine.addEntity(largeCeilingJoist23)
largeCeilingJoist23.setParent(_scene)
largeCeilingJoist23.addComponentOrReplace(gltfShape3)
const transform57 = new Transform({
  position: new Vector3(2.3593978881835938, 5.5252604484558105, 18.552940368652344),
  rotation: new Quaternion(0.5000000596046448, -0.5, 0.4999999403953552, 0.5000001192092896),
  scale: new Vector3(3.5078179836273193, 1.0000053644180298, 1.0000054836273193)
})
largeCeilingJoist23.addComponentOrReplace(transform57)

const largeCeilingJoist24 = new Entity('largeCeilingJoist24')
engine.addEntity(largeCeilingJoist24)
largeCeilingJoist24.setParent(_scene)
largeCeilingJoist24.addComponentOrReplace(gltfShape3)
const transform58 = new Transform({
  position: new Vector3(10.328994750976562, 5.5252604484558105, 9.541316986083984),
  rotation: new Quaternion(0.7071067690849304, 7.450580596923828e-9, -8.27282491400183e-8, 0.70710688829422),
  scale: new Vector3(3.2482056617736816, 1.0000081062316895, 1.0000083446502686)
})
largeCeilingJoist24.addComponentOrReplace(transform58)

const largeCeilingJoist25 = new Entity('largeCeilingJoist25')
engine.addEntity(largeCeilingJoist25)
largeCeilingJoist25.setParent(_scene)
largeCeilingJoist25.addComponentOrReplace(gltfShape3)
const transform59 = new Transform({
  position: new Vector3(18.535079956054688, 5.5252604484558105, 18.552940368652344),
  rotation: new Quaternion(0.5000000596046448, -0.5, 0.4999999403953552, 0.5000001192092896),
  scale: new Vector3(3.50781512260437, 1.0000046491622925, 1.000004768371582)
})
largeCeilingJoist25.addComponentOrReplace(transform59)

const largeCeilingJoist26 = new Entity('largeCeilingJoist26')
engine.addEntity(largeCeilingJoist26)
largeCeilingJoist26.setParent(_scene)
largeCeilingJoist26.addComponentOrReplace(gltfShape3)
const transform60 = new Transform({
  position: new Vector3(10.328994750976562, 5.5252604484558105, 27.22447967529297),
  rotation: new Quaternion(0.7071067690849304, 7.450580596923828e-9, -8.27282491400183e-8, 0.70710688829422),
  scale: new Vector3(3.2482056617736816, 1.0000073909759521, 1.0000076293945312)
})
largeCeilingJoist26.addComponentOrReplace(transform60)

const floorPurple = new Entity('floorPurple')
engine.addEntity(floorPurple)
floorPurple.setParent(_scene)
const transform61 = new Transform({
  position: new Vector3(7.549774169921875, 5.401154518127441, 25.395919799804688),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0733495950698853, 1, 0.47164443135261536)
})
floorPurple.addComponentOrReplace(transform61)
const gltfShape6 = new GLTFShape("02f0a730-d74c-4f9c-8a12-4fcfc87e14aa/PurpleFloor.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
floorPurple.addComponentOrReplace(gltfShape6)

const cushionPink = new Entity('cushionPink')
engine.addEntity(cushionPink)
cushionPink.setParent(_scene)
const transform62 = new Transform({
  position: new Vector3(3.7280445098876953, 5.555566310882568, 25.068279266357422),
  rotation: new Quaternion(1.5394153601527394e-15, -0.7071068286895752, -0.7071068286895752, -8.429369557916289e-8),
  scale: new Vector3(0.8652447462081909, -2.0077264308929443, 2.251521110534668)
})
cushionPink.addComponentOrReplace(transform62)
const gltfShape7 = new GLTFShape("95bedfa0-4e73-470a-910a-73bcee603f3c/PinkCushion.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
cushionPink.addComponentOrReplace(gltfShape7)

const floorPurple2 = new Entity('floorPurple2')
engine.addEntity(floorPurple2)
floorPurple2.setParent(_scene)
floorPurple2.addComponentOrReplace(gltfShape6)
const transform63 = new Transform({
  position: new Vector3(7.549774169921875, 5.401154518127441, 21.50738525390625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0733495950698853, 1, 0.47164443135261536)
})
floorPurple2.addComponentOrReplace(transform63)

const cushionPink2 = new Entity('cushionPink2')
engine.addEntity(cushionPink2)
cushionPink2.setParent(_scene)
cushionPink2.addComponentOrReplace(gltfShape7)
const transform64 = new Transform({
  position: new Vector3(3.7280445098876953, 5.555566310882568, 21.179744720458984),
  rotation: new Quaternion(1.5394153601527394e-15, -0.7071068286895752, -0.7071068286895752, -8.429369557916289e-8),
  scale: new Vector3(0.8652451634407043, -2.0077273845672607, 2.2515220642089844)
})
cushionPink2.addComponentOrReplace(transform64)

const floorPurple3 = new Entity('floorPurple3')
engine.addEntity(floorPurple3)
floorPurple3.setParent(_scene)
floorPurple3.addComponentOrReplace(gltfShape6)
const transform65 = new Transform({
  position: new Vector3(7.549774169921875, 5.401154518127441, 17.69164276123047),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0733495950698853, 1, 0.47164443135261536)
})
floorPurple3.addComponentOrReplace(transform65)

const cushionPink3 = new Entity('cushionPink3')
engine.addEntity(cushionPink3)
cushionPink3.setParent(_scene)
cushionPink3.addComponentOrReplace(gltfShape7)
const transform66 = new Transform({
  position: new Vector3(3.7280445098876953, 5.555566310882568, 17.364002227783203),
  rotation: new Quaternion(1.5394153601527394e-15, -0.7071068286895752, -0.7071068286895752, -8.429369557916289e-8),
  scale: new Vector3(0.865245521068573, -2.007727861404419, 2.2515225410461426)
})
cushionPink3.addComponentOrReplace(transform66)

const floorPurple5 = new Entity('floorPurple5')
engine.addEntity(floorPurple5)
floorPurple5.setParent(_scene)
floorPurple5.addComponentOrReplace(gltfShape6)
const transform67 = new Transform({
  position: new Vector3(7.549774169921875, 5.401154518127441, 13.868313789367676),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0733495950698853, 1, 0.47164443135261536)
})
floorPurple5.addComponentOrReplace(transform67)

const cushionPink5 = new Entity('cushionPink5')
engine.addEntity(cushionPink5)
cushionPink5.setParent(_scene)
cushionPink5.addComponentOrReplace(gltfShape7)
const transform68 = new Transform({
  position: new Vector3(3.7280445098876953, 5.555566310882568, 13.54067325592041),
  rotation: new Quaternion(1.5394153601527394e-15, -0.7071068286895752, -0.7071068286895752, -8.429369557916289e-8),
  scale: new Vector3(0.8652470111846924, -2.007728338241577, 2.251523017883301)
})
cushionPink5.addComponentOrReplace(transform68)

const cushionPink4 = new Entity('cushionPink4')
engine.addEntity(cushionPink4)
cushionPink4.setParent(_scene)
cushionPink4.addComponentOrReplace(gltfShape7)
const transform69 = new Transform({
  position: new Vector3(11.117506980895996, 5.555566310882568, 13.54067325592041),
  rotation: new Quaternion(1.5394153601527394e-15, -0.7071068286895752, -0.7071068286895752, -8.429369557916289e-8),
  scale: new Vector3(0.8652480840682983, -2.0077297687530518, 2.2515244483947754)
})
cushionPink4.addComponentOrReplace(transform69)

const floorPurple4 = new Entity('floorPurple4')
engine.addEntity(floorPurple4)
floorPurple4.setParent(_scene)
floorPurple4.addComponentOrReplace(gltfShape6)
const transform70 = new Transform({
  position: new Vector3(14.93923568725586, 5.401154518127441, 13.868313789367676),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0733495950698853, 1, 0.47164443135261536)
})
floorPurple4.addComponentOrReplace(transform70)

const cushionPink6 = new Entity('cushionPink6')
engine.addEntity(cushionPink6)
cushionPink6.setParent(_scene)
cushionPink6.addComponentOrReplace(gltfShape7)
const transform71 = new Transform({
  position: new Vector3(11.117506980895996, 5.555566310882568, 17.364002227783203),
  rotation: new Quaternion(1.5394153601527394e-15, -0.7071068286895752, -0.7071068286895752, -8.429369557916289e-8),
  scale: new Vector3(0.8652469515800476, -2.0077292919158936, 2.251523971557617)
})
cushionPink6.addComponentOrReplace(transform71)

const floorPurple6 = new Entity('floorPurple6')
engine.addEntity(floorPurple6)
floorPurple6.setParent(_scene)
floorPurple6.addComponentOrReplace(gltfShape6)
const transform72 = new Transform({
  position: new Vector3(14.93923568725586, 5.401154518127441, 17.69164276123047),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0733495950698853, 1, 0.47164443135261536)
})
floorPurple6.addComponentOrReplace(transform72)

const cushionPink7 = new Entity('cushionPink7')
engine.addEntity(cushionPink7)
cushionPink7.setParent(_scene)
cushionPink7.addComponentOrReplace(gltfShape7)
const transform73 = new Transform({
  position: new Vector3(11.117506980895996, 5.555566310882568, 21.179744720458984),
  rotation: new Quaternion(1.5394153601527394e-15, -0.7071068286895752, -0.7071068286895752, -8.429369557916289e-8),
  scale: new Vector3(0.865246593952179, -2.0077288150787354, 2.251523494720459)
})
cushionPink7.addComponentOrReplace(transform73)

const floorPurple7 = new Entity('floorPurple7')
engine.addEntity(floorPurple7)
floorPurple7.setParent(_scene)
floorPurple7.addComponentOrReplace(gltfShape6)
const transform74 = new Transform({
  position: new Vector3(14.93923568725586, 5.401154518127441, 21.50738525390625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0733495950698853, 1, 0.47164443135261536)
})
floorPurple7.addComponentOrReplace(transform74)

const cushionPink8 = new Entity('cushionPink8')
engine.addEntity(cushionPink8)
cushionPink8.setParent(_scene)
cushionPink8.addComponentOrReplace(gltfShape7)
const transform75 = new Transform({
  position: new Vector3(11.117506980895996, 5.555566310882568, 25.068279266357422),
  rotation: new Quaternion(1.5394153601527394e-15, -0.7071068286895752, -0.7071068286895752, -8.429369557916289e-8),
  scale: new Vector3(0.8652461767196655, -2.007727861404419, 2.2515225410461426)
})
cushionPink8.addComponentOrReplace(transform75)

const floorPurple8 = new Entity('floorPurple8')
engine.addEntity(floorPurple8)
floorPurple8.setParent(_scene)
floorPurple8.addComponentOrReplace(gltfShape6)
const transform76 = new Transform({
  position: new Vector3(14.93923568725586, 5.401154518127441, 25.395919799804688),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0733495950698853, 1, 0.47164443135261536)
})
floorPurple8.addComponentOrReplace(transform76)




function floorPurple8MusicPlay (){
  floorPurple.addComponent(new AudioSource(new AudioClip("sounds/meditation1.mp3")))
  floorPurple2.addComponent(new AudioSource(new AudioClip("sounds/meditation1.mp3")))
  floorPurple3.addComponent(new AudioSource(new AudioClip("sounds/meditation1.mp3")))
  floorPurple4.addComponent(new AudioSource(new AudioClip("sounds/meditation1.mp3")))
  floorPurple5.addComponent(new AudioSource(new AudioClip("sounds/meditation1.mp3")))
  floorPurple6.addComponent(new AudioSource(new AudioClip("sounds/meditation1.mp3")))
  floorPurple7.addComponent(new AudioSource(new AudioClip("sounds/meditation1.mp3")))
  floorPurple8.addComponent(new AudioSource(new AudioClip("sounds/meditation1.mp3")))

  floorPurple.getComponent(AudioSource).playOnce()
  floorPurple2.getComponent(AudioSource).playOnce()
  floorPurple3.getComponent(AudioSource).playOnce()
  floorPurple4.getComponent(AudioSource).playOnce()
  floorPurple5.getComponent(AudioSource).playOnce()
  floorPurple6.getComponent(AudioSource).playOnce()
  floorPurple7.getComponent(AudioSource).playOnce()
  floorPurple8.getComponent(AudioSource).playOnce()
}
function floorPurple8MusicStop (){
  floorPurple.removeComponent(AudioSource)
  floorPurple2.removeComponent(AudioSource)
  floorPurple3.removeComponent(AudioSource)
  floorPurple4.removeComponent(AudioSource)
  floorPurple5.removeComponent(AudioSource)
  floorPurple6.removeComponent(AudioSource)
  floorPurple7.removeComponent(AudioSource)
  floorPurple8.removeComponent(AudioSource)
}






const bloomingGreenAcaciaTree = new Entity('bloomingGreenAcaciaTree')
engine.addEntity(bloomingGreenAcaciaTree)
bloomingGreenAcaciaTree.setParent(_scene)
const transform77 = new Transform({
  position: new Vector3(4.931266784667969, 0, 2.5370702743530273),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5157127380371094, 0.5157127380371094, 0.5157127380371094)
})
bloomingGreenAcaciaTree.addComponentOrReplace(transform77)
const gltfShape8 = new GLTFShape("2dd72eee-1285-43e0-9787-8a60bf4cd46a/Tree_Forest_Green_02/Tree_Forest_Green_02.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
bloomingGreenAcaciaTree.addComponentOrReplace(gltfShape8)

const lightGreenSycamoreTree = new Entity('lightGreenSycamoreTree')
engine.addEntity(lightGreenSycamoreTree)
lightGreenSycamoreTree.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(4.9327392578125, 0, 36.289466857910156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5652282238006592, 2.463242530822754, 1.5652282238006592)
})
lightGreenSycamoreTree.addComponentOrReplace(transform78)
const gltfShape9 = new GLTFShape("eb584cdc-2d37-45a1-a464-45007058b3d5/TreeSycamore_01/TreeSycamore_01.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
lightGreenSycamoreTree.addComponentOrReplace(gltfShape9)

const domeGreenhouse = new Entity('domeGreenhouse')
engine.addEntity(domeGreenhouse)
domeGreenhouse.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(13.85415267944336, 0, 48),
  rotation: new Quaternion(1.9076754065316948e-14, 0.7071068286895752, -8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(2.740736722946167, 2.740741491317749, 2.740736722946167)
})
domeGreenhouse.addComponentOrReplace(transform79)
const gltfShape10 = new GLTFShape("66a1b927-de0d-4114-9ae0-e8b485601040/GreenHouse_01/GreenHouse_01.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
domeGreenhouse.addComponentOrReplace(gltfShape10)




const caribbeanShoreWithRocksPatch3 = new Entity('caribbeanShoreWithRocksPatch3')
engine.addEntity(caribbeanShoreWithRocksPatch3)
caribbeanShoreWithRocksPatch3.setParent(_scene)
const gltfShape11 = new GLTFShape("75f2ea4e-e061-4627-ae43-9460aa106066/WaterPatchCurve_02/WaterPatchCurve_02.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
caribbeanShoreWithRocksPatch3.addComponentOrReplace(gltfShape11)
const transform80 = new Transform({
  position: new Vector3(48.875205993652344, 0, 30.659557342529297),
  rotation: new Quaternion(2.2097539788269016e-16, -0.2902846932411194, 3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(1.5344347953796387, 2.2005085945129395, 1.5344347953796387)
})
caribbeanShoreWithRocksPatch3.addComponentOrReplace(transform80)

const caribbeanShoreWithRocksPatch = new Entity('caribbeanShoreWithRocksPatch')
engine.addEntity(caribbeanShoreWithRocksPatch)
caribbeanShoreWithRocksPatch.setParent(_scene)
caribbeanShoreWithRocksPatch.addComponentOrReplace(gltfShape11)
const transform81 = new Transform({
  position: new Vector3(48.875205993652344, 0, 30.659557342529297),
  rotation: new Quaternion(-4.594814925675678e-16, -0.47139668464660645, 5.619486032060195e-8, -0.8819212913513184),
  scale: new Vector3(1.5344350337982178, 2.2005085945129395, 1.5344350337982178)
})
caribbeanShoreWithRocksPatch.addComponentOrReplace(transform81)

const caribbeanShoreWithRocksPatch2 = new Entity('caribbeanShoreWithRocksPatch2')
engine.addEntity(caribbeanShoreWithRocksPatch2)
caribbeanShoreWithRocksPatch2.setParent(_scene)
caribbeanShoreWithRocksPatch2.addComponentOrReplace(gltfShape11)
const transform82 = new Transform({
  position: new Vector3(48.875205993652344, 0, 30.659557342529297),
  rotation: new Quaternion(6.02934595467862e-17, 0.8819213509559631, -1.0513321058169822e-7, -0.4713967442512512),
  scale: new Vector3(1.534447431564331, 2.2005085945129395, 1.607517957687378)
})
caribbeanShoreWithRocksPatch2.addComponentOrReplace(transform82)

const caribbeanShoreWithRocksPatch4 = new Entity('caribbeanShoreWithRocksPatch4')
engine.addEntity(caribbeanShoreWithRocksPatch4)
caribbeanShoreWithRocksPatch4.setParent(_scene)
caribbeanShoreWithRocksPatch4.addComponentOrReplace(gltfShape11)
const transform83 = new Transform({
  position: new Vector3(48.875205993652344, 0, 30.659557342529297),
  rotation: new Quaternion(1.7828730638634778e-15, 0.9569403529167175, -1.1407616540282106e-7, 0.2902846932411194),
  scale: new Vector3(1.5344352722167969, 2.2005085945129395, 1.5344352722167969)
})
caribbeanShoreWithRocksPatch4.addComponentOrReplace(transform83)

const summoningStonePedestal = new Entity('summoningStonePedestal')
engine.addEntity(summoningStonePedestal)
summoningStonePedestal.setParent(_scene)
const transform84 = new Transform({
  position: new Vector3(49.45392990112305, 0.20670419931411743, 10.02518081665039),
  rotation: new Quaternion(0, 0, 1, -5.960464477539063e-8),
  scale: new Vector3(1.6055229902267456, 1.0152318477630615, 1.6055229902267456)
})
summoningStonePedestal.addComponentOrReplace(transform84)
const gltfShape12 = new GLTFShape("3abf2000-7b36-4be4-a2a0-444fe1d67115/Stone_Pedestal_01/Stone_Pedestal_01.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
summoningStonePedestal.addComponentOrReplace(gltfShape12)

const curvedStonesPath2 = new Entity('curvedStonesPath2')
engine.addEntity(curvedStonesPath2)
curvedStonesPath2.setParent(_scene)
const gltfShape13 = new GLTFShape("18bd45be-e0b6-492e-a0a2-2ec5f8811971/StonePathCurve_01/StonePathCurve_01.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
curvedStonesPath2.addComponentOrReplace(gltfShape13)
const transform85 = new Transform({
  position: new Vector3(49, 0, 36.5),
  rotation: new Quaternion(3.7531136273078695e-15, 0.7071067094802856, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(2.999969005584717, 3, 2.999969005584717)
})
curvedStonesPath2.addComponentOrReplace(transform85)

const curvedStonesPath3 = new Entity('curvedStonesPath3')
engine.addEntity(curvedStonesPath3)
curvedStonesPath3.setParent(_scene)
curvedStonesPath3.addComponentOrReplace(gltfShape13)
const transform86 = new Transform({
  position: new Vector3(55, 0, 30.5),
  rotation: new Quaternion(0, 0, 2.9802322387695312e-8, 1),
  scale: new Vector3(3, 3, 3)
})
curvedStonesPath3.addComponentOrReplace(transform86)

const curvedStonesPath4 = new Entity('curvedStonesPath4')
engine.addEntity(curvedStonesPath4)
curvedStonesPath4.setParent(_scene)
curvedStonesPath4.addComponentOrReplace(gltfShape13)
const transform87 = new Transform({
  position: new Vector3(43, 7.152557373046875e-7, 30.5),
  rotation: new Quaternion(-2.980232949312267e-8, -1, 1.1920928244535389e-7, -2.980232594040899e-8),
  scale: new Vector3(3, 3, 3)
})
curvedStonesPath4.addComponentOrReplace(transform87)

const curvedStonesPath5 = new Entity('curvedStonesPath5')
engine.addEntity(curvedStonesPath5)
curvedStonesPath5.setParent(_scene)
curvedStonesPath5.addComponentOrReplace(gltfShape13)
const transform88 = new Transform({
  position: new Vector3(49, 0, 24.5),
  rotation: new Quaternion(6.133764100070072e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071067094802856),
  scale: new Vector3(2.999957799911499, 3, 2.999957799911499)
})
curvedStonesPath5.addComponentOrReplace(transform88)

const theFountainOfPurity = new Entity('theFountainOfPurity')
engine.addEntity(theFountainOfPurity)
theFountainOfPurity.setParent(_scene)
const transform89 = new Transform({
  position: new Vector3(49.14775085449219, 0, 30.509479522705078),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.3766860961914062, 2.3766860961914062, 2.3766860961914062)
})
theFountainOfPurity.addComponentOrReplace(transform89)
const gltfShape14 = new GLTFShape("b4c64a17-c3b8-45b6-bd60-6a90a79834ac/Fountain_02/Fountain_02.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
theFountainOfPurity.addComponentOrReplace(gltfShape14)

const mediumStoneSlabTile = new Entity('mediumStoneSlabTile')
engine.addEntity(mediumStoneSlabTile)
mediumStoneSlabTile.setParent(_scene)
const transform90 = new Transform({
  position: new Vector3(51.5, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9999998807907104, 2, 1.9999992847442627)
})
mediumStoneSlabTile.addComponentOrReplace(transform90)
const gltfShape15 = new GLTFShape("15ebf945-a8c6-4f2e-993d-660b0e93441d/StoneSlabMedium_01/StoneSlabMedium_01.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
mediumStoneSlabTile.addComponentOrReplace(gltfShape15)

const mediumStoneSlabTile2 = new Entity('mediumStoneSlabTile2')
engine.addEntity(mediumStoneSlabTile2)
mediumStoneSlabTile2.setParent(_scene)
mediumStoneSlabTile2.addComponentOrReplace(gltfShape15)
const transform91 = new Transform({
  position: new Vector3(51.5, 0, 21.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9999998807907104, 2, 1.9999992847442627)
})
mediumStoneSlabTile2.addComponentOrReplace(transform91)

const mediumStoneSlabTile3 = new Entity('mediumStoneSlabTile3')
engine.addEntity(mediumStoneSlabTile3)
mediumStoneSlabTile3.setParent(_scene)
mediumStoneSlabTile3.addComponentOrReplace(gltfShape15)
const transform92 = new Transform({
  position: new Vector3(51.5, 0, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9999998807907104, 2, 1.9999992847442627)
})
mediumStoneSlabTile3.addComponentOrReplace(transform92)

const mediumStoneSlabTile5 = new Entity('mediumStoneSlabTile5')
engine.addEntity(mediumStoneSlabTile5)
mediumStoneSlabTile5.setParent(_scene)
mediumStoneSlabTile5.addComponentOrReplace(gltfShape15)
const transform93 = new Transform({
  position: new Vector3(51.5, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9999998807907104, 2, 1.9999992847442627)
})
mediumStoneSlabTile5.addComponentOrReplace(transform93)

const grassSprout = new Entity('grassSprout')
engine.addEntity(grassSprout)
grassSprout.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(40.25813293457031, 0, 48.32223892211914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4, 4, 4)
})
grassSprout.addComponentOrReplace(transform94)
const gltfShape16 = new GLTFShape("43ab9bc6-bc2a-4ee1-815a-e12f60a709ae/Grass_03/Grass_03.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
grassSprout.addComponentOrReplace(gltfShape16)

const dandelion = new Entity('dandelion')
engine.addEntity(dandelion)
dandelion.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(46, 0, 42.55558776855469),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 3.5)
})
dandelion.addComponentOrReplace(transform95)
const gltfShape17 = new GLTFShape("009be9a4-294f-4ff4-88b6-04d13a51af0d/Grass_04/Grass_04.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
dandelion.addComponentOrReplace(gltfShape17)

const ostrichFerns = new Entity('ostrichFerns')
engine.addEntity(ostrichFerns)
ostrichFerns.setParent(_scene)
const transform96 = new Transform({
  position: new Vector3(46, 0, 33.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 3, 3)
})
ostrichFerns.addComponentOrReplace(transform96)
const gltfShape18 = new GLTFShape("af9213a3-3310-4564-9633-dd56815c85fa/Grass_02/Grass_02.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
ostrichFerns.addComponentOrReplace(gltfShape18)

const birdSNestFern2 = new Entity('birdSNestFern2')
engine.addEntity(birdSNestFern2)
birdSNestFern2.setParent(_scene)
const gltfShape19 = new GLTFShape("f17f4ed8-f0a2-48f0-a461-95d426b58d54/Plant_01/Plant_01.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
birdSNestFern2.addComponentOrReplace(gltfShape19)
const transform97 = new Transform({
  position: new Vector3(55.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 2.5)
})
birdSNestFern2.addComponentOrReplace(transform97)

const ostrichFerns2 = new Entity('ostrichFerns2')
engine.addEntity(ostrichFerns2)
ostrichFerns2.setParent(_scene)
ostrichFerns2.addComponentOrReplace(gltfShape18)
const transform98 = new Transform({
  position: new Vector3(58.5, 0, 22.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 3, 3)
})
ostrichFerns2.addComponentOrReplace(transform98)

const dandelion2 = new Entity('dandelion2')
engine.addEntity(dandelion2)
dandelion2.setParent(_scene)
dandelion2.addComponentOrReplace(gltfShape17)
const transform99 = new Transform({
  position: new Vector3(59, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 3.5)
})
dandelion2.addComponentOrReplace(transform99)

const grassSprout2 = new Entity('grassSprout2')
engine.addEntity(grassSprout2)
grassSprout2.setParent(_scene)
grassSprout2.addComponentOrReplace(gltfShape16)
const transform100 = new Transform({
  position: new Vector3(57.5, 0, 39),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4, 4, 4)
})
grassSprout2.addComponentOrReplace(transform100)

const grass4 = new Entity('grass4')
engine.addEntity(grass4)
grass4.setParent(_scene)
const gltfShape20 = new GLTFShape("fc6bbdda-fea8-42db-9a92-380f17691934/Grass 1.glb")
gltfShape20.withCollisions = true
gltfShape20.isPointerBlocker = true
gltfShape20.visible = true
grass4.addComponentOrReplace(gltfShape20)
const transform101 = new Transform({
  position: new Vector3(56, 0, 42),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 3, 3)
})
grass4.addComponentOrReplace(transform101)

const ostrichFerns3 = new Entity('ostrichFerns3')
engine.addEntity(ostrichFerns3)
ostrichFerns3.setParent(_scene)
ostrichFerns3.addComponentOrReplace(gltfShape18)
const transform102 = new Transform({
  position: new Vector3(43.367713928222656, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 3, 3)
})
ostrichFerns3.addComponentOrReplace(transform102)

const dandelion3 = new Entity('dandelion3')
engine.addEntity(dandelion3)
dandelion3.setParent(_scene)
dandelion3.addComponentOrReplace(gltfShape17)
const transform103 = new Transform({
  position: new Vector3(57.5, 0, 37.462677001953125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 3.5)
})
dandelion3.addComponentOrReplace(transform103)

const grass5 = new Entity('grass5')
engine.addEntity(grass5)
grass5.setParent(_scene)
const gltfShape21 = new GLTFShape("14aa99ba-926f-4641-a1bd-b23c0d0bf833/Grass 2.glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
grass5.addComponentOrReplace(gltfShape21)
const transform104 = new Transform({
  position: new Vector3(53, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5149999856948853, 1.5)
})
grass5.addComponentOrReplace(transform104)

const birdSNestFern4 = new Entity('birdSNestFern4')
engine.addEntity(birdSNestFern4)
birdSNestFern4.setParent(_scene)
birdSNestFern4.addComponentOrReplace(gltfShape19)
const transform105 = new Transform({
  position: new Vector3(55.25, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 2.5)
})
birdSNestFern4.addComponentOrReplace(transform105)

const ostrichFerns4 = new Entity('ostrichFerns4')
engine.addEntity(ostrichFerns4)
ostrichFerns4.setParent(_scene)
ostrichFerns4.addComponentOrReplace(gltfShape18)
const transform106 = new Transform({
  position: new Vector3(53, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 3, 3)
})
ostrichFerns4.addComponentOrReplace(transform106)

const grass11 = new Entity('grass11')
engine.addEntity(grass11)
grass11.setParent(_scene)
grass11.addComponentOrReplace(gltfShape21)
const transform107 = new Transform({
  position: new Vector3(55.5, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5149999856948853, 1.5)
})
grass11.addComponentOrReplace(transform107)

const birdSNestFern5 = new Entity('birdSNestFern5')
engine.addEntity(birdSNestFern5)
birdSNestFern5.setParent(_scene)
birdSNestFern5.addComponentOrReplace(gltfShape19)
const transform108 = new Transform({
  position: new Vector3(44, 0, 41),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 2.5)
})
birdSNestFern5.addComponentOrReplace(transform108)

const grassSprout4 = new Entity('grassSprout4')
engine.addEntity(grassSprout4)
grassSprout4.setParent(_scene)
grassSprout4.addComponentOrReplace(gltfShape16)
const transform109 = new Transform({
  position: new Vector3(44.044639587402344, 0, 15.938394546508789),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4, 4, 4)
})
grassSprout4.addComponentOrReplace(transform109)

const birdSNestFern6 = new Entity('birdSNestFern6')
engine.addEntity(birdSNestFern6)
birdSNestFern6.setParent(_scene)
birdSNestFern6.addComponentOrReplace(gltfShape19)
const transform110 = new Transform({
  position: new Vector3(40.09220504760742, 0, 12.550609588623047),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 2.5)
})
birdSNestFern6.addComponentOrReplace(transform110)

const sunflower = new Entity('sunflower')
engine.addEntity(sunflower)
sunflower.setParent(_scene)
const transform111 = new Transform({
  position: new Vector3(40.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 2, 2)
})
sunflower.addComponentOrReplace(transform111)
const gltfShape22 = new GLTFShape("c5124c22-c518-45a6-8b9a-2f749e8de161/Flower_04/Flower_04.glb")
gltfShape22.withCollisions = true
gltfShape22.isPointerBlocker = true
gltfShape22.visible = true
sunflower.addComponentOrReplace(gltfShape22)

const sweetPea = new Entity('sweetPea')
engine.addEntity(sweetPea)
sweetPea.setParent(_scene)
const transform112 = new Transform({
  position: new Vector3(58, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sweetPea.addComponentOrReplace(transform112)
const gltfShape23 = new GLTFShape("8b69ff81-da01-4334-bfc1-281a42c810e3/Plant_04/Plant_04.glb")
gltfShape23.withCollisions = true
gltfShape23.isPointerBlocker = true
gltfShape23.visible = true
sweetPea.addComponentOrReplace(gltfShape23)

const balsamFlower = new Entity('balsamFlower')
engine.addEntity(balsamFlower)
balsamFlower.setParent(_scene)
const transform113 = new Transform({
  position: new Vector3(56.5, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1.5)
})
balsamFlower.addComponentOrReplace(transform113)
const gltfShape24 = new GLTFShape("71806ca6-1a2b-4d8b-b919-ae96241f8c08/Plant_02/Plant_02.glb")
gltfShape24.withCollisions = true
gltfShape24.isPointerBlocker = true
gltfShape24.visible = true
balsamFlower.addComponentOrReplace(gltfShape24)

const rose2 = new Entity('rose2')
engine.addEntity(rose2)
rose2.setParent(_scene)
const gltfShape25 = new GLTFShape("18bbb621-1c3e-4ee1-ba0a-a7c77dd01cbb/Flower_03/Flower_03.glb")
gltfShape25.withCollisions = true
gltfShape25.isPointerBlocker = true
gltfShape25.visible = true
rose2.addComponentOrReplace(gltfShape25)
const transform114 = new Transform({
  position: new Vector3(56.5, 0, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.735767364501953, 2.735767364501953, 2.735767364501953)
})
rose2.addComponentOrReplace(transform114)

const balsamFlower2 = new Entity('balsamFlower2')
engine.addEntity(balsamFlower2)
balsamFlower2.setParent(_scene)
balsamFlower2.addComponentOrReplace(gltfShape24)
const transform115 = new Transform({
  position: new Vector3(42.5, 0, 15.75),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1.5)
})
balsamFlower2.addComponentOrReplace(transform115)

const balsamFlower3 = new Entity('balsamFlower3')
engine.addEntity(balsamFlower3)
balsamFlower3.setParent(_scene)
balsamFlower3.addComponentOrReplace(gltfShape24)
const transform116 = new Transform({
  position: new Vector3(46.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1.5)
})
balsamFlower3.addComponentOrReplace(transform116)

const balsamFlower4 = new Entity('balsamFlower4')
engine.addEntity(balsamFlower4)
balsamFlower4.setParent(_scene)
balsamFlower4.addComponentOrReplace(gltfShape24)
const transform117 = new Transform({
  position: new Vector3(46.5, 0, 41.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1.5)
})
balsamFlower4.addComponentOrReplace(transform117)

const mediumStoneSlabTile4 = new Entity('mediumStoneSlabTile4')
engine.addEntity(mediumStoneSlabTile4)
mediumStoneSlabTile4.setParent(_scene)
mediumStoneSlabTile4.addComponentOrReplace(gltfShape15)
const transform118 = new Transform({
  position: new Vector3(51.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9999998807907104, 2, 1.9999992847442627)
})
mediumStoneSlabTile4.addComponentOrReplace(transform118)

const mediumStoneSlabTile6 = new Entity('mediumStoneSlabTile6')
engine.addEntity(mediumStoneSlabTile6)
mediumStoneSlabTile6.setParent(_scene)
mediumStoneSlabTile6.addComponentOrReplace(gltfShape15)
const transform119 = new Transform({
  position: new Vector3(51.5, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9999998807907104, 2, 1.9999992847442627)
})
mediumStoneSlabTile6.addComponentOrReplace(transform119)

const mediumStoneSlabTile7 = new Entity('mediumStoneSlabTile7')
engine.addEntity(mediumStoneSlabTile7)
mediumStoneSlabTile7.setParent(_scene)
mediumStoneSlabTile7.addComponentOrReplace(gltfShape15)
const transform120 = new Transform({
  position: new Vector3(51.5, 0, 44),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9999998807907104, 2, 1.9999992847442627)
})
mediumStoneSlabTile7.addComponentOrReplace(transform120)

const mediumStoneSlabTile8 = new Entity('mediumStoneSlabTile8')
engine.addEntity(mediumStoneSlabTile8)
mediumStoneSlabTile8.setParent(_scene)
mediumStoneSlabTile8.addComponentOrReplace(gltfShape15)
const transform121 = new Transform({
  position: new Vector3(51.5, 0, 44),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9999998807907104, 2, 1.9999992847442627)
})
mediumStoneSlabTile8.addComponentOrReplace(transform121)

const mediumStoneSlabTile9 = new Entity('mediumStoneSlabTile9')
engine.addEntity(mediumStoneSlabTile9)
mediumStoneSlabTile9.setParent(_scene)
mediumStoneSlabTile9.addComponentOrReplace(gltfShape15)
const transform122 = new Transform({
  position: new Vector3(51.5, 0, 42),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9999998807907104, 2, 1.9999992847442627)
})
mediumStoneSlabTile9.addComponentOrReplace(transform122)

const grass3 = new Entity('grass3')
engine.addEntity(grass3)
grass3.setParent(_scene)
grass3.addComponentOrReplace(gltfShape20)
const transform123 = new Transform({
  position: new Vector3(45, 0, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 3, 3)
})
grass3.addComponentOrReplace(transform123)

const birdSNestFern3 = new Entity('birdSNestFern3')
engine.addEntity(birdSNestFern3)
birdSNestFern3.setParent(_scene)
birdSNestFern3.addComponentOrReplace(gltfShape19)
const transform124 = new Transform({
  position: new Vector3(55.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 2.5)
})
birdSNestFern3.addComponentOrReplace(transform124)

const grass6 = new Entity('grass6')
engine.addEntity(grass6)
grass6.setParent(_scene)
grass6.addComponentOrReplace(gltfShape21)
const transform125 = new Transform({
  position: new Vector3(41.5, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5149999856948853, 1.5)
})
grass6.addComponentOrReplace(transform125)

const birdSNestFern7 = new Entity('birdSNestFern7')
engine.addEntity(birdSNestFern7)
birdSNestFern7.setParent(_scene)
birdSNestFern7.addComponentOrReplace(gltfShape19)
const transform126 = new Transform({
  position: new Vector3(55.25, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 2.5)
})
birdSNestFern7.addComponentOrReplace(transform126)

const grass7 = new Entity('grass7')
engine.addEntity(grass7)
grass7.setParent(_scene)
grass7.addComponentOrReplace(gltfShape21)
const transform127 = new Transform({
  position: new Vector3(53, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5149999856948853, 1.5)
})
grass7.addComponentOrReplace(transform127)

const ostrichFerns5 = new Entity('ostrichFerns5')
engine.addEntity(ostrichFerns5)
ostrichFerns5.setParent(_scene)
ostrichFerns5.addComponentOrReplace(gltfShape18)
const transform128 = new Transform({
  position: new Vector3(53, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 3, 3)
})
ostrichFerns5.addComponentOrReplace(transform128)

const birdSNestFern8 = new Entity('birdSNestFern8')
engine.addEntity(birdSNestFern8)
birdSNestFern8.setParent(_scene)
birdSNestFern8.addComponentOrReplace(gltfShape19)
const transform129 = new Transform({
  position: new Vector3(40.889652252197266, 0, 19.867555618286133),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 2.5)
})
birdSNestFern8.addComponentOrReplace(transform129)

const grass13 = new Entity('grass13')
engine.addEntity(grass13)
grass13.setParent(_scene)
grass13.addComponentOrReplace(gltfShape21)
const transform130 = new Transform({
  position: new Vector3(45.04769515991211, 0, 44.106422424316406),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5149999856948853, 1.5)
})
grass13.addComponentOrReplace(transform130)

const birdSNestFern9 = new Entity('birdSNestFern9')
engine.addEntity(birdSNestFern9)
birdSNestFern9.setParent(_scene)
birdSNestFern9.addComponentOrReplace(gltfShape19)
const transform131 = new Transform({
  position: new Vector3(55.25, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 2.5)
})
birdSNestFern9.addComponentOrReplace(transform131)

const grass14 = new Entity('grass14')
engine.addEntity(grass14)
grass14.setParent(_scene)
grass14.addComponentOrReplace(gltfShape21)
const transform132 = new Transform({
  position: new Vector3(39.754581451416016, 0, 46.255126953125),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5000033378601074, 1.5149999856948853, 1.5000033378601074)
})
grass14.addComponentOrReplace(transform132)

const ostrichFerns6 = new Entity('ostrichFerns6')
engine.addEntity(ostrichFerns6)
ostrichFerns6.setParent(_scene)
ostrichFerns6.addComponentOrReplace(gltfShape18)
const transform133 = new Transform({
  position: new Vector3(53, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 3, 3)
})
ostrichFerns6.addComponentOrReplace(transform133)

const grass15 = new Entity('grass15')
engine.addEntity(grass15)
grass15.setParent(_scene)
grass15.addComponentOrReplace(gltfShape21)
const transform134 = new Transform({
  position: new Vector3(59.56111526489258, 0, 11.532114028930664),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5149999856948853, 1.5)
})
grass15.addComponentOrReplace(transform134)

const grass16 = new Entity('grass16')
engine.addEntity(grass16)
grass16.setParent(_scene)
grass16.addComponentOrReplace(gltfShape20)
const transform135 = new Transform({
  position: new Vector3(57.8354377746582, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 3, 3)
})
grass16.addComponentOrReplace(transform135)

const grassTile = new Entity('grassTile')
engine.addEntity(grassTile)
grassTile.setParent(_scene)
const transform136 = new Transform({
  position: new Vector3(49.29128646850586, 0.1564531922340393, 9.849996566772461),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.374999523162842, 3.375, 3.374999523162842)
})
grassTile.addComponentOrReplace(transform136)
const gltfShape26 = new GLTFShape("7f2dbcb5-40f5-4e2f-9409-1886d26ce068/FloorBlock_05/FloorBlock_05.glb")
gltfShape26.withCollisions = true
gltfShape26.isPointerBlocker = true
gltfShape26.visible = true
grassTile.addComponentOrReplace(gltfShape26)

const wallPlainGlass7 = new Entity('wallPlainGlass7')
engine.addEntity(wallPlainGlass7)
wallPlainGlass7.setParent(_scene)
const transform137 = new Transform({
  position: new Vector3(34.317665100097656, 0, 63.908599853515625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-16.693269729614258, 2.837435722351074, 0.9999991655349731)
})
wallPlainGlass7.addComponentOrReplace(transform137)
wallPlainGlass7.addComponentOrReplace(gltfShape4)

const wallPlainGlass8 = new Entity('wallPlainGlass8')
engine.addEntity(wallPlainGlass8)
wallPlainGlass8.setParent(_scene)
wallPlainGlass8.addComponentOrReplace(gltfShape4)
const transform138 = new Transform({
  position: new Vector3(34.29198455810547, 0, 0.38916778564453125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-16.661821365356445, 2.837435722351074, 0.9999997019767761)
})
wallPlainGlass8.addComponentOrReplace(transform138)

const wallPlainGlass11 = new Entity('wallPlainGlass11')
engine.addEntity(wallPlainGlass11)
wallPlainGlass11.setParent(_scene)
wallPlainGlass11.addComponentOrReplace(gltfShape4)
const transform139 = new Transform({
  position: new Vector3(0.002307891845703125, 0, 0.3891716003417969),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-17.177038192749023, 2.837435722351074, 0.9999992251396179)
})
wallPlainGlass11.addComponentOrReplace(transform139)

const wallPlainGlass12 = new Entity('wallPlainGlass12')
engine.addEntity(wallPlainGlass12)
wallPlainGlass12.setParent(_scene)
wallPlainGlass12.addComponentOrReplace(gltfShape4)
const transform140 = new Transform({
  position: new Vector3(0.002307891845703125, 0, 63.99998092651367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-17.177038192749023, 2.837435722351074, 0.9999992251396179)
})
wallPlainGlass12.addComponentOrReplace(transform140)

const wallPlainGlass13 = new Entity('wallPlainGlass13')
engine.addEntity(wallPlainGlass13)
wallPlainGlass13.setParent(_scene)
wallPlainGlass13.addComponentOrReplace(gltfShape4)
const transform141 = new Transform({
  position: new Vector3(0.09899139404296875, 0, 0.3891735076904297),
  rotation: new Quaternion(-1.4766689593651537e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(-31.751482009887695, 2.837435722351074, 1.0000011920928955)
})
wallPlainGlass13.addComponentOrReplace(transform141)

const wallPlainWhite = new Entity('wallPlainWhite')
engine.addEntity(wallPlainWhite)
wallPlainWhite.setParent(_scene)
const transform142 = new Transform({
  position: new Vector3(70.61174011230469, 0, 54.628841400146484),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-12.695215225219727, 2.7220582962036133, 0.9999998211860657)
})
wallPlainWhite.addComponentOrReplace(transform142)
const gltfShape27 = new GLTFShape("45eb9e1a-2eca-4b6f-a5c4-b0278dc7e635/PlainWhiteWall.glb")
gltfShape27.withCollisions = true
gltfShape27.isPointerBlocker = true
gltfShape27.visible = true
wallPlainWhite.addComponentOrReplace(gltfShape27)

const wallPlainWhite2 = new Entity('wallPlainWhite2')
engine.addEntity(wallPlainWhite2)
wallPlainWhite2.setParent(_scene)
wallPlainWhite2.addComponentOrReplace(gltfShape27)
const transform143 = new Transform({
  position: new Vector3(70.61174011230469, 0, 4.75139856338501),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-5.636908054351807, 2.7220582962036133, 0.9999998807907104)
})
wallPlainWhite2.addComponentOrReplace(transform143)

const wallPlainWhite3 = new Entity('wallPlainWhite3')
engine.addEntity(wallPlainWhite3)
wallPlainWhite3.setParent(_scene)
wallPlainWhite3.addComponentOrReplace(gltfShape27)
const transform144 = new Transform({
  position: new Vector3(70.61174011230469, 0, 4.433582305908203),
  rotation: new Quaternion(8.817940676788736e-16, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(-25.094375610351562, 2.7220582962036133, 1.000001311302185)
})
wallPlainWhite3.addComponentOrReplace(transform144)

const floorWood = new Entity('floorWood')
engine.addEntity(floorWood)
floorWood.setParent(_scene)
const transform145 = new Transform({
  position: new Vector3(70.73200988769531, 0, 29.081710815429688),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(-6.367176055908203, 6.367137908935547, 6.252601623535156)
})
floorWood.addComponentOrReplace(transform145)
const gltfShape28 = new GLTFShape("8880cce8-844b-4686-9fd8-a73874be7983/WoodFloor.glb")
gltfShape28.withCollisions = true
gltfShape28.isPointerBlocker = true
gltfShape28.visible = true
floorWood.addComponentOrReplace(gltfShape28)

const floorWood2 = new Entity('floorWood2')
engine.addEntity(floorWood2)
floorWood2.setParent(_scene)
floorWood2.addComponentOrReplace(gltfShape28)
const transform146 = new Transform({
  position: new Vector3(70.73200988769531, 0, 4.707409858703613),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(-6.367187976837158, 6.367137908935547, 6.2526068687438965)
})
floorWood2.addComponentOrReplace(transform146)

const wallPlainWhite7 = new Entity('wallPlainWhite7')
engine.addEntity(wallPlainWhite7)
wallPlainWhite7.setParent(_scene)
wallPlainWhite7.addComponentOrReplace(gltfShape27)
const transform147 = new Transform({
  position: new Vector3(70.61174011230469, 10.897071838378906, 4.434879302978516),
  rotation: new Quaternion(0.5, 0.5, 0.4999999403953552, -0.5000000596046448),
  scale: new Vector3(-10.387873649597168, 6.334134101867676, 1.000001072883606)
})
wallPlainWhite7.addComponentOrReplace(transform147)

const woodenDoor = new Entity('woodenDoor')
engine.addEntity(woodenDoor)
woodenDoor.setParent(_scene)
const transform148 = new Transform({
  position: new Vector3(84.92335510253906, 0, 4.540449142456055),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.913604736328125, 1.913604736328125, 1.913604736328125)
})
woodenDoor.addComponentOrReplace(transform148)



const wallPlainWhite5 = new Entity('wallPlainWhite5')
engine.addEntity(wallPlainWhite5)
wallPlainWhite5.setParent(_scene)
wallPlainWhite5.addComponentOrReplace(gltfShape27)
const transform149 = new Transform({
  position: new Vector3(84.54092407226562, 0, 4.741893768310547),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-5.727287769317627, 2.7220582962036133, 0.9999998807907104)
})
wallPlainWhite5.addComponentOrReplace(transform149)

const wallPlainWhite6 = new Entity('wallPlainWhite6')
engine.addEntity(wallPlainWhite6)
wallPlainWhite6.setParent(_scene)
wallPlainWhite6.addComponentOrReplace(gltfShape27)
const transform150 = new Transform({
  position: new Vector3(81.3705825805664, 5.051458358764648, 4.741883754730225),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-1.9305164813995361, 1.4429187774658203, 0.9999998807907104)
})
wallPlainWhite6.addComponentOrReplace(transform150)

const dropChandelier = new Entity('dropChandelier')
engine.addEntity(dropChandelier)
dropChandelier.setParent(_scene)
const transform151 = new Transform({
  position: new Vector3(83.26651763916016, 2.3212451934814453, 43.01170349121094),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.1046218872070312, 2.1046218872070312, 2.1046218872070312)
})
dropChandelier.addComponentOrReplace(transform151)

const greenSycamoreTree = new Entity('greenSycamoreTree')
engine.addEntity(greenSycamoreTree)
greenSycamoreTree.setParent(_scene)
const transform152 = new Transform({
  position: new Vector3(28.241941452026367, 0, 55.69593811035156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.1777584552764893, 2.1777584552764893, 2.1777584552764893)
})
greenSycamoreTree.addComponentOrReplace(transform152)
const gltfShape29 = new GLTFShape("fd4168d3-1040-458d-b90e-fe5f441d593b/TreeSycamore_03/TreeSycamore_03.glb")
gltfShape29.withCollisions = true
gltfShape29.isPointerBlocker = true
gltfShape29.visible = true
greenSycamoreTree.addComponentOrReplace(gltfShape29)

const greenRoundedPineTree = new Entity('greenRoundedPineTree')
engine.addEntity(greenRoundedPineTree)
greenRoundedPineTree.setParent(_scene)
const transform153 = new Transform({
  position: new Vector3(60.425540924072266, 0, 56.410404205322266),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.808837890625, 2.808837890625, 2.808837890625)
})
greenRoundedPineTree.addComponentOrReplace(transform153)
const gltfShape30 = new GLTFShape("338c2b2a-65b4-4012-8a19-06eab5c861d6/TreeRoundPine_02/TreeRoundPine_02.glb")
gltfShape30.withCollisions = true
gltfShape30.isPointerBlocker = true
gltfShape30.visible = true
greenRoundedPineTree.addComponentOrReplace(gltfShape30)

const cactusWand = new Entity('cactusWand')
engine.addEntity(cactusWand)
cactusWand.setParent(_scene)
const transform154 = new Transform({
  position: new Vector3(53.308265686035156, 0, 42.13688278198242),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.301189422607422, 5.301189422607422, 5.301189422607422)
})
cactusWand.addComponentOrReplace(transform154)
const gltfShape31 = new GLTFShape("5f25759e-dd1b-4294-9bc7-d8e66c198e9f/PlantSF_07/PlantSF_07.glb")
gltfShape31.withCollisions = true
gltfShape31.isPointerBlocker = true
gltfShape31.visible = true
cactusWand.addComponentOrReplace(gltfShape31)

const cactusWand2 = new Entity('cactusWand2')
engine.addEntity(cactusWand2)
cactusWand2.setParent(_scene)
cactusWand2.addComponentOrReplace(gltfShape31)
const transform155 = new Transform({
  position: new Vector3(42.183509826660156, 0, 17.469711303710938),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.4077227115631104, 3.4077227115631104, 3.4077227115631104)
})
cactusWand2.addComponentOrReplace(transform155)

const cactusWand3 = new Entity('cactusWand3')
engine.addEntity(cactusWand3)
cactusWand3.setParent(_scene)
cactusWand3.addComponentOrReplace(gltfShape31)
const transform156 = new Transform({
  position: new Vector3(54.13194274902344, 0, 17.469711303710938),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.4077227115631104, 3.4077227115631104, 3.4077227115631104)
})
cactusWand3.addComponentOrReplace(transform156)

const cactusWand4 = new Entity('cactusWand4')
engine.addEntity(cactusWand4)
cactusWand4.setParent(_scene)
cactusWand4.addComponentOrReplace(gltfShape31)
const transform157 = new Transform({
  position: new Vector3(45.6653938293457, 0, 40.457054138183594),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.4077227115631104, 3.4077227115631104, 3.4077227115631104)
})
cactusWand4.addComponentOrReplace(transform157)

const javaFern = new Entity('javaFern')
engine.addEntity(javaFern)
javaFern.setParent(_scene)
const transform158 = new Transform({
  position: new Vector3(43.555946350097656, 0, 46.952613830566406),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.13470458984375, 5.13470458984375, 5.13470458984375)
})
javaFern.addComponentOrReplace(transform158)
const gltfShape32 = new GLTFShape("734c6696-dc46-4f79-a817-41319bcc7395/Grass_01/Grass_01.glb")
gltfShape32.withCollisions = true
gltfShape32.isPointerBlocker = true
gltfShape32.visible = true
javaFern.addComponentOrReplace(gltfShape32)

const javaFern2 = new Entity('javaFern2')
engine.addEntity(javaFern2)
javaFern2.setParent(_scene)
javaFern2.addComponentOrReplace(gltfShape32)
const transform159 = new Transform({
  position: new Vector3(57.12166976928711, 0, 13.650632858276367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.13470458984375, 5.13470458984375, 5.13470458984375)
})
javaFern2.addComponentOrReplace(transform159)

const javaFern3 = new Entity('javaFern3')
engine.addEntity(javaFern3)
javaFern3.setParent(_scene)
javaFern3.addComponentOrReplace(gltfShape32)
const transform160 = new Transform({
  position: new Vector3(56.57776641845703, 0, 48.87390899658203),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.13470458984375, 5.13470458984375, 5.13470458984375)
})
javaFern3.addComponentOrReplace(transform160)

const javaFern4 = new Entity('javaFern4')
engine.addEntity(javaFern4)
javaFern4.setParent(_scene)
javaFern4.addComponentOrReplace(gltfShape32)
const transform161 = new Transform({
  position: new Vector3(39.468692779541016, 0, 16.841899871826172),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.13470458984375, 5.13470458984375, 5.13470458984375)
})
javaFern4.addComponentOrReplace(transform161)

const grassSprout3 = new Entity('grassSprout3')
engine.addEntity(grassSprout3)
grassSprout3.setParent(_scene)
grassSprout3.addComponentOrReplace(gltfShape16)
const transform162 = new Transform({
  position: new Vector3(41.45296096801758, 0, 39.683895111083984),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4, 4, 4)
})
grassSprout3.addComponentOrReplace(transform162)

const grassSprout5 = new Entity('grassSprout5')
engine.addEntity(grassSprout5)
grassSprout5.setParent(_scene)
grassSprout5.addComponentOrReplace(gltfShape16)
const transform163 = new Transform({
  position: new Vector3(41.45296096801758, 0, 42.86457061767578),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4, 4, 4)
})
grassSprout5.addComponentOrReplace(transform163)

const rose = new Entity('rose')
engine.addEntity(rose)
rose.setParent(_scene)
rose.addComponentOrReplace(gltfShape25)
const transform164 = new Transform({
  position: new Vector3(59.19941329956055, 0, 26.453157424926758),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.735767364501953, 2.735767364501953, 2.735767364501953)
})
rose.addComponentOrReplace(transform164)

const birdSNestFern = new Entity('birdSNestFern')
engine.addEntity(birdSNestFern)
birdSNestFern.setParent(_scene)
birdSNestFern.addComponentOrReplace(gltfShape19)
const transform165 = new Transform({
  position: new Vector3(55.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 2.5)
})
birdSNestFern.addComponentOrReplace(transform165)

const ostrichFerns7 = new Entity('ostrichFerns7')
engine.addEntity(ostrichFerns7)
ostrichFerns7.setParent(_scene)
ostrichFerns7.addComponentOrReplace(gltfShape18)
const transform166 = new Transform({
  position: new Vector3(39.991092681884766, 0, 22.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 3, 3)
})
ostrichFerns7.addComponentOrReplace(transform166)

const rose3 = new Entity('rose3')
engine.addEntity(rose3)
rose3.setParent(_scene)
rose3.addComponentOrReplace(gltfShape25)
const transform167 = new Transform({
  position: new Vector3(39.66160583496094, 0, 18.700637817382812),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.735767364501953, 2.735767364501953, 2.735767364501953)
})
rose3.addComponentOrReplace(transform167)

const rose4 = new Entity('rose4')
engine.addEntity(rose4)
rose4.setParent(_scene)
rose4.addComponentOrReplace(gltfShape25)
const transform168 = new Transform({
  position: new Vector3(39.66160583496094, 0, 20.95400047302246),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.735767364501953, 2.735767364501953, 2.735767364501953)
})
rose4.addComponentOrReplace(transform168)

const rose5 = new Entity('rose5')
engine.addEntity(rose5)
rose5.setParent(_scene)
rose5.addComponentOrReplace(gltfShape25)
const transform169 = new Transform({
  position: new Vector3(57.860233306884766, 0, 15.74111557006836),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.735767364501953, 2.735767364501953, 2.735767364501953)
})
rose5.addComponentOrReplace(transform169)

const ostrichFerns8 = new Entity('ostrichFerns8')
engine.addEntity(ostrichFerns8)
ostrichFerns8.setParent(_scene)
ostrichFerns8.addComponentOrReplace(gltfShape18)
const transform170 = new Transform({
  position: new Vector3(57.91100311279297, 0.014024734497070312, 11.584298133850098),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 3, 3)
})
ostrichFerns8.addComponentOrReplace(transform170)

const dandelion4 = new Entity('dandelion4')
engine.addEntity(dandelion4)
dandelion4.setParent(_scene)
dandelion4.addComponentOrReplace(gltfShape17)
const transform171 = new Transform({
  position: new Vector3(39.67969512939453, 0, 13.95024299621582),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 3.5)
})
dandelion4.addComponentOrReplace(transform171)

const javaFern5 = new Entity('javaFern5')
engine.addEntity(javaFern5)
javaFern5.setParent(_scene)
javaFern5.addComponentOrReplace(gltfShape32)
const transform172 = new Transform({
  position: new Vector3(41.430789947509766, 0, 11.615612030029297),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.13470458984375, 5.13470458984375, 5.13470458984375)
})
javaFern5.addComponentOrReplace(transform172)

const dandelion5 = new Entity('dandelion5')
engine.addEntity(dandelion5)
dandelion5.setParent(_scene)
dandelion5.addComponentOrReplace(gltfShape17)
const transform173 = new Transform({
  position: new Vector3(59, 0, 15.782875061035156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 3.5)
})
dandelion5.addComponentOrReplace(transform173)

const rose6 = new Entity('rose6')
engine.addEntity(rose6)
rose6.setParent(_scene)
rose6.addComponentOrReplace(gltfShape25)
const transform174 = new Transform({
  position: new Vector3(42.197872161865234, 0, 45.25286102294922),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.735767364501953, 2.735767364501953, 2.735767364501953)
})
rose6.addComponentOrReplace(transform174)

const rose7 = new Entity('rose7')
engine.addEntity(rose7)
rose7.setParent(_scene)
rose7.addComponentOrReplace(gltfShape25)
const transform175 = new Transform({
  position: new Vector3(42.197872161865234, 0, 40.99203109741211),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.735767364501953, 2.735767364501953, 2.735767364501953)
})
rose7.addComponentOrReplace(transform175)

const dandelion6 = new Entity('dandelion6')
engine.addEntity(dandelion6)
dandelion6.setParent(_scene)
dandelion6.addComponentOrReplace(gltfShape17)
const transform176 = new Transform({
  position: new Vector3(39.996429443359375, 0, 41.75545883178711),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 3.5)
})
dandelion6.addComponentOrReplace(transform176)

const dandelion7 = new Entity('dandelion7')
engine.addEntity(dandelion7)
dandelion7.setParent(_scene)
dandelion7.addComponentOrReplace(gltfShape17)
const transform177 = new Transform({
  position: new Vector3(39.996429443359375, 0, 38.93836975097656),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 3.5)
})
dandelion7.addComponentOrReplace(transform177)

const dandelion8 = new Entity('dandelion8')
engine.addEntity(dandelion8)
dandelion8.setParent(_scene)
dandelion8.addComponentOrReplace(gltfShape17)
const transform178 = new Transform({
  position: new Vector3(39.996429443359375, 0, 38.93836975097656),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 3.5, 3.5)
})
dandelion8.addComponentOrReplace(transform178)

const ostrichFerns9 = new Entity('ostrichFerns9')
engine.addEntity(ostrichFerns9)
ostrichFerns9.setParent(_scene)
ostrichFerns9.addComponentOrReplace(gltfShape18)
const transform179 = new Transform({
  position: new Vector3(43.340362548828125, 0, 43.75244140625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 3, 3)
})
ostrichFerns9.addComponentOrReplace(transform179)

const grass = new Entity('grass')
engine.addEntity(grass)
grass.setParent(_scene)
grass.addComponentOrReplace(gltfShape21)
const transform180 = new Transform({
  position: new Vector3(53, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5149999856948853, 1.5)
})
grass.addComponentOrReplace(transform180)

const birdSNestFern10 = new Entity('birdSNestFern10')
engine.addEntity(birdSNestFern10)
birdSNestFern10.setParent(_scene)
birdSNestFern10.addComponentOrReplace(gltfShape19)
const transform181 = new Transform({
  position: new Vector3(38.95344161987305, 0, 43.51194381713867),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 2.5)
})
birdSNestFern10.addComponentOrReplace(transform181)

const grassSprout6 = new Entity('grassSprout6')
engine.addEntity(grassSprout6)
grassSprout6.setParent(_scene)
grassSprout6.addComponentOrReplace(gltfShape16)
const transform182 = new Transform({
  position: new Vector3(51.8711051940918, 0, 44.69023895263672),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4, 4, 4)
})
grassSprout6.addComponentOrReplace(transform182)

const balsamFlower5 = new Entity('balsamFlower5')
engine.addEntity(balsamFlower5)
balsamFlower5.setParent(_scene)
balsamFlower5.addComponentOrReplace(gltfShape24)
const transform183 = new Transform({
  position: new Vector3(52.22135543823242, 0, 43.00106430053711),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1.5)
})
balsamFlower5.addComponentOrReplace(transform183)

const rose8 = new Entity('rose8')
engine.addEntity(rose8)
rose8.setParent(_scene)
rose8.addComponentOrReplace(gltfShape25)
const transform184 = new Transform({
  position: new Vector3(52.47812271118164, 0, 40.99203109741211),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.735767364501953, 2.735767364501953, 2.735767364501953)
})
rose8.addComponentOrReplace(transform184)

const rose9 = new Entity('rose9')
engine.addEntity(rose9)
rose9.setParent(_scene)
rose9.addComponentOrReplace(gltfShape25)
const transform185 = new Transform({
  position: new Vector3(42.197872161865234, 0, 49.129478454589844),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.735767364501953, 2.735767364501953, 2.735767364501953)
})
rose9.addComponentOrReplace(transform185)

const wallPlainWhite4 = new Entity('wallPlainWhite4')
engine.addEntity(wallPlainWhite4)
wallPlainWhite4.setParent(_scene)
wallPlainWhite4.addComponentOrReplace(gltfShape27)
const transform186 = new Transform({
  position: new Vector3(95.67852783203125, 0, 4.433582305908203),
  rotation: new Quaternion(8.817940676788736e-16, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(-25.09443473815918, 2.7220582962036133, 1.0000020265579224)
})
wallPlainWhite4.addComponentOrReplace(transform186)

const stairsSpiral = new Entity('stairsSpiral')
engine.addEntity(stairsSpiral)
stairsSpiral.setParent(_scene)
const transform187 = new Transform({
  position: new Vector3(83.83039855957031, 0, 31.19230079650879),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.881072998046875, 2.71506929397583, 2.881072998046875)
})
stairsSpiral.addComponentOrReplace(transform187)
const gltfShape33 = new GLTFShape("e2db1a16-fedd-48e5-97b6-56bf90997f00/SpiralStairs.glb")
gltfShape33.withCollisions = true
gltfShape33.isPointerBlocker = true
gltfShape33.visible = true
stairsSpiral.addComponentOrReplace(gltfShape33)

const dropChandelier3 = new Entity('dropChandelier3')
engine.addEntity(dropChandelier3)
dropChandelier3.setParent(_scene)
const transform188 = new Transform({
  position: new Vector3(83.26651763916016, 2.3212451934814453, 12.843713760375977),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.1046218872070312, 2.1046218872070312, 2.1046218872070312)
})
dropChandelier3.addComponentOrReplace(transform188)

const wallPlainWhite15 = new Entity('wallPlainWhite15')
engine.addEntity(wallPlainWhite15)
wallPlainWhite15.setParent(_scene)
wallPlainWhite15.addComponentOrReplace(gltfShape27)
const transform189 = new Transform({
  position: new Vector3(70.61174011230469, 10.897071838378906, 31.25821304321289),
  rotation: new Quaternion(0.5, 0.5, 0.4999999403953552, -0.5000000596046448),
  scale: new Vector3(-11.606246948242188, 6.334134101867676, 1.000001072883606)
})
wallPlainWhite15.addComponentOrReplace(transform189)

const wallPlainWhite16 = new Entity('wallPlainWhite16')
engine.addEntity(wallPlainWhite16)
wallPlainWhite16.setParent(_scene)
wallPlainWhite16.addComponentOrReplace(gltfShape27)
const transform190 = new Transform({
  position: new Vector3(70.61174011230469, 10.897071838378906, 23.928333282470703),
  rotation: new Quaternion(0.5, 0.5, 0.4999999403953552, -0.5000000596046448),
  scale: new Vector3(-4.087672233581543, 1.851341962814331, 1.000001072883606)
})
wallPlainWhite16.addComponentOrReplace(transform190)

const wallPlainWhite17 = new Entity('wallPlainWhite17')
engine.addEntity(wallPlainWhite17)
wallPlainWhite17.setParent(_scene)
wallPlainWhite17.addComponentOrReplace(gltfShape27)
const transform191 = new Transform({
  position: new Vector3(95.85513305664062, 10.897071838378906, 23.928333282470703),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, -0.5000000596046448),
  scale: new Vector3(3.9378902912139893, 1.543135643005371, 1.000001072883606)
})
wallPlainWhite17.addComponentOrReplace(transform191)

const wallPlainWhite18 = new Entity('wallPlainWhite18')
engine.addEntity(wallPlainWhite18)
wallPlainWhite18.setParent(_scene)
wallPlainWhite18.addComponentOrReplace(gltfShape27)
const transform192 = new Transform({
  position: new Vector3(70.61174011230469, 21.793609619140625, 4.434879302978516),
  rotation: new Quaternion(0.5, 0.5, 0.4999999403953552, -0.5000000596046448),
  scale: new Vector3(-13.304097175598145, 6.334134101867676, 1.000001072883606)
})
wallPlainWhite18.addComponentOrReplace(transform192)

const wallPlainWhite19 = new Entity('wallPlainWhite19')
engine.addEntity(wallPlainWhite19)
wallPlainWhite19.setParent(_scene)
wallPlainWhite19.addComponentOrReplace(gltfShape27)
const transform193 = new Transform({
  position: new Vector3(70.61174011230469, 21.793609619140625, 23.928333282470703),
  rotation: new Quaternion(0.5, 0.5, 0.4999999403953552, -0.5000000596046448),
  scale: new Vector3(-6.985988140106201, 1.851341962814331, 1.000001072883606)
})
wallPlainWhite19.addComponentOrReplace(transform193)

const wallPlainWhite20 = new Entity('wallPlainWhite20')
engine.addEntity(wallPlainWhite20)
wallPlainWhite20.setParent(_scene)
wallPlainWhite20.addComponentOrReplace(gltfShape27)
const transform194 = new Transform({
  position: new Vector3(95.93008422851562, 21.793609619140625, 23.928333282470703),
  rotation: new Quaternion(0.5, -0.5, -0.4999999403953552, -0.5000000596046448),
  scale: new Vector3(7.479635238647461, 1.543135643005371, 1.000001072883606)
})
wallPlainWhite20.addComponentOrReplace(transform194)

const wallPlainWhite21 = new Entity('wallPlainWhite21')
engine.addEntity(wallPlainWhite21)
wallPlainWhite21.setParent(_scene)
wallPlainWhite21.addComponentOrReplace(gltfShape27)
const transform195 = new Transform({
  position: new Vector3(70.61174011230469, 21.793609619140625, 37.105648040771484),
  rotation: new Quaternion(0.5, 0.5, 0.4999999403953552, -0.5000000596046448),
  scale: new Vector3(-8.701427459716797, 6.334134101867676, 1.000001072883606)
})
wallPlainWhite21.addComponentOrReplace(transform195)

const wallPlainWhite27 = new Entity('wallPlainWhite27')
engine.addEntity(wallPlainWhite27)
wallPlainWhite27.setParent(_scene)
wallPlainWhite27.addComponentOrReplace(gltfShape27)
const transform196 = new Transform({
  position: new Vector3(70.61174011230469, 10.896537780761719, 54.628841400146484),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-12.695215225219727, 2.7220582962036133, 0.9999998211860657)
})
wallPlainWhite27.addComponentOrReplace(transform196)

const dropChandelier4 = new Entity('dropChandelier4')
engine.addEntity(dropChandelier4)
dropChandelier4.setParent(_scene)
const transform197 = new Transform({
  position: new Vector3(83.26651763916016, 13.217782974243164, 43.01170349121094),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.1046218872070312, 2.1046218872070312, 2.1046218872070312)
})
dropChandelier4.addComponentOrReplace(transform197)

const stairsSpiral2 = new Entity('stairsSpiral2')
engine.addEntity(stairsSpiral2)
stairsSpiral2.setParent(_scene)
stairsSpiral2.addComponentOrReplace(gltfShape33)
const transform198 = new Transform({
  position: new Vector3(83.83039855957031, 10.613296508789062, 31.19230079650879),
  rotation: new Quaternion(9.257583069544831e-15, 1, -1.1920928244535389e-7, -5.960464477539063e-8),
  scale: new Vector3(2.881072998046875, 2.71506929397583, 2.881072998046875)
})
stairsSpiral2.addComponentOrReplace(transform198)

const floorWood5 = new Entity('floorWood5')
engine.addEntity(floorWood5)
floorWood5.setParent(_scene)
floorWood5.addComponentOrReplace(gltfShape28)
const transform199 = new Transform({
  position: new Vector3(70.73200988769531, 10.896537780761719, 31.287193298339844),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(-5.770802021026611, 6.367137908935547, 6.252625942230225)
})
floorWood5.addComponentOrReplace(transform199)

const floorWood6 = new Entity('floorWood6')
engine.addEntity(floorWood6)
floorWood6.setParent(_scene)
floorWood6.addComponentOrReplace(gltfShape28)
const transform200 = new Transform({
  position: new Vector3(70.73200988769531, 10.896537780761719, 4.5704345703125),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(-5.1707072257995605, 6.367137908935547, 6.2526164054870605)
})
floorWood6.addComponentOrReplace(transform200)

const dropChandelier5 = new Entity('dropChandelier5')
engine.addEntity(dropChandelier5)
dropChandelier5.setParent(_scene)
const transform201 = new Transform({
  position: new Vector3(83.26651763916016, 13.217782974243164, 12.843713760375977),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.1046218872070312, 2.1046218872070312, 2.1046218872070312)
})
dropChandelier5.addComponentOrReplace(transform201)

const floorWood7 = new Entity('floorWood7')
engine.addEntity(floorWood7)
floorWood7.setParent(_scene)
floorWood7.addComponentOrReplace(gltfShape28)
const transform202 = new Transform({
  position: new Vector3(70.73200988769531, 10.896537780761719, 25.011077880859375),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(-1.6025722026824951, 6.367137908935547, 1.925108551979065)
})
floorWood7.addComponentOrReplace(transform202)

const floorWood8 = new Entity('floorWood8')
engine.addEntity(floorWood8)
floorWood8.setParent(_scene)
floorWood8.addComponentOrReplace(gltfShape28)
const transform203 = new Transform({
  position: new Vector3(95.7410888671875, 10.896537780761719, 25.011077880859375),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.6025751829147339, 6.367137908935547, 1.549175500869751)
})
floorWood8.addComponentOrReplace(transform203)

const wallPlainGlass9 = new Entity('wallPlainGlass9')
engine.addEntity(wallPlainGlass9)
wallPlainGlass9.setParent(_scene)
wallPlainGlass9.addComponentOrReplace(gltfShape4)
const transform204 = new Transform({
  position: new Vector3(70.58501434326172, 10.925402641296387, 4.434059143066406),
  rotation: new Quaternion(-1.4766689593651537e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(-25.096052169799805, 2.72585391998291, 1.0000085830688477)
})
wallPlainGlass9.addComponentOrReplace(transform204)

const wallPlainGlass10 = new Entity('wallPlainGlass10')
engine.addEntity(wallPlainGlass10)
wallPlainGlass10.setParent(_scene)
wallPlainGlass10.addComponentOrReplace(gltfShape4)
const transform205 = new Transform({
  position: new Vector3(70.58501434326172, 21.795684814453125, 4.434059143066406),
  rotation: new Quaternion(-1.4766689593651537e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(-25.096107482910156, 1.1641451120376587, 1.0000100135803223)
})
wallPlainGlass10.addComponentOrReplace(transform205)

const wallPlainGlass14 = new Entity('wallPlainGlass14')
engine.addEntity(wallPlainGlass14)
wallPlainGlass14.setParent(_scene)
wallPlainGlass14.addComponentOrReplace(gltfShape4)
const transform206 = new Transform({
  position: new Vector3(95.73280334472656, 21.795684814453125, 4.434059143066406),
  rotation: new Quaternion(-1.4766689593651537e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(-25.09613800048828, 1.1641451120376587, 1.0000107288360596)
})
wallPlainGlass14.addComponentOrReplace(transform206)

const wallPlainGlass15 = new Entity('wallPlainGlass15')
engine.addEntity(wallPlainGlass15)
wallPlainGlass15.setParent(_scene)
wallPlainGlass15.addComponentOrReplace(gltfShape4)
const transform207 = new Transform({
  position: new Vector3(70.5819320678711, 21.795684814453125, 4.725451946258545),
  rotation: new Quaternion(7.149794943378182e-15, 0, 6.0168951526891334e-15, -1),
  scale: new Vector3(-12.713932991027832, 1.1641451120376587, 1.0000097751617432)
})
wallPlainGlass15.addComponentOrReplace(transform207)

const wallPlainGlass16 = new Entity('wallPlainGlass16')
engine.addEntity(wallPlainGlass16)
wallPlainGlass16.setParent(_scene)
wallPlainGlass16.addComponentOrReplace(gltfShape4)
const transform208 = new Transform({
  position: new Vector3(70.58501434326172, 21.795684814453125, 54.62199020385742),
  rotation: new Quaternion(7.149794943378182e-15, 0, 6.0168951526891334e-15, -1),
  scale: new Vector3(-12.713932991027832, 1.1641451120376587, 1.0000097751617432)
})
wallPlainGlass16.addComponentOrReplace(transform208)

const coffeeTable = new Entity('coffeeTable')
engine.addEntity(coffeeTable)
coffeeTable.setParent(_scene)
const transform209 = new Transform({
  position: new Vector3(74.73983001708984, 11.227421760559082, 13.436111450195312),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.2380294799804688, 2.2380294799804688, 2.2380294799804688)
})
coffeeTable.addComponentOrReplace(transform209)
const gltfShape34 = new GLTFShape("b01154d9-db05-4713-ace7-692b67220bb0/Table_06/Table_06.glb")
gltfShape34.withCollisions = true
gltfShape34.isPointerBlocker = true
gltfShape34.visible = true
coffeeTable.addComponentOrReplace(gltfShape34)

const armchairD = new Entity('armchairD')
engine.addEntity(armchairD)
armchairD.setParent(_scene)
const transform210 = new Transform({
  position: new Vector3(74.89836883544922, 11.229842185974121, 9.810725212097168),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.4267616271972656, 1.8305065631866455, 2.4267616271972656)
})
armchairD.addComponentOrReplace(transform210)
const gltfShape35 = new GLTFShape("1bff6908-e888-4cc6-b2be-0b8656113fdd/Armchair_D.glb")
gltfShape35.withCollisions = true
gltfShape35.isPointerBlocker = true
gltfShape35.visible = true
armchairD.addComponentOrReplace(gltfShape35)

const armchairD2 = new Entity('armchairD2')
engine.addEntity(armchairD2)
armchairD2.setParent(_scene)
armchairD2.addComponentOrReplace(gltfShape35)
const transform211 = new Transform({
  position: new Vector3(74.5, 11.229842185974121, 17),
  rotation: new Quaternion(5.204566839349736e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(2.4267616271972656, 1.8305065631866455, 2.4267616271972656)
})
armchairD2.addComponentOrReplace(transform211)

const flowerPot = new Entity('flowerPot')
engine.addEntity(flowerPot)
flowerPot.setParent(_scene)
const transform212 = new Transform({
  position: new Vector3(74.8575439453125, 12.611926078796387, 13.498113632202148),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.871011257171631, 4.871011257171631, 4.871011257171631)
})
flowerPot.addComponentOrReplace(transform212)
const gltfShape36 = new GLTFShape("04ef7376-40c5-4286-80a9-4a6ee8d9df75/HWN20_FlowerPot_01.glb")
gltfShape36.withCollisions = true
gltfShape36.isPointerBlocker = true
gltfShape36.visible = true
flowerPot.addComponentOrReplace(gltfShape36)

const loveseat = new Entity('loveseat')
engine.addEntity(loveseat)
loveseat.setParent(_scene)
const transform213 = new Transform({
  position: new Vector3(92.83979797363281, 11.147799491882324, 12.763941764831543),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5527327060699463, 1.5527327060699463, 1.5527327060699463)
})
loveseat.addComponentOrReplace(transform213)
const gltfShape37 = new GLTFShape("c162b72f-3a64-4593-aaa1-a42f614cf9e5/Couch_01/Couch_01.glb")
gltfShape37.withCollisions = true
gltfShape37.isPointerBlocker = true
gltfShape37.visible = true
loveseat.addComponentOrReplace(gltfShape37)

const softDrink = new Entity('softDrink')
engine.addEntity(softDrink)
softDrink.setParent(_scene)
const transform214 = new Transform({
  position: new Vector3(75.11326599121094, 12.570297241210938, 12.504170417785645),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.4676036834716797, 2.4676036834716797, 2.4676036834716797)
})
softDrink.addComponentOrReplace(transform214)
const gltfShape38 = new GLTFShape("c3f08032-6538-46dd-b930-69940f2a5cd7/Soft_Drink.glb")
gltfShape38.withCollisions = true
gltfShape38.isPointerBlocker = true
gltfShape38.visible = true
softDrink.addComponentOrReplace(gltfShape38)

const softDrink2 = new Entity('softDrink2')
engine.addEntity(softDrink2)
softDrink2.setParent(_scene)
softDrink2.addComponentOrReplace(gltfShape38)
const transform215 = new Transform({
  position: new Vector3(73.77819061279297, 12.570297241210938, 14.099862098693848),
  rotation: new Quaternion(8.428687638790087e-15, 0.9807853102684021, -1.1691871293351142e-7, 0.19509030878543854),
  scale: new Vector3(2.467604160308838, 2.4676036834716797, 2.467604160308838)
})
softDrink2.addComponentOrReplace(transform215)

const loveseat2 = new Entity('loveseat2')
engine.addEntity(loveseat2)
loveseat2.setParent(_scene)
loveseat2.addComponentOrReplace(gltfShape37)
const transform216 = new Transform({
  position: new Vector3(92.71400451660156, 11.147799491882324, 17.52702522277832),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5527327060699463, 1.5527327060699463, 1.5527327060699463)
})
loveseat2.addComponentOrReplace(transform216)

const yellowDinnerTable = new Entity('yellowDinnerTable')
engine.addEntity(yellowDinnerTable)
yellowDinnerTable.setParent(_scene)
const transform217 = new Transform({
  position: new Vector3(84.06743621826172, 11.200410842895508, 45.70829772949219),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.766305923461914, 2.3388638496398926, 3.0504462718963623)
})
yellowDinnerTable.addComponentOrReplace(transform217)
const gltfShape39 = new GLTFShape("87383b74-7a88-4722-b298-fd1fb0444a77/TableSciFi_02/TableSciFi_02.glb")
gltfShape39.withCollisions = true
gltfShape39.isPointerBlocker = true
gltfShape39.visible = true
yellowDinnerTable.addComponentOrReplace(gltfShape39)

const simpleChair = new Entity('simpleChair')
engine.addEntity(simpleChair)
simpleChair.setParent(_scene)
const transform218 = new Transform({
  position: new Vector3(84.21952056884766, 11.130638122558594, 42.65326690673828),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.0108144283294678, 1.9634095430374146, 3.0108144283294678)
})
simpleChair.addComponentOrReplace(transform218)
const gltfShape40 = new GLTFShape("d9eb4464-55fe-4b35-9933-246b2a423793/Chair_03/Chair_03.glb")
gltfShape40.withCollisions = true
gltfShape40.isPointerBlocker = true
gltfShape40.visible = true
simpleChair.addComponentOrReplace(gltfShape40)

const simpleChair2 = new Entity('simpleChair2')
engine.addEntity(simpleChair2)
simpleChair2.setParent(_scene)
simpleChair2.addComponentOrReplace(gltfShape40)
const transform219 = new Transform({
  position: new Vector3(80.80013275146484, 11.130638122558594, 42.65326690673828),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.010810375213623, 1.9634095430374146, 3.010810375213623)
})
simpleChair2.addComponentOrReplace(transform219)

const simpleChair3 = new Entity('simpleChair3')
engine.addEntity(simpleChair3)
simpleChair3.setParent(_scene)
simpleChair3.addComponentOrReplace(gltfShape40)
const transform220 = new Transform({
  position: new Vector3(87.61006164550781, 11.130638122558594, 42.65326690673828),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.0108137130737305, 1.9634095430374146, 3.0108137130737305)
})
simpleChair3.addComponentOrReplace(transform220)

const simpleChair4 = new Entity('simpleChair4')
engine.addEntity(simpleChair4)
simpleChair4.setParent(_scene)
simpleChair4.addComponentOrReplace(gltfShape40)
const transform221 = new Transform({
  position: new Vector3(84.19068145751953, 11.130638122558594, 48.762367248535156),
  rotation: new Quaternion(-4.074966241990243e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.010815382003784, 1.9634095430374146, 3.010815382003784)
})
simpleChair4.addComponentOrReplace(transform221)

const simpleChair5 = new Entity('simpleChair5')
engine.addEntity(simpleChair5)
simpleChair5.setParent(_scene)
simpleChair5.addComponentOrReplace(gltfShape40)
const transform222 = new Transform({
  position: new Vector3(87.61006927490234, 11.130638122558594, 48.762367248535156),
  rotation: new Quaternion(-4.074966241990243e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.010815143585205, 1.9634095430374146, 3.010815143585205)
})
simpleChair5.addComponentOrReplace(transform222)

const simpleChair6 = new Entity('simpleChair6')
engine.addEntity(simpleChair6)
simpleChair6.setParent(_scene)
simpleChair6.addComponentOrReplace(gltfShape40)
const transform223 = new Transform({
  position: new Vector3(80.80014038085938, 11.130638122558594, 48.762367248535156),
  rotation: new Quaternion(-4.074966241990243e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.0108141899108887, 1.9634095430374146, 3.0108141899108887)
})
simpleChair6.addComponentOrReplace(transform223)

const fruit = new Entity('fruit')
engine.addEntity(fruit)
fruit.setParent(_scene)
const transform224 = new Transform({
  position: new Vector3(84.7138900756836, 13.475366592407227, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.3099594116210938, 1.3099594116210938, 1.3099594116210938)
})
fruit.addComponentOrReplace(transform224)
const gltfShape41 = new GLTFShape("cce63be5-5cff-4843-bc9d-f3c910bebea3/Fruit 3.glb")
gltfShape41.withCollisions = true
gltfShape41.isPointerBlocker = true
gltfShape41.visible = true
fruit.addComponentOrReplace(gltfShape41)

const fruit2 = new Entity('fruit2')
engine.addEntity(fruit2)
fruit2.setParent(_scene)
const transform225 = new Transform({
  position: new Vector3(83.51669311523438, 13.482893943786621, 45.14082717895508),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0608139038085938, 1.0608139038085938, 1.0608139038085938)
})
fruit2.addComponentOrReplace(transform225)
const gltfShape42 = new GLTFShape("abf88b39-d0f1-433d-9dbe-beb619639a8b/Fruit 4.glb")
gltfShape42.withCollisions = true
gltfShape42.isPointerBlocker = true
gltfShape42.visible = true
fruit2.addComponentOrReplace(gltfShape42)

const flowerPot3 = new Entity('flowerPot3')
engine.addEntity(flowerPot3)
flowerPot3.setParent(_scene)
const transform226 = new Transform({
  position: new Vector3(83.47612762451172, 13.466375350952148, 46.175048828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.288038492202759, 3.288038492202759, 3.288038492202759)
})
flowerPot3.addComponentOrReplace(transform226)
const gltfShape43 = new GLTFShape("e325f623-6fde-4993-9a07-83c5e9d79214/HWN20_FlowerPot_04.glb")
gltfShape43.withCollisions = true
gltfShape43.isPointerBlocker = true
gltfShape43.visible = true
flowerPot3.addComponentOrReplace(gltfShape43)

const flowerPot4 = new Entity('flowerPot4')
engine.addEntity(flowerPot4)
flowerPot4.setParent(_scene)
const transform227 = new Transform({
  position: new Vector3(71.95896911621094, 11.097113609313965, 50.16508865356445),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.179508686065674, 5.179508686065674, 5.179508686065674)
})
flowerPot4.addComponentOrReplace(transform227)
const gltfShape44 = new GLTFShape("167c49c5-1918-4deb-9ec1-32dfc99c7b9d/HWN20_FlowerPot_05.glb")
gltfShape44.withCollisions = true
gltfShape44.isPointerBlocker = true
gltfShape44.visible = true
flowerPot4.addComponentOrReplace(gltfShape44)

const flowerPot5 = new Entity('flowerPot5')
engine.addEntity(flowerPot5)
flowerPot5.setParent(_scene)
const transform228 = new Transform({
  position: new Vector3(92.52047729492188, 11.062627792358398, 52.502593994140625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.606624603271484, 8.606624603271484, 8.606624603271484)
})
flowerPot5.addComponentOrReplace(transform228)
const gltfShape45 = new GLTFShape("efadbe68-cc20-4333-9bbb-87bdc655b278/HWN20_FlowerPot_03.glb")
gltfShape45.withCollisions = true
gltfShape45.isPointerBlocker = true
gltfShape45.visible = true
flowerPot5.addComponentOrReplace(gltfShape45)

const flowerPot6 = new Entity('flowerPot6')
engine.addEntity(flowerPot6)
flowerPot6.setParent(_scene)
flowerPot6.addComponentOrReplace(gltfShape45)
const transform229 = new Transform({
  position: new Vector3(71.82926177978516, 11.071980476379395, 52.065696716308594),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.024698734283447, 6.024698734283447, 6.024698734283447)
})
flowerPot6.addComponentOrReplace(transform229)

const bermudaGrass = new Entity('bermudaGrass')
engine.addEntity(bermudaGrass)
bermudaGrass.setParent(_scene)
const gltfShape46 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape46.withCollisions = true
gltfShape46.isPointerBlocker = true
gltfShape46.visible = true
bermudaGrass.addComponentOrReplace(gltfShape46)
const transform230 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass.addComponentOrReplace(transform230)

const bermudaGrass2 = new Entity('bermudaGrass2')
engine.addEntity(bermudaGrass2)
bermudaGrass2.setParent(_scene)
bermudaGrass2.addComponentOrReplace(gltfShape46)
const transform231 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass2.addComponentOrReplace(transform231)

const bermudaGrass3 = new Entity('bermudaGrass3')
engine.addEntity(bermudaGrass3)
bermudaGrass3.setParent(_scene)
bermudaGrass3.addComponentOrReplace(gltfShape46)
const transform232 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass3.addComponentOrReplace(transform232)

const bermudaGrass4 = new Entity('bermudaGrass4')
engine.addEntity(bermudaGrass4)
bermudaGrass4.setParent(_scene)
bermudaGrass4.addComponentOrReplace(gltfShape46)
const transform233 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass4.addComponentOrReplace(transform233)

const bermudaGrass5 = new Entity('bermudaGrass5')
engine.addEntity(bermudaGrass5)
bermudaGrass5.setParent(_scene)
bermudaGrass5.addComponentOrReplace(gltfShape46)
const transform234 = new Transform({
  position: new Vector3(72, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass5.addComponentOrReplace(transform234)

const bermudaGrass6 = new Entity('bermudaGrass6')
engine.addEntity(bermudaGrass6)
bermudaGrass6.setParent(_scene)
bermudaGrass6.addComponentOrReplace(gltfShape46)
const transform235 = new Transform({
  position: new Vector3(88, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass6.addComponentOrReplace(transform235)

const bermudaGrass7 = new Entity('bermudaGrass7')
engine.addEntity(bermudaGrass7)
bermudaGrass7.setParent(_scene)
bermudaGrass7.addComponentOrReplace(gltfShape46)
const transform236 = new Transform({
  position: new Vector3(104, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass7.addComponentOrReplace(transform236)

const bermudaGrass8 = new Entity('bermudaGrass8')
engine.addEntity(bermudaGrass8)
bermudaGrass8.setParent(_scene)
bermudaGrass8.addComponentOrReplace(gltfShape46)
const transform237 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass8.addComponentOrReplace(transform237)

const bermudaGrass9 = new Entity('bermudaGrass9')
engine.addEntity(bermudaGrass9)
bermudaGrass9.setParent(_scene)
bermudaGrass9.addComponentOrReplace(gltfShape46)
const transform238 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass9.addComponentOrReplace(transform238)

const bermudaGrass10 = new Entity('bermudaGrass10')
engine.addEntity(bermudaGrass10)
bermudaGrass10.setParent(_scene)
bermudaGrass10.addComponentOrReplace(gltfShape46)
const transform239 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass10.addComponentOrReplace(transform239)

const bermudaGrass11 = new Entity('bermudaGrass11')
engine.addEntity(bermudaGrass11)
bermudaGrass11.setParent(_scene)
bermudaGrass11.addComponentOrReplace(gltfShape46)
const transform240 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass11.addComponentOrReplace(transform240)

const bermudaGrass12 = new Entity('bermudaGrass12')
engine.addEntity(bermudaGrass12)
bermudaGrass12.setParent(_scene)
bermudaGrass12.addComponentOrReplace(gltfShape46)
const transform241 = new Transform({
  position: new Vector3(72, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass12.addComponentOrReplace(transform241)

const bermudaGrass13 = new Entity('bermudaGrass13')
engine.addEntity(bermudaGrass13)
bermudaGrass13.setParent(_scene)
bermudaGrass13.addComponentOrReplace(gltfShape46)
const transform242 = new Transform({
  position: new Vector3(88, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass13.addComponentOrReplace(transform242)

const bermudaGrass14 = new Entity('bermudaGrass14')
engine.addEntity(bermudaGrass14)
bermudaGrass14.setParent(_scene)
bermudaGrass14.addComponentOrReplace(gltfShape46)
const transform243 = new Transform({
  position: new Vector3(104, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass14.addComponentOrReplace(transform243)

const bermudaGrass15 = new Entity('bermudaGrass15')
engine.addEntity(bermudaGrass15)
bermudaGrass15.setParent(_scene)
bermudaGrass15.addComponentOrReplace(gltfShape46)
const transform244 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass15.addComponentOrReplace(transform244)

const bermudaGrass16 = new Entity('bermudaGrass16')
engine.addEntity(bermudaGrass16)
bermudaGrass16.setParent(_scene)
bermudaGrass16.addComponentOrReplace(gltfShape46)
const transform245 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass16.addComponentOrReplace(transform245)

const bermudaGrass17 = new Entity('bermudaGrass17')
engine.addEntity(bermudaGrass17)
bermudaGrass17.setParent(_scene)
bermudaGrass17.addComponentOrReplace(gltfShape46)
const transform246 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass17.addComponentOrReplace(transform246)

const bermudaGrass18 = new Entity('bermudaGrass18')
engine.addEntity(bermudaGrass18)
bermudaGrass18.setParent(_scene)
bermudaGrass18.addComponentOrReplace(gltfShape46)
const transform247 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass18.addComponentOrReplace(transform247)

const bermudaGrass19 = new Entity('bermudaGrass19')
engine.addEntity(bermudaGrass19)
bermudaGrass19.setParent(_scene)
bermudaGrass19.addComponentOrReplace(gltfShape46)
const transform248 = new Transform({
  position: new Vector3(72, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass19.addComponentOrReplace(transform248)

const bermudaGrass20 = new Entity('bermudaGrass20')
engine.addEntity(bermudaGrass20)
bermudaGrass20.setParent(_scene)
bermudaGrass20.addComponentOrReplace(gltfShape46)
const transform249 = new Transform({
  position: new Vector3(88, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass20.addComponentOrReplace(transform249)

const bermudaGrass21 = new Entity('bermudaGrass21')
engine.addEntity(bermudaGrass21)
bermudaGrass21.setParent(_scene)
bermudaGrass21.addComponentOrReplace(gltfShape46)
const transform250 = new Transform({
  position: new Vector3(104, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass21.addComponentOrReplace(transform250)

const bermudaGrass22 = new Entity('bermudaGrass22')
engine.addEntity(bermudaGrass22)
bermudaGrass22.setParent(_scene)
bermudaGrass22.addComponentOrReplace(gltfShape46)
const transform251 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass22.addComponentOrReplace(transform251)

const bermudaGrass23 = new Entity('bermudaGrass23')
engine.addEntity(bermudaGrass23)
bermudaGrass23.setParent(_scene)
bermudaGrass23.addComponentOrReplace(gltfShape46)
const transform252 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass23.addComponentOrReplace(transform252)

const bermudaGrass24 = new Entity('bermudaGrass24')
engine.addEntity(bermudaGrass24)
bermudaGrass24.setParent(_scene)
bermudaGrass24.addComponentOrReplace(gltfShape46)
const transform253 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass24.addComponentOrReplace(transform253)

const bermudaGrass25 = new Entity('bermudaGrass25')
engine.addEntity(bermudaGrass25)
bermudaGrass25.setParent(_scene)
bermudaGrass25.addComponentOrReplace(gltfShape46)
const transform254 = new Transform({
  position: new Vector3(56, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass25.addComponentOrReplace(transform254)

const bermudaGrass26 = new Entity('bermudaGrass26')
engine.addEntity(bermudaGrass26)
bermudaGrass26.setParent(_scene)
bermudaGrass26.addComponentOrReplace(gltfShape46)
const transform255 = new Transform({
  position: new Vector3(72, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass26.addComponentOrReplace(transform255)

const bermudaGrass27 = new Entity('bermudaGrass27')
engine.addEntity(bermudaGrass27)
bermudaGrass27.setParent(_scene)
bermudaGrass27.addComponentOrReplace(gltfShape46)
const transform256 = new Transform({
  position: new Vector3(88, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass27.addComponentOrReplace(transform256)

const bermudaGrass28 = new Entity('bermudaGrass28')
engine.addEntity(bermudaGrass28)
bermudaGrass28.setParent(_scene)
bermudaGrass28.addComponentOrReplace(gltfShape46)
const transform257 = new Transform({
  position: new Vector3(104, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass28.addComponentOrReplace(transform257)

const triggerTileSquare4 = new Entity('triggerTileSquare4')
engine.addEntity(triggerTileSquare4)
triggerTileSquare4.setParent(_scene)
const transform258 = new Transform({
  position: new Vector3(72.59058380126953, 0, 16.7481632232666),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4091942310333252, 3.6067705154418945, 1.5907385349273682)
})
triggerTileSquare4.addComponentOrReplace(transform258)

const triggerTileSquare5 = new Entity('triggerTileSquare5')
engine.addEntity(triggerTileSquare5)
triggerTileSquare5.setParent(_scene)
const transform259 = new Transform({
  position: new Vector3(72.59058380126953, 0, 29.972362518310547),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4091942310333252, 3.6067705154418945, 1.5907385349273682)
})
triggerTileSquare5.addComponentOrReplace(transform259)

const triggerTileSquare6 = new Entity('triggerTileSquare6')
engine.addEntity(triggerTileSquare6)
triggerTileSquare6.setParent(_scene)
const transform260 = new Transform({
  position: new Vector3(72.59058380126953, 0, 42.93561935424805),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4091942310333252, 3.6067705154418945, 1.5907385349273682)
})
triggerTileSquare6.addComponentOrReplace(transform260)

const triggerTileSquare = new Entity('triggerTileSquare')
engine.addEntity(triggerTileSquare)
triggerTileSquare.setParent(_scene)
const transform261 = new Transform({
  position: new Vector3(94.16231536865234, 0, 18.80176544189453),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4091942310333252, 3.6067705154418945, 1.5907385349273682)
})
triggerTileSquare.addComponentOrReplace(transform261)

const triggerTileSquare3 = new Entity('triggerTileSquare3')
engine.addEntity(triggerTileSquare3)
triggerTileSquare3.setParent(_scene)
const transform262 = new Transform({
  position: new Vector3(94.16231536865234, 0, 42.93561935424805),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4091942310333252, 3.6067705154418945, 1.5907385349273682)
})
triggerTileSquare3.addComponentOrReplace(transform262)

const flowerPot2 = new Entity('flowerPot2')
engine.addEntity(flowerPot2)
flowerPot2.setParent(_scene)
flowerPot2.addComponentOrReplace(gltfShape44)
const transform263 = new Transform({
  position: new Vector3(85.77401733398438, 11.097113609313965, 5.983159065246582),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.005058288574219, 8.005058288574219, 8.005058288574219)
})
flowerPot2.addComponentOrReplace(transform263)

const flowerPot8 = new Entity('flowerPot8')
engine.addEntity(flowerPot8)
flowerPot8.setParent(_scene)
flowerPot8.addComponentOrReplace(gltfShape45)
const transform264 = new Transform({
  position: new Vector3(83.85383605957031, 11.071980476379395, 5.975124359130859),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.60989761352539, 8.60989761352539, 8.60989761352539)
})
flowerPot8.addComponentOrReplace(transform264)

const lightYellowRoundedPineTree2 = new Entity('lightYellowRoundedPineTree2')
engine.addEntity(lightYellowRoundedPineTree2)
lightYellowRoundedPineTree2.setParent(_scene)
const gltfShape47 = new GLTFShape("2e169288-f6a0-4d7b-bc48-6319d95878b1/TreePine_03/TreePine_03.glb")
gltfShape47.withCollisions = true
gltfShape47.isPointerBlocker = true
gltfShape47.visible = true
lightYellowRoundedPineTree2.addComponentOrReplace(gltfShape47)
const transform265 = new Transform({
  position: new Vector3(93.00740814208984, 11.162569046020508, 7.303757667541504),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightYellowRoundedPineTree2.addComponentOrReplace(transform265)

const flowerPot9 = new Entity('flowerPot9')
engine.addEntity(flowerPot9)
flowerPot9.setParent(_scene)
flowerPot9.addComponentOrReplace(gltfShape45)
const transform266 = new Transform({
  position: new Vector3(94.17807006835938, 11.071980476379395, 5.525937080383301),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.51043701171875, 3.51043701171875, 3.51043701171875)
})
flowerPot9.addComponentOrReplace(transform266)

const plantedFern2 = new Entity('plantedFern2')
engine.addEntity(plantedFern2)
plantedFern2.setParent(_scene)
const gltfShape48 = new GLTFShape("e9d4e87b-8d5f-4f03-a2e5-044effa9147f/PlantPot_03/PlantPot_03.glb")
gltfShape48.withCollisions = true
gltfShape48.isPointerBlocker = true
gltfShape48.visible = true
plantedFern2.addComponentOrReplace(gltfShape48)
const transform267 = new Transform({
  position: new Vector3(93.13411712646484, 11.167963027954102, 5.553055763244629),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plantedFern2.addComponentOrReplace(transform267)

const plantedBalsam2 = new Entity('plantedBalsam2')
engine.addEntity(plantedBalsam2)
plantedBalsam2.setParent(_scene)
const gltfShape49 = new GLTFShape("1091923b-56aa-415b-96a2-ca82ecee7782/PlantPot_04/PlantPot_04.glb")
gltfShape49.withCollisions = true
gltfShape49.isPointerBlocker = true
gltfShape49.visible = true
plantedBalsam2.addComponentOrReplace(gltfShape49)
const transform268 = new Transform({
  position: new Vector3(92.28962707519531, 11.104273796081543, 6.034295082092285),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plantedBalsam2.addComponentOrReplace(transform268)

const birdSNestFernContainer = new Entity('birdSNestFernContainer')
engine.addEntity(birdSNestFernContainer)
birdSNestFernContainer.setParent(_scene)
const transform269 = new Transform({
  position: new Vector3(81.38258361816406, 11.124324798583984, 5.556601524353027),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.2705491781234741, 1.2705459594726562, 1.2705491781234741)
})
birdSNestFernContainer.addComponentOrReplace(transform269)
const gltfShape50 = new GLTFShape("6aeafe19-cc0d-42ec-b7da-51104af39778/PlantPot_02/PlantPot_02.glb")
gltfShape50.withCollisions = true
gltfShape50.isPointerBlocker = true
gltfShape50.visible = true
birdSNestFernContainer.addComponentOrReplace(gltfShape50)

const woodenTabernacleRoundTable = new Entity('woodenTabernacleRoundTable')
engine.addEntity(woodenTabernacleRoundTable)
woodenTabernacleRoundTable.setParent(_scene)
const transform270 = new Transform({
  position: new Vector3(83.71090698242188, 11.112032890319824, 14.738085746765137),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4530787467956543, 1.293224573135376, 1.4530787467956543)
})
woodenTabernacleRoundTable.addComponentOrReplace(transform270)
const gltfShape51 = new GLTFShape("a4dddfe5-698d-41c4-bbb2-fcceabe88d7d/Table_01/Table_01.glb")
gltfShape51.withCollisions = true
gltfShape51.isPointerBlocker = true
gltfShape51.visible = true
woodenTabernacleRoundTable.addComponentOrReplace(gltfShape51)

const wallLightStreetlamp = new Entity('wallLightStreetlamp')
engine.addEntity(wallLightStreetlamp)
wallLightStreetlamp.setParent(_scene)
const transform271 = new Transform({
  position: new Vector3(79.56449890136719, 18.559507369995117, 4.654160499572754),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.308173894882202, 2.308173894882202, 2.308173894882202)
})
wallLightStreetlamp.addComponentOrReplace(transform271)

const triggerTileSquare2 = new Entity('triggerTileSquare2')
engine.addEntity(triggerTileSquare2)
triggerTileSquare2.setParent(_scene)
const transform272 = new Transform({
  position: new Vector3(25.95075225830078, 0, 26.31566047668457),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.2618225812911987, 3.220524311065674, 1.2618225812911987)
})
triggerTileSquare2.addComponentOrReplace(transform272)

const indicatorArrow = new Entity('indicatorArrow')
engine.addEntity(indicatorArrow)
indicatorArrow.setParent(_scene)
const transform273 = new Transform({
  position: new Vector3(26.116647720336914, 1.357039213180542, 26.087020874023438),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.821470260620117, 3.821470260620117, 3.821470260620117)
})
indicatorArrow.addComponentOrReplace(transform273)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform274 = new Transform({
  position: new Vector3(26.05534553527832, 4.191001892089844, 26.124114990234375),
  rotation: new Quaternion(-5.205803930969201e-15, -0.9992237091064453, 1.191167413594485e-7, 0.03939536213874817),
  scale: new Vector3(2.082616090774536, 2.082615375518799, -0.5409356355667114)
})
plainText.addComponentOrReplace(transform274)

const lightYellowRoundedPineTree = new Entity('lightYellowRoundedPineTree')
engine.addEntity(lightYellowRoundedPineTree)
lightYellowRoundedPineTree.setParent(_scene)
const transform275 = new Transform({
  position: new Vector3(25.04439926147461, 0, 32.323883056640625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9109668731689453, 1.9109668731689453, 1.9109668731689453)
})
lightYellowRoundedPineTree.addComponentOrReplace(transform275)
lightYellowRoundedPineTree.addComponentOrReplace(gltfShape47)

const treeStump = new Entity('treeStump')
engine.addEntity(treeStump)
treeStump.setParent(_scene)
const transform276 = new Transform({
  position: new Vector3(29.709453582763672, 0, 59.32810592651367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.022043466567993, 2.844409942626953, 2.844409942626953)
})
treeStump.addComponentOrReplace(transform276)
const gltfShape52 = new GLTFShape("d3cf58bc-16df-4c4c-9c3a-74f659164363/TreeStump_01/TreeStump_01.glb")
gltfShape52.withCollisions = true
gltfShape52.isPointerBlocker = true
gltfShape52.visible = true
treeStump.addComponentOrReplace(gltfShape52)

const greenRoundedPineTree2 = new Entity('greenRoundedPineTree2')
engine.addEntity(greenRoundedPineTree2)
greenRoundedPineTree2.setParent(_scene)
const transform277 = new Transform({
  position: new Vector3(29.25663185119629, 0, 9.80270004272461),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.8876144886016846, 2.8876144886016846, 2.8876144886016846)
})
greenRoundedPineTree2.addComponentOrReplace(transform277)
greenRoundedPineTree2.addComponentOrReplace(gltfShape30)

const hut = new Entity('hut')
engine.addEntity(hut)
hut.setParent(_scene)
const transform278 = new Transform({
  position: new Vector3(71.07902526855469, 4.769199848175049, 16.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.23236609995365143, 0.2428903579711914, 0.2428893744945526)
})
hut.addComponentOrReplace(transform278)
const gltfShape53 = new GLTFShape("6440b910-32e4-4784-a06e-c6a73b6d4591/Hut.gltf")
gltfShape53.withCollisions = true
gltfShape53.isPointerBlocker = true
gltfShape53.visible = true
hut.addComponentOrReplace(gltfShape53)

const droom = new Entity('droom')
engine.addEntity(droom)
droom.setParent(_scene)
const transform279 = new Transform({
  position: new Vector3(71.07479858398438, 4.745607376098633, 29.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.24735002219676971, 0.29628312587738037, 0.24734939634799957)
})
droom.addComponentOrReplace(transform279)
const gltfShape54 = new GLTFShape("3cd983de-4262-4a76-a880-f27925d4991e/Droom.gltf")
gltfShape54.withCollisions = true
gltfShape54.isPointerBlocker = true
gltfShape54.visible = true
droom.addComponentOrReplace(gltfShape54)

const fountain = new Entity('fountain')
engine.addEntity(fountain)
fountain.setParent(_scene)
const transform280 = new Transform({
  position: new Vector3(71.07662200927734, 4.755792617797852, 42.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.2508920133113861, 0.2508920133113861, 0.2508898973464966)
})
fountain.addComponentOrReplace(transform280)
const gltfShape55 = new GLTFShape("82675a82-67a6-45fd-aee1-f91073f26e87/Fountain.gltf")
gltfShape55.withCollisions = true
gltfShape55.isPointerBlocker = true
gltfShape55.visible = true
fountain.addComponentOrReplace(gltfShape55)

const dinner = new Entity('dinner')
engine.addEntity(dinner)
dinner.setParent(_scene)
const transform281 = new Transform({
  position: new Vector3(95.4635009765625, 4.792919635772705, 19.031888961791992),
  rotation: new Quaternion(0.7069857120513916, -0.7069857120513916, -0.013086464256048203, 0.013086464256048203),
  scale: new Vector3(0.23737888038158417, 0.19107630848884583, 0.24385583400726318)
})
dinner.addComponentOrReplace(transform281)
const gltfShape56 = new GLTFShape("903c6523-4917-4cf9-a85a-a9a128e65426/Dinner.gltf")
gltfShape56.withCollisions = true
gltfShape56.isPointerBlocker = true
gltfShape56.visible = true
dinner.addComponentOrReplace(gltfShape56)

const wallPlainGlass17 = new Entity('wallPlainGlass17')
engine.addEntity(wallPlainGlass17)
wallPlainGlass17.setParent(_scene)
wallPlainGlass17.addComponentOrReplace(gltfShape4)
const transform282 = new Transform({
  position: new Vector3(67.42781829833984, 0, 0.38916587829589844),
  rotation: new Quaternion(-1.4766689593651537e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(-31.75150489807129, 2.837435722351074, 1.0000019073486328)
})
wallPlainGlass17.addComponentOrReplace(transform282)

const plainText2 = new Entity('plainText2')
engine.addEntity(plainText2)
plainText2.setParent(_scene)
const transform283 = new Transform({
  position: new Vector3(83.30731201171875, 8.684408187866211, 3.9514517784118652),
  rotation: new Quaternion(-2.3644251331410727e-15, -1, 1.1920928955078125e-7, 0),
  scale: new Vector3(9.50656795501709, 5.653712749481201, 6.215132236480713)
})
plainText2.addComponentOrReplace(transform283)

const glowCube = new Entity('glowCube')
engine.addEntity(glowCube)
glowCube.setParent(_scene)
const gltfShape57 = new GLTFShape("71fb6884-5491-489f-8b3b-58ee33056efb/Glow_Cube.glb")
gltfShape57.withCollisions = true
gltfShape57.isPointerBlocker = true
gltfShape57.visible = true
glowCube.addComponentOrReplace(gltfShape57)
const transform284 = new Transform({
  position: new Vector3(83.55640411376953, 9.10145378112793, 4.169076442718506),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7, -1.4900000095367432, -0.018966615200042725)
})
glowCube.addComponentOrReplace(transform284)

const wallPlainGlass18 = new Entity('wallPlainGlass18')
engine.addEntity(wallPlainGlass18)
wallPlainGlass18.setParent(_scene)
wallPlainGlass18.addComponentOrReplace(gltfShape4)
const transform285 = new Transform({
  position: new Vector3(95.78185272216797, 10.925402641296387, 4.43405818939209),
  rotation: new Quaternion(-1.4766689593651537e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(-25.09610366821289, 2.72585391998291, 1.0000100135803223)
})
wallPlainGlass18.addComponentOrReplace(transform285)

const greenPoplars = new Entity('greenPoplars')
engine.addEntity(greenPoplars)
greenPoplars.setParent(_scene)
const transform286 = new Transform({
  position: new Vector3(105.22767639160156, 0, 55.199546813964844),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.4115383625030518, 3.4115383625030518, 3.4115383625030518)
})
greenPoplars.addComponentOrReplace(transform286)
const gltfShape58 = new GLTFShape("e59947e7-8356-4ca7-9e80-9c8e4fe3c507/TreeFir_02/TreeFir_02.glb")
gltfShape58.withCollisions = true
gltfShape58.isPointerBlocker = true
gltfShape58.visible = true
greenPoplars.addComponentOrReplace(gltfShape58)

const swampVineTreeLamp = new Entity('swampVineTreeLamp')
engine.addEntity(swampVineTreeLamp)
swampVineTreeLamp.setParent(_scene)
const transform287 = new Transform({
  position: new Vector3(104.33058166503906, 0, 40.768707275390625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5656280517578125, 3.5656280517578125, 3.5656280517578125)
})
swampVineTreeLamp.addComponentOrReplace(transform287)
const gltfShape59 = new GLTFShape("ded6354e-70df-405b-9ccd-3a865e78d350/Tree_Lamp_01/Tree_Lamp_01.glb")
gltfShape59.withCollisions = true
gltfShape59.isPointerBlocker = true
gltfShape59.visible = true
swampVineTreeLamp.addComponentOrReplace(gltfShape59)

const beachgrassFern = new Entity('beachgrassFern')
engine.addEntity(beachgrassFern)
beachgrassFern.setParent(_scene)
const transform288 = new Transform({
  position: new Vector3(105.78168487548828, 0, 31.431175231933594),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.607822418212891, 5.607822418212891, 5.607822418212891)
})
beachgrassFern.addComponentOrReplace(transform288)
const gltfShape60 = new GLTFShape("7ea57b9c-29ee-47a5-9ad2-c109101b72ac/JunglePlant_06/JunglePlant_06.glb")
gltfShape60.withCollisions = true
gltfShape60.isPointerBlocker = true
gltfShape60.visible = true
beachgrassFern.addComponentOrReplace(gltfShape60)

const grass2 = new Entity('grass2')
engine.addEntity(grass2)
grass2.setParent(_scene)
const transform289 = new Transform({
  position: new Vector3(100.38868713378906, 0, 27.355863571166992),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9215774536132812, 1.9215774536132812, 1.9215774536132812)
})
grass2.addComponentOrReplace(transform289)
grass2.addComponentOrReplace(gltfShape21)

const triSpikeGrass = new Entity('triSpikeGrass')
engine.addEntity(triSpikeGrass)
triSpikeGrass.setParent(_scene)
const transform290 = new Transform({
  position: new Vector3(101.5, 0, 15.497976303100586),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.3443145751953125, 7.3443145751953125, 7.3443145751953125)
})
triSpikeGrass.addComponentOrReplace(transform290)
const gltfShape61 = new GLTFShape("40b603bd-9582-4100-8a5d-d09d0d82ba50/Grass_05/Grass05.glb")
gltfShape61.withCollisions = true
gltfShape61.isPointerBlocker = true
gltfShape61.visible = true
triSpikeGrass.addComponentOrReplace(gltfShape61)

const ostrichFerns10 = new Entity('ostrichFerns10')
engine.addEntity(ostrichFerns10)
ostrichFerns10.setParent(_scene)
const transform291 = new Transform({
  position: new Vector3(104.5, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.788551330566406, 5.788551330566406, 5.788551330566406)
})
ostrichFerns10.addComponentOrReplace(transform291)
ostrichFerns10.addComponentOrReplace(gltfShape18)

const grassSprout7 = new Entity('grassSprout7')
engine.addEntity(grassSprout7)
grassSprout7.setParent(_scene)
const transform292 = new Transform({
  position: new Vector3(106, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.1260986328125, 3.1260986328125, 3.1260986328125)
})
grassSprout7.addComponentOrReplace(transform292)
grassSprout7.addComponentOrReplace(gltfShape16)

const grass9 = new Entity('grass9')
engine.addEntity(grass9)
grass9.setParent(_scene)
const transform293 = new Transform({
  position: new Vector3(105, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.850189208984375, 1.850189208984375, 1.850189208984375)
})
grass9.addComponentOrReplace(transform293)
const gltfShape62 = new GLTFShape("dac91a20-7728-44c4-8dd1-952749ee176e/Grass 3.glb")
gltfShape62.withCollisions = true
gltfShape62.isPointerBlocker = true
gltfShape62.visible = true
grass9.addComponentOrReplace(gltfShape62)

const lightYellowRoundedPineTree3 = new Entity('lightYellowRoundedPineTree3')
engine.addEntity(lightYellowRoundedPineTree3)
lightYellowRoundedPineTree3.setParent(_scene)
const transform294 = new Transform({
  position: new Vector3(108.17395782470703, 0, 15.221115112304688),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.2964248657226562, 2.2964248657226562, 2.2964248657226562)
})
lightYellowRoundedPineTree3.addComponentOrReplace(transform294)
lightYellowRoundedPineTree3.addComponentOrReplace(gltfShape47)

const grassSprout8 = new Entity('grassSprout8')
engine.addEntity(grassSprout8)
grassSprout8.setParent(_scene)
grassSprout8.addComponentOrReplace(gltfShape16)
const transform295 = new Transform({
  position: new Vector3(106, 0, 23.946767807006836),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.310868740081787, 6.310868740081787, 6.310868740081787)
})
grassSprout8.addComponentOrReplace(transform295)

const beachgrassFern2 = new Entity('beachgrassFern2')
engine.addEntity(beachgrassFern2)
beachgrassFern2.setParent(_scene)
beachgrassFern2.addComponentOrReplace(gltfShape60)
const transform296 = new Transform({
  position: new Vector3(102.4331283569336, 0, 21.88937759399414),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.607822418212891, 5.607822418212891, 5.607822418212891)
})
beachgrassFern2.addComponentOrReplace(transform296)

const beachgrassFern3 = new Entity('beachgrassFern3')
engine.addEntity(beachgrassFern3)
beachgrassFern3.setParent(_scene)
beachgrassFern3.addComponentOrReplace(gltfShape60)
const transform297 = new Transform({
  position: new Vector3(101.89618682861328, 0, 36.68504333496094),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.607822418212891, 3.4846534729003906, 5.607822418212891)
})
beachgrassFern3.addComponentOrReplace(transform297)

const beachRock = new Entity('beachRock')
engine.addEntity(beachRock)
beachRock.setParent(_scene)
const transform298 = new Transform({
  position: new Vector3(108, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
beachRock.addComponentOrReplace(transform298)
const gltfShape63 = new GLTFShape("41263fd0-8e9d-4a86-a849-fd285db9e450/RockBig_02/RockBig_02.glb")
gltfShape63.withCollisions = true
gltfShape63.isPointerBlocker = true
gltfShape63.visible = true
beachRock.addComponentOrReplace(gltfShape63)

const beachRock2 = new Entity('beachRock2')
engine.addEntity(beachRock2)
beachRock2.setParent(_scene)
const transform299 = new Transform({
  position: new Vector3(106.5, 0, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
beachRock2.addComponentOrReplace(transform299)
const gltfShape64 = new GLTFShape("4ee780b8-623e-4848-ae35-c934e2e63d5c/RockBig_06/RockBig_06.glb")
gltfShape64.withCollisions = true
gltfShape64.isPointerBlocker = true
gltfShape64.visible = true
beachRock2.addComponentOrReplace(gltfShape64)

const grassSprout9 = new Entity('grassSprout9')
engine.addEntity(grassSprout9)
grassSprout9.setParent(_scene)
grassSprout9.addComponentOrReplace(gltfShape16)
const transform300 = new Transform({
  position: new Vector3(106, 0, 35.2968635559082),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.310868740081787, 6.310868740081787, 6.310868740081787)
})
grassSprout9.addComponentOrReplace(transform300)

const grassSprout10 = new Entity('grassSprout10')
engine.addEntity(grassSprout10)
grassSprout10.setParent(_scene)
grassSprout10.addComponentOrReplace(gltfShape16)
const transform301 = new Transform({
  position: new Vector3(108.18008422851562, 0, 52.12295150756836),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.310868740081787, 6.310868740081787, 6.310868740081787)
})
grassSprout10.addComponentOrReplace(transform301)

const grassSprout11 = new Entity('grassSprout11')
engine.addEntity(grassSprout11)
grassSprout11.setParent(_scene)
grassSprout11.addComponentOrReplace(gltfShape16)
const transform302 = new Transform({
  position: new Vector3(108.18008422851562, 0, 42.2496223449707),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.310868740081787, 6.310868740081787, 6.310868740081787)
})
grassSprout11.addComponentOrReplace(transform302)

const grassSprout12 = new Entity('grassSprout12')
engine.addEntity(grassSprout12)
grassSprout12.setParent(_scene)
grassSprout12.addComponentOrReplace(gltfShape16)
const transform303 = new Transform({
  position: new Vector3(108.18008422851562, 0, 38.844635009765625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.310868740081787, 6.310868740081787, 6.310868740081787)
})
grassSprout12.addComponentOrReplace(transform303)

const largeForestLog = new Entity('largeForestLog')
engine.addEntity(largeForestLog)
largeForestLog.setParent(_scene)
const transform304 = new Transform({
  position: new Vector3(107.73179626464844, 0, 7.084097862243652),
  rotation: new Quaternion(0, -0.2902846932411194, 3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(4.147051811218262, 4.147051811218262, 4.147051811218262)
})
largeForestLog.addComponentOrReplace(transform304)
const gltfShape65 = new GLTFShape("ec3a27f6-7974-493f-b783-9fc2e4d29e5b/Log_03/Log_03.glb")
gltfShape65.withCollisions = true
gltfShape65.isPointerBlocker = true
gltfShape65.visible = true
largeForestLog.addComponentOrReplace(gltfShape65)

const treeStump2 = new Entity('treeStump2')
engine.addEntity(treeStump2)
treeStump2.setParent(_scene)
const transform305 = new Transform({
  position: new Vector3(99.5, 0, 12.158735275268555),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.4190151691436768, 2.4190151691436768, 2.4190151691436768)
})
treeStump2.addComponentOrReplace(transform305)
treeStump2.addComponentOrReplace(gltfShape52)

const flower = new Entity('flower')
engine.addEntity(flower)
flower.setParent(_scene)
const transform306 = new Transform({
  position: new Vector3(107, 0, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(13.333454132080078, 13.333454132080078, 13.333454132080078)
})
flower.addComponentOrReplace(transform306)
const gltfShape66 = new GLTFShape("8ba280b7-5d0c-4be2-aeb4-3adf508807fa/HWN20_Flower_02.glb")
gltfShape66.withCollisions = true
gltfShape66.isPointerBlocker = true
gltfShape66.visible = true
flower.addComponentOrReplace(gltfShape66)

const flower2 = new Entity('flower2')
engine.addEntity(flower2)
flower2.setParent(_scene)
flower2.addComponentOrReplace(gltfShape66)
const transform307 = new Transform({
  position: new Vector3(107, 0, 22.656198501586914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(13.333454132080078, 13.333454132080078, 13.333454132080078)
})
flower2.addComponentOrReplace(transform307)

const flower3 = new Entity('flower3')
engine.addEntity(flower3)
flower3.setParent(_scene)
flower3.addComponentOrReplace(gltfShape66)
const transform308 = new Transform({
  position: new Vector3(101.35791015625, 0, 50.45712661743164),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(13.333454132080078, 13.333454132080078, 13.333454132080078)
})
flower3.addComponentOrReplace(transform308)

const beachgrassFern4 = new Entity('beachgrassFern4')
engine.addEntity(beachgrassFern4)
beachgrassFern4.setParent(_scene)
beachgrassFern4.addComponentOrReplace(gltfShape60)
const transform309 = new Transform({
  position: new Vector3(102.4331283569336, 0, 46.7650146484375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.607822418212891, 5.607822418212891, 5.607822418212891)
})
beachgrassFern4.addComponentOrReplace(transform309)

const grass10 = new Entity('grass10')
engine.addEntity(grass10)
grass10.setParent(_scene)
grass10.addComponentOrReplace(gltfShape21)
const transform310 = new Transform({
  position: new Vector3(99.4400863647461, 0, 7.966924667358398),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9215774536132812, 1.9215774536132812, 1.9215774536132812)
})
grass10.addComponentOrReplace(transform310)

const grass12 = new Entity('grass12')
engine.addEntity(grass12)
grass12.setParent(_scene)
grass12.addComponentOrReplace(gltfShape21)
const transform311 = new Transform({
  position: new Vector3(100.38868713378906, 0, 52.86510467529297),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9215774536132812, 1.9215774536132812, 1.9215774536132812)
})
grass12.addComponentOrReplace(transform311)

const flower4 = new Entity('flower4')
engine.addEntity(flower4)
flower4.setParent(_scene)
flower4.addComponentOrReplace(gltfShape66)
const transform312 = new Transform({
  position: new Vector3(100.74649047851562, 0, 18.271530151367188),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(13.333454132080078, 13.333454132080078, 13.333454132080078)
})
flower4.addComponentOrReplace(transform312)

const flower5 = new Entity('flower5')
engine.addEntity(flower5)
flower5.setParent(_scene)
flower5.addComponentOrReplace(gltfShape66)
const transform313 = new Transform({
  position: new Vector3(100.02212524414062, 0, 30.138080596923828),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(13.333454132080078, 13.333454132080078, 13.333454132080078)
})
flower5.addComponentOrReplace(transform313)


const boombox = new Entity('boombox')
engine.addEntity(boombox)
boombox.setParent(_scene)
const transform321 = new Transform({
  position: new Vector3(7.87, 5.386078357696533, 22.31),
  rotation: new Quaternion(0, -1, 0, 1),
  scale: new Vector3(2.7497119903564453, 2.7497119903564453, 2.7497119903564453)
})
boombox.addComponentOrReplace(transform321)
const gltfShape70 = new GLTFShape("71ccbcba-7d68-4089-8002-44f5bca5a874/Boombox_01/Boombox_01.glb")
gltfShape70.withCollisions = true
gltfShape70.isPointerBlocker = true
gltfShape70.visible = true
boombox.addComponentOrReplace(gltfShape70)
boombox.addComponent(
  new OnPointerDown((e) => {
    log("OnPointerDown", e)
  },{
    hoverText: "Play Meditation Music 1"
  })
)
boombox.addComponent(
  new OnPointerUp((e) => {


    boombox.addComponent(new AudioSource(new AudioClip("sounds/meditation1.mp3")))
    boombox.getComponent(AudioSource).playOnce()
    boombox.getComponent(AudioSource).volume = 1

    boombox2.removeComponent(AudioSource)
    boombox3.removeComponent(AudioSource)
    boombox4.removeComponent(AudioSource)
    boombox5.removeComponent(AudioSource)
    domeGreenhouse.removeComponent(AudioSource)
    fountain.removeComponent(AudioSource)

    log("OnPointerUp", e)
  },{
    hoverText: "Play Meditation Music 1"
  })
)



const boombox2 = new Entity('boombox2')
engine.addEntity(boombox2)
boombox2.setParent(_scene)
boombox2.addComponentOrReplace(gltfShape70)
const transform322 = new Transform({
  position: new Vector3(22, 0.3360687792301178, 54),
  rotation: new Quaternion(0, -0.3826834261417389, 4.470348358154297e-8, 0.9238795638084412),
  scale: new Vector3(2.7497119903564453, 2.749716281890869, 2.7497119903564453)
})
boombox2.addComponentOrReplace(transform322)
boombox2.addComponent(
  new OnPointerDown((e) => {
    log("OnPointerDown", e)
  },{
    hoverText: "Play Meditation Music 2"
  })
)
boombox2.addComponent(
  new OnPointerUp((e) => {


    boombox2.addComponent(new AudioSource(new AudioClip("sounds/meditation2.mp3")))
    boombox2.getComponent(AudioSource).playOnce()
    boombox2.getComponent(AudioSource).volume = 1

    boombox.removeComponent(AudioSource)
    boombox3.removeComponent(AudioSource)
    boombox4.removeComponent(AudioSource)
    boombox5.removeComponent(AudioSource)
    floorPurple8MusicStop()
    fountain.removeComponent(AudioSource)

    log("OnPointerUp", e)
  },{
    hoverText: "Play Meditation Music 2"
  })
)




const boombox3 = new Entity('boombox3')
engine.addEntity(boombox3)
boombox3.setParent(_scene)
boombox3.addComponentOrReplace(gltfShape70)
const transform323 = new Transform({
  position: new Vector3(83.58295440673828, 12.276598930358887, 14.623514175415039),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.05399751663208, 2.05399751663208, 2.05399751663208)
})
boombox3.addComponentOrReplace(transform323)
boombox3.addComponent(
  new OnPointerDown((e) => {
    log("OnPointerDown", e)
  },{
    hoverText: "Play Music"
  })
)
boombox3.addComponent(
  new OnPointerUp((e) => {

    boombox3.addComponent(new AudioSource(new AudioClip("sounds/jazz.mp3")))
    boombox3.getComponent(AudioSource).playOnce()

    boombox.removeComponent(AudioSource)
    boombox2.removeComponent(AudioSource)
    boombox4.removeComponent(AudioSource)
    boombox5.removeComponent(AudioSource)
    domeGreenhouse.removeComponent(AudioSource)
    fountain.removeComponent(AudioSource)
    
    log("OnPointerUp", e)
  },{
    hoverText: "Play Music"
  })
)






const boombox4 = new Entity('boombox4')
engine.addEntity(boombox4)
boombox4.setParent(_scene)
const transform324 = new Transform({
  position: new Vector3(53.66077423095703, 0, 9.556804656982422),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.4590418338775635, 2.4590418338775635, 2.4590418338775635)
})
boombox4.addComponentOrReplace(transform324)
boombox4.addComponentOrReplace(gltfShape70)
boombox4.addComponent(
  new OnPointerDown((e) => {
    log("OnPointerDown", e)
  },{
    hoverText: "Play Meditation Music 3"
  })
)
boombox4.addComponent(
  new OnPointerUp((e) => {


    boombox4.addComponent(new AudioSource(new AudioClip("sounds/meditation3.mp3")))
    boombox4.getComponent(AudioSource).playOnce()

    boombox.removeComponent(AudioSource)
    boombox2.removeComponent(AudioSource)
    boombox3.removeComponent(AudioSource)
    boombox5.removeComponent(AudioSource)
    floorPurple8MusicStop()
    domeGreenhouse.removeComponent(AudioSource)

    log("OnPointerUp", e)
  },{
    hoverText: "Play Meditation Music 3"
  })
)

const boombox5 = new Entity('boombox5')
engine.addEntity(boombox5)
boombox5.setParent(_scene)
boombox5.addComponentOrReplace(gltfShape70)
const transform327 = new Transform({
  position: new Vector3(53.66077423095703, 0.17577838897705078, 52.65332794189453),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.4590418338775635, 2.4590418338775635, 2.4590418338775635)
})
boombox5.addComponentOrReplace(transform327)
boombox5.addComponent(
  new OnPointerDown((e) => {
    log("OnPointerDown", e)
  },{
    hoverText: "Play Meditation Music 3"
  })
)
boombox5.addComponent(
  new OnPointerUp((e) => {


    boombox5.addComponent(new AudioSource(new AudioClip("sounds/meditation3.mp3")))
    boombox5.getComponent(AudioSource).playOnce()

    boombox.removeComponent(AudioSource)
    boombox2.removeComponent(AudioSource)
    boombox3.removeComponent(AudioSource)
    boombox4.removeComponent(AudioSource)
    domeGreenhouse.removeComponent(AudioSource)

    log("OnPointerUp", e)
  },{
    hoverText: "Play Meditation Music 3"
  })
)







const windowXFrame = new Entity('windowXFrame')
engine.addEntity(windowXFrame)
windowXFrame.setParent(_scene)
const transform314 = new Transform({
  position: new Vector3(95.65824127197266, 0, 16.5),
  rotation: new Quaternion(3.358111670817088e-15, 0.7071070075035095, -8.429373110629967e-8, 0.7071066498756409),
  scale: new Vector3(5.250006675720215, 3.5, 3.5700151920318604)
})
windowXFrame.addComponentOrReplace(transform314)
const gltfShape67 = new GLTFShape("015d6a45-0367-4834-92b1-c0f407ca642a/Window 1x2 Frame.glb")
gltfShape67.withCollisions = true
gltfShape67.isPointerBlocker = true
gltfShape67.visible = true
windowXFrame.addComponentOrReplace(gltfShape67)
windowXFrame.addComponent(
  new OnPointerDown((e) => {
    log("OnPointerDown", e)
  },{
    hoverText: "A Dinner Ritual"
  })
)
windowXFrame.addComponent(
  new OnPointerUp((e) => {

    movePlayerTo({x:75.57, y:11.97, z: 51.53})
    boombox3.removeComponent(AudioSource)


    log("OnPointerUp", e)
  },{
    hoverText: "A Dinner Ritual"
  })
)







const windowXFrame2 = new Entity('windowXFrame2')
engine.addEntity(windowXFrame2)
windowXFrame2.setParent(_scene)
windowXFrame2.addComponentOrReplace(gltfShape67)
const transform315 = new Transform({
  position: new Vector3(71.07479858398438, 0, 32),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.250000953674316, 3.5, 3.570009469985962)
})
windowXFrame2.addComponentOrReplace(transform315)
windowXFrame2.addComponent(
  new OnPointerDown((e) => {
    log("OnPointerDown", e)
  },{
    hoverText: "Click here to move to Meditation 2"
  })
)
windowXFrame2.addComponent(
  new OnPointerUp((e) => {

    boombox2.addComponent(new AudioSource(new AudioClip("sounds/meditation2.mp3")))
    boombox2.getComponent(AudioSource).playOnce()

    domeGreenhouse.addComponent(new AudioSource(new AudioClip("sounds/meditation2.mp3")))
    domeGreenhouse.getComponent(AudioSource).playOnce()
    
    movePlayerTo({x:29.09, y:0.88, z:47.87})

    boombox3.removeComponent(AudioSource)
    floorPurple8MusicStop()

    log("OnPointerUp", e)
  },{
    hoverText: "Click here to move to Meditation 2"
  })
)







const windowXFrame3 = new Entity('windowXFrame3')
engine.addEntity(windowXFrame3)
windowXFrame3.setParent(_scene)
windowXFrame3.addComponentOrReplace(gltfShape67)
const transform316 = new Transform({
  position: new Vector3(71.07662200927734, 0, 45),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.249996185302734, 3.5, 3.570012331008911)
})
windowXFrame3.addComponentOrReplace(transform316)
windowXFrame3.addComponent(
  new OnPointerDown((e) => {
    log("OnPointerDown", e)
  },{
    hoverText: "Click here to move to Meditation 3"
  })
)
windowXFrame3.addComponent(
  new OnPointerUp((e) => {

    boombox4.addComponent(new AudioSource(new AudioClip("sounds/meditation3.mp3")))
    boombox5.addComponent(new AudioSource(new AudioClip("sounds/meditation3.mp3")))
    fountain.addComponent(new AudioSource(new AudioClip("sounds/meditation3.mp3")))

    boombox4.getComponent(AudioSource).playOnce()
    boombox5.getComponent(AudioSource).playOnce()

    boombox4.getComponent(AudioSource).volume = 1
    boombox5.getComponent(AudioSource).volume = 1
    floorPurple8MusicStop()
    
    movePlayerTo({x:59.47, y:0.88, z:10.72})
    boombox3.removeComponent(AudioSource)

    log("OnPointerUp", e)
  },{
    hoverText: "Click here to move to Meditation 3"
  })
)





const windowXFrame4 = new Entity('windowXFrame4')
engine.addEntity(windowXFrame4)
windowXFrame4.setParent(_scene)
windowXFrame4.addComponentOrReplace(gltfShape67)
const transform317 = new Transform({
  position: new Vector3(71.07902526855469, 0, 19),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.250000476837158, 3.5, 3.570007562637329)
})
windowXFrame4.addComponentOrReplace(transform317)
windowXFrame4.addComponent(
  new OnPointerDown((e) => {
    log("OnPointerDown", e)
  },{
    hoverText: "Click here to move to Meditation 1"
  })
)
windowXFrame4.addComponent(
  new OnPointerUp((e) => {


    boombox.addComponent(new AudioSource(new AudioClip("sounds/meditation1.mp3")))
    boombox.getComponent(AudioSource).playOnce()
    boombox.getComponent(AudioSource).volume = 1


    floorPurple8MusicPlay()


    movePlayerTo({x:12.93, y:6.31, z:20.41})

    boombox3.removeComponent(AudioSource)



    log("OnPointerUp", e)
  },{
    hoverText: "Click here to move to Meditation 1"
  })
)



const windowXFrame5 = new Entity('windowXFrame5')
engine.addEntity(windowXFrame5)
windowXFrame5.setParent(_scene)
windowXFrame5.addComponentOrReplace(gltfShape67)
const transform318 = new Transform({
  position: new Vector3(95.65824127197266, 0, 40.30583572387695),
  rotation: new Quaternion(3.358111670817088e-15, 0.7071070075035095, -8.429373110629967e-8, 0.7071066498756409),
  scale: new Vector3(5.250008583068848, 3.5, 3.570017099380493)
})
windowXFrame5.addComponentOrReplace(transform318)
windowXFrame5.addComponent(
  new OnPointerDown((e) => {
    log("OnPointerDown", e)
  },{
    hoverText: "Thank your close friend"
  })
)
windowXFrame5.addComponent(
  new OnPointerUp((e) => {

    movePlayerTo({x:79.71, y:11.97, z:14.11})

    boombox3.addComponent(new AudioSource(new AudioClip("sounds/jazz.mp3")))
    boombox3.getComponent(AudioSource).playOnce()

    log("OnPointerUp", e)
  },{
    hoverText: "Thank your close friend"
  })
)

const images = new Entity('images')
engine.addEntity(images)
images.setParent(_scene)
const transform319 = new Transform({
  position: new Vector3(95.6498794555664, 4.781275272369385, 42.84421920776367),
  rotation: new Quaternion(0.7071069478988647, -0.7071067094802856, 6.281287312503991e-8, 1.1920927533992653e-7),
  scale: new Vector3(0.24160845577716827, 0.22131358087062836, 0.241608664393425)
})
images.addComponentOrReplace(transform319)
const gltfShape68 = new GLTFShape("655033c9-25a8-4c3d-94df-6961defa4306/Gratitude.gltf")
gltfShape68.withCollisions = true
gltfShape68.isPointerBlocker = true
gltfShape68.visible = true
images.addComponentOrReplace(gltfShape68)

const birdFountain = new Entity('birdFountain')
engine.addEntity(birdFountain)
birdFountain.setParent(_scene)
const transform320 = new Transform({
  position: new Vector3(26.09446907043457, 0, 26.194652557373047),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.205108642578125, 1.205108642578125, 1.205108642578125)
})
birdFountain.addComponentOrReplace(transform320)
const gltfShape69 = new GLTFShape("13f3da80-42e0-4e3b-a8b0-567ca1e28d34/BirdFountain_01/BirdFountain_01.glb")
gltfShape69.withCollisions = true
gltfShape69.isPointerBlocker = true
gltfShape69.visible = true
birdFountain.addComponentOrReplace(gltfShape69)
birdFountain.addComponent(
  new OnPointerDown((e) => {
    log("OnPointerDown", e)
  },{
    hoverText: "Go to Gallery"
  })
)
birdFountain.addComponent(
  new OnPointerUp((e) => {

    boombox.removeComponent(AudioSource)
    boombox2.removeComponent(AudioSource)
    boombox3.removeComponent(AudioSource)
    boombox4.removeComponent(AudioSource)
    boombox5.removeComponent(AudioSource)
    floorPurple8MusicStop()
    domeGreenhouse.removeComponent(AudioSource)
    fountain.removeComponent(AudioSource)

    movePlayerTo({x:82, y:1.07, z:12})

    log("OnPointerUp", e)
  },{
    hoverText: "Go to Gallery"
  })
)











const grassTile3 = new Entity('grassTile3')
engine.addEntity(grassTile3)
grassTile3.setParent(_scene)
grassTile3.addComponentOrReplace(gltfShape26)
const transform325 = new Transform({
  position: new Vector3(49.29128646850586, 0.1564531922340393, 52.11185836791992),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.374999523162842, 3.375, 3.374999523162842)
})
grassTile3.addComponentOrReplace(transform325)

const summoningStonePedestal3 = new Entity('summoningStonePedestal3')
engine.addEntity(summoningStonePedestal3)
summoningStonePedestal3.setParent(_scene)
summoningStonePedestal3.addComponentOrReplace(gltfShape12)
const transform326 = new Transform({
  position: new Vector3(49.45392990112305, 0.20670419931411743, 52.287044525146484),
  rotation: new Quaternion(0, 0, 1, -5.960464477539063e-8),
  scale: new Vector3(1.6055229902267456, 1.0152318477630615, 1.6055229902267456)
})
summoningStonePedestal3.addComponentOrReplace(transform326)




const plainText3 = new Entity('plainText3')
engine.addEntity(plainText3)
plainText3.setParent(_scene)
const transform328 = new Transform({
  position: new Vector3(62.37297058105469, 4.191001892089844, 28.20),
  rotation: new Quaternion(-5.205803930969201e-15, -0.9992237091064453, 1.191167413594485e-7, 0.03939536213874817),
  scale: new Vector3(2.082616090774536, 2.082615375518799, -0.5409356355667114)
})
plainText3.addComponentOrReplace(transform328)

const indicatorArrow2 = new Entity('indicatorArrow2')
engine.addEntity(indicatorArrow2)
indicatorArrow2.setParent(_scene)
const transform329 = new Transform({
  position: new Vector3(62.43427276611328, 1.357039213180542, 28.20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.821470260620117, 3.821470260620117, 3.821470260620117)
})
indicatorArrow2.addComponentOrReplace(transform329)

const birdFountain2 = new Entity('birdFountain2')
engine.addEntity(birdFountain2)
birdFountain2.setParent(_scene)
birdFountain2.addComponentOrReplace(gltfShape69)
const transform330 = new Transform({
  position: new Vector3(62.41209411621094, 0, 28.20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.205108642578125, 1.205108642578125, 1.205108642578125)
})
birdFountain2.addComponentOrReplace(transform330)
birdFountain2.addComponent(
  new OnPointerDown((e) => {
    log("OnPointerDown", e)
  },{
    hoverText: "Go to Gallery"
  })
)
birdFountain2.addComponent(
  new OnPointerUp((e) => {

    boombox.removeComponent(AudioSource)
    boombox2.removeComponent(AudioSource)
    boombox3.removeComponent(AudioSource)
    boombox4.removeComponent(AudioSource)
    boombox5.removeComponent(AudioSource)
    floorPurple8MusicStop()
    domeGreenhouse.removeComponent(AudioSource)
    fountain.removeComponent(AudioSource)

    movePlayerTo({x:82, y:1.07, z:12})

    log("OnPointerUp", e)
  },{
    hoverText: "Go to Gallery"
  })
)


const triggerTileSquare7 = new Entity('triggerTileSquare7')
engine.addEntity(triggerTileSquare7)
triggerTileSquare7.setParent(_scene)
const transform331 = new Transform({
  position: new Vector3(62.268375396728516, 0, 28.398382186889648),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.2618225812911987, 3.220524311065674, 1.2618225812911987)
})
triggerTileSquare7.addComponentOrReplace(transform331)

const wallPlainGlass19 = new Entity('wallPlainGlass19')
engine.addEntity(wallPlainGlass19)
wallPlainGlass19.setParent(_scene)
wallPlainGlass19.addComponentOrReplace(gltfShape4)
const transform332 = new Transform({
  position: new Vector3(70.5819320678711, 10.8966646194458, 4.725451946258545),
  rotation: new Quaternion(7.149794943378182e-15, 0, 6.0168951526891334e-15, -1),
  scale: new Vector3(-12.713932991027832, 1.1641451120376587, 1.0000097751617432)
})
wallPlainGlass19.addComponentOrReplace(transform332)

const flowerPot7 = new Entity('flowerPot7')
engine.addEntity(flowerPot7)
flowerPot7.setParent(_scene)
flowerPot7.addComponentOrReplace(gltfShape45)
const transform333 = new Transform({
  position: new Vector3(94.19625091552734, 0.1769723892211914, 5.975124359130859),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.60989761352539, 8.60989761352539, 8.60989761352539)
})
flowerPot7.addComponentOrReplace(transform333)

const flowerPot10 = new Entity('flowerPot10')
engine.addEntity(flowerPot10)
flowerPot10.setParent(_scene)
flowerPot10.addComponentOrReplace(gltfShape44)
const transform334 = new Transform({
  position: new Vector3(92.21407318115234, 0.1769723892211914, 5.983159065246582),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.005058288574219, 8.005058288574219, 8.005058288574219)
})
flowerPot10.addComponentOrReplace(transform334)

const flowerPot11 = new Entity('flowerPot11')
engine.addEntity(flowerPot11)
flowerPot11.setParent(_scene)
flowerPot11.addComponentOrReplace(gltfShape36)
const transform335 = new Transform({
  position: new Vector3(74.37240600585938, 0.1865081787109375, 5.69240665435791),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.914204120635986, 7.914204120635986, 7.914204120635986)
})
flowerPot11.addComponentOrReplace(transform335)

const flowerPot12 = new Entity('flowerPot12')
engine.addEntity(flowerPot12)
flowerPot12.setParent(_scene)
flowerPot12.addComponentOrReplace(gltfShape44)
const transform336 = new Transform({
  position: new Vector3(72.54086303710938, 0.1769723892211914, 5.983159065246582),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.005058288574219, 8.005058288574219, 8.005058288574219)
})
flowerPot12.addComponentOrReplace(transform336)

const flowerPot13 = new Entity('flowerPot13')
engine.addEntity(flowerPot13)
flowerPot13.setParent(_scene)
const transform337 = new Transform({
  position: new Vector3(75.05201721191406, 0, 52.73451614379883),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.459794044494629, 5.459794044494629, 5.459794044494629)
})
flowerPot13.addComponentOrReplace(transform337)
const gltfShape71 = new GLTFShape("97cf4ef7-f97a-46bc-86ce-79e5f97d70aa/HWN20_FlowerPot_06.glb")
gltfShape71.withCollisions = true
gltfShape71.isPointerBlocker = true
gltfShape71.visible = true
flowerPot13.addComponentOrReplace(gltfShape71)

const flowerPot14 = new Entity('flowerPot14')
engine.addEntity(flowerPot14)
flowerPot14.setParent(_scene)
flowerPot14.addComponentOrReplace(gltfShape44)
const transform338 = new Transform({
  position: new Vector3(72.54086303710938, 0.1769723892211914, 51.86690139770508),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.005058288574219, 8.005058288574219, 8.005058288574219)
})
flowerPot14.addComponentOrReplace(transform338)

const flowerPot15 = new Entity('flowerPot15')
engine.addEntity(flowerPot15)
flowerPot15.setParent(_scene)
flowerPot15.addComponentOrReplace(gltfShape36)
const transform339 = new Transform({
  position: new Vector3(74.38581085205078, 0.1865081787109375, 51.35160446166992),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.914204120635986, 7.914204120635986, 7.914204120635986)
})
flowerPot15.addComponentOrReplace(transform339)

const flowerPot16 = new Entity('flowerPot16')
engine.addEntity(flowerPot16)
flowerPot16.setParent(_scene)
flowerPot16.addComponentOrReplace(gltfShape45)
const transform340 = new Transform({
  position: new Vector3(91.99468231201172, 0.1769723892211914, 52.897525787353516),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.60989761352539, 8.60989761352539, 8.60989761352539)
})
flowerPot16.addComponentOrReplace(transform340)

const flowerPot17 = new Entity('flowerPot17')
engine.addEntity(flowerPot17)
flowerPot17.setParent(_scene)
flowerPot17.addComponentOrReplace(gltfShape44)
const transform341 = new Transform({
  position: new Vector3(94.1686019897461, 0.1769723892211914, 51.86690139770508),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.005058288574219, 8.005058288574219, 8.005058288574219)
})
flowerPot17.addComponentOrReplace(transform341)

const flowerPot18 = new Entity('flowerPot18')
engine.addEntity(flowerPot18)
flowerPot18.setParent(_scene)
flowerPot18.addComponentOrReplace(gltfShape44)
const transform342 = new Transform({
  position: new Vector3(94.329833984375, 11.097113609313965, 52.44349670410156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.179508686065674, 5.179508686065674, 5.179508686065674)
})
flowerPot18.addComponentOrReplace(transform342)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script1.spawn(woodenDoor, {"onClickText":"Open/Close","onClick":[{"entityName":"woodenDoor","actionId":"toggle","values":{}}]}, createChannel(channelId, woodenDoor, channelBus))
script2.spawn(dropChandelier, {"startOn":true,"clickable":true}, createChannel(channelId, dropChandelier, channelBus))
script2.spawn(dropChandelier3, {"startOn":true,"clickable":true}, createChannel(channelId, dropChandelier3, channelBus))
script2.spawn(dropChandelier4, {"startOn":true,"clickable":true}, createChannel(channelId, dropChandelier4, channelBus))
script2.spawn(dropChandelier5, {"startOn":true,"clickable":true}, createChannel(channelId, dropChandelier5, channelBus))
script3.spawn(triggerTileSquare4, {"enabled":true}, createChannel(channelId, triggerTileSquare4, channelBus))
script3.spawn(triggerTileSquare5, {"enabled":true,"onEnter":[{"entityName":"woodenDoor","actionId":"open","values":{}}]}, createChannel(channelId, triggerTileSquare5, channelBus))
script3.spawn(triggerTileSquare6, {"enabled":true}, createChannel(channelId, triggerTileSquare6, channelBus))
script3.spawn(triggerTileSquare, {"enabled":true}, createChannel(channelId, triggerTileSquare, channelBus))
script3.spawn(triggerTileSquare3, {"enabled":true}, createChannel(channelId, triggerTileSquare3, channelBus))
script4.spawn(wallLightStreetlamp, {"startOn":true,"clickable":true,"onActivate":[{"entityName":"woodenDoor","actionId":"open","values":{}},{"entityName":"woodenDoor","actionId":"open","values":{}}]}, createChannel(channelId, wallLightStreetlamp, channelBus))
script3.spawn(triggerTileSquare2, {"enabled":false,"onEnter":[{"entityName":"woodenDoor","actionId":"open","values":{}}]}, createChannel(channelId, triggerTileSquare2, channelBus))
script5.spawn(indicatorArrow, {"active":true}, createChannel(channelId, indicatorArrow, channelBus))
script6.spawn(plainText, {"text":"Go To Gallery","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText, channelBus))
script6.spawn(plainText2, {"text":"HappVerse","font":"SF_Heavy","color":"#000000"}, createChannel(channelId, plainText2, channelBus))
script6.spawn(plainText3, {"text":"Go To Gallery","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText3, channelBus))
script5.spawn(indicatorArrow2, {"active":true}, createChannel(channelId, indicatorArrow2, channelBus))
script3.spawn(triggerTileSquare7, {"enabled":false,"onEnter":[{"entityName":"woodenDoor","actionId":"open","values":{}}]}, createChannel(channelId, triggerTileSquare7, channelBus))