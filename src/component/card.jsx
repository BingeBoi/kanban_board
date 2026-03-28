

export function card_maker(obj,onDelete,edit_card){

    return (
        <> 
            <div 
            className="card"
            onDoubleClick={()=>{
                edit_card(obj.isEditing);
            }}>
            <div>
                <h5>Card Name</h5>
                <span>{obj.name}</span>
            </div>

            <div>
                <h5>Status</h5>
                <span>{obj.status}</span>
            </div>

            <div>
                <h5>id</h5>
                <span>{obj.id}</span>
            </div>

            <button onClick={onDelete}>Delete</button>
            </div>
        </>
    )
}