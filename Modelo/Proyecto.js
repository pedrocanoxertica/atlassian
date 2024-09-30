export class Proyecto {
    
    constructor(id,name,key,self,expand,projectTypeKey,simplified,
        style,isPrivate,properties,entityId,uuid) {
        this.id = id;
        this.name = name;
        this.key = key;
        this.self = self;
        this.expand = expand;
        this.projectTypeKey = projectTypeKey;
        this.simplified = simplified;
        this.style = style;
        this.isPrivate = isPrivate;
        this.properties = properties;
        this.entityId = entityId;
        this.uuid = uuid;
      }
}