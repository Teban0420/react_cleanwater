import { useEffect, useMemo, useState } from "react";
import adminAxios from "../../config/axios";


export const Formulario = () => {

    const [casado, setCasado] = useState([]);
    const [agua_hogar, setagua_hogar] = useState([]);
    const [agua_proveniente, setagua_proveniente] = useState([]);
    const [edad, setedad] = useState([]);
    const [personas_hogar, setpersonas_hogar] = useState([]);

    const calidad = [0,1,2,3,4,5,6,7,8,9,10];

   useEffect( () => {

    const consultar = async () => {

        const respuesta = await adminAxios.get('/crear-usuario');   
        setagua_hogar(respuesta.data.agua_hogar);    
        setagua_proveniente(respuesta.data.agua_proveniente);
        setedad(respuesta.data.edad);
        setCasado(respuesta.data.casado);   
        setpersonas_hogar(respuesta.data.personas_hogar);    
    }
       
    consultar()
        
   }, []);

    return(
        <>
            <form>   
                
                <label className="form-label top">¿Eres propietario de casa?*</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="propietario" value="1" />
                    <label className="form-check-label">Si</label>                    
                </div>  
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="propietario" value="0" />
                    <label className="form-check-label">No</label>
                </div>                 
                
                <label className="form-label top">¿Estas casado?*</label>
                <select className="form-select" aria-label="Default select example">
                    
                {
                    casado.map( element  => (
                        <option key={element.id} value={element.id}>{element.nombre}</option>                        
                    ))
                }
                </select>

                <label className="form-label top">Edad*</label>

                <select className="form-select" aria-label="Default select example">
                {
                    edad.map( element  => (
                        <option  key={element.id} value={element.id}>{element.rango_edad}</option>                        
                    ))
                }
                </select>

                <label className="form-label top">¿En qué nivel cree usted se encuenta la calidad del agua que recibe en su hogar?*</label>

                {/* {
                    calidad.map( element => (
                        <>
                            <input key={element} type="checkbox" className="btn-check" autoComplete="off" value={element}/>
                            <label htmlFor={element} className="btn">{element}</label>
                        </>
                    ))
                } */}

                <label className="form-label top">¿Cuantas personas viven en su hogar?*</label>
                <select className="form-select" aria-label="Default select example">
                    {
                        personas_hogar.map( persona => (
                            <option  key={persona.id} value={persona.id}>{persona.cantidad}</option>  
                        ))
                    }
                </select>

                <label className="form-label top">¿De donde viene el agua de su hogar?*</label>
                <select className="form-select" aria-label="Default select example">
                    {
                        agua_proveniente.map( agua => (
                            <option  key={agua.id} value={agua.id}>{agua.procedencia_agua}</option> 
                        ))
                    }
                </select>

                <label className="form-label top"> ¿Ha experimentado cambios en su piel como sequedad, reacciones alérgicas o irritaciones?*</label>

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="reacciones_alergias" value="1" />
                    <label className="form-check-label">Si</label>                    
                </div>  

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="reacciones_alergias" value="0" />
                    <label className="form-check-label">No</label>
                </div> 

                <label className="form-label top">En su hogar consumen agua proveniente de (Seleccione todas las que aplique)</label>

                {
                    agua_hogar.map( agua => (
                        <div className="form-check">
                            <input key={agua.id} className="form-check-input" type="checkbox" value={agua.id} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                {agua.procedencia}
                            </label>
                        </div>
                    ))
                }


                <div className="mb-3 top">
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