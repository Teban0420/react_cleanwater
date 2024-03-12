import { useEffect, useState } from "react";
import adminAxios from "../../config/axios";
import Swal from "sweetalert2";


export const Formulario = () => {

    const [casado, setCasado] = useState([]);
    const [agua_hogar, setagua_hogar] = useState([]);
    const [Select_agua_hogar, setSelect_agua_hogar] = useState([]);
    const [agua_proveniente, setagua_proveniente] = useState([]);
    const [calidad, setcalidad] = useState(0);
    const [edad, setedad] = useState([]);
    const [personas_hogar, setpersonas_hogar] = useState([]);

  
    const [usuario, setusuario] = useState({
        propietario: '',
        reacciones_alergias: '',
        nombre: '',
        celular: '',
        direccion: '',
        zipcode: '',
        agua_hogar: '',
        Agua_provenienteId: '',
        casado: '',
        edad: '',
        calidad: '',
        Personas_hogarId: '',
    });

 

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

   const seleccionado = (event) => {

        const {value, checked } = event.target;   
        
        if(checked){

            setSelect_agua_hogar([
                ...Select_agua_hogar,
                value
            ]);          
        }
        else{
            setSelect_agua_hogar(Select_agua_hogar.filter( element => element !== value));
        }             
   }

   const leer_calidad = (event) => {
        console.log(event.target.value)
        setcalidad(event.target.value);
   }

   const leerdatos = e => {

        setusuario({
            ...usuario,
            [e.target.name]: e.target.value
        })  
        
   }

   const validarUsuario = () => {

        const { propietario,                
                reacciones_alergias,
                nombre,
                celular,
                direccion,
                zipcode,                
                // agua_hogar,
                Agua_provenienteId,
                casado,
                edad,
                Personas_hogarId,} = usuario;
    
        let valido = !propietario.length || !reacciones_alergias.length || !nombre.length || !celular.length ||
                    !direccion.length || !zipcode.length  || !Agua_provenienteId.length ||
                    !casado.length || !edad.length || !Personas_hogarId.length
        return valido;
    }

   const agregar = async (e) => {
        e.preventDefault();

        let string_agua = Select_agua_hogar.toString();

        setusuario({
           ...usuario,
           agua_hogar: string_agua,
           calidad: calidad
        })
       
        const respuesta = await adminAxios.post('/crear-usuario', usuario);    
        
        if(respuesta.status == 200){

            Swal.fire({
                type: 'success',
                icon: 'success',
                title: 'Gracias por contactarse con nosotros',                
            })

            setTimeout(() => {
                
                window.location.href = window.location.href;
            }, 3000);

        }
   }

    return(
        <>
            <form onSubmit={agregar} >   
                
                <label className="form-label top">¿Eres propietario de casa?*</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="propietario" value="1" onChange={leerdatos} />
                    <label className="form-check-label">Si</label>                    
                </div>  
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="propietario" value="0" onChange={leerdatos}/>
                    <label className="form-check-label">No</label>
                </div> 

                <label className="form-label top">¿Estas casado?*</label>
                <select className="form-select" aria-label="Default select example" name="casado" onChange={leerdatos}>                    
                    {
                        casado.map( element  => (
                            <option key={element.id} value={element.id}>{element.nombre}</option>                        
                        ))
                    }
                </select>             
                
                
                <label className="form-label top">Edad*</label>

                <select className="form-select" aria-label="Default select example" name="edad" onChange={leerdatos}>
                {
                    edad.map( element  => (
                        <option  key={element.id} value={element.id} >{element.rango_edad}</option>                        
                    ))
                }
                </select>


                <label className="form-label top">¿En qué nivel cree usted se encuenta la calidad del agua que recibe en su hogar?*</label>
                
                <div className="container text-center">
                    <input type="checkbox" className="btn-check" checked={calidad == 0} name="calidad" value={0} autoComplete="off" onChange={leer_calidad} />
                    <label className="btn btn-primary" htmlFor="0">0</label>

                    <input type="checkbox" className="btn-check" name="calidad" checked={calidad == 1} value={1} autoComplete="off" onChange={leer_calidad}/>
                    <label className="btn btn-primary m-1" htmlFor="1">1</label>               
                </div>

                <label className="form-label top">¿Cuantas personas viven en su hogar?*</label>
                <select className="form-select" aria-label="Default select example" name="Personas_hogarId" onChange={leerdatos}>
                    {
                        personas_hogar.map( persona => (
                            <option  key={persona.id} value={persona.id}>{persona.cantidad}</option>  
                        ))
                    }
                </select>

                <label className="form-label top">¿De donde viene el agua de su hogar?*</label>
                <select className="form-select" aria-label="Default select example" name="Agua_provenienteId" onChange={leerdatos}>
                    {
                        agua_proveniente.map( agua => (
                            <option  key={agua.id} value={agua.id}>{agua.procedencia_agua}</option> 
                        ))
                    }
                </select>

                <label className="form-label top"> ¿Ha experimentado cambios en su piel como sequedad, reacciones alérgicas o irritaciones?*</label>

                <div className="form-check">
                    <input className="form-check-input" type="radio"  name="reacciones_alergias" value="1" onChange={leerdatos}/>
                    <label className="form-check-label">Si</label>                    
                </div>  

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="reacciones_alergias" value="0" onChange={leerdatos}/>
                    <label className="form-check-label">No</label>
                </div> 

                <label className="form-label top">En su hogar consumen agua proveniente de (Seleccione todas las que aplique)</label>

                {
                    agua_hogar.map( agua => (
                        <div className="form-check"  key={agua.id}>
                            <input key={agua.id} 
                                  className="form-check-input" 
                                  type="checkbox" value={agua.procedencia} 
                                  onChange={seleccionado} 
                                  name="agua_hogar"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                {agua.procedencia}
                            </label>
                        </div>
                    ))
                }


                <div className="mb-3 top">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" required  onChange={leerdatos}/>
                </div>                

                <div className="mb-3">
                    <label className="form-label">Celular</label>
                    <input type="tel" className="form-control" name="celular" required onChange={leerdatos}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" required onChange={leerdatos}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Zipcode</label>
                    <input type="text" className="form-control" name="zipcode" required onChange={leerdatos}/>
                </div>                

                <div className="text-right">
                    <button type="submit" className="btn btn-primary" disabled={validarUsuario()}>Enviar</button>
                </div>
            </form>
        </>
    )
}