

export default function Registrar(){
    return(
        <>
        <div className="titulo">Registrarse</div>
        <form action="">
        <div className="datos">
        <label>Nombre Usuario</label>
        <input type="text" id="nombre_id" />
      </div>
        <div className="datos">
        <label>Nombre</label>
        <input type="text" id="nombre_id" />
      </div>
      <div className="datos">
        <label>Apellido</label>
        <input type="text" id="apellido_id" />
      </div>
      <div className="datos">
        <label>Email</label>
        <input type="text" id="correo_id" />
      </div>
      <div className="datos">
        <label>Telefono</label>
        <input type="integer" id="tel_id" />
      </div>
      <div className="datos">
        <label>Password</label>
        <input type="integer" id="pass_id" />
      </div>
      <div className="datos">
        <label>Confirmar Password</label>
        <input type="integer" id="cpass_id" />
      </div>
      <button onClick={""}>Registrarse</button>
        </form>
        </>
    )

}