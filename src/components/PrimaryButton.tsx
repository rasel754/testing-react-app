type PrimaryButtonProps ={actionType?:string};
const PrimaryButton = ({actionType="add"}:PrimaryButtonProps) => {
    return (
        <div>
            <button> click to {actionType}</button>
        </div>
    )
}


export default PrimaryButton