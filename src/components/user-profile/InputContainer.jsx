import classes from './InputContainer.module.css'
const InputContainer = (props) =>{

    return(
        <div className={classes['input-container']}>
        <h3>{props.title}</h3>
        <input type="text" title={props.title} value={props.content} />
    </div>
    )
}

export default InputContainer;