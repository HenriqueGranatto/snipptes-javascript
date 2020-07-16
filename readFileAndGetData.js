/** 
 * Lê o arquivo de um determinado elemento e retorna as informações sobre o mesmo. 
 * Necessário informar o ID do elemento por parâmetro 
 */
const readFileAndGetData = async (e) =>
{
    try
    {
        const file = document.querySelector(`#${e}`).files.item(0)

        const read = new Promise((res, rej) => {
            const reader = new FileReader()

            reader.onload = () => res(reader.result)
            reader.onerror = () => rej(reader.result)

            reader.readAsDataURL(file);
        });

        let response = 
        {
            shorName:   file.name.split(".")[0], 
            longName:   file.name, 
            size:       file.size, 
            extension:  file.name.split(".")[1], 
            data:       await read
        }

        return response
    }
    catch(e)
    {   
        throw e
    }
}

/** 
 * Lê o arquivo de um determinado diretório e retorna as informações sobre o mesmo. 
 */
const readFileAndGetData = async () =>
{
    try
    {
        const read = new Promise((res, rej) => {
            const mapsPath = path.join('..', 'assets', 'map')

            fs.readFile(path.join(__dirname, mapsPath , "teste.json"), 'utf8', function (error, data) {
                if (error) rej(error)
                res(JSON.parse(data))
            })
        })

        let response = 
        {
            data: await read
        }

        return response
    }
    catch(e)
    {   
        throw e
    }
}
