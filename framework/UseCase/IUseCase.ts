
interface IUseCase {
    execute(payload: any, currentAccount?: any): Promise<any>;
}

export default IUseCase;
