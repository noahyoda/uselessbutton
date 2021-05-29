import './Button.css';

const ButtonActual = () => {
    const buttonCount = () => {
        return 1;
    }

    const mainButtonHandler = () => {
        console.log("bruh moment");
    }

    return(
        <div>
            <div className="redbutton" onClick={mainButtonHandler}/>
            <div className="count">{buttonCount()}</div>
            <div className="increment-up">
                <div className="triangle-up"></div>
            </div>
            <div className="increment-down">
                <div className="triangle-down"></div>
            </div>
        </div>
    );
};



export default ButtonActual;