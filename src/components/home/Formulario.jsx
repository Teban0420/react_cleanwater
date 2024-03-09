
const numeros = [1,2,3,4,5,6,7,8,9,10];

export const Formulario = () => {

    return(
        <>
            <form>                        
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" required />
                </div>                

                <div className="mb-3">
                    <label className="form-label">Celular</label>
                    <input type="tel" className="form-control" id="phone" required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="address" required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Zipcode</label>
                    <input type="text" className="form-control" id="zip" required/>
                </div>                

                <div className="text-right">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </>
    )
}