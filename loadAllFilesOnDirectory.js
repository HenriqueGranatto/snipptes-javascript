/** 
 * Carrega todos os arquivos de todos os diretórios a partir do atual (onde o método foi chamado) 
 */
const loadAllFilesOnDirectory = () =>
{
    try
    {
        fs.readdir(`${__dirname}`, function (err, directories) 
        {
            if (err) { return false } 

            directories.push(__dirname)

            directories.forEach(function(directory){
                if(directory.split(".").length === 1)
                {
                    directory = (__dirname !== directory) ? `${__dirname}\\${directory}` : __dirname

                    fs.readdir(`${directory}`, function (err, files) 
                    {
                        if (err) { return false } 
            
                        files.forEach(function (file) 
                        {
                            if(file.split(".").length ===2)
                            {
                                require(`${directory}\\${file}`)
                            }
                        })
                    })
                }
            })
        })   
    }
    catch(e)
    {   
        throw e
    }
}
