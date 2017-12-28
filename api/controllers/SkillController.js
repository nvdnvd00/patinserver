/**
 * SkillController
 *
 * @description :: Server-side logic for managing skills
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get_skill:function (req,res){
        var typeSkill = req.param("typeSkill");
       //var number=req.param("number");
       var level=req.param("level")
       Skill.find({where:{class: typeSkill, level: level}}).exec(
           function (err,skill) {
               if (err) {
                   return res.send(err);
               }
               return res.send(skill);
           }
       )
        // Skill.query('SELECT a.id,a.name,b.name as lv,a.level,a.url FROM `skill` a, `level` b WHERE a.level=b.id AND a.class=?',[typeSkill],function (err,skill) 
        // {
        //     if(err){
        //     return res.json(err);
        //   }
        //   return res.json(skill);
            
        // })

    },

};

