var express = require('express');
var router = express.Router();
var os = require("os");

router.get('/', function(req, res, next) {
    try {
        let osInfo ={"hostname : " : os.hostname(),"type : " : os.type(),"platform : " : os.platform() };
        if (!osInfo){
            throw new Error("os not found")
        }
        res.status(200).json(osInfo)
    } catch (error) {
    }
  });
router.get('/cpus', (req,res,next)=>
{
    try {
        let osCpus =os.cpus();
        if(!osCpus || osCpus.length === 0){
            throw new Error(" cpu not found ")
           
        }
        res.json(osCpus)
    } catch (error) {
        res.status(500).json(error.message);

    }
}
)
router.get("/cpus/:id", (req, res, next) => {

    const { id } = req.params;
    const cpus = os.cpus();
    if (id > cpus.length - 1 || id < 0) {
        throw new Error("id must be valid !")
    }
    res.json(cpus[id])
}
)
module.exports = router;