


const Lister = ({Colaborador}) => {
   
    return ( 
        <>
            <div className="container ">
                <div className="container formulario py-3">
                <h2 className='py-3' align="center"><strong>Lista de Colaboradores</strong></h2>
                   
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Nombre</th>
                                <th scope='col'>Correo</th>
                                {/* <th scope='col'>Estado</th> */}
                            </tr>
                        </thead>
                        
                        {
                            Colaborador.map(colaborador => (
                            <tbody key={colaborador.id}>
                                <tr>
                                    <th scope='row'><strong>{colaborador.id}</strong></th>
                                    <td ><strong>{colaborador.nombre}</strong></td>
                                    <td ><strong>{colaborador.correo}</strong></td>
                                    {/* <td><Buttons colours="btn-primary" title="Enviar" size="btn-sm" /></td> */}
                                </tr>
                            </tbody>

                        ))} 
                    </table>
                </div>
            </div>
        </>
     );
}
export default Lister;