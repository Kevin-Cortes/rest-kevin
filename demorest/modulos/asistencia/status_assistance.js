const dbCon = require("../Configuracion/Config");

function listaAsistencia(req,res,next){
    dbCon.any('SELECT * FROM status_assistance')
    .then(function(data)
    {
        res.json({
            status:"ok",
            result:data,
            mensaje:"Estatus de asistencia ok"
        })
    })
}


module.exports = {
    listaAsistencia: listaAsistencia
}