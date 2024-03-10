interface IErrorMessage {
    message: string;
}
const ErrorMessage = ({ message }: IErrorMessage) => {
    return message ? (<p className="text-red-600 font-semibold text-sm">{message}</p>) : null;
}

export default ErrorMessage;
