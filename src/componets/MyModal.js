import React from 'react';

function MyModal (props) {
    return (
        <div>
            <div className='row title justify-content-between'>
                <h3 className=' col align-self-center'>AFAZERES</h3>
                <button type="button" className="btn btn-outline-light btn-lg" data-toggle="modal" data-target="#addItem">+</button>    
            </div>
            

            <div className="modal fade" id="addItem" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Adicionar a lista</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    Adicione um afazer a lista.
                </div>
                    {props.children}
                </div>
            </div>
            </div>            
        </div>

    )
}

export default MyModal