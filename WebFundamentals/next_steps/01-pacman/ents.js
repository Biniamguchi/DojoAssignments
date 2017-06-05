// Handles all entities
var ents = {
    active:[],
    valid:{},

    create:function(cls){
        if(!ents.valid[cls]){return;}
        var ent = ents.valid[cls]();
        ent.id  = ents.active.length;
        ent.class = cls; // Will save a lot of time when collision checking.
        ents.active[ent.id] = ent;
        return ent;
    },

    remove:function(id){
        if(!ents.active[id]){return;}
        ents.active.splice(id,1);

        for(;id<ents.active.length;id++){ // Push entity id's down to correspond with their new indices.
            ents.active[id].id = id;
        }
    },


    collide:function(a){
        for(var k=0;k<ents.active.length;k++){
            let b = ents.active[k];

            if(a != b && util.AABB(a,b)){
                a.collide(b);
                b.collide(a);
            }
        }
    },

    tick:function(delta){
        for(var k=0;k<ents.active.length;k++){
            let v = ents.active[k];
            if(v.tick){v.tick();}
            ents.collide(v);
        }
    },

    render:function(context){
        for(var k=0;k<ents.active.length;k++){
            let v = ents.active[k];
            if(v.render){v.render(context);} // Pass render context to entities.
        }
    }
};
